// Simulated blockchain integration for EduCrypto
// In a real implementation, this would connect to Morph testnet

export interface Transaction {
  hash: string
  from: string
  to: string
  amount: number
  reason: string
  timestamp: number
  status: "pending" | "confirmed" | "failed"
}

export interface Student {
  address: string
  name: string
  totalEarned: number
  achievements: Achievement[]
}

export interface Achievement {
  id: string
  type: "grade" | "attendance" | "quiz" | "milestone"
  reason: string
  amount: number
  date: string
  transactionHash: string
}

// Simulated smart contract functions
export class EduCryptoContract {
  private static instance: EduCryptoContract
  private transactions: Transaction[] = []
  private students: Map<string, Student> = new Map()

  private constructor() {
    // Initialize with sample data
    this.initializeSampleData()
  }

  public static getInstance(): EduCryptoContract {
    if (!EduCryptoContract.instance) {
      EduCryptoContract.instance = new EduCryptoContract()
    }
    return EduCryptoContract.instance
  }

  private initializeSampleData() {
    const sampleStudents = [
      {
        address: "0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4",
        name: "Alice Johnson",
        totalEarned: 220,
        achievements: [
          {
            id: "1",
            type: "grade" as const,
            reason: "Grade A in Mathematics",
            amount: 50,
            date: "2024-01-15",
            transactionHash: "0xabc123...",
          },
        ],
      },
    ]

    sampleStudents.forEach((student) => {
      this.students.set(student.address, student)
    })
  }

  // Simulate reward distribution
  async rewardStudent(
    studentAddress: string,
    amount: number,
    reason: string,
    type: Achievement["type"] = "grade",
  ): Promise<Transaction> {
    const transaction: Transaction = {
      hash: `0x${Math.random().toString(16).substr(2, 8)}...`,
      from: "0x0000000000000000000000000000000000000000", // Contract address
      to: studentAddress,
      amount,
      reason,
      timestamp: Date.now(),
      status: "pending",
    }

    this.transactions.push(transaction)

    // Simulate network delay
    setTimeout(() => {
      transaction.status = "confirmed"
      this.updateStudentBalance(studentAddress, amount, reason, type, transaction.hash)
    }, 2000)

    return transaction
  }

  private updateStudentBalance(
    address: string,
    amount: number,
    reason: string,
    type: Achievement["type"],
    transactionHash: string,
  ) {
    const student = this.students.get(address)
    if (student) {
      student.totalEarned += amount
      student.achievements.push({
        id: Date.now().toString(),
        type,
        reason,
        amount,
        date: new Date().toISOString().split("T")[0],
        transactionHash,
      })
    }
  }

  // Get student data
  getStudent(address: string): Student | undefined {
    return this.students.get(address)
  }

  // Get all students for leaderboard
  getAllStudents(): Student[] {
    return Array.from(this.students.values()).sort((a, b) => b.totalEarned - a.totalEarned)
  }

  // Get transaction history
  getTransactions(): Transaction[] {
    return this.transactions.sort((a, b) => b.timestamp - a.timestamp)
  }

  // Simulate wallet connection
  async connectWallet(): Promise<string> {
    // In real implementation, this would use MetaMask or WalletConnect
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockAddress = "0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4"
        resolve(mockAddress)
      }, 1000)
    })
  }

  // Check if wallet is connected
  isWalletConnected(): boolean {
    return typeof window !== "undefined" && !!localStorage.getItem("studentWallet")
  }

  // Get connected wallet address
  getConnectedWallet(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("studentWallet")
    }
    return null
  }
}

// Export singleton instance
export const eduCryptoContract = EduCryptoContract.getInstance()

// Utility functions for formatting
export const formatAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export const formatAmount = (amount: number): string => {
  return `${amount} EDU`
}

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString()
}
