import { ArrowUpRight, Compass, Share2, Target } from "lucide-react";
import { motion } from "motion/react";
import aboutNetworking from "../../assets/about-networking.jpeg";
import aboutFellowship from "../../assets/about-fellowship.jpeg";
import aboutFamily from "../../assets/about-family.jpeg";

interface AboutProps {
  onLearnMoreClick: () => void;
}

export default function About({ onLearnMoreClick }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Images Grid */}
          <div className="order-2 lg:order-1 lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl overflow-hidden shadow-md"
                >
                  <img
                    src={aboutNetworking}
                    alt="CBN members networking"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={aboutFellowship}
                    alt="CBN members in fellowship"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={aboutFamily}
                    alt="CBN family dedication"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="rounded-3xl overflow-hidden shadow-md bg-brand-red h-24"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2 lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
                What is the Christ Business Network (CBN)?
              </h2>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                CBN is a network of graduate professionals of the Christ Apostolic Church International.
              </p>
            </div>

            {/* Identity Cards */}
            <div className="space-y-4">
              {/* Mission */}
              <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-red flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-brand-dark">Mission</h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    To mobilize professionals of the Church for fellowship, networking, and service.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-brand-dark">Vision</h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    To be an immediate source of human and material resources for the Body of Christ.
                  </p>
                </div>
              </div>

              {/* Motto */}
              <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Share2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-brand-dark">Motto</h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    Networking for Christ.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Profile / CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-gray-100">
              <button
                id="about-more-btn"
                onClick={onLearnMoreClick}
                className="position-aware-btn group inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-sans font-semibold text-sm transition-all duration-300"
              >
                More About Us
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
