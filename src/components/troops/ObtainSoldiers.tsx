import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';
import { GalleryProps } from '@/lib/interfaces/media/galleryInterfaces';

const ObtainSoldiers: React.FC = () => {
    const images: GalleryProps['images'] = [
        { src: '/images/troops/special-ops-helicopter.png', alt: 'Special Ops are found on the yellow helicopter', caption: 'Special Ops Helicopter' },
        { src: '/images/troops/special-ops-stages.png', alt: 'Stages are available based on the Headquarters level', caption: 'Special Ops Stages' },
        { src: '/images/troops/special-ops-completion.png', alt: 'Try to reach the end of the stage with as many soldiers as possible, as that number of soldiers will be gifted to you.', caption: 'Special Ops Completion' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="font-title text-2xl md:text-3xl text-primary">Obtain Soldiers</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <h3 className="font-title text-xl text-secondary mb-4">Ways to Obtain Soldiers</h3>
                        <ul className="list-disc list-inside font-sans text-lg mb-6">
                            <li>Operation Falcon – Special Ops</li>
                            <li>Soldiers training in the barracks</li>
                        </ul>

                        <h3 className="font-title text-xl text-secondary mb-4">Operation Falcon Special Operations</h3>
                        <p className="font-sans text-lg mb-4">
                            By completing Special Operations in Operation Falcon you can obtain many soldiers without spending resources.
                        </p>
                        <p className="font-sans text-lg mb-4">
                            Try to reach the end of the stage with as many soldiers as possible, as that number of soldiers will be gifted to you. If you see you are doing a bad game just restart it before completing the stage (unlimited tries without losing anything).
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <Gallery images={images} />
                    </div>
                </div>

                <Alert variant="destructive" className="mt-6">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="font-title text-lg">IMPORTANT</AlertTitle>
                    <AlertDescription className="font-accent">
                        Special Ops give you soldiers based on the maximum level you can currently train with the barracks, so before doing Special Ops make sure you have leveled up at least one barrack to the maximum level. See next paragraphs for barrack troop level schema.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
};

export default ObtainSoldiers;