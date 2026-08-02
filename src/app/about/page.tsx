export default function AboutPage() {
    return (
      <main className="bg-white">
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue">
              About AnswerKeeper
            </p>
  
            <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-bold tracking-tight text-navy sm:text-5xl">
              Helping Home Service Businesses Answer Every Customer Call
            </h1>
  
            <p className="mt-6 text-lg leading-relaxed text-navy-muted">
              AnswerKeeper is a virtual call answering platform built for plumbing,
              HVAC, and other home service businesses that lose customers simply
              because nobody was available to answer the phone.
            </p>
          </div>
  
          <div className="mt-16 space-y-12">
  
            <section>
              <h2 className="text-2xl font-semibold text-navy">Our Mission</h2>
  
              <p className="mt-4 leading-8 text-navy-muted">
                Our mission is simple:
              </p>
  
              <p className="mt-4 leading-8 text-navy-muted">
                Help service businesses capture every legitimate customer call,
                respond professionally, and convert more callers into booked jobs.
              </p>
  
              <p className="mt-4 leading-8 text-navy-muted">
                Missing calls shouldn't mean missing revenue.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-navy">
                Why We Built AnswerKeeper
              </h2>
  
              <p className="mt-4 leading-8 text-navy-muted">
                Home service professionals spend most of their day on job sites—not
                behind a desk answering phones.
              </p>
  
              <p className="mt-4 leading-8 text-navy-muted">
                When a homeowner calls during an emergency and nobody answers,
                they're likely to contact the next company on their list.
              </p>
  
              <p className="mt-4 leading-8 text-navy-muted">
                AnswerKeeper was created to help small service businesses stay
                available to customers without hiring a full-time receptionist.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-navy">
                Who We Serve
              </h2>
  
              <ul className="mt-6 list-disc space-y-3 pl-6 text-navy-muted">
                <li>Plumbing businesses</li>
                <li>HVAC contractors</li>
                <li>Electrical contractors</li>
                <li>Home service businesses</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-navy">
                Current Status
              </h2>
  
              <p className="mt-4 leading-8 text-navy-muted">
                AnswerKeeper is currently onboarding early users and continuously
                improving the platform based on real feedback from home service
                businesses.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-navy">
                Contact
              </h2>
  
              <p className="mt-4 leading-8 text-navy-muted">
                For product questions or partnership enquiries, please contact us
                using the information provided on our Contact page.
              </p>
            </section>
  
          </div>
        </section>
        <section className="mt-16 rounded-2xl border border-border bg-surface p-8">
  <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold text-navy">
    Meet the Founder
  </h2>

  <p className="mt-5 leading-relaxed text-navy-muted">
    Hi, I'm <strong>Ibrahim Shuaib</strong>, the founder of AnswerKeeper.
  </p>

  <p className="mt-4 leading-relaxed text-navy-muted">
    I built AnswerKeeper after seeing how many plumbing and HVAC among other home service businesses lose
    valuable jobs simply because nobody could answer the phone while technicians
    were busy serving customers.
  </p>

  <p className="mt-4 leading-relaxed text-navy-muted">
    My goal is simple: help every home service business capture every customer,
    every opportunity, and every emergency call—24 hours a day, 7 days a week.
  </p>
</section>
      </main>
    );
  }