import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Clock, Users, Shield, Smartphone, Stethoscope, TrendingUp, CheckCircle, Zap, FileText, BrainCircuit, Database, RefreshCw } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">DermQ AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your AI Dermatologist in Your Pocket
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get instant, professional-grade skin analysis anytime, anywhere.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
              </div>
            </div>

            <div className="flex items-center justify-center min-h-[320px]">
              {/* Video Placeholder */}
              <video
                  src="/mockvideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-[210px] md:max-w-[310px]"
                />
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Simple Steps to Skin Clarity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your path to understanding your skin health is just a few taps away.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg bg-white">
              <Camera className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Take or Upload Photo</h3>
              <p className="text-gray-600">Capture clear photos with our guided camera tool.</p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg bg-white">
              <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. AI Analysis</h3>
              <p className="text-gray-600">Advanced algorithms analyze your skin in under 30 seconds.</p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg bg-white">
              <FileText className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Get Results & Recommendations</h3>
              <p className="text-gray-600">Receive detailed analysis, recommendations, and next steps.</p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg bg-white">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Track Progress</h3>
              <p className="text-gray-600">Monitor changes over time with intelligent tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Everyone</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a patient, primary care physician, or specialist, DermQ AI serves your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-emerald-100">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Patients</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Monitor known lesions between appointments
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Get instant triage without waiting weeks
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Access care from anywhere
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardContent className="p-8">
                <Stethoscope className="w-12 h-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Primary Care</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Quick triage tool for suspicious lesions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Reduce unnecessary referrals
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Improve diagnostic confidence
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Underserved Communities</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Bridge specialist access gaps
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Reduce late-stage presentations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    Improve health equity
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="problem-solution" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Bridging the Gap in Dermatological Care</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 bg-red-50 border border-red-100 rounded-lg flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
              <p className="text-4xl font-bold text-red-600">67%</p>
              <p className="text-lg text-gray-600 mt-2">
                of people delay dermatologist visits due to long wait times and costs.
              </p>
            </div>
            <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-lg flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-lg text-gray-600">
                DermQ AI provides instant analysis, progress tracking, and professional guidance to help you take control of your skin health.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Technology Overview Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Powered by Advanced AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our technology is built on a foundation of extensive data and continuous improvement.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 bg-blue-50/50">
              <CardContent className="p-8">
                <BrainCircuit className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent AI</h3>
                <p className="text-gray-600">Our simple infographic shows our machine learning process.</p>
              </CardContent>
            </Card>
            <Card className="border-blue-100 bg-blue-50/50">
              <CardContent className="p-8">
                <Database className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Massive Training Data</h3>
                <p className="text-gray-600">Trained on 1M+ dermatologist-verified images for high accuracy.</p>
              </CardContent>
            </Card>
            <Card className="border-blue-100 bg-blue-50/50">
              <CardContent className="p-8">
                <RefreshCw className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
                <p className="text-gray-600">Our model improves its accuracy with every new analysis performed.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">&copy; 2025 DermQ AI. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">This is not a substitute for professional medical advice.</p>
        </div>
      </footer>
    </div>
  )
}
