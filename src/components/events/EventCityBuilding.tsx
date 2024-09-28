import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Clock, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const EventCityBuilding: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Building2 className="w-8 h-8 mr-2" />
                    City Building
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90">
                    This phase focuses on expanding the base, meaning leveling up your buildings.
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <Image
                            src="/images/events/arms-race-construction-1.png"
                            alt="City Building Example 1"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src="/images/events/packed-buildings.png"
                            alt="City Building Example 2"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md"
                        />
                        <p className="mt-2 text-sm text-muted-foreground">
                            Above: an example of how you want to arrive to this phase to collect more points for &quot;Increases Building power by 1 point&quot;
                        </p>
                    </div>
                </div>

                <Alert>
                    <AlertDescription>
                        <h4 className="font-bold mb-2 flex items-center">
                            <Info className="w-5 h-5 mr-2" />
                            Increases Building power by 1 point:
                        </h4>
                        <p className="mb-2">
                            Every time a construction is completed, that construction will have increased its power and points are obtained for this difference. Note that the building&apos;s strength increase only occurs when you open the gift box in which the newly upgraded building is packaged, only in that moment the points are rewarded.
                        </p>
                        <p className="font-bold">
                            Tip: during the day when you have completed upgrading a building, if you do not need to access its functions, leave it packaged and then open it during this phase to obtain the relevant points.
                        </p>
                    </AlertDescription>
                </Alert>

                <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    <h4 className="font-bold">Use 1-min Construction Speedup:</h4>
                </div>
                <p className="text-lg text-foreground/90 ml-8">
                    Use Speedups (construct speedup or generic speedup, any length). Points are rewarded immediately as the speedup is used.
                </p>
                <div className="flex items-center ml-8">
                    <Image
                        src="/images/events/construct-speedup-5m.png"
                        alt="Construct Speedup"
                        width={40}
                        height={40}
                    />
                    <Image
                        src="/images/events/speedup-generic-3h.png"
                        alt="Generic Speedup"
                        width={40}
                        height={40}
                        className="ml-2"
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default EventCityBuilding;