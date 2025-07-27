"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, History, Home, Coins, Zap, Crown, Shield, Rocket } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface Reward {
  id: string
  studentAddress: string
  studentName: string
  amount: number
  reason: string
  date: string
  type: string
}

interface Student {
  address: string
  name: string
  totalEarned: number
}

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState("")
  const [rewardAmount, setRewardAmount] = useState("")
  const [rewardReason, setRewardReason] = useState("")
  const [rewardType, setRewardType] = useState("")
  const [rewards, setRewards] = useState<Reward[]>([])
  const { toast } = useToast()

  const students: Student[] = [
    { address: "0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4", name: "Alice Johnson", totalEarned: 220 },
    { address: "0x8ba1f109551bD432803012645Hac136c22C4C4C4", name: "Bob Smith", totalEarned: 185 },
    { address: "0x9cd2e20aBf5678901234567890123456789012C4", name: "Carol Davis", totalEarned: 165 },
    { address: "0xdef3456789012345678901234567890123456789", name: "David Wilson", totalEarned: 140 },
  ]

  const sampleRewards: Reward[] = [
    {
      id: "1",
      studentAddress: "0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4",
      studentName: "Alice Johnson",
      amount: 50,
      reason: "Grade A in Mathematics",
      date: "2024-01-15",
      type: "grade",
    },
    {
      id: "2",
      studentAddress: "0x8ba1f109551bD432803012645Hac136c22C4C4C4",
      studentName: "Bob Smith",
      amount: 30,
      reason: "Perfect Quiz Score",
      date: "2024-01-14",
      type: "quiz",
    },
    {
      id: "3",
      studentAddress: "0x9cd2e20aBf5678901234567890123456789012C4",
      studentName: "Carol Davis",
      amount: 25,
      reason: "Perfect Attendance",
      date: "2024-01-13",
      type: "attendance",
    },
  ]

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn")
    if (adminLoggedIn) {
      setIsLoggedIn(true)
      setRewards(sampleRewards)
    }
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem("adminLoggedIn", "true")
    setRewards(sampleRewards)
  }

  const handleRewardSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedStudent || !rewardAmount || !rewardReason || !rewardType) {
      toast({
        title: "⚠️ Missing Information",
        description: "Please fill in all fields to send the reward",
        variant: "destructive",
      })
      return
    }

    const student = students.find((s) => s.address === selectedStudent)
    if (!student) return

    const newReward: Reward = {
      id: Date.now().toString(),
      studentAddress: selectedStudent,
      studentName: student.name,
      amount: Number.parseInt(rewardAmount),
      reason: rewardReason,
      date: new Date().toISOString().split("T")[0],
      type: rewardType,
    }

    setRewards([newReward, ...rewards])

    setSelectedStudent("")
    setRewardAmount("")
    setRewardReason("")
    setRewardType("")

    toast({
      title: "🚀 Reward Sent Successfully!",
      description: `${rewardAmount} EDU sent to ${student.name} 💰`,
    })
  }

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case "grade":
        return "📚"
      case "attendance":
        return "📈"
      case "quiz":
        return "🏆"
      case "milestone":
        return "👑"
      default:
        return "⭐"
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <Card className="relative w-full max-w-md overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-300/30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5"></div>
          <CardHeader className="relative text-center pb-4">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-white">👨‍🏫 Teacher Portal</CardTitle>
            <p className="text-purple-200 mt-2">Access the reward command center</p>
          </CardHeader>
          <CardContent className="relative space-y-6">
            <div>
              <Label htmlFor="email" className="text-white font-bold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@school.edu"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-white font-bold">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>
            <Button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Rocket className="mr-2 h-5 w-5" />🚀 Launch Admin Panel
            </Button>
            <div className="text-center">
              <Link href="/" className="text-purple-300 hover:text-white transition-colors">
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-75"></div>
              <GraduationCap className="relative h-10 w-10 text-white" />
            </div>
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              EduCrypto
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/leaderboard">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm">
                🏆 Leaderboard
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => {
                setIsLoggedIn(false)
                localStorage.removeItem("adminLoggedIn")
              }}
              className="text-white border-white/20 hover:bg-white/10 backdrop-blur-sm"
            >
              Logout
            </Button>
          </div>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            👨‍🏫 Teacher Command Center
          </h1>
          <p className="text-xl text-purple-200">Reward your students and track their epic achievements!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Reward Form */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-300/30">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center text-2xl font-bold text-white">
                <Zap className="mr-3 h-7 w-7 text-yellow-400" />⚡ Issue Epic Reward
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <form onSubmit={handleRewardSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="student" className="text-white font-bold text-lg">
                    🎯 Select Student
                  </Label>
                  <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-green-400 focus:ring-green-400">
                      <SelectValue placeholder="Choose your champion" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {students.map((student) => (
                        <SelectItem
                          key={student.address}
                          value={student.address}
                          className="text-white hover:bg-gray-800"
                        >
                          <div className="flex flex-col">
                            <span className="font-bold">{student.name}</span>
                            <span className="text-xs text-gray-400 font-mono">
                              {student.address.slice(0, 6)}...{student.address.slice(-4)}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount" className="text-white font-bold text-lg">
                    💰 Reward Amount (EDU)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="50"
                    value={rewardAmount}
                    onChange={(e) => setRewardAmount(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-green-400 focus:ring-green-400 text-lg font-bold"
                  />
                </div>

                <div>
                  <Label htmlFor="type" className="text-white font-bold text-lg">
                    🏆 Achievement Type
                  </Label>
                  <Select value={rewardType} onValueChange={setRewardType}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-green-400 focus:ring-green-400">
                      <SelectValue placeholder="Select achievement type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem value="grade" className="text-white hover:bg-gray-800">
                        📚 Grade Achievement
                      </SelectItem>
                      <SelectItem value="quiz" className="text-white hover:bg-gray-800">
                        🏆 Quiz Performance
                      </SelectItem>
                      <SelectItem value="attendance" className="text-white hover:bg-gray-800">
                        📈 Attendance
                      </SelectItem>
                      <SelectItem value="milestone" className="text-white hover:bg-gray-800">
                        👑 Milestone
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="reason" className="text-white font-bold text-lg">
                    📝 Epic Achievement
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder="e.g., Absolutely crushed the Mathematics exam with an A+! 🔥"
                    value={rewardReason}
                    onChange={(e) => setRewardReason(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-green-400 focus:ring-green-400 min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Coins className="mr-3 h-6 w-6" />🚀 Send Reward to the Moon!
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Student Overview */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-blue-300/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center text-2xl font-bold text-white">
                <Crown className="mr-3 h-7 w-7 text-yellow-400" />👑 Student Champions
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-4">
                {students.map((student, index) => (
                  <div
                    key={student.address}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                          index === 0
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                            : index === 1
                              ? "bg-gradient-to-r from-gray-400 to-gray-600"
                              : index === 2
                                ? "bg-gradient-to-r from-amber-600 to-orange-600"
                                : "bg-gradient-to-r from-blue-500 to-indigo-500"
                        }`}
                      >
                        #{index + 1}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{student.name}</div>
                        <div className="text-sm text-gray-300 font-mono bg-black/20 rounded px-2 py-1">
                          {student.address.slice(0, 6)}...{student.address.slice(-4)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-yellow-400 text-xl">{student.totalEarned} EDU</div>
                      <div className="text-sm text-gray-300">Total Earned 💰</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Rewards */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-300/30 mt-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5"></div>
          <CardHeader className="relative">
            <CardTitle className="flex items-center text-2xl font-bold text-white">
              <History className="mr-3 h-7 w-7 text-pink-400" />📊 Recent Epic Rewards
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="text-purple-200 font-bold">Date</TableHead>
                    <TableHead className="text-purple-200 font-bold">Student Champion</TableHead>
                    <TableHead className="text-purple-200 font-bold">Epic Achievement</TableHead>
                    <TableHead className="text-purple-200 font-bold">Type</TableHead>
                    <TableHead className="text-right text-purple-200 font-bold">Reward</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rewards.map((reward) => (
                    <TableRow key={reward.id} className="border-white/10 hover:bg-white/5 transition-colors">
                      <TableCell className="font-medium text-white">
                        {new Date(reward.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="text-white">
                          <div className="font-bold text-lg">{reward.studentName}</div>
                          <div className="text-sm text-gray-300 font-mono bg-black/20 rounded px-2 py-1 inline-block">
                            {reward.studentAddress.slice(0, 6)}...{reward.studentAddress.slice(-4)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-white font-medium">{reward.reason}</TableCell>
                      <TableCell>
                        <Badge
                          className={`font-bold ${
                            reward.type === "grade"
                              ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                              : reward.type === "attendance"
                                ? "bg-green-500/20 text-green-300 border-green-400/30"
                                : reward.type === "quiz"
                                  ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                                  : "bg-purple-500/20 text-purple-300 border-purple-400/30"
                          }`}
                        >
                          {getTypeEmoji(reward.type)} {reward.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-black text-yellow-400 text-xl">
                        {reward.amount} EDU 💰
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
