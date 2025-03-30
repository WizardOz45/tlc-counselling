import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. We will contact you shortly!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg mb-8">
              We're here to answer your questions and help you take the first
              step toward positive change. Reach out to schedule a consultation
              or learn more about our services.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 text-[#8A9A5B]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Office Location</h3>
                  <p>
                    123 Healing Way, Suite 201
                    <br />
                    Serenity Heights, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-[#8A9A5B]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-[#8A9A5B]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p>contact@tlccounselling.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 text-[#8A9A5B]">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Hours</h3>
                  <p>
                    Monday - Friday: 9am - 7pm
                    <br />
                    Saturday: 10am - 3pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-heading text-2xl font-semibold mb-6">
                Request a Consultation
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service of Interest</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="individual">Individual Therapy</SelectItem>
                            <SelectItem value="couples">Couples Counselling</SelectItem>
                            <SelectItem value="trauma">Trauma-Informed Care</SelectItem>
                            <SelectItem value="cbt">Cognitive Behavioral Therapy</SelectItem>
                            <SelectItem value="mindfulness">Mindfulness-Based Therapy</SelectItem>
                            <SelectItem value="online">Online Counselling</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please let us know how we can help..."
                            className="resize-none"
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-[#111111] hover:bg-black"
                    disabled={isPending}
                  >
                    {isPending ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
