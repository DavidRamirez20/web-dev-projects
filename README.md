# Web Development Projects

Repositorio monorepo con proyectos de desarrollo web, mobile y backend.

## Proyectos

### `claude-code/` — Platziflix (Curso Claude Code - Platzi)

Proyecto multi-plataforma construido durante el curso de Claude Code de Platzi. Simula una plataforma de cursos online con arquitectura completa.

**Profe:** Eduardo Alvarez

| Capa | Tecnología |
|------|-----------|
| Backend | FastAPI + PostgreSQL + SQLAlchemy + Alembic |
| Frontend | Next.js 15 + React 19 + TypeScript + SCSS |
| Android | Kotlin + Jetpack Compose + Retrofit |
| iOS | Swift + SwiftUI |

```
claude-code/
├── Backend/     # API REST (FastAPI) + Docker + migraciones
├── Frontend/    # Next.js 15 (App Router)
└── Mobile/
    ├── PlatziFlixAndroid/   # App Kotlin
    └── PlatziFlixiOS/       # App Swift
```

### `nextjs-store/` — Next.js Store

Aplicación de e-commerce construida con Next.js.

**Stack:** Next.js + TypeScript + SASS

---

## GitHub Actions (`.github/workflows/`)

Los workflows de GitHub Actions están configurados en la raíz del repositorio (única ubicación que GitHub ejecuta):

| Workflow | Trigger | Descripción |
|----------|---------|-------------|
| `claude.yml` | Issues / PR comments con `@claude` | Claude Code responde y actúa sobre issues y PRs |
| `claude-code-review.yml` | Pull Requests | Claude revisa automáticamente cada PR |

> **Secret requerido:** `CLAUDE_CODE_OAUTH_TOKEN`
