import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  current: string;
  image: string;
  parent?: string;
}

export default function PageHero({ title, current, image, parent }: PageHeroProps) {
  return (
    <section className="relative min-h-[430px] sm:min-h-[500px] lg:min-h-[560px] overflow-hidden bg-brand-dark">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/92 via-brand-dark/68 to-brand-dark/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-transparent to-brand-dark/20" />

      <div className="relative z-10 flex min-h-[430px] sm:min-h-[500px] lg:min-h-[560px] items-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-5xl font-extrabold leading-none text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <nav
              className="mt-5 flex flex-wrap items-center gap-2 font-sans text-base font-semibold text-white/86 sm:text-lg"
              aria-label="Breadcrumb"
            >
              <a href="#/" className="transition-colors hover:text-brand-red">
                Home
              </a>
              {parent && (
                <>
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  <span>{parent}</span>
                </>
              )}
              <ChevronRight className="h-4 w-4 text-white/60" />
              <span className="text-white">{current}</span>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
