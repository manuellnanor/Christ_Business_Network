import { NAV_LINKS } from "../data";
import cbnLogo from "../../assets/cbn-logo-full.png";

export default function Footer() {
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://web.facebook.com/profile.php?id=100064829135174",
      icon: "https://img.icons8.com/ios-filled/50/facebook-new.png",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/cbnprofgh/",
      icon: "https://img.icons8.com/ios-filled/50/instagram-new.png",
    },
    {
      label: "X",
      href: "#x",
      icon: "https://img.icons8.com/ios-filled/50/twitterx--v1.png",
    },
  ];

  return (
    <footer className="bg-brand-dark text-white border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Column Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex bg-white/88 backdrop-blur-md border border-white/60 rounded-2xl px-4 py-3 shadow-2xl shadow-black/20">
              <img
                src={cbnLogo}
                alt="Christ Business Network"
                className="h-20 w-auto max-w-[250px] object-contain"
              />
            </div>
            <p className="text-gray-400 font-sans text-xs leading-relaxed max-w-sm">
              We are a fellowship of Christian professionals committed to connecting expertise with purpose, empowering members through mentorship and collaboration, and serving the Church and society with integrity, compassion, and excellence.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="group w-9 h-9 rounded-full bg-white border border-white/10 hover:border-brand-red hover:bg-brand-red transition-all flex items-center justify-center"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="w-4.5 h-4.5 object-contain opacity-80 transition-all group-hover:opacity-100 group-hover:invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-red font-sans text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Membership */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider text-white uppercase">
              Membership
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Membership Benefits", href: "#membership" },
                { label: "Membership Requirements", href: "#membership" },
                { label: "How to Register", href: "#membership" },
                { label: "Payment Information", href: "#membership" },
                { label: "FAQs", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-brand-red font-sans text-xs transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider text-white uppercase">
              Contact Information
            </h4>
            <ul className="space-y-2.5 text-gray-400 font-sans text-xs">
              <li className="font-semibold text-white">Christ Business Network</li>
              <li className="text-gray-400">Christ Apostolic Church International</li>
              <li>
                <span className="text-gray-500">Phone: </span>
                <a href="tel:0599004586" className="hover:text-brand-red transition-colors font-mono">
                  0599004586
                </a>
              </li>
              <li>
                <span className="text-gray-500">Email: </span>
                <a href="mailto:cbnprof.gh@gmail.com" className="hover:text-brand-red transition-colors">
                  cbnprof.gh@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-500">Website: </span>
                <a href="https://christbusinessnetwork.org" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                  christbusinessnetwork.org
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-500">
          <span>Copyright © 2026 Christ Business Network. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
