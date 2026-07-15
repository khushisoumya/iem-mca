import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown, ChevronRight, Menu, X,
  BookOpen, Target, CalendarDays, FileText,
} from 'lucide-react'
import logo from "../../src/assets/iem.png"

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Vision & Mission', href: '/vision-mission' },
  { label: 'Academics', href: '/academics', dropdown: true },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

const academicsItems = [
  { icon: BookOpen, title: 'Syllabus', subtitle: 'Year-wise curriculum, downloadable PDFs', href: '/academics/syllabus' },
  { icon: Target, title: 'PO & PSO', subtitle: 'Program outcomes and specific outcomes', href: '/academics/po-pso' },
  { icon: CalendarDays, title: 'Academic Calendar', subtitle: 'Downloadable term-wise calendar PDFs', href: '/academics/calendar' },
  { icon: FileText, title: 'E-Content', subtitle: 'Curated learning resource links', href: '/academics/e-content' },
]

const dropdownData = {
  Academics: academicsItems,
}

function Navbar() {
  const location = useLocation()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileOpenSection, setMobileOpenSection] = useState(null)

  useEffect(() => {
    setOpenMenu(null)
    setMobileMenuOpen(false)
    setMobileOpenSection(null)
  }, [location.pathname])

  const renderDropdownItems = (items, mobile = false) =>
    items.map((item) => {
      const Icon = item.icon

      return (
        <Link
          key={item.title}
          to={item.href}
          onClick={() => mobile && setMobileMenuOpen(false)}
          className={`group flex items-start gap-3 rounded-xl transition-colors ${
            mobile
              ? 'p-3 hover:bg-gray-50'
              : 'border-l-2 border-transparent p-3 hover:border-brand-blue hover:bg-blue-50/60'
          }`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 transition-transform group-hover:scale-105">
            <Icon className="h-5 w-5 text-brand-blue" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-navy">{item.title}</div>
            <div className="mt-0.5 text-xs leading-snug text-gray-500">{item.subtitle}</div>
          </div>
          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gray-300 group-hover:text-brand-blue" strokeWidth={2} />
        </Link>
      )
    })

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white flex items-center justify-center shrink-0">
            <img src={logo} alt="IEM MCA" className="h-full w-full object-contain" />
          </div>
          {/* <div className="leading-tight">
            <div className="text-navy font-bold text-[15px]">IEM MCA</div>
            <div className="text-gray-500 text-[11px]">Master of Computer Applications</div>
          </div> */}
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.dropdown) {
              const items = dropdownData[link.label]
              const isActive = location.pathname.startsWith(link.href)
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'bg-blue-50 text-brand-blue' : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>

                  {openMenu === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-80 xl:w-[380px] max-w-[calc(100vw-2rem)]">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3">
                        {renderDropdownItems(items)}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'bg-blue-50 text-brand-blue'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex lg:hidden items-center justify-center rounded-md border border-gray-200 p-2 text-navy transition-colors hover:bg-gray-50"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
        </button>

        <a
          href="https://exam.iem.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md text-white text-sm font-medium px-3.5 xl:px-4 py-2.5 rounded-md transition-all duration-200"
        >
          Admissions Open
          <span className="text-base leading-none">→</span>
        </a>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                if (!link.dropdown) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        location.pathname === link.href
                          ? 'bg-blue-50 text-brand-blue'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-navy'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                }

                const items = dropdownData[link.label]
                const isOpen = mobileOpenSection === link.label
                const isActive = location.pathname.startsWith(link.href)

                return (
                  <div key={link.label} className="rounded-2xl border border-gray-100 bg-gray-50/60">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                        isActive ? 'text-brand-blue' : 'text-navy'
                      }`}
                      onClick={() => setMobileOpenSection((prev) => (prev === link.label ? null : link.label))}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        strokeWidth={2}
                      />
                    </button>

                    {isOpen && <div className="border-t border-gray-100 p-2">{renderDropdownItems(items, true)}</div>}
                  </div>
                )
              })}
            </div>

            <a
              href="https://exam.iem.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand-blue px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
            >
              Admissions Open
              <span className="text-base leading-none">→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar