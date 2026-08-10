export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full rounded-2xl bg-white p-10 text-center shadow-sm border border-slate-200">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          Welcome to AnswerKeeper
        </h1>

        <p className="mt-4 text-slate-600">
          Your subscription has been successfully created.
          Thank you for choosing AnswerKeeper.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Go to AnswerKeeper
        </a>
      </div>
    </main>
  );
}
