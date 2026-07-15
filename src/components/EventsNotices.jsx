import { Clock, MapPin, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const events = [
  { month: 'AUG', day: '15', title: 'Independence Day Celebration', description: 'Flag hoisting followed by cultural performances', time: '09:00 AM - 11:00 AM', location: 'Main Auditorium' },
  { month: 'SEP', day: '05', title: 'Teachers Day Felicitation', description: 'Honoring faculty contributions', time: '11:00 AM - 01:00 PM', location: 'Seminar Hall' },
]

const notices = [
  { title: 'Internal Assessment Schedule (Even Sem)', date: 'May 15, 2026' },
  { title: 'Submission of Project Reports', date: 'May 10, 2026' },
  { title: 'Departmental Seminar Series', date: 'Every Friday, 3:00 PM' },
]

function EventsNotices() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-1">
            <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full">
              Campus Life
            </span>
            <Link to="/events" className="text-brand-blue text-sm font-medium flex items-center gap-1">
              View All <span>→</span>
            </Link>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-3 mb-6">Latest Events</h2>

          <div className="flex flex-col gap-4">
            {events.map((event) => (
              <div key={event.title} className="bg-gray-50 rounded-xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-4">
                <div className="bg-blue-50 rounded-lg w-14 h-14 flex flex-col items-center justify-center shrink-0">
                  <span className="text-brand-blue text-[10px] font-semibold">{event.month}</span>
                  <span className="text-navy text-lg font-bold leading-none">{event.day}</span>
                </div>
                <div>
                  <h4 className="text-navy font-semibold text-sm mb-1">{event.title}</h4>
                  <p className="text-gray-500 text-xs mb-2">{event.description}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-1">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-medium px-3 py-1.5 rounded-full">
              Important Updates
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-navy mt-3 mb-6">Notices</h2>

          <div className="divide-y divide-gray-100">
            {notices.map((notice) => (
              <div key={notice.title} className="flex items-start gap-3 py-4 first:pt-0">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-brand-blue" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-navy font-medium text-sm">{notice.title}</h4>
                  <p className="text-gray-400 text-xs mt-0.5">{notice.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsNotices