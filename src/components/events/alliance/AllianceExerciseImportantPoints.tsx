import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Clock, MapPin, Users, Shield } from 'lucide-react';

const AllianceExerciseImportantPoints: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-100 to-orange-50 border-b border-orange-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-orange-600 flex items-center">
                    <AlertTriangle className="w-10 h-10 mr-3 text-orange-500" />
                    Important Things to Remember
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <MapPin className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">Alliance members must be close to the alliance base and possibly closer to the marshall&apos;s platform. Distant members can slow down rallies significantly. R4 and R5 should consider expelling inactive, unresponsive members as the auto-rally feature ensures they are also automatically included in rallies.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Clock className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">It should be forbidden to launch generic rallies starting from 15 minutes before the start of the exercise.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Users className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">It is important that all members recall teams if they were sent to collect in mines or fields a few minutes before the start of the event. Rallying is NOT possible unless a squad is on base.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <AlertTriangle className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">It should be prohibited to launch any type of rally other than rallying towards the marshal during the exercise.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Clock className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">Rallies must ALWAYS be 3 minutes <strong>long</strong>.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <AlertTriangle className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">If a rally has been correctly launched 3 minutes ago by a member close to the platform (not far from the allies base) you should NEVER <strong>cancel</strong> a rally.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Users className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">If for various reasons a squad of a member who is far away is added to the rally and therefore delays the start of the rally, it is possible to remove this squad from the rally. The person who launched the rally will have to do so.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Shield className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">You can perform Marshall exercise even if you have a shield on. Don&apos;t use the trick to enable war fever if you have shield on because you will lose it.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Clock className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <p className="text-foreground/90">The timing of the launch of the rallies is fundamental to the success of the challenge.</p>
                        </div>
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
};

export default AllianceExerciseImportantPoints;