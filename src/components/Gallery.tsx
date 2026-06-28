import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Image, Images, Search, X } from "lucide-react";
import { motion } from "motion/react";
import { GALLERY_ALBUMS, GALLERY_IMAGES } from "../data";

type GalleryTab = "albums" | "images";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("albums");
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
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
    const baseImages = selectedAlbum
      ? GALLERY_IMAGES.filter((item) => item.album === selectedAlbum)
      : GALLERY_IMAGES;

    if (!normalizedSearch) {
      return baseImages;
    }

    return baseImages.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.album.toLowerCase().includes(normalizedSearch)
    );
  }, [normalizedSearch, selectedAlbum]);

  const handleSearch = () => {
    setSearchTerm(draftSearch);
    setSelectedImageIndex(null);
  };

  const selectedImage =
    selectedImageIndex === null ? null : filteredImages[selectedImageIndex] ?? null;

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null || filteredImages.length === 0) {
        return currentIndex;
      }

      return (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  const showNextImage = () => {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null || filteredImages.length === 0) {
        return currentIndex;
      }

      return (currentIndex + 1) % filteredImages.length;
    });
  };

  useEffect(() => {
    if (selectedImageIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredImages.length, selectedImageIndex]);

  return (
    <section id="gallery" className="py-20 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="max-w-2xl">
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
            onClick={() => {
              setActiveTab("albums");
              setSelectedAlbum(null);
              setSelectedImageIndex(null);
            }}
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
            onClick={() => {
              setActiveTab("images");
              setSelectedAlbum(null);
              setSelectedImageIndex(null);
            }}
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
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all cursor-pointer"
                onClick={() => {
                  setActiveTab("images");
                  setSelectedAlbum(album.title);
                  setSelectedImageIndex(null);
                }}
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
          <>
            {selectedAlbum && (
              <div className="mb-6 flex items-center gap-3 text-sm">
                <button
                  onClick={() => {
                    setActiveTab("albums");
                    setSelectedAlbum(null);
                    setSelectedImageIndex(null);
                  }}
                  className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-red transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to albums
                </button>
                <span className="text-gray-500">Showing images for {selectedAlbum}</span>
              </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredImages.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => openImage(index)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.02 }}
                  className="group relative aspect-square rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm text-left focus:outline-none focus:ring-4 focus:ring-brand-red/25"
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
                </motion.button>
              ))}
            </div>
          </>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 px-4 py-5 sm:px-8 sm:py-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} image viewer`}
          onClick={closeImage}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeImage();
            }}
            aria-label="Close image viewer"
            title="Close"
            className="absolute right-4 top-4 sm:right-8 sm:top-8 w-11 h-11 rounded-full bg-white/12 text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Previous image"
            title="Previous"
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/12 text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <figure
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="mx-auto max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-white">
              <p className="font-display font-bold text-lg">{selectedImage.title}</p>
              <p className="font-sans text-sm text-white/70 mt-1">
                {selectedImageIndex! + 1} of {filteredImages.length}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
            title="Next"
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/12 text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
