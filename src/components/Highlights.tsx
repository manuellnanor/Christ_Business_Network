import { Compass, Target, Share2 } from "lucide-react";
import { motion } from "motion/react";

export default function Highlights() {
  const pillars = [
    {
      title: "Vision",
      value: "To be an immediate source of human and material resources for the Body of Christ.",
      icon: Compass,
      color: "text-brand-red bg-white/10",
      highlightText: "Vision Statement"
    },
    {
      title: "Mission",
      value: "To mobilize professionals of the Church for fellowship, networking, and service.",
      icon: Target,
      color: "text-blue-400 bg-white/10",
      highlightText: "Mission Statement"
    },
    {
      title: "Motto",
      value: "Networking for Christ",
      icon: Share2,
      color: "text-amber-400 bg-white/10",
      highlightText: "Our Motto"
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Mission, Vision, Motto Block */}
        <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient light overlays */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col space-y-4 ${index > 0 ? "pt-8 md:pt-0 md:pl-12" : "pb-8 md:pb-0"}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pillar.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-400">
                      {pillar.highlightText}
                    </span>
                    <h4 className="font-display font-extrabold text-2xl lg:text-3xl text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-200 font-sans text-sm sm:text-base leading-relaxed font-medium">
                      {pillar.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

