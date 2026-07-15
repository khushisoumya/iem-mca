import { FileDown, CalendarDays } from 'lucide-react'
import PageHero from '../components/PageHero'

const evenSem = [
  ['Winter Internship Period (for Students)', 'December 3, 2025 – January 4, 2026'],
  ['Inter-Semester Break (for Faculty members)', 'December 20, 2025 – January 4, 2026'],
  ['Commencement of classes of Even semester 2026', 'January 5, 2026'],
  ['Term – I Examinations – Theory Papers (30 Marks)', 'February 9 – 17, 2026'],
  ['NPTEL Examination Dates', 'March 21–22, 2026'],
  ['Term – II Examinations – Theory Papers (30 Marks)', 'March 23 – 31, 2026'],
  ['End Semester Practical / Sessional Examinations & Viva-Voce (100 Marks)', 'April 1 – 10, 2026'],
  ['End Semester Theoretical Examinations – Theory Papers (100 Marks)', 'April 13 – May 9, 2026'],
  ['NPTEL Examination Dates', 'April 17–18, April 25–26 & May 2–3, 2026'],
  ['Summer Internship Period (for Students)', 'May 11 – June 6, 2026'],
  ['Inter – Semester Break (for Faculty members)', 'May 18 – June 5, 2026'],
  ['Summer Semester', 'June 8 – July 5, 2026'],
  ['Commencement of Classes of Odd Semester 2026 (existing batches)', 'July 6, 2026'],
  ['Publication of Results of Even Semester', 'By July, 2026'],
]

const oddSem = [
  ['Commencement of classes of Odd semester 2026 (new batch)', '01-Jul-26'],
  ['Commencement of Classes of Odd Semester 2026 (existing batches)', 'July 6, 2026'],
  ['Term – I Examinations – Theory Papers (30 Marks)', 'August 10 – 18, 2026'],
  ['Term – II Examinations – Theory Papers (30 Marks)', 'October 6 – 13, 2026'],
  ['NPTEL Examination Dates', 'October 24–25 & October 31–November 1, 2026'],
  ['End Semester Practical / Sessional Examinations & Viva-Voce (100 Marks)', 'November 2 – 11, 2026'],
  ['End Semester Theoretical Examinations – Theory Papers (100 Marks)', 'November 17 – December 4, 2026'],
  ['Winter Internship Period (for Students)', 'December 5, 2026 – January 3, 2027'],
  ['Inter – Semester Break (for Faculty members)', 'December 21, 2026 – January 3, 2027'],
  ['Commencement of Classes of Even Semester 2026', 'January 4, 2027'],
  ['Publication of Results of Odd Semester', 'By February, 2027'],
]

function CalendarTable({ rows }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="text-left font-semibold text-navy px-5 py-3">Event</th>
            <th className="text-left font-semibold text-navy px-5 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([event, date], i) => (
            <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60">
              <td className="px-5 py-3 text-gray-700 align-top">{event}</td>
              <td className="px-5 py-3 text-gray-600 align-top font-medium whitespace-nowrap">{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function AcademicCalendarPage() {
  return (
    <>
      <PageHero
        badge="Academics"
        title="Academic Calendar"
        subtitle="Institute of Engineering & Management, New Town Sector · Session 2026"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        {/* Download card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-brand-blue p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <CalendarDays className="w-6 h-6 text-brand-blue" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-navy font-semibold text-base sm:text-lg mb-1">Academic Calendar 2026</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full term-wise calendar covering both Even and Odd semesters.
            </p>
          </div>
          <a
            href="https://mca.uem.edu.in/academicCalendar/Academic%20Calendar%202026-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md text-white text-sm font-medium px-4 py-2.5 rounded-md transition-all duration-200 shrink-0"
          >
            <FileDown className="w-4 h-4" strokeWidth={2} />
            Download PDF
          </a>
        </div>

        {/* Even Semester */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-1">Even Semester</h2>
          <p className="text-gray-500 text-sm mb-5">January 2026 – June 2026</p>
          <CalendarTable rows={evenSem} />
        </div>

        {/* Odd Semester */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mb-1">Odd Semester</h2>
          <p className="text-gray-500 text-sm mb-5">July 2026 – December 2026</p>
          <CalendarTable rows={oddSem} />
        </div>
      </section>
    </>
  )
}

export default AcademicCalendarPage