import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="section-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="font-heading font-bold text-lg">
            Aliko<span className="text-accent">Hub</span> Academy
          </Link>
          <p className="mt-3 text-sm opacity-70 leading-relaxed">
            Building Africa's workforce ecosystem, connecting learning, mentorship, and opportunity.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 opacity-90">Pathways</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Digital Health & One Health</li>
            <li>STEM & Engineering</li>
            <li>Innovation & Entrepreneurship</li>
            <li>Career Readiness</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 opacity-90">Company</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 opacity-90">Connect</h4>
          <p className="text-sm opacity-70">Hybrid learning • Mentorship • Career support • Employer alignment</p>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} AlikoHub Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
