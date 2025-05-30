"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { useCloseMenuOnRouteChange } from "../hooks/useCloseMenuOnRouteChange"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  // Close menu when route changes
  useCloseMenuOnRouteChange(closeMenu)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/news", label: "News" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/alumni", label: "Alumni" },
    // { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
          isScrolled ? "bg-red-600 shadow-lg py-3" : "bg-gradient-to-r from-red-600 to-orange-600 py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className={`font-bold text-white hover:text-orange-200 transition-all duration-300 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              MCHS
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`hover:text-orange-200 transition-all duration-300 ${
                        isScrolled ? "text-base" : "text-lg"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden z-50 relative p-3 focus:outline-none"
              aria-label="Toggle menu"
              type="button"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`w-6 h-0.5 bg-white block transition-all duration-300 ${
                    isMenuOpen ? "transform rotate-45 translate-y-1.5" : "mb-1"
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-white block transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "mb-1"
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-white block transition-all duration-300 ${
                    isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
            style={{ top: isScrolled ? "60px" : "84px" }}
          />

          {/* Mobile Menu */}
          <div
            className="absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-red-700 to-orange-700 shadow-xl"
            style={{ paddingTop: isScrolled ? "80px" : "100px" }}
          >
            <div className="px-6 py-4">
              <nav>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block text-white hover:text-orange-200 hover:bg-white hover:bg-opacity-10 transition-all duration-200 text-lg py-4 px-4 rounded-lg"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                <p className="text-orange-200 text-sm mb-2 font-semibold">Contact Us</p>
                <p className="text-white text-sm mb-1">(+234) 813 875 9156</p>
                <p className="text-white text-sm">picksglobalresources@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
