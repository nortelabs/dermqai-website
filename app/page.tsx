import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Clock, Users, Shield, Smartphone, Stethoscope, TrendingUp, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/favicon.ico" alt="DermQ AI" className="w-8 h-8" />
            <span className="text-2xl font-bold text-gray-900">DermQ AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
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
                  Skip the <span className="text-emerald-600">36-day wait</span> for skin care
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get instant AI-powered skin condition analysis through your smartphone camera. Identify potential
                  issues early and get guided to appropriate care.
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

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
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

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Skin Care Crisis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Patients face critical barriers to dermatological care that put lives at risk
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-100 bg-red-50/50">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Long Wait Times</h3>
                <p className="text-gray-600 mb-4">
                  Average 36.5-day wait to see a dermatologist—the longest among all medical specialties
                </p>
                <div className="text-2xl font-bold text-red-600">36.5 days</div>
              </CardContent>
            </Card>

            <Card className="border-orange-100 bg-orange-50/50">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rising Disease Burden</h3>
                <p className="text-gray-600 mb-4">
                  90,365 new melanoma diagnoses and 8,224 deaths recorded in 2021 alone
                </p>
                <div className="text-2xl font-bold text-orange-600">8,224 deaths</div>
              </CardContent>
            </Card>

            <Card className="border-yellow-100 bg-yellow-50/50">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnostic Uncertainty</h3>
                <p className="text-gray-600 mb-4">
                  Primary care physicians are 13x less likely to correctly identify melanoma
                </p>
                <div className="text-2xl font-bold text-yellow-600">13x less</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>      

      

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The minds behind DermQ AI, dedicated to revolutionizing dermatology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
              <p className="mt-2 text-sm text-gray-500">
                A brief bio about the team member, their expertise, and their role in the company.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
              <p className="mt-2 text-sm text-gray-500">
                A brief bio about the team member, their expertise, and their role in the company.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Alex Johnson</h3>
              <p className="text-gray-600">Lead AI Researcher</p>
              <p className="mt-2 text-sm text-gray-500">
                A brief bio about the team member, their expertise, and their role in the company.
              </p>
            </div>
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
