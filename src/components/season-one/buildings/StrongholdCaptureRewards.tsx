import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Gallery from '@/components/functions/blocks/image/Gallery';

const StrongholdCaptureRewards: React.FC = () => {
    const rewardImages = [
        {
            src: '/images/season-one/rewards/stronghold-capture-reward-1.png',
            alt: 'Stronghold Capture Reward 1',
            caption: 'Stronghold Capture Reward'
        },
        {
            src: '/images/season-one/rewards/stronghold-capture-reward-2.png',
            alt: 'Stronghold Capture Reward 2',
            caption: 'Participation Reward'
        },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Military Stronghold Capture Rewards</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-2/3">
                        <p className="mb-4">
                            Once a Military Stronghold is captured, all Alliance members will receive rewards by mail (only on the first capture of the stronghold).
                        </p>
                        <p className="mb-4">
                            If you participated in the capture (by participating in or starting at least one rally against the corruptor), you will also receive the participation rewards.
                        </p>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                        <Gallery images={rewardImages} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default StrongholdCaptureRewards;