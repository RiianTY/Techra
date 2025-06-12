import { useEffect, useState } from "react";
import { Star, ChevronRight } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

// Define theme types
type ThemeColor = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  headerBg: string;
  footerBg: string;
};

// Available themes
const themes: ThemeColor[] = [
  {
    name: "Blue",
    primary: "bg-blue-600 dark:bg-blue-700",
    secondary: "bg-blue-500",
    accent: "bg-blue-50 dark:bg-blue-900/30",
    background: "bg-white dark:bg-gray-900",
    text: "text-blue-500 dark:text-blue-400",
    headerBg: "bg-blue-600 dark:bg-blue-700",
    footerBg: "bg-gray-100 dark:bg-gray-800",
  },
  {
    name: "Purple",
    primary: "bg-purple-600 dark:bg-purple-700",
    secondary: "bg-purple-500",
    accent: "bg-purple-50 dark:bg-purple-900/30",
    background: "bg-white dark:bg-gray-900",
    text: "text-purple-500 dark:text-purple-400",
    headerBg: "bg-purple-600 dark:bg-purple-700",
    footerBg: "bg-gray-100 dark:bg-gray-800",
  },
  {
    name: "Green",
    primary: "bg-emerald-600 dark:bg-emerald-700",
    secondary: "bg-emerald-500",
    accent: "bg-emerald-50 dark:bg-emerald-900/30",
    background: "bg-white dark:bg-gray-900",
    text: "text-emerald-500 dark:text-emerald-400",
    headerBg: "bg-emerald-600 dark:bg-emerald-700",
    footerBg: "bg-gray-100 dark:bg-gray-800",
  },
  {
    name: "Amber",
    primary: "bg-amber-600 dark:bg-amber-700",
    secondary: "bg-amber-500",
    accent: "bg-amber-50 dark:bg-amber-900/30",
    background: "bg-white dark:bg-gray-900",
    text: "text-amber-500 dark:text-amber-400",
    headerBg: "bg-amber-600 dark:bg-amber-700",
    footerBg: "bg-gray-100 dark:bg-gray-800",
  },
  {
    name: "Rose",
    primary: "bg-rose-600 dark:bg-rose-700",
    secondary: "bg-rose-500",
    accent: "bg-rose-50 dark:bg-rose-900/30",
    background: "bg-white dark:bg-gray-900",
    text: "text-rose-500 dark:text-rose-400",
    headerBg: "bg-rose-600 dark:bg-rose-700",
    footerBg: "bg-gray-100 dark:bg-gray-800",
  },
];

// Feature data
const features = [
  {
    title: "Easy to Use",
    description: "Intuitive drag & drop interface",
    icon: "💎",
  },
  {
    title: "Responsive",
    description: "Perfect on all devices",
    icon: "📱",
  },
  {
    title: "Fast",
    description: "Optimized performance",
    icon: "⚡",
  },
];

// Why Choose Us data
const benefits = [
  "SEO Optimized for better rankings",
  "99.9% Uptime guarantee",
  "24/7 Customer support",
  "Free domain for 1 year",
  "Unlimited storage space",
  "30-day money back guarantee",
  "Regular backups included",
  "Custom domain support",
];

// Testimonial data
const testimonials = [
  {
    name: "Sarah J.",
    role: "Designer",
    text: "This platform transformed how I create websites!",
    avatar: "👩‍🎨",
    rating: 5,
  },
  {
    name: "John D.",
    role: "Developer",
    text: "The code quality is exceptional. Highly recommend!",
    avatar: "👨‍💻",
    rating: 5,
  },
  {
    name: "Mike T.",
    role: "Marketer",
    text: "Boosted our conversion rates by 40%!",
    avatar: "👨‍💼",
    rating: 4,
  },
];

// Stats data
const stats = [
  { label: "Users", value: "10K+" },
  { label: "Sites", value: "50K+" },
  { label: "Rating", value: "4.9" },
];

