import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MilitaryBases: React.FC = () => {
    const militaryBases = [
        { name: 'Air Base', image: '/images/season-one/buildings/new-farm-1.png' },
        { name: 'Missile Base', image: '/images/season-one/buildings/new-farm-2.png' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">New Farms – Alliance Resources</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative mb-6">
                    <p className="text-lg mb-4">
                        After killing doom elites randomly a new alliance resource farm type can temporarily appear.
                        Send your squad to gather together with your allies the resources food/iron/gold/diamonds/mutant crystals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {militaryBases.map((base, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image src={base.image} alt={base.name} width={200} height={200} className="rounded-lg shadow-md" />
                            <p className="mt-2 text-center font-semibold">{base.name}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default MilitaryBases;