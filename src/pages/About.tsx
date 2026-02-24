import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="section-alt">
        <div className="section-container py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-foreground">
              A Workforce Ecosystem Rooted in Dignity and Opportunity
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Aliko Academy is the education engine of AlikoHub's Resourcefulness Ecosystem, integrating learning, mentorship, applied innovation, and career pathways across Africa and global markets.
            </p>
            <div className="mt-10">
              <Button size="lg">Apply Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Why We Exist
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Talent is universal, but opportunity is not.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Aliko Academy bridges that gap by aligning in-demand skills with labor markets, public health systems, infrastructure development, and emerging digital industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We prepare learners not just for employment, but for leadership and contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                How We Deliver
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Hybrid Learning Infrastructure",
                  content: "Scalable LMS combined with in-person hubs to deliver flexible, high-quality education at scale.",
                },
                {
                  title: "Applied & Experiential",
                  content: "Labs, case studies, and field deployment ensure learners gain hands-on, practical experience.",
                },
                {
                  title: "Integrated Career Support",
                  content: "Advisory services, resume preparation, and job matching connect graduates to real opportunities.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                What Makes Us Different
              </h2>
            </div>
            <div className="space-y-4">
              {[
                "We design for outcomes, not enrollment.",
                "We integrate Health, Technology, and Engineering pathways under one structured model.",
                "We align with workforce demand and continental development priorities.",
                "We build confidence, competence, and career readiness together.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Commitment
              </h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Aliko Academy prioritizes inclusive access, gender equity, and hybrid delivery models to ensure learners from diverse backgrounds can participate and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Strip */}
      <section className="journey-strip py-14">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "75-85%", label: "Employment Outcomes" },
              { value: "45%", label: "Female Participation Target" },
              { value: "1000+", label: "Learners Trained" },
              { value: "4", label: "Specialized Pathways" },
            ].map((kpi) => (
              <div key={kpi.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold text-white">{kpi.value}</p>
                <p className="text-sm text-white/60 mt-1">{kpi.label}</p>
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
