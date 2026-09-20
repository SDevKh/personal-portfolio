import React from "react";
import {
  SiPython,
  SiPandas,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiJira,
  SiFigma,
  SiTensorflow,
  SiLangchain,
  SiScikitlearn,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiPytorch,
  SiGraphql,
  SiFastapi,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import {
  Database,
  FileSpreadsheet,
  BarChart3,
  Sparkles,
  Layers,
  Network,
  Cpu,
  Brain,
  Search,
  LineChart,
  Lightbulb,
  MessageSquareQuote,
  Workflow,
  Wrench,
  Terminal,
} from "lucide-react";

// Crisp vector SVG definitions for specific brands with custom multi-color or high-fidelity geometry
function OpenAIIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.66-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1402-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1636a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6862zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.907 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6742 4.6543v.0001zm-8.8646 5.8665l-2.678-1.543 2.678-1.543 2.678 1.543-2.678 1.543z" />
    </svg>
  );
}

function TableauIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.375 0v3.084h1.25V0h-1.25zm0 20.916V24h1.25v-3.084h-1.25zM0 11.375v1.25h3.084v-1.25H0zm20.916 0v1.25H24v-1.25h-3.084zM5.542 5.542v2.333h2.333V5.542H5.542zm10.583 0v2.333h2.333V5.542h-2.333zM5.542 16.125v2.333h2.333v-2.333H5.542zm10.583 0v2.333h2.333v-2.333h-2.333zM10.833 6.083v4.75H6.083v2.334h4.75v4.75h2.334v-4.75h4.75v-2.334h-4.75v-4.75h-2.334z" />
    </svg>
  );
}

function PowerBIIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="12" width="4.5" height="10" rx="1" opacity="0.6" />
      <rect x="9.5" y="7" width="4.5" height="15" rx="1" opacity="0.8" />
      <rect x="17" y="2" width="4.5" height="20" rx="1" />
    </svg>
  );
}

function ExcelIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.17 3.25H7.83A1.58 1.58 0 0 0 6.25 4.83v2.42h7.92a1.58 1.58 0 0 1 1.58 1.58v7.92h5.42a1.58 1.58 0 0 0 1.58-1.58V4.83a1.58 1.58 0 0 0-1.58-1.58z" opacity="0.7" />
      <rect x="2.83" y="6.75" width="12.33" height="14" rx="1.5" />
      <path
        d="M6.5 10.5l2.2 3-2.2 3h1.8l1.3-2 1.3 2h1.8l-2.2-3 2.2-3h-1.8l-1.3 2-1.3-2H6.5z"
        fill="var(--bg, #080b0e)"
      />
    </svg>
  );
}

function SqlIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
    </svg>
  );
}

function HtmlCssIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} style={{ display: "inline-flex", gap: "3px" }}>
      <SiHtml5 size={size} title="HTML5" />
      <SiCss size={size} title="CSS3" />
    </div>
  );
}

export type TechItem = {
  name: string;
  category?: string;
  color?: string;
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 20, className = "" }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized === "python") return <SiPython size={size} className={className} />;
  // Pandas
  if (normalized === "pandas") return <SiPandas size={size} className={className} />;
  // SQL / Relational
  if (normalized === "sql" || normalized === "mysql" || normalized === "postgresql") {
    if (normalized === "postgresql") return <SiPostgresql size={size} className={className} />;
    if (normalized === "mysql") return <SiMysql size={size} className={className} />;
    return <SqlIcon size={size} className={className} />;
  }
  // Excel
  if (normalized.includes("excel")) return <ExcelIcon size={size} className={className} />;
  // Power BI
  if (normalized.includes("power bi") || normalized === "powerbi") {
    return <PowerBIIcon size={size} className={className} />;
  }
  // Tableau
  if (normalized === "tableau") return <TableauIcon size={size} className={className} />;
  // TensorFlow
  if (normalized === "tensorflow") return <SiTensorflow size={size} className={className} />;
  // LangChain
  if (normalized === "langchain") return <SiLangchain size={size} className={className} />;
  // OpenAI / LLM
  if (normalized.includes("openai")) return <OpenAIIcon size={size} className={className} />;
  // Scikit-learn
  if (normalized.includes("scikit")) return <SiScikitlearn size={size} className={className} />;
  // PyTorch
  if (normalized === "pytorch") return <SiPytorch size={size} className={className} />;
  // JavaScript
  if (normalized === "javascript" || normalized === "js") {
    return <SiJavascript size={size} className={className} />;
  }
  // TypeScript
  if (normalized === "typescript" || normalized === "ts") {
    return <SiTypescript size={size} className={className} />;
  }
  // React
  if (normalized === "react") return <SiReact size={size} className={className} />;
  // Node.js
  if (normalized.includes("node")) return <SiNodedotjs size={size} className={className} />;
  // HTML / CSS
  if (normalized.includes("html") && normalized.includes("css")) {
    return <HtmlCssIcon size={size} className={className} />;
  }
  if (normalized === "html" || normalized === "html5") {
    return <SiHtml5 size={size} className={className} />;
  }
  if (normalized === "css" || normalized === "css3") {
    return <SiCss size={size} className={className} />;
  }
  // AWS
  if (normalized === "aws" || normalized.includes("amazon")) {
    return <FaAws size={size} className={className} />;
  }
  // Next.js
  if (normalized.includes("next")) return <SiNextdotjs size={size} className={className} />;
  // Git
  if (normalized === "git") return <SiGit size={size} className={className} />;
  // GitHub
  if (normalized === "github") return <SiGithub size={size} className={className} />;
  // Jira
  if (normalized === "jira") return <SiJira size={size} className={className} />;
  // Figma
  if (normalized === "figma") return <SiFigma size={size} className={className} />;
  // Docker
  if (normalized === "docker") return <SiDocker size={size} className={className} />;
  // GraphQL
  if (normalized === "graphql") return <SiGraphql size={size} className={className} />;
  // FastApi
  if (normalized === "fastapi") return <SiFastapi size={size} className={className} />;
  // Tailwind
  if (normalized.includes("tailwind")) return <SiTailwindcss size={size} className={className} />;

  // Case studies / concept tags
  if (normalized === "business analysis") return <BarChart3 size={size} className={className} />;
  if (normalized === "data viz" || normalized === "visualisation") return <LineChart size={size} className={className} />;
  if (normalized === "ai" || normalized === "ai engineering") return <Sparkles size={size} className={className} />;
  if (normalized === "rag") return <Layers size={size} className={className} />;
  if (normalized === "apis" || normalized === "api") return <Network size={size} className={className} />;
  if (normalized === "storytelling") return <MessageSquareQuote size={size} className={className} />;
  if (normalized === "product thinking") return <Lightbulb size={size} className={className} />;

  // Fallback
  return <Terminal size={size} className={className} />;
}

export default TechIcon;
