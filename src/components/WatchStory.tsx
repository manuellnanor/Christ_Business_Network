import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WatchStory() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        {/* Background Image of Children with Dark Accent overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop"
            alt="Children of the community"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
            Watch Our Story
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Together we're changing lives
          </h2>
          <p className="text-gray-300 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Through the collective support of donors, volunteers, and partners, we provide education, healthcare, food, and emergency relief to communities in need creating hope, dignity.
          </p>

          <div className="pt-6">
            <button
              id="watch-story-trigger-btn"
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-red text-white hover:bg-brand-red/95 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-brand-red/25"
            >
              <Play className="w-8 h-8 fill-current text-white ml-1 animate-pulse" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-dark/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                id="close-video-modal"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Simulated video player with a high-quality thumbnail and a looping overlay */}
              <div className="w-full h-full relative flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200"
                  alt="Video playing"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/50 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <span className="px-4 py-2 bg-brand-red text-white text-xs font-semibold tracking-wider uppercase rounded-full">
                    Now Playing: CBN Impact Documentary 2026
                  </span>
                  <p className="text-gray-300 max-w-md text-sm">
                    "From our hearts to their hands — witnessing the absolute power of local donation programs on the ground."
                  </p>
                  <div className="w-16 h-1 bg-brand-red rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-white animate-[shimmer_1.5s_infinite] origin-left"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
