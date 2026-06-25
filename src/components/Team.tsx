import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import teamKwame from "../../assets/team-kwame.jpg";
import teamAma from "../../assets/team-ama.jpg";
import teamEfua from "../../assets/team-efua.jpg";
import teamAbena from "../../assets/team-abena.jpg";

const TEAM_MEMBERS = [
  {
    name: "Kwame Mensah",
    role: "Network Coordinator",
    image: teamKwame,
  },
  {
    name: "Ama Boateng",
    role: "Membership Lead",
    image: teamAma,
  },
  {
    name: "Efua Adjei",
    role: "Professional Development Lead",
    image: teamEfua,
  },
  {
    name: "Abena Owusu",
    role: "Events & Fellowship Lead",
    image: teamAbena,
  },
];

export default function Team() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % TEAM_MEMBERS.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="team" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-brand-dark font-sans font-semibold text-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
              Our Team
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
              Working together to serve Christ and society
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-6">
            <p className="text-gray-600 font-sans text-base leading-relaxed">
              From professional mentorship to fellowship and service, our team works together to strengthen the CBN community and create meaningful impact.
            </p>
            <button className="position-aware-btn group inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-sans font-semibold text-sm transition-all duration-300">
              View All Team
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="team-slider-track flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(calc(var(--team-step) * -${active}))` }}
          >
            {TEAM_MEMBERS.concat(TEAM_MEMBERS).map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="team-slide mr-8"
              >
                <article className="relative h-[430px] rounded-2xl overflow-hidden bg-brand-dark shadow-sm group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/35 to-transparent"></div>
                  <div className="absolute left-8 right-8 bottom-8 text-white">
                    <h3 className="font-display font-bold text-xl leading-tight">
                      {member.name}
                    </h3>
                    <div className="h-px bg-white/15 my-4"></div>
                    <p className="text-white font-sans text-sm leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {TEAM_MEMBERS.map((member, index) => (
            <button
              key={member.name}
              onClick={() => setActive(index)}
              aria-label={`Show ${member.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index ? "w-8 bg-brand-red" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
