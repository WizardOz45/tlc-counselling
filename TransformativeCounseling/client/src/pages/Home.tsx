import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
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
          <p className="text-base md:text-xl max-w-2xl mx-auto mb-4">
            A supportive space for healing, growth, and emotional wellbeing
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8">
            with <span className="font-semibold">Dr. Tracy Lee Kalebs</span>
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

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">
              Welcome to TLC Counselling
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              At Transforming Lives Collaboratively, Dr. Tracy Lee Kalebs provides a safe, 
              non-judgmental space where you can explore challenges, discover inner strengths, 
              and develop practical skills for transformation and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                variant="outline"
                className="border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
              >
                <Link href="/about">About Us</Link>
              </Button>
              <Button
                asChild
                className="bg-[#111111] text-white hover:bg-black"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
