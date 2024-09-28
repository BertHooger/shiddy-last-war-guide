import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const EventUnit: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Users className="w-8 h-8 mr-2" />
                    Unit Progression
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p className="text-lg text-foreground/90 mb-4">
                            This phase focuses on unit (troops) progression. Train soldier here refers to both training them from scratch and upgrading them from one level to a higher level.
                        </p>

                        <Alert>
                            <AlertDescription>
                                <h4 className="font-bold mb-2 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    Train a Lv. 1/2/3/4/5/6/7/8/9/10 unit:
                                </h4>
                                <p>
                                    Points are given based on a soldier&apos;s arrival level. So upgrading a lvl 4 to a lvl 5 gives you the points of a lvl 5 in the same way as training a lvl 5 from scratch. So prepare many intermediate level soldiers to upgrade as an assembly line. See the Troops guide for how to upgrade a soldier.
                                </p>
                            </AlertDescription>
                        </Alert>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <Clock className="w-6 h-6 mr-2" />
                                <h4 className="font-bold">Use 1-min Training Speedup:</h4>
                            </div>
                            <p className="text-lg text-foreground/90 ml-8">
                                Use Speedups (training speedup or generic speedup, any length). Points are rewarded immediately as the speedup is used.
                            </p>
                            <div className="flex items-center ml-8 mt-2">
                                <Image
                                    src="/images/events/training-speedup-5m.png"
                                    alt="Training Speedup"
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src="/images/events/speedupgeneric-3h.png"
                                    alt="Generic Speedup"
                                    width={40}
                                    height={40}
                                    className="ml-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3">
                        <Image
                            src="/images/events/unit.png"
                            alt="Unit Progression Example"
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

export default EventUnit;