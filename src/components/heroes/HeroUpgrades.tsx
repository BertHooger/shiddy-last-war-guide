import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';

const HeroUpgrades: React.FC = () => {
    const upgradeImages = [
        { src: '/images/upgrades/experience-level.png', alt: 'Experience Level: 1', caption: 'Experience Level: 1' },
        { src: '/images/upgrades/skills.png', alt: 'Skills: level 1 or locked', caption: 'Skills: level 1 or locked' },
        { src: '/images/upgrades/stars.png', alt: 'Stars: 0', caption: 'Stars: 0' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <ArrowUp className="w-8 h-8 mr-2" />
                    Hero Upgrades
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3 space-y-4">
                    <p className="text-lg text-foreground/90">
                        All heroes share the fact that they can be updated in Experience Level, Stars/Tier and Skills.
                    </p>
                    <p className="text-lg text-foreground/90">
                        When you recruit a hero, at the beginning he/she will have:
                    </p>
                    <ul className="list-disc pl-5 text-foreground/90">
                        <li>Experience Level: 1</li>
                        <li>Stars: 0 ⭐️</li>
                        <li>All Skills are at level 1 or they are locked</li>
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <Gallery images={upgradeImages} />
                </div>
            </CardContent>
        </Card>
    );
};

export default HeroUpgrades;