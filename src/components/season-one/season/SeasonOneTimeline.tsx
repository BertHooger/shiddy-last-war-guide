import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SeasonOneTimeline: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/images/season-one/timeline/timeline-1.png',
        '/images/season-one/timeline/timeline-2.png',
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const timelineElements = [
        { title: "Main Timeline", items: ["Week 1 to Week 8"] },
        { title: "Season Events", items: ["Purge Action", "Purge the Polluted Area", "Genetic Recombination", "City Clash S1", "Crimson Legion"] },
        { title: "Passes", items: ["Weekly Pass", "Season Battle Pass", "Exclusive Weapon Battle Pass"] },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Season 1: The Crimson Plague timeline</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 space-y-4">
                        <p className="flex items-center">
                            Season 1 is accessible clicking on the Season 1 Event icon right above the duel VS icon.
                        </p>
                        <p>It is composed by the following elements, some of them will appear later on:</p>
                        {timelineElements.map((element, index) => (
                            <div key={index}>
                                <h3 className="font-semibold">{element.title}</h3>
                                <ul className="list-disc list-inside">
                                    {element.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <p>
                            Clicking on the main <strong>Season: 1</strong> banner allows you to access the structure of this season. Specifically you will see the season be divided in 8 weeks. Clicking on the corresponding Week button, you will be able to see each weeks missions (check following sections for each week details).
                        </p>
                        <p>
                            Additionally, season events are visible in this section, some of them will become active when the corresponding mission in the corresponding week is unlocked. Other have their own activation timer.
                        </p>
                        <div className="flex items-center mt-4">
                            <span className="mr-2">Season 1 Event icon:</span>
                            <Image
                                src="/images/season-one/icons/season-1-icon.png"
                                alt="Season 1 Event Icon"
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative">
                            <Image
                                src={images[currentImageIndex]}
                                alt={`Timeline Image ${currentImageIndex + 1}`}
                                width={500}
                                height={300}
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

export default SeasonOneTimeline;