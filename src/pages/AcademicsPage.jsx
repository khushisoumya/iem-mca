import { Link } from 'react-router-dom'
import { BookOpen, ListChecks, CalendarDays, FileText } from 'lucide-react'
import PageHero from '../components/PageHero'

const academicsLinks = [
  { icon: ListChecks, title: 'PO & PSO', subtitle: 'Program outcomes and specific outcomes', href: '/academics/po-pso' },
  { icon: BookOpen, title: 'Syllabus', subtitle: 'Year-wise curriculum, downloadable PDFs', href: '/academics/syllabus' },
  { icon: CalendarDays, title: 'Academic Calendar', subtitle: 'Term-wise calendar', href: '/academics/calendar' },
  { icon: FileText, title: 'E-Content', subtitle: 'Curated learning resource links', href: '/academics/e-content' },
]

function AcademicsPage() {
  return (
    <>
      <PageHero
        badge="Academics"
        title="Academics"
        subtitle="Explore curriculum, outcomes and learning resources for the MCA program"
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {academicsLinks.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.title}
                to={item.href}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-brand-blue" strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-snug">{item.subtitle}</p>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default AcademicsPage