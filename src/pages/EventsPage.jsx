import { useState } from 'react'
import PageHero from '../components/PageHero'
import EventGrid from '../components/events/EventGrid'

const filters = ['All', 'Upcoming', 'Past']

function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <>
      <PageHero
        badge="Events"
        title="Events & Activities"
        subtitle="Celebrations, workshops and programs from the Department of Computer Applications"
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === f
                  ? 'bg-brand-blue text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <EventGrid activeFilter={activeFilter} />

      <div className="pb-14 sm:pb-16 lg:pb-20" />
    </>
  )
}

export default EventsPage