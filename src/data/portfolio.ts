export type FunnelStage = {
  number: string;
  title: string;
  lens: string;
  hardSkill: string;
  tools?: string[];
  softSkill: string;
  detail: string;
  output: string;
};

export const funnelStages: FunnelStage[] = [
  {
    number: "01",
    title: "Business Analysis",
    lens: "The why",
    hardSkill: "Requirements, process maps, KPI definition",
    tools: ["Business Analysis", "Data Viz", "Storytelling"],
    softSkill: "Empathy + critical thinking",
    detail: "The right problem, framed before the first line of code.",
    output: "I define the bottleneck and the metric for success.",
  },
  {
    number: "02",
    title: "Data Analysis",
    lens: "The what",
    hardSkill: "SQL, Python, visualisation",
    tools: ["SQL", "Python", "Pandas", "Tableau", "Power Bi"],
    softSkill: "Curiosity + storytelling",
    detail: "Evidence that separates a useful signal from a loud assumption.",
    output: "I find the hidden pattern and make it legible to the team.",
  },
  {
    number: "03",
    title: "AI Engineering",
    lens: "The how",
    hardSkill: "LLM integration, predictive models, RAG",
    tools: ["OpenAI APIs", "LangChain", "TensorFlow", "Scikit-learn"],
    softSkill: "Innovation + adaptability",
    detail: "An intelligent engine shaped around the real workflow, not the hype cycle.",
    output: "I design the automation that makes the solution compound.",
  },
  {
    number: "04",
    title: "Designto-Web Development",
    lens: "The interface",
    hardSkill: "React / Next.js, Node.js, APIs",
    tools: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "AWS"],
    softSkill: "User-centricity + detail orientation",
    detail: "A calm, scalable interface that lets people use the intelligence.",
    output: "I build the product people can trust, navigate, and return to.",
  },
];

export type CaseStudy = {
  number: string;
  testId: string;
  title: string;
  tags: string[];
  image: string;
  alt: string;
  story: { label: string; text: string }[];
  link: string;
  demo?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    number: "CASE / 01",
    testId: "case-card-logistics-reporting",
    title: "DELHIVERY: THE PROFITABILITY PARADOX",
    tags: ["Business Analysis", "Data Viz", "AI", "React"],
    image: "/image.png",
    alt: "Dark architectural blueprint detail representing a connected reporting system",
    story: [
      {
        label: "Problem",
        text: "REVENUE +28% ₹2,931 Cr (vs ₹2,294) EBITDA declined 4% year-on-year to ₹142.2 crore from ₹148.8 crore. The EBITDA margin stood at 4.9%, compared with 6.5% in the year-ago quarter.",
      },
      {
        label: "Insight",
        text: "Delhivery said it used buffer staff and additional network capacity to maintain service quality, which increased costs. It expects the additional expenditure to be absorbed through revenue growth over the rest of FY27",
      },
      {
        label: "Solution",
        text: "Re-architect customer support—24 × 7 human escalation within 30 minutes."
      },
    ],
    link: "https://github.com/SDevKh/delhivery-ba-case-study",
    demo: "https://drive.google.com/file/d/17kNaClhSpVrCumrQca8KrV3QaVuanv_N/view?usp=sharing"
  },
  {
    number: "CASE / 02",
    testId: "case-card-sales-signal",
    title: "Found the signal behind a stalled sales pipeline",
    tags: ["SQL", "Python", "Storytelling"],
    image: "https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwbW9kZXJuJTIwZGFya3xlbnwwfHx8fDE3ODgzNDQ4MTl8MA&ixlib=rb-4.1.0&q=85",
    alt: "Rhythmic architectural grid representing a data pattern",
    story: [
      {
        label: "Problem",
        text: "A growing team had plenty of activity data but no shared read on pipeline health.",
      },
      {
        label: "Insight",
        text: "Conversion shifted at one handoff, hiding inside otherwise healthy volume.",
      },
      {
        label: "Solution",
        text: "A focused analysis and decision dashboard gave every stakeholder the same story.",
      },
    ],
    link: "https://github.com/neelkhandelwal45/Sales-Pipeline-Analysis-and-Recommendation-System"
  },
  {
    number: "CASE / 03",
    testId: "case-card-ai-helpdesk",
    title: "Turned scattered policy docs into a usable AI helpdesk",
    tags: ["RAG", "APIs", "Product Thinking", "Next.js"],
    image: "https://images.unsplash.com/photo-1631477076114-9123f721b9dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwwfHx8fDE3ODgzNDQ4Mjd8MA&ixlib=rb-4.1.0&q=85",
    alt: "Geometric architectural forms representing a structured knowledge system",
    story: [
      {
        label: "Problem",
        text: "Teams lost time searching across long, inconsistent internal documents.",
      },
      {
        label: "Insight",
        text: "The friction was retrieval confidence: people needed sources, not just answers.",
      },
      {
        label: "Solution",
        text: "A source-aware AI interface made the right answer discoverable and reviewable.",
      },
    ],
    link: "https://github.com/neelkhandelwal45/AI-Powered-HR-Assistant"
  },
];

export type CapabilityGroup = {
  index: string;
  name: string;
  intent: string;
  items: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    index: "01",
    name: "Analyzing",
    intent: "Turn messy questions into useful evidence.",
    items: ["Python", "Pandas", "SQL", "Excel", "Power Bi", "Tableau"],
  },
  {
    index: "02",
    name: "Automating",
    intent: "Give repeatable work a more intelligent engine.",
    items: ["TensorFlow", "LangChain", "OpenAI APIs", "Scikit-learn"],
  },
  {
    index: "03",
    name: "Building",
    intent: "Wrap the insight in a product people can use.",
    items: ["JavaScript", "React", "Node.js", "HTML / CSS", "AWS"],
  },
  {
    index: "04",
    name: "Collaborating",
    intent: "Keep the work clear across every handoff.",
    items: ["Git", "Jira", "Figma"],
  },
];

export type GluePoint = {
  index: string;
  title: string;
  text: string;
};

export const gluePoints: GluePoint[] = [
  {
    index: "01",
    title: "Translation layer",
    text: "I speak Developer and Stakeholder. I translate fuzzy business requirements into precise technical specs.",
  },
  {
    index: "02",
    title: "The pivot",
    text: "I am comfortable with ambiguity. I use data to guide the team when the roadmap changes.",
  },
  {
    index: "03",
    title: "Shared context",
    text: "I make the reasoning visible, so a good solution can be trusted, challenged, and carried forward.",
  },
];
