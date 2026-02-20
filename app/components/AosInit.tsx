"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 750,
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
      });
    });
    return () => {
      import("aos").then((AOS) => AOS.default.refresh());
    };
  }, []);
  return null;
}
