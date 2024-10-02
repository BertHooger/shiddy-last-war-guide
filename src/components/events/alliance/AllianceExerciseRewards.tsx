import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';

const AllianceExerciseRewards: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const galleryImages = [
        {
            src: "/images/events/alliance-exercise-rewards-1.png",
            alt: "Alliance Exercise Rewards Overview",
            caption: "Alliance Exercise Rewards"
        },
        {
            src: "/images/events/alliance-exercise-rewards-2.png",
            alt: "Alliance Exercise Reward Stages",
            caption: "Reward Stages"
        },
        {
            src: "/images/events/alliance-exercise-end.png",
            alt: "Alliance Exercise Event Ended",
            caption: "Event Ended"
        },
        {
            src: "/images/events/alliance-exercise-scores.png",
            alt: "Alliance Exercise Scores and Prizes",
            caption: "Scores and Prizes"
        }
    ];

    const dynamicText = [
        "",
        "The event will be won at the alliance level when you reach Reward Stage 5",
        "At the end of the countdown the tanks will disappear and the platform will reappear with the words event has ended",
        "At the end of the marshal you will be able to see the scores and prizes. Click on the Marshall platform and then on rewards to access this page.\n* If at least one player has achieved a minimum score which depends on the level of the exercise then there is the MVP bonus and the prizes are multiplied by x10 for the whole alliance."
    ];

    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-100 to-orange-50 border-b border-orange-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-yellow-600 flex items-center">
                    <Trophy className="w-10 h-10 mr-3 text-yellow-500" />
                    Alliance Exercise Rewards
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <p className="text-lg text-foreground/90 mb-4">
                    With this event, you will win:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-foreground/90 mb-4">
                    <li>
                        <strong>Rewards for the entire alliance:</strong> These rewards are based on how much damage is done in total by the alliance.
                    </li>
                    <li>
                        <strong>Individual awards:</strong> These depend on the damage caused by each individual person.
                    </li>
                </ol>
                <p className="text-lg text-foreground/90 mb-4">
                    The prize values in the images below are for Marshal Level 1. Each level has different prizes.
                </p>

                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                        <Users className="w-8 h-8 mr-2 text-blue-500" />
                        Alliance Rewards
                    </h3>
                    <p className="text-lg text-foreground/90 mb-4">
                        The more damage you cause to the tanks, the higher the rewards. There are 5 reward phases and they are shown immediately below the tanks with a progress bar and writing.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <Gallery
                            images={galleryImages}
                            onImageChange={(index) => setSelectedImageIndex(index)}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-default p-4 rounded-lg h-full flex items-center">
                            <p className="text-lg text-foreground/90">
                                {dynamicText[selectedImageIndex]}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllianceExerciseRewards;