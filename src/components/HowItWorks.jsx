import React from 'react';
import Steps from './Steps';

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-[#070a18] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How It Works</h2>
            <p className="mt-2 max-w-2xl text-blue-100/80">
              From role selection to instant scorecards — the Hiringday Voice Agent streamlines screening end‑to‑end.
            </p>
          </div>
        </div>
        <Steps
          items={[
            {
              title: 'Select a role',
              description:
                'Choose UI/UX Design, Full Stack Development, Marketing and more. Interviews adapt to the role.'
            },
            {
              title: 'AI conducts the voice interview',
              description:
                'Candidates speak naturally. The agent listens with empathy and asks smart follow‑ups in real time.'
            },
            {
              title: 'Instant scorecards',
              description:
                'Recruiters receive transcripts, summaries, and scores for confidence, clarity, and skills.'
            }
          ]}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
