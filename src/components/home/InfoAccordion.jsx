import { useState } from 'react'
import { ChevronDown, FileDown } from 'lucide-react'

const items = [
  {
    title: 'Overview and Courses',
    content: (
      <>
        <p className="mb-3">
          The MCA program is a two-year, four-semester postgraduate degree designed to build
          strong foundations in programming, software engineering, data structures, databases,
          and emerging technologies such as AI and cloud computing.
        </p>
        <p>
          The curriculum blends core computer science theory with hands-on lab work, industry
          projects, and internships, preparing students for roles in software development, data
          science, and IT consulting.
        </p>
      </>
    ),
  },
  {
    title: 'Accolades',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Students placed at leading IT companies across successive batches</li>
        <li>Departmental teams recognized at inter-institutional hackathons and coding competitions</li>
        <li>Faculty publications in peer-reviewed journals and conferences</li>
      </ul>
    ),
  },
  {
    title: 'Major Facilities',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Dedicated computer labs with modern hardware and licensed software</li>
        <li>High-speed campus-wide internet and Wi-Fi connectivity</li>
        <li>Digital library with access to journals, e-books and research databases</li>
        <li>Seminar hall for workshops, guest lectures and departmental events</li>
      </ul>
    ),
  },
  {
    title: 'AICTE Approval Letter',
    content: (
      <div>
        <p className="mb-3">
          The MCA program is approved by the All India Council for Technical Education (AICTE).
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-medium hover:underline"
        >
          <FileDown className="w-4 h-4" strokeWidth={2} />
          Download Approval Letter (coming soon)
        </a>
      </div>
    ),
  },
]

function InfoAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
    {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.title}
            className={`bg-white rounded-xl border transition-all duration-200 ${
              isOpen ? 'border-brand-blue shadow-md sm:col-span-2 lg:col-span-4' : 'border-gray-200 hover:border-brand-blue/40'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
            >
              <span className="text-navy font-medium text-sm">{item.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-brand-blue shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                strokeWidth={2}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div> */}
    </>
  )
}

export default InfoAccordion