import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventDrone: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    Drone Boost
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-6">
                        <div>
                            <h4 className="font-bold text-lg flex items-center">
                                <Image
                                    src="/images/icons/drone-data.png"
                                    alt="Drone Data"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                Use 10 Drone Combat Data points:
                            </h4>
                            <p className="text-foreground/90 ml-8">
                                Go to the <strong>Drone Center and click the Data Training</strong> button to use battle data. At certain levels it is necessary to have drone parts in order to proceed with training.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg flex items-center">
                                <Image
                                    src="/images/events/stamina.png"
                                    alt="Drone Data"
                                    width={24}
                                    height={24}
                                    className="mr-2"
                                />
                                Use 1 Stamina:
                            </h4>
                            <p className="text-foreground/90 ml-8">
                                Use stamina to:
                            </p>
                            <ul className="list-disc list-inside ml-12 text-foreground/90">
                                <li>Attack zombies/bases</li>
                                <li>Execute rallies towards zombies/bases</li>
                                <li>Complete radar missions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-1/3">
                        <Image
                            src="/images/events/drone.png"
                            alt="Drone Boost Example"
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

export default EventDrone;