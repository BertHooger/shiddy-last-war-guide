import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Tractor } from 'lucide-react';

const AllianceExercisePreparation: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-b border-yellow-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-yellow-600 flex items-center">
                    <Clock className="w-10 h-10 mr-3 text-yellow-500" />
                    Preparation Phase
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                            During this phase, there is a countdown to the start of the trial. Alliance members can take several important steps to prepare:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Clock className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold">Donate Wrenches</h4>
                                    <p className="text-foreground/90">Go to: Special Events → Alliance Tutorial → Build</p>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>Donating wrenches increases the damage of alliance hits</li>
                                        <li>Earn 500 alliance points for each wrench donated</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold">Position Strategically</h4>
                                    <p className="text-foreground/90">It&apos;s essential to get close to the platform while still being near the alliance rally point</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Tractor className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg font-semibold">Recall Troops</h4>
                                    <p className="text-foreground/90">Withdraw troops from mines and fields 5-10 minutes before the start to have them available for rallies</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <Image
                            src="/images/events/alliance-exercise-preparation.png"
                            alt="Alliance Exercise Preparation"
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

export default AllianceExercisePreparation;