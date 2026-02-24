import { GraduationCap, Users, Briefcase, Heart, FlaskConical } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Hybrid Learning", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { icon: FlaskConical, label: "Applied Labs", color: "bg-amber-50 text-amber-600 border-amber-200" },
  { icon: Users, label: "Mentorship", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { icon: Briefcase, label: "Career Support", color: "bg-purple-50 text-purple-600 border-purple-200" },
  { icon: Heart, label: "Employer-Aligned Curriculum", color: "bg-rose-50 text-rose-600 border-rose-200" },
];

const TrustStrip = () => (
  <div className="border-y" style={{ backgroundColor: "hsla(25, 80%, 52%, 0.12)" }}>
    <div className="section-container py-6">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center">
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${item.color}`}>
              <item.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-foreground mt-2 whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
