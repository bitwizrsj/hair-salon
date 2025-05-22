import React, { useState } from 'react';

interface GalleryItemProps {
  image: string;
  title: string;
  category: string;
  setSelectedImage: (image: string | null) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  title,
  category,
  setSelectedImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg cursor-pointer group transform transition-all duration-500 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
      }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-[#14213D] via-[#14213D]/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-0'
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
          <div className="glass-effect rounded-lg p-4">
            <p className="text-sm font-medium text-[#D4AF37] mb-2">{category}</p>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;