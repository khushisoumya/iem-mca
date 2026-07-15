import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import VisionMissionPage from './pages/VisionMissionPage'
import PoPsoPage from './pages/PoPsoPage'
import SyllabusPage from './pages/SyllabusPage'
import AcademicCalendarPage from './pages/AcademicCalendarPage'
import EContentPage from './pages/EContentPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import AcademicsPage from './pages/AcademicsPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vision-mission" element={<VisionMissionPage />} />
        <Route path="/academics/po-pso" element={<PoPsoPage />} />
        <Route path="/academics/syllabus" element={<SyllabusPage />} />
        <Route path="/academics/calendar" element={<AcademicCalendarPage />} />
        <Route path="/academics/e-content" element={<EContentPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
      </Route>
    </Routes>
  )
}

export default App