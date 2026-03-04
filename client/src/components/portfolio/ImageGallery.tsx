/**
 * ImageGallery Component
 * Displays a grid of project images with lightbox functionality
 * Design: Warm Craft - clean grid with hover effects
 */

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="mb-12">
        {title && (
          <h3
            className="text-3xl font-bold text-foreground mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {title}
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-lg bg-warm-lightBeige aspect-video cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-foreground font-semibold">+</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center bg-black rounded-lg overflow-hidden">
              <img
                src={images[selectedIndex]}
                alt={`Gallery image ${selectedIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-lg bg-warm-lightBeige text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <span className="text-white font-semibold">
                {selectedIndex + 1} / {images.length}
              </span>

              <button
                onClick={handleNext}
                className="p-2 rounded-lg bg-warm-lightBeige text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
