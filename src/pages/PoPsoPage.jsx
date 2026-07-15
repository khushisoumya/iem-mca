import { FileDown, ListChecks } from 'lucide-react'
import PageHero from '../components/PageHero'

function PoPsoPage() {
  return (
    <>
      <PageHero
        badge="Academics"
        title="Program Outcomes & Program Specific Outcomes"
        subtitle="Institute of Engineering & Management, Newtown, Kolkata"
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-brand-blue p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <ListChecks className="w-6 h-6 text-brand-blue" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-navy font-semibold text-base sm:text-lg mb-1">PO & PSO Document</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Program Outcomes and Program Specific Outcomes for the MCA program.
            </p>
          </div>
          <a
            href="/pdfs/po-pso.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md text-white text-sm font-medium px-4 py-2.5 rounded-md transition-all duration-200 shrink-0"
          >
            <FileDown className="w-4 h-4" strokeWidth={2} />
            Download PDF
          </a>
        </div>
      </section>
    </>
  )
}

export default PoPsoPage