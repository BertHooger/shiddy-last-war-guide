/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { allianceExerciseImages } from '../ImageProps';

const AllianceExerciseComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    Alliance Exercise – Increased % of damage
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p>During the Alliance Exercise event this can be achieved in 2 ways:</p>
                <ol className="list-decimal list-inside ml-4 space-y-2">
                    <li>
                        Join rallies that are started by R4/R5 members of the alliance as
                        they give additional % of damage. +2.5% (Normal R4) / +5% (R5 and
                        R4 with role Warlord, Butler, Muse, Recruiter)
                    </li>
                    <li>
                        Right before the Alliance Exercise starts either scout or start
                        attack (no need to actually complete it) towards another commander
                        (one that is not of any alliance to avoid a war) to start War fever
                        that boosts your damage by 1%. Remember to do this action again
                        after 15 minutes since Alliance Exercise start to reset the counter.
                    </li>
                </ol>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="md:w-1/2">
                        <Image
                            {...allianceExerciseImages.allianceExercise} // Use the centralized image data
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2 space-y-4">
                        <Image
                            {...allianceExerciseImages.warFever} // Use the centralized image data
                            className="rounded-lg shadow-md"
                        />
                        <p>
                            War fever will last 15 minutes starting from last attack or
                        </p>
                        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded">
                            <p className="font-bold">R5/R4 have additional damage boosts</p>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
                    <p className="font-bold">IMPORTANT:</p>
                    <p>
                        Don&apos;t use this trick while you have a shield on because you
                        will lose it. So during war days (day 6 of duel VS for example)
                        don&apos;t use this trick.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllianceExerciseComponent;