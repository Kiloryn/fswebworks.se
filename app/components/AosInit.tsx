"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initialiserar AOS (Animate On Scroll) så att data-aos-attribut på sidan animeras.
 */
export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 40,
    });
  }, []);
  return null;
}
