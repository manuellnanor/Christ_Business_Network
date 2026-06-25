import { ArrowUpRight, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import heroPanel from "../../assets/hero-panel.jpeg";
import heroCommunity from "../../assets/hero-community.jpeg";
import heroEmpoweringProfessionals from "../../assets/hero-empowering-professionals.jpg";

interface HeroProps {
  onDonateClick: () => void;
  onWatchStoryClick: () => void;
}

interface Slide {
  id: number;
  title: string;
  text: string;
  buttonText: string;
  image: string;
  actionType: "membership" | "about";
}

const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    title: "Connecting Christian Professionals for Greater Impact",
    text: "Christ Business Network brings together graduate professionals of the Christ Apostolic Church International to build meaningful relationships, promote excellence, and serve the Body of Christ through faith, leadership, and professional expertise.",
    buttonText: "Become a Member",
    image: heroCommunity,
    actionType: "membership",
  },
  {
    id: 2,
    title: "Growing Together Through Fellowship, Service, and Leadership",
    text: "Join a community of Christian professionals committed to mentoring future leaders, supporting one another, advancing the Great Commission, and making a lasting difference in society through purposeful collaboration.",
    buttonText: "Explore Membership",
    image: heroPanel,
    actionType: "membership",
  },
  {
    id: 3,
    title: "Empowering Professionals to Serve Christ Beyond the Workplace",
    text: "Through networking, conferences, mentorship, and community initiatives, CBN equips members to use their knowledge, skills, and influence to glorify God while creating positive impact in every sector of society.",
    buttonText: "Learn More About CBN",
    image: heroEmpoweringProfessionals,
    actionType: "about",
  }
];

export default function Hero({ onDonateClick }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 6500);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered]);

  const activeSlide = HERO_SLIDES[current];

  const handleButtonClick = (actionType: "membership" | "about") => {
    if (actionType === "membership") {
      onDonateClick();
    } else {
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen flex items-center bg-brand-dark pt-24 overflow-hidden select-none"
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{
              opacity: current === index ? 0.78 : 0,
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {/* Dark Overlays for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/70 via-[#0A0F1D]/34 to-[#0A0F1D]/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_52%,rgba(10,15,29,0.66)_0%,rgba(10,15,29,0.44)_34%,rgba(10,15,29,0)_66%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D]/10 via-transparent to-[#0A0F1D]/18"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0F1D]/82 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-10 xl:col-span-9 space-y-8">
            
            {/* Top Motto Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 max-w-sm text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-red flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-brand-red/25">
                <Heart className="w-4.5 h-4.5 fill-current text-white" />
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider">
                  Christ Business Network
                </h4>
                <p className="text-gray-300 font-sans text-[11px] mt-0.5">
                  Networking for Christ
                </p>
              </div>
            </motion.div>

            {/* Slider Content */}
            <div className="min-h-[430px] sm:min-h-[330px] md:min-h-[260px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Dynamic H1 */}
                  <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
                    {activeSlide.title}
                  </h1>

                  {/* Dynamic description */}
                  <p className="text-gray-100 font-sans text-base sm:text-lg leading-relaxed max-w-2xl font-light drop-shadow-[0_3px_16px_rgba(0,0,0,0.72)]">
                    {activeSlide.text}
                  </p>

                  {/* Dynamic Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleButtonClick(activeSlide.actionType)}
                      className="position-aware-btn group flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-sans font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/30 active:scale-95 w-full sm:w-auto justify-center"
                    >
                      <span>{activeSlide.buttonText}</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* Slide Navigation Arrow Buttons (visible on screen hover) */}
      <div className="absolute inset-y-0 left-4 lg:left-8 z-20 hidden md:flex items-center">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-brand-red transition-all duration-300 backdrop-blur-sm shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 lg:right-8 z-20 hidden md:flex items-center">
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-brand-red transition-all duration-300 backdrop-blur-sm shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => handleDotClick(idx)}
            className={`transition-all duration-300 rounded-full ${
              current === idx
                ? "w-8 h-2 bg-brand-red"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
