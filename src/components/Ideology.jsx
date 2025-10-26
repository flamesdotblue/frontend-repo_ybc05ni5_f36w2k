import React from 'react';
import { HeartHandshake } from 'lucide-react';

const Ideology = () => {
  return (
    <section className="relative w-full bg-[#060b1a] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-100/80 backdrop-blur-md">
          <HeartHandshake className="h-4 w-4 text-blue-300" />
          Automation that listens with empathy
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Automation that listens with empathy.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-blue-100/80">
          We believe every candidate deserves a chance to be heard — not just filtered by resumes. Recruiters should spend their time making decisions, not scheduling or screening. AI should sound empathetic, not robotic — bridging automation and human connection.
        </p>
      </div>
    </section>
  );
};

export default Ideology;
