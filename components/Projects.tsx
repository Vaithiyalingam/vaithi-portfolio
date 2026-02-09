"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "PIE Portal - AI QA Platform",
    description:
      "Pie is an AI-first QA automation platform that replaces traditional scripted test suites with autonomous agents. It explores applications like a real user with vision-based testing. Teams can achieve up to 80% end-to-end coverage within minutes.",
    image: "/assets/pie_exploration.png",
    link: "https://app.pie.inc/",
    tags: ["Remix", "RxJS", "Firebase", "TypeScript"],
    layout: "right",
  },
  {
    number: "02",
    title: "Frontier Wallet Extension",
    description:
      "Browser-based cryptocurrency wallet supporting multiple blockchains like Ethereum, Binance Smart Chain, Polygon, and Solana. Features include sending, receiving, swapping, bridging, and buying cryptocurrencies with DeFi integration.",
    image: "/assets/ext_home.png",
    link: "https://chromewebstore.google.com/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd",
    tags: ["React", "TypeScript", "TailwindCSS"],
    layout: "left",
  },
  {
    number: "03",
    title: "Blio Blockchain Explorer",
    description:
      "User-friendly blockchain explorer providing transparent transaction data. Features include contract verification, detailed wallet activity views, and a developer mode for blockchain enthusiasts to explore their transactions in detail.",
    image: "/assets/blio_home.png",
    link: "https://manta.blio.xyz/",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    layout: "right",
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            My <span className="font-bold">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-24 lg:space-y-32"
        >
          {projects.map((project) => (
            <motion.div
              key={project.number}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                project.layout === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`${project.layout === "left" ? "lg:order-2" : ""}`}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-6xl lg:text-8xl font-bold text-gray-700/50"
                >
                  {project.number}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold mt-4 mb-4"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 mb-6"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Image */}
              <motion.div
                className={`${project.layout === "left" ? "lg:order-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden bg-gray-800 aspect-video group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-black rounded-full font-medium">
                      View Project
                    </span>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
