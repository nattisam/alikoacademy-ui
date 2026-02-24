import { GraduationCap, Users, Briefcase, Heart, FlaskConical } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Hybrid Learning", color: "text-primary" },
  { icon: FlaskConical, label: "Applied Labs", color: "text-accent" },
  { icon: Users, label: "Mentorship", color: "text-primary" },
  { icon: Briefcase, label: "Career Support", color: "text-accent" },
  { icon: Heart, label: "Employer-Aligned Curriculum", color: "text-primary" },
];

const TrustStrip = () => (
  <div className="border-y" style={{ backgroundColor: "hsla(25, 80%, 52%, 0.06)" }}>
    <div className="section-container py-4">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-lg border bg-card/80 px-3.5 py-2 shadow-sm"
          >
            <item.icon className="w-4 h-4 text-primary shrink-0" />
            <span className="text-xs font-bold text-primary whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
