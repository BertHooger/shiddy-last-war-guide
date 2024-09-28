"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { InfoBox } from '@/components/functions/section/info/InfoBox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bug, Shield, AlertTriangle, Info, MousePointerClick } from 'lucide-react';
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

const VirusStacks: React.FC = () => {
    const [infectionLevel, setInfectionLevel] = useState(0);

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Bug className="w-8 h-8 mr-2" />
                    Virus Stacks
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                    When your troops get infected and return to your base, you start accumulating infection stacks. The Infection Stacks range from 0 (not infected) to 100 (maximum infection level).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoBox
                        icon={<Shield className="w-6 h-6 text-primary" />}
                        title="Infection Limit"
                        content="Even if you attack more infected monsters or are attacked by enemies, you cannot exceed 100 infection stacks."
                    />
                    <InfoBox
                        icon={<AlertTriangle className="w-6 h-6 text-destructive" />}
                        title="Debuff Effects"
                        content="Higher infection levels lead to more severe debuffs affecting your base and troops."
                    />
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <Info className="w-6 h-6 mr-2 text-primary" />
                        Infection Indicator
                    </h3>
                    <p className="mb-4">
                        The virus infection stack is shown as an icon on top of the radar icon. Experiment with the slider below to see how it changes:
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                        <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={[infectionLevel]}
                            onValueChange={(value) => setInfectionLevel(value[0])}
                        />
                        <span className="font-bold">{infectionLevel}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Image
                            src={infectionLevel === 0 ? "/images/season-one/indicators/not-infected.png" : "/images/season-one/indicators/infected.png"}
                            alt={infectionLevel === 0 ? "Not Infected" : "Infected"}
                            width={30}
                            height={30}
                            className="inline-block"
                        />
                        <span>{infectionLevel === 0 ? "Not infected" : `Infected (${infectionLevel} stacks)`}</span>
                    </div>
                    <Progress value={infectionLevel} className="mt-2" />
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <MousePointerClick className="w-6 h-6 mr-2 text-primary" />
                        Detailed Virus Information
                    </h3>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                        <div className="md:w-1/3">
                            <Image
                                src="/images/season-one/virus/virus-stacks-detail.png"
                                alt="Virus Stacks Detail"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-foreground/80">
                                Click on the infection icon to reveal more details about the debuffs and their severity. The image on the left illustrates an example of this detailed view, showing how the infection affects various aspects of your base and troops.
                            </p>
                            <ul className="list-disc list-inside mt-2 text-foreground/80">
                                <li>View current infection level</li>
                                <li>See active debuffs and their durations</li>
                                <li>Understand the impact on your base&apos;s performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default VirusStacks;