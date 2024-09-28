import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryProps } from '@/lib/interfaces/media/galleryInterfaces';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC<GalleryProps> = ({ images, onImageChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        onImageChange?.(newIndex);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        onImageChange?.(newIndex);
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
            />
            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                <ChevronRight size={24} />
            </button>
            <div className="text-center mt-2">
                <p className="font-bold">{images[currentIndex].caption}</p>
                <p className="text-sm text-gray-600">{currentIndex + 1} / {images.length}</p>
            </div>
        </div>
    );
};

export default Gallery;