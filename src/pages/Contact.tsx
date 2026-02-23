import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
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

        <form className="bg-card rounded-xl border p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <Button size="lg" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
