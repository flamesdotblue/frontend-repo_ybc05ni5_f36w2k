import React from 'react';
import { Mic, FileText, Gauge, BrainCircuit } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Voice AI',
    desc: 'Human‑like conversations with empathetic tone and smart follow‑ups.'
  },
  {
    icon: FileText,
    title: 'Auto Reports',
    desc: 'Instant transcripts, summaries, and recruiter‑ready scorecards.'
  },
  {
    icon: BrainCircuit,
    title: 'Smart Questioning',
    desc: 'Role‑based questions for UI/UX, Full‑Stack, Marketing, and more.'
  },
  {
    icon: Gauge,
    title: 'Real‑Time Scoring',
    desc: 'Evaluates clarity, confidence, and communication as candidates speak.'
  }
];

const Features = () => {
  return (
    <section className="relative w-full bg-[#070a18] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,197,253,0.06),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Product Highlights</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-blue-100/80">
          Designed for futuristic recruitment: minimal, fast, and deeply human.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 blur-2xl" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-4 text-lg font-semibold">{title}</h3>
              <p className="relative mt-2 text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
