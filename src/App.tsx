import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Objectives from "./components/Objectives";
import WhyChooseUs from "./components/WhyChooseUs";
import WatchStory from "./components/WatchStory";
import Highlights from "./components/Highlights";
import UpcomingPrograms from "./components/UpcomingPrograms";
import DonationWidget from "./components/DonationWidget";

import Faq from "./components/Faq";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

import { PROGRAMS, BLOGS } from "./data";
import { X, Calendar, User, Heart, ArrowUpRight, ShieldCheck, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  // Modal states for dynamic items
  const [activeProgramId, setActiveProgramId] = useState<string | null>(null);
  const [activeBlogId, setActiveBlogId] = useState<string | null>(null);

  // Common CTA scroll-handler
  const scrollToMembership = () => {
    const el = document.getElementById("membership");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("faq");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Find records
  const activeProgram = PROGRAMS.find((p) => p.id === activeProgramId);
  const activeBlog = BLOGS.find((b) => b.id === activeBlogId);

  return (
    <div className="bg-white text-brand-dark selection:bg-brand-red selection:text-white min-h-screen">
      {/* Header / Navbar */}
      <Navbar onDonateClick={scrollToMembership} />

      {/* Main Body Sections */}
      <main>
        {/* Hero Banner */}
        <Hero onDonateClick={scrollToMembership} onWatchStoryClick={scrollToContact} />

        {/* About Section */}
        <About onLearnMoreClick={scrollToContact} />

        {/* Highlights (Vision, Mission, Motto) Section */}
        <Highlights />

        {/* Objectives Section */}
        <Objectives />

        {/* Why Choose Us */}
        <WhyChooseUs onContactClick={scrollToContact} />

        {/* Interactive Watch Story Banner */}
        <WatchStory />

        {/* Upcoming Programs / Events */}
        <UpcomingPrograms
          onProgramClick={(id) => setActiveProgramId(id)}
          onViewAllPrograms={scrollToMembership}
        />

        {/* Interactive Donation widget */}
        <DonationWidget />

        {/* Accordion FAQ with side photo */}
        <Faq />

        {/* Latest Blogs Stories */}
        <Blogs
          onBlogClick={(id) => setActiveBlogId(id)}
          onViewAllBlogs={scrollToMembership}
        />
      </main>

      {/* Footer Navigation & Newsletter */}
      <Footer />

      {/* -------------------- INTERACTIVE DETAIL MODALS -------------------- */}


      {/* 3. Program Detail Modal */}
      <AnimatePresence>
        {activeProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-dark/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveProgramId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white text-brand-dark rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProgramId(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-gray-600 shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-56 w-full relative">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-brand-red text-white text-xs font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeProgram.category}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white mt-2 leading-tight">
                    {activeProgram.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 font-sans font-semibold">
                  <Calendar className="w-4.5 h-4.5 text-brand-red" />
                  <span>Scheduled date: <strong>{activeProgram.date}</strong></span>
                </div>

                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  {activeProgram.description}
                </p>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs font-sans text-gray-500 space-y-1">
                  <p>📍 Location: Community Activity Center & Field Chapters</p>
                  <p>⏰ Entry duration: 9:00 AM - 4:00 PM</p>
                  <p>🎟️ Admission: Free & fully supported by individual donations</p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveProgramId(null)}
                    className="flex-1 py-3 border border-gray-200 hover:bg-gray-50 text-gray-600 font-sans font-bold text-sm rounded-xl transition-all"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveProgramId(null);
                      scrollToMembership();
                    }}
                    className="flex-1 bg-brand-red hover:bg-brand-red/95 text-white font-sans font-bold py-3 rounded-xl text-sm transition-all"
                  >
                    Fund This Event
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Blog Detail Modal */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-dark/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveBlogId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white text-brand-dark rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveBlogId(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-gray-600 shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-56 w-full relative">
                <img
                  src={activeBlog.image}
                  alt={activeBlog.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-brand-navy text-white text-xs font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeBlog.category}
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-white mt-2 leading-tight">
                    {activeBlog.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between text-xs text-gray-500 font-sans font-semibold">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-brand-red" />
                    By: {activeBlog.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-red" />
                    {activeBlog.date}
                  </span>
                </div>

                <div className="space-y-4 font-sans text-sm text-gray-600 leading-relaxed max-h-48 overflow-y-auto pr-2">
                  <p>
                    Ensuring communities are empowered leads to long-lasting resilience. Our efforts focus on providing the basic seeds of success, and nurturing growth alongside community leaders.
                  </p>
                  <p>
                    Through our custom-designed trackers, contributors can see how single dollar allocations support actual concrete, physical improvements on the ground.
                  </p>
                  <p>
                    We thank our volunteers, local coordinates, and monthly donors for standing behind our goal of unconditional direct support.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveBlogId(null)}
                    className="flex-1 py-3 border border-gray-200 hover:bg-gray-50 text-gray-600 font-sans font-bold text-sm rounded-xl transition-all"
                  >
                    Close Article
                  </button>
                  <button
                    onClick={() => {
                      setActiveBlogId(null);
                      scrollToMembership();
                    }}
                    className="flex-1 bg-brand-red hover:bg-brand-red/95 text-white font-sans font-bold py-3 rounded-xl text-sm transition-all"
                  >
                    Support CBN
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
