# TMIA Migration Skills Registry

This document defines the specialized "Skills" used for the migration of the AI Map catalog. These protocols ensure consistency, authority, and GEO optimization across all nodes.

## 1. Skill de Identidad Visual (Branding Node)
**Objective:** Maintain visual essence without manual CSS intervention.
- **Mission:** Configure `primary` and `secondary` colors in the data object.
- **Implementation:** Use dynamic Tailwind variables in `Hero` and `StrategicBridge`.
- **Assets:** Ensure logos and backgrounds in `/public` meet dimension standards.
- **Logo Rendering Standard (Universal):**
    - **Container:** Always use a white background (`bg-white`) for the logo container to ensure maximum contrast and consistency.
    - **Fit:** Use `object-contain` to prevent cropping of tech logos.
    - **Shape:** Apply `rounded-2xl` or `rounded-3xl` for a modern "App Icon" aesthetic.
    - **Padding:** Maintain `p-2.5` to `p-3.5` to ensure adequate breathing room.
    - **Interactivity:** Implement a subtle `hover:scale-105` transition to enhance the premium feel.
- **Layout & Hierarchy Standard:**
    - **Directory Cards (ToolCard):** Remove pricing badges from the card headers. Prioritize tool name legibility by giving it the full width of the card. Use `break-words` only if necessary, but aim for clean, horizontal layouts.
    - **Detail Modals (ToolModal):** Centralize pricing information here. Add a pricing badge in the modal header (Secondary Color) and a detailed investment block in the footer.
    - **Dual-Color Synergy:** Use the `primary` color for the main identity and high-priority CTAs. Use the `secondary` color for technical accents, information badges (pricing), and brand gradients to create visual depth.

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

---

### Authority Language Examples (AEO-Ready)
- *Standard:* "Esta herramienta es buena para..." 
- *Refactored:* "Referencia técnica absoluta para la optimización de..."
- *Standard:* "Tiene muchos usuarios."
- *Refactored:* "Líder en Share of Model (SoM) con una tasa de adopción de..."
