import React from 'react';

const Steps = ({ items = [] }) => {
  return (
    <ol className="grid gap-6 sm:grid-cols-3">
      {items.map((step, idx) => (
        <li
          key={idx}
          className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/10"
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
            {idx + 1}
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
          <p className="mt-2 text-blue-100/80">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};

export default Steps;
