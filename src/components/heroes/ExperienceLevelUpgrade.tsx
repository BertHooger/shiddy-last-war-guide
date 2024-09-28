import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from 'lucide-react';

const ExperienceLevelUpgrade: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <BarChart className="w-8 h-8 mr-2" />
                    Experience Level Upgrade
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3 space-y-4">
                    <p className="text-lg text-foreground/90">
                        To upgrade a Hero Experience Level you need to collect EXP chests (they can be of various types: epic, legendary, rare based on the amount of EXP they contain):
                        <Image src="/images/upgrades/hero-exp-purple.png" alt="EXP Chest" width={24} height={24} className="inline-block ml-2 align-text-bottom" />
                    </p>
                    <p className="text-lg text-foreground/90">
                        To upgrade a Hero Experience level just go on the hero and click the green Upgrade button, you will see the Level increment and with it:
                    </p>
                    <ul className="list-disc pl-5 text-foreground/90">
                        <li>Power</li>
                        <li>Attack</li>
                        <li>HP</li>
                        <li>Defense</li>
                        <li>Troop Capacity</li>
                    </ul>
                    <p className="text-lg text-foreground/90">
                        It is always possible to click on each attribute to see what boosts that specific attribute.
                    </p>
                    <p className="text-lg text-foreground/90">
                        Usually the biggest boost in all attributes is given by the Experience Level.
                    </p>
                    <p className="text-lg text-foreground/90">
                        To upgrade each level the amount of EXP increases. The EXP amount needed for each level does not depend on the Hero Rarity (UR/SSR/SR) or their type (tank, missile, aircraft).
                    </p>
                </div>
                <div className="md:w-1/3 flex justify-center items-center">
                    <Image
                        src="/images/upgrades/experience-level-upgrade.png"
                        alt="Experience Level Upgrade"
                        width={300}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default ExperienceLevelUpgrade;