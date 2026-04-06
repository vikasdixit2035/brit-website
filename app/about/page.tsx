"use client";

import { useState } from "react";
import Link from "next/link";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Target,
  Lightbulb,
  CheckCircle2,
  Users,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Briefcase
} from "lucide-react";

export default function AboutPage() {
  const [banner, setBanner] = useState(true);

  return (
    <main className="bg-[#FAFAFA] min-h-screen font-sans text-gray-900 selection:bg-blue-200">
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      {/* 1. Hero Section */}
      <section
        className="text-center max-w-4xl mx-auto px-6"
        style={{ paddingTop: banner ? "160px" : "120px", paddingBottom: "80px" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100 shadow-sm">
          <Target className="w-4 h-4" /> About Brit Institute
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
          A Practical Approach to Careers in <span className="text-blue-700">Data, AI and Emerging Technologies</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
          We focus on building real-world skills that help learners transition into high-demand tech roles across the UK and beyond.
        </p>
      </section>

      {/* 2 & 3. Story (Our Approach) & Vision */}
      <section className="max-w-[1100px] mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Our Approach Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(29,78,216,0.08)] transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-700">Approach</span>
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-snug">
              Most learning platforms focus on content. We focus on outcomes.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Brit Institute was built around a simple idea: learning should lead to real career opportunities, not just certificates.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our programmes are designed to combine structured learning with practical application, so learners can build skills that are directly relevant to industry roles.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(29,78,216,0.08)] transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Preparing the <span className="text-indigo-600">Future Workforce</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The demand for skills in data analytics, data science, and AI continues to grow across industries.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to make these career paths accessible through clear learning pathways, practical training, and a focus on real-world application.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Credibility / What We Focus On */}
      <section className="bg-[#EFF6FF] py-20 px-6 mb-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-blue-700">Focus On</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bridge the gap between classroom theory and real-world execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: BookOpen, text: "Industry-relevant curriculum aligned with UK job roles" },
              { icon: Briefcase, text: "Hands-on projects and portfolio development" },
              { icon: Users, text: "Structured learning designed for working professionals" },
              { icon: Target, text: "Career-focused training approach" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-white rounded-2xl p-8 shadow-sm border border-blue-100 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2">10,000+</div>
              <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">Learners Trained</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">85%</div>
              <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">Career Transitions</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="max-w-[900px] mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Explore Our Programmes
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Start building skills for high-growth careers in data, AI and technology. Your transition into the tech industry begins here.
            </p>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-[16px] transition-all shadow-lg hover:-translate-y-1 hover:shadow-blue-500/30"
            >
              View Courses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}