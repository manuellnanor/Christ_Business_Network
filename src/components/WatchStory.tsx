import cbnNetworkGroup from "../../assets/cbn-network-group.jpg";

export default function WatchStory() {
  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={cbnNetworkGroup}
          alt="Christ Business Network members"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-brand-dark/82"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
              CBN
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Building a network that serves Christ
            </h2>
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              By connecting Christian professionals across diverse fields, we promote fellowship, mentorship, leadership, and compassionate service that strengthen the Church and positively impact society.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={cbnNetworkGroup}
              alt="CBN members gathered together"
              className="w-full aspect-[16/10] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
