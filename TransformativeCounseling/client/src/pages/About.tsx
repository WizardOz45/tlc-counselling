import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-8 text-center">
          About Our Practice
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6">
              Founded on principles of compassion and collaboration, TLC Counselling offers evidence-based therapeutic approaches tailored to your unique needs and goals.
            </p>
            <p className="text-lg mb-6">
              Our team of experienced counsellors specializes in various areas including anxiety, depression, trauma, relationships, and personal growth.
            </p>
            
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-medium mb-4">Our Mission</h2>
              <p className="text-lg mb-4">
                At Transforming Lives Collaboratively, we believe that everyone deserves access to quality mental health support. Our mission is to provide a safe, non-judgmental space where individuals can explore their challenges, discover inner strengths, and develop practical skills for transformation and growth.
              </p>
            </div>

            {/* Team Preview */}
            <div className="mt-8">
              <h3 className="font-heading text-xl font-medium mb-4">Meet Our Lead Counsellor</h3>
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mr-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" 
                    alt="Lead Counsellor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Tracy Lee Kalebs</h4>
                  <p className="text-gray-600">PhD, Clinical Psychology</p>
                  <p className="mt-2 text-sm max-w-md">
                    With over 15 years of experience, Tracy specializes in trauma-informed therapy, relationship counseling, and mindfulness-based approaches.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                asChild
                className="bg-[#111111] hover:bg-black text-white"
              >
                <Link href="/services">Our Therapeutic Approaches</Link>
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
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Counseling session"
                className="rounded-lg shadow-lg w-full h-40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1545263595-8318986aa274?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Therapy room"
                className="rounded-lg shadow-lg w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;