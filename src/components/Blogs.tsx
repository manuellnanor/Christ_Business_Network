import { ArrowUpRight, Calendar, User } from "lucide-react";
import { BLOGS } from "../data";
import { motion } from "motion/react";

interface BlogsProps {
  onBlogClick: (blogId: string) => void;
  onViewAllBlogs: () => void;
}

export default function Blogs({ onBlogClick, onViewAllBlogs }: BlogsProps) {
  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-red font-sans font-bold text-xs uppercase tracking-wider">
              Latest Blogs
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark leading-tight">
              Stories, updates and impact that inspire change
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-gray-600 font-sans text-sm max-w-sm leading-relaxed">
              Stay informed with the latest updates from our community initiatives, inspiring success stories, awareness campaigns, and transparent impact reports.
            </p>
            <button
              id="blogs-all-btn"
              onClick={onViewAllBlogs}
              className="position-aware-btn group inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-sans font-semibold text-sm transition-all duration-300"
            >
              View All Blogs
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 3 Column Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-red/15 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-brand-navy text-white px-3 py-1 rounded-full font-sans font-bold text-xs">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Author & Date metadata */}
                  <div className="flex items-center justify-between text-gray-500 text-xs font-sans font-semibold">
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-brand-red" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-red" />
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-dark leading-snug group-hover:text-brand-red transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </div>

              {/* Read More button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBlogClick(blog.id)}
                  className="w-full flex items-center justify-between border-t border-gray-50 pt-4 text-brand-dark hover:text-brand-red font-sans font-semibold text-xs tracking-wider uppercase group/btn"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
