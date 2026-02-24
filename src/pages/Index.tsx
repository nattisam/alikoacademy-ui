import { ArrowRight, ExternalLink, Users, BookOpen, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LearnerJourney from "@/components/LearnerJourney";
import TrustStrip from "@/components/TrustStrip";
import CategoryCarousel from "@/components/CategoryCarousel";
import heroImage from "@/assets/hero-home.jpg";
import pathwayHealth from "@/assets/pathway-health.jpg";
import pathwayStem from "@/assets/pathway-stem.jpg";
import pathwayInnovation from "@/assets/pathway-innovation.jpg";

const pathways = [
  {
    title: "Digital Health & One Health",
    description: "Bridge healthcare and technology, master digital health tools, data-driven diagnostics, and One Health interdisciplinary approaches.",
    image: pathwayHealth,
    icon: Users,
  },
  {
    title: "STEM & Engineering",
    description: "Build foundational and advanced skills in science, technology, engineering, and mathematics for Africa's growing industries.",
    image: pathwayStem,
    icon: BookOpen,
  },
  {
    title: "Innovation & Entrepreneurship",
    description: "Turn ideas into ventures. Learn design thinking, business modeling, and launch strategies with mentorship support.",
    image: pathwayInnovation,
    icon: Lightbulb,
  },
];

const ventures = [
  {
    name: "AlikoHub Consulting",
    description: "Global consultancy services connecting African talent with international opportunities.",
    url: "https://alikohub.com",
  },
  {
    name: "AlikoHub Construction",
    description: "Smart construction tools digitizing building processes across Africa.",
    url: "https://alikohub.com",
  },
  {
    name: "AlikoHub Health",
    description: "Digital health solutions advancing healthcare access and delivery.",
    url: "https://alikohub.com",
  },
];

const deliveryMethods = [
  { icon: Users, title: "Cohort-Based Learning", desc: "Learn with peers in structured groups for a collaborative experience." },
  { icon: BookOpen, title: "Self-Paced Modules", desc: "Complete courses at your own pace, anytime and anywhere." },
  { icon: GraduationCap, title: "Industry Certification", desc: "Receive recognized certificates to showcase your skills to employers." },
  { icon: Lightbulb, title: "Applied Labs & Mentorship", desc: "Hands-on practice with real projects and dedicated mentor guidance." },
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
                Aliko Academy delivers market-aligned pathways across Digital Health, One Health, STEM, and innovation, designed to move learners from training to livelihood.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" className="gap-2">
                  Explore Pathways <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Apply / Sign Up
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Students learning in a modern classroom" className="w-full h-auto object-cover" />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border">
                <p className="text-2xl font-heading font-bold text-primary">1000+</p>
                <p className="text-xs text-muted-foreground">Learners Enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Carousel */}
      <CategoryCarousel />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Pathways */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Market-Aligned Pathways
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Choose from specialized learning tracks designed with employers and industry experts to ensure your skills match real market demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathways.map((p) => (
              <div
                key={p.title}
                className="group bg-card rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  <Button variant="link" className="mt-4 px-0 gap-1 text-primary">
                    Explore Pathway <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learner Journey */}
      <LearnerJourney />

      {/* How We Deliver */}
      <section className="section-padding section-alt">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              How We Deliver Learning
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A blended approach combining the best of online, in-person, and mentorship-driven education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryMethods.map((m) => (
              <div key={m.title} className="bg-card rounded-xl border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              AlikoHub Ventures & Partners
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The creators of the ecosystem and the engine behind Africa's employment pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ventures.map((v) => (
              <div key={v.name} className="bg-card rounded-xl border p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{v.description}</p>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  View Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="journey-strip py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="opacity-80 max-w-xl mx-auto mb-8">
            Join thousands of learners building in-demand skills for real-world careers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Explore Pathways <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-background/30 text-accent-foreground hover:bg-background/10">
              Apply / Sign Up
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
