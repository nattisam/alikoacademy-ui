import { GraduationCap, FlaskConical, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroAbout from "@/assets/hero-about.jpg";

const deliveryCards = [
  {
    icon: GraduationCap,
    title: "Hybrid Learning Infrastructure",
    content: "Scalable LMS combined with in-person hubs to deliver flexible, high-quality education at scale.",
  },
  {
    icon: FlaskConical,
    title: "Applied & Experiential",
    content: "Labs, case studies, and field deployment ensure learners gain hands-on, practical experience.",
  },
  {
    icon: Briefcase,
    title: "Integrated Career Support",
    content: "Advisory services, resume preparation, and job matching connect graduates to real opportunities.",
  },
];

const differencePoints = [
  "We design for outcomes, not enrollment.",
  "We integrate public health, STEM, and enterprise pathways.",
  "We align with continental priorities and global standards.",
  "We measure progress, not just participation.",
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
                A Workforce Ecosystem Rooted in <span className="text-gradient">Dignity and Opportunity</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Aliko Academy is the education engine of AlikoHub's Resourcefulness Ecosystem, integrating learning, mentorship, applied innovation, and real-world pathways.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg">Apply Now</Button>
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

      {/* Our Purpose */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 text-center">
            Our Purpose
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
            <p className="text-lg">
              We exist because talent is universal, but opportunity is not.
            </p>
            <p>
              Aliko Academy bridges that gap by aligning education with labor markets, industry demand, and regional development priorities. Our pathways are designed to create measurable outcomes for learners, employers, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              How We Deliver
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-xl border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
            Our Difference
          </h2>
          <div className="space-y-4">
            {differencePoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-muted-foreground leading-relaxed text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Inclusion */}
      <section className="section-padding section-alt">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Commitment to Inclusion
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Aliko Academy prioritizes gender equity, underserved communities, and accessible hybrid delivery models. Inclusion is built into our curriculum design, mentorship matching, and community programming to ensure equitable access for all learners.
          </p>
        </div>
      </section>

      {/* KPI Strip */}
      <section className="journey-strip py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "75-85%", label: "Employment Outcomes" },
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
