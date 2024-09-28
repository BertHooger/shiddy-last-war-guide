import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { VideoSection } from '@/components/functions/section/VideoSection';
import { Bug, Heart, Swords } from 'lucide-react';

const InfectionAndHealing: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Bug className="w-8 h-8 mr-2" />
                    Infection, Healing, and Attacking
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <InfoSection icon={<Bug className="w-6 h-6 text-destructive" />} title="Attack and Get Infected">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="md:w-2/3 space-y-4">
                            <p className="text-foreground/90">
                                You can see that the zombie being attacked requires a virus resistance of 600, while the attacker has only 300.
                            </p>
                            <p className="text-foreground/90">
                                This causes the squad to get infected, and once the squad is back at the base, the Infection Stacks reach level 10.
                            </p>
                            <p className="text-foreground/90">
                                The first debuff applies with Hospital Stay: every 300 seconds, one unit will become seriously injured.
                            </p>
                        </div>
                        <div className="md:w-1/3 mt-4 md:mt-0">
                            <VideoSection src="/videos/season-one/infection/attack-get-infected.mp4" />
                        </div>
                    </div>
                </InfoSection>

                <InfoSection icon={<Heart className="w-6 h-6 text-green-500" />} title="Getting Healed by Allies">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="md:w-2/3 space-y-4">
                            <p className="text-foreground/90">
                                Once you are infected, your allies can help you reduce both virus stack strength and length.
                            </p>
                            <p className="text-foreground/90">
                                Just share your coordinates within your alliance chat, or wait for an ally to notice you are infected.
                            </p>
                            <p className="text-foreground/90">
                                They will immediately send you treatments, and if they are enough, you will be healed completely.
                            </p>
                        </div>
                        <div className="md:w-1/3 mt-4 md:mt-0">
                            <VideoSection src="/videos/season-one/infection/getting-healed.mp4" />
                        </div>
                    </div>
                </InfoSection>

                <InfoSection icon={<Swords className="w-6 h-6 text-primary" />} title="Attacking Bases">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="md:w-2/3 space-y-4">
                            <p className="text-foreground/90">When infected, if you attack bases:</p>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>If the enemy base has no defense up, the base will receive the infection stack amount the squad is carrying.</li>
                                <li>If the enemy base has defense up but has no troops left, the infection stack will not be transmitted.</li>
                                <li>If the enemy base has defense up and has troops left, the infection stack the attacking squad carries will be transmitted.</li>
                            </ul>
                            <p className="text-foreground/90">
                                In this video, a squad carrying an infection stack of 3 attacks a base that already has an infection stack of 3. After the attack, it is incremented to 6.
                            </p>
                        </div>
                        <div className="md:w-1/3 mt-4 md:mt-0">
                            <VideoSection src="/videos/season-one/infection/attacking-bases.mp4" />
                        </div>
                    </div>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default InfectionAndHealing;