import { motion } from 'framer-motion';

export default function PrincipalsMessage() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header Banner */}
      <div className="bg-primary py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary"></div>
        <div className="container mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Principal's Message
          </motion.h1>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-1 bg-secondary mx-auto rounded-full mt-6"
          />
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Photo Column */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-64 h-80 rounded-2xl shadow-md border-4 border-white overflow-hidden mb-6">
                  <img src="/principal.png" alt="Principal" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-2xl font-bold text-primary">[PRINCIPAL'S NAME]</h3>
                <p className="text-secondary font-semibold uppercase tracking-wider text-sm mt-2">
                  Principal
                </p>
                <div className="w-full h-[1px] bg-border my-6" />
                <p className="text-sm text-muted-foreground italic">
                  "Education is the manifestation of the perfection already in man." — Swami Vivekananda
                </p>
              </div>

              {/* Message Column */}
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-primary mb-8">Welcome to our community of learners.</h2>
                
                <div className="prose prose-lg text-muted-foreground max-w-none space-y-6">
                  <p>
                    <strong className="text-primary font-bold">Dear Parents and Students,</strong>
                  </p>
                  
                  <p className="p-4 bg-muted/50 rounded-lg border-l-4 border-secondary text-primary font-medium italic">
                    [PRINCIPAL MESSAGE — REPLACE THIS TEXT WITH THE PRINCIPAL'S ACTUAL MESSAGE]
                  </p>

                  <p>
                    [REPLACE THIS TEXT WITH CONTINUED MESSAGE] It gives me immense pleasure to welcome you to Swami Vivekanand Sr. Sec. School. In today's rapidly changing world, education must go beyond textbooks and examinations. It must build character, instil values, and prepare young minds to face the challenges of life with courage and conviction.
                  </p>

                  <p>
                    [REPLACE THIS TEXT] Our pedagogical approach is rooted in the philosophy that every child is unique and possesses immense potential. Our dedicated team of educators strives to create an environment where intellectual curiosity is nurtured, creativity is encouraged, and moral integrity is upheld.
                  </p>

                  <p>
                    [REPLACE THIS TEXT] We are committed to providing a holistic educational experience that encompasses academic excellence, physical fitness, emotional well-being, and social responsibility. Our state-of-the-art infrastructure and progressive curriculum ensure that our students are well-equipped to excel in an increasingly competitive global landscape.
                  </p>
                  
                  <p>
                    [REPLACE THIS TEXT] I invite you to join us in this beautiful journey of learning and growth. Together, let us shape a brighter future for our children and our nation.
                  </p>

                  <div className="pt-8 mt-8 border-t border-border">
                    <p className="font-bold text-primary text-xl mb-1">Warm Regards,</p>
                    <p className="text-primary font-medium">[PRINCIPAL'S NAME]</p>
                    <p className="text-sm text-muted-foreground">Principal, Swami Vivekanand Sr. Sec. School</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
