import { ArrowRight, BookOpen, Clock, Award, TrendingUp, CheckSquare, Square, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import LmsNavbar from "@/components/LmsNavbar";

const activeCourses = [
  {
    title: "Introduction to Cloud Computing",
    stream: "Tech",
    streamColor: "bg-primary/10 text-primary",
    progress: 68,
    nextLesson: "Module 5: Cloud Deployment",
  },
  {
    title: "Health Data Analytics Foundations",
    stream: "Health",
    streamColor: "bg-destructive/10 text-destructive",
    progress: 34,
    nextLesson: "Module 3: Data Visualization",
  },
  {
    title: "AutoCAD for Civil Engineering",
    stream: "STEM",
    streamColor: "bg-green-100 text-green-700",
    progress: 85,
    nextLesson: "Module 8: Final Project",
  },
];

const careerChecklist = [
  { label: "Resume Completed", done: true },
  { label: "Skills Assessment", done: true },
  { label: "Mock Interview", done: false },
  { label: "Internship Application", done: false },
];

const upcomingSessions = [
  { title: "Live Mentoring: Career Transitions", date: "Mar 5, 2026", time: "2:00 PM" },
  { title: "Webinar: AI in Healthcare", date: "Mar 8, 2026", time: "10:00 AM" },
  { title: "Office Hours: STEM Projects", date: "Mar 10, 2026", time: "3:00 PM" },
];

const LmsDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <LmsNavbar />

      {/* Dashboard Header */}
      <section className="border-b" style={{ background: "var(--hero-gradient)" }}>
        <div className="section-container py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Welcome back, Learner
              </h1>
              <p className="mt-1 text-muted-foreground">
                You are enrolled in: <span className="font-medium text-primary">Aliko Academy Tech</span>
              </p>
              <div className="mt-4 max-w-md">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-semibold text-foreground">68%</span>
                </div>
                <Progress value={68} className="h-3" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Next Milestone: <span className="font-medium text-foreground">Complete Module 5, Cloud Deployment</span>
              </p>
            </div>
            <Button size="lg" className="gap-2 self-start">
              Continue Learning <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <div className="section-container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Active Courses */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-heading font-semibold text-foreground">My Active Courses</h2>
            <div className="space-y-4">
              {activeCourses.map((course) => (
                <div
                  key={course.title}
                  className="bg-card rounded-xl border p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${course.streamColor}`}>
                          {course.stream}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Next: {course.nextLesson}</p>
                      <div className="mt-3 max-w-xs">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </div>
                    <Button size="sm" className="gap-1 self-start">
                      Continue <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Learning Stats */}
            <div className="bg-card rounded-xl border p-5">
              <h3 className="font-heading font-semibold text-foreground mb-4">Learning Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, label: "Courses Active", value: "3" },
                  { icon: Award, label: "Completed", value: "2" },
                  { icon: Clock, label: "Hours Learned", value: "47" },
                  { icon: TrendingUp, label: "Avg Score", value: "82%" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-muted/50">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-lg font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Readiness */}
            <div className="bg-card rounded-xl border p-5">
              <h3 className="font-heading font-semibold text-foreground mb-4">Career Readiness</h3>
              <div className="space-y-3">
                {careerChecklist.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    {item.done ? (
                      <CheckSquare className="w-5 h-5 text-primary" />
                    ) : (
                      <Square className="w-5 h-5 text-muted-foreground" />
                    )}
                    <span className={`text-sm ${item.done ? "text-foreground" : "text-muted-foreground"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-card rounded-xl border p-5">
              <h3 className="font-heading font-semibold text-foreground mb-4">Upcoming Sessions</h3>
              <div className="space-y-3">
                {upcomingSessions.map((session) => (
                  <div key={session.title} className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{session.title}</p>
                      <p className="text-xs text-muted-foreground">{session.date} at {session.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LmsDashboard;
