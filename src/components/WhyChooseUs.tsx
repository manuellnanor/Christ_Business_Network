import { CheckCircle2, ArrowUpRight, Users } from "lucide-react";
import { motion } from "motion/react";

interface WhyChooseUsProps {
  onContactClick: () => void;
}

export default function WhyChooseUs({ onContactClick }: WhyChooseUsProps) {
  const points = [
    "Real Time Impact Tracking",
    "Transparent, easy to read reports",
    "Track the ongoing status of donation",
    "Access your own dashboard monitor",
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Beautiful Images and Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden shadow-2xl max-w-[85%] relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1471286174243-e85af856cb7f?q=80&w=800&auto=format&fit=crop"
                  alt="Boy holding teddy bear"
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Smaller Overlay Image */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute right-0 bottom-4 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=400&auto=format&fit=crop"
                  alt="Child smiling in village"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Float Badge: 3,500+ Active Volunteers */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute left-[-20px] top-[20%] bg-brand-navy text-white px-5 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="block font-display font-extrabold text-lg text-white">3,500+</span>
                  <span className="block font-sans text-xs text-gray-300">Active Volunteers</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Content & List points */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
                Transforming generosity into meaningful change
              </h2>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                We design and implement sustainable programs in education, healthcare, hunger relief, and disaster response to uplift underserved communities & create lasting social impact.
              </p>
            </div>

            {/* List with Checked items */}
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="font-sans text-sm font-semibold text-brand-dark">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                id="why-choose-us-contact-btn"
                onClick={onContactClick}
                className="position-aware-btn group inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-sans font-semibold text-sm transition-all duration-300"
              >
                Contact Us
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
