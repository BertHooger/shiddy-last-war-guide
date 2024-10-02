import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';

const AllianceDuelVSRewards: React.FC = () => {
    const galleryImages = [
        {
            src: "/images/events/alliance-duel/first-3-chests.png",
            alt: "First 3 chests",
            caption: "First 3 chests"
        },
        {
            src: "/images/events/alliance-duel/locked-chest.png",
            alt: "Locked chest that need research to be unlocked",
            caption: "Locked chest that need research to be unlocked"
        },
        {
            src: "/images/events/alliance-duel/valor-badge-chests.png",
            alt: "These chests contain the Valor badges to use in the Alliance Duel Researches",
            caption: "These chests contain the Valor badges to use in the Alliance Duel Researches"
        }
    ];

    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-b border-yellow-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-yellow-600 flex items-center">
                    <Gift className="w-10 h-10 mr-3 text-yellow-500" />
                    Alliance Duel VS Rewards
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Reward Types</h3>
                    <p className="text-lg text-foreground/90 mb-4">
                        There are available 3 types of rewards in these event:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                        <li>Daily individual reward chests (some of which must be unlocked with researches to be available)</li>
                        <li>Daily individual ranking rewards</li>
                        <li>Daily Victory rewards (alliance)</li>
                        <li>Weekly Tier Rewards for both victory and defeat</li>
                    </ul>
                    <p className="text-lg text-foreground/90 mt-4">
                        All rewards are based on the actual age of the server you are playing in, so don&apos;t expect the pictures below to show the accurate rewards.
                    </p>
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Daily Individual Reward</h3>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <p className="text-lg text-foreground/90">
                                The first time the Alliance Duel VS occur on your server you will be limited to 3 chest you can open if you reach the appropriate amount of points. To unlock other chests you need to do the corresponding researchs.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Gallery images={galleryImages} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllianceDuelVSRewards;