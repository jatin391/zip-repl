import { useState, useEffect } from 'react';
import { useSearch } from 'wouter';
import { BookOpen, MonitorPlay, FlaskConical, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const VALID_TABS = ['curriculum', 'pre-primary', 'primary', 'secondary', 'senior-secondary'];

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

export default function Academics() {
  const search = useSearch();
  const tabFromUrl = VALID_TABS.includes(new URLSearchParams(search).get('tab') ?? '')
    ? (new URLSearchParams(search).get('tab') as string)
    : 'curriculum';

  const [activeTab, setActiveTab] = useState(tabFromUrl);

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  const tabs = [
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
    { id: 'pre-primary', label: 'Pre-Primary', icon: Trophy },
    { id: 'primary', label: 'Primary', icon: MonitorPlay },
    { id: 'secondary', label: 'Secondary', icon: FlaskConical },
    { id: 'senior-secondary', label: 'Senior Secondary', icon: BookOpen },
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      <PageHeader 
        title="Academics" 
        subtitle="FOSTERING EXCELLENCE AT EVERY STEP" 
      />

      <section className="py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 max-w-7xl">
          
          {/* Sidebar Nav */}
          <div className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-32 bg-white rounded-2xl shadow-sm border border-border p-4">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 px-4">Academic Wings</h3>
              <div className="flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all duration-200",
                      activeTab === tab.id 
                        ? "bg-primary text-white shadow-md" 
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <tab.icon size={18} className={cn(activeTab === tab.id ? "text-secondary" : "text-primary")} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-3/4">
            
            {/* Curriculum */}
            {activeTab === 'curriculum' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-primary mb-6">CBSE Curriculum</h2>
                <div className="w-16 h-1 bg-secondary mb-8 rounded-full" />
                
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p>
                    [REPLACE PLACEHOLDER TEXT] Swami Vivekanand Sr. Sec. School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Our curriculum is designed to be comprehensive, contemporary, and aligned with the National Education Policy (NEP) 2020.
                  </p>
                  
                  <div className="my-8 h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-medium">
                    [ACADEMIC / CURRICULUM PHOTO — REPLACE]
                  </div>

                  <h4 className="text-xl font-bold text-primary mt-8 mb-4">Key Features of Our Curriculum:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><span className="text-secondary font-bold">✓</span> Experiential and inquiry-based learning approaches.</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">✓</span> Integration of art and sports in mainstream academic subjects.</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">✓</span> Strong emphasis on foundational literacy and numeracy.</li>
                    <li className="flex gap-3"><span className="text-secondary font-bold">✓</span> Development of 21st-century skills: critical thinking, communication, collaboration, and creativity.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Pre-Primary */}
            {activeTab === 'pre-primary' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-primary mb-6">Pre-Primary (Nursery - KG)</h2>
                <div className="w-16 h-1 bg-secondary mb-8 rounded-full" />
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p>
                    [REPLACE PLACEHOLDER TEXT] The formative years are crucial for a child's cognitive and emotional development. Our Pre-Primary wing offers a warm, safe, and stimulating environment where play is the primary mode of learning.
                  </p>
                  <div className="my-8 h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-medium">
                    [PRE-PRIMARY PHOTO — REPLACE]
                  </div>
                  <h4 className="text-xl font-bold text-primary mt-8 mb-4">Focus Areas:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                    <li className="bg-muted/50 p-4 rounded-lg">Sensory and motor skills development</li>
                    <li className="bg-muted/50 p-4 rounded-lg">Language and communication building</li>
                    <li className="bg-muted/50 p-4 rounded-lg">Social and emotional well-being</li>
                    <li className="bg-muted/50 p-4 rounded-lg">Creative expression through art and music</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Primary */}
            {activeTab === 'primary' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-primary mb-6">Primary (Classes I - V)</h2>
                <div className="w-16 h-1 bg-secondary mb-8 rounded-full" />
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p>
                    [REPLACE PLACEHOLDER TEXT] Our Primary curriculum focuses on building a strong foundation in core subjects while encouraging curiosity. The transition from play-based learning to structured academics is managed smoothly and joyfully.
                  </p>
                  <div className="my-8 h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-medium">
                    [PRIMARY SCHOOL PHOTO — REPLACE]
                  </div>
                </div>
              </div>
            )}

            {/* Secondary */}
            {activeTab === 'secondary' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-primary mb-6">Secondary (Classes VI - X)</h2>
                <div className="w-16 h-1 bg-secondary mb-8 rounded-full" />
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p>
                    [REPLACE PLACEHOLDER TEXT] The Secondary years are characterized by a more rigorous academic structure. Students are encouraged to develop independent study habits, analytical skills, and a deeper understanding of subjects.
                  </p>
                  <div className="my-8 h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-medium">
                    [SECONDARY SCHOOL PHOTO — REPLACE]
                  </div>
                </div>
              </div>
            )}

            {/* Senior Secondary */}
            {activeTab === 'senior-secondary' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-primary mb-6">Senior Secondary (Classes XI - XII)</h2>
                <div className="w-16 h-1 bg-secondary mb-8 rounded-full" />
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p>
                    [REPLACE PLACEHOLDER TEXT] At the Senior Secondary level, we offer specialized streams (Science, Commerce, Humanities) to prepare students for higher education and professional careers. Expert faculty provide intensive coaching and career guidance.
                  </p>
                  <div className="my-8 h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-medium">
                    [SENIOR SECONDARY LAB/CLASS PHOTO — REPLACE]
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
