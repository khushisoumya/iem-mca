import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import building2 from '../../assets/mca8.jpg'
import aicteLogo from '../../assets/aicte.jpg'

const accolades = [
  'Students placed at leading IT companies across successive batches',
  'Departmental teams recognized at inter-institutional hackathons',
]

function ProgramOverview() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img
            src={building2}
            alt="MCA program at IEM"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div>
            <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              About the Program
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
              Built on Fundamentals.<br />Aimed at Industry.
            </h2>

            <p className="text-gray-500 leading-relaxed mb-6">
              The MCA program is a two-year, four-semester postgraduate degree designed to
              build strong foundations in programming, software engineering, data structures,
              and emerging technologies such as AI and cloud computing.
            </p>

            <ul className="space-y-2.5">
              {accolades.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-blue shrink-0 mt-0.5" strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            {/* Accredited by */}
            <div className="mb-6">
              <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-3">
                Accredited By
              </span>
              <div>
                <img
                  src={aicteLogo}
                  alt="AICTE Approved"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md text-white text-sm font-medium px-5 py-3 rounded-md transition-all duration-200"
            >
              Read more about MCA
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview