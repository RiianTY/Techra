import { motion } from "framer-motion";
import React from "react";

import { title } from "@/components/primitives";
import { Link } from "@/components/link";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export const Pricing = React.memo(() => {
  return (
    <motion.section
      animate="visible"
      className="w-full flex items-center justify-center py-12 md:py-24 bg-white dark:bg-black test"
      initial="hidden"
      variants={variants}
    >
      <div className="container px-0.5 md:px-6">
        {/* Pricing */}
        <motion.div
          key={0}
          className="flex flex-col items-center justify-center space-y-4 text-center"
          variants={childVariants}
        >
          <div className="space-y-2">
            <h3 className="flex w-fit m-auto mb-[15px] rounded-lg bg-gray-100 dark:bg-neutral-900 px-3 py-1 text-sm dark:text-gray-200">
              Our Pricing
            </h3>
            <h4 className={title()}>What We Offer</h4>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide end-to-end web development solutions tailored to your
              business needs.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-6xl mt-12 overflow-visible">
          {/* Mobile: stacked; Desktop: center card on top, side cards peek from behind */}
          <div className="flex flex-col md:flex-row justify-center items-end gap-6 md:gap-4 lg:gap-6">
            {/* Left — behind center on desktop */}
            <motion.div
              key={1}
              className="group relative w-full md:min-w-[260px] md:max-w-[300px] md:h-[420px] md:-mr-6 lg:-mr-8 md:z-10 md:scale-90 md:origin-bottom-right overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30 border border-gray-200 dark:border-neutral-800 flex flex-col min-h-[420px] order-2 md:order-1"
              variants={childVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="12" x2="12" y1="1" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="mb-1 text-xl font-bold dark:text-white">
                  Upfront — no hosting
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  Pay once, you handle hosting
                </p>
                <div className="mb-4">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    From{" "}
                  </span>
                  <span className="text-3xl font-bold tabular-nums dark:text-white">
                    £1,000
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    one-time · design & build only
                  </p>
                </div>
                <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-2 flex-1">
                  <li>• One-time payment for your project</li>
                  <li>• No recurring fees · full ownership</li>
                  <li>• You arrange hosting & domain</li>
                  <li>• Best for fixed budgets</li>
                </ul>
              </div>
            </motion.div>

            {/* Center — main card, on top */}
            <motion.div
              key={3}
              className="relative flex flex-col w-full md:w-[340px] lg:w-[380px] flex-shrink-0 order-1 md:order-2 z-20 md:scale-90 md:origin-top-center"
              variants={childVariants}
            >
              <div
                aria-hidden
                className="absolute -inset-[1px] rounded-[calc(0.75rem+2px)] bg-gradient-to-r from-[#00b7fa] to-[#01cfea] opacity-70 blur-sm pricing-glow-aura"
              />
              <div
                aria-hidden
                className="absolute -inset-[1px] rounded-[calc(0.75rem+2px)] bg-gradient-to-r from-[#00b7fa] to-[#01cfea] opacity-35 blur-xl pricing-glow-aura"
              />
              <div className="relative rounded-xl bg-white dark:bg-neutral-900 p-8 md:p-10 shadow-2xl border-2 border-[#00b7fa]/50 dark:border-[#01cfea]/50 flex flex-col flex-1 ring-2 ring-[#00b7fa]/30 dark:ring-[#01cfea]/30 ring-offset-2 dark:ring-offset-neutral-900 min-h-[340px]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-[#00b7fa] to-[#01cfea] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                    Best value
                  </span>
                </div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-[#00b7fa] dark:bg-cyan-900/50 dark:text-[#01cfea]">
                  <svg
                    fill="none"
                    height="28"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="mb-1 text-2xl font-bold dark:text-white">
                  Everything included
                </h3>
                <p className="text-sm text-[#00b7fa] dark:text-[#01cfea] font-medium mb-4">
                  Build, host, maintain & edits
                </p>
                <div className="mb-5">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    all-in-one subscription
                  </p>
                  <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-gray-500 dark:text-gray-400 text-base">
                      from
                    </span>
                    <span className="text-4xl font-bold tabular-nums dark:text-white">
                      £199
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-base">
                      /mo
                    </span>
                    <span className="text-gray-400 dark:text-gray-500">+</span>
                    <span className="text-base font-semibold tabular-nums text-gray-500 dark:text-gray-400">
                      £999 upfront
                    </span>
                  </p>
                </div>
                <ul className="text-gray-500 dark:text-gray-400 text-sm md:text-base space-y-2.5 flex-1">
                  <li>• Custom design & development</li>
                  <li>• Hosting, backups & security updates</li>
                  <li>• Content edits & changes included</li>
                  <li>• SSL, support & hassle-free launch</li>
                </ul>
              </div>
            </motion.div>

            {/* Right — behind center on desktop */}
            <motion.div
              key={2}
              className="group relative w-full md:min-w-[260px] md:max-w-[300px] md:h-[420px] md:-ml-6 lg:-ml-8 md:z-10 md:scale-90 md:origin-bottom-left overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30 border border-gray-200 dark:border-neutral-800 flex flex-col min-h-[420px] order-3"
              variants={childVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-50 to-violet-100 dark:from-violet-950/30 dark:to-violet-900/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col flex-1">
                <div className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900 dark:text-violet-300">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="18" rx="2" width="18" x="3" y="3" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="mb-1 text-xl font-bold dark:text-white">
                  Upfront — with hosting
                </h3>
                <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mb-3">
                  Build + 12 months hosted
                </p>
                <div className="mb-4">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    From{" "}
                  </span>
                  <span className="text-3xl font-bold tabular-nums dark:text-white">
                    £3,500
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    one-time · includes 12 months hosting & support
                  </p>
                </div>
                <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-2 flex-1">
                  <li>• Design, build & launch</li>
                  <li>• 12 months hosting & SSL included</li>
                  <li>• Backups, updates & support for year one</li>
                  <li>• Then renew or move hosting</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.p
          className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
          variants={childVariants}
        >
          Every project is quoted to fit your scope —{" "}
          <Link
            className="text-[#00b7fa] dark:text-[#01cfea] font-medium hover:underline"
            to="/contact"
          >
            get in touch for a tailored quote
          </Link>
          .
        </motion.p>
      </div>
    </motion.section>
  );
});

export default function PricingCards() {
  return (
    <>
      <Pricing />
    </>
  );
}
