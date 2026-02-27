"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initialiserar AOS (Animate On Scroll) så att data-aos-attribut på sidan animeras.
 */
export default function AosInit() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    AOS.init({
      duration: 600,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
      disable: reducedMotion,
    });

    AOS.refreshHard();
  }, []);

  return null;
}
