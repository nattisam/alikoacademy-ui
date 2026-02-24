import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import logoStem from "@/assets/logo-stem.png";
import logoTech from "@/assets/logo-tech.png";
import logoHealth from "@/assets/logo-health.png";

const categories = [
  {
    title: "STEM",
    description: "Explore Science, Technology, Engineering, and Mathematics fundamentals.",
    courses: "2 Courses",
    logo: logoStem,
    url: "https://aliko-academy-stem.lovable.app/",
  },
  {
    title: "Technology",
    description: "Master modern technology skills, from programming to system design.",
    courses: "2 Courses",
    logo: logoTech,
    url: "https://aliko-academy-tech.lovable.app/",
  },
  {
    title: "Health",
    description: "Advance your career in healthcare with our comprehensive medical courses.",
    courses: "2 Courses",
    logo: logoHealth,
    url: "https://aliko-academy-health.lovable.app/",
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
                  <div className="h-40 overflow-hidden bg-white flex items-center justify-center p-4">
                    <img
                      src={cat.logo}
                      alt={cat.title}
                      className="max-h-full max-w-full object-contain"
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
