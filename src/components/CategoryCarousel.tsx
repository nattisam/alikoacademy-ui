import { ExternalLink } from "lucide-react";
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
    title: "Aliko Academy Health",
    description: "Clinical and digital health pathways including CNA, medical coding, CPR/BLS, and advanced health analytics for resilient healthcare systems.",
    courses: "2 Courses",
    logo: logoHealth,
    url: "https://aliko-academy-health.lovable.app/",
    accent: "from-red-50 to-red-50/50",
    btnLabel: "Visit Health Stream Website",
  },
  {
    title: "Aliko Academy Tech",
    description: "Career-ready programs in software engineering, data, AI, and cloud systems aligned with modern digital workforce demands.",
    courses: "2 Courses",
    logo: logoTech,
    url: "https://aliko-academy-tech.lovable.app/",
    accent: "from-primary/10 to-primary/5",
    btnLabel: "Visit Tech Stream Website",
  },
  {
    title: "Aliko Academy STEM",
    description: "Applied engineering and design software training across civil, electrical, mechanical, aviation, and BIM systems.",
    courses: "2 Courses",
    logo: logoStem,
    url: "https://aliko-academy-stem.lovable.app/",
    accent: "from-green-50 to-green-50/50",
    btnLabel: "Visit STEM Stream Website",
  },
];

const CategoryCarousel = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Pre-card banner */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your Pathway
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Each stream is designed with employers and industry experts to ensure your skills match real market demand.
          </p>
          <div className="inline-block bg-primary/5 border border-primary/20 rounded-lg px-5 py-3">
            <p className="text-sm text-primary font-medium">
              Visit each stream website to explore programs, apply, or submit a course inquiry.
            </p>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {categories.map((cat) => (
              <CarouselItem key={cat.title} className="pl-4 md:basis-1/3 basis-4/5">
                <div className="bg-card rounded-xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className={`h-40 overflow-hidden bg-gradient-to-br ${cat.accent} flex items-center justify-center p-4`}>
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
                        {cat.btnLabel} <ExternalLink className="w-3.5 h-3.5" />
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
