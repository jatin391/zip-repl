import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="bg-primary py-24 px-6 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary"></div>
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-secondary text-lg font-medium tracking-wide">{subtitle}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <PageHeader 
        title="Contact Us" 
        subtitle="WE'D LOVE TO HEAR FROM YOU" 
      />

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-lg relative overflow-hidden h-full">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10">Get In Touch</h3>
                
                <div className="flex flex-col gap-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-1">Our Campus</h4>
                      <p className="text-white/80 text-sm leading-relaxed">Near Partap Chownk, Kaithal, Haryana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-white/80 text-sm">9066165000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-white/80 text-sm">shivamurlana321@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-1">Office Hours</h4>
                      <p className="text-white/80 text-sm">Mon-Fri: 8:00 AM - 3:00 PM</p>
                      <p className="text-white/80 text-sm">Sat: 8:00 AM - 12:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form and Map */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              
              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-primary">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-primary">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="john@example.com" />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold text-primary">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button 
                      type="submit" 
                      className="w-auto bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                      data-testid="button-submit-contact"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Map Embed */}
              <div className="h-[400px] w-full rounded-3xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13902.5!2d76.3998!3d29.8014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391225b06f08bf5f%3A0x6b9c1e7b7d7e7b7e!2sPartap%20Chowk%2C%20Kaithal%2C%20Haryana!5e0!3m2!1sen!2sin!4v1690000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
