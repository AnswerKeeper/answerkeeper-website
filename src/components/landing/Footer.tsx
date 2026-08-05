export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">

        <div className="max-w-sm">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue text-sm font-bold text-white">
              A
            </span>

            <span className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-navy">
              AnswerKeeper
            </span>
          </a>

          <p className="mt-4 text-sm leading-relaxed text-navy-muted">
            AnswerKeeper helps plumbing and HVAC businesses answer every customer
            call, capture more leads, and book more jobs—without hiring a
            full-time receptionist.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Product
            </p>

            <ul className="mt-3 space-y-2">

              <li>
                <a href="/#features" className="text-sm text-navy-muted hover:text-navy">
                  Features
                </a>
              </li>

              <li>
                <a href="/#how-it-works" className="text-sm text-navy-muted hover:text-navy">
                  How It Works
                </a>
              </li>

              <li>
                <a href="/#benefits" className="text-sm text-navy-muted hover:text-navy">
                  Benefits
                </a>
              </li>

            </ul>
          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Company
            </p>

            <ul className="mt-3 space-y-2">

              <li>
                <a href="/about" className="text-sm text-navy-muted hover:text-navy">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="text-sm text-navy-muted hover:text-navy">
                  Contact
                </a>
              </li>

              <li>
                <a href="/privacy" className="text-sm text-navy-muted hover:text-navy">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms" className="text-sm text-navy-muted hover:text-navy">
                  Terms of Service
                </a>
              </li>

            </ul>

          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Contact
            </p>

            <ul className="mt-3 space-y-2">

              <li>
                
                  href="mailto:answerkeeper.app@gmail.com"
                  className="text-sm text-navy-muted hover:text-navy"
                >
                  answerkeeper.app@gmail.com
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
            CAC Registration No. 9746137 · Built for plumbing & HVAC businesses.
          </p>

        </div>
      </div>
    </footer>
  );
}