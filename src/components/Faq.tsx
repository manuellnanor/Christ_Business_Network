import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import faqNetworking from "../../assets/faq-networking.jpeg";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={faqNetworking}
                  alt="CBN members networking"
                  className="w-full h-[400px] object-cover"
                />
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
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 font-sans text-base leading-relaxed max-w-2xl">
                Find answers to common questions about Christ Business Network, including membership, registration, benefits, and how you can become part of our growing community of Christian professionals.
              </p>
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
