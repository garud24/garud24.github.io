export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  description: string
  highlights: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Rebecca Everlene Trust Company",
    role: "Software Engineer",
    period: "Jul 2025 — Jun 2026",
    location: "United States",

    description:
      "Worked on an AI-powered book discovery platform designed to help users find relevant books from a catalog of more than 10,000 titles using natural-language preferences.",

    highlights: [
      "Built backend workflows that combined semantic retrieval, metadata filtering, and LLM-based reasoning to turn user queries into relevant book recommendations.",
      "Improved the API and database path through PostgreSQL indexing, query optimization, structured response validation, retries, and failure handling.",
      "Supported the platform on AWS using EC2 and RDS, reducing API latency by approximately 35% to around 200 ms for key requests.",
    ],

    technologies: [
      "Node.js",
      "PostgreSQL",
      "pgvector",
      "AWS",
      "REST APIs",
      "LLM",
      "Embeddings",
    ],
  },

  {
    company: "Electric Power Research Institute (EPRI)",
    role: "Software Engineer",
    period: "Jun 2024 — May 2025",
    location: "Charlotte, NC",

    description:
      "Helped modernize engineering analysis tools used by researchers by moving standalone scientific calculators and data workflows into a centralized web platform.",

    highlights: [
      "Migrated legacy Streamlit-based engineering calculators into modular Vue.js and TypeScript applications that could be integrated into EPRI's subscriber platform.",
      "Built interactive engineering visualizations with D3.js and Observable Plot, including fixing synchronization issues between recalculated results and visualization state.",
      "Worked across FastAPI services, validation, RBAC, and Azure deployment workflows supporting more than 10,000 experimental records.",
    ],

    technologies: [
      "Vue.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "D3.js",
      "Observable Plot",
      "Azure",
    ],
  },

  {
    company: "Persistent Systems",
    role: "Software Engineer",
    period: "May 2021 — Jul 2023",
    location: "India",

    description:
      "Worked on large-scale healthcare and education platforms, focusing on backend services and data pipelines that processed high-volume operational and analytical data.",

    highlights: [
      "For a healthcare platform, helped replace hundreds of repetitive data workflows with shared BigQuery and Python processing layers, separating reusable transformations from workflow-specific logic.",
      "Introduced query optimization, parallel and incremental processing, validation, and recovery mechanisms that reduced long-running processing from 8–9 hours to under 25 minutes.",
      "For an education platform, worked on backend API and data migration workflows, including moving legacy GraphQL-backed functionality toward SQL-backed services while preserving data consistency.",
    ],

    technologies: [
      "Java",
      "Python",
      "SQL",
      "BigQuery",
      "GCP",
      "REST APIs",
      "Data Pipelines",
    ],
  },

  {
    company: "UNC Charlotte",
    role: "Research Assistant",
    period: "Jan 2024 — May 2024",
    location: "Charlotte, NC",

    description:
      "Worked on a research system for reconstructing human motion and 3D body information from mmWave radar data as a privacy-preserving alternative to traditional camera-based sensing.",

    highlights: [
      "Developed and evaluated PyTorch-based deep learning models for processing mmWave radar point-cloud data and reconstructing human body information.",
      "Worked on low-latency UDP data streaming to support near real-time inference and experimentation.",
      "The resulting pipeline achieved an average localization error of approximately 2.47 cm.",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "mmWave Radar",
      "UDP",
      "Computer Vision",
    ],
  },

  {
    company: "Eastro Control Systems",
    role: "Software Engineer Intern",
    period: "Dec 2019 — Feb 2020",
    location: "India",

    description:
      "Built an internal workforce management application for handling employee scheduling, authentication, shift assignments, and time tracking.",

    highlights: [
      "Developed backend functionality with Flask and implemented JWT-based authentication and role-based access control.",
      "Improved SQLite schema design and database queries, reducing application response time by approximately 30%.",
    ],

    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "JWT",
      "RBAC",
    ],
  },
]