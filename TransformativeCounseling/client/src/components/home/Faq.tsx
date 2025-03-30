import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
      "Standard counselling sessions are 50 minutes long. For initial consultations or specialized treatments, sessions may be extended to 80 minutes. We'll discuss the appropriate session length based on your specific needs.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies greatly depending on your goals, the complexity of the issues you're addressing, and your personal progress. Some clients achieve their goals in 6-8 sessions, while others benefit from longer-term support. We'll regularly review your progress and adjust our approach accordingly.",
  },
  {
    question: "Is everything I share confidential?",
    answer:
      "Yes, confidentiality is a cornerstone of our practice. Everything you share is kept strictly confidential, with a few legal exceptions: if there is an immediate risk of harm to yourself or others, suspicion of child abuse, or if records are subpoenaed by a court. We'll discuss these limitations in detail during your first session.",
  },
  {
    question: "What if I need to cancel an appointment?",
    answer:
      "We understand that circumstances change. We request at least 24 hours' notice for cancellations to avoid a cancellation fee. For emergency situations, please contact us as soon as possible and we'll do our best to accommodate your needs.",
  },
  {
    question: "Do you offer online counselling?",
    answer:
      "Yes, we offer secure, confidential online counselling sessions using encrypted video platforms. Online therapy provides the same quality of care as in-person sessions and can be a convenient option for clients with busy schedules, mobility issues, or those who live farther away.",
  },
];

const Faq = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg">
            Find answers to common questions about our counselling services and process.
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
                <AccordionContent className="px-5 pb-5">
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
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
