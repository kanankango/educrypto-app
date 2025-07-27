// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title EduCrypto
 * @dev Smart contract for educational crypto rewards system
 * Deployed on Morph testnet (EVM compatible)
 */
contract EduCrypto is ERC20, Ownable, ReentrancyGuard {
    
    // Events
    event StudentRewarded(
        address indexed student,
        uint256 amount,
        string reason,
        address indexed rewardedBy,
        uint256 timestamp
    );
    
    event TeacherAdded(address indexed teacher, address indexed addedBy);
    event TeacherRemoved(address indexed teacher, address indexed removedBy);
    
    // Structs
    struct Achievement {
        uint256 amount;
        string reason;
        address rewardedBy;
        uint256 timestamp;
        AchievementType achievementType;
    }
    
    enum AchievementType {
        GRADE,
        ATTENDANCE,
        QUIZ,
        MILESTONE
    }
    
    // State variables
    mapping(address => bool) public authorizedTeachers;
    mapping(address => Achievement[]) public studentAchievements;
    mapping(address => uint256) public totalStudentEarnings;
    
    address[] public allStudents;
    mapping(address => bool) public isStudent;
    
    uint256 public totalRewardsDistributed;
    uint256 public constant MAX_REWARD_AMOUNT = 1000 * 10**18; // 1000 EDU max per reward
    
    // Modifiers
    modifier onlyAuthorizedTeacher() {
        require(authorizedTeachers[msg.sender] || msg.sender == owner(), "Not authorized to reward students");
        _;
    }
    
    modifier validStudent(address student) {
        require(student != address(0), "Invalid student address");
        _;
    }
    
    modifier validRewardAmount(uint256 amount) {
        require(amount > 0 && amount <= MAX_REWARD_AMOUNT, "Invalid reward amount");
        _;
    }
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply * 10**decimals());
        authorizedTeachers[msg.sender] = true;
    }
    
    /**
     * @dev Add a teacher/admin who can reward students
     * @param teacher Address of the teacher to add
     */
    function addTeacher(address teacher) external onlyOwner {
        require(teacher != address(0), "Invalid teacher address");
        require(!authorizedTeachers[teacher], "Teacher already authorized");
        
        authorizedTeachers[teacher] = true;
        emit TeacherAdded(teacher, msg.sender);
    }
    
    /**
     * @dev Remove a teacher's authorization
     * @param teacher Address of the teacher to remove
     */
    function removeTeacher(address teacher) external onlyOwner {
        require(authorizedTeachers[teacher], "Teacher not authorized");
        
        authorizedTeachers[teacher] = false;
        emit TeacherRemoved(teacher, msg.sender);
    }
    
    /**
     * @dev Reward a student with EDU tokens
     * @param student Address of the student to reward
     * @param amount Amount of EDU tokens to reward
     * @param reason Reason for the reward
     * @param achievementType Type of achievement
     */
    function rewardStudent(
        address student,
        uint256 amount,
        string memory reason,
        AchievementType achievementType
    ) 
        external 
        onlyAuthorizedTeacher 
        validStudent(student) 
        validRewardAmount(amount) 
        nonReentrant 
    {
        require(bytes(reason).length > 0, "Reason cannot be empty");
        require(balanceOf(address(this)) >= amount, "Insufficient contract balance");
        
        // Add student to list if first time
        if (!isStudent[student]) {
            allStudents.push(student);
            isStudent[student] = true;
        }
        
        // Create achievement record
        Achievement memory newAchievement = Achievement({
            amount: amount,
            reason: reason,
            rewardedBy: msg.sender,
            timestamp: block.timestamp,
            achievementType: achievementType
        });
        
        // Update student records
        studentAchievements[student].push(newAchievement);
        totalStudentEarnings[student] += amount;
        totalRewardsDistributed += amount;
        
        // Transfer tokens to student
        _transfer(address(this), student, amount);
        
        emit StudentRewarded(student, amount, reason, msg.sender, block.timestamp);
    }
    
    /**
     * @dev Get student's achievement history
     * @param student Address of the student
     * @return Array of achievements
     */
    function getStudentAchievements(address student) 
        external 
        view 
        returns (Achievement[] memory) 
    {
        return studentAchievements[student];
    }
    
    /**
     * @dev Get total number of achievements for a student
     * @param student Address of the student
     * @return Number of achievements
     */
    function getStudentAchievementCount(address student) 
        external 
        view 
        returns (uint256) 
    {
        return studentAchievements[student].length;
    }
    
    /**
     * @dev Get all students who have received rewards
     * @return Array of student addresses
     */
    function getAllStudents() external view returns (address[] memory) {
        return allStudents;
    }
    
    /**
     * @dev Get leaderboard data (top students by earnings)
     * @param limit Maximum number of students to return
     * @return students Array of student addresses
     * @return earnings Array of corresponding earnings
     */
    function getLeaderboard(uint256 limit) 
        external 
        view 
        returns (address[] memory students, uint256[] memory earnings) 
    {
        uint256 studentCount = allStudents.length;
        if (limit > studentCount) {
            limit = studentCount;
        }
        
        // Create arrays for sorting
        address[] memory tempStudents = new address[](studentCount);
        uint256[] memory tempEarnings = new uint256[](studentCount);
        
        for (uint256 i = 0; i < studentCount; i++) {
            tempStudents[i] = allStudents[i];
            tempEarnings[i] = totalStudentEarnings[allStudents[i]];
        }
        
        // Simple bubble sort (for small datasets)
        for (uint256 i = 0; i < studentCount - 1; i++) {
            for (uint256 j = 0; j < studentCount - i - 1; j++) {
                if (tempEarnings[j] < tempEarnings[j + 1]) {
                    // Swap earnings
                    uint256 tempEarning = tempEarnings[j];
                    tempEarnings[j] = tempEarnings[j + 1];
                    tempEarnings[j + 1] = tempEarning;
                    
                    // Swap students
                    address tempStudent = tempStudents[j];
                    tempStudents[j] = tempStudents[j + 1];
                    tempStudents[j + 1] = tempStudent;
                }
            }
        }
        
        // Return top students
        students = new address[](limit);
        earnings = new uint256[](limit);
        
        for (uint256 i = 0; i < limit; i++) {
            students[i] = tempStudents[i];
            earnings[i] = tempEarnings[i];
        }
    }
    
    /**
     * @dev Fund the contract with EDU tokens for rewards
     * @param amount Amount of tokens to fund
     */
    function fundContract(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than 0");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        
        _transfer(msg.sender, address(this), amount);
    }
    
    /**
     * @dev Emergency withdraw function for owner
     * @param amount Amount to withdraw
     */
    function emergencyWithdraw(uint256 amount) external onlyOwner {
        require(amount <= balanceOf(address(this)), "Insufficient contract balance");
        _transfer(address(this), msg.sender, amount);
    }
    
    /**
     * @dev Get contract statistics
     * @return totalStudents Total number of students
     * @return totalRewards Total rewards distributed
     * @return contractBalance Current contract balance
     */
    function getContractStats() 
        external 
        view 
        returns (
            uint256 totalStudents,
            uint256 totalRewards,
            uint256 contractBalance
        ) 
    {
        return (
            allStudents.length,
            totalRewardsDistributed,
            balanceOf(address(this))
        );
    }
}
