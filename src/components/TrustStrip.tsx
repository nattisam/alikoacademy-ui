import { GraduationCap, Users, Briefcase, Heart, FlaskConical } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Hybrid Learning", bg: "bg-blue-50", iconBg: "bg-blue-100", iconColor: "text-blue-600", textColor: "text-blue-700" },
  { icon: FlaskConical, label: "Applied Labs", bg: "bg-emerald-50", iconBg: "bg-emerald-100", iconColor: "text-emerald-600", textColor: "text-emerald-700" },
  { icon: Users, label: "Mentorship", bg: "bg-amber-50", iconBg: "bg-amber-100", iconColor: "text-amber-600", textColor: "text-amber-700" },
  { icon: Briefcase, label: "Career Support", bg: "bg-purple-50", iconBg: "bg-purple-100", iconColor: "text-purple-600", textColor: "text-purple-700" },
  { icon: Heart, label: "Employer-Aligned Curriculum", bg: "bg-rose-50", iconBg: "bg-rose-100", iconColor: "text-rose-600", textColor: "text-rose-700" },
];

const TrustStrip = () => (
  <div className="section-alt border-y">
    <div className="section-container py-6">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {items.map((item) => (
          <div key={item.label} className={`${item.bg} flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-transparent`}>
            <div className={`${item.iconBg} w-7 h-7 rounded-full flex items-center justify-center`}>
              <item.icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
            </div>
            <span className={`text-sm font-semibold ${item.textColor}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
