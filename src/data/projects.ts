export interface Project {
  number: string
  title: string
  category: string
  description: string
  highlights: string[]
  technologies: string[]
  image?: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    number: "01",
    title: "RootCause AI",
    category: "Developer Infrastructure / Applied AI",
    image: "/projects/rootcause-ai.png",

    description:
      "AI-assisted debugging platform that analyzes software repositories and infrastructure configuration to identify likely root causes and produce evidence-backed diagnoses.",

    highlights: [
      "Combined deterministic repository analysis with LLM reasoning to investigate infrastructure and application failures.",
      "Parsed configuration and dependency relationships to build structured context before invoking the reasoning layer.",
      "Used Pydantic-validated structured outputs to produce grounded, evidence-backed diagnoses instead of unrestricted LLM responses.",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Ollama",
      "Qwen",
      "Docker",
      "React Flow",
    ],

    github: "https://github.com/garud24/rootcause-ai",
  },

  {
    number: "02",
    title: "BookWise",
    category: "Semantic Search / Backend",
    image: "/projects/bookwise.png",

    description:
      "Semantic book discovery platform that combines vector search, PostgreSQL, and local LLM inference to understand natural-language reading preferences.",

    highlights: [
      "Built semantic search using embeddings and pgvector similarity search.",
      "Designed a layered FastAPI architecture with router, service, repository, and database separation.",
      "Integrated Ollama for local LLM inference without relying on paid AI APIs.",
    ],

    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Ollama",
      "SQLAlchemy",
      "Docker",
    ],

    github: "https://github.com/garud24/bookwise",
  },

  {
    number: "03",
    title: "Budget Detective",
    category: "Applied AI / Data Analytics",
    image: "/projects/budget-detective.png",

    description:
      "AI-assisted spending intelligence platform that makes Washington State vendor payment data accessible through natural-language questions, deterministic analytics, and interactive visualizations.",

    highlights: [
      "Built a React and TypeScript analytics dashboard that transforms public payment records into agency, vendor, category, and spending-trend insights.",
      "Designed an AI intent-classification layer that maps natural-language questions to structured intents while keeping financial calculations deterministic and auditable.",
      "Implemented persistent AI interaction logging and fallback intent routing so core analysis remains available when the LLM service fails.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "OpenAI",
      "PapaParse",
      "Data Visualization",
    ],

    github: "https://github.com/garud24/budget-detective",
  },

  {
    number: "04",
    title: "Cart Win-Back Agent",
    category: "Agentic AI / Full Stack",
    image: "/projects/cart-agent.png",

    description:
      "Multi-agent cart recovery system that analyzes abandoned carts, determines customer eligibility, generates offers, and validates them against business and safety constraints.",

    highlights: [
      "Designed an orchestrator coordinating eligibility, offer, and safety agents.",
      "Implemented structured validation and guarded AI-generated offers using Pydantic.",
      "Built REST APIs with FastAPI and connected them to a React TypeScript dashboard.",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "Pydantic",
      "OpenAI",
      "React",
      "TypeScript",
      "Agent Orchestration",
    ],

    github: "https://github.com/garud24/envorso-cart-agent",
  },

  {
    number: "05",
    title: "Posturelytics.AI",
    category: "Computer Vision / AI",
    image: "/projects/posturelytics.png",

    description:
      "AI-powered posture analysis platform that uses computer vision to evaluate posture and provide actionable feedback.",

    highlights: [
      "Built during Hack with CAIR and awarded 1st place.",
      "Applied computer vision techniques to analyze human posture.",
      "Developed the project as an end-to-end product rather than a standalone ML experiment.",
    ],

    technologies: [
      "Python",
      "Computer Vision",
      "Machine Learning",
      "React",
    ],

    github: "https://github.com/garud24/posturelytics-ai",
  },
]