// Footer links
const footerLinks = [
  { label: "About", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

interface WebsitePreviewProps {
  className?: string;
  containerClassName?: string;
  showTypingEffect?: boolean;
  autoSwitchThemes?: boolean;
  switchInterval?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "responsive";
}

export default function WebsitePreview({
  className = "",
  containerClassName = "",
  showTypingEffect = true,
  autoSwitchThemes = true,
  switchInterval = 6000,
  size = "responsive",
}: WebsitePreviewProps) {
  const [mounted, setMounted] = useState(false);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [titleTyped, setTitleTyped] = useState(false);
  const [showThemeTooltip, setShowThemeTooltip] = useState<number | null>(null);

  const currentTheme = themes[currentThemeIndex];

  // Handle theme switching
  useEffect(() => {
    setMounted(true);

    if (!autoSwitchThemes) return;

    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentThemeIndex((prev) => (prev + 1) % themes.length);
        setIsTransitioning(false);
      }, 300);
    }, switchInterval);

    return () => clearInterval(intervalId);
  }, [autoSwitchThemes, switchInterval]);

  // Manual theme switching
  const switchTheme = (index: number) => {
    if (index === currentThemeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentThemeIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Title typing effect completion handler
  const handleTitleTyped = () => {
    setTitleTyped(true);
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "xs":
        return "w-48 h-32";
      case "sm":
        return "w-64 h-44";
      case "md":
        return "w-80 h-56";
      case "lg":
        return "w-96 h-64";
      case "xl":
        return "w-[28rem] h-80";
      case "responsive":
      default:
        // Increased max-widths for larger screens
        return "w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl aspect-[3/2]";
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={`relative web-prev hidden md:block pt-5 ${containerClassName}`}
    >
      <div
        className={`inline-flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 dark:border-gray-800 dark:bg-neutral-900 web-prev-inner ${
          isTransitioning ? "opacity-80 scale-[0.98]" : "opacity-100 scale-100"
        } ${getSizeClasses(size)} ${className}`}
      >
        {/* Browser chrome */}

        {/* Website content - scrollable with fixed height to accommodate theme banner */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-auto">
            {/* Header */}
            <div
              className={`sticky top-0 z-10 flex h-[6%] items-center justify-between px-2 transition-colors duration-300 ${currentTheme.headerBg}`}
            >
              <div className="flex items-center">
                <div
                  className={`mr-1 flex h-[1em] w-[1em] items-center justify-center rounded-sm bg-white text-[0.4em] font-bold ${currentTheme.text}`}
                >
                  W
                </div>
                <div className="text-[0.4em] sm:text-[0.5em] font-bold text-white">
                  Preview
                </div>
              </div>
              <div className="flex space-x-1.5">
                <div className="h-[0.4em] w-[1em] rounded-sm bg-white/70"></div>
                <div className="h-[0.4em] w-[1em] rounded-sm bg-white/70"></div>
                <div className="h-[0.4em] w-[1em] rounded-sm bg-white/70"></div>
              </div>
            </div>

            {/* Hero section */}
            <div
              className={`relative flex flex-col items-center justify-center bg-gradient-to-b from-${
                currentTheme.accent.split(" ")[0]
              } to-${currentTheme.background.split(" ")[0]} p-2 transition-colors duration-300 dark:from-${
                currentTheme.accent.split(" ")[1]
              } dark:to-${currentTheme.background.split(" ")[1]}`}
            >
              {/* Hero image/graphic */}
              <div className="absolute right-2 top-1 opacity-20">
                <div className="text-[1.2em]">🌐</div>
              </div>

              {/* Title with typing effect */}
              <div className="mb-[2%] h-[8%] text-center text-[0.5em] sm:text-[0.6em] font-bold text-gray-800 dark:text-white">
                {showTypingEffect && mounted ? (
                  <TypewriterComponent
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Build Beautiful Websites")
                        .callFunction(handleTitleTyped)
                        .start();
                    }}
                    options={{
                      cursor: "",
                      delay: 80,
                    }}
                  />
                ) : (
                  "Build Beautiful Websites"
                )}
              </div>

              {/* Subheading with typing effect (only starts after title is typed) */}
              {showTypingEffect && mounted && titleTyped ? (
                <div
                  className={`h-[6%] text-[0.4em] sm:text-[0.5em] transition-colors duration-300 ${currentTheme.text}`}
                >
                  <TypewriterComponent
                    options={{
                      strings: [
                        "No coding required.",
                        "Launch in minutes.",
                        "Professional results.",
                        "Unlimited possibilities.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </div>
              ) : (
                <div
                  className={`h-[6%] w-[30%] text-[0.4em] sm:text-[0.5em] transition-colors duration-300 ${currentTheme.text}`}
                >
                  {titleTyped || !showTypingEffect ? "No coding required" : ""}
                </div>
              )}

              <div className="mt-[3%] flex space-x-1">
                <div
                  className={`rounded px-[0.4em] py-[0.2em] text-[0.3em] sm:text-[0.4em] text-white transition-colors duration-300 ${currentTheme.secondary}`}
                >
                  Get Started
                </div>
                <div className="rounded border border-gray-300 bg-white px-[0.4em] py-[0.2em] text-[0.3em] sm:text-[0.4em] text-gray-700 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Watch Demo
                </div>
              </div>

              {/* Stats */}
              <div className="mt-[4%] flex w-full justify-center space-x-[5%]">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="text-[0.4em] sm:text-[0.5em] font-bold text-gray-800 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-[0.3em] sm:text-[0.35em] text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features section */}
            <div className={`p-[3%] ${currentTheme.accent}`}>
              <div className="mb-[2%] text-center text-[0.4em] sm:text-[0.5em] font-semibold text-gray-800 dark:text-white">
                Our Features
              </div>
              <div className="mb-[3%] flex">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="relative flex flex-1 flex-col items-center"
                  >
                    {/* Feature content */}
                    <div className="flex flex-col items-center px-1">
                      <div
                        className={`mb-[2%] text-[0.6em] sm:text-[0.7em] transition-colors duration-300 ${currentTheme.text}`}
                      >
                        {feature.icon}
                      </div>
                      <div className="text-center text-[0.3em] sm:text-[0.4em] font-medium text-gray-800 dark:text-white">
                        {feature.title}
                      </div>
                      <div className="text-center text-[0.25em] sm:text-[0.35em] text-gray-500 dark:text-gray-400">
                        {feature.description}
                      </div>
                    </div>

                    {/* Divider (only between items, not after the last one) */}
                    {i < features.length - 1 && (
                      <div className="absolute right-0 top-1/2 h-[70%] -translate-y-1/2 border-r border-gray-300 dark:border-gray-700" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us section */}
            <div className="p-2">
              <div className="mb-2 text-center text-[8px] font-semibold text-gray-800 dark:text-white">
                Why Choose Us
              </div>
              <div className="grid grid-cols-2 gap-y-1 justify-items-center">
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center text-center justify-center"
                  >
                    <div className={`mr-0.5 text-[6px] ${currentTheme.text}`}>
                      ✓
                    </div>
                    <div className="text-[6px] text-gray-700 dark:text-gray-300">
                      {benefit}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-center">
                <div
                  className={`flex items-center rounded px-1.5 py-0.5 text-[6px] text-white transition-colors duration-300 ${currentTheme.secondary}`}
                >
                  <span>View All Benefits</span>
                  <ChevronRight className="ml-0.5 h-1.5 w-1.5" />
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="p-2">
              <div className="mb-1 text-center text-[8px] font-semibold text-gray-800 dark:text-white">
                What People Say
              </div>
              <div className="flex space-x-1 overflow-x-auto pb-1 justify-center">
                {testimonials.map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex min-w-[60px] flex-col rounded border border-gray-200 p-1 dark:border-gray-700"
                  >
                    <div className="mb-0.5 flex items-center space-x-1">
                      <div
                        className={`h-3 w-3 rounded-full ${currentTheme.primary} flex items-center justify-center text-[6px] text-white`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-[6px] font-medium text-gray-800 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-[5px] text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-0.5">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`h-1.5 w-1.5 ${
                            starIndex < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                          fill={
                            starIndex < testimonial.rating
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                    </div>
                    <div className="mt-0.5 text-[5px] text-gray-600 dark:text-gray-300">
                      "{testimonial.text}"
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div
              className={`flex h-[5%] items-center justify-between px-[3%] transition-colors duration-300 ${currentTheme.footerBg}`}
            >
              <div className="flex space-x-1.5">
                {footerLinks.map((link, i) => (
                  <div
                    key={i}
                    className="text-[0.3em] sm:text-[0.35em] text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {link.label}
                  </div>
                ))}
              </div>
              <div className="text-[0.3em] sm:text-[0.4em] text-gray-500 dark:text-gray-400">
                © 2024 Tetra. All rights reserved.
              </div>
            </div>
          </div>

          {/* Theme selector banner - fixed at bottom of preview */}
          <div className="border-t border-gray-100 bg-gray-200 py-0 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="flex items-center justify-center py-0.5">
              <div className="flex items-center justify-center gap-2">
                {themes.map((theme, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center"
                  >
                    <button
                      onClick={() => switchTheme(index)}
                      onMouseEnter={() => setShowThemeTooltip(index)}
                      onMouseLeave={() => setShowThemeTooltip(null)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${theme.secondary.split(" ")[0]} ${
                        index === currentThemeIndex
                          ? "ring-1 ring-offset-1 ring-gray-400 dark:ring-gray-500 dark:ring-offset-gray-800 scale-110"
                          : "opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Switch to ${theme.name} theme`}
                    />
                    {showThemeTooltip === index && (
                      <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-1 py-0 text-[6px] text-white">
                        {theme.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
