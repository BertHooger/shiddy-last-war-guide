"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';

const SeasonAllianceMilestones: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        { src: '/images/season-one/milestones/milestone-1.png', alt: 'Milestone 1', description: 'First Alliance Milestone' },
        { src: '/images/season-one/milestones/milestone-2.png', alt: 'Milestone 2', description: 'Second Alliance Milestone' },
        { src: '/images/season-one/milestones/milestone-3.png', alt: 'Milestone 3', description: 'Third Alliance Milestone' },
        { src: '/images/season-one/milestones/milestone-4.png', alt: 'Milestone 4', description: 'Fourth Alliance Milestone' },
        { src: '/images/season-one/milestones/milestone-5.png', alt: 'Milestone 5', description: 'Fifth Alliance Milestone' },
        { src: '/images/season-one/milestones/milestone-6.png', alt: 'Milestone 6', description: 'Final Alliance Milestone' },
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Trophy className="w-8 h-8 mr-2" />
                    Season Alliance Milestones
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 space-y-4">
                        <p className="text-foreground/90 text-lg">
                            Season 1 re-introduces milestones, reminiscent of those from the game&apos;s early stages.
                        </p>
                        <p className="text-foreground/90 text-lg">
                            Access the Milestones and claim rewards by navigating to:
                        </p>
                        <p className="font-semibold text-primary">
                            Alliance -&gt; Season Milestones
                        </p>
                        <div className="bg-secondary/20 p-4 rounded-lg mt-4">
                            <h3 className="text-lg font-semibold mb-2">Key Benefits:</h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                <li>Track alliance progress</li>
                                <li>Earn exclusive rewards</li>
                                <li>Motivate alliance members</li>
                                <li>Compete with other alliances</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative">
                            <Image
                                src={images[currentImageIndex].src}
                                alt={images[currentImageIndex].alt}
                                width={500}
                                height={300}
                                className="rounded-lg shadow-md"
                            />
                            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                                <Button
                                    onClick={prevImage}
                                    variant="outline"
                                    size="icon"
                                    className="bg-black/50 text-white hover:bg-black/70"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    onClick={nextImage}
                                    variant="outline"
                                    size="icon"
                                    className="bg-black/50 text-white hover:bg-black/70"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <p className="text-center mt-2 text-foreground/70">
                            {images[currentImageIndex].description} ({currentImageIndex + 1} of {images.length})
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SeasonAllianceMilestones;