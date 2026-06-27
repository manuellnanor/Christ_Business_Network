import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import aboutFamily from "../../assets/about-family.jpeg";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-14 items-stretch">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
                Contact
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
                Reach Christ Business Network
              </h2>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                Connect with CBN for membership enquiries, programme participation, partnership conversations, and general support.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "0599004586",
                  href: "tel:0599004586",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "cbnprof.gh@gmail.com",
                  href: "mailto:cbnprof.gh@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Church",
                  value: "Christ Apostolic Church International",
                  href: "https://christbusinessnetwork.org",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-red/20 hover:bg-white hover:shadow-md transition-all"
                >
                  <span className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-red flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </span>
                  <span className="space-y-1 min-w-0">
                    <span className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-400">
                      {item.label}
                    </span>
                    <span className="block font-display font-bold text-brand-dark break-words">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 bg-brand-dark rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2"
          >
            <div className="relative min-h-[280px]">
              <img
                src={aboutFamily}
                alt="CBN members"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/20"></div>
            </div>

            <form className="p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-white font-sans font-bold text-xs uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-white font-sans font-bold text-xs uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-white font-sans font-bold text-xs uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-brand-red transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <a
                href="mailto:cbnprof.gh@gmail.com"
                className="position-aware-btn group inline-flex w-full items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
