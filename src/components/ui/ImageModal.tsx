import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  image: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 bg-white rounded-full p-2 text-black transition-all duration-300 hover:bg-[#D4AF37] hover:text-white transform hover:scale-110"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <img 
          src={image} 
          alt="Gallery preview" 
          className="max-h-[90vh] max-w-full object-contain mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageModal;