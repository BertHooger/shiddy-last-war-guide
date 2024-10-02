import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserMinus, Lightbulb, Heart } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';

const AllianceExerciseAdvancedTips: React.FC = () => {
    const galleryImages = [
        {
            src: "/images/events/alliance-exercise-rally-participants.png",
            alt: "Rally Participants View",
            caption: "View of rally participants"
        },
        {
            src: "/images/events/alliance-exercise-remove-member.png",
            alt: "Removing a Member from Rally",
            caption: "Removing a member from the rally"
        }
    ];

    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-100 to-indigo-50 border-b border-indigo-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-indigo-600 flex items-center">
                    <UserMinus className="w-10 h-10 mr-3 text-indigo-500" />
                    Advanced Rally Management and Tips
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Remove Members from Rally</h3>
                    <p className="text-lg text-foreground/90 mb-4">
                        You can manage rally participants effectively:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/90 mb-4">
                        <li>Click on the Count/Limit icon of the relevant rally to see participants.</li>
                        <li>Remove a team if its arrival time delays the rally start.</li>
                        <li>Use the red arrow symbol to remove a teammate from the squad.</li>
                    </ul>
                    <Gallery images={galleryImages} />
                </div>

                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                        <Lightbulb className="w-8 h-8 mr-2 text-yellow-500" />
                        Tricks
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-foreground/90">
                        <li>
                            <strong>Activate War Fever Mode:</strong> A few minutes before the exercise, explore a base not belonging to any alliance. This activates war fever mode, giving you +1% damage.
                            <span className="text-red-600 font-bold"> IMPORTANT: Don&apos;t use this trick while shielded, as you&apos;ll lose your shield.</span>
                        </li>
                        <li>
                            <strong>Maximize Individual Points:</strong> Participate in rallies launched by R4 and R5 for bonus points:
                            <ul className="list-disc pl-5 mt-2">
                                <li>R4 (without role): +2.5%</li>
                                <li>R5 and R4 (with role Warlord, Butler, Muse, Recruiter): +5%</li>
                            </ul>
                            These bonuses will be visible in the rally list.
                        </li>
                        <li>
                            <strong>Team Strategy:</strong> Use your strongest team to participate in others&apos; rallies for more points. Your weakest team will be &quot;stuck&quot; waiting for your own rally to start.
                        </li>
                    </ol>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                        <Heart className="w-8 h-8 mr-2 text-red-500" />
                        Dealing with Wounded Soldiers
                    </h3>
                    <p className="text-lg text-foreground/90 mb-4">
                        After rallies, you&apos;ll have wounded troops. Here&apos;s how to heal them efficiently:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
                        <li>Use the hospital symbol to start healing troops.</li>
                        <li>Select only an amount of soldiers that can be healed in 25-30 minutes (depends on HQ level and tech research).</li>
                        <li>Start the healing process.</li>
                        <li>Click on the two hands symbol (alliance help requested).</li>
                        <li>Your troops will heal in seconds instead of hours.</li>
                    </ol>
                    <p className="text-lg text-foreground/90 mt-4 font-bold">
                        This method allows you to heal hours-long injuries in just a few minutes!
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllianceExerciseAdvancedTips;