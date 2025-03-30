import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Working with Tracy Lee Kalebs has been transformative. I've gained tools to manage my anxiety and developed a deeper understanding of myself. Her compassionate approach and expertise made all the difference in my healing journey.",
    author: "M.K.",
    service: "Individual Therapy",
    stars: 5
  },
  {
    content:
      "After struggling with relationship issues for years, the couples counselling with Dr. Kalebs helped us rebuild trust and develop healthier communication patterns. Her guidance created a safe space for both of us to express ourselves and grow together.",
    author: "J.D. & A.D.",
    service: "Couples Counselling",
    stars: 5
  },
  {
    content:
      "The trauma-informed approach at TLC Counselling created a safe space for me to process difficult experiences. Tracy's expertise in EMDR therapy helped me work through trauma I'd been carrying for years. For the first time, I feel hopeful about my future.",
    author: "T.R.",
    service: "Trauma-Informed Care",
    stars: 5
  },
  {
    content:
      "Dr. Kalebs' mindfulness-based approach has given me practical tools to manage my stress and anxiety. I've learned to respond rather than react to difficult situations, which has improved both my personal relationships and work life tremendously.",
    author: "L.M.",
    service: "Mindfulness-Based Therapy",
    stars: 5
  },
  {
    content:
      "The online counselling option made therapy accessible for me as a busy professional. The virtual sessions with Tracy are just as effective as in-person would be, and her flexible scheduling allowed me to prioritize my mental health without sacrificing other responsibilities.",
    author: "P.J.",
    service: "Online Counselling",
    stars: 5
  },
  {
    content:
      "CBT with Tracy helped me break free from negative thought patterns that had controlled my life for years. Her approach was both practical and compassionate, providing me with strategies I use daily to maintain my mental wellbeing.",
    author: "S.B.",
    service: "Cognitive Behavioral Therapy",
    stars: 5
  },
];

const Testimonials = () => {
  return (
    <div className="pt-24 pb-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Client Experiences
          </h1>
          <p className="text-lg">
            Hear from people who have experienced transformation through our collaborative approach with Dr. Tracy Lee Kalebs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm relative flex flex-col h-full">
              <div className="absolute top-6 right-6 text-[#8A9A5B] opacity-20">
                <Quote size={36} />
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                ))}
              </div>
              <p className="italic mb-4 relative z-10">{testimonial.content}</p>
              <div className="mt-auto">
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-[#8A9A5B]">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;