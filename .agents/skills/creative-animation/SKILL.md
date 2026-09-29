---
name: creative-animation
description: High-performance 60fps creative web animation, Framer Motion, Lenis smooth scrolling, GSAP ScrollTrigger, magnetic cursor, marquee mechanics, and micro-interactions.
---

# Creative Animation & Motion Architecture

Deliver cinematic, 60fps, silky-smooth motion that enhances storytelling and interaction without slowing down rendering or compromising accessibility.

## Core Rules

1. **Performance First (GPU & Compositor)**
   - Animate only `transform` (`translate3d`, `scale`, `rotate`) and `opacity`.
   - Never animate layout properties (`width`, `height`, `margin`, `top`, `left`) directly.
   - Use `will-change` sparingly on animating layers and clean up after unmount.

2. **Smooth Scrolling (Lenis)**
   - Initialize Lenis for smooth inertia-based scrolling.
   - Coordinate Lenis updates with requestAnimationFrame and scroll triggers.
   - Provide fallback when smooth scroll is not supported or user requests reduced motion.

3. **Orchestrated Narrative Motion**
   - **Hero Entrance**: Branded preloader / swoosh reveal -> coordinated headline mask reveal -> subtle staggered entrance of navigation and CTA.
   - **Scroll Progression**: Continuous scroll progress bar pinned cleanly at page header.
   - **Interactive Showcase**: Infinite smooth marquee for logos with pause-on-hover and grayscale-to-color transition.
   - **Custom Magnetic Cursor**: Desktop-only reactive cursor tracking pointer with lerp smoothing, scaling over interactive targets, auto-disabled on touch devices.

4. **Reduced Motion Graceful Degradation**
   - All animations must wrap with checks for `window.matchMedia('(prefers-reduced-motion: reduce)')` or CSS `@media (prefers-reduced-motion: reduce)`.
   - In reduced motion mode: opacity only or zero-duration transitions; content remains 100% visible immediately.
