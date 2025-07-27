import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Trophy, Coins, Users, Zap, Star, Sparkles, Rocket, Target } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating Icons */}
        <div className="absolute top-32 left-1/4 animate-bounce delay-300">
          <Coins className="h-8 w-8 text-yellow-400/60" />
        </div>
        <div className="absolute top-64 right-1/4 animate-bounce delay-700">
          <Trophy className="h-6 w-6 text-orange-400/60" />
        </div>
        <div className="absolute bottom-32 left-1/5 animate-bounce delay-1000">
          <Star className="h-7 w-7 text-pink-400/60" />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-75"></div>
              <GraduationCap className="relative h-10 w-10 text-white" />
            </div>
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
              EduCrypto
            </span>
          </div>
          <div className="flex space-x-4">
            <Link href="/leaderboard">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm">
                🏆 Leaderboard
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">The Future of Education is Here</span>
            <Sparkles className="h-5 w-5 text-yellow-400" />
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mb-6 leading-tight">
            EduCrypto
          </h1>
          <div className="text-2xl md:text-3xl font-bold text-white mb-4">
            Learn • Achieve • <span className="text-yellow-400">Earn</span>
          </div>
          <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            🚀 Transform your grades into <span className="text-yellow-400 font-bold">crypto rewards</span>! Every A+
            gets you closer to the moon! 🌙
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/student">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Rocket className="mr-3 h-6 w-6" />🎓 Start Earning Now!
              </Button>
            </Link>
            <Link href="/admin">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Users className="mr-3 h-6 w-6" />
                👨‍🏫 Teacher Portal
              </Button>
            </Link>
          </div>
        </div>

        {/* Gaming-Style Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-300/30 hover:border-purple-300/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative p-8 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">🏆 Epic Achievements</h3>
              <p className="text-purple-200 leading-relaxed">
                Turn every test score into treasure! Get crypto for grades, attendance streaks, and quiz victories!
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-blue-300/30 hover:border-blue-300/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative p-8 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-emerald-400 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <Zap className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">⚡ Blockchain Power</h3>
              <p className="text-blue-200 leading-relaxed">
                Powered by Morph testnet! Your achievements are secured on the blockchain forever!
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl border border-pink-300/30 hover:border-pink-300/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative p-8 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <Target className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Compete & Win</h3>
              <p className="text-pink-200 leading-relaxed">
                Climb the leaderboards! Battle classmates for the top spot and earn legendary status!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gaming-Style How It Works */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Level Up Your Education! 🎮
            </h2>
            <p className="text-xl text-purple-200">Follow these epic quests to start earning crypto!</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Connect Wallet",
                desc: "Link your MetaMask for epic rewards!",
                icon: "🔗",
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "2",
                title: "Complete Quests",
                desc: "Ace tests, perfect attendance, dominate quizzes!",
                icon: "⚔️",
                color: "from-green-500 to-emerald-500",
              },
              {
                step: "3",
                title: "Earn Crypto",
                desc: "Watch EDU tokens flow into your wallet!",
                icon: "💰",
                color: "from-yellow-500 to-orange-500",
              },
              {
                step: "4",
                title: "Become Legend",
                desc: "Top the leaderboards and claim your throne!",
                icon: "👑",
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Card className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white text-2xl font-bold mb-6 shadow-2xl`}
                    >
                      {item.step}
                    </div>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-purple-200 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-75 animate-pulse"></div>
            <Card className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/30 rounded-3xl p-12">
              <h2 className="text-4xl font-black text-white mb-4">Ready to Get Rich from Learning? 💎</h2>
              <p className="text-xl text-purple-200 mb-8">Join thousands of students already earning crypto rewards!</p>
              <Link href="/student">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-black px-12 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  🚀 START EARNING NOW! 🚀
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-12 mt-20 border-t border-white/10">
        <div className="text-center text-purple-300">
          <p className="text-lg">🎓 EduCrypto - Where Education Meets Innovation 🚀</p>
          <p className="text-sm mt-2 opacity-75">Powered by blockchain technology on Morph testnet</p>
        </div>
      </footer>
    </div>
  )
}
