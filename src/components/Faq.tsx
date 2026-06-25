import { useState } from "react";
import { Plus, Minus, Star } from "lucide-react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Photo + Social Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Photo of woman serving child */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=800&auto=format&fit=crop"
                  alt="Serving fresh nutritious meals"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Floated Review Badge Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute right-[-20px] bottom-[-20px] bg-brand-dark text-white p-6 rounded-2xl shadow-xl border border-white/5 max-w-[280px]"
              >
                <div className="flex gap-1 text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <h4 className="font-display font-extrabold text-2xl text-white">4.9/5</h4>
                <p className="text-gray-400 font-sans text-xs mt-1">
                  Trusted by our volunteers for transparency & direct ground operations.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Accordion Questions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
                Your questions answers with transparency & care
              </h2>
            </div>

            {/* Accordion list */}
            <div className="space-y-4">
              {FAQS.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-gray-100 hover:border-brand-red/15 transition-colors duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-brand-dark font-display font-bold text-base sm:text-lg focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                        isOpen ? "bg-brand-red text-white" : "bg-gray-100 text-brand-dark hover:bg-gray-200"
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-gray-600 font-sans text-sm leading-relaxed border-t border-gray-50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
