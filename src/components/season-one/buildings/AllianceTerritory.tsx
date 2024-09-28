import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AllianceTerritory: React.FC = () => {

    const territoryImages = [
        { src: '/images/season-one/map/alliance-territory-1.png', alt: 'Alliance Territory 1' },
        { src: '/images/season-one/map/alliance-territory-2.png', alt: 'Alliance Territory 2' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle>City and Military Stronghold capture</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-2/3">
                        <p className="mb-4">
                            At season start all alliances are stranded on the edge of the server, with no owned city. Cities and Military stronghold are now called Alliance territory in general, and your goal is to expand your territory to increase your Alliance Influence.
                        </p>
                        <p className="mb-4">
                            An Alliances territory must be connected to the target city to declare war on, through Military Strongholds owned territories.
                        </p>
                        <p className="mb-4">
                            You can see your strongholds and cities going to Alliance -&gt; Alliance City, where also their limits are shown.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex flex-col justify-center items-center space-y-4 mt-4 md:mt-0">
                        {territoryImages.map((img, index) => (
                            <Image
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                width={300}
                                height={200}
                                className="rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllianceTerritory;