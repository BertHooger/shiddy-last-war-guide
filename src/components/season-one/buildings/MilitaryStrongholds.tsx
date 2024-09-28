import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MilitaryStrongholds: React.FC = () => {

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Military Strongholds</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-grow pr-4 md:w-1/2">
                        <p className="mb-4">
                            On the map, among cities (villages), you will find Military Strongholds buildings, surrounded by infectious zombies protecting them.
                        </p>
                        <p className="mb-4 italic">
                            Military Strongholds serve as bases for the Queen&apos;s elite forces.
                        </p>
                        <p className="mb-4">
                            Alliances must first secure a Level 1 Stronghold to claim their initial territory and expand by seizing additional Military Strongholds.
                        </p>
                        <p className="mb-4">
                            Alliances can capture up to 2 military strongholds per day (limit on total amount of owned strongholds applies)
                        </p>
                    </div>

                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <div className="relative w-full" style={{ paddingTop: `${(617 / 418) * 100}%` }}>
                            <Image
                                src="/images/season-one/map/military-stronghold.png"
                                alt="Military Stronghold"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MilitaryStrongholds;