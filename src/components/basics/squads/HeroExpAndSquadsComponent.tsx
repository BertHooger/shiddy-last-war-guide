import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Star, Users } from 'lucide-react';

const HeroExpAndSquadsComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Star className="w-8 h-8 mr-2" />
                    Hero EXP, Shards, and Squads
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <InfoSection icon={<Star className="w-6 h-6 text-yellow-500" />} title="Hero EXP and shards">
                        <div className="flex items-center space-x-4 mb-4">
                            <p className="text-foreground/90">
                                You will earn a lot of Hero EXP
                            </p>
                            <Image src="/images/hero-exp-icon.png" alt="Hero EXP Icon" width={24} height={24} />
                            <p className="text-foreground/90">
                                and shards
                            </p>
                            <Image src="/images/hero-shards-icon.png" alt="Hero Shards Icon" width={72} height={24} />
                            <p className="text-foreground/90">
                                , but you should use them carefully.
                            </p>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-foreground/90">
                            <li>Don&apos;t waste EXP and shards upgrading all heroes, only upgrade the ones you use on your first team for now.</li>
                            <li>It makes sense to use EXP and shards on second and third squad only if you decide to spend in the game, if you are free to play you shouldn&apos;t.</li>
                            <li>To upgrade a hero&apos;s level the number of EXP required increases with the level number.</li>
                            <li>To level up a hero&apos;s class the number of shards required will increase with the class level.</li>
                        </ul>
                    </InfoSection>

                    <InfoSection icon={<Users className="w-6 h-6 text-blue-500" />} title="Squads and soldiers">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-2/3 space-y-4">
                                <p className="text-foreground/90">
                                    When carrying out an attack or rally with a team, soldiers are added to the base power of the heroes.
                                    The quantity of soldiers that are included in the attack depends on the <strong>Command</strong> attribute of the heroes included in the team.
                                </p>

                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p className="text-foreground/90">
                                        In the example you can see that the unit count (soldiers) participating in the attack is 1,184 (252 with Murphy, 226 with Viola, etc ) and by clicking on the i the information appears that they are level T5 soldiers.
                                    </p>
                                    <p className="text-foreground/90 mt-2">
                                        Given 1,184 T5 level soldiers (whose single power is 409, and load 1200 as seen in the figure below) it follows that these troops add:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-foreground/90 mt-2">
                                        <li>1.184*409 = 484.256 power points to the team</li>
                                        <li>1,184*1200 = 1,420,800 load points. This means that if you attack a base and that base has iron/food/gold resources, that attack will steal this amount of resources from the opponent if you win the attack (unless the opponent&apos;s amount of protection).</li>
                                    </ul>
                                    <p className="text-foreground/90 mt-2">
                                        The resources stolen per type are proportional to the amount of each type that the opponent has. For example, if the opponent has almost all iron then proportionately most of the iron load points will be stolen.
                                    </p>
                                </div>

                                <p className="text-foreground/90">
                                    Note that if available, soldiers with higher levels will always be used first, then those with lower levels are taken to fill.
                                </p>
                            </div>
                            <div className="md:w-1/3 space-y-4">
                                <Image src="/images/squad-soldiers-example.png" alt="Squad Soldiers Example" width={300} height={200} className="rounded-lg shadow-md" />
                                <Image src="/images/soldier-power-load.png" alt="Soldier Power and Load" width={300} height={200} className="rounded-lg shadow-md" />
                                <Image src="/images/soldier-levels.png" alt="Soldier Levels" width={300} height={200} className="rounded-lg shadow-md" />
                            </div>
                        </div>
                    </InfoSection>
                </div>
            </CardContent>
        </Card>
    );
};

export default HeroExpAndSquadsComponent;