import { GraduationCap, Users, Briefcase, Heart, FlaskConical } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Hybrid Learning", dot: "bg-blue-500", text: "text-blue-600" },
  { icon: FlaskConical, label: "Applied Labs", dot: "bg-emerald-500", text: "text-emerald-600" },
  { icon: Users, label: "Mentorship", dot: "bg-amber-500", text: "text-amber-600" },
  { icon: Briefcase, label: "Career Support", dot: "bg-purple-500", text: "text-purple-600" },
  { icon: Heart, label: "Employer-Aligned Curriculum", dot: "bg-rose-500", text: "text-rose-600" },
];

const TrustStrip = () => (
  <div className="section-alt border-y">
    <div className="section-container py-5">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <div className={`w-2 h-2 rounded-full ${item.dot}`} />
            <item.icon className="w-4 h-4 text-muted-foreground" />
            <span className={`text-sm font-bold ${item.text}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
