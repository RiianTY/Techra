import { lazy, Suspense } from "react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Link } from "@/components/link";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

// Lazy load heavy components to reduce initial bundle size
const WebsitePreview = lazy(() => import("@/components/website-preview"));
const Cards = lazy(() => import("@/components/cards"));

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
  visible: { opacity: 1, transition: { duration: .1 } },
};

const Button = () => {
  return (
    <motion.div
      key={3}
      variants={childVariants}
      className="flex justify-center w-full mt-[10px] pb-10 md:pb-0"
    >
      <Link to={siteConfig.navItems[1].href}>
        <button className=" relative group p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-100 active:scale-95">
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          <span className="relative z-10 flex items-center  px-6 py-3 rounded-xl bg-black">
            <span className="transition-all duration-500 group-hover:translate-x-1">
              Contact Us
            </span>
            <svg
              className="pt-1 w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
              data-slot="icon"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </Link>
    </motion.div>
  );
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <motion.header
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-20 py-8 md:py-10"
      >
        <div
          key={1}
          className="inline-block max-w-lg text-center justify-center max-w-md"
        >
          <h1 className={title()}>
            Welcome to&nbsp;
            <span className={title({ color: "violet" })}>Techra&nbsp;</span>
            <br />
            Web solutions for everyone
          </h1>
          
          <h2 className={subtitle({ class: "mt-4" })}>
            Modernising your business made easy
            <Button />
          </h2>
        </div>
        <motion.div key={2} variants={childVariants}>
          <Suspense fallback={<div className="w-full max-w-md lg:max-w-none lg:w-[450px] md:w-[500px] h-[400px] bg-default-100 animate-pulse rounded-lg" />}>
            <WebsitePreview
              className="shadow-lg w-full max-w-md lg:max-w-none lg:w-[450px] md:w-[500px]"
              size="responsive"
              autoSwitchThemes={true}
            />
          </Suspense>
        </motion.div>
      </motion.header>
      <motion.div key={4} variants={childVariants}>
        <Suspense fallback={<div className="w-full py-12 bg-default-50 animate-pulse" />}>
          <Cards />
        </Suspense>
      </motion.div>
    </DefaultLayout>
  );
}
