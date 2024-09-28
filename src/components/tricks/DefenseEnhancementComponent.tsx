import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { defenseEnhancementImages } from '../ImageProps';

const DefenseEnhancementComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Defense Enhancement – Increased % of Damage</CardTitle>
            </CardHeader>
            <CardContent>
                <p>When you are defending, be it your base or a village, you can take advantage of the War fever to have a 1% damage boost.</p>
                <p>This boost automatically activates when you attack or explore a base, but it will not activate when you are only defending.</p>
                <p>To trigger the War fever, you can do one of the following actions:</p>

                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Send a scout airplane to a base.</li>
                    <li>Start an attack or a rally against an enemy base (doing an attack or rally against zombies will not work). You can also cancel the attack once the war fever has started.</li>
                </ul>

                <p>You can see the status of war fever in the upper left part of the screen, right under the food/iron/coin/power meters. Clicking on the icon will show the countdown.</p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                    <Image
                        {...defenseEnhancementImages.warFeverIcon}
                        alt={defenseEnhancementImages.warFeverIcon.alt || "War Fever Icon"}
                        className="rounded-lg shadow-md"
                    />
                    <Image
                        {...defenseEnhancementImages.warFeverCountdown}
                        alt={defenseEnhancementImages.warFeverCountdown.alt || "War Fever Countdown"}
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Notes in "bubbles" */}
                <div className="mt-6 flex flex-col space-y-4">
                    <div className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md">
                        <p>Repeat the trigger action to restart the countdown to 15 minutes whenever you want.</p>
                    </div>
                    <div className="bg-red-100 text-red-800 p-4 rounded-lg shadow-md">
                        <p className="font-bold">IMPORTANT:</p>
                        <p>Don&apos;t use this trick while you have a shield on because you will lose it.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DefenseEnhancementComponent;