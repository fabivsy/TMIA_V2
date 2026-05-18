# TMIA Migration Skills Registry

This document defines the specialized "Skills" used for the migration of the AI Map catalog. These protocols ensure consistency, authority, and GEO optimization across all nodes.

## 1. Skill de Identidad Visual (Branding Node)
**Objective:** Maintain visual essence without manual CSS intervention, following the "Arcane Engine" aesthetic.
- **Mission:** Configure `primary` and `secondary` colors in the data object.
- **Implementation:** Use dynamic Tailwind variables in `Hero` and `StrategicBridge`.
- **Assets:** Ensure logos and backgrounds in `/public/heroes/` meet dimension standards.
- **Hero Title Standard (Strategic):**
    - **Format:** Always use the shortened **"[Categoría] IA"** format (e.g., "Video IA", "Gaming IA").
    - **Branding:** Apply a **dual-color linear gradient** (to right) using the map's `primaryColor` and `secondaryColor`.
    - **Style:** Use `text-4xl md:text-8xl`, font-black, and `tracking-tighter`. Ensure `pb-4` to prevent clipping of descenders.
- **Logo Rendering Standard (Hero Only):**
    - **Optimization:** Use `next/image` with `fill` and `sizes="112px"`.
    - **Aesthetic:** **NO container boxes**. Logos must float freely.
    - **Strategic Glow:** Place a `blur-3xl` div behind the logo with the map's `primaryColor` (20-40% opacity).
- **Kinetic Parallax Standard:**
    - **Protocol:** Apply a **0.4x scroll factor** to hero images.
    - **Performance:** Use `translateY` transforms with `will-change-transform` for GPU-accelerated motion.
    - **Visuals:** Base scale at `1.05`, `grayscale` with full-color transition on parent hover.
- **Mission Control Dashboard (CTA):**
    - **Design:** Replace buttons with a **large glassmorphic card** (`bg-[#121417]/40`, `backdrop-blur-2xl`).
    - **Hierarchy:**
        1. **Lead-in:** "¿No sabes por dónde empezar? Aprende a elegir con nuestra" (gray-400).
        2. **Title:** "Guía de IA para [Categoría]" using the brand gradient.
    - **Minimalism:** **NO arrows**, NO labels (remove "Protocolo de Inicio"). The card itself is the interactive anchor.
- **Navigation Cleanup:**
    - **Hero Focus:** Remove ALL secondary links ("Volver al directorio", "Explorar herramientas") from the Hero section to maximize conversion toward the Strategic Guide.
- **Color Isolation Protocol:**
    - **Strictness:** ZERO color mixing. Each map is a closed branding ecosystem. Use strictly `primaryColor` and `secondaryColor` for all text gradients, borders, and interactive glows.
- **Premium UI/UX Polish & Animation Standards (Arcane Engine 2.0):**
    - **Futuristic Spatial Backdrop:** Establish layered visual depth using a subtle 40px grid pattern (`bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)]`) and diagonal low-opacity scanline masks.
    - **Organic Parallax Blur Nodes:** Behind hero cards or section headings, inject multiple floating blur nodes utilizing dynamic keyframe flows (`float-slow`, `float-reverse`, `pulse-slow`) to create ambient motion.
    - **Shifting Gold Shimmer Gradient:** High-value highlights should employ a multi-point linear gradient (`#FFF` -> `#ffe27c` -> `#d4af37` -> `#ff8c00` -> `#FFF`) mapped to a looping background-position keyframe for maximum search/brand authority.
    - **Tactile Hover Sweeps:** Primary CTA and button elements must use a skew pseudo-element transition (`shine-sweep`) that sweeps a soft light reflection across the button on hover.
    - **Card Color Uniformity:** Avoid hardcoded accent colors. All card interfaces (`MapCard`, `ToolCard`) must dynamically source their interactive states directly from `brand-primary` or category gradients.
    - **Symmetric Pros & Cons Panel Design:** Interactive modals must maintain strict visual symmetry. Both positive ("Pros") and negative ("Cons") lists must be housed in glassmorphic cards (`bg-[color]/5`, `border-[color]/10`) with matching illustrative watermarks (`opacity-5 group-hover:opacity-10`) and uniform border rounding (`rounded-3xl p-8`).


## 2. Skill de Curaduría Técnica (Entity Refactoring)
**Objective:** Transform raw data into "Authority Verdicts" for GEO/AEO.
- **Mission:** Refactor tool metadata fields (`verdict`, `strategicUse`, `authoritySignal`, `pros`, `cons`) to meet the "Audio" standard.
- **Semantic Density:** Use technical, declarative language. Avoid marketing fluff.
- **Field Protocols:**
    - **Verdict:** A definitive statement identifying the tool's position in the ecosystem (e.g., "El estándar industrial para...").
    - **Strategic Use:** Highlights the specific business or creative friction the tool eliminates.
    - **Authority Signal:** A verifiable metric or technical benchmark that justifies the recommendation.
    - **Pros/Cons:** Technical attributes, not subjective opinions.

## 3. Skill de Arquitectura de Autoridad (Knowledge Bridge)
**Objective:** Establish semantic links between the catalog and the broader ecosystem.
- **Mission:** Draft niche-specific Authority Statements and map external WordPress resources.
- **Components:**
    - **Authority Statement (StrategicBridge):** A methodology declaration that establishes the "Source of Truth" for the category. Must include `data-semantic-role='curator-methodology-declaration'` and metadata tags.
    - **Resource Mapping:** Accurate integration of `guideUrl` and `selectionUrl` pointing to the main WordPress domain.
    - **Intent-Based FAQs:** 5-8 questions optimized for high-authority search intent.
- **FAQs Protocol:**
    - Questions must target high-value information gaps (e.g., "How to solve X with IA" instead of "What is X").
    - Answers must be definitive, providing a clear winner or technical benchmark.

## 4. Skill de Optimización Generativa (GEO/AEO Validation)
**Objective:** Final validation of machine-readable authority nodes and data sovereignty.
- **Mission:** Verify and inject robust JSON-LD schemas and ensure the signatures of authority are present.
- **Validation Checklist:**
    - **JSON-LD Schema Injection:** Confirm the presence of `SoftwareApplication` (for tools), `FAQPage` (for strategic questions), and `Organization` (for the entity).
    - **Data Sovereignty:** Ensure that **Fabio Yocco** (Author/Curator) and **The Curator Group** (Organization/Entity) are explicitly defined as the nodes of authority signing the selection.
    - **Entity Linking:** Validate that all IDs and URLs correctly point to the verified entity graph of the project.
- **Protocol:**
    - The `ExpertIdentity` block must mention Fabio Yocco as the lead curator.
    - Every schema must link back to `https://thecuratorgroup.com` or the official project domain to establish provenance.

## 5. Protocolo de Estandarización de Contenido y Nombres (Smart-Authority)
**Objective:** Maintain absolute visual symmetry on grid layouts while guaranteeing high AEO (Answer Engine Optimization) and LLM search visibility.

### A. Title Normalization (Hybrid Option C)
- **Database `title`:** Must be clean, visual-only, and **WITHOUT** the `" IA"` or `" AI"` suffix (e.g., `"No-Code"`, `"Finanzas"`, `"Negocios"`, `"Productividad"`).
- **Dynamic Crawler Title:** The Next.js page controller dynamically appends `" IA"` (e.g., `"${title} IA"`) to the browser tab `<title>` and to the structured JSON-LD schema, retaining search authority while keeping the UI clean and visual.

### B. Category Descriptions & Length Constraints
- **Homepage Card Description (`description`):**
    - **Length:** Sweet, short, and punchy. Maximum of **50–80 characters**.
    - **Phrasing:** Clear, direct action statements (e.g., `"Construye apps, webs y automations sin escribir código."`).
    - **Symmetry Rule:** MUST NEVER exceed 2 lines of text on standard grid columns to prevent asymmetrical card stretching.
- **Hero Section Subtitle (`longDescription`):**
    - **Length:** Highly semantic, single-sentence summary of **120–180 characters**.
    - **Phrasing:** Combine high-value LLM intent keywords (e.g., `"Un ecosistema curado..."`) with clear user value.
    - **Aesthetic Rule:** Must remain as a single, beautifully balanced paragraph under the main heading. Never concatenate paragraphs or large blocks inside this field.

---

### Authority Language Examples (AEO-Ready)
- *Standard:* "Esta herramienta es buena para..." 
- *Refactored:* "Referencia técnica absoluta para la optimización de..."
- *Standard:* "Tiene muchos usuarios."
- *Refactored:* "Líder en Share of Model (SoM) con una tasa de adopción de..."
