import { useMemo, useState } from "react";
import { Image, Images, Search } from "lucide-react";
import { motion } from "motion/react";
import { GALLERY_ALBUMS, GALLERY_IMAGES } from "../data";

type GalleryTab = "albums" | "images";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("albums");
  const [draftSearch, setDraftSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredAlbums = useMemo(() => {
    if (!normalizedSearch) {
      return GALLERY_ALBUMS;
    }

    return GALLERY_ALBUMS.filter((album) =>
      album.title.toLowerCase().includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  const filteredImages = useMemo(() => {
    if (!normalizedSearch) {
      return GALLERY_IMAGES;
    }

    return GALLERY_IMAGES.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.album.toLowerCase().includes(normalizedSearch)
    );
  }, [normalizedSearch]);

  const handleSearch = () => {
    setSearchTerm(draftSearch);
  };

  return (
    <section id="gallery" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
              Gallery
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
              Moments from CBN gatherings and programmes
            </h2>
            <p className="text-gray-600 font-sans text-base leading-relaxed">
              Browse albums from dinners, congresses, mentorship sessions, thanksgiving services, and professional fellowship events.
            </p>
          </div>

          <div className="w-full lg:w-[430px]">
            <div className="flex items-center gap-2 rounded-full bg-white border border-gray-100 p-2 shadow-sm">
              <input
                value={draftSearch}
                onChange={(event) => setDraftSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                type="search"
                placeholder="Search gallery"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 font-sans text-sm text-brand-dark placeholder:text-gray-400 outline-none"
              />
              <button
                onClick={handleSearch}
                aria-label="Search gallery"
                title="Search gallery"
                className="w-11 h-11 rounded-full bg-brand-red text-white flex items-center justify-center hover:bg-brand-navy transition-colors flex-shrink-0"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("albums")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-sans font-bold text-sm transition-all ${
              activeTab === "albums"
                ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/10"
                : "bg-white text-brand-navy hover:text-brand-red border border-gray-100"
            }`}
          >
            <Images className="w-4 h-4" />
            Albums
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-sans font-bold text-sm transition-all ${
              activeTab === "images"
                ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/10"
                : "bg-white text-brand-navy hover:text-brand-red border border-gray-100"
            }`}
          >
            <Image className="w-4 h-4" />
            All images
          </button>
        </div>

        {activeTab === "albums" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAlbums.map((album, index) => (
              <motion.article
                key={album.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={album.image}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-brand-dark leading-snug group-hover:text-brand-red transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm mt-1">
                    {album.items} Items
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredImages.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.02 }}
                className="group relative aspect-square rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/78 to-transparent">
                  <h3 className="font-display font-bold text-white text-sm leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/75 font-sans text-[11px] leading-snug mt-1">
                    {item.album}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
