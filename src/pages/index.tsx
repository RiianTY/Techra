import { title, subtitle } from "@/components/primitives";
import WebsitePreview from "@/components/website-preview";
import DefaultLayout from "@/layouts/default";
import Cards from "@/components/cards";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

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

const Button = () => {
  return (
    <motion.div
      key={2}
      variants={childVariants}
      className="flex justify-center w-full mt-[10px] pb-10 md:pb-0"
    >
      <Link href={siteConfig.navItems[1].href}>
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
      <motion.section
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-20 py-8 md:py-10"
      >
        <motion.div
          key={1}
          variants={childVariants}
          className="inline-block max-w-lg text-center justify-center max-w-md"
        >
          <span className={title()}>Welcome to&nbsp;</span>
          <span className={title({ color: "violet" })}>Valkryn&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern Web development.
            <Button />
          </div>
        </motion.div>
        <WebsitePreview
          className="shadow-lg w-full max-w-md lg:max-w-none lg:w-[450px] md:w-[500px]"
          size="responsive"
          autoSwitchThemes={true}
          switchInterval={3000}
        />
      </motion.section>
      <Cards />
    </DefaultLayout>
  );
}
