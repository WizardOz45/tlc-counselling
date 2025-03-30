import { ArrowRight } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            At Transforming Lives Collaboratively, we believe that everyone deserves access to quality mental health support. Our mission is to provide a safe, non-judgmental space where individuals can explore their challenges, discover inner strengths, and develop practical skills for transformation and growth.
          </p>
          <div className="flex justify-center">
            <a href="#about" className="text-[#111111] font-medium flex items-center group hover:text-[#8A9A5B] transition-all">
              Learn more about our approach
              <ArrowRight className="ml-2 group-hover:ml-3 transition-all" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
