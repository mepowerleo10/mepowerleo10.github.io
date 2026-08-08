import { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";

const SECTION_ORDER = ["hero", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTION_ORDER)[number];

const Index = () => {
  const [isNavVisible, setNavVisible] = useState(true);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef<SectionId>("hero");
  // hero is always visible; pre-seed so it never gets a morph
  const animatedRef = useRef<Set<SectionId>>(new Set<SectionId>(["hero"]));

  // Hide all non-hero titles before first paint to prevent flash
  useLayoutEffect(() => {
    const nonHero: SectionId[] = ["about", "projects", "contact"];
    nonHero.forEach((id) => {
      const el = document.getElementById(`morph-title-${id}`);
      if (el) gsap.set(el, { opacity: 0, scale: 0, transformOrigin: "center center" });
    });

    // Reveal whichever section is already in view on load (e.g. hard refresh with hash)
    const visibleId = SECTION_ORDER.find((id) => {
      if (id === "hero") return false;
      const section = document.getElementById(id);
      if (!section) return false;
      const { top } = section.getBoundingClientRect();
      return top >= -window.innerHeight * 0.3 && top < window.innerHeight * 0.7;
    });
    if (visibleId) {
      const el = document.getElementById(`morph-title-${visibleId}`);
      if (el) gsap.set(el, { opacity: 1, scale: 1 });
      animatedRef.current.add(visibleId);
    }
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const playMorph = (prevId: SectionId, nextId: SectionId) => {
      if (animatedRef.current.has(nextId)) return;
      animatedRef.current.add(nextId);

      const destEl = document.getElementById(`morph-title-${nextId}`);
      if (!destEl) return;

      const rect = destEl.getBoundingClientRect();
      const destCx = rect.left + rect.width / 2;
      const destCy = rect.top + rect.height / 2;
      const direction = SECTION_ORDER.indexOf(nextId) > SECTION_ORDER.indexOf(prevId) ? 1 : -1;

      // Dot enters from the viewport edge offset to the side by direction
      const startX = destCx + direction * 100;
      const startY = direction === 1 ? -16 : window.innerHeight + 16;

      // Quadratic bezier control point — offset perpendicularly for a natural arc
      const cpX = (startX + destCx) / 2 + direction * 80;
      const cpY = (startY + destCy) / 2;

      // Sample the bezier curve into keyframe positions
      const SAMPLES = 16;
      const keyframes = Array.from({ length: SAMPLES + 1 }, (_, i) => {
        const t = i / SAMPLES;
        const mt = 1 - t;
        return {
          x: mt * mt * startX + 2 * mt * t * cpX + t * t * destCx,
          y: mt * mt * startY + 2 * mt * t * cpY + t * t * destCy,
        };
      });

      gsap.killTweensOf([dot, destEl]);

      const tl = gsap.timeline();
      tl.set(dot, { x: startX, y: startY, xPercent: -50, yPercent: -50, scale: 1, opacity: 1 });

      // Travel the sampled bezier path; power1.inOut controls timing, not the path shape
      tl.to(dot, { keyframes, duration: 0.85, ease: "power1.inOut" });

      // Dot bursts while title blooms from its center
      tl.to(dot, { scale: 5, opacity: 0, duration: 0.25, ease: "power2.out" });
      tl.fromTo(
        destEl,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(1.5)", transformOrigin: "center center" },
        "<"
      );
    };

    let lastScrollY = window.scrollY;

    const handleScrollEnd = () => {
      const newSection = SECTION_ORDER.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const { top } = el.getBoundingClientRect();
        return Math.abs(top) < window.innerHeight * 0.4;
      });

      if (newSection && newSection !== currentSectionRef.current) {
        const prev = currentSectionRef.current;
        currentSectionRef.current = newSection;
        playMorph(prev, newSection);
      }
      lastScrollY = window.scrollY;
    };

    // Debounced scroll covers all browsers including Safari
    let debounceTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleScrollEnd, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(debounceTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav isNavVisible={isNavVisible} showFloatingNav={showFloatingNav} setShowFloatingNav={setShowFloatingNav} />
      {/* Morph dot overlay — GSAP controls position and visibility */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[100] w-3 h-3 rounded-full bg-primary pointer-events-none"
        style={{ opacity: 0 }}
      />
      <Hero setNavVisible={setNavVisible} />
      <About />
      {/* <Experience /> */}
      <Projects />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

