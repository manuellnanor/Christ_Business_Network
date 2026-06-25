import { ArrowUpRight, Heart, ShieldCheck } from "lucide-react";
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
          <div className="lg:col-span-6 relative">
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
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
                Growing together to create lasting impact
              </h2>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                From grassroots initiatives to large scale community programs, we continue to grow with one purpose to serve those in need with integrity, compassion.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-red flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-brand-dark">Mission Driven Organization</h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    We are committed to creating meaningful and sustainable change in the lives of underserved communities.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-red/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-brand-dark">Transparent, Trusted, and Impactful</h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    We operate with full transparency and accountability, ensuring that every contribution is used efficiently to deliver results.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Profile / CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-gray-100">
              <button
                id="about-more-btn"
                onClick={onLearnMoreClick}
                className="position-aware-btn group inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300"
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
