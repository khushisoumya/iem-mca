import { Link } from 'react-router-dom'
import { FileDown, CalendarDays, ListChecks, ArrowRight } from 'lucide-react'

function PoPsoCalendarTeaser() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* PO & PSO */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-brand-blue p-6 sm:p-7 flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
            <ListChecks className="w-6 h-6 text-brand-blue" strokeWidth={2} />
          </div>
          <h3 className="text-navy font-bold text-lg sm:text-xl mb-2">PO and PSO</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            List of Program Outcomes (POs) and Program Specific Outcomes (PSOs) for the MCA
            programme are available for download below.
          </p>
          <a
            href="https://mca.uem.edu.in/pdfs/List_of_PO-PSO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md text-white text-sm font-medium px-4 py-2.5 rounded-md transition-all duration-200 w-fit"
          >
            <FileDown className="w-4 h-4" strokeWidth={2} />
            Download PO & PSO
          </a>
        </div>

        {/* Academic Calendar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-orange-400 p-6 sm:p-7 flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
            <CalendarDays className="w-6 h-6 text-orange-500" strokeWidth={2} />
          </div>
          <h3 className="text-navy font-bold text-lg sm:text-xl mb-4">Academic Calendar</h3>

          <ul className="space-y-2.5 mb-5">
            <li>
              <Link
                to="/academics/calendar"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                Batch 2026 — Even Semester
              </Link>
            </li>
            <li>
              <Link
                to="/academics/calendar"
                className="text-sm text-gray-600 hover:text-brand-blue transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                Batch 2026 — Odd Semester
              </Link>
            </li>
          </ul>

          <Link
            to="/academics/calendar"
            className="mt-auto inline-flex items-center gap-1.5 text-brand-blue text-sm font-medium hover:gap-2.5 transition-all w-fit"
          >
            View full calendar
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PoPsoCalendarTeaser