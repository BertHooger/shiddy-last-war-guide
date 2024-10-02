"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Users, Info } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TroopTypeCounterComponent: React.FC = () => {
    const [, setCurrentImageIndex] = useState(0);

    const galleryImages = [
        { src: "/images/squads/troop-type-counter-1.png", alt: "Troop Type Counter Example 1", caption: "Squad with 5 same type heroes (+20% boost)" },
        { src: "/images/squads/troop-type-counter-2.png", alt: "Troop Type Counter Example 2", caption: "Squad with 4 tanks and 1 aircraft (+15% boost)" },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Users className="w-8 h-8 mr-2" />
                    Troop Type Counter – Formation bonus
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p className="text-lg text-foreground/90">
                            Starting after the first capitol conquest (last phase of City Clash when the capitol can be conquered) a new feature unlocks in the squad formation section, it is the Troop Type Counter.
                        </p>

                        <div className="flex items-center space-x-4">
                            <p className="text-foreground/90">
                                You will see which bonus you are currently using by this symbol in the upper left corner in the squad formation section:
                            </p>
                            <Image src="/images/ability/troop-type-counter-icon.png" alt="Troop Type Counter Icon" width={40} height={40} />
                        </div>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Image
                                        src="/images/squads/troop-type-boost.png"
                                        alt="Troop Type Boost Example"
                                        width={300}
                                        height={200}
                                        className="rounded-lg shadow-md"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Boost hero HP, attack and defense:</p>
                                    <ul className="list-disc list-inside">
                                        <li>3 heroes of same type: +5%</li>
                                        <li>3 heroes of same type + 2 of another: +10%</li>
                                        <li>4 heroes of same type: +15%</li>
                                        <li>5 heroes of same type: 20%</li>
                                    </ul>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <InfoSection icon={<Info className="w-6 h-6 text-blue-500" />} title="Formation Strategies">
                            <p className="text-foreground/90">
                                Here you can see 2 different squads, the first one takes advantage of the best 5 same type hero bonus +20% boost, while the second one only the +15% boost as it includes 4 tanks and an aircraft. If you have all the heroes of the same type (in my case all tanks) then you will have a 20% power bonus, furthermore if you upgrade the tank building it increases the power of all the tank heroes.
                            </p>
                            <p className="text-foreground/90 mt-2">
                                Most of the players in the game will start with an all tank type squad, you could take advantage of this and create a squad that includes multiple types of heroes even if so you will not get the top +20%.
                            </p>
                            <p className="text-foreground/90 mt-2">
                                For example you could take advantage of the +10% boost using 3 tanks and 2 aircrafts , and leverage the fact that aircrafts take only 80% of damage from tank enemies as described in the hero section.
                            </p>
                            <p className="text-foreground/90 mt-2">
                                Many battle outcomes depend on multiple factors as you can see, its up to you to find the right strategy and invest on it.
                            </p>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/3">
                        <Gallery
                            images={galleryImages}
                            onImageChange={setCurrentImageIndex}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TroopTypeCounterComponent;