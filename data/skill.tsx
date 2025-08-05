// data/skills.tsx
import { Layers, Code, Github, Lightbulb, Zap, Smartphone, Server, Database } from "lucide-react"; // Menambahkan Server dan Database icon

export interface Skill {
  name: string;
  icon: React.ReactNode;
  // Ini adalah nilai yang akan digunakan untuk mengisi lingkaran (0-100)
  // Anda bisa ganti dengan 'level: "expert" | "intermediate"' jika mau lebih abstrak
  visualLevel: number;
}

export const skillsData: Skill[] = [
  { name: "Next.js", icon: <Zap size={28} />, visualLevel: 95 },
  { name: "React.js", icon: <Code size={28} />, visualLevel: 90 },
  { name: "TypeScript", icon: <Code size={28} />, visualLevel: 88 },
  { name: "Tailwind CSS", icon: <Layers size={28} />, visualLevel: 92 },
  { name: "Responsive Design", icon: <Smartphone size={28} />, visualLevel: 85 },
  { name: "State Management", icon: <Lightbulb size={28} />, visualLevel: 80 },
  { name: "REST API Integration", icon: <Code size={28} />, visualLevel: 87 },
  { name: "Performance Optimization", icon: <Zap size={28} />, visualLevel: 93 },
  { name: "SEO Optimization", icon: <Lightbulb size={28} />, visualLevel: 75 },
  { name: "Git & GitHub", icon: <Github size={28} />, visualLevel: 98 },
  { name: "Node.js", icon: <Server size={28} />, visualLevel: 82 }, // Skill baru 1
  { name: "Database (SQL/NoSQL)", icon: <Database size={28} />, visualLevel: 78 }, // Skill baru 2
];