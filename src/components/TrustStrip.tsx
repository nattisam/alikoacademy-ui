import { GraduationCap, Users, Briefcase, Heart, FlaskConical } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Hybrid Learning" },
  { icon: FlaskConical, label: "Applied Labs" },
  { icon: Users, label: "Mentorship" },
  { icon: Briefcase, label: "Career Support" },
  { icon: Heart, label: "Employer-Aligned Curriculum" },
];

const TrustStrip = () => (
  <div className="border-y" style={{ backgroundColor: "#E8792B" }}>
    <div className="section-container py-6">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-900/30 bg-blue-900/20 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-blue-900" />
            </div>
            <span className="text-xs font-semibold text-blue-900 mt-2 whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
