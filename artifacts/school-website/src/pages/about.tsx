import { Target, Lightbulb, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="bg-primary py-24 px-6 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary"></div>
      <div className="container mx-auto relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-secondary text-lg font-medium tracking-wide"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="w-full bg-background">
      <PageHeader 
        title="About Us" 
        subtitle="LEARNING TODAY, LEADING TOMORROW" 
      />

      {/* History & Ethos */}
      <section id="history" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Legacy</h2>
              <div className="w-20 h-1 bg-secondary mb-8 rounded-full" />
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Founded on the enduring principles of Swami Vivekananda, our school has been a beacon of knowledge and character-building for over two decades. We believe that education is the manifestation of the perfection already in man.
                </p>
                <p>
                  From humble beginnings, we have grown into a premier CBSE institution, consistently delivering academic excellence while remaining deeply rooted in our cultural heritage and values.
                </p>
              </div>
            </div>
            <div className="h-[400px] bg-gray-200 rounded-3xl flex items-center justify-center border-8 border-white shadow-xl relative overflow-hidden">
              <img
                src="/gallery-infrastructure-2.png"
                alt="Swami Vivekanand school campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 text-white font-semibold tracking-wide">
                A legacy of learning and growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-muted/50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Vision & Mission</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <Target className="text-secondary w-12 h-12 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                To create an educational ecosystem that nurtures intellectual curiosity, fosters moral integrity, and empowers students to become globally conscious citizens who contribute meaningfully to society.
              </p>
            </div>

            <div className="bg-primary p-10 rounded-3xl shadow-lg text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <Lightbulb className="text-secondary w-12 h-12 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
              <p className="text-white/80 leading-relaxed relative z-10">
                To provide a holistic, student-centric environment that challenges young minds to achieve academic excellence, discover their unique talents, and develop the resilience required to thrive in a dynamic world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Core Values</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards in all endeavors." },
              { icon: Users, title: "Integrity", desc: "Upholding honesty and strong moral principles." },
              { icon: Target, title: "Discipline", desc: "Cultivating focus and self-control for success." },
              { icon: Lightbulb, title: "Innovation", desc: "Encouraging creative thinking and problem-solving." }
            ].map((val, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-border rounded-2xl hover:border-secondary transition-colors shadow-sm">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                  <val.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{val.title}</h4>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section id="infrastructure" className="py-24 bg-primary text-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="h-48 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 overflow-hidden">
                <img
                  src="/facility-classrooms.png"
                  alt="Students learning in a smart classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 mt-8 overflow-hidden">
                <img
                  src="/facility-library.png"
                  alt="School library"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">A Campus Built for Excellence</h2>
              <div className="w-20 h-1 bg-secondary mb-8 rounded-full" />
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                [REPLACE PLACEHOLDER TEXT] Spread across acres of lush green surroundings, our campus provides a tranquil yet stimulating environment for learning. The infrastructure is meticulously designed to support both academic rigor and co-curricular vibrancy.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" /> Secure, WiFi-enabled campus
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" /> Spacious, well-ventilated smart classrooms
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" /> Expansive playgrounds and sports courts
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" /> Dedicated areas for performing and visual arts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
