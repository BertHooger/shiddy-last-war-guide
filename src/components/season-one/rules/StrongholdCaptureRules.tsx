import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StrongholdCaptureRules: React.FC = () => {
    const rules = [
        "Alliances can capture up to 2 military strongholds per day (this limit is separated from the city capture daily limit)",
        "The Alliance needs to capture any Lv.1 stronghold to get the first piece of Alliance territory and expand the Alliance territory by continuously capturing Military strongholds",
        "The prerequisite to capture a Military stronghold is to own an adjacent stronghold",
        "The initial limit of owned strongholds is 3.",
        "For every 1-5 level city captured, the Alliance's Stronghold limit is increased +1.",
        "For every 6 level city captured, the Alliance's Stronghold limit is increased +2.",
        "Capturing a Military Stronghold requires Virus Resistance",
        "At the beginning of the season Stronghold are owned by the Crimson Legion and therefore they are guarded by the Corruptors and Infected Zombies. To capture the Stronghold both types of enemies need to be defeated.",
        "Once a Stronghold is captured it enters a Protection Stage for 36 hours, and it cannot be captured by any other alliance for that period.",
        "Once a Stronghold is captured by an alliance an army of Stronghold Defenders will appear (with their level proportional to the Stronghold level), and any alliance that wants to capture the Stronghold will need to defeat those Defenders before trying to capture the Stronghold (notification of attack on defenders will appear as an attack to the allies)"
    ];

    const captureImages = [
        { src: '/images/season-one/map/stronghold-before-capture.png', alt: 'Before first capture' },
        { src: '/images/season-one/map/stronghold-after-capture.png', alt: 'After an alliance capture' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Strongholds capture rules</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-6">
                    {rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ul>
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {captureImages.map((img, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={300}
                                height={200}
                                className="rounded-lg shadow-md"
                            />
                            <p className="mt-2 text-sm font-semibold">{img.alt}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default StrongholdCaptureRules;