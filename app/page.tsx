"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Clock, Users, Shield, Smartphone, Stethoscope, TrendingUp, CheckCircle, Zap, FileText, BrainCircuit, Database, RefreshCw } from "lucide-react"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xanbdrjy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">DermQ AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
            </a>
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
                <a href="#contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
                </a>
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
          <div className="relative grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-emerald-500 rounded-full mx-auto mb-4 relative z-10">
                  <Camera className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Upload Photo</h3>
                <p className="text-gray-600 px-2">Capture a clear photo using our guided in-app camera.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-emerald-500 rounded-full mx-auto mb-4 relative z-10">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. AI Analysis</h3>
                <p className="text-gray-600 px-2">Our algorithm analyzes your image in seconds.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-emerald-500 rounded-full mx-auto mb-4 relative z-10">
                  <FileText className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Get Results</h3>
                <p className="text-gray-600 px-2">Receive a detailed report and personalized recommendations.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-emerald-500 rounded-full mx-auto mb-4 relative z-10">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Track Progress</h3>
                <p className="text-gray-600 px-2">Monitor your skin's health over time with intelligent tracking.</p>
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
              <p className="text-lg text-gray-600 mb-6">
                DermQ AI provides instant analysis, progress tracking, and professional guidance to help you take control of your skin health.
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefit Highlights:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>
                  <span>Instant results in under 30 seconds</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📱</span>
                  <span>Anywhere, anytime convenience</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🎯</span>
                  <span>Professional-grade accuracy</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💰</span>
                  <span>Fraction of consultation costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" name="message" placeholder="How can we help?" rows={5} value={formData.message} onChange={handleChange} required />
              </div>
              <div className="text-center">
                <Button type="submit" size="lg" className="bg-emerald-600 hover:bg-emerald-700 w-48" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
                {status === 'success' && <p className="mt-4 text-emerald-600">Message Sent!</p>}
                {status === 'error' && <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 DermQ AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
