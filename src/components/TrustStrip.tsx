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
    <div className="section-container py-5">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
