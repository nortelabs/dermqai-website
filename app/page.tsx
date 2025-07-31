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
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="border-gray-300 text-lg px-8 py-4 bg-transparent">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">90,365</div>
                  <div className="text-sm text-gray-600">New melanoma cases yearly</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">36.5</div>
                  <div className="text-sm text-gray-600">Average wait days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">73%</div>
                  <div className="text-sm text-gray-600">Never consult a physician</div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center min-h-[320px]">
              {/* Video Placeholder */}
              <div className="w-full max-w-md aspect-video bg-gray-200 border-2 border-dashed border-emerald-400 rounded-2xl flex flex-col items-center justify-center shadow-md z-10">
                <svg className="w-16 h-16 text-emerald-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><polygon points="10,8 16,12 10,16" fill="currentColor" /></svg>
                <span className="text-gray-500 font-medium">Demo Video Coming Soon</span>
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl blur-3xl opacity-10 transform rotate-3 -z-10"></div>
            </div>
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

      {/* Detailed Workflow */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Image Capture Workflow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From capture to care guidance in under 30 seconds</p>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Smart Image Capture</h3>
                </div>
                <p className="text-lg text-gray-600">
                  Our intelligent camera interface guides you to capture the perfect image with real-time feedback on
                  lighting, positioning, and focus.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Automatic lighting optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Positioning guides and crosshairs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Image quality validation</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl mx-auto">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Detailed capture interface */}
                    <div className="bg-emerald-600 px-6 py-4 text-white">
                      <h4 className="font-semibold">Position Your Skin</h4>
                      <p className="text-emerald-100 text-sm">Center the area in the guide circle</p>
                    </div>
                    <div className="flex-1 bg-black relative">
                      <div className="absolute inset-6 border-2 border-emerald-400 rounded-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg opacity-60"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-20 h-20 border-2 border-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="absolute bottom-24 left-4 right-4 bg-black/80 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm">Image Quality</span>
                          <span className="text-emerald-400 text-sm font-medium">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-emerald-400 h-2 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 flex justify-center">
                      <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <Camera className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI-Powered Analysis</h3>
                </div>
                <p className="text-lg text-gray-600">
                  Our advanced AI model, trained on thousands of dermatological images, analyzes your photo in real-time
                  with dermatologist-level accuracy.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Pattern recognition in under 10 seconds</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Comparison against medical database</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Confidence scoring for each diagnosis</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 relative">
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl mx-auto">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    <div className="bg-emerald-600 px-6 py-4 text-white">
                      <h4 className="font-semibold">AI Analysis</h4>
                      <p className="text-emerald-100 text-sm">Processing your image...</p>
                    </div>
                    <div className="flex-1 p-6 flex flex-col items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-pink-200 to-orange-200 rounded-xl mb-8 relative">
                        <div className="absolute inset-0 border-2 border-emerald-300 rounded-xl animate-pulse"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <div className="w-24 h-24 relative mb-6">
                        <div className="absolute inset-0 border-4 border-emerald-200 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-transparent border-t-emerald-600 rounded-full animate-spin"></div>
                        <div className="absolute inset-4 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-emerald-600" />
                        </div>
                      </div>

                      <div className="w-full space-y-4">
                        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                          <span className="text-sm font-medium text-emerald-800">Image Processing</span>
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                          <span className="text-sm font-medium text-emerald-800">Pattern Analysis</span>
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <span className="text-sm font-medium text-yellow-800">Generating Report</span>
                          <div className="w-5 h-5 border-2 border-yellow-500 rounded-full animate-spin"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Personalized Care Guidance</h3>
                </div>
                <p className="text-lg text-gray-600">
                  Receive detailed results with risk assessment, possible conditions, and personalized recommendations
                  for next steps.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Risk level assessment with timeline</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Ranked list of possible conditions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-700">Direct connection to specialists</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl mx-auto">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    <div className="bg-emerald-600 px-6 py-4 text-white">
                      <h4 className="font-semibold">Your Results</h4>
                      <p className="text-emerald-100 text-sm">Analysis complete</p>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                          <span className="font-semibold text-yellow-800">Moderate Priority</span>
                        </div>
                        <p className="text-yellow-700 text-sm">Recommend evaluation within 2-4 weeks</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-3 text-sm">Most Likely Conditions:</h5>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <span className="text-sm font-medium text-gray-900">Seborrheic Keratosis</span>
                              <p className="text-xs text-gray-600">Benign skin growth</p>
                            </div>
                            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full font-medium">
                              68%
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <span className="text-sm font-medium text-gray-900">Benign Nevus</span>
                              <p className="text-xs text-gray-600">Common mole</p>
                            </div>
                            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full font-medium">
                              24%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-3 text-sm">Next Steps:</h5>
                        <div className="space-y-2">
                          <div className="flex items-start p-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                            <span className="text-sm text-gray-700">Schedule dermatologist appointment</span>
                          </div>
                          <div className="flex items-start p-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                            <span className="text-sm text-gray-700">Monitor for changes</span>
                          </div>
                          <div className="flex items-start p-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                            <span className="text-sm text-gray-700">Use sun protection</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-100 space-y-2">
                      <button className="w-full bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium">
                        Find Specialists Near You
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium">
                        Save & Share Results
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-white">&copy; 2025 DermQ AI. All rights reserved. This is not a substitute for professional medical advice.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
