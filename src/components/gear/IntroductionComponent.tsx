import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';

const GearIcon = ({ number }: { number: number }) => (
    <Image
        src={`/images/gears/gear-${number}.png`}
        alt={`Gear ${number}`}
        width={24}
        height={24}
        className="inline-block mr-2"
    />
);

const RarityGearIcon = ({ rarity }: { rarity: string }) => (
    <Image
        src={`/images/gears/${rarity}-gear-1.png`}
        alt={`${rarity.charAt(0).toUpperCase() + rarity.slice(1)} Gear`}
        width={24}
        height={24}
        className="inline-block mr-2"
    />
);

const GearsPage: React.FC = () => {
    const gearTypes = [
        { number: 1, name: "Cannons (or railgun)" },
        { number: 2, name: "Chip" },
        { number: 3, name: "Armor" },
        { number: 4, name: "Radar" },
    ];

    const rarityLevels = [
        { rarity: "legendary", name: "Legendary", color: "text-yellow-500" },
        { rarity: "purple", name: "Epic", color: "text-purple-500" },
        { rarity: "blue", name: "Rare", color: "text-blue-500" },
        { rarity: "green", name: "Common", color: "text-green-500" },
    ];

    return (
        <Card className="max-w-4xl mx-auto mb-8">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">Gears</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <InfoSection
                    icon={<GearIcon number={1} />}
                    title="Introduction"
                >
                    <p className="text-foreground/90 mb-4">
                        Each hero can have 4 gears that increase its power significantly.
                    </p>
                    <p className="text-foreground/90 mb-2">There are 4 types of gears:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        {gearTypes.map((gear) => (
                            <li key={gear.number} className="flex items-center">
                                <GearIcon number={gear.number} />
                                {gear.name}
                            </li>
                        ))}
                    </ul>
                </InfoSection>

                <InfoSection
                    icon={<RarityGearIcon rarity="legendary" />}
                    title="Gear Rarity Levels"
                >
                    <p className="text-foreground/90 mb-2">Each gear can be of a different rarity level, going in descendant power:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                        {rarityLevels.map((level) => (
                            <li key={level.rarity} className={`flex items-center ${level.color}`}>
                                <RarityGearIcon rarity={level.rarity} />
                                {level.name}, {level.rarity} ones
                            </li>
                        ))}
                    </ul>
                </InfoSection>

                <InfoSection
                    icon={<RarityGearIcon rarity="purple" />}
                    title="Gear Upgrade Strategy"
                >
                    <p className="text-foreground/90 mb-4">
                        It is highly suggested to not upgrade the green gears, but to only spend resources and money to upgrade purple and legendary ones.
                    </p>
                    <p className="text-foreground/90">
                        Given the fact that legendary gears can only be built and it takes time, it is very important to assign the right gears to heroes, and this must be done following the logic on the next page.
                    </p>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default GearsPage;