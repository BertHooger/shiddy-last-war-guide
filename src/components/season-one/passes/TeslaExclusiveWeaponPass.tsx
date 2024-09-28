"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const TeslaExclusiveWeaponPass: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/images/season-one/passes/tesla-pass-1.png',
        '/images/season-one/passes/tesla-pass-2.png',
        '/images/season-one/passes/tesla-pass-3.png',
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const totalRewards = [
        "1 Epic Chest Alliance",
        "30 Tesla Shards",
        "4 Skill Medal Lucky Chest",
        "4 Legendary Resource Choice Chest",
        "70 Tesla Exclusive Weapon Shard",
        "16 Epic Resource Choice Chest",
        "7k Skill medals"
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Award className="w-8 h-8 mr-2" />
                    Tesla&apos;s Exclusive Weapon Battle Pass
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Combined Section: Text, Image Carousel, and Rewards */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 space-y-4"> {/* Text content */}
                        <p>
                            This pass lasts 7 days and starts at day 4, week 6.
                        </p>
                        <p>
                            It is possible to activate Tesla&apos;s new exclusive weapon ONLY using dedicated Tesla&apos;s weapon shards, universal weapon shards can only be used to upgrade the level of the weapon after activation.
                        </p>
                        <p>
                            Check out more about Tesla&apos;s Exclusive Weapon
                        </p>
                        {/* Use InfoSection component for consistent styling */}
                        <InfoSection icon={<Award className="w-6 h-6 text-primary" />} title="Totally Available">
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                {totalRewards.map((reward, index) => (
                                    <li key={index}>{reward}</li>
                                ))}
                            </ul>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/2"> {/* Image carousel on the right */}
                        <div className="relative">
                            <Image
                                src={images[currentImageIndex]}
                                alt={`Tesla Pass Rewards ${currentImageIndex + 1}`}
                                width={300}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                                <Button
                                    onClick={prevImage}
                                    className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                                >
                                    <ChevronLeft size={24} />
                                </Button>
                                <Button
                                    onClick={nextImage}
                                    className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                                >
                                    <ChevronRight size={24} />
                                </Button>
                            </div>
                        </div>
                        <p className="text-center mt-2">
                            Image {currentImageIndex + 1} of {images.length}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TeslaExclusiveWeaponPass;