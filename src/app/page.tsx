"use client";

import { useState } from "react";
import { useTracking } from "@/hooks/useTracking";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";

// Phone number for CTAs (will be replaced with client's actual number)
const PHONE = "(555) 123-4567";
const PHONE_HREF = "tel:5551234567";

// Dual CTA component
function DualCTA({ primary, href }: { primary: string; href: string }) {
  return (
    <div className="mt-10 flex flex-col items-center gap-3">
      <a href={href} className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">
        {primary}
      </a>
      <a href={PHONE_HREF} className="border-2 border-primary rounded-lg px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
        Or call: {PHONE}
      </a>
    </div>
  );
}

// Stats for social proof
const stats = [
  { number: "1M+", label: "Transactions Closed" },
  { number: "17", label: "Years in Business" },
  { number: "4.8★", label: "Customer Rating" },
  { number: "500+", label: "Brokerages Trust Us" },
];

// Features
const features = [
  {
    icon: "📋",
    title: "Automated Task Management",
    description: "Never miss a deadline with automated checklists and reminders for every transaction."
  },
  {
    icon: "📊",
    title: "Commission Tracking",
    description: "Instantly calculate and track commissions with built-in reporting tools."
  },
  {
    icon: "🔒",
    title: "Secure Document Storage",
    description: "Store all transaction documents securely in the cloud with easy access anywhere."
  },
  {
    icon: "📱",
    title: "Mobile App",
    description: "Manage transactions on-the-go with our intuitive mobile application."
  },
  {
    icon: "🔗",
    title: "MLS Integration",
    description: "Seamlessly connect with popular MLS systems and real estate tools."
  },
  {
    icon: "📈",
    title: "Performance Analytics",
    description: "Track your team's performance with detailed analytics and insights."
  },
];

// Testimonials
const testimonials = [
  {
    text: "This software is awesome for a real estate brokerage! It's brilliant. This software makes managing a brokerage so easy and seamless!",
    author: "Kaitlin T., Broker Owner"
  },
  {
    text: "I can take more business now. I'm not stressing and missing things as much as I used to.",
    author: "Megyn N., Transaction Coordinator"
  },
  {
    text: "Best system ever. The simplicity and proficiency is astounding.",
    author: "Monica B., Real Estate Agent"
  },
];

// FAQ items
const faqs = [
  {
    question: "How quickly can we get set up?",
    answer: "Most brokerages are up and running within 24-48 hours. Our onboarding team will guide you through the entire setup process."
  },
  {
    question: "Is there a contract or can we cancel anytime?",
    answer: "No long-term contracts required. You can cancel anytime with 30 days notice. We're confident you'll love the system."
  },
  {
    question: "What integrations do you support?",
    answer: "We integrate with all major MLS systems, DocuSign, Dotloop, and 50+ other real estate tools your team already uses."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use bank-level security with 256-bit SSL encryption. All data is backed up daily and stored in secure data centers."
  },
  {
    question: "Do you offer training and support?",
    answer: "Absolutely! We provide live training sessions, video tutorials, and 24/7 customer support to ensure your success."
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Initialize tracking with placeholder site key
  useTracking({
    siteKey: "PLACEHOLDER_SITE_KEY",
  });

  return (
    <>
      {/* Header: Logo + CTA only — NO nav links */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Paperless Pipeline
          </div>
          <div className="flex items-center gap-4">
            <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 border-2 border-primary rounded-lg px-4 py-2 font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
              {PHONE}
            </a>
            <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors">
              Get Free Demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Split layout with form on right */}
      <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Trusted by 500+ Real Estate Brokerages
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Streamline Your{" "}
              <span className="text-primary">Real Estate Transactions</span>{" "}
              in Minutes, Not Hours
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              The simple, powerful transaction management system that helps brokers and agents 
              close more deals faster. Join 1M+ successful transactions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors text-center">
                Start Free Trial
              </a>
              <a href={PHONE_HREF} className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors text-center">
                Call {PHONE}
              </a>
            </div>

            <div className="text-sm text-gray-500">
              ✓ No credit card required ✓ Setup in 24 hours ✓ Cancel anytime
            </div>
          </div>

          {/* Hero Form */}
          <div className="lg:pl-8">
            <LeadForm 
              ctaText="Get My Free Demo"
              budgetPrice="$99/month"
              className="max-w-md mx-auto lg:mx-0"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <Reveal>
        <section id="stats" className="py-16 bg-white border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Features Section */}
      <Reveal>
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need to <span className="text-primary">Close More Deals</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive platform handles every aspect of transaction management, 
                so you can focus on what matters most - your clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <DualCTA primary="Start My Free Trial" href="#contact" />
          </div>
        </section>
      </Reveal>

      {/* Testimonials */}
      <Reveal>
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Loved by <span className="text-primary">Real Estate Professionals</span>
              </h2>
              <p className="text-xl text-gray-600">
                See why thousands of agents and brokers trust us with their transactions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Reveal key={index} delay={index * 200}>
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                    <blockquote className="text-gray-700 mb-6 text-lg">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="font-semibold text-gray-900">
                      — {testimonial.author}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <DualCTA primary="Join These Happy Customers" href="#contact" />
          </div>
        </section>
      </Reveal>

      {/* FAQ Section */}
      <Reveal>
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-primary">Frequently</span> Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to the most common questions about our platform.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      <span className="text-primary text-2xl">
                        {openFaq === index ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <DualCTA primary="Still Have Questions? Let's Talk" href="#contact" />
          </div>
        </section>
      </Reveal>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Streamline Your Transactions?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Join thousands of real estate professionals who've simplified their workflow 
              and increased their productivity with our platform.
            </p>

            <div className="max-w-md mx-auto">
              <LeadForm 
                ctaText="Start My Free Demo"
                budgetPrice="$99/month"
                className="bg-white/95 text-gray-900"
              />
            </div>

            <div className="mt-12 text-lg opacity-90">
              Questions? Call us at{" "}
              <a href={PHONE_HREF} className="underline hover:no-underline">
                {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Legal Footer */}
      <footer className="py-6 text-center text-xs text-gray-500 bg-white border-t">
        © 2026 Paperless Pipeline. All rights reserved.{" "}
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-gray-700">Privacy Policy</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-gray-700">Terms of Service</a>
      </footer>

      {/* Floating Sticky CTA — REQUIRED */}
      <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
        <div className="bg-primary text-white p-4 rounded-xl shadow-2xl max-w-xs">
          <div className="text-sm font-semibold mb-3">Ready to get started?</div>
          <a href="#contact" className="block bg-white text-primary px-4 py-2 rounded-lg text-center font-semibold hover:bg-gray-100 transition-colors mb-2">
            Get Free Demo
          </a>
          <a href={PHONE_HREF} className="block text-center text-sm underline hover:no-underline">
            Or call {PHONE}
          </a>
        </div>
      </div>
    </>
  );
}