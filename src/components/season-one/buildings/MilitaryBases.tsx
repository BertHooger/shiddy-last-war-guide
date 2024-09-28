import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MilitaryBases: React.FC = () => {

    const militaryBases = [
        { name: 'Air Base', image: '/images/season-one/buildings/air-base.png' },
        { name: 'Missile Base', image: '/images/season-one/buildings/missile-base.png' },
        { name: 'Tank Base', image: '/images/season-one/buildings/tank-base.png' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Military Bases</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative mb-6">
                    <p className="text-lg mb-4">
                        Three new buildings that allow hero types enhancements will be available starting from the third week.
                        To upgrade them you will need both
                        <span className="relative inline-block mx-1">
                            <Image src="/images/season-one/resources/immune-protein.png" alt="Immune Protein" width={20} height={20} className="inline-block mr-1" />
                            immune proteins
                        </span>
                        and
                        <span className="relative inline-block mx-1">
                            <Image src="/images/season-one/resources/mutant-crystal.png" alt="Mutant Crystal" width={20} height={20} className="inline-block mr-1" />
                            mutant crystals
                        </span>
                        . These buildings can be upgraded up to level 30, regardless of your HQ level.
                    </p>
                    <p className="text-lg">
                        Each level upgrade will increase the corresponding hero types HP, Attack and defense by 1%.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {militaryBases.map((base, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-full h-80 aspect-w-3 aspect-h-2">
                                <Image
                                    src={base.image}
                                    alt={base.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                            <p className="mt-2 text-center font-semibold">{base.name}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default MilitaryBases;