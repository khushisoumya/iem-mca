import PageHero from '../components/PageHero'
import AboutIntro from '../components/about/AboutIntro'
import HODMessage from '../components/about/HODMessage'
import CTA from '../components/CTA'

function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Department of Computer Applications"
        subtitle="Institute of Engineering & Management, Newtown, Kolkata"
      />
      <AboutIntro />
      <HODMessage />
      <CTA />
    </>
  )
}

export default AboutPage