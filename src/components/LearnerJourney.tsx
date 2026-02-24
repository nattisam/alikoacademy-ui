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
  <section className="journey-strip section-padding">
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
        From Learning to Livelihood
      </h2>
      <p className="text-center opacity-80 mb-12 max-w-xl mx-auto">
        A structured pathway that guides you from enrollment to employment and beyond.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {steps.map((step) => (
          <div key={step.label} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center">
              <step.icon className="w-7 h-7" />
            </div>
            <span className="font-heading font-semibold text-sm mt-3">{step.label}</span>
            <span className="text-xs opacity-70 mt-1 leading-snug">{step.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LearnerJourney;
