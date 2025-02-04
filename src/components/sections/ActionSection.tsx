import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ActionSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.mobile) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScpwMjertq0Ewi1Oa5QXJrLPZLI-KU4n9-o2_TfXNswXmmfSQ/formResponse";
    
    const formBody = new URLSearchParams({
      "entry.411793930": formData.name,
      "entry.332356986": formData.company,
      "entry.427871165": formData.mobile,
      "entry.1574753000": formData.message || ""
    });

    try {
      // Using fetch with no-cors mode since Google Forms doesn't support CORS
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      });

      // Clear form and show success message
      setFormData({
        name: "",
        company: "",
        mobile: "",
        message: ""
      });

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
        className: "bg-green-500 text-white"
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="action-section" className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 max-w-[900px] mx-auto overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#1E3A8A] mb-8">
                Get in Touch
              </h3>
              
              <ul className="space-y-5 mb-8">
                {[
                  "Custom growth roadmap",
                  "ROI projection",
                  "Integration timeline",
                  "Live demo"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#1F2937] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#F8FAFC] p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you today?"
                    className="w-full min-h-[100px]"
                    aria-label="Optional message"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Optional: Feel free to share your thoughts or skip this field
                  </p>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#2563EB] hover:bg-[#1E40AF] shadow-[0_4px_14px_0_rgb(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:-translate-y-1 transition duration-200 ease-in-out text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionSection;
