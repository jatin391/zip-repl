import { FileText, ClipboardCheck, Calculator, CheckCircle2 } from 'lucide-react';

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

export default function Admissions() {
  return (
    <div className="w-full bg-background min-h-screen pb-24">
      <PageHeader 
        title="Admissions" 
        subtitle="START YOUR JOURNEY WITH US" 
      />

      {/* Admission Process */}
      <section id="process" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Admission Process</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              Our admission process is designed to be transparent, straightforward, and welcoming to prospective families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Enquiry', icon: FileText, desc: 'Submit the online enquiry form below or visit the school reception.' },
              { step: 2, title: 'Registration', icon: ClipboardCheck, desc: 'Purchase and submit the registration form with required documents.' },
              { step: 3, title: 'Interaction', icon: Users, desc: 'A brief interaction session with the child and parents.' },
              { step: 4, title: 'Confirmation', icon: CheckCircle2, desc: 'Fee submission to secure the seat upon confirmation.' },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md relative z-10">
                  {item.step}
                </div>
                {/* Connector line for desktop */}
                {i < 3 && <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-border -z-0" />}
                
                <h4 className="text-lg font-bold text-primary mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Placeholder */}
      <section id="fees" className="py-24 bg-muted/50 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Fee Structure (2026-27)</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold">Class Level</th>
                    <th className="px-6 py-4 font-bold">Registration Fee</th>
                    <th className="px-6 py-4 font-bold">Admission Fee</th>
                    <th className="px-6 py-4 font-bold">Quarterly Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    'Pre-Primary (Nursery - KG)',
                    'Primary (I - V)',
                    'Secondary (VI - X)',
                    'Senior Secondary (XI - XII)'
                  ].map((level, i) => (
                    <tr key={i} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-primary">{level}</td>
                      <td className="px-6 py-4 text-muted-foreground">[FEE — REPLACE]</td>
                      <td className="px-6 py-4 text-muted-foreground">[FEE — REPLACE]</td>
                      <td className="px-6 py-4 text-muted-foreground">[FEE — REPLACE]</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-primary/5 p-4 flex items-start gap-3 border-t border-border">
              <Calculator className="text-secondary shrink-0" size={20} />
              <p className="text-xs text-muted-foreground">
                * Note: Transport fee is calculated extra based on distance. Book set and uniform costs are not included in the above structure. Fees are subject to change as per management decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Online Enquiry Form</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4">Leave your details and our admission counselor will get back to you.</p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
             
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Student Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="Enter student's full name" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Parent/Guardian Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="Enter parent's name" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="example@mail.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="10-digit mobile number" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-primary">Class Applying For</label>
                <select className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all bg-white">
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  <option value="class-1">Class I</option>
                  <option value="class-6">Class VI</option>
                  <option value="class-9">Class IX</option>
                  <option value="class-11">Class XI</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-primary">Message / Queries (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none" placeholder="Any specific questions?"></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit" 
                  className="w-full bg-secondary text-white font-bold text-lg py-4 rounded-xl hover:bg-secondary/90 transition-colors shadow-md hover:shadow-lg"
                  data-testid="button-submit-enquiry"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Temporary icon mock for the Admissions page to avoid extra imports
const Users = (props: any) => (
  <svg xmlns="http://www.w3.org/20svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
