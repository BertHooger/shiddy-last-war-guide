import React from 'react';
import Image from 'next/image';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Swords, AlertTriangle, Bug } from 'lucide-react';

const GameAction: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Swords className="w-8 h-8 mr-2" />
                    Game Action
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-2/3 space-y-6">
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            In this new world, many dynamics change. It&apos;s a game-changer! Let&apos;s explore them, focusing on how to kill zombies.
                        </p>

                        <InfoSection icon={<AlertTriangle className="w-6 h-6 text-destructive" />} title="Damage Debuff and Unconditional Infection">
                            <p className="mb-2 text-foreground/80">When attacking zombies, two new factors come into play:</p>
                            <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                <li><span className="font-semibold">Damage reduction:</span> Attacking zombies with higher virus levels than your resistance results in reduced damage. The attack display shows the percentage.</li>
                                <li><span className="font-semibold">Unconditional infection:</span> Certain enemies (corruptors, infected zombies, world bosses) infect you regardless of virus resistance. The attack display shows additional virus infection stack applied.</li>
                            </ul>
                        </InfoSection>

                        <InfoSection icon={<Bug className="w-6 h-6 text-primary" />} title="Infection Indicators">
                            <div className="flex items-center mb-4">
                                <p className="text-foreground/80">
                                    The <span className="font-semibold">+1</span> indicator next to this icon shows you&apos;ll get infected with an infection stack +1, regardless of virus resistance.
                                </p>
                                <Image
                                    src="/images/season-one/indicators/virus-molecule.png"
                                    alt="Virus Molecule"
                                    width={30}
                                    height={30}
                                    className="mr-3"
                                />
                            </div>
                            <div className="bg-primary/10 p-3 rounded-md mb-4">
                                <p className="text-foreground/90 font-semibold mb-2">
                                    Example: Insufficient Virus Resistance
                                </p>
                                <p className="text-foreground/80 mb-2">
                                    Your resistance: 4200 | Required: 6800
                                </p>
                                <p className="text-foreground/80">
                                    In this case, expect:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2">
                                    <li>Guaranteed infection</li>
                                    <li>Attack damage debuff of -96%</li>
                                </ul>
                            </div>
                            <p className="text-foreground/90 italic">
                                Always check your virus resistance before engaging with infected enemies to minimize risks.
                            </p>
                        </InfoSection>

                        <p className="text-foreground/90 font-semibold">
                            Exercise caution when facing powerful enemies with high virus levels!
                        </p>
                    </div>
                    <div className="md:w-1/3 mt-6 md:mt-0">
                        <Image
                            src="/images/season-one/damage-debuff.png"
                            alt="Damage Debuff and Infection"
                            width={300}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default GameAction;