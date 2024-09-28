"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bug, Shield, AlertTriangle, Beaker } from 'lucide-react';
import { Progress } from "@/components/ui/progress"

const InfectVirus: React.FC = () => {
    const [researchLevel, setResearchLevel] = useState(0);

    const virusResistance = Math.min(researchLevel * 10, 100);

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Bug className="w-8 h-8 mr-2" />
                    Infect Virus (RA Virus)
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                    The RA Virus poses a significant threat in the game. Engaging with zombies exposes your troops to infection, which can have severe consequences for your base.
                </p>

                <div className="bg-secondary/30 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <Shield className="w-6 h-6 mr-2 text-primary" />
                        Virus Resistance
                    </h3>
                    <p className="mb-4">
                        Build up virus resistance with the Virus Research Institute. Higher levels provide better protection against infection.
                    </p>
                    <div className="flex items-center space-x-4">
                        <span>Research Level:</span>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={researchLevel}
                            onChange={(e) => setResearchLevel(parseInt(e.target.value))}
                            className="w-full"
                        />
                        <span>{researchLevel}</span>
                    </div>
                    <div className="mt-2">
                        <span>Virus Resistance: {virusResistance}%</span>
                        <Progress value={virusResistance} className="mt-2" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold mb-1">Infection Risk</h4>
                            <p className="text-sm text-foreground/80">Troops engaging zombies without sufficient resistance may become infected.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <Beaker className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold mb-1">Base Effects</h4>
                            <p className="text-sm text-foreground/80">Infected returning troops can spread negative effects throughout your base.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg mt-4">
                    <h3 className="text-lg font-semibold mb-2">Strategy Tip</h3>
                    <p className="text-sm text-foreground/90 italic">
                        Prioritize upgrading your Virus Research Institute to minimize the risk of infection and protect your base from the devastating effects of the RA Virus.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default InfectVirus;