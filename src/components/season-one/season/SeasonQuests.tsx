import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const SeasonQuests: React.FC = () => {
    const questIcon = (
        <Image
            src="/images/season-one/icons/quests-icon.png"
            alt="Quests Icon"
            width={64}
            height={64}
            className="inline-block ml-2"
        />
    );
    const mutantCrystalIcon = (
        <Image
            src="/images/season-one/resources/mutant-crystal.png"
            alt="Mutant Crystal"
            width={64}
            height={64}
            className="inline-block ml-2"
        />
    );

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <CheckCircle2 className="w-8 h-8 mr-2" />
                    Season Quests
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-3">
                        <p className="flex items-center">
                            The Quests section gets enhanced with newly added season main and secondary Tasks.
                        </p>
                        <p className="flex items-center">
                            This addition is quite important because the main rewards are mutant crystals.
                        </p>
                        <p>
                            The logic is the same as the daily quest missions you are used to since the beginning of the game
                        </p>
                        <p className="font-semibold">
                            Below an example of current tasks:
                        </p>
                        {/* Icon bubble with bullet points and alt text */}
                        <div className="bg-gray-200 p-3 rounded-lg flex flex-col items-start mt-4">
                            <div className="flex items-end">
                                <span className="mr-2">•</span> {mutantCrystalIcon}
                                <span className="ml-2 text-sm text-gray-600">{mutantCrystalIcon.props.alt}</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="mr-2">•</span> {questIcon}
                                <span className="ml-2 text-sm text-gray-600">{questIcon.props.alt}</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/season-one/quest-1.png"
                                alt="Season Quests Example"
                                width={300}
                                height={400}
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SeasonQuests;