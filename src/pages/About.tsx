import { Target, Layers, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroAbout from "@/assets/hero-about.jpg";

const sections = [
  {
    icon: Target,
    title: "Why We Exist",
    content:
      "Africa's youth represent its greatest asset—yet millions lack access to quality skills training aligned with market needs. AlikoHub Academy exists to close this gap with dignity-centered, opportunity-driven pathways that transform potential into livelihood.",
  },
  {
    icon: Layers,
    title: "How We Deliver",
    content:
      "We combine hybrid learning environments, a modern LMS platform, applied labs, and dedicated mentorship to create a learning experience that goes far beyond traditional coursework. Our hubs connect learners to real-world practice and employer networks.",
  },
  {
    icon: Star,
    title: "What Makes Us Different",
    content:
      "Every pathway is co-designed with employers and industry experts to ensure graduates meet real hiring needs. We measure success not by enrollment, but by outcomes—75–85% of our learners transition into employment, further education, or ventures.",
  },
  {
    icon: Heart,
    title: "Commitment to Inclusion",
    content:
      "We actively target 45% female participation across all pathways. Inclusion isn't an afterthought—it's built into our curriculum design, mentorship matching, and community programming to ensure equitable access for all learners.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="section-container py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
                A Dignity-Centered <span className="text-gradient">Workforce Ecosystem</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Aliko Academy is part of AlikoHub's resourcefulness ecosystem—connecting learning, mentorship, applied practice, and opportunity across Africa and global pathways.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg">Get a Proposal</Button>
                <Button size="lg" variant="outline">Apply / Sign Up</Button>
              </div>
            </div>

            <div className="relative flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />
                <img
                  src={heroAbout}
                  alt="Student with books"
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute top-4 -left-4 bg-card rounded-xl shadow-lg p-3 border">
                  <p className="text-xl font-heading font-bold text-primary">1000+</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Students</p>
                </div>
                <div className="absolute bottom-8 -right-4 bg-card rounded-xl shadow-lg p-3 border">
                  <p className="text-xl font-heading font-bold text-primary">100+</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-xl border p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Strip */}
      <section className="journey-strip py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "75–85%", label: "Employment Outcomes" },
              { value: "45%", label: "Female Participation Target" },
              { value: "1000+", label: "Learners Trained" },
              { value: "4", label: "Specialized Pathways" },
            ].map((kpi) => (
              <div key={kpi.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold">{kpi.value}</p>
                <p className="text-sm opacity-80 mt-1">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
