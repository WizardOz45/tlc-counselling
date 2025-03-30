import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Understanding Anxiety: Causes and Coping Strategies",
    description: "Learn about the root causes of anxiety and discover effective techniques for managing symptoms and building resilience.",
  },
  {
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Building Healthy Communication in Relationships",
    description: "Discover essential communication skills that can strengthen connection, resolve conflicts, and deepen intimacy in relationships.",
  },
  {
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "5 Daily Mindfulness Practices for Better Mental Health",
    description: "Simple, effective mindfulness exercises that you can incorporate into your daily routine to reduce stress and enhance wellbeing.",
  },
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Resources & Articles
          </h2>
          <p className="text-lg">
            Explore our collection of articles, tools, and insights to support
            your mental health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {resource.title}
                </h3>
                <p className="mb-4">{resource.description}</p>
                <a
                  href="#"
                  className="text-[#111111] font-medium flex items-center group hover:text-[#8A9A5B] transition-all"
                >
                  Read article
                  <ArrowRight className="ml-2 group-hover:ml-3 transition-all" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-[#111111] hover:bg-black text-white"
          >
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
