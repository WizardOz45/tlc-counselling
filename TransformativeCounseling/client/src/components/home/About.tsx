import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              About Our Practice
            </h2>
            <p className="text-lg mb-4">
              Founded on principles of compassion and collaboration, TLC Counselling offers evidence-based therapeutic approaches tailored to your unique needs and goals.
            </p>
            <p className="text-lg mb-6">
              Our team of experienced counsellors specializes in various areas including anxiety, depression, trauma, relationships, and personal growth.
            </p>

            {/* Team Preview */}
            <div className="mt-8">
              <h3 className="font-heading text-xl font-medium mb-4">Meet Our Lead Counsellor</h3>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mr-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                    alt="Lead Counsellor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Dr. Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">PhD, Clinical Psychology</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                asChild
                className="bg-[#111111] hover:bg-black text-white"
              >
                <a href="#services">Our Therapeutic Approaches</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Peaceful counseling office"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
