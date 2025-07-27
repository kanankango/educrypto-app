"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { GraduationCap, Wallet, Trophy, TrendingUp, Home, Award, Coins, Crown, Target, Flame } from "lucide-react"
import Link from "next/link"

interface Achievement {
  id: string
  date: string
  reason: string
  amount: number
  type: "grade" | "attendance" | "quiz" | "milestone"
}

export default function StudentDashboard() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [totalEarned, setTotalEarned] = useState(0)
  const [achievements, setAchievements] = useState<Achievement[]>([])

  const sampleAchievements: Achievement[] = [
    { id: "1", date: "2024-01-15", reason: "Grade A in Mathematics", amount: 50, type: "grade" },
    { id: "2", date: "2024-01-14", reason: "Perfect Attendance - Week 2", amount: 25, type: "attendance" },
    { id: "3", date: "2024-01-12", reason: "Physics Quiz - 100%", amount: 30, type: "quiz" },
    { id: "4", date: "2024-01-10", reason: "Top 3 in Class", amount: 75, type: "milestone" },
    { id: "5", date: "2024-01-08", reason: "Chemistry Lab Excellence", amount: 40, type: "grade" },
  ]

  useEffect(() => {
    const savedWallet = localStorage.getItem("studentWallet")
    if (savedWallet) {
      setIsWalletConnected(true)
      setWalletAddress(savedWallet)
      setAchievements(sampleAchievements)
      setTotalEarned(sampleAchievements.reduce((sum, achievement) => sum + achievement.amount, 0))
    }
  }, [])

  const connectWallet = async () => {
    const mockAddress = "0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4"
    setWalletAddress(mockAddress)
    setIsWalletConnected(true)
    setAchievements(sampleAchievements)
    setTotalEarned(sampleAchievements.reduce((sum, achievement) => sum + achievement.amount, 0))
    localStorage.setItem("studentWallet", mockAddress)
  }

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "grade":
        return <Award className="h-5 w-5 text-blue-400" />
      case "attendance":
        return <TrendingUp className="h-5 w-5 text-green-400" />
      case "quiz":
        return <Trophy className="h-5 w-5 text-yellow-400" />
      case "milestone":
        return <Crown className="h-5 w-5 text-purple-400" />
      default:
        return <Award className="h-5 w-5" />
    }
  }

  const getAchievementEmoji = (type: string) => {
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
          </div>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            🎮 Student Command Center
          </h1>
          <p className="text-xl text-purple-200">Track your crypto earnings and level up your education game!</p>
        </div>

        {!isWalletConnected ? (
          <div className="max-w-md mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-300/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5"></div>
              <CardHeader className="relative text-center pb-4">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center">
                    <Wallet className="h-12 w-12 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-white">🔗 Connect Your Wallet</CardTitle>
              </CardHeader>
              <CardContent className="relative text-center">
                <p className="text-purple-200 mb-8 text-lg leading-relaxed">
                  Ready to start earning crypto for your achievements? Connect your MetaMask wallet and let the magic
                  begin! ✨
                </p>
                <Button
                  onClick={connectWallet}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Wallet className="mr-3 h-5 w-5" />🚀 Connect Wallet & Start Earning!
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-300/30 hover:border-green-300/60 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold text-white">🔗 Wallet Status</CardTitle>
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-75 animate-pulse"></div>
                    <Wallet className="relative h-6 w-6 text-green-400" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-2xl font-black text-green-400 mb-2">🟢 CONNECTED</div>
                  <p className="text-sm text-green-200 font-mono bg-black/20 rounded-lg px-3 py-2">
                    {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-300/30 hover:border-yellow-300/60 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold text-white">💰 Total Earned</CardTitle>
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-75 animate-pulse"></div>
                    <Coins className="relative h-6 w-6 text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-3xl font-black text-yellow-400 mb-2">{totalEarned} EDU</div>
                  <p className="text-sm text-yellow-200 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +15 EDU this week! 🔥
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-300/30 hover:border-purple-300/60 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold text-white">🏆 Achievements</CardTitle>
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-75 animate-pulse"></div>
                    <Trophy className="relative h-6 w-6 text-purple-400" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="text-3xl font-black text-purple-400 mb-2">{achievements.length}</div>
                  <p className="text-sm text-purple-200">Epic milestones unlocked! ⭐</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Achievements */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-blue-300/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center text-2xl font-bold text-white">
                  <Flame className="mr-3 h-7 w-7 text-orange-400" />🔥 Recent Epic Wins
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-white/5">
                        <TableHead className="text-blue-200 font-bold">Date</TableHead>
                        <TableHead className="text-blue-200 font-bold">Achievement</TableHead>
                        <TableHead className="text-blue-200 font-bold">Type</TableHead>
                        <TableHead className="text-right text-blue-200 font-bold">Reward</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {achievements.map((achievement) => (
                        <TableRow key={achievement.id} className="border-white/10 hover:bg-white/5 transition-colors">
                          <TableCell className="font-medium text-white">
                            {new Date(achievement.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center text-white">
                              {getAchievementIcon(achievement.type)}
                              <span className="ml-3">{achievement.reason}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={`font-bold ${
                                achievement.type === "grade"
                                  ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                                  : achievement.type === "attendance"
                                    ? "bg-green-500/20 text-green-300 border-green-400/30"
                                    : achievement.type === "quiz"
                                      ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                                      : "bg-purple-500/20 text-purple-300 border-purple-400/30"
                              }`}
                            >
                              {getAchievementEmoji(achievement.type)} {achievement.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-black text-yellow-400 text-lg">
                            +{achievement.amount} EDU 💰
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Achievement Milestones */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl border border-pink-300/30">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-rose-600/5"></div>
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Target className="mr-3 h-7 w-7 text-pink-400" />🎯 Quest Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Grade Master",
                      desc: "5 A grades",
                      progress: "3/5",
                      icon: "📚",
                      color: "from-blue-500 to-cyan-500",
                      completed: 3,
                      total: 5,
                    },
                    {
                      title: "Attendance Hero",
                      desc: "30 days streak",
                      progress: "14/30",
                      icon: "📈",
                      color: "from-green-500 to-emerald-500",
                      completed: 14,
                      total: 30,
                    },
                    {
                      title: "Quiz Champion",
                      desc: "10 perfect scores",
                      progress: "1/10",
                      icon: "🏆",
                      color: "from-yellow-500 to-orange-500",
                      completed: 1,
                      total: 10,
                    },
                    {
                      title: "Crypto Collector",
                      desc: "500 EDU earned",
                      progress: `${totalEarned}/500`,
                      icon: "💎",
                      color: "from-purple-500 to-pink-500",
                      completed: totalEarned,
                      total: 500,
                    },
                  ].map((quest, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <Card className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                        <CardContent className="p-6 text-center">
                          <div
                            className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${quest.color} text-white text-2xl font-bold mb-4 shadow-2xl`}
                          >
                            {quest.icon}
                          </div>
                          <div className="font-bold text-white text-lg mb-2">{quest.title}</div>
                          <div className="text-sm text-gray-300 mb-3">{quest.desc}</div>
                          <div className="w-full bg-white/10 rounded-full h-3 mb-2">
                            <div
                              className={`h-3 rounded-full bg-gradient-to-r ${quest.color} transition-all duration-1000`}
                              style={{ width: `${Math.min((quest.completed / quest.total) * 100, 100)}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-white font-bold">{quest.progress} completed</div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
