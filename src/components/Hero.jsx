import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mic, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#060814] text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060814]/60 via-[#060814]/30 to-[#060814]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-blue-300" />
          <span className="text-sm text-blue-100/90">AI empathy • voice intelligence • glassy neon</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          Meet the Future of Interviews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 max-w-2xl text-base text-blue-100/80 sm:text-lg"
        >
          AI Voice Agents that screen candidates, analyze responses, and deliver insights — all in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#demo"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-xl shadow-blue-500/30 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <Mic className="h-4 w-4" />
            Experience a Live AI Interview
          </a>

          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-blue-100/90 backdrop-blur-md transition-colors hover:bg-white/10"
          >
            How it works
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
