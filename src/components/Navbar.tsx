import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import cbnLogo from "../../assets/cbn-logo-full.png";
import { NAV_LINKS } from "../data";

interface NavbarProps {
  onDonateClick: () => void;
  currentRoute: string;
}

export default function Navbar({ onDonateClick, currentRoute }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"programmes" | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (window.location.hash === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.location.hash = href.replace("#", "");
  };

  const isActive = (href: string, children?: { href: string }[]) => {
    const route = href.replace("#", "");
    return currentRoute === route || Boolean(children?.some((child) => currentRoute === child.href.replace("#", "")));
  };

  return (
    <nav
      id="main-nav"
      ref={dropdownRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl transition-all duration-300"
    >
      <div
        className={`w-full bg-white/95 backdrop-blur-md rounded-[28px] px-6 sm:px-8 py-3.5 flex items-center justify-between border border-gray-100 shadow-xl transition-all duration-300 ${
          scrolled ? "shadow-2xl border-gray-200/50" : ""
        }`}
      >
        {/* Left Side: Brand Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a
            href="#/"
            id="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#/");
            }}
            className="flex items-center gap-2.5 group"
          >
            <img
              src={cbnLogo}
              alt="Christ Business Network"
              className="h-9 w-auto max-w-[168px] sm:h-10 sm:max-w-[224px] lg:max-w-[264px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 relative">
          
          {NAV_LINKS.map((link) => (
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === "programmes" ? null : "programmes")}
                  className={`nav-menu-link inline-flex items-center gap-1.5 text-[14px] font-normal hover:text-[#D53F34] transition-colors ${
                    isActive(link.href, link.children) ? "nav-menu-link-active" : "text-[#0C024B]"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "programmes" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "programmes" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 top-[calc(100%+1rem)] w-48 -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(child.href);
                          }}
                          className={`block rounded-xl px-4 py-3 font-sans text-[14px] font-normal transition-colors ${
                            isActive(child.href)
                              ? "bg-brand-accent text-brand-red"
                              : "text-brand-navy hover:bg-gray-50 hover:text-brand-red"
                          }`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`nav-menu-link text-[14px] font-normal hover:text-[#D53F34] transition-colors ${
                  isActive(link.href) ? "nav-menu-link-active" : "text-[#0C024B]"
                }`}
              >
                {link.label}
              </a>
            )
          ))}

        </div>

        {/* Right Side: CTA Button and Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Custom Signature Donation Button */}
          <button
            id="nav-donate-btn"
            onClick={onDonateClick}
            className="position-aware-btn group hidden lg:flex items-center bg-[#ED343D] text-white pl-5 pr-2 py-2 rounded-full font-sans font-medium text-[14px] transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/25 active:scale-95 gap-3.5"
          >
            <span>Become a Member</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0A0F1D] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </div>
          </button>

          {/* Mobile menu toggle button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#0C024B] hover:text-[#ED343D] focus:outline-none p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[105%] left-0 right-0 bg-white border border-gray-100 rounded-[24px] shadow-2xl py-5 px-6 space-y-4 overflow-hidden z-50"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link, index) => (
                <div
                  key={link.label}
                  className={index === NAV_LINKS.length - 1 ? "" : "border-b border-gray-50"}
                >
                  {link.children ? (
                    <div className="py-2">
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(activeDropdown === "programmes" ? null : "programmes")}
                        className={`nav-menu-link flex w-full items-center justify-between text-[14px] font-normal transition-colors ${
                          isActive(link.href, link.children)
                            ? "nav-menu-link-active"
                            : "text-[#0C024B] hover:text-[#D53F34]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "programmes" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === "programmes" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 space-y-1 rounded-2xl bg-gray-50 p-2">
                              {link.children.map((child) => (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(child.href);
                                  }}
                                  className={`block rounded-xl px-4 py-2.5 font-sans text-[14px] font-normal transition-colors ${
                                    isActive(child.href)
                                      ? "bg-white text-brand-red shadow-sm"
                                      : "text-brand-navy hover:bg-white hover:text-brand-red"
                                  }`}
                                >
                                  {child.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`nav-menu-link block py-2 text-[14px] font-normal transition-colors ${
                        isActive(link.href)
                          ? "nav-menu-link-active"
                          : "text-[#0C024B] hover:text-[#D53F34]"
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <button
              id="mobile-donate-btn"
              onClick={() => {
                setIsOpen(false);
                onDonateClick();
              }}
              className="position-aware-btn w-full flex items-center justify-center gap-2.5 bg-[#ED343D] text-white py-3.5 rounded-2xl font-sans font-medium text-[14px] shadow-lg shadow-brand-red/20 active:scale-95 transition-all"
            >
              <span>Become a Member</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
