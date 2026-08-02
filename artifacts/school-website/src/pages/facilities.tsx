import { useState, useEffect } from 'react';
import { useSearch } from 'wouter';
import { Book, Microscope, Monitor, Bus, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const facilityData = [
  {
    id: 'library',
    title: 'The Library',
    icon: Book,
    image: '/facility-library.png',
    description: '[REPLACE PLACEHOLDER TEXT] Our spacious library is the heart of intellectual exploration on campus. Stocked with over 15,000 volumes including academic references, fiction, non-fiction, journals, and encyclopedias. It provides a serene environment for reading and research.',
  },
  {
    id: 'labs',
    title: 'Science Laboratories',
    icon: Microscope,
    image: '/facility-labs.png',
    description: '[REPLACE PLACEHOLDER TEXT] We boast state-of-the-art Physics, Chemistry, and Biology laboratories. These well-equipped spaces allow students to engage in hands-on experiments, bridging the gap between theoretical concepts and practical application.',
  },
  {
    id: 'classrooms',
    title: 'Smart Classrooms',
    icon: Monitor,
    image: '/facility-classrooms.png',
    description: '[REPLACE PLACEHOLDER TEXT] Every classroom is digitally enabled with smart boards and high-speed internet, transforming traditional teaching into an interactive, audio-visual learning experience that enhances student engagement and retention.',
  },
  {
    id: 'sports',
    title: 'Sports Complex',
    icon: Activity,
    image: '/facility-sports.png',
    description: '[REPLACE PLACEHOLDER TEXT] Physical education is integral to our curriculum. Our facilities include a full-size basketball court, cricket nets, football ground, and indoor facilities for table tennis and chess, supported by professional coaches.',
  },
  {
    id: 'transport',
    title: 'Safe Transport',
    icon: Bus,
    image: '/facility-transport.png',
    description: '[REPLACE PLACEHOLDER TEXT] A fleet of well-maintained GPS-enabled buses covers extensive routes across the city. Each bus is staffed with a trained driver and female attendant to ensure the safety and comfort of our students during their commute.',
  }
];

const VALID_FACILITY_TABS = facilityData.map(f => f.id);

export default function Facilities() {
  const search = useSearch();
  const tabFromUrl = VALID_FACILITY_TABS.includes(new URLSearchParams(search).get('tab') ?? '')
    ? (new URLSearchParams(search).get('tab') as string)
    : facilityData[0].id;

  const [activeFacility, setActiveFacility] = useState(tabFromUrl);

  useEffect(() => {
    setActiveFacility(tabFromUrl);
  }, [tabFromUrl]);

  return (
    <div className="w-full bg-background min-h-screen">
      <PageHeader 
        title="Infrastructure & Facilities" 
        subtitle="WORLD-CLASS AMENITIES FOR HOLISTIC GROWTH" 
      />

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Facility Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {facilityData.map((fac) => (
              <button
                key={fac.id}
                onClick={() => setActiveFacility(fac.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-4 rounded-full font-bold transition-all duration-300 shadow-sm border",
                  activeFacility === fac.id 
                    ? "bg-primary text-white border-primary scale-105" 
                    : "bg-white text-primary border-border hover:border-secondary hover:text-secondary"
                )}
              >
                <fac.icon size={20} className={activeFacility === fac.id ? "text-secondary" : ""} />
                {fac.title}
              </button>
            ))}
          </div>

          {/* Facility Content Area */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border min-h-[500px]">
            {facilityData.map((fac) => (
              activeFacility === fac.id && (
                <div key={fac.id} className="animate-in fade-in zoom-in-95 duration-500 h-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
                    
                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                        <fac.icon size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-primary mb-6">{fac.title}</h2>
                      <div className="w-16 h-1 bg-secondary mb-8 rounded-full" />
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {fac.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="h-[400px] w-full rounded-2xl shadow-inner border-4 border-white overflow-hidden relative">
                      {(fac as typeof fac & { image?: string }).image ? (
                        <img
                          src={(fac as typeof fac & { image?: string }).image}
                          alt={fac.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center">
                          <fac.icon size={48} className="text-gray-400 mb-4 opacity-50" />
                          <span className="text-gray-500 font-medium text-center px-4">
                            [FACILITY PHOTO — REPLACE: {fac.title.toUpperCase()}]
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
