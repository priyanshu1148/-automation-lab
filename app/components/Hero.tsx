"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-[90vh] flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 text-center text-white"
    >
      <span className="mb-4 rounded-full border border-blue-500/50 px-4 py-2 text-sm text-blue-400">
        🚀 AI Automation Agency
      </span>

      <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
        Transform Your Business
        <br />
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          With AI Automation
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        We build AI Chatbots, Business Automation, Modern Websites,
        and Custom Software that help companies save time and grow faster.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
          Get Started
        </button>

        <button className="rounded-xl border border-gray-600 px-8 py-3 transition hover:border-blue-500 hover:bg-gray-800">
          View Services
        </button>
      </div>
    </motion.section>
  );
}