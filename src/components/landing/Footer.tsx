export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue text-sm font-bold text-white">
              A
            </span>
            <span className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-navy">
              AnswerKeeper
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-navy-muted">
            24/7 call answering built for plumbing businesses—so every emergency
            request and service call turns into a booked job.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Product
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#features" className="text-sm text-navy-muted hover:text-navy">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-navy-muted hover:text-navy">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-sm text-navy-muted hover:text-navy">
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
                <a href="#faq" className="text-sm text-navy-muted hover:text-navy">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@answerkeeper.com"
                  className="text-sm text-navy-muted hover:text-navy"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#final-cta" className="text-sm text-navy-muted hover:text-navy">
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Contact
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:hello@answerkeeper.com"
                  className="text-sm text-navy-muted hover:text-navy"
                >
                  hello@answerkeeper.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-navy-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} AnswerKeeper. All rights reserved.</p>
          <p>Built for plumbing teams who never want to miss a call.</p>
        </div>
      </div>
    </footer>
  );
}
