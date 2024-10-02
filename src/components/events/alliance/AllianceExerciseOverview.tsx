import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const AllianceExerciseOverview: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-blue-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-blue-600 flex items-center">
                    <Shield className="w-10 h-10 mr-3 text-blue-500" />
                    Alliance Exercise
                    <Image src="/images/events/event-icon.png" alt="Alliance Exercise Icon" width={40} height={40} className="ml-3" />
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Event Overview</h3>
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li><strong>Type:</strong> Periodic event (every 2-3 days)</li>
                            <li><strong>Duration:</strong> 30 minutes</li>
                            <li><strong>Section:</strong> Events → Alliance Exercise</li>
                        </ul>
                        <p className="mt-4 text-lg text-foreground/90 leading-relaxed">
                            Alliance Exercise is an exciting event where alliance members unite to fight against the Marshall&apos;s tanks.
                            This event provides an opportunity for alliances to showcase their strength and coordination while earning
                            valuable rewards for both the alliance and individual members.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <Image
                            src="/images/events/alliance-exercise-overview.png"
                            alt="Alliance Exercise Overview"
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

export default AllianceExerciseOverview;