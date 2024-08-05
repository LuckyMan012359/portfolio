"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const AnimatedButton = motion(Button);

export default function ThemeToggleButton() {
  const { setTheme, theme, systemTheme } = useTheme();

  return (
    <AnimatedButton
      variant="outline"
      size="icon"
      className="fixed bottom-8 left-5 text-muted-foreground"
      onClick={() =>
        setTheme(
          theme
            ? theme === "dark"
              ? "light"
              : "dark"
            : systemTheme === "dark"
              ? "light"
              : "dark",
        )
      }
      transition={{ type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1.2 } }}
    >
      <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </AnimatedButton>
  );
}
