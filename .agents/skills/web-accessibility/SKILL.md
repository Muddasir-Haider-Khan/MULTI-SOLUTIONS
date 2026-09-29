---
name: web-accessibility
description: WCAG 2.2 AA and AAA accessibility standards, semantic HTML structure, keyboard navigation, contrast compliance, and screen reader readiness.
---

# Web Accessibility Engineering (WCAG 2.2)

Build web interfaces that are genuinely accessible to all users, conforming to WCAG 2.2 AA and reaching for AAA where applicable.

## Principles & Checklist

1. **Semantic HTML Structure**
   - Single `<h1>` per page.
   - Logical heading hierarchy (`<h2>` to `<h6>`) without skipping levels.
   - Use landmark elements: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<aside>`, `<footer>`.
   - Never use `<div>` or `<span>` for interactive elements when `<button>` or `<a>` is appropriate.

2. **Color Contrast & Readability**
   - Normal text: Minimum 4.5:1 contrast against background (7:1 for AAA).
   - Large text (18pt+ or 14pt bold): Minimum 3:1 contrast.
   - Interactive boundaries and focus indicators: Minimum 3:1 against adjacent background.
   - Never rely on color alone to convey meaning or state.

3. **Keyboard Operability & Focus Management**
   - All interactive elements must be focusable and operable via `Tab`, `Shift+Tab`, `Enter`, and `Space`.
   - Visible, high-contrast focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2`).
   - Skip links for main content navigation.
   - Custom modal, drawer, or mobile nav must trap focus properly and restore focus upon dismissal with `Escape`.

4. **Screen Reader and Assistive Tech Support**
   - Meaningful, concise `alt` text for images; `alt=""` or `aria-hidden="true"` for purely decorative elements.
   - `aria-label` or `aria-labelledby` for icon-only buttons.
   - `aria-expanded` and `aria-controls` for disclosure menus and accordions.
   - Dynamic updates announced via `aria-live="polite"` when appropriate.

5. **Motion and Vestibular Safety**
   - Strictly honor `@media (prefers-reduced-motion: reduce)`.
   - When reduced motion is preferred, eliminate large parallax shifts, rapid scale transforms, and continuous scrolling loops; replace with clean, instant cuts or subtle opacity fades.
   - Ensure all text and key interactive targets remain visible and accessible regardless of animation state.
