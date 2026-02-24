import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    else if (form.name.length > 100) errs.name = "Name must be under 100 characters";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    else if (form.subject.length > 200) errs.subject = "Subject must be under 200 characters";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length > 2000) errs.message = "Message must be under 2000 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    }, 1200);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Get in Touch</h1>
            <p className="mt-4 text-muted-foreground">
              Have questions about our pathways or want to partner with us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: "Email", value: "info@alikohub.com" },
              { icon: Phone, label: "Phone", value: "+1 (234) 567-890" },
              { icon: MapPin, label: "Location", value: "Africa & Global" },
            ].map((c) => (
              <div key={c.label} className="bg-card rounded-xl border p-6 text-center">
                <c.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">{c.label}</p>
                <p className="font-medium text-foreground mt-1">{c.value}</p>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="bg-card rounded-xl border p-12 text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Message Sent!</h2>
              <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-xl border p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    maxLength={100}
                    className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    maxLength={255}
                    className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  maxLength={200}
                  className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  maxLength={2000}
                  className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button size="lg" className="w-full gap-2" type="submit" disabled={loading}>
                {loading ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
              </Button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
