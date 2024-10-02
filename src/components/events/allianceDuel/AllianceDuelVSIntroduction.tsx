import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Swords, Calendar, Trophy, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AllianceDuelVSIntroduction: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-50 border-b border-purple-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-purple-600 flex items-center">
                    <Swords className="w-10 h-10 mr-3 text-purple-500" />
                    Alliance Duel VS
                </CardTitle>
                <p className="text-xl text-purple-700">Engage in a 6-day challenge against an alliance from another server</p>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Introduction</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                    The Alliance Duel VS is a challenge against an alliance from another server (or from the same server at lower levels). Spanning 6 days from Monday to Saturday, each day features a unique challenge where participants engage in activities to accumulate daily points, contributing to victory points.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <Trophy className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                        <p className="text-foreground/90">
                            Emerging victorious in daily challenges earns not only daily rewards but also culminates in final rewards. Additionally, individual performance during this challenge grants access to chests containing rewards and Valor badges.
                        </p>
                    </div>
                    <p className="text-foreground/90">
                        These badges facilitate research development aimed at enhancing rewards and points for the Alliance Duel VS, obtainable solely through chest victories in the competition or purchase with cash.
                    </p>
                    <p className="text-foreground/90">
                        Subsequent messages will delve into the specifics of each day. Note that the points awarded for each activity may vary slightly based on researches you conducted in the Technology Center&apos;s &quot;Alliance Duel&quot; section.
                    </p>
                </div>
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded">
                    <h4 className="font-bold flex items-center">
                        <Calendar className="w-5 h-5 mr-2" /> Optimization Tip:
                    </h4>
                    <p>
                        To optimize rewards, it&apos;s crucial to synchronize Alliance Duel VS actions with corresponding phases of the Arms Race. Avoid the urge to execute all actions at the Alliance Duel VS daily reset; each day will specify overlapping Arms Race phases.
                    </p>
                </div>
                <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Attention</AlertTitle>
                    <AlertDescription>
                        During server reset, for 5 minutes points are not awarded. First make sure the new duels vs day started by going to the event detail page, and only after that start doing the activities.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
};

export default AllianceDuelVSIntroduction;