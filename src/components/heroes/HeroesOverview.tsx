import React from 'react';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { IconWithText } from '../functions/icons/IconWithText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Star, Zap, Shield, Swords, HeartPulse, ArrowUp } from 'lucide-react';

const HeroesOverview: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <User className="w-8 h-8 mr-2" />
                    Heroes – Power up your squads
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <p className="text-foreground/90 mb-4">
                    Heroes, their upgrades, and their placement in squads are crucial to winning against other players and missions in Last War. Here you can find all the information about the best heroes in the game.
                </p>

                <InfoSection icon={<Star className="w-6 h-6 text-yellow-400" />} title="Introduction">
                    <p className="text-foreground/90 mb-4">
                        Heroes have the following characteristics:
                    </p>
                    <ul className="list-disc pl-5 text-foreground/90 mb-4">
                        <li>
                            <strong>Rarity:</strong>
                            <div className="flex space-x-4 mt-2">
                                <IconWithText src="/images/rarity/ur.png" alt="UR" text="UR (legendary)" />
                                <IconWithText src="/images/rarity/ssr.png" alt="SSR" text="SSR (epic)" />
                                <IconWithText src="/images/rarity/sr.png" alt="SR" text="SR (rare)" />
                            </div>
                        </li>
                        <li>
                            <strong>Type:</strong>
                            <div className="flex space-x-4 mt-2">
                                <IconWithText src="/images/type/tank.png" alt="Tank" text="Tank" />
                                <IconWithText src="/images/type/missile.png" alt="Missile Vehicle" text="Missile Vehicle" />
                                <IconWithText src="/images/type/aircraft.png" alt="Aircraft" text="Aircraft" />
                            </div>
                        </li>
                        <li>
                            <strong>Abilities:</strong>
                            <div className="flex space-x-4 mt-2">
                                <IconWithText src="/images/ability/defender.png" alt="Defense" text="Defense" />
                                <IconWithText src="/images/ability/attack.png" alt="Attack" text="Attack" />
                                <IconWithText src="/images/ability/support.png" alt="Support" text="Support" />
                            </div>
                        </li>
                        <li>
                            <strong>Attributes:</strong> Attack, HP, Defense, Command
                        </li>
                    </ul>
                    <p className="text-foreground/90 mb-4">
                        It is important which heroes you choose and where you place them in your squad to maximize your attack/defense power.
                    </p>
                    <p className="text-foreground/90">
                        Heroes can be equipped with gears that give them more power. Please first read <a href="#" className="text-primary hover:underline">this article</a> that explains gears and how to build them.
                    </p>
                </InfoSection>

                <InfoSection icon={<Zap className="w-6 h-6 text-blue-400" />} title="Hero Types">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                            <Shield className="w-5 h-5 mr-2 text-primary" />
                            <span>Defense Hero</span>
                        </div>
                        <div className="flex items-center">
                            <Swords className="w-5 h-5 mr-2 text-destructive" />
                            <span>Attack Hero</span>
                        </div>
                        <div className="flex items-center">
                            <HeartPulse className="w-5 h-5 mr-2 text-green-500" />
                            <span>Support Hero</span>
                        </div>
                    </div>
                </InfoSection>

                <InfoSection icon={<ArrowUp className="w-6 h-6 text-green-500" />} title="Hero Upgrades">
                    <ul className="list-disc pl-5 text-foreground/90">
                        <li>Experience Level Upgrade: Increases hero&apos;s base stats</li>
                        <li>Stars/Tiers Upgrade: Unlocks new abilities and boosts overall power</li>
                        <li>Skills Upgrade: Enhances specific abilities for greater impact</li>
                    </ul>
                </InfoSection>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Available Heroes</h3>
                    <p className="text-foreground/90">
                        Discover detailed information about each hero, including Mason, Murphy, Kimberly, and many more. Each hero has unique skills and potential upgrades that can significantly impact your strategy.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default HeroesOverview;