# GOKULASELVAN I — NOCTURNE / SIGNAL
> Personal Software Engineering & Architecture Portfolio

A dark, sophisticated editorial engineering portfolio for **Gokulaselvan I** (`GOKUL.`), Software Engineer based in Colombo, Sri Lanka.

Designed as an editorial technical publication and engineering studio portfolio rather than a generic dashboard or converted CV. Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and the **NOCTURNE / SIGNAL** design system.

---

## 1. Central Engineering Story
> *"I architect and implement software solutions, with an interest in the engineering decisions that make them work."*

The portfolio focuses on:
* Requirements precedence before choosing implementations.
* Software architecture, modular monolith boundaries, and engineering trade-offs.
* Backend systems, transactional persistence, and authorization (ASP.NET Core 8 & Spring Boot 3).
* Deterministic guardrails when interfacing agentic AI subsystems with relational databases.
* Continuous test verification (e.g., 217 automated xUnit tests in Procura).
* Clear distinction between project-proven tools, operational internship systems at the Sri Lanka Judicial Service Commission, and active cloud learning (AWS).

---

## 2. Selected Projects & Repository Evidence

1. **Procura — AI-Assisted Enterprise Procurement Management System** (Featured Case Study)
   * **GitHub:** [https://github.com/AlgoDove/Procura](https://github.com/AlgoDove/Procura)
   * **Stack:** ASP.NET Core 8, C# 12, Entity Framework Core 8, PostgreSQL, xUnit & Moq (217 tests), Google Gemini API (`gemini-3.5-flash`), React 18, Flutter 3.x.
   * **Contribution:** Procurement Request Subsystem (Component 1) backend, Controller-Service-Repository-DTO modular monolith architecture, request lifecycle state transitions, JWT & RBAC, automated cost aggregation, EF Core change tracking & concurrency handling, and deterministic AI pre-validation guardrails (`ValidateDraftDataTool`).

2. **Enterprise Approval Workflow Engine**
   * **GitHub:** [https://github.com/AlgoDove/enterprise-approval-engine](https://github.com/AlgoDove/enterprise-approval-engine)
   * **Stack:** Java 17, Spring Boot 3, Spring Security (JWT), Spring Data JPA, Hibernate, PostgreSQL, Maven.
   * **Contribution:** Multi-tier sequential approval state machine (`PENDING` → `IN_PROGRESS` → `APPROVED` / `REJECTED`), Spring Security filter chain with RBAC, step sequence validation, and dedicated immutable audit log persistence.

3. **FixMyArea — Civic Infrastructure Reporting & Tracking Platform**
   * **GitHub:** [https://github.com/AlgoDove/FixMyArea](https://github.com/AlgoDove/FixMyArea)
   * **Stack:** ASP.NET Core 8 Web API, C# 12, React 19, TypeScript, Vite, Tailwind CSS, EF Core 8, PostgreSQL (Neon) & SQLite fallback.
   * **Contribution:** Full-stack civic transparency platform with zero-barrier citizen reporting, server-authoritative status locking to `Reported` and server UTC timestamps, and HMAC-signed token verification (`X-Moderator-Token`) for community moderator status transitions.

4. **Fraud Detection System — Autoencoder-Based Anomaly Detection**
   * **GitHub:** [https://github.com/AlgoDove/Fraud-Detection-System](https://github.com/AlgoDove/Fraud-Detection-System)
   * **Stack:** Python 3, TensorFlow/Keras, scikit-learn, Pandas, NumPy, Flask REST API.
   * **Contribution:** Unsupervised deep autoencoder trained on normal payment behavior; domain velocity feature engineering (1h and 24h transaction frequency); evaluation under class imbalance (AUC-ROC 0.9999, Recall 1.0); real-time Flask API (`POST /predict`).

---

## 3. Engineering Experience
* **Role:** Software Engineering Intern
* **Organization:** Sri Lanka Judicial Service Commission (Colombo, Sri Lanka)
* **Tenure:** October 2026 – Present
* **Programme:** Associated with the national e-Courts digitalisation programme
* **Focus:** Developing and testing digital systems supporting daily court operations, internal ERP modules, debugging operational defects, analyzing legacy registry data migration workflows, and supporting technical knowledge transfer across court districts.

---

## 4. Academic Record
* **Institution:** Sri Lanka Institute of Information Technology (SLIIT)
* **Degree:** BSc (Hons) in Information Technology — Specialisation in Software Engineering
* **Graduation:** Expected 2028
* **Standing:** Weighted GPA (WGPA): **3.85 / 4.00**
* **Honors:** Three-time Dean’s List recipient; Academic Merit Tuition Fee Waiver (Year 3, Semester 1).

---

## 5. Asset Upload Checklist

The portfolio is architected so personal photographs, screenshots, and résumé files can be dropped directly into the designated folders below. The application will immediately display them without altering any React components. If a file is absent, the application gracefully displays publication-grade SVG schematics or typographic fallbacks.

| File Name | Exact Destination Folder | Recommended Dimensions | Website Section | Fallback When Missing |
| :--- | :--- | :--- | :--- | :--- |
| `Gokulaselvan-I-Resume.pdf` | `public/files/` | Standard PDF format | Navigation, Hero, Footer, & CV Modal | Interactive modal with upload path & contact details |
| `portrait.jpg` | `public/images/profile/` | 800 × 1000 px (4:5 aspect ratio) | Section 01: Engineering Philosophy | Typographic Nocturne/Signal identity card |
| `overview.png` | `public/images/projects/procura/` | 1200 × 700 px (16:9 aspect ratio) | Section 02: Featured Procura Case Study | Animated SVG modular monolith schematic |
| `overview.png` | `public/images/projects/approval-workflow/` | 1000 × 600 px (16:9 aspect ratio) | Section 02: Approval Workflow Engine | Animated SVG sequential approval state machine |
| `overview.png` | `public/images/projects/fixmyarea/` | 1000 × 600 px (16:9 aspect ratio) | Section 02: FixMyArea Civic Platform | Animated SVG civic reporting & moderator schematic |
| `model-results.png` | `public/images/projects/fraud-detection/` | 1000 × 600 px (16:9 aspect ratio) | Section 02: Fraud Detection Autoencoder | Animated SVG latent compression & reconstruction schematic |

---

## 6. How to Run & Build

### Prerequisites
* **Node.js:** v18.0.0 or later (v24 tested)
* **npm:** v9.0.0 or later

### Local Development
```bash
# Install dependencies (already executed)
npm install

# Start Vite development server
npm run dev
# The website will be available at: http://127.0.0.1:5173/
```

### Production Build
```bash
# Type check and build static production bundle
npm run build
# Built files are generated in the `dist/` directory
```

---

## 7. Deployment Instructions

### Cloudflare Pages (Free Static Hosting)
1. Push this repository to GitHub (`AlgoDove/portfolio` or similar).
2. Log into the Cloudflare Dashboard and select **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository.
4. Set the build settings:
   * **Framework preset:** `Vite`
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
5. Click **Save and Deploy**.

### Vercel (Free Static Hosting)
1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Vercel automatically detects Vite:
   * **Framework:** Vite
   * **Output Directory:** `dist`
4. Click **Deploy**.
