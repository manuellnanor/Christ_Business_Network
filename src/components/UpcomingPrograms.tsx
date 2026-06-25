import { ArrowUpRight, Calendar } from "lucide-react";
import { PROGRAMS } from "../data";
import { motion } from "motion/react";

interface ProgramsProps {
  onProgramClick: (programId: string) => void;
  onViewAllPrograms: () => void;
}

export default function UpcomingPrograms({ onProgramClick, onViewAllPrograms }: ProgramsProps) {
  return (
    <section id="programmes" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
              Events
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
              Connect, Learn, and Grow Together
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-gray-600 font-sans text-sm max-w-sm leading-relaxed">
              Stay connected through conferences, seminars, workshops, networking sessions, and fellowship gatherings designed to strengthen faith, encourage professional growth, and equip members to make a greater impact in the Church and society.
            </p>
            <button
              id="programs-view-all-btn"
              onClick={onViewAllPrograms}
              className="position-aware-btn group inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-sans font-semibold text-sm transition-all duration-300"
            >
              View Upcoming Events
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 3 Column Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-red/15 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full font-sans font-bold text-xs">
                    {program.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-sans font-semibold">
                    <Calendar className="w-4 h-4 text-brand-red" />
                    <span>{program.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-dark leading-snug group-hover:text-brand-red transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-gray-600 font-sans text-xs leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onProgramClick(program.id)}
                  className="w-full flex items-center justify-between border-t border-gray-50 pt-4 text-brand-dark hover:text-brand-red font-sans font-semibold text-xs tracking-wider uppercase group/btn"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
