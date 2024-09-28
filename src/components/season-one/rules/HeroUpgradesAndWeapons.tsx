import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Gallery from '@/components/functions/blocks/image/Gallery';

const HeroUpgradesAndWeapons: React.FC = () => {
    const heroImages = [
        { src: '/images/season-one/creatures/recruit-hero-1.png', alt: 'Hero Image 1', caption: 'Recruit Hero Example 1' },
        { src: '/images/season-one/creatures/recruit-hero-2.png', alt: 'Hero Image 2', caption: 'Recruit Hero Example 2' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Hero Upgrades and Weapons</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-2/3">
                        <p className="text-base md:text-lg mb-6 text-foreground">
                            Season 1 brings exciting news regarding heroes and weapons, with their availability varying over time.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">Heroes Return</h3>
                            <p className="mb-4 text-foreground">
                                Missed out on obtaining a hero? Now&apos;s your chance to make up for it!
                            </p>
                            <p className="mb-4 text-foreground">
                                From the start of season 1, a new type of recruiting ticket will be available:
                                <span className="relative inline-flex items-center mx-1 font-medium text-primary">
                                    <Image
                                        src="/images/season-one/tickets/heroes-return-ticket.png"
                                        alt="Hero's Return Ticket"
                                        width={24}
                                        height={24}
                                        className="inline-block mr-2"
                                    />
                                    Heroes Return Ticket
                                </span>.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-foreground">
                                <li>Obtain shards of most UR heroes from day one of season 1.</li>
                                <li>These tickets provide the same points as Hero recruiting tickets during Arms Race and Duel Vs.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/3 mt-6 md:mt-0">
                        <Gallery images={heroImages} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default HeroUpgradesAndWeapons;