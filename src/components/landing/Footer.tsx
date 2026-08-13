export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">

        <div className="max-w-sm">
          <a href="/" className="group inline-flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue text-sm font-bold text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
              A
            </span>

            <span className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-navy transition-colors group-hover:text-blue">
              AnswerKeeper
            </span>
          </a>

          <p className="mt-4 text-sm leading-relaxed text-navy-muted">
            AnswerKeeper helps plumbing and HVAC businesses answer every customer
            call, capture more leads, and book more jobs—without hiring a
            full-time receptionist.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Product
            </p>

            <ul className="mt-3 space-y-2">

              <li>
                <a
                  href="/#features"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="/#how-it-works"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="/#benefits"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  Benefits
                </a>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  Pricing
                </a>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Company
            </p>

            <ul className="mt-3 space-y-2">

              <li>
                <a
                  href="/about"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Legal
            </p>

            <ul className="mt-3 space-y-2">

              <li>
                <a
                  href="/privacy"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="/refund-policy"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  Refund Policy
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Contact
            </p>

            <ul className="mt-3 space-y-2">

              <li>
                <a
                  href="mailto:support@answerkeeper.app"
                  className="inline-block text-sm text-navy-muted transition-all duration-200 hover:translate-x-0.5 hover:text-navy"
                >
                  support@answerkeeper.app
                </a>
              </li>

              <li className="text-sm text-navy-muted">
                Status: Early Access
              </li>

            </ul>
          </div>

        </div>

      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-navy-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">

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