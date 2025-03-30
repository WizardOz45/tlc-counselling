import { 
  MessageSquare, 
  Users, 
  Brain, 
  Heart, 
  Sprout, 
  Laptop, 
  ArrowRight 
} from "lucide-react";
import { Link } from "wouter";

const serviceItems = [
  {
    icon: <MessageSquare className="text-3xl" />,
    title: "Individual Therapy",
    description: "One-on-one sessions focused on your unique concerns, goals, and personal growth in a safe, confidential environment.",
    details: "Our individual therapy sessions provide a private space to explore challenges, develop coping strategies, and work toward your personal goals. Dr. Tracy Lee Kalebs takes a collaborative approach, combining evidence-based techniques with compassionate support tailored to your specific needs."
  },
  {
    icon: <Users className="text-3xl" />,
    title: "Couples Counselling",
    description: "Rebuild connection, improve communication, and strengthen your relationship with professional guidance and support.",
    details: "Our couples counseling helps partners develop healthier communication patterns, navigate conflicts constructively, and rebuild intimacy and trust. Whether you're facing specific challenges or simply want to strengthen your relationship, we provide tools and strategies to help you create a more fulfilling partnership."
  },
  {
    icon: <Brain className="text-3xl" />,
    title: "Cognitive Behavioral Therapy",
    description: "Evidence-based approach focused on identifying and changing negative thought patterns and behaviors.",
    details: "Cognitive Behavioral Therapy (CBT) is a practical, goal-oriented approach that helps you identify and change unhelpful thought patterns and behaviors. This approach is highly effective for anxiety, depression, stress management, and many other concerns, offering concrete strategies you can apply in your daily life."
  },
  {
    icon: <Heart className="text-3xl" />,
    title: "Trauma-Informed Care",
    description: "Compassionate support for healing from past trauma using evidence-based approaches like EMDR and somatic experiencing.",
    details: "Our trauma-informed therapy creates a safe environment to process difficult experiences at your own pace. We use evidence-based approaches like EMDR (Eye Movement Desensitization and Reprocessing) and somatic experiencing to help you integrate past experiences and develop a greater sense of safety, control, and resilience."
  },
  {
    icon: <Sprout className="text-3xl" />,
    title: "Mindfulness-Based Therapy",
    description: "Learn to cultivate present-moment awareness and develop skills for managing stress, anxiety, and difficult emotions.",
    details: "Our mindfulness-based approaches help you develop greater awareness of your thoughts, feelings, and bodily sensations without judgment. These practices can reduce stress, improve emotional regulation, and enhance your overall sense of wellbeing. We'll guide you in developing practical mindfulness skills you can integrate into your daily life."
  },
  {
    icon: <Laptop className="text-3xl" />,
    title: "Online Counselling",
    description: "Convenient, secure virtual sessions providing the same quality care as in-person therapy from the comfort of your home.",
    details: "Our secure online therapy platform makes professional counseling accessible regardless of your location or schedule. Virtual sessions offer the same quality care as in-person therapy, with the added convenience of connecting from your home or other private space. This option is ideal for clients with busy schedules, mobility challenges, or those who prefer the comfort of their own environment."
  },
];

const Services = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Our Services & Approach
          </h1>
          <p className="text-lg">
            We offer a variety of therapeutic approaches tailored to meet your individual needs and help you achieve your personal goals. Each service is provided by Tracy Lee Kalebs, PhD, with expertise in multiple evidence-based methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="text-[#8A9A5B] mb-4">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="mb-4">{service.description}</p>
              <p className="mb-4 text-sm text-gray-600 flex-grow">{service.details}</p>
              <Link
                href="/contact"
                className="text-[#111111] font-medium flex items-center group hover:text-[#8A9A5B] transition-all mt-auto"
              >
                <span className="flex items-center">
                  Book a session
                  <ArrowRight className="ml-2 group-hover:ml-3 transition-all" size={16} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;