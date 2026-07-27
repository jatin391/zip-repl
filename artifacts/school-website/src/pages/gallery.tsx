import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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

const categories = ['All', 'Events', 'Sports', 'Academics', 'Infrastructure'];

const placeholderImages = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  height: i % 3 === 0 ? 'h-80' : i % 2 === 0 ? 'h-64' : 'h-48'
}));

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredImages = placeholderImages.filter(img => filter === 'All' || img.category === filter);

  return (
    <div className="w-full bg-background min-h-screen">
      <PageHeader 
        title="School Gallery" 
        subtitle="MEMORIES & MILESTONES" 
      />

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200",
                  filter === cat 
                    ? "bg-primary text-white" 
                    : "bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "w-full bg-gray-200 rounded-xl overflow-hidden relative group break-inside-avoid shadow-sm",
                    img.height
                  )}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-muted">
                    <span className="text-xs font-bold uppercase tracking-wider mb-2 opacity-50">{img.category}</span>
                    <span className="text-sm font-medium text-center px-4">[SCHOOL PHOTO — REPLACE]</span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="text-white font-bold tracking-wider uppercase text-sm border-2 border-secondary px-4 py-2 rounded-full">
                       View Image
                     </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
