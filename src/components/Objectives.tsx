import { BookOpen, Users, Flame, Heart, Calendar, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export default function Objectives() {
  const objectives = [
    {
      title: "The Great Commission",
      description: "Support the fulfillment of the Great Commission (Matthew 28:18–19).",
      icon: BookOpen,
      color: "text-brand-red bg-brand-accent",
    },
    {
      title: "Unity & Networking",
      description: "Promote unity and networking among members.",
      icon: Users,
      color: "text-[#0C024B] bg-blue-50",
    },
    {
      title: "Spiritual & Physical Growth",
      description: "Promote the spiritual and physical growth of the Body of Christ.",
      icon: Flame,
      color: "text-amber-500 bg-amber-50",
    },
    {
      title: "Mutual Support",
      description: "Support members financially and socially during moments of joy and sorrow.",
      icon: Heart,
      color: "text-pink-500 bg-pink-50",
    },
    {
      title: "Conventions & Events",
      description: "Organize conventions, symposia, lectures, and related activities.",
      icon: Calendar,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Economic Ventures",
      description: "Empower members to pursue useful and viable economic ventures.",
      icon: TrendingUp,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  return (
    <section id="objectives" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Objectives Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
            Objectives
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
            CBN seeks to:
          </h2>
          <p className="text-gray-600 font-sans text-sm leading-relaxed">
            Our association is driven by spiritual dedication and professional excellence to build a strong network of faithful leaders.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, idx) => {
            const IconComponent = obj.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-brand-red/15 hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${obj.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-dark">
                    {obj.title}
                  </h3>
                  <p className="text-gray-600 font-sans text-xs sm:text-sm leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
