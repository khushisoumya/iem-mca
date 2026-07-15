import { FileDown, BookOpen } from 'lucide-react'
import PageHero from '../components/PageHero'

const syllabusYears = [
  { year: '2020-2022', href: '/pdfs/syllabus_2020_2022.pdf' },
  { year: '2021-2023', href: '/pdfs/syllabus_2021_2023.pdf' },
  { year: '2022-2024', href: '/pdfs/syllabus_2022_2024.pdf' },
  { year: '2023-2025', href: '/pdfs/syllabus_2023_2025.pdf' },
  { year: '2024-2026', href: '/pdfs/syllabus_2024_2026.pdf' },
  { year: '2025-2027', href: '/pdfs/syllabus_2025_2027.pdf' },
]

function SyllabusPage() {
  return (
    <>
      <PageHero
        badge="Academics"
        title="Syllabus"
        subtitle="Batch-wise MCA curriculum, Institute of Engineering & Management, Newtown, Kolkata"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-4">
          {syllabusYears.map((item) => (
            <a
              key={item.year}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5 sm:p-6 flex items-center gap-4 sm:gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-brand-blue" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-navy font-semibold text-sm sm:text-base">
                  Batch {item.year}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">Detailed Syllabus PDF</p>
              </div>
              <FileDown className="w-5 h-5 text-brand-blue shrink-0" strokeWidth={2} />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default SyllabusPage