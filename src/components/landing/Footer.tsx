export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-200/60 bg-white py-12 text-slate-700">
      {/* Background Glowing Ambient Orbs */}
      <div 
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"
      />
      <div 
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">

        <div className="max-w-sm">
          <a href="/" className="group inline-flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-sm font-bold text-white shadow-md shadow-purple-500/20 transition-transform duration-300 group-hover:scale-105">
              A
            </span>

            <span className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-purple-600">
              AnswerKeeper
            </span>
          </a>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            AnswerKeeper helps plumbing and HVAC businesses answer every customer
            call, capture more leads, and book more jobs—without hiring a
            full-time receptionist.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">
              Product
            </p>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/#features"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#benefits"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">
              Company
            </p>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/about"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">
              Legal
            </p>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-700">
              Contact
            </p>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:support@answerkeeper.app"
                  className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-0.5 hover:text-purple-600"
                >
                  support@answerkeeper.app
                </a>
              </li>
              <li className="text-sm text-slate-500">
                Status: Early Access
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div className="relative z-10 mt-12 border-t border-slate-200/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">

          <p>
            © {new Date().getFullYear()} AnswerKeeper Technologies. All rights reserved.
          </p>

          <p>
            CAC Registration No. 9746137 · Built for plumbing &amp; HVAC businesses.
          </p>

        </div>
      </div>
    </footer>
  );
}