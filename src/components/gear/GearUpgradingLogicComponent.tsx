import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Sword, Shield, Cog } from 'lucide-react';

const GearUpgradingLogic: React.FC = () => {
    return (
        <Card className="max-w-4xl mx-auto mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Cog className="w-8 h-8 mr-2" />
                    Gear Upgrading Logic
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <InfoSection
                    icon={<Cog className="w-6 h-6 text-blue-500" />}
                    title="Strategic Approach"
                >
                    <p className="text-foreground/90 mb-4">
                        When upgrading gears, it&apos;s crucial to follow a strategic approach to maximize your heroes potential.
                        The type of hero (attacker or defender) should guide your gear upgrading priorities.
                    </p>
                </InfoSection>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <InfoSection
                            icon={<Sword className="w-6 h-6 text-red-500" />}
                            title="Attacker Priorities"
                        >
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                                <li>Cannons and Chips need to be assigned first to attackers</li>
                                <li>These gears boost the attack power</li>
                            </ul>
                        </InfoSection>

                        <InfoSection
                            icon={<Shield className="w-6 h-6 text-green-500" />}
                            title="Defender Priorities"
                        >
                            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                                <li>Armor and Radar need to be assigned first to defenders</li>
                                <li>These gears boost the defense capabilities</li>
                            </ul>
                        </InfoSection>

                        <InfoSection
                            icon={<Cog className="w-6 h-6 text-purple-500" />}
                            title="Example Setup"
                        >
                            <p className="text-foreground/90 mb-2">
                                Consider a defender hero with the following gear setup:
                            </p>
                            <p className="text-foreground/90">
                                This hero has 4 gears, of which 3 are legendary and one is epic.
                                Being this a defender hero, the armor and radar are more leveled up than its attack gears.
                            </p>
                        </InfoSection>
                    </div>

                    <div className="md:w-1/3 flex justify-center items-start">
                        <Image
                            src="/images/gears/hero-gear-example.png"
                            alt="Hero Gear Example"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default GearUpgradingLogic;