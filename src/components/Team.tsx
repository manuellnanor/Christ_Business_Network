import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import teamJoseph from "../../assets/team-joseph-antwi.png";
import teamAnthony from "../../assets/team-anthony-arthur.jpg";
import teamFrancis from "../../assets/team-francis-donkor.jpeg";
import teamAaron from "../../assets/team-aaron-akutteh.jpeg";
import teamRacheal from "../../assets/team-racheal-boateng.jpeg";

const TEAM_MEMBERS = [
  {
    title: "Mr",
    name: "Joseph Antwi",
    role: "Senior Policy Analyst",
    qualification: "Research and Policy Analysis",
    employment: "Government of Alberta, Canada",
    assembly: "Assin Akropong",
    image: teamJoseph,
    bio: "",
  },
  {
    title: "Elder",
    name: "Anthony Kobina Odum Arthur",
    role: "Marketing Consultant",
    qualification: "Chartered Marketer, MCIM",
    employment: "",
    assembly: "Living Spring Assembly, New Mamprobi Area",
    image: teamAnthony,
    bio: "",
  },
  {
    title: "Mr",
    name: "Francis Donkor",
    role: "Auditor",
    qualification: "ACCA",
    employment: "BDO UK, Bridgewater House, Bristol - UK",
    assembly: "Odorkor Central",
    image: teamFrancis,
    bio: "Francis Donkor is an ACCA-qualified accountant and finance professional with experience in audit, financial reporting, and business advisory. He has worked with leading international firms, including BDO UK and EY Ghana, serving clients across a variety of industries.\n\nAs a Christian, Francis is passionate about integrating faith with excellence in the workplace. He believes that business is a platform to honour God, serve others with integrity, and create lasting value. He is committed to ethical leadership, continuous learning, and using his professional skills to positively impact organisations and communities.\n\nOutside of work, Francis enjoys mentoring young professionals, supporting personal and professional development, and building meaningful relationships with like-minded believers. Through the Christ Business Network, he looks forward to connecting with fellow Christian professionals and entrepreneurs, growing in faith, sharing knowledge, and encouraging others to pursue excellence while advancing God's Kingdom through business.",
  },
  {
    title: "Ing.",
    name: "Aaron Akusem Akutteh",
    role: "Regional Engineer, Ashanti Region",
    qualification: "GHIE PE",
    employment: "National Communications Authority",
    assembly: "Santasi, Daaban Area",
    image: teamAaron,
    bio: "",
  },
  {
    title: "Ms",
    name: "Racheal Boateng",
    role: "Journalist",
    qualification: "Journalist",
    employment: "",
    assembly: "Upper Room Assembly, Odorkor Branch",
    image: teamRacheal,
    bio: "",
  },
];

export default function Team() {
  const [active, setActive] = useState(0);
  const [selectedMember, setSelectedMember] = useState<(typeof TEAM_MEMBERS)[number] | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const didSwipe = useRef(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    if (desktopQuery.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % TEAM_MEMBERS.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedMember) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }

    didSwipe.current = false;
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    didSwipe.current = true;
    setActive((current) => {
      if (deltaX < 0) {
        return (current + 1) % TEAM_MEMBERS.length;
      }

      return (current - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length;
    });

    window.setTimeout(() => {
      didSwipe.current = false;
    }, 0);
  };

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

        <div
          className="overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="team-slider-track flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(calc(var(--team-step) * -${active}))` }}
          >
            {TEAM_MEMBERS.concat(TEAM_MEMBERS).map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="team-slide mr-8"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (didSwipe.current) {
                      return;
                    }

                    setSelectedMember(member);
                  }}
                  aria-label={`View ${member.name} profile`}
                  className="relative h-[300px] w-full rounded-2xl overflow-hidden bg-brand-dark shadow-sm group text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/35"
                >
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
                  <span className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 group-focus-visible:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </button>
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

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/70 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-member-modal-title"
          onMouseDown={() => setSelectedMember(null)}
        >
          <div
            className="relative grid h-[92vh] w-full max-w-4xl grid-rows-[280px_minmax(0,1fr)] overflow-hidden rounded-[28px] bg-white shadow-2xl md:h-[560px] md:grid-cols-[0.92fr_1.08fr] md:grid-rows-none"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative h-[280px] overflow-hidden bg-brand-dark md:h-full">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 to-transparent md:hidden"></div>
            </div>

            <div className="flex min-h-0 flex-col overflow-y-auto px-6 py-7 sm:px-9 sm:py-9">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-brand-accent px-3 py-1 font-sans text-xs font-semibold text-brand-red">
                    Team Member
                  </span>
                  <h3 id="team-member-modal-title" className="mt-4 font-display text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
                    {selectedMember.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-wide text-brand-red">
                    {selectedMember.role}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  aria-label="Close team member profile"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gray text-brand-dark transition-colors hover:bg-brand-dark hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/35"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="h-px bg-gray-200"></div>

              <div className="mt-6 grid gap-3 font-sans text-sm text-gray-600">
                {selectedMember.qualification && (
                  <div>
                    <span className="block font-semibold text-brand-dark">Professional qualification</span>
                    <span>{selectedMember.qualification}</span>
                  </div>
                )}
                {selectedMember.employment && (
                  <div>
                    <span className="block font-semibold text-brand-dark">Current employment</span>
                    <span>{selectedMember.employment}</span>
                  </div>
                )}
                {selectedMember.assembly && (
                  <div>
                    <span className="block font-semibold text-brand-dark">Local assembly</span>
                    <span>{selectedMember.assembly}</span>
                  </div>
                )}
              </div>

              {selectedMember.bio && (
                <div className="mt-6 space-y-4">
                  {selectedMember.bio.split("\n\n").map((paragraph) => (
                    <p key={paragraph} className="text-gray-600 font-sans text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
