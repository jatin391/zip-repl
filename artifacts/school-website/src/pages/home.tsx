import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { BookOpen, Users, Building, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="absolute inset-0 bg-primary/70 z-10" />
        
        <div className="container relative z-20 mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <Link 
              href="/admissions" 
              className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-transform hover:scale-105 shadow-xl flex items-center gap-2 group"
              data-testid="link-hero-admissions"
            >
              Apply for Admission
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WELCOME STRIP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Welcome to Swami Vivekanand Sr. Sec. School
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              [SCHOOL INTRO — REPLACE WITH REAL TEXT] A legacy of educational excellence where traditional values meet modern learning methodologies. We strive to nurture young minds into responsible, capable, and compassionate leaders of tomorrow, following the profound ideals of Swami Vivekananda.
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
            {[
              { number: '25+', label: 'Years of Excellence', icon: BookOpen },
              { number: '2500+', label: 'Students', icon: Users },
              { number: '150+', label: 'Faculty', icon: GraduationCap },
              { number: '98%', label: 'Results', icon: Building },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <stat.icon size={40} className="text-secondary mb-4 opacity-80" />
                <span className="text-4xl md:text-5xl font-bold mb-2">[REPLACE WITH ACTUAL STATS]</span>
                <span className="text-sm md:text-base text-white/80 uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence in Academics', icon: BookOpen, desc: 'Rigorous CBSE curriculum designed to foster deep understanding and critical thinking.' },
              { title: 'Holistic Development', icon: Users, desc: 'Equal emphasis on sports, arts, and character building alongside academics.' },
              { title: 'Modern Infrastructure', icon: Building, desc: 'State-of-the-art labs, smart classrooms, and extensive sports facilities.' },
              { title: 'Experienced Faculty', icon: GraduationCap, desc: 'Dedicated educators committed to nurturing each student\'s unique potential.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                  <feature.icon size={32} className="text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL'S MESSAGE PREVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 flex-col-reverse">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6">From the Principal's Desk</h2>
                <div className="w-16 h-1 bg-secondary mb-8 rounded-full" />
                <p className="text-white/80 text-lg leading-relaxed italic mb-8">
                  "Education is not just about academic excellence, but also about building character, cultivating values, and preparing our students to face the challenges of tomorrow with courage and conviction."
                </p>
                <Link 
                  href="/principals-message"
                  className="inline-flex items-center text-secondary font-bold hover:text-white transition-colors group"
                >
                  Read Full Message 
                  <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="h-[400px] lg:h-auto bg-gray-200 relative flex items-center justify-center">
                <span className="text-gray-500 font-medium absolute z-10 bg-white/80 px-4 py-2 rounded-md">[PRINCIPAL PHOTO — REPLACE]</span>
                {/* Decorative shape */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES PREVIEW */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Facilities</h2>
              <div className="w-24 h-1 bg-secondary rounded-full" />
            </div>
            <Link href="/facilities" className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors">
              View All Facilities <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Library', 'Science Labs', 'Sports Complex', 'Transport', 'Smart Classrooms', 'Computer Lab'].map((facility, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md group border border-border"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                  <span className="text-gray-500 text-sm font-medium z-10">[FACILITY PHOTO — REPLACE]</span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{facility}</h3>
                  <p className="text-muted-foreground text-sm">State-of-the-art infrastructure designed to support comprehensive learning and development.</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link href="/facilities" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
              View All Facilities <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at Campus</h2>
              <div className="w-24 h-1 bg-secondary rounded-full" />
            </div>
            <Link href="/gallery" className="hidden md:flex items-center text-white/80 font-semibold hover:text-white transition-colors">
              View Full Gallery <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`bg-white/10 rounded-xl flex items-center justify-center text-white/40 text-sm border border-white/5 hover:border-secondary transition-colors ${i === 1 || i === 4 ? 'row-span-2 aspect-auto' : 'aspect-square'}`}>
                [SCHOOL PHOTO — REPLACE]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Admissions Open for 2026-27
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards a bright future. Join the Swami Vivekanand family today.
          </p>
          <Link 
            href="/admissions"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-transform hover:scale-105 shadow-xl"
            data-testid="button-cta-enquire"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
