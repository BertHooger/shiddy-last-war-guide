import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Skull, Target, Users } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery'; // Adjust the import path as needed

import { worldBossImages } from '../ImageProps';

const WorldBossComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Skull className="w-8 h-8 mr-2" />
                    World Boss – Increased Damage Strategies
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <InfoSection
                    icon={<Target className="w-6 h-6 text-red-500" />}
                    title="War Fever Strategy"
                >
                    <p className="text-foreground/90 mb-4">
                        As already explained in other tricks, you can use War Fever to increase damage, and it works also for World bosses.
                    </p>
                    <p className="text-foreground/90">
                        Right before you attack the current World Boss Monster, scout a base (possibly one not part of an alliance to avoid a war) to receive a temporary (15 minutes) 1% damage increase. That small 1% might help you to reach rewards goal that else you will have to wait next week for to reach.
                    </p>
                </InfoSection>

                <InfoSection
                    icon={<Users className="w-6 h-6 text-blue-500" />}
                    title="Mason&apos;s Skill: Increase damage up to 17%"
                >
                    <p className="text-foreground/90 mb-4">
                        Mason (SSR Tank attack hero), has a special skill (bottom left one called Passive: Zombie Purge) that increases the back row damage by 17% (on skill level 17) in battle vs monsters.
                    </p>
                    <p className="text-foreground/90 mb-4">
                        So even if it seems strange, try to put Violet and Mason on your front row, and move Murphy to the back, move stronger gear cannon from Mason to Murphy and try hitting the World Boss Monsters.
                    </p>
                    <p className="text-foreground/90">
                        Here an example on how it was more effective on the Frankenstein World Boss.
                    </p>
                </InfoSection>

                <InfoSection
                    icon={<Users className="w-6 h-6 text-green-500" />}
                    title="Squad Formations"
                >
                    <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-4">
                        <div className="md:w-1/2">
                            <p className="font-semibold mb-4 text-center">
                                Normal Squad Formation
                            </p>
                            {/* Use worldBossImages.partOne */}
                            <Gallery images={worldBossImages.partOne} />
                        </div>
                        <div className="md:w-1/2">
                            <p className="font-semibold mb-4 text-center">
                                Modified Squad Formation (Mason&apos;s Skill)
                            </p>
                            {/* Use worldBossImages.partTwo */}
                            <Gallery images={worldBossImages.partTwo} />
                        </div>
                    </div>
                </InfoSection>
            </CardContent>
        </Card >
    );
};

export default WorldBossComponent;