import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/courses', label: '课程' },
    { to: '/instructor/jiang', label: '讲师' },
    { to: '/certificate', label: '认证' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">
              蛤
            </div>
            <span className="font-semibold text-gray-900 text-base hidden sm:block">
              HA Academy
            </span>
            <span className="text-gray-400 hidden sm:block">|</span>
            <span className="font-semibold text-gray-900 text-base hidden sm:block">
              蛤学院
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary border-b-2 border-primary pb-0.5'
                      : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded border border-gray-300 hover:border-gray-400 transition-colors">
              登录
            </button>
            <button className="text-sm font-medium text-white bg-primary hover:bg-blue-700 px-3 py-1.5 rounded transition-colors">
              注册
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="打开菜单"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay drawer */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'text-primary bg-blue-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
                <button className="text-sm font-medium text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition-colors">
                  登录
                </button>
                <button className="text-sm font-medium text-white bg-primary rounded px-4 py-2 hover:bg-blue-700 transition-colors">
                  注册
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
