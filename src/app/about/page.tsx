export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden border-t border-purple-200/50 bg-gradient-to-b from-purple-50 via-amber-50/30 to-indigo-50/50 py-16">
      {/* Tiny Light Stripe Pattern Outside Border */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-multiply" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(147, 51, 234, 0.12) 0px,
            rgba(147, 51, 234, 0.12) 16px,
            transparent 16px,
            transparent 32px
          )`
        }}
      />

      {/* Tiny Spiderweb / Micro-Mesh Dot Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.25) 1px, transparent 1px),
                            radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px'
        }}
      />

      {/* Glowing Ambient Background Orbs */}
      <div className="pointer-events-none absolute -left-20 top-20 z-0 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 z-0 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-purple-100 bg-white/90 p-8 shadow-xl shadow-purple-950/5 backdrop-blur-md sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-700">
            Company
          </p>

          <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Helping Home Service Businesses Answer Every Customer Call
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            AnswerKeeper is a virtual call answering platform built for plumbing,
            HVAC, and other home service businesses that lose customers simply
            because nobody was available to answer the phone.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Our Mission
              </h2>
              <p className="mt-2">
                Help service businesses capture every legitimate customer call,
                respond professionally, and convert more callers into booked jobs.
              </p>
              <p className="mt-2 font-medium text-slate-800">
                Missing calls shouldn't mean missing revenue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Why We Built AnswerKeeper
              </h2>
              <p className="mt-2">
                Home service professionals spend most of their day on job sites—not
                behind a desk answering phones.
              </p>
              <p className="mt-2">
                When a homeowner calls during an emergency and nobody answers,
                they're likely to contact the next company on their list.
              </p>
              <p className="mt-2">
                AnswerKeeper was created to help small service businesses stay
                available to customers without hiring a full-time receptionist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Who We Serve
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                <li className="flex items-center gap-2 rounded-lg border border-purple-100 bg-purple-50/50 p-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  Plumbing businesses
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-purple-100 bg-purple-50/50 p-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  HVAC contractors
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-purple-100 bg-purple-50/50 p-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  Electrical contractors
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-purple-100 bg-purple-50/50 p-3 text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-purple-600" />
                  Home service businesses
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Current Status
              </h2>
              <p className="mt-2">
                AnswerKeeper is currently onboarding early users and continuously
                improving the platform based on real feedback from home service
                businesses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Company
              </h2>
              <p className="mt-2">
                AnswerKeeper is operated by AnswerKeeper Technologies, registered
                as a Business Name with the Corporate Affairs Commission (CAC),
                 — Registration No. 9746137.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Contact
              </h2>
              <p className="mt-2">
                For product questions or partnership enquiries, please contact us
                using the information provided on our Contact page.
              </p>
            </section>
          </div>

          {/* Founder Section Card */}
          <div className="mt-12 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50/80 via-white to-amber-50/40 p-6 sm:p-8">
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold text-slate-900">
              Meet the Founder
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Hi, I'm <strong className="font-semibold text-purple-900">Ibrahim Shuaib</strong>, the founder of AnswerKeeper.
            </p>

            <p className="mt-3 text-slate-600 leading-relaxed">
              I built AnswerKeeper after seeing how many plumbing, HVAC, and other home
              service businesses lose valuable jobs simply because nobody could answer
              the phone while technicians were busy serving customers.
            </p>

            <p className="mt-3 text-slate-600 leading-relaxed">
              My goal is simple: help every home service business capture every customer,
              every opportunity, and every emergency call—24 hours a day, 7 days a week.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}