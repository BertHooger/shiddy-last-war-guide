/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { barracksTroopsImages } from '../ImageProps';

const BarracksTroopsComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Barracks and Troops During Arms Race and Duel VS - Up to x4 Points for Soldier Training</CardTitle>
            </CardHeader>
            <CardContent>
                <p>There is a well-known trick on how to obtain many more points (even up to 4 times) for soldier training using the same amount of time and resources.</p>
                <p>This trick is useful when you need to earn points in Arms Race: Unit Progression and Duel VS: Day 5: Total Mobilization.</p>
                <p>To see the trick, please <a href="/troops-guide" target="_blank" rel="noopener noreferrer">click here</a>, as it is part of the Troops guide.</p>

                <h3 className="text-xl font-semibold mt-6">Barracks and Troops Unit Train Cap - Higher Unit Train Cap</h3>
                <p>Each barrack has a cap on how many units can start training at once.</p>
                <p>Sometimes having a bigger cap helps to score just a couple more points that, during Unit Progress of Arms Race and Duel VS, are very helpful.</p>

                <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                    <li>Click on the barrack, then click on the survivor list icon.</li>
                    <li>Now add (or replace) one by one each survivor with the first one of the list that opens up, so as to have in this barrack the survivors with the best additional unit cap %.</li>
                    <li>If it says that a survivor is already working in another building, just say yes to dispatching them to the barrack you are enhancing.</li>
                    <li>Once the barrack is enhanced by the best survivors, start the training with the enhanced unit train cap.</li>
                    <li>Now you can reposition the survivors as you want, as they have an effect only before starting the training.</li>
                </ul>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                    <div className="flex flex-col items-center">
                        <Image
                            {...barracksTroopsImages.beforeEnhancement} // Use the centralized image data
                            className="rounded-lg shadow-md"
                        />
                        <p className="mt-2 text-sm font-semibold">
                            Before: Number of Trainees: 415
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            {...barracksTroopsImages.afterEnhancement} // Use the centralized image data
                            className="rounded-lg shadow-md"
                        />
                        <p className="mt-2 text-sm font-semibold">
                            After: Number of Trainees: 452
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default BarracksTroopsComponent;