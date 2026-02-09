"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const experiences = [
  {
    company: "PieLabs",
    role: "Software Engineer - Frontend at PieLabs Inc",
    period: "Nov 2024 - Present",
    description:
      "Own end-to-end UI, state management, and data layer for the Test Builder — where QA teams create and run automated mobile tests. Built the Live Execution Viewer that streams device screenshots at ~1 FPS during test runs. Cut dashboard load time from 8s → 5s by restructuring Firestore queries and adding route-level code splitting. Reduced monthly Firebase bill by ~60% through batched reads and RxJS stream memoization.",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#6366f1">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    company: "BlockTheory",
    role: "Software Engineer at BlockTheory R&D Hub",
    period: "Feb 2022 - Jul 2024",
    description:
      "Led frontend development for Frontier Wallet Chrome extension serving 50K+ users. Built transaction flows, token swaps, and cross-chain bridging. Architected and developed Blio blockchain explorer with modern stack — achieved 60% increase in mobile traffic and 35% lower bounce rate.",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#10B981">
        <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    bgColor: "bg-black",
    borderColor: "border-black",
    textColor: "text-white",
  },
  {
    company: "Apperient",
    role: "Junior Developer at Apperient",
    period: "Apr 2021 - Sep 2021",
    description:
      "First engineering role. Refactored a legacy dashboard from synchronous to async data fetching, cutting initial load from 4s → 2.8s. Built 15+ reusable React components that became the foundation of the internal UI library.",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z" />
      </svg>
    ),
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            My <span className="font-bold">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`${exp.bgColor} ${exp.borderColor} ${
                exp.textColor || "text-black"
              } border rounded-2xl p-6 lg:p-8 transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      exp.textColor ? "bg-white/10" : "bg-gray-100"
                    }`}
                  >
                    {exp.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold mb-2">
                      {exp.role}
                    </h3>
                    <p
                      className={`text-sm lg:text-base ${
                        exp.textColor ? "text-gray-300" : "text-gray-600"
                      } max-w-3xl`}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="lg:text-right">
                  <span
                    className={`text-sm font-medium ${
                      exp.textColor ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
