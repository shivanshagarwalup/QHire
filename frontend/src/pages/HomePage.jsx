import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  UsersIcon,
  VideoIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="relative min-h-screen bg-base-300 text-base-content overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-300 via-base-200 to-base-300 opacity-80" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full px-4 pt-4">
        <div
          className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center
          bg-base-200/50 backdrop-blur-lg
          border border-base-content/10
          rounded-2xl shadow-lg
          transition-all duration-300"
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-11 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rotate-6 group-hover:rotate-0 transition">
              <div className="w-full h-full flex items-center justify-center">
                <SparklesIcon className="size-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-black tracking-tight">
              Q<span className="text-pink-400">Hire</span>
            </span>
          </Link>

          <SignInButton mode="modal">
            <button className="btn btn-primary btn-sm gap-2">
              Sign in
              <ArrowRightIcon className="size-4" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-36">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div className="space-y-9">
            <div className="badge badge-secondary gap-2">
              <ZapIcon className="size-4" />
              built for real interviews
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              Interview candidates.
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Not just resumes.
              </span>
            </h1>

            <p className="text-lg text-base-content/70 max-w-xl">
              QHire brings coding, conversation, and collaboration into a
              single, distraction-free space — so interviews feel human again.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Real-time coding",
                "Face-to-face video",
                "Zero setup required",
              ].map((t) => (
                <span key={t} className="badge badge-outline badge-lg gap-2">
                  <CheckIcon className="size-4 text-success" />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg">
                  Start your first interview
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-lg gap-2">
                <VideoIcon className="size-5" />
                See how it works
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <img
              src="/hero.png"
              alt="QHire Interview Platform"
              className="relative rounded-3xl border border-base-content/10 shadow-2xl hover:scale-[1.03] transition"
            />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h2 className="text-5xl font-black text-primary">10,000+</h2>
            <p className="text-base-content/70 mt-3">
              interviews completed seamlessly
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-black text-secondary">95%</h2>
            <p className="text-base-content/70 mt-3">
              candidates felt more comfortable
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-black text-accent">2× Faster</h2>
            <p className="text-base-content/70 mt-3">
              hiring decisions on average
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
            <div className="card-body">
              <VideoIcon className="size-8 text-primary mb-3" />
              <h3 className="text-xl font-bold">
                Conversations that feel natural
              </h3>
              <p className="text-base-content/70">
                Crystal-clear video and audio so candidates can focus on ideas,
                not tech issues.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
            <div className="card-body">
              <Code2Icon className="size-8 text-secondary mb-3" />
              <h3 className="text-xl font-bold">
                Code together, live
              </h3>
              <p className="text-base-content/70">
                Write, debug, and reason through problems collaboratively in
                real time.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
            <div className="card-body">
              <UsersIcon className="size-8 text-accent mb-3" />
              <h3 className="text-xl font-bold">
                Designed for real people
              </h3>
              <p className="text-base-content/70">
                One calm space — no awkward silences, no tab-hopping, no stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 py-32 text-center">
        <h2 className="text-4xl font-black mb-6">
          Make interviews something people enjoy.
        </h2>
        <p className="text-base-content/70 mb-10">
          Start using QHire today — no setup, no friction.
        </p>
        <SignInButton mode="modal">
          <button className="btn btn-primary btn-lg">
            Get started for free
          </button>
        </SignInButton>
      </section>
    </div>
  );
}

export default HomePage;
