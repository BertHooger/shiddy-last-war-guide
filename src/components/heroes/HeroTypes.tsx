import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { TypeIcon } from '@/components/functions/icons/TypeIcon';

const HeroTypes: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Users className="w-8 h-8 mr-2" />
                    Hero Types
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90 mb-4">
                    There are 3 types of heroes:
                </p>
                <ul className="list-none space-y-3 text-foreground/90 mb-6">
                    <li><TypeIcon type="Tank" /></li>
                    <li><TypeIcon type="Missile" /></li>
                    <li><TypeIcon type="Aircraft" /></li>
                </ul>

                <p className="text-lg text-foreground/90 mb-4">
                    The type of the hero affects which other type it is more effective against:
                </p>
                <ul className="list-disc pl-5 text-foreground/90 mb-6">
                    <li>Aircraft heroes take 80% of damages from Tank heroes</li>
                    <li>Missile heroes take 80% of damages from Aircraft heroes</li>
                    <li>Tank heroes take 80% of damages from Missile heroes</li>
                </ul>

                <p className="text-lg text-foreground/90">
                    At the beginning of the game, most players will use Tank heroes. Consider this when deciding on your strategy and squad composition.
                </p>
            </CardContent>
        </Card>
    );
};

export default HeroTypes;