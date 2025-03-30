import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How long does a typical counselling session last?",
    answer:
      "Standard counselling sessions with Dr. Tracy Lee Kalebs are 50 minutes long. For initial consultations or specialized treatments, sessions may be extended to 80 minutes. We'll discuss the appropriate session length based on your specific needs during our first conversation.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies greatly depending on your goals, the complexity of the issues you're addressing, and your personal progress. Some clients achieve their goals in 6-8 sessions, while others benefit from longer-term support. Dr. Kalebs will regularly review your progress with you and adjust the approach accordingly to ensure you receive the most effective care.",
  },
  {
    question: "Is everything I share confidential?",
    answer:
      "Yes, confidentiality is a cornerstone of our practice. Everything you share is kept strictly confidential, with a few legal exceptions: if there is an immediate risk of harm to yourself or others, suspicion of child abuse, or if records are subpoenaed by a court. Dr. Kalebs will discuss these limitations in detail during your first session.",
  },
  {
    question: "What if I need to cancel an appointment?",
    answer:
      "We understand that circumstances change. We request at least 24 hours' notice for cancellations to avoid a cancellation fee. For emergency situations, please contact us as soon as possible and we'll do our best to accommodate your needs.",
  },
  {
    question: "Do you offer online counselling?",
    answer:
      "Yes, Dr. Kalebs offers secure, confidential online counselling sessions using encrypted video platforms. Online therapy provides the same quality of care as in-person sessions and can be a convenient option for clients with busy schedules, mobility issues, or those who live farther away.",
  },
  {
    question: "What is Dr. Kalebs' approach to therapy?",
    answer:
      "Dr. Tracy Lee Kalebs uses an integrative approach that draws from various evidence-based therapeutic modalities, including Cognitive Behavioral Therapy (CBT), mindfulness-based approaches, trauma-informed care, and attachment theory. She tailors her approach to each client's unique needs, goals, and preferences, creating a collaborative healing relationship that empowers you in your journey toward wellbeing.",
  },
  {
    question: "What should I expect in the first session?",
    answer:
      "Your first session with Dr. Kalebs will focus on understanding your concerns, goals, and background. She'll ask questions to gain a comprehensive picture of your situation and explain how therapy works. This is also your opportunity to ask questions and determine if her approach feels right for you. By the end of the session, you'll discuss potential next steps and develop an initial plan for your therapy journey.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "TLC Counselling is a private-pay practice, but we can provide you with a superbill that you may submit to your insurance company for potential reimbursement. We recommend checking with your insurance provider about their out-of-network benefits and reimbursement policies before your first appointment.",
  },
  {
    question: "How do I know if therapy is working?",
    answer:
      "Progress in therapy often includes observable changes in your thoughts, feelings, behaviors, and relationships. Dr. Kalebs will work with you to establish clear goals at the beginning of therapy and regularly check in about your progress. Some signs therapy is working include improved coping skills, greater self-awareness, healthier relationships, and an enhanced ability to manage difficult emotions.",
  },
  {
    question: "What if I don't feel a connection with my therapist?",
    answer:
      "The therapeutic relationship is a crucial factor in successful therapy outcomes. If you don't feel a connection with Dr. Kalebs after a few sessions, we encourage you to discuss this openly. Sometimes addressing these concerns can actually strengthen the therapeutic relationship. If it's determined that another provider might be a better fit, Dr. Kalebs will gladly provide referrals to trusted colleagues.",
  },
];

const Faq = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg">
            Find answers to common questions about Dr. Tracy Lee Kalebs' counselling services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#CCCCCC] rounded-lg overflow-hidden data-[state=open]:border-[#8A9A5B]"
              >
                <AccordionTrigger className="p-5 text-left font-medium focus:outline-none hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-gray-700">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="mb-4">Don't see your question? Contact us directly.</p>
            <Button 
              asChild
              className="bg-[#111111] hover:bg-black text-white"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;