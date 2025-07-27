import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Play, Code, Wallet, Trophy, Users, Home } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">EduCrypto</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How EduCrypto Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch this demo to understand how students earn crypto rewards for academic achievements
          </p>
        </div>

        {/* Demo Video Placeholder */}
        <Card className="max-w-4xl mx-auto mb-12">
          <CardContent className="p-0">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-semibold mb-2">Demo Video</h3>
                <p className="text-gray-300">Click to watch how EduCrypto transforms education</p>
              </div>
              <Button size="lg" className="absolute inset-0 w-full h-full bg-transparent hover:bg-black/20 border-0">
                <span className="sr-only">Play demo video</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Step-by-step Guide */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle className="text-lg">1. Connect Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Students connect their MetaMask wallet to the platform</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">2. Achieve Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Complete assignments, ace tests, maintain perfect attendance</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle className="text-lg">3. Get Rewarded</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Teachers issue crypto rewards directly to student wallets</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">4. Compete</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Climb leaderboards and earn recognition among peers</p>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Technical Implementation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Smart Contract Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ERC-20 token standard (EDU tokens)</li>
                  <li>• Role-based access control for teachers</li>
                  <li>• Achievement tracking and history</li>
                  <li>• Automated leaderboard generation</li>
                  <li>• Emergency controls and security measures</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Blockchain Integration</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Deployed on Morph testnet (EVM compatible)</li>
                  <li>• MetaMask wallet integration</li>
                  <li>• Real-time transaction tracking</li>
                  <li>• Transparent reward distribution</li>
                  <li>• Immutable achievement records</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Data */}
        <Card>
          <CardHeader>
            <CardTitle>Sample Test Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Alice Johnson</h4>
                <p className="text-sm text-blue-700">Top performer with 320 EDU earned</p>
                <p className="text-xs text-blue-600 font-mono">0x742d...C4C4</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">Bob Smith</h4>
                <p className="text-sm text-green-700">Consistent achiever with 285 EDU</p>
                <p className="text-xs text-green-600 font-mono">0x8ba1...C4C4</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900">Carol Davis</h4>
                <p className="text-sm text-purple-700">Rising star with 265 EDU</p>
                <p className="text-xs text-purple-600 font-mono">0x9cd2...12C4</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Education?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/student">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Try Student Dashboard
              </Button>
            </Link>
            <Link href="/admin">
              <Button size="lg" variant="outline">
                Explore Admin Panel
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
