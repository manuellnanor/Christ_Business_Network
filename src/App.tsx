import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Objectives from "./components/Objectives";
import WhyChooseUs from "./components/WhyChooseUs";
import WatchStory from "./components/WatchStory";
import Team from "./components/Team";
import UpcomingPrograms from "./components/UpcomingPrograms";
import DonationWidget from "./components/DonationWidget";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import Faq from "./components/Faq";
import Footer from "./components/Footer";

import { PROGRAMS } from "./data";
import { X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type AppRoute = "/" | "/about" | "/membership" | "/programmes/events" | "/programmes/gallery" | "/contact";

const getCurrentRoute = (): AppRoute => {
  const route = window.location.hash.replace("#", "") || "/";
  const validRoutes: AppRoute[] = [
    "/",
    "/about",
    "/membership",
    "/programmes/events",
    "/programmes/gallery",
    "/contact",
  ];

  return validRoutes.includes(route as AppRoute) ? (route as AppRoute) : "/";
};

export default function App() {
  // Modal states for dynamic items
  const [activeProgramId, setActiveProgramId] = useState<string | null>(null);
  const [route, setRoute] = useState<AppRoute>(getCurrentRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [route]);

  const navigateTo = (nextRoute: AppRoute) => {
    window.location.hash = nextRoute;
  };

  const goToMembership = () => {
    navigateTo("/membership");
  };

  const goToContact = () => {
    navigateTo("/contact");
  };

  // Find records
  const activeProgram = PROGRAMS.find((p) => p.id === activeProgramId);

  const renderPage = () => {
    if (route === "/about") {
      return (
        <>
          <About onLearnMoreClick={goToContact} />
          <WatchStory />
          <Objectives />
          <WhyChooseUs onContactClick={goToContact} />
          <Team />
          <Faq />
        </>
      );
    }

    if (route === "/membership") {
      return (
        <>
          <DonationWidget />
          <Faq />
        </>
      );
    }

    if (route === "/programmes/events") {
      return (
        <>
          <UpcomingPrograms
            onProgramClick={(id) => setActiveProgramId(id)}
            onViewAllPrograms={goToMembership}
          />
          <Faq />
        </>
      );
    }

    if (route === "/programmes/gallery") {
      return <Gallery />;
    }

    if (route === "/contact") {
      return (
        <>
          <Contact />
          <Faq />
        </>
      );
    }

    return (
      <>
        <Hero onDonateClick={goToMembership} onWatchStoryClick={goToContact} />
        <About onLearnMoreClick={goToContact} />
        <WatchStory />
        <Objectives />
        <WhyChooseUs onContactClick={goToContact} />
        <UpcomingPrograms
          onProgramClick={(id) => setActiveProgramId(id)}
          onViewAllPrograms={() => navigateTo("/programmes/events")}
        />
        <DonationWidget />
        <Team />
        <Faq />
      </>
    );
  };

  return (
    <div className="bg-white text-brand-dark selection:bg-brand-red selection:text-white min-h-screen">
      {/* Header / Navbar */}
      <Navbar onDonateClick={goToMembership} currentRoute={route} />

      {/* Main Body Sections */}
      <main key={route}>{renderPage()}</main>

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
                      goToMembership();
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
    </div>
  );
}
