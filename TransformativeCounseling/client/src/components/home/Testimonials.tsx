import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "Working with TLC Counselling has been transformative. I've gained tools to manage my anxiety and developed a deeper understanding of myself. The compassionate approach made all the difference.",
    author: "M.K.",
  },
  {
    content:
      "After struggling with relationship issues for years, the couples counselling at TLC helped us rebuild trust and develop healthier communication patterns. We're so grateful for the guidance.",
    author: "J.D. & A.D.",
  },
  {
    content:
      "The trauma-informed approach at TLC Counselling created a safe space for me to process difficult experiences. For the first time, I feel hopeful about my future and equipped to move forward.",
    author: "T.R.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Client Experiences
          </h2>
          <p className="text-lg">
            Hear from people who have experienced transformation through our collaborative approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F5F5F5] p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                ))}
              </div>
              <p className="italic mb-6">{testimonial.content}</p>
              <div className="font-medium">{testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
