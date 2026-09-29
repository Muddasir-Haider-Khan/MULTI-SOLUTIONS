---
name: design-systems
description: Guidelines for building token-driven design systems, harmonic color palettes, fluid typographic scales, and consistent architectural components.
---

# Design Systems Engineering

Architect cohesive, scalable, token-driven web experiences where every element feels part of an intentional aesthetic language.

## Architecture

1. **Token Hierarchy**
   - **Base Palette Tokens**: Raw color definitions (brand red, slate neutrals, obsidian darks, paper whites).
   - **Semantic Tokens**: Abstract tokens mapping to roles (`--bg-primary`, `--bg-surface`, `--text-primary`, `--text-muted`, `--border-subtle`, `--accent-primary`).
   - **Fluid Typography**: Responsive clamps for headings and body (`clamp(2.5rem, 5vw, 4.5rem)`).
   - **Spacing Tokens**: Harmonic grid spacing (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px).

2. **Component Architecture**
   - **Encapsulation**: Components declare explicit TypeScript interfaces for props.
   - **State Completeness**: Every interactive component handles `default`, `hover`, `active`, `focus-visible`, and `disabled` states.
   - **Structural Rhythm**: Use consistent vertical cadence across page sections with alternating dark/light tonal shifts or contrast boundaries.
   - **Micro-Detail**: Hairline borders (`border-white/10` or `border-neutral-200/60`), subtle grain textures, and geometric badges without AI clichés.
