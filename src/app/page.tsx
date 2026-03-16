/* ─── SVG Icons (inline, no deps) ─── */
const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const DollarIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

/* ─── MAIN PAGE ─── */
export default function PaperlessPipelineLanding() {
  return (
    <main className="min-h-screen bg-white">
      {/* ━━━ HERO SECTION ━━━ */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Social proof badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-8 shadow-sm">
              <span className="text-primary font-bold text-sm">Trusted by 9,000+ users</span>
              <span className="text-gray-600 text-sm">for 17 years</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Simple & affordable alternative to{" "}
              <span className="text-primary">Dotloop & SkySlope</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Real estate transaction management that actually works without the complexity, annual contracts, or sky-high prices. Month-to-month pricing starting at just $65/month.
            </p>

            {/* Primary CTA */}
            <div className="mb-12">
              <a
                href="https://app.paperlesspipeline.com/accounts/register/"
                className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary/25 text-xl"
              >
                Start Free Trial
              </a>
              <p className="text-gray-500 text-sm mt-3">14-day free trial • No credit card required • No annual contracts</p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <CheckIcon /> No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon /> Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon /> Month-to-month pricing
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon /> No annual contracts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ PRODUCT INTERFACE SHOWCASE ━━━ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              See why agents actually love using Pipeline
            </h2>
            <p className="text-gray-600 text-lg">Clean, simple interface that gets out of your way</p>
          </div>

          {/* Product screenshot placeholder */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mx-auto max-w-5xl">
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="p-8">
              <div className="bg-primary-50 border border-primary/20 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">Transaction Dashboard</h3>
                <p className="text-gray-600 text-sm">Simple, clean interface that shows all your deals at a glance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ VS COMPETITION ━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Why agents switch from Dotloop & SkySlope
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Cost */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <DollarIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">More Affordable</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                No annual contracts. Month-to-month pricing starting at $65/month. Only pay for what you use.
              </p>
              <div className="text-xs text-gray-500">
                <span className="line-through">Dotloop: $1,200+/year</span><br />
                <span className="text-primary font-semibold">Pipeline: $65/month</span>
              </div>
            </div>

            {/* Simplicity */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ClockIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">Actually Simple</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                No learning curve. Agents can start using it immediately without training or complicated workflows.
              </p>
              <div className="text-xs text-gray-500">
                Transaction files created in under 60 seconds
              </div>
            </div>

            {/* Reliability */}
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon />
              </div>
              <h3 className="font-heading font-semibold text-lg text-navy mb-3">Proven Reliable</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                17 years in business. 1,000,000+ transactions closed. Agents trust us because we work.
              </p>
              <div className="text-xs text-gray-500">
                99.9% uptime • Free monthly backups
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ KEY BENEFITS ━━━ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Everything you need, none of the bloat
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {[
              "Transaction management that works in under 60 seconds",
              "Automatic checklists and due date reminders",
              "Built-in eSign (no third-party integrations needed)",
              "Commission tracking and automated statements", 
              "Document storage with 10-year retention",
              "Unlimited users included (agents, admins, TCs)",
              "Mobile app for agents on-the-go",
              "1,500+ integrations with popular tools"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TESTIMONIALS ━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
              Real agents, real results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "So much simpler than Dotloop. My agents actually use this system instead of complaining about it.",
                name: "Managing Broker",
                location: "Texas"
              },
              {
                quote: "We switched from SkySlope and saved $800/month. Pipeline does everything we need without the complexity.",
                name: "Team Leader", 
                location: "Florida"
              },
              {
                quote: "Finally, transaction management that gets out of my way. I can create a file in 30 seconds.",
                name: "Real Estate Agent",
                location: "California"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="text-sm">
                  <div className="font-semibold text-navy">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PRICING ━━━ */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Pay only for your monthly production. No annual contracts, no hidden fees.
          </p>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg max-w-md mx-auto mb-12">
            <div className="bg-primary text-white p-6 text-center">
              <h3 className="font-heading font-bold text-2xl mb-2">Month-to-Month</h3>
              <p className="text-primary-100">Only pay for what you use</p>
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-navy mb-2">Starting at $65<span className="text-lg text-gray-500">/month</span></div>
                <p className="text-gray-600 text-sm">For 5 transactions per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited users included",
                  "All features included", 
                  "Mobile app access",
                  "Built-in eSign",
                  "10-year document storage",
                  "Free monthly backups"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckIcon /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://app.paperlesspipeline.com/accounts/register/"
              className="inline-flex items-center px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary/25 text-xl"
            >
              Start Free Trial
            </a>
            <p className="text-gray-500 text-sm mt-3">14-day free trial • No credit card required</p>
          </div>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━ */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
            Ready to ditch the complexity?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Join 9,000+ real estate professionals who switched to the simple, affordable alternative to Dotloop and SkySlope.
          </p>

          <div className="mb-8">
            <a
              href="https://app.paperlesspipeline.com/accounts/register/"
              className="inline-flex items-center px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg text-xl"
            >
              Start Free Trial
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-blue-200">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}