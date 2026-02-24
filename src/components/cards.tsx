import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import React from "react";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

{
  /* format the code and put the text inside a data.js file along with the className (maybe) */
}

export const Card = React.memo(() => {
  return (
    <motion.section
      className="w-full flex items-center justify-center py-6 md:py-12 bg-white dark:bg-black test"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <div className="container px-0.5 md:px-6">
        <motion.div
          key={0}
          variants={childVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h3 className="flex w-fit m-auto mb-[15px] rounded-lg bg-gray-100 dark:bg-neutral-900 px-3 py-1 text-sm dark:text-gray-200">
              Our Services
            </h3>
            <h4 className={title()}>What We Offer</h4>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From strategy and design to build, launch, and ongoing support – we
              deliver solutions that align with your goals and scale with your business.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Web Development Card */}
          <motion.div
            key={1}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Website Development
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Custom, responsive websites built with modern frameworks and
                standards-based code – fast, maintainable, and ready for growth.
              </p>
            </div>
          </motion.div>

          {/* UI/UX Design Card */}
          <motion.div
            key={2}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                UI/UX Design
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                User research, wireframes, and high-fidelity design that put
                your audience first and support conversion and brand goals.
              </p>
            </div>
          </motion.div>

          {/* App Development Card */}
          <motion.div
            key={3}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Web & App Development
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Custom web applications, dashboards, and tools – from SPAs and
                internal systems to customer-facing apps that work across devices.
              </p>
            </div>
          </motion.div>

          {/* SEO Optimization Card */}
          <motion.div
            key={4}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300 transition-all duration-300 group-hover:bg-amber-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                SEO & Discovery
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Technical and on-page SEO so your site is built for search from
                the ground up – better rankings, more organic traffic, and clear metrics.
              </p>
            </div>
          </motion.div>

          {/* E-commerce Solutions Card */}
          <motion.div
            key={5}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="m2 20 2-2h18l-2-8H2" />
                  <path d="M3.9 4h16.2a1 1 0 0 1 .9 1.45L19 11" />
                  <circle cx="10.5" cy="19.5" r=".5" />
                  <circle cx="16.5" cy="19.5" r=".5" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                E-commerce & Online Stores
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                From Shopify and WooCommerce to custom builds – secure checkout,
                inventory and orders, and a shopping experience that converts.
              </p>
            </div>
          </motion.div>

          {/* Maintenance & Support Card */}
          <motion.div
            key={6}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30 "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900 dark:to-cyan-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Maintenance & Support
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Proactive updates, security patches, backups, and content changes –
                so your site stays secure, fast, and aligned with your business.
              </p>
            </div>
          </motion.div>

          {/* Hosting & DevOps Card */}
          <motion.div
            key={7}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Hosting & DevOps
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Managed hosting, CI/CD pipelines, and cloud infrastructure –
                reliable uptime, scalable capacity, and deployments you can trust.
              </p>
            </div>
          </motion.div>

          {/* Performance & Accessibility Card */}
          <motion.div
            key={8}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Performance & Accessibility
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Core Web Vitals, page speed, and WCAG-compliant, inclusive design –
                better UX for all users and a stronger signal for search.
              </p>
            </div>
          </motion.div>

          {/* API & Integrations Card */}
          <motion.div
            key={9}
            variants={childVariants}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-lg dark:shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                API & Integrations
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Connect to CRMs, payment gateways, booking systems, and APIs –
                so your website fits into your existing tools and workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

export default function Cards() {
  return (
    <>
      <Card />
    </>
  );
}
