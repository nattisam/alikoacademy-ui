import { UserPlus, BookOpen, FlaskConical, Award, Rocket, Crown } from "lucide-react";

const steps = [
  { icon: UserPlus, label: "Enroll", desc: "Register and choose your pathway." },
  { icon: BookOpen, label: "Learn", desc: "Engage with expert-led content." },
  { icon: FlaskConical, label: "Practice", desc: "Apply skills in real-world labs." },
  { icon: Award, label: "Certify", desc: "Earn recognized credentials." },
  { icon: Rocket, label: "Launch", desc: "Enter the workforce with support." },
  { icon: Crown, label: "Lead", desc: "Grow into leadership roles." },
];

const LearnerJourney = () => (
  <section className="section-alt section-padding">
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-4">
        From Learning to Livelihood
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Every learner progresses through structured certification, applied practice, mentorship, and career pathways designed for real-world impact.
      </p>

      {/* Horizontal progression */}
      <div className="relative">
        {/* Line connector */}
        <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-border" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center z-10">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="font-heading font-semibold text-sm mt-3 text-foreground">{step.label}</span>
              <span className="text-xs text-muted-foreground mt-1 leading-snug">{step.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LearnerJourney;
