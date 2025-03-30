import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const resources = [
  {
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Understanding Anxiety: Causes and Coping Strategies",
    description: "Learn about the root causes of anxiety and discover effective techniques for managing symptoms and building resilience.",
    link: "/resources/anxiety"
  },
  {
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Building Healthy Communication in Relationships",
    description: "Discover essential communication skills that can strengthen connection, resolve conflicts, and deepen intimacy in relationships.",
    link: "/resources/communication"
  },
  {
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "5 Daily Mindfulness Practices for Better Mental Health",
    description: "Simple, effective mindfulness exercises that you can incorporate into your daily routine to reduce stress and enhance wellbeing.",
    link: "/resources/mindfulness"
  },
  {
    image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Trauma and the Body: Understanding Somatic Responses",
    description: "How trauma affects the body and practical approaches to addressing somatic symptoms through mind-body healing techniques.",
    link: "/resources/trauma"
  },
  {
    image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Breaking the Cycle: Overcoming Negative Thought Patterns",
    description: "Practical CBT techniques to identify, challenge, and transform negative thinking habits that contribute to anxiety and depression.",
    link: "/resources/cbt"
  },
  {
    image: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Self-Care Isn't Selfish: Creating a Sustainable Wellness Routine",
    description: "How to develop personalized self-care practices that support your mental health without adding to your stress.",
    link: "/resources/self-care"
  },
];

const Resources = () => {
  return (
    <div className="pt-24 pb-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Resources & Articles
          </h1>
          <p className="text-lg">
            Explore our collection of articles, tools, and insights to support
            your mental health journey, curated by Dr. Tracy Lee Kalebs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {resource.title}
                </h3>
                <p className="mb-4 flex-grow">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="text-[#111111] font-medium flex items-center group hover:text-[#8A9A5B] transition-all mt-auto"
                >
                  <span className="flex items-center">
                    Read article
                    <ArrowRight className="ml-2 group-hover:ml-3 transition-all" size={16} />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-[#111111] hover:bg-black text-white"
          >
            <Link href="/resources/all">View All Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;