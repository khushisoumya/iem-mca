import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import AboutHOD from '../components/home/AboutHOD'
import VisionMissionPEO from '../components/VisionMissionPEO'
import PoPsoCalendarTeaser from '../components/home/PoPsoCalendarTeaser'
import Facilities from '../components/Facilities'
import EventsNotices from '../components/EventsNotices'
import Faculty from '../components/Faculty'
import CTA from '../components/CTA'

function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutHOD />
      <VisionMissionPEO showCTA />
      <Facilities />
      <PoPsoCalendarTeaser />
      <EventsNotices />
      <Faculty />
      <CTA />
    </>
  )
}

export default Home