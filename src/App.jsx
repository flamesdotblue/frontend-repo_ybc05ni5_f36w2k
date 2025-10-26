import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Ideology from './components/Ideology';
import Features from './components/Features';
import { Users, Shield, Zap } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#060814] font-['Manrope',_Inter,_system-ui] text-white">
      {/* Hero with Spline animation */}
      <Hero />

      {/* How it works */}
      <HowItWorks />

      {/* Ideology */}
      <Ideology />

      {/* Features grid */}
      <Features />

      {/* For Recruiters & For Candidates + Demo CTA */}
      <section className="relative w-full bg-[#060814] py-20" aria-labelledby="benefits">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.10),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">For Recruiters</h3>
            </div>
            <ul className="mt-4 space-y-3 text-blue-100/85">
              <li>• Replace manual screening with AI interviews in minutes.</li>
              <li>• Receive transcripts, summaries, and role‑specific scorecards.</li>
              <li>• Reduce scheduling chaos — focus on final decisions.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">For Candidates</h3>
            </div>
            <ul className="mt-4 space-y-3 text-blue-100/85">
              <li>• Conversational, stress‑free voice interviews.</li>
              <li>• Fair chances beyond the resume — your voice matters.</li>
              <li>• Instant feedback signals to help you improve.</li>
            </ul>
          </div>
        </div>

        {/* Demo CTA */}
        <div id="demo" className="relative mx-auto mt-12 max-w-6xl px-6 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <Zap className="h-4 w-4" />
            Run a Sample Interview
          </a>
          <p className="mt-3 text-sm text-blue-100/70">No downloads. Experience a guided, role‑aware voice session.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/80 py-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.2),transparent)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div>
            <div className="text-lg font-semibold tracking-tight">Hiringday Voice Agent</div>
            <p className="mt-1 text-sm text-blue-100/70">Futuristic recruitment • cinematic soundwave • human × machine harmony</p>
          </div>
          <div className="text-sm text-blue-100/60">© {new Date().getFullYear()} Hiringday. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
