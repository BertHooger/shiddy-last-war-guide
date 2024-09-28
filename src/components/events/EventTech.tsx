import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, Clock, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const TechResearchPhase: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Microscope className="w-8 h-8 mr-2" />
                    Tech Research
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p className="text-lg text-foreground/90">
                            This phase focuses on carrying out researches in the technology center.
                        </p>

                        <Alert>
                            <AlertDescription>
                                <h4 className="font-bold mb-2 flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    Increases Tech Power by 1 point:
                                </h4>
                                <p>
                                    When a research is completed in the Technological Center, technological power points are rewarded.
                                </p>
                            </AlertDescription>
                        </Alert>

                        <div>
                            <div className="flex items-center">
                                <Clock className="w-6 h-6 mr-2" />
                                <h4 className="font-bold">Use 1-min Research Speedup:</h4>
                            </div>
                            <p className="text-lg text-foreground/90 ml-8">
                                Use Speed ups (science speedup or generic speedup, any length). Points are rewarded immediately as the speedup is used.
                            </p>
                            <div className="flex items-center ml-8 mt-2">
                                <Image
                                    src="/images/events/science-speedup-5m.png"
                                    alt="Science Speedup"
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
                        </div>
                    </div>

                    <div className="md:w-1/3">
                        <Image
                            src="/images/events/tech.png"
                            alt="Tech Research Example"
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

export default TechResearchPhase;