import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target } from 'lucide-react';

const TroopsIntro: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-title text-4xl md:text-5xl lg:text-6xl text-primary">
                Troops – Obtain, Train and Upgrade Soldiers
            </h1>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="font-title text-2xl md:text-3xl text-secondary flex items-center">
                        <Users className="w-6 h-6 mr-2" />
                        Fundamental to the Game
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="font-sans text-lg mb-4">
                        Troops (soldiers) are fundamental to the game in several aspects:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="font-sans">Every time you make an attack or rally with a team, a number of soldiers join it, based on the level of these soldiers the attack power increases</li>
                        <li className="font-sans">Soldiers are needed to ensure that you can defend your base if attacked by opponents</li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="font-title text-2xl md:text-3xl text-secondary flex items-center">
                        <Target className="w-6 h-6 mr-2" />
                        Contents Overview
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="font-title text-xl text-primary">Troops Levels</h3>
                            <p className="font-sans ml-4">Characteristics of the soldiers</p>
                        </li>
                        <li>
                            <h3 className="font-title text-xl text-primary">Obtain Soldiers</h3>
                            <ul className="list-disc list-inside ml-4">
                                <li className="font-sans">Operation Falcon special operations</li>
                                <li className="font-sans">Soldiers training in the barracks</li>
                                <li className="font-sans">Barracks level requirements</li>
                                <li className="font-sans">Additional barracks</li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="font-title text-xl text-primary">Drill Grounds</h3>
                        </li>
                        <li>
                            <h3 className="font-title text-xl text-primary">Upgrading Soldiers</h3>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            <div className="font-accent text-sm italic text-muted-foreground">
                <p>Explore this page to learn everything about troops management and strategy!</p>
            </div>
        </div>
    );
};

export default TroopsIntro;