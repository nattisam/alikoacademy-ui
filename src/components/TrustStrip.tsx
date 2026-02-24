import { GraduationCap, Users, Briefcase, Heart, FlaskConical } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Hybrid Learning" },
  { icon: FlaskConical, label: "Applied Labs" },
  { icon: Users, label: "Mentorship" },
  { icon: Briefcase, label: "Career Support" },
  { icon: Heart, label: "Employer-Aligned Curriculum" },
];

const TrustStrip = () => (
  <div className="section-alt border-y">
    <div className="section-container py-6">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
            <item.icon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
