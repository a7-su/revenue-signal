import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Revenue Audit', href: '/audit' },
  { label: 'Work / Demonstrations', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] shadow-sm py-4'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto flex items-center justify-between">
          
          {/* Logo - Modern European B2B */}
          <Link
            to="/"
            className={`font-display font-semibold text-lg md:text-xl tracking-tight transition-colors flex items-center gap-2 ${
              scrolled || menuOpen ? 'text-black' : 'text-white'
            }`}
          >
            <span>Revenue Signal</span>
            <span className="w-1.5 h-1.5 bg-rs-orange rounded-full inline-block" />
          </Link>

          {/* Desktop Nav Links - Clean Manrope Typography */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-9">
            {navLinks.map(link => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[13px] font-medium transition-colors relative py-1 ${
                    scrolled
                      ? isActive
                        ? 'text-black font-semibold'
                        : 'text-black/70 hover:text-black'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-rs-orange" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Primary Nav CTA - Sharp & Confident */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/audit"
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border ${
                scrolled
                  ? 'border-black bg-black text-white hover:bg-rs-gray hover:border-rs-gray'
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Request Revenue Audit
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden flex flex-col gap-1.5 p-2 z-50 relative transition-colors ${
              scrolled || menuOpen ? 'text-black' : 'text-white'
            }`}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-rs-light z-40 lg:hidden flex flex-col justify-between pt-28 pb-12 px-8 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl sm:text-3xl font-display font-semibold text-black hover:text-rs-orange transition-colors block tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pt-8 border-t border-black/10 mt-8 space-y-4">
              <Link
                to="/audit"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-black text-white py-4 text-xs font-semibold uppercase tracking-wider w-full"
              >
                Request Revenue Audit
              </Link>
              <div className="text-center">
                <span className="text-xs text-rs-gray uppercase tracking-wider block font-medium">
                  Paris, France • European Revenue Infrastructure
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
