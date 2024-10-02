import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Medal } from 'lucide-react';

const AllianceDuelVSStrategy: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 border-b border-green-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-green-600 flex items-center">
                    <Trophy className="w-10 h-10 mr-3 text-green-500" />
                    Winning Strategy
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Winning Points Structure</h3>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Following the variable points structure outlined below, it&apos;s essential to employ a strategic approach to secure victory match by match, rather than risking the outcome solely on the final day, where the strongest adversary may likely dominate.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <Image
                            src="/images/events/alliance-duel-vs-points-structure.png"
                            alt="Alliance Duel VS Points Structure"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                        <Medal className="w-8 h-8 mr-2 text-blue-500" />
                        Winning Strategy
                    </h3>
                    <p className="text-lg text-foreground/90 leading-relaxed">
                        Securing victory in the Alliance Duel VS necessitates meticulous planning of moves and timely execution of activities. Certain days even allow for advance preparation, as elaborated in the subsequent sections.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllianceDuelVSStrategy;