"use client";

import { useState } from "react";

/* ─── SVG Icons (inline, no deps) ─── */
const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ─── Feature Icon Components ─── */
const TransactionIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);

const ChecklistIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const IntegrationIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.514a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 116.364 6.364l-1.757 1.757" />
  </svg>
);

const CommissionIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/* ─── FAQ Accordion ─── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-heading font-semibold text-lg text-navy">{q}</span>
        <ChevronDown open={open} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function PaperlessPipelineLanding() {
  return (
    <main className="overflow-x-hidden">
      {/* ━━━ NAVIGATION ━━━ */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#top" className="flex items-center gap-2">
              <img src="/pp-logo.svg" alt="Paperless Pipeline" className="h-9 w-9" />
              <span className="font-heading font-bold text-[#0082c8] text-lg">Paperless Pipeline</span>
            </a>



            {/* CTA button */}
            <div className="flex items-center">
              <a
                href="https://app.paperlesspipeline.com/accounts/register/"
                className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
              >
                Try It Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section id="top" className="pt-28 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="text-primary font-bold text-sm">1,000,000+</span>
              <span className="text-gray-600 text-sm">transactions closed in 17 years</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              The transaction management system brokerages{" "}
              <span className="text-primary">settle into for years</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Paperless Pipeline quietly supports millions of transactions without
              forcing you to change how your brokerage already works.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://app.paperlesspipeline.com/accounts/register/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary/25 text-lg"
              >
                Try a Sample Transaction
              </a>
              <a
                href="https://www.paperlesspipeline.com/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all text-lg"
              >
                Book a Demo
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckIcon /> No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon /> Free account setup
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon /> Unlimited users included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR ━━━ */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-3xl text-navy">1M+</div>
              <div className="text-gray-500 text-sm mt-1">Transactions Closed</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-navy">17+</div>
              <div className="text-gray-500 text-sm mt-1">Years in Business</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-navy">80K+</div>
              <div className="text-gray-500 text-sm mt-1">Real Estate Professionals</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-navy">1,500+</div>
              <div className="text-gray-500 text-sm mt-1">App Integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ WHO IT'S FOR ━━━ */}
      <section id="who-its-for" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Built for how real estate actually works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you run a brokerage, lead a team, or coordinate transactions, Pipeline adapts to your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Brokers */}
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mb-3">For Brokers &amp; Brokerages</h3>
              <p className="text-gray-600 mb-4">
                See the big picture in less time. Recruit, retain, and close more deals with simple transaction management software that your agents will actually use.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Transactions, commissions &amp; compliance</li>
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Unlimited users, locations &amp; storage</li>
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Detailed financial reporting</li>
              </ul>
            </div>

            {/* Teams */}
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mb-3">For Real Estate Teams</h3>
              <p className="text-gray-600 mb-4">
                Boost the team's performance. Give your team a central hub for managing every deal from listing to close, with plans based on monthly production.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Central hub for all team transactions</li>
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Plans based on monthly production</li>
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Real-time tracking &amp; reporting</li>
              </ul>
            </div>

            {/* TCs */}
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-navy mb-3">For Transaction Coordinators</h3>
              <p className="text-gray-600 mb-4">
                Save time and carry more deals. Easily manage all of your tasks with automated checklists, due dates, and document tracking.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Automated checklists &amp; reminders</li>
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Add your clients for free</li>
                <li className="flex items-start gap-2 text-sm text-gray-600"><CheckIcon /> Pipeline eSign built in</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FEATURES ━━━ */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              It's "best system ever" better
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real estate transaction management doesn't need to be frustrating and overly complicated. Paperless Pipeline is built for better transaction management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-5">
                <TransactionIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">Transaction Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transaction files are created in less than a minute with automatic task reminders. See every deal and manage your brokerage with ease from a single dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-5">
                <ChecklistIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">Powerful Checklists</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ditch cluttered paper checklists. Customize and automatically apply checklists based on deal type, side, location, and each separate stage or status.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-5">
                <CalendarIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">Automated Due Dates</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stay on track and in compliance with due dates that are automatically calculated and applied to tasks based on listing date, acceptance date, and more.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-5">
                <ShieldIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">Compliance &amp; Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Never miss an important document with instant notifications. Be audit-ready with complete transaction history, review logs, and free monthly backups.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-5">
                <IntegrationIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">1,500+ Integrations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamlessly connect to 1,500+ apps. Move lead stages in your CRM, pass financial info to accounting, send custom notifications, and more.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-5">
                <CommissionIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">Commission Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether agents are on splits, flat fees, tiers, or caps, the Commission Module simplifies the entire process. Instant statements and automated production reports.
              </p>
            </div>
          </div>

          {/* Additional features list */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="font-heading font-semibold text-lg text-navy mb-6 text-center">Also included with every plan</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Pipeline eSign",
                "Smart Forms",
                "Real-Time Tracking",
                "Custom Transaction Reports",
                "Separate Offices & Teams",
                "Flexible User Permissions",
                "10-Year Storage",
                "Free Monthly Backups",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckIcon /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ BEFORE/AFTER ━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              See the difference Pipeline makes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="font-heading font-bold text-red-600 text-sm uppercase tracking-wider mb-4">Before Pipeline</div>
              <ul className="space-y-3">
                {[
                  "Tasks and critical documents fall through the cracks",
                  "Agents complain about the process",
                  "Paperwork submitted haphazardly",
                  "No pulse on your real estate office",
                  "Time wasted on manual commission calculations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="font-heading font-bold text-green-600 text-sm uppercase tracking-wider mb-4">After Pipeline</div>
              <ul className="space-y-3">
                {[
                  "Agents actually use the system",
                  "Transaction files created in less than a minute",
                  "Task reminders are automatic",
                  "Admins easily manage every transaction",
                  "See every deal and grow your business with ease",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TESTIMONIALS ━━━ */}
      <section id="testimonials" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Trusted by real estate professionals
            </h2>
            <p className="text-gray-600 text-lg">80,000+ agents, brokers, and TCs across the US and Canada</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "It's so user friendly. It's easy to do. In real estate, you need to be able to record information and have that at your fingertips, and you can do that with Paperless Pipeline.",
                name: "Real Estate Broker",
              },
              {
                quote: "I can take more business now. I'm not stressing and missing things as much as I used to.",
                name: "Transaction Coordinator",
              },
              {
                quote: "This software is awesome for a real estate brokerage! It's brilliant. This software makes managing a brokerage so easy and seamless!",
                name: "Brokerage Owner",
              },
              {
                quote: "Paperless Pipeline is FANTASTIC!",
                name: "Real Estate Professional",
              },
              {
                quote: "The simplicity and proficiency is astounding. The Commission Module is a dream come true.",
                name: "Managing Broker",
              },
              {
                quote: "We've been using Paperless Pipeline for years and it just keeps getting better. The system works exactly the way we need it to.",
                name: "Real Estate Team Lead",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">"{t.quote}"</p>
                <div className="text-sm font-semibold text-navy">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PRICING ━━━ */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Usage-based pricing that grows with you
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pay only for your monthly production. Unlimited users with every plan. No setup fees, no annual contracts.
            </p>
          </div>

          {/* Pricing table */}
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden mb-12">
            <div className="grid grid-cols-2 bg-navy text-white font-heading font-semibold text-sm">
              <div className="px-6 py-4">New Monthly Transactions</div>
              <div className="px-6 py-4">Monthly Cost</div>
            </div>
            {[
              { txns: "5", price: "$65" },
              { txns: "10", price: "$130" },
              { txns: "25", price: "$175" },
              { txns: "40", price: "$220" },
              { txns: "80", price: "$305" },
              { txns: "150", price: "$390" },
              { txns: "250", price: "$495" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="px-6 py-4 font-medium text-navy">{row.txns} transactions</div>
                <div className="px-6 py-4 font-bold text-primary">{row.price}/mo</div>
              </div>
            ))}
            {/* Unlimited */}
            <div className="bg-primary-50 border-t border-primary/20 px-6 py-5">
              <div className="font-heading font-bold text-navy text-lg mb-1">Unlimited Plan: $675/month</div>
              <p className="text-gray-600 text-sm">450 new transactions every month. Each additional transaction is just $1.50.</p>
            </div>
          </div>

          {/* What's included */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="font-heading font-bold text-navy mb-2">Free to Start</div>
              <p className="text-gray-500 text-sm">Free account setup, free admin training, free transaction import</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="font-heading font-bold text-navy mb-2">Unlimited Users</div>
              <p className="text-gray-500 text-sm">All admins, brokers, agents, and support staff included free</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="font-heading font-bold text-navy mb-2">No Contracts</div>
              <p className="text-gray-500 text-sm">No annual contracts, no setup fees, no hassles or gimmicks</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://app.paperlesspipeline.com/accounts/register/"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary/25 text-lg"
            >
              Start Your Free Trial
            </a>
            <p className="text-gray-500 text-sm mt-3">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>

      {/* ━━━ BENEFITS ━━━ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Why brokerages stay with Pipeline for years
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {[
              {
                title: "Keep your agents selling",
                desc: "Agents spend more time selling and less time navigating error-prone software. No extra work, learning, or workflow changes required.",
              },
              {
                title: "Keep your admins on track",
                desc: "Admins and transaction coordinators can streamline processes with features that improve speed and efficiency, supporting agents with 100% satisfaction.",
              },
              {
                title: "Reduce your overhead",
                desc: "Only pay for monthly production. 10 users or 10,000, costs are based on new transactions added during the month. Upgrade or downgrade anytime.",
              },
              {
                title: "Recruit and retain top agents",
                desc: "Pipeline fuels agent productivity and eliminates common pain points. Simplify onboarding and give agents access to their data anytime, anywhere.",
              },
              {
                title: "Stop things from falling through the cracks",
                desc: "Know exactly where every deal is at, anytime. See what's active, what tasks remain incomplete or overdue, and what's closing.",
              },
              {
                title: "Automatic reminders for everyone",
                desc: "Daily digest of what's due today, coming up tomorrow, and what's overdue. Automatic reminders for closings and expiring listings.",
              },
            ].map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            <FAQ
              q="Is it free to get started?"
              a="Yes! You can sign up for a free trial anytime without a credit card or commitment. You also get free account setup, free admin training, and free transaction import."
            />
            <FAQ
              q="Do we pay extra for more agents or admins?"
              a="No. Unlike many products, Paperless Pipeline does not charge based on how many users you add. 10 users or 10,000, the price is only based on monthly production. This adds up to significant savings as your company grows."
            />
            <FAQ
              q="How is monthly production calculated?"
              a="When you start working on a deal (whether it's a coming soon property, an active listing, or a new sale), it counts once in the month you created it. Once created, it won't count again, even when the status changes."
            />
            <FAQ
              q="What is the Commission Module?"
              a="A simple way to calculate agent commissions. Give your agents access to their financial production data with instant commission statements, PDF and spreadsheet reports, and automated monthly production emails showing monthly and YTD figures."
            />
            <FAQ
              q="Is there a contract or commitment?"
              a="No. Paperless Pipeline has no annual contracts. You can downgrade to a lower plan or cancel at any time. Free to try is nice. Free to cancel is even better."
            />
            <FAQ
              q="What if we need a longer trial?"
              a="No problem. Paperless Pipeline is happy to give you more time to test with your agents and admins. Just let them know and they'll extend your trial."
            />
          </div>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━ */}
      <section className="py-20 bg-gradient-to-br from-navy to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
            Get started today with free account setup
          </h2>
          <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto">
            Set up a free trial of Paperless Pipeline and get your account customized and set up completely free -- without a credit card or commitment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://app.paperlesspipeline.com/accounts/register/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg text-lg"
            >
              Start Your Free Trial
            </a>
            <a
              href="https://www.paperlesspipeline.com/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:border-white/60 transition-all text-lg"
            >
              Schedule a Demo
            </a>
          </div>

          {/* What's included with setup */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-primary-200">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Locations &amp; users
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Transaction statuses
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Checklist workflows
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Company settings
            </span>
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Brand */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="/pp-logo.svg" alt="Paperless Pipeline" className="h-9 w-9 brightness-0 invert" />
              <span className="font-heading font-bold text-white text-lg">Paperless Pipeline</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
              The first and simplest real estate transaction and commission management system that agents and brokers actually enjoy using.
            </p>
            
            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-500 text-sm">© 2024 Paperless Pipeline. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
