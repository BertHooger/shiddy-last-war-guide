import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';

const AllianceExerciseExercise: React.FC = () => {
    const galleryImages = [
        {
            src: "/images/events/alliance-exercise-location-1.png",
            alt: "Alliance Exercise Location",
            caption: "Alliance Exercise Platform Location"
        },
        {
            src: "/images/events/alliance-exercise-location-2.png",
            alt: "Alliance Exercise Map View",
            caption: "Alliance Exercise Map View"
        }
    ];

    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 border-b border-green-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-green-600 flex items-center">
                    <Target className="w-10 h-10 mr-3 text-green-500" />
                    Exercise Phase
                    <Image src="/images/events/event-icon.png" alt="Alliance Exercise Icon" width={40} height={40} className="ml-3" />
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Objective</h3>
                        <p className="text-lg text-foreground/90 mb-4">
                            Attack the tanks that appear during the exercise.
                        </p>
                        <h3 className="text-2xl font-semibold text-primary mb-4">Location</h3>
                        <p className="text-lg text-foreground/90 mb-4">
                            The exercise takes place where the platform is located. You can find it by:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li>Going to: Events → Alliance Exercise → View Button</li>
                            <li>Visually locating the platform on the map</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <Gallery images={galleryImages} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-8">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Process</h3>
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li>Once the exercise starts, the platform disappears and 5 tanks appear in its place.</li>
                            <li>The alliance must attack the Marshall&apos;s tanks with rallies.</li>
                            <li>Only 3-minute rallies are possible; 1-minute rallies are not allowed.</li>
                            <li>Direct attacks are not possible; only rallies can be used.</li>
                            <li>A progress bar will appear showing &quot;Reward Phase 1&quot;.</li>
                            <li>The more hits you land, the higher the phase you can reach (up to Phase 5).</li>
                            <li>Reaching Phase 5 means the exercise has been won at the alliance level.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <Image
                            src="/images/events/alliance-exercise-process.png"
                            alt="Alliance Exercise Process"
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

export default AllianceExerciseExercise;