import { useState } from "react";
import { Search, Clock, BarChart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import LmsNavbar from "@/components/LmsNavbar";

const streams = ["All", "Health", "Tech", "STEM"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const courses = [
  { title: "CNA Certification Prep", stream: "Health", level: "Beginner", duration: "8 weeks", rating: 4.7, streamClass: "stream-health" },
  { title: "Medical Coding Fundamentals", stream: "Health", level: "Intermediate", duration: "10 weeks", rating: 4.5, streamClass: "stream-health" },
  { title: "Health Data Analytics", stream: "Health", level: "Advanced", duration: "12 weeks", rating: 4.8, streamClass: "stream-health" },
  { title: "Full-Stack Web Development", stream: "Tech", level: "Intermediate", duration: "16 weeks", rating: 4.9, streamClass: "stream-tech" },
  { title: "Introduction to Cloud Computing", stream: "Tech", level: "Beginner", duration: "6 weeks", rating: 4.6, streamClass: "stream-tech" },
  { title: "AI and Machine Learning", stream: "Tech", level: "Advanced", duration: "14 weeks", rating: 4.8, streamClass: "stream-tech" },
  { title: "AutoCAD for Civil Engineering", stream: "STEM", level: "Beginner", duration: "8 weeks", rating: 4.4, streamClass: "stream-stem" },
  { title: "BIM Systems and Design", stream: "STEM", level: "Intermediate", duration: "10 weeks", rating: 4.5, streamClass: "stream-stem" },
  { title: "Electrical Systems Modeling", stream: "STEM", level: "Advanced", duration: "12 weeks", rating: 4.3, streamClass: "stream-stem" },
];

const LmsExplore = () => {
  const [search, setSearch] = useState("");
  const [activeStream, setActiveStream] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");

  const filtered = courses.filter((c) => {
    const matchStream = activeStream === "All" || c.stream === activeStream;
    const matchLevel = activeLevel === "All Levels" || c.level === activeLevel;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchStream && matchLevel && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <LmsNavbar />

      <div className="section-container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Explore Courses</h1>

        {/* Search */}
        <div className="relative mb-6 max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex gap-2">
            {streams.map((s) => (
              <button
                key={s}
                onClick={() => setActiveStream(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeStream === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setActiveLevel(l)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeLevel === l
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <div
              key={course.title}
              className="bg-card rounded-lg border overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="h-32 bg-muted flex items-center justify-center">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${course.streamClass}`}>
                  {course.stream}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><BarChart className="w-3 h-3" /> {course.level}</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-accent" /> {course.rating}</span>
                </div>
                <Button size="sm" className="w-full">Enroll</Button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No courses found matching your filters.</p>
        )}
      </div>
    </div>
  );
};

export default LmsExplore;
