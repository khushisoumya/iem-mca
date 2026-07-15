import { Quote } from 'lucide-react'
import hod from "../../assets/hod-mca.jpg"


function AboutHOD() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Message From HOD</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="relative bg-white rounded-2xl border border-gray-100 shadow-xl shadow-blue-100/50 p-6 sm:p-8 lg:p-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-navy to-brand-blue" />
          <Quote
            className="absolute -top-2 right-4 sm:right-6 w-24 h-24 sm:w-32 sm:h-32 text-blue-50 -scale-x-100"
            strokeWidth={0}
            fill="currentColor"
          />

          <div className="relative flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col items-center shrink-0 text-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-4 ring-blue-50">
                <img src={hod} alt="Prof. Kaustuv Bhattacharjee" className="w-full h-full object-cover" />
              </div>
              <p className="text-navy font-semibold text-sm mt-4">Prof. Kaustuv Bhattacharjee</p>
              <p className="text-gray-400 text-xs mt-0.5">Head of the Department</p>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold mb-3">
                <Quote className="w-4 h-4" strokeWidth={2} />
                
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify [text-justify:inter-word]">
                The department of Computer Applications (CA), since its inception in 2015 has
                remained prophetic in nurturing the students in the field of computer science aided
                multifaceted dimensions for MCA Programme. The holistic approach rendered in
                amalgamating the academic progress of the students with the niche of cutting edge
                technology rightly proclaims to bridge the industry-academia gap. The departmental
                galaxy of the finest students in tune with the erudite teaching fraternity has always
                remained committed in bringing out the best in terms of academic accomplishments and
                creative excellence. Pledged with the noble mission to harness NEP-2020, the
                Departmental students remain engaged in multifarious inter/intra-institutional events
                namely the Technical fest (UREKON), the Cultural fest (ECSTASIA), project and poster
                competition, coding competition, hackathon, industry visit, industry talk and
                seminar, technical workshop to name a few.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default AboutHOD