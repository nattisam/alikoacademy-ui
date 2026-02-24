import { UserPlus, BookOpen, FlaskConical, Award, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, label: "Enroll" },
  { icon: BookOpen, label: "Learn" },
  { icon: FlaskConical, label: "Practice" },
  { icon: Award, label: "Certify" },
  { icon: Rocket, label: "Launch Career" },
];

const LearnerJourney = () => (
  <section className="journey-strip section-padding">
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
        Your Learner Journey
      </h2>
      <p className="text-center opacity-80 mb-12 max-w-xl mx-auto">
        From enrollment to employment, our structured pathway guides you every step of the way.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-4 md:gap-0 md:flex-col md:items-center">
            <div className="w-16 h-16 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center">
              <step.icon className="w-7 h-7" />
            </div>
            <span className="font-heading font-semibold text-sm mt-0 md:mt-3">{step.label}</span>

            {/* Arrow connector (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute" style={{ display: "none" }} />
            )}
          </div>
        ))}
      </div>

      {/* Desktop connector line */}
      <div className="hidden md:block relative -mt-[52px] mb-8 mx-auto" style={{ maxWidth: "80%", height: 2 }}>
        <div className="w-full h-full bg-background/20 rounded-full" />
      </div>
    </div>
  </section>
);

export default LearnerJourney;
