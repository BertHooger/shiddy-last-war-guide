/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { hospitalHealingImages } from '../ImageProps';

const HospitalHealingComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Hospital and Healing Soldiers - Quicker Healing Using Alliance Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <p>
                        When you have soldiers that need healing, and the total amount of time needed to heal them all is long, you can take advantage of the alliance help with staggered healing.
                    </p>
                    <p>To use this trick:</p>
                    <ol className="list-decimal list-inside ml-4 space-y-2">
                        <li>Identify the number of alliance helps you can receive.</li>
                        <li>Start healing with a total amount of healing time up to the number of alliance helps you can receive.</li>
                        <li>
                            Click on the shaking hands that appears on the hospital to request alliance help.
                            <Image
                                {...hospitalHealingImages.helpAllianceIcon} // Use the centralized icon data
                                className="ml-2 inline-block"
                            />
                        </li>
                    </ol>
                    <p>
                        Find the amount of alliance helps you can receive through the Alliance Center.
                    </p>
                    <p>Start healing with the amount of minutes equal to the number of alliance helps.</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Image
                        {...hospitalHealingImages.allianceCenter} // Use the centralized image data
                        className="rounded-lg shadow-md"
                    />
                    <Image
                        {...hospitalHealingImages.healingTime} // Use the centralized image data
                        className="rounded-lg shadow-md"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="space-y-4 md:w-2/3">
                        <p>
                            The game states: Each assistance boosts the current progress by 0.5%, with at least 1 minute of progress time. So try increasing the healing time each time until you find the maximum value that works for you.
                        </p>
                        <p>
                            To see how many helps you received for each healing (and also for each building construction) go to Alliance -&gt; Helps:
                        </p>
                        <p className="italic">
                            If you wait a couple of seconds on this page, it will tell you how many minutes those 4 helps equal.
                        </p>
                        <p className="font-semibold">Note:</p>
                        <p>
                            It&apos;s best to use this trick when many of your alliance members are online so that they can send you help. The best moment is during Alliance Exercise or other events.
                        </p>
                    </div>
                    <div className="md:w-1/3 md:sticky md:top-4">
                        <Image
                            {...hospitalHealingImages.allianceHelps} // Use the centralized image data
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default HospitalHealingComponent;