import { 
  MessageSquare, 
  Users, 
  Brain, 
  Heart, 
  Sprout, 
  Laptop, 
  ArrowRight 
} from "lucide-react";

const serviceItems = [
  {
    icon: <MessageSquare className="text-3xl" />,
    title: "Individual Therapy",
    description: "One-on-one sessions focused on your unique concerns, goals, and personal growth in a safe, confidential environment.",
  },
  {
    icon: <Users className="text-3xl" />,
    title: "Couples Counselling",
    description: "Rebuild connection, improve communication, and strengthen your relationship with professional guidance and support.",
  },
  {
    icon: <Brain className="text-3xl" />,
    title: "Cognitive Behavioral Therapy",
    description: "Evidence-based approach focused on identifying and changing negative thought patterns and behaviors.",
  },
  {
    icon: <Heart className="text-3xl" />,
    title: "Trauma-Informed Care",
    description: "Compassionate support for healing from past trauma using evidence-based approaches like EMDR and somatic experiencing.",
  },
  {
    icon: <Sprout className="text-3xl" />,
    title: "Mindfulness-Based Therapy",
    description: "Learn to cultivate present-moment awareness and develop skills for managing stress, anxiety, and difficult emotions.",
  },
  {
    icon: <Laptop className="text-3xl" />,
    title: "Online Counselling",
    description: "Convenient, secure virtual sessions providing the same quality care as in-person therapy from the comfort of your home.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Our Services & Approach
          </h2>
          <p className="text-lg">
            We offer a variety of therapeutic approaches tailored to meet your individual needs and help you achieve your personal goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-[#8A9A5B] mb-4">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="mb-4">{service.description}</p>
              <a
                href="#contact"
                className="text-[#111111] font-medium flex items-center group hover:text-[#8A9A5B] transition-all"
              >
                Learn more
                <ArrowRight className="ml-2 group-hover:ml-3 transition-all" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
