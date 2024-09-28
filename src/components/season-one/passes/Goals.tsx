"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

const Goals: React.FC = () => {
    const [individualImageIndex, setIndividualImageIndex] = useState(0);
    const [allianceImageIndex, setAllianceImageIndex] = useState(0);

    const individualImages = Array.from({ length: 8 }, (_, i) => `/images/season-one/goals/individual-${i + 1}.png`);
    const allianceImages = Array.from({ length: 3 }, (_, i) => `/images/season-one/goals/alliance-${i + 1}.png`);

    const nextImage = (setter: React.Dispatch<React.SetStateAction<number>>, length: number) => {
        setter((prevIndex) => (prevIndex + 1) % length);
    };

    const prevImage = (setter: React.Dispatch<React.SetStateAction<number>>, length: number) => {
        setter((prevIndex) => (prevIndex - 1 + length) % length);
    };

    const ImageGallery = ({ images, currentIndex, setIndex, title }: {
        images: string[],
        currentIndex: number,
        setIndex: React.Dispatch<React.SetStateAction<number>>,
        title: string
    }) => (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-primary" /> {/* Add Trophy icon */}
                {title}
            </h3>
            <div className="relative">
                <Image
                    src={images[currentIndex]}
                    alt={`${title} Image ${currentIndex + 1}`}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                />
                <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                    <Button
                        onClick={() => prevImage(setIndex, images.length)}
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                        <ChevronLeft size={24} />
                    </Button>
                    <Button
                        onClick={() => nextImage(setIndex, images.length)}
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                        <ChevronRight size={24} />
                    </Button>
                </div>
            </div>
            <p className="text-center">
                Image {currentIndex + 1} of {images.length}
            </p>
        </div>
    );

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Trophy className="w-8 h-8 mr-2" /> {/* Use Trophy icon */}
                    Goals
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4"> {/* Add spacing between sections */}
                <p className="text-lg"> {/* Adjust font size */}
                    Clicking on Goals, you will find both individual and alliance missions to respectively earn rewards for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Increasing your Virus Resistance</li>
                    <li>Alliance capturing Military Strongholds</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-8">
                    <ImageGallery
                        images={individualImages}
                        currentIndex={individualImageIndex}
                        setIndex={setIndividualImageIndex}
                        title="Individual Rewards"
                    />
                    <ImageGallery
                        images={allianceImages}
                        currentIndex={allianceImageIndex}
                        setIndex={setAllianceImageIndex}
                        title="Alliance Goals"
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default Goals;