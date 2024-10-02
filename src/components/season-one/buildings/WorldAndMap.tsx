import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FlexibleContent from '../../functions/blocks/FlexibleContent';
import Gallery from '@/components/functions/blocks/image/Gallery';
import { ImageWithCaption } from '@/lib/interfaces/media/image';

const WorldAndMap: React.FC = () => {
    const mapImages: ImageWithCaption[] = [
        { src: '/images/season-one/map/infested-village.png', alt: 'Infested Village', width: 300, height: 200, caption: 'Infested Villages' },
        { src: '/images/season-one/map/military-stronghold.png', alt: 'Military Stronghold', width: 300, height: 200, caption: 'Military Strongholds' },
        { src: '/images/season-one/map/city-of-apocalypse.png', alt: 'City of Apocalypse (Capitol)', width: 300, height: 200, caption: 'City of Apocalypse (Capitol)' },
    ];

    const mapMoreImages: ImageWithCaption[] = [
        { src: '/images/season-one/creatures/infected-doom.png', alt: 'Infected Doom', width: 300, height: 200, caption: 'Infected Doom' },
        { src: '/images/season-one/creatures/infected-zombie.png', alt: 'Infected Zombie', width: 300, height: 200, caption: 'Infected Zombie' },
    ];

    return (
        <>
            <Card className="w-full mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">The World and the Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row md:justify-end gap-6">
                        <div className="md:w-1/2">
                            <p>With this new season the server map changes drastically, it becomes bigger and filled with new creatures. You will find frightening and infested villages, military strongholds and the capitol transformed into the City of Apocalypse.</p>
                        </div>
                        <div className="md:w-1/2">
                            <Gallery images={mapImages} />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-full mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">The World and the Map</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row md:justify-end gap-6">
                        <div className="md:w-1/2">
                            <p className="mt-4 italic">Every city has fallen to the <strong>Lady in Red</strong>&apos;s legion, forcing all commanders to the edge of the earth (server).</p>
                            <p className="mt-4">At the beginning of the season you and your allies will find yourselves stranded to the edge of the server (but still all together as alliance hive), with no owned city. Cities must be re-conquered, but new rules apply…</p>
                            <div className="bg-red-500 p-4 rounded-lg shadow-md mt-4">
                                <p className="font-bold">IMPORTANT: The alliances that holds capitol last will hold the capitol once the season 1 starts, and the capture of the capitol will start only after 28 days following the City clash event. Hats/Ministries will be available as usual.</p>
                            </div>
                            <p className="mt-4">Doom elite monsters are transformed into aggressive infecting scorpion monsters, and most of the zombies are infectious.</p>
                        </div>
                        <div className="md:w-1/2">
                            <Gallery images={mapMoreImages} />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <FlexibleContent
                title="Server Map Overview"
                content={
                    <p>This is how the map looks like. The buildings you see are the cities, the other tiles in between are Military Strongholds.</p>
                }
                images={[
                    { src: '/images/season-one/map/server-map-overview.png', alt: 'Server Map Overview', width: 800, height: 600 },
                ]}
                imagePosition="bottom"
            />
        </>
    );
};

export default WorldAndMap;