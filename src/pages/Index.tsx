import { ArrowRight, ExternalLink, Shield, Monitor, Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LearnerJourney from "@/components/LearnerJourney";
import TrustStrip from "@/components/TrustStrip";
import CategoryCarousel from "@/components/CategoryCarousel";
import heroImage from "@/assets/hero-home.jpg";

const differentiators = [
  {
    icon: Shield,
    title: "Employer-Aligned Design",
    desc: "Built with labor market and industry alignment to ensure graduates meet real hiring needs.",
  },
  {
    icon: Monitor,
    title: "Hybrid & Accessible",
    desc: "Blended LMS and hands-on learning designed to reach learners wherever they are.",
  },
  {
    icon: Briefcase,
    title: "Career-Integrated",
    desc: "Internships, job pipelines, and startup exposure embedded into every pathway.",
  },
  {
    icon: Heart,
    title: "Dignity-Centered",
    desc: "Inclusive design with measurable outcomes that prioritize equity and access.",
  },
];

const impactMetrics = [
  { value: "75-85%", label: "Targeted Employment Outcomes" },
  { value: "45%", label: "Female Participation Minimum" },
  { value: "50,000", label: "Youth Five-Year Target" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="section-container py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
                Build <span className="text-gradient">In-Demand Skills</span> for Real Opportunities
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Aliko Academy delivers market-aligned pathways across Digital Health, One Health, STEM, engineering, and innovation, designed to move learners from knowledge to livelihood.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" className="gap-2">
                  Explore Pathways <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Apply Now
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Students learning in a modern classroom" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border">
                <p className="text-2xl font-heading font-bold text-primary">1000+</p>
                <p className="text-xs text-muted-foreground">Learners Enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Strip */}
      <TrustStrip />

      {/* Pathways Carousel */}
      <CategoryCarousel />

      {/* Learner Journey */}
      <LearnerJourney />

      {/* Why Aliko Academy Is Different */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Aliko Academy Is Different
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We design for outcomes, not just enrollment. Every element of our model is built to create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-card rounded-xl border p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <d.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="journey-strip py-16 md:py-20">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Measurable Impact
            </h2>
            <p className="mt-3 opacity-80 max-w-xl mx-auto">
              We hold ourselves accountable to outcomes that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {impactMetrics.map((m) => (
              <div key={m.label}>
                <p className="text-4xl md:text-5xl font-heading font-bold">{m.value}</p>
                <p className="text-sm opacity-80 mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of learners building in-demand skills for real-world careers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              Explore Pathways <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
