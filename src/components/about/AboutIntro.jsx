import { GraduationCap, Users, Briefcase } from 'lucide-react'
import mca9 from '../../assets/mca11.png'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Established 2015',
    text: 'A decade of building computing talent through academic rigor.',
  },
  {
    icon: Users,
    title: 'Student-Centric',
    text: 'Small batches, active mentorship, hands-on lab work.',
  },
  {
    icon: Briefcase,
    title: 'Industry-Aligned',
    text: 'Curriculum shaped around real hiring needs.',
  },
]

function AboutIntro() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">About Our Department</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Left: text + highlights */}
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  The Department of Computer Applications has, since 2015, offered a comprehensive
                  MCA program that blends strong computing fundamentals with hands-on, industry-aligned
                  training — preparing graduates for careers across software development, data science,
                  and enterprise technology.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Beyond the classroom, students engage with the department's technical and cultural
                  life through events like UREKON and ECSTASIA, coding competitions, hackathons, and
                  industry interactions — building the kind of well-rounded profile employers look for.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-5 pt-6 border-t border-gray-100">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex flex-col gap-2.5">
                   <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
  <Icon className="w-5 h-5 text-brand-blue" strokeWidth={2} />
</div>
                    <h3 className="text-navy font-semibold text-sm">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: full-height image */}
            <div className="lg:col-span-2 min-h-64 lg:min-h-full">
              <img
                src={mca9}
                alt="Department of Computer Applications"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro