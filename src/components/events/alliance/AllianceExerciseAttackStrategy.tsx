import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Swords, Clock } from 'lucide-react';

const AllianceExerciseAttackStrategy: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-100 to-red-50 border-b border-red-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-red-600 flex items-center">
                    <Swords className="w-10 h-10 mr-3 text-red-500" />
                    Attack Strategy
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-primary mb-4">General Strategy</h3>
                        <p className="text-lg text-foreground/90 mb-4">
                            The attack strategy varies based on the number of teams you have:
                        </p>
                        <h4 className="text-xl font-semibold text-primary mb-2">For Players with 2 Teams:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90 mb-4">
                            <li>Launch rallies (<strong>3 minutes long</strong>) with your weakest team against the tanks</li>
                            <li>Participate in other people&apos;s rallies with your strongest team</li>
                            <li>Prioritize joining rallies with the countdown closest to zero</li>
                            <li>Continue attacking until the event ends</li>
                        </ul>
                        <h4 className="text-xl font-semibold text-primary mb-2">For Players with 3 Teams:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90 mb-4">
                            <li>Use your two strongest teams to join other rallies</li>
                            <li>Use your weakest team to launch rallies</li>
                        </ul>
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
                            <p className="font-bold">Important Note:</p>
                            <p>You can only start 1 rally at a time per alliance member, regardless of how many teams you have. However, you can participate in multiple rallies simultaneously.</p>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <Image
                            src="/images/events/alliance-exercise-rally-screen.png"
                            alt="Rally screen to participate in"
                            width={300}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                        <p className="text-sm text-center mt-2 text-foreground/70">Rally screen to participate in</p>
                    </div>
                </div>
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
                    <h4 className="font-bold flex items-center"><Clock className="w-5 h-5 mr-2" /> Key Timing Tip:</h4>
                    <p>Always prioritize joining rallies that are about to launch (those with the countdown closest to zero). This maximizes your participation and overall alliance effectiveness.</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllianceExerciseAttackStrategy;