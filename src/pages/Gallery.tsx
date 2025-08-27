import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import wedding1 from "@/assets/gallery/wedding-1.jpg";
import wedding2 from "@/assets/gallery/wedding-2.jpg";
import wedding3 from "@/assets/gallery/wedding-3.jpg";
import wedding4 from "@/assets/gallery/wedding-4.jpg";
import wedding5 from "@/assets/gallery/wedding-5.jpg";
import wedding6 from "@/assets/gallery/wedding-6.jpg";
import wedding7 from "@/assets/gallery/wedding-7.jpg";
import wedding8 from "@/assets/gallery/wedding-8.jpg";
import wedding9 from "@/assets/gallery/wedding-9.jpg";
import wedding10 from "@/assets/gallery/wedding-10.jpg";
import wedding11 from "@/assets/gallery/wedding-11.jpg";
import wedding12 from "@/assets/gallery/wedding-12.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: wedding1, alt: "Romantic wedding ceremony" },
    { src: wedding2, alt: "Beautiful bridal portrait" },
    { src: wedding3, alt: "Elegant wedding reception" },
    { src: wedding4, alt: "First dance moment" },
    { src: wedding5, alt: "Wedding party celebration" },
    { src: wedding6, alt: "Bouquet toss moment" },
    { src: wedding7, alt: "Cake cutting ceremony" },
    { src: wedding8, alt: "Outdoor wedding ceremony" },
    { src: wedding9, alt: "Ring exchange ceremony" },
    { src: wedding10, alt: "Wedding decorations" },
    { src: wedding11, alt: "Couple walking together" },
    { src: wedding12, alt: "Celebration with confetti" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Wedding Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the magic of love through our beautiful wedding photography
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;