import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center text-white min-h-screen bg-[#111111] bg-opacity-50 bg-blend-overlay bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Transforming Lives Collaboratively
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto mb-8">
          A supportive space for healing, growth, and emotional wellbeing
          through professional counselling services.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-white text-[#111111] hover:bg-neutral-100 text-base py-6 px-6 w-full sm:w-auto"
          >
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
