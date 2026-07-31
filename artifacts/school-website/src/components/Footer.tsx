import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[6px] border-secondary">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand & About */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img src="/school-logo.png" alt="Swami Vivekanand School Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white">
                SWAMI VIVEKANAND
              </span>
              <span className="text-xs font-medium tracking-widest text-secondary">
                SR. SEC. SCHOOL
              </span>
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            Rooted in the ideals of Swami Vivekananda, we are committed to shaping the future of our students through academic excellence, discipline, and holistic development.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" data-testid="link-social-facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" data-testid="link-social-twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" data-testid="link-social-instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" data-testid="link-social-youtube">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/80 mt-2">
            <li>
              <Link href="/about" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> About Us
              </Link>
            </li>
            <li>
              <Link href="/academics" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> Academics
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> Admissions
              </Link>
            </li>
            <li>
              <Link href="/facilities" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> Facilities
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">
            Information
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/80 mt-2">
            <li>
              <Link href="/principals-message" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> Principal's Message
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> Mandatory Disclosures
              </Link>
            </li>
            <li>
              <Link href="/admissions#fees" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> Fee Structure
              </Link>
            </li>
            <li>
              <Link href="/academics" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> School Timings
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary flex items-center gap-2 transition-colors">
                <ArrowRight size={14} className="text-secondary" /> Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-white/80 mt-2">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
              <span className="leading-relaxed">Near Partap Chownk, Kaithal, Haryana</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <a href="tel:9066165000" className="hover:text-secondary transition-colors">9066165000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-secondary shrink-0" />
              <a href="mailto:shivamurlana321@gmail.com" className="hover:text-secondary transition-colors">shivamurlana321@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
        <p>© 2026 Swami Vivekanand Sr. Sec. School. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/contact" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-secondary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
