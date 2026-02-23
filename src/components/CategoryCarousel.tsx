import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import pathwayHealth from "@/assets/pathway-health.jpg";
import pathwayStem from "@/assets/pathway-stem.jpg";
import pathwayInnovation from "@/assets/pathway-innovation.jpg";

const categories = [
  {
    title: "STEM",
    description: "Explore Science, Technology, Engineering, and Mathematics fundamentals.",
    courses: "2 Courses",
    image: pathwayStem,
    url: "https://alikohub.com",
  },
  {
    title: "Technology",
    description: "Master modern technology skills, from programming to system design.",
    courses: "2 Courses",
    image: pathwayInnovation,
    url: "https://alikohub.com",
  },
  {
    title: "Health",
    description: "Advance your career in healthcare with our comprehensive medical courses.",
    courses: "2 Courses",
    image: pathwayHealth,
    url: "https://alikohub.com",
  },
];

const CategoryCarousel = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {categories.map((cat) => (
              <CarouselItem key={cat.title} className="pl-4 md:basis-1/3 basis-4/5">
                <div className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="h-40 overflow-hidden bg-muted">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-xl text-foreground">{cat.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t">
                      <span className="text-xs text-muted-foreground font-medium">{cat.courses}</span>
                      <a
                        href={cat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        View Website <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-5" />
          <CarouselNext className="-right-4 md:-right-5" />
        </Carousel>
      </div>
    </section>
  );
};

export default CategoryCarousel;
