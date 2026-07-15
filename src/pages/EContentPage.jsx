import { ExternalLink, FileText } from 'lucide-react'
import PageHero from '../components/PageHero'

const eContentLinks = [
  {
    title: 'Advanced Data Structure',
    subtitle: 'Video lectures on IEM Learning',
    href: 'https://www.iemlearning.com/courses/take/ai-placeholder/lessons/66780634-queue-lecture-1',
  },
  {
    title: 'Digital Electronics',
    subtitle: 'Video lectures on IEM Learning',
    href: 'https://www.iemlearning.com/courses/take/digital-electronics-mca/lessons/14503651-introduction-and-representation-and-attributes-of-signals',
  },
]

function EContentPage() {
  return (
    <>
      <PageHero
        badge="Academics"
        title="E-Content"
        subtitle="Curated video lectures and learning resources for MCA students"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-4">
          {eContentLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-5 sm:p-6 flex items-center gap-4 sm:gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5 text-brand-blue" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-navy font-semibold text-sm sm:text-base">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{item.subtitle}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-brand-blue shrink-0" strokeWidth={2} />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default EContentPage