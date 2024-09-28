"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BuildingGalleryProps } from '@/lib/interfaces/media/galleryInterfaces';
import Gallery from './Gallery';

const BuildingGallery: React.FC<BuildingGalleryProps> = ({ title, content, images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const galleryImages = images.map(img => ({
        src: img.src,
        alt: img.alt,
    }));

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:justify-start gap-6">
                    <div className="md:w-1/2"> {/* Gallery on the left */}
                        <Gallery images={galleryImages} onImageChange={setSelectedImageIndex} />
                    </div>
                    <div className="md:w-1/2">
                        {selectedImageIndex !== null && (
                            <div className="mt-4">
                                {content[selectedImageIndex].map((contentItem, index) => (
                                    <div key={index}>
                                        {contentItem}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default BuildingGallery;