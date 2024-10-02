import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Sword, Brain } from 'lucide-react';

const AllianceStrategicPreparation: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-50 border-b border-purple-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-purple-600 flex items-center">
                    <Brain className="w-10 h-10 mr-3 text-purple-500" />
                    Strategic Preparation
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                    Certain activities grant points upon completion, enabling you to initiate them the day before they are required and finish them during their respective phase to maximize points:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                    <li>For the days in which radar mission are rewarded, stack the missions to the maximum the day before</li>
                    <li>For the days in which gathering food/iron/gold reward points, start the gathering the day before making sure it will end in the new day (before starting the gathering it indicates how much it will take)</li>
                    <li>During the days when upgrading buildings rewards points based on their power increase, it&apos;s beneficial to upgrade numerous buildings beforehand in previous days and leave them in a state of gift wrapping. This is because building power is only boosted upon opening the gift package and also duel vs points are given at that moment.</li>
                    <li>For days in which research rewards point start a long research the day(s) before so that the research ends in those days. The points are rewarded when clicking on the completed research icon.</li>
                    <li>Don&apos;t open Drone Data Chip and Components chest when they are in inventory, as in day 1 and 3 those activities make you gain points.</li>
                </ul>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                        <Sword className="w-8 h-8 mr-2 text-red-500" />
                        Enemy Buster preparation
                    </h3>
                    <p className="text-lg text-foreground/90 mb-4">
                        The last day of the duel rewards points for killing troops of your opponents, so it is important to prepare for this day.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Offense preparation</h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                        <li>During the week try to upgrade barracks to the highest level possible to unlock training of higher level troops</li>
                        <li>Train as many troops as you can, as you will need them during the war. The best would be to use your training speed ups during Day 5: Total Mobilization to maximize points.</li>
                        <li>Buy training speed ups and healing speed ups</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-xl font-semibold text-primary mb-2 flex items-center">
                        <Shield className="w-6 h-6 mr-2 text-blue-500" />
                        Defense preparation
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                        <li>Buy shields (or spare resources to buy them) to use for the 24 hours of the last day. (Else you will need 1500 diamonds for 8-hour shield!!!)</li>
                        <li>
                            Remove troops from your defense lineup, so that even if you get hit you will lose a small amount of troops compared to how much you lose if you have defense up and get defeated: go in your base, click on the wall, click on the defense lineup icon (shown below), remove the checks on the squads to remove them from the defense lineup.
                            <div className="mt-2 flex items-center">
                                <Image
                                    src="/images/events/table/defense-lineup.png"
                                    alt="Defense Lineup Icon"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                <span className="text-sm text-white">Defense Lineup Icon</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllianceStrategicPreparation;