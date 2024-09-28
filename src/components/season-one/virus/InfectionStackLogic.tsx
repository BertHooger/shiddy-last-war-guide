import React from 'react';
import Image from 'next/image';
import { InfoSection } from '@/components/functions/section/info/InfoSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Shield, Activity, Zap, Skull } from 'lucide-react';

const InfectionStackLogic: React.FC = () => {
    const infectionScenarios = [
        "You attack a zombie with a virus level higher than your Virus Resistance",
        "You attack a Corruptor or an Infected Zombie, regardless of your Virus Resistance",
        "You attack a World Boss such as Frankenstein",
        "You get attacked by enemy troops carrying the virus"
    ];

    const debuffs = [
        { icon: <Activity className="w-5 h-5 text-primary" />, name: "Hospital Stay", threshold: 1, description: "Every (300 to 200 seconds) one unit becomes seriously injured" },
        { icon: <Shield className="w-5 h-5 text-primary" />, name: "Morale is low", threshold: 20, description: "Damage dealt is less effective (-4% to -20%)" },
        { icon: <Skull className="w-5 h-5 text-primary" />, name: "Fatal Virus", threshold: 40, description: "Increased unit casualties rate in enemy (+4% to +10%)" },
        { icon: <Zap className="w-5 h-5 text-primary" />, name: "Severe Infection", threshold: 60, description: "Infection carried by troops increases by (11% to 15%) when they march out" },
        { icon: <AlertTriangle className="w-5 h-5 text-primary" />, name: "Virus Plague", threshold: 80, description: "Your troops have a chance to infect the enemy even in defeat with probability of 8% to 10%" }
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Infection Stack Logic</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90">Each time you get infected, the infection stacks increase.</p>

                <InfoSection title="Infection Scenarios">
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        {infectionScenarios.map((scenario, index) => (
                            <li key={index}>{scenario}</li>
                        ))}
                    </ul>
                    <p className="mt-4 font-semibold">You will NOT get infected if you reinforce a base.</p>
                </InfoSection>

                <InfoSection title="Infection Warning">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/images/season-one/virus/infection-warning.png"
                            alt="Infection Warning"
                            width={240}
                            height={160}
                            className="rounded-lg shadow-md"
                        />
                        <p className="text-foreground/80">
                            When you see this image on top of the enemy attack display, it means you will get infected with additional infection stacks, regardless of your virus resistance.
                        </p>
                    </div>
                </InfoSection>

                <InfoSection title="Debuff Types">
                    <p className="mb-4 text-foreground/80">There are 5 types of debuffs that activate at certain infection stack thresholds (1, 20, 40, 60, 80):</p>
                    <Image
                        src="/images/season-one/virus/debuff-icons.png"
                        alt="Debuff Icons"
                        width={300}
                        height={60}
                        className="rounded-lg shadow-md mb-4"
                    />
                    <ul className="space-y-3">
                        {debuffs.map((debuff, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                {debuff.icon}
                                <span>
                                    <span className="font-semibold">{debuff.name}</span> (Stack ≥{debuff.threshold}): {debuff.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-foreground/80">Each debuff has a range; higher infection stacks result in worse effects from activated debuffs.</p>
                </InfoSection>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-2/3">
                        <InfoSection title="Debuff Examples">
                            <p className="font-semibold">Infection Stack = 1:</p>
                            <ul className="list-disc list-inside mb-2 text-foreground/80">
                                <li>Hospital Stay activates: every 300 seconds one unit becomes seriously injured</li>
                            </ul>
                            <p className="font-semibold">Infection Stack = 8:</p>
                            <ul className="list-disc list-inside text-foreground/80">
                                <li>Hospital Stay activates: every 293 seconds one unit becomes seriously injured (lower time is worse)</li>
                            </ul>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/3">
                        <Image
                            src="/images/season-one/virus/debuff-details.png"
                            alt="Debuff Details"
                            width={300}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>

                <InfoSection title="Treatment and Recovery">
                    <p className="mb-2 text-foreground/80">Allies can send treatment, which will:</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li>Reduce Infection Stack</li>
                        <li>Reduce intensity and duration of each debuff proportionally</li>
                        <li>Deactivate debuffs if the infection stack falls below their threshold</li>
                    </ul>
                    <p className="mt-4 text-foreground/80">Time will also reduce the debuffs&apos; intensity and duration.</p>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default InfectionStackLogic;