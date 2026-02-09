"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-6 -left-6 w-full h-full border-2 border-black rounded-2xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full -z-10"
              />

              {/* Main image */}
              <div className="relative bg-gray-100 rounded-2xl aspect-[4/5] overflow-hidden">
                <Image
                  src="/assets/about_me_banner.png"
                  alt="About me"
                  fill
                  className="object-cover"
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <p className="text-sm font-medium">4+ Years Experience</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              About <span className="font-bold">Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-gray-600"
            >
              <p>
                I&apos;m a frontend engineer who cares about two things: making products
                faster and making code maintainable. I&apos;ve worked on products used by
                50K+ crypto wallet users and QA teams running thousands of automated
                tests daily.
              </p>

              <p>
                At PieLabs, I own the Test Builder feature end-to-end — from UI design
                decisions to Firestore data modeling. I reduced our Firebase costs by
                60% and cut page loads from 8s to 5s. At BlockTheory, I led frontend
                development for the Frontier Wallet extension and architected their
                blockchain explorer using modern web technologies.
              </p>

              <p>
                I make architecture decisions, not just implement tickets. When I joined
                BlockTheory, there were no frontend tests — I introduced Jest and covered
                200+ components. When Firebase bills spiked at PieLabs, I redesigned the
                query patterns. I take ownership of problems, not just features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Open to opportunities</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <span className="text-sm font-medium">50K+ Users Shipped</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <span className="text-sm font-medium">Cost Reduction Expert</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
