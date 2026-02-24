import { FileText, Video, Briefcase, Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LmsNavbar from "@/components/LmsNavbar";

const careerTools = [
  {
    icon: FileText,
    title: "Resume Builder",
    desc: "Create a professional resume tailored to your skills and career goals.",
    cta: "Build Resume",
  },
  {
    icon: Video,
    title: "Mock Interview",
    desc: "Practice with industry-aligned mock interviews and get feedback.",
    cta: "Schedule Session",
  },
  {
    icon: Briefcase,
    title: "Internship Board",
    desc: "Browse internship opportunities matched to your stream and skill level.",
    cta: "View Opportunities",
  },
  {
    icon: Upload,
    title: "Portfolio Upload",
    desc: "Showcase your projects and certifications to potential employers.",
    cta: "Upload Work",
  },
];

const LmsCareerHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <LmsNavbar />

      <div className="section-container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">Career Hub</h1>
        <p className="text-muted-foreground mb-8">Tools and resources to transition from learning to career.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {careerTools.map((tool) => (
            <div
              key={tool.title}
              className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                <tool.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.desc}</p>
              <Button variant="outline" size="sm" className="gap-1">
                {tool.cta} <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LmsCareerHub;
