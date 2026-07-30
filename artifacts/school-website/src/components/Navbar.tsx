import { Link, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [location] = useLocation();
  const isHome = location === '/';
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSublinkClick = (e: React.MouseEvent, href: string) => {
    const [path, hash] = href.split('#');
    if (hash && location === path) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      sublinks: [
        { name: 'About the School', href: '/about#history' },
        { name: 'Vision & Mission', href: '/about#vision' },
        { name: 'Core Values', href: '/about#core-values' },
      ],
    },
    {
      name: 'Academics',
      href: '/academics',
      sublinks: [
        { name: 'Curriculum', href: '/academics?tab=curriculum' },
        { name: 'Pre-Primary', href: '/academics?tab=pre-primary' },
        { name: 'Primary', href: '/academics?tab=primary' },
        { name: 'Secondary', href: '/academics?tab=secondary' },
        { name: 'Senior Secondary', href: '/academics?tab=senior-secondary' },
      ],
    },
    { name: 'Principal\'s Message', href: '/principals-message' },
    {
      name: 'Facilities',
      href: '/facilities',
      sublinks: [
        { name: 'Library', href: '/facilities#library' },
        { name: 'Science Labs', href: '/facilities#labs' },
        { name: 'Sports', href: '/facilities#sports' },
        { name: 'Transport', href: '/facilities#transport' },
        { name: 'Smart Classrooms', href: '/facilities#classrooms' },
      ],
    },
    { name: 'Gallery', href: '/gallery' },
    {
      name: 'Admissions',
      href: '/admissions',
      sublinks: [
        { name: 'Admission Process', href: '/admissions#process' },
        { name: 'Fee Structure', href: '/admissions#fees' },
        { name: 'Enquiry Form', href: '/admissions#enquiry' },
      ],
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="hidden lg:flex bg-primary text-primary-foreground text-xs py-2 px-6 justify-between items-center">
        <div className="flex gap-6">
          <a href="tel:9066165000" className="flex items-center gap-2 hover:text-secondary transition-colors" data-testid="link-topbar-phone">
            <Phone size={14} />
            <span>9066165000</span>
          </a>
          <a href="mailto:shivamurlana321@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors" data-testid="link-topbar-email">
            <Mail size={14} />
            <span>shivamurlana321@gmail.com</span>
          </a>
        </div>
        <div className="font-semibold text-secondary tracking-wider">
          LEARN TODAY, LEAD TOMORROW
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="w-full bg-primary shadow-lg py-3 transition-all duration-300"
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" data-testid="link-nav-logo">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-secondary/50 group-hover:border-secondary transition-colors">
              <span className="text-[10px] font-bold text-primary text-center leading-tight">
                LOGO<br/>HERE
              </span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg md:text-xl font-bold tracking-tight transition-colors",
                scrolled || !isHome ? "text-white" : "text-white drop-shadow-md"
              )}>
                SWAMI VIVEKANAND
              </span>
              <span className={cn(
                "text-[10px] md:text-xs font-medium tracking-widest transition-colors",
                scrolled || !isHome ? "text-secondary" : "text-secondary drop-shadow-md"
              )}>
                SR. SEC. SCHOOL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group px-2 py-2">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors flex items-center gap-1 hover:text-secondary",
                    location === link.href ? "text-secondary" : "text-white"
                  )}
                  data-testid={`link-nav-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                >
                  {link.name}
                  {link.sublinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {/* Dropdown Menu */}
                {link.sublinks && (
                  <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-56">
                    <div className="bg-white rounded-md shadow-xl py-2 flex flex-col border border-border">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          onClick={(e) => handleSublinkClick(e, sublink.href)}
                          className="px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                          data-testid={`link-nav-sub-${sublink.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 shadow-xl overflow-y-auto max-h-[80vh]">
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    className="text-white font-medium text-lg hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.sublinks && (
                    <div className="flex flex-col pl-4 gap-2 border-l border-white/20">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          onClick={(e) => handleSublinkClick(e, sublink.href)}
                          className="text-white/80 text-sm hover:text-secondary transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
