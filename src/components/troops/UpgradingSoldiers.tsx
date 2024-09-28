import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Image from 'next/image';
import { VideoSection } from '@/components/functions/section/VideoSection';

const UpgradingSoldiers: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="font-title text-2xl md:text-3xl text-primary">Upgrading Soldiers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="font-sans text-lg">
                    Soldiers participate in attacks and provide power so it is important to always upgrade them to the highest level, but there is a trick on how to do that and at the same time earn many more points for Arms Race and Duel VS. The total amount of time and resources spent is the same.
                </p>

                <Alert className="bg-secondary/20">
                    <AlertDescription>
                        <h3 className="font-title text-xl text-secondary mb-2">Ground Rules for Soldier Training and Upgrading:</h3>
                        <ul className="list-disc list-inside font-sans">
                            <li>A barrack can train soldiers only up to a specific level that depends on the barrack level, see paragraphs above for the levels</li>
                            <li>A barrack can upgrade a soldier level but the upgrade can only be from any lower level to directly the maximum level the barrack can train. (e.g., barrack level 24 can upgrade T3-{'>'}T8)</li>
                            <li>The time and resources needed to train a soldier directly to a level or passing through multiple levels is the same (+- some seconds)</li>
                            <li>Points for Arms Race: Unit Progression and Duel VS: Day 5: Total Mobilization are earned each time a soldier reaches a level, whether from direct training or upgrades</li>
                            <li>You can have up to 4 barracks, just adapt this approach to the number of barracks you have</li>
                        </ul>
                    </AlertDescription>
                </Alert>

                <div className="font-sans text-lg">
                    <p>To score more points for Arms Race: Unit Progression and Duel VS: Day 5: Total Mobilization, the training of soldiers should be stepped. The maximization of those points can be reached only if your barracks follow a certain rule of how you level them up.</p>
                    <p className="mt-4">Given the Barracks level requirements expressed in the previous paragraphs, you will want to arrange the barracks so that the highest level one unlocks a higher soldier level than the next barracks in descending level order. So DON&apos;T upgrade blindly your barracks to highest level.</p>
                </div>

                <Alert className="bg-primary/20">
                    <AlertDescription>
                        <h3 className="font-title text-xl text-primary mb-2">Example Barracks Arrangement:</h3>
                        <ul className="list-disc list-inside font-sans">
                            <li>First Barracks: Level 27+ (unlocks soldier Level 9)</li>
                            <li>Second Barracks: Level 24+ but lower than 27 (unlocks soldier Level 8)</li>
                            <li>Third Barracks: Level 20+ but lower than 24 (unlocks soldier Level 7)</li>
                            <li>Fourth Barracks: Level 17+ but lower than 20 (unlocks soldier Level 6)</li>
                        </ul>
                    </AlertDescription>
                </Alert>

                <div className="font-sans text-lg">
                    <h3 className="font-title text-xl text-secondary mb-2">Steps to obtain a T9 soldier:</h3>
                    <ol className="list-decimal list-inside">
                        <li>Use any of the barracks to train T5 soldiers</li>
                        <li>Use the fourth barrack to upgrade the soldiers: T5-{'>'}T6</li>
                        <li>Use the third barrack to upgrade the soldiers: T6-{'>'}T7</li>
                        <li>Use the second barrack to upgrade the soldiers: T7-{'>'}T8</li>
                        <li>Use the first barrack to upgrade the soldiers: T8-{'>'}T9</li>
                    </ol>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                        <h3 className="font-title text-xl text-secondary mb-2">Duel VS Total Mobilization points:</h3>
                        <p className="font-sans text-lg">
                            As you can see the higher the level the more points you earn. If you first train a soldier to T3 you earn 100 points, then if you upgrade that same soldier to T4 you earn another 125 points, and so on.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image src="/images/troops/duel-vs-points.png" alt="Duel VS Total Mobilization points" width={400} height={300} className="rounded-lg shadow-md" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <h3 className="font-title text-xl text-secondary mb-2">Direct vs Stepped Training Comparison</h3>
                        <div className="space-y-4">
                            <Alert className="bg-secondary/20">
                                <AlertDescription>
                                    <strong>Direct Training:</strong><br />
                                    1 T9 soldier = 250 points
                                </AlertDescription>
                            </Alert>
                            <Alert className="bg-primary/20">
                                <AlertDescription>
                                    <strong>Stepped Training (if you have 4 barracks):</strong><br />
                                    1 T5 – {'>'} 1 T6 -{'>'} 1 T7 -{'>'} 1 T8 -{'>'} 1 T9<br />
                                    150 + 175 + 200 + 225 + 250 = 1000 points
                                </AlertDescription>
                            </Alert>
                        </div>
                        <p className="font-sans text-lg mt-4">
                            As you can see using the stepped approach you earn x4 times the amount of points in this case for each single soldier.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="font-title text-xl text-secondary mb-2">How to Upgrade Soldiers</h3>
                        <VideoSection src="/videos/soldier-upgrade-tutorial.mp4" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UpgradingSoldiers;