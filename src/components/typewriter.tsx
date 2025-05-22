import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";

interface TypewriterProps {
  strings?: string[];
  className?: string;
}

export default function Typewriter({
  strings = [
    "Build amazing websites.",
    "Create stunning applications.",
    "Design beautiful interfaces.",
    "Develop powerful solutions.",
  ],
  className = "text-blue-500",
}: TypewriterProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`inline-block ${className}`}>
      {mounted ? (
        <TypewriterComponent
          options={{
            strings,
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      ) : (
        <div className="h-6 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-700"></div>
      )}
    </div>
  );
}
