# Luis Alberto Reoyo Bolaños - Professional CV

A modern, responsive, and high-performance web-based Curriculum Vitae built with **Astro**.
Designed not only for the web but mathematically optimized for flawless PDF printing, extreme SEO, and cutting-edge AI Agent Orchestration.

## 🚀 Features

- **Multi-language Support**: Full i18n implementation (Spanish & English).
- **Pixel-Perfect PDF Export**: Custom `@media print` engine with precise A4 pagination, dynamic margins, and protection against orphaned titles.
- **Extreme SEO & Accessibility**: JSON-LD Structured Data, OpenGraph meta tags, fully accessible semantic HTML, and PWA manifest.
- **Dark Mode**: Integrated theme switcher with system preference detection and persistence.
- **Performance Optimized**: Astro's View Transitions and `astro:assets` image optimization for near-instant load times.
- **AI FSM Orchestration Harness**: Built-in Monte Carlo simulations via `Vitest` to test an advanced Finite State Machine (FSM) that dictates AI agent development pipelines (Gherkin -> Code -> Clean -> Harden -> QA -> Architecture).

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Testing**: [Vitest](https://vitest.dev/) (FSM Monte Carlo simulations)
- **Styling**: Vanilla CSS (Modern CSS Variables, Scope CSS, Print media)
- **Language**: TypeScript (strict mode with `astro check`)
- **Package Manager**: pnpm
- **CI/CD**: GitHub Actions

## 💻 Local Development

This project strictly uses `pnpm` as the package manager.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lrb85/cv_luis_reoyo.git
   cd cv-luis
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm run dev
   ```

4. **Run AI Orchestration Tests**:
   Execute the FSM Monte Carlo tests locally:
   ```bash
   pnpm test
   ```

5. **Build for production**:
   ```bash
   pnpm run build
   ```

## 🤖 AI Orchestration (FSM)
This repository contains a dedicated skill configuration for AI agents (`.agents/skills/fsm-orchestration`). Any AI assisting with this project is bound by a strict software lifecycle: *Epics -> Stories -> Gherkin/QA -> Code -> Unit Tests -> Clean Code -> Hardened Code -> QA -> Architecture*. The robustness of this workflow is mathematically guaranteed by the Vitest Monte Carlo simulation suite included in the `test/` directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
