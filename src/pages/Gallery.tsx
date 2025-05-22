import React, { useState, useEffect } from 'react';
import GalleryItem from '../components/ui/GalleryItem';
import ImageModal from '../components/ui/ImageModal';
import { galleryData } from '../utils/constants';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Get all unique categories
  const categories = [...new Set(galleryData.map(item => item.category))];
  
  // Filter gallery items by active category or show all if no category is selected
  const filteredGallery = activeCategory
    ? galleryData.filter(item => item.category === activeCategory)
    : galleryData;

  // Enable body scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-[#14213D]">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio showcasing our best work and transformations.
            </p>
          </div>
        </div>
      </div>
      
      {/* Gallery Content */}
      <div className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeCategory === null
                  ? 'bg-[#D4AF37] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              All
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-[#D4AF37] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid with enhanced animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredGallery.map((item, index) => (
              <div
                key={index}
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <GalleryItem
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  setSelectedImage={setSelectedImage}
                />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No images found for this category.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Image Modal with enhanced styling */}
      <ImageModal 
        image={selectedImage} 
        onClose={() => {
          setSelectedImage(null);
          document.body.style.overflow = 'auto';
        }} 
      />
    </div>
  );
};

export default Gallery;