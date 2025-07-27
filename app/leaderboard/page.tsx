"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Trophy, Medal, Award, Home, Crown, Star, TrendingUp, Flame, Zap, Target } from "lucide-react"
import Link from "next/link"

interface Student {
  rank: number
  name: string
  address: string
  totalEarned: number
  achievements: number
  recentActivity: string
  avatar: string
  streak: number
}

export default function Leaderboard() {
  const [timeFilter, setTimeFilter] = useState("all")

  const students: Student[] = [
    {
      rank: 1,
      name: "Alice Johnson",
      address: "0x742d35Cc6634C0532925a3b8D4C2C4e4C4C4C4C4",
      totalEarned: 320,
      achievements: 12,
      recentActivity: "Grade A in Physics",
      avatar: "AJ",
      streak: 15,
    },
    {
      rank: 2,
      name: "Bob Smith",
      address: "0x8ba1f109551bD432803012645Hac136c22C4C4C4",
      totalEarned: 285,
      achievements: 10,
      recentActivity: "Perfect Quiz Score",
      avatar: "BS",
      streak: 12,
    },
    {
      rank: 3,
      name: "Carol Davis",
      address: "0x9cd2e20aBf5678901234567890123456789012C4",
      totalEarned: 265,
      achievements: 11,
      recentActivity: "30-day Attendance Streak",
      avatar: "CD",
      streak: 30,
    },
    {
      rank: 4,
      name: "David Wilson",
      address: "0xdef3456789012345678901234567890123456789",
      totalEarned: 240,
      achievements: 8,
      recentActivity: "Chemistry Lab Excellence",
      avatar: "DW",
      streak: 8,
    },
    {
      rank: 5,
      name: "Emma Brown",
      address: "0x123456789012345678901234567890123456789a",
      totalEarned: 220,
      achievements: 9,
      recentActivity: "Math Competition Winner",
      avatar: "EB",
      streak: 6,
    },
    {
      rank: 6,
      name: "Frank Miller",
      address: "0x234567890123456789012345678901234567890b",
      totalEarned: 195,
      achievements: 7,
      recentActivity: "History Essay Award",
      avatar: "FM",
      streak: 4,
    },
    {
      rank: 7,
      name: "Grace Lee",
      address: "0x345678901234567890123456789012345678901c",
      totalEarned: 180,
      achievements: 6,
      recentActivity: "Science Fair Participation",
      avatar: "GL",
      streak: 3,
    },
    {
      rank: 8,
      name: "Henry Taylor",
      address: "0x456789012345678901234567890123456789012d",
      totalEarned: 165,
      achievements: 5,
      recentActivity: "English Literature Quiz",
      avatar: "HT",
      streak: 2,
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-8 w-8 text-yellow-400" />
      case 2:
        return <Medal className="h-8 w-8 text-gray-300" />
      case 3:
        return <Award className="h-8 w-8 text-amber-500" />
      default:
        return <span className="text-2xl font-black text-white">#{rank}</span>
    }
  }

  const getRankGlow = (rank: number) => {
    if (rank === 1) return "shadow-2xl shadow-yellow-500/50"
    if (rank === 2) return "shadow-2xl shadow-gray-400/50"
    if (rank === 3) return "shadow-2xl shadow-amber-500/50"
    return "shadow-xl shadow-blue-500/25"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Epic Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating Trophy Icons */}
        <div className="absolute top-32 left-1/4 animate-bounce delay-300">
          <Trophy className="h-10 w-10 text-yellow-400/40" />
        </div>
        <div className="absolute top-64 right-1/4 animate-bounce delay-700">
          <Star className="h-8 w-8 text-pink-400/40" />
        </div>
        <div className="absolute bottom-32 left-1/5 animate-bounce delay-1000">
          <Crown className="h-9 w-9 text-purple-400/40" />
        </div>
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
            <Link href="/student">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm">
                🎓 Student Dashboard
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm">
                👨‍🏫 Admin
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
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-300/30 rounded-full px-8 py-3 mb-8">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <span className="text-white font-bold text-xl">HALL OF FAME</span>
            <Trophy className="h-8 w-8 text-yellow-400" />
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-6 leading-tight">
            🏆 LEADERBOARD
          </h1>
          <p className="text-2xl text-purple-200 font-bold">The ultimate crypto earning champions! 🚀</p>
        </div>

        {/* Epic Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
            {["all", "week", "month"].map((filter) => (
              <Button
                key={filter}
                variant={timeFilter === filter ? "default" : "ghost"}
                size="lg"
                onClick={() => setTimeFilter(filter)}
                className={`capitalize font-bold text-lg px-8 py-3 rounded-xl transition-all duration-300 ${
                  timeFilter === filter
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl transform scale-105"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {filter === "all"
                  ? "🌟 All Time Legends"
                  : `🔥 This ${filter.charAt(0).toUpperCase() + filter.slice(1)}`}
              </Button>
            ))}
          </div>
        </div>

        {/* Epic Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {students.slice(0, 3).map((student, index) => (
            <Card
              key={student.address}
              className={`group relative overflow-hidden transform hover:scale-105 transition-all duration-500 ${getRankGlow(student.rank)} ${
                index === 0
                  ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-300/50 order-2 md:order-1 scale-110"
                  : index === 1
                    ? "bg-gradient-to-br from-gray-400/20 to-slate-500/20 border-gray-300/50 order-1 md:order-0"
                    : "bg-gradient-to-br from-amber-500/20 to-orange-600/20 border-amber-300/50 order-3 md:order-2"
              } backdrop-blur-xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Rank Crown/Medal */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div
                  className={`p-3 rounded-full ${
                    index === 0
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                      : index === 1
                        ? "bg-gradient-to-r from-gray-400 to-gray-600"
                        : "bg-gradient-to-r from-amber-600 to-orange-600"
                  } shadow-2xl`}
                >
                  {getRankIcon(student.rank)}
                </div>
              </div>

              <CardHeader className="relative text-center pt-12 pb-4">
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-2xl shadow-2xl ${
                    index === 0
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                      : index === 1
                        ? "bg-gradient-to-r from-gray-500 to-slate-600"
                        : "bg-gradient-to-r from-amber-600 to-orange-600"
                  }`}
                >
                  {student.avatar}
                </div>
                <CardTitle className="text-2xl font-black text-white">{student.name}</CardTitle>
                <p className="text-sm text-gray-300 font-mono bg-black/30 rounded-lg px-3 py-1 inline-block">
                  {student.address.slice(0, 6)}...{student.address.slice(-4)}
                </p>
              </CardHeader>

              <CardContent className="relative text-center pb-8">
                <div className="space-y-4">
                  <div className="text-4xl font-black text-yellow-400">{student.totalEarned} EDU</div>

                  <div className="flex justify-center space-x-6 text-sm">
                    <div className="flex items-center text-white">
                      <Star className="h-5 w-5 mr-2 text-purple-400" />
                      <span className="font-bold">{student.achievements} achievements</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Flame className="h-5 w-5 mr-2 text-orange-400" />
                      <span className="font-bold">{student.streak} day streak</span>
                    </div>
                  </div>

                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Latest Epic Win:</div>
                    <div className="text-sm text-white font-bold">{student.recentActivity}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Epic Rankings */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-300/30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5"></div>
          <CardHeader className="relative">
            <CardTitle className="flex items-center text-3xl font-black text-white">
              <TrendingUp className="mr-4 h-8 w-8 text-green-400" />🚀 Full Battle Rankings
            </CardTitle>
          </CardHeader>
          <CardContent className="relative">
            <div className="space-y-4">
              {students.map((student) => (
                <div
                  key={student.address}
                  className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                    student.rank <= 3
                      ? "bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-300/30 hover:border-yellow-300/60"
                      : "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-300/30 hover:border-blue-300/60"
                  } backdrop-blur-sm hover:shadow-2xl`}
                >
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center justify-center w-16 h-16">
                      {student.rank <= 3 ? (
                        <div
                          className={`p-3 rounded-full ${
                            student.rank === 1
                              ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                              : student.rank === 2
                                ? "bg-gradient-to-r from-gray-500 to-slate-600"
                                : "bg-gradient-to-r from-amber-600 to-orange-600"
                          } shadow-xl`}
                        >
                          {getRankIcon(student.rank)}
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
                          <span className="text-2xl font-black text-white">#{student.rank}</span>
                        </div>
                      )}
                    </div>

                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl shadow-xl ${
                        student.rank === 1
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                          : student.rank === 2
                            ? "bg-gradient-to-r from-gray-500 to-slate-600"
                            : student.rank === 3
                              ? "bg-gradient-to-r from-amber-600 to-orange-600"
                              : "bg-gradient-to-r from-indigo-500 to-purple-500"
                      }`}
                    >
                      {student.avatar}
                    </div>

                    <div>
                      <div className="font-black text-white text-xl">{student.name}</div>
                      <div className="text-sm text-gray-300 font-mono bg-black/30 rounded px-3 py-1 inline-block mb-2">
                        {student.address.slice(0, 6)}...{student.address.slice(-4)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-purple-300">
                          <Star className="h-4 w-4 mr-1" />
                          {student.achievements} achievements
                        </div>
                        <div className="flex items-center text-orange-300">
                          <Flame className="h-4 w-4 mr-1" />
                          {student.streak} day streak
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-2">Latest: {student.recentActivity}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-black text-yellow-400 mb-2">{student.totalEarned} EDU</div>
                    <Badge
                      className={`text-lg font-bold px-4 py-2 ${
                        student.rank === 1
                          ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/50"
                          : student.rank === 2
                            ? "bg-gray-500/20 text-gray-300 border-gray-400/50"
                            : student.rank === 3
                              ? "bg-amber-500/20 text-amber-300 border-amber-400/50"
                              : "bg-blue-500/20 text-blue-300 border-blue-400/50"
                      }`}
                    >
                      {student.rank <= 3
                        ? student.rank === 1
                          ? "👑 LEGEND"
                          : student.rank === 2
                            ? "🥈 CHAMPION"
                            : "🥉 HERO"
                        : `#${student.rank} WARRIOR`}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Epic Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-300/30 hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-orange-600/5"></div>
            <CardContent className="relative p-8 text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <Trophy className="relative h-12 w-12 text-yellow-400 mx-auto" />
              </div>
              <div className="text-4xl font-black text-white mb-2">8</div>
              <div className="text-lg text-yellow-200 font-bold">🏆 Active Champions</div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-300/30 hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5"></div>
            <CardContent className="relative p-8 text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <Zap className="relative h-12 w-12 text-green-400 mx-auto" />
              </div>
              <div className="text-4xl font-black text-white mb-2">1,870</div>
              <div className="text-lg text-green-200 font-bold">💰 Total EDU Distributed</div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-300/30 hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5"></div>
            <CardContent className="relative p-8 text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <Target className="relative h-12 w-12 text-purple-400 mx-auto" />
              </div>
              <div className="text-4xl font-black text-white mb-2">68</div>
              <div className="text-lg text-purple-200 font-bold">⭐ Epic Achievements</div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-75 animate-pulse"></div>
            <Card className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/30 rounded-3xl p-12">
              <h2 className="text-4xl font-black text-white mb-4">Ready to Climb the Ranks? 🚀</h2>
              <p className="text-xl text-purple-200 mb-8">Join the battle and earn your place among the legends!</p>
              <Link href="/student">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-black px-12 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  🎮 START YOUR JOURNEY! 🎮
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
