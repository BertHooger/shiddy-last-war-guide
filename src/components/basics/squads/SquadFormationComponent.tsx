import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Users, Shield, Swords, HeartPulse } from 'lucide-react';

const SquadFormationComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Users className="w-8 h-8 mr-2" />
                    Squads – Setup correctly your squads to maximize power using the formation boost
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p className="text-lg text-foreground/90">
                            To maximize the power of your heroes you need to make sure to build your squads properly.
                        </p>

                        <InfoSection icon={<Users className="w-6 h-6 text-blue-500" />} title="Squad formation basics">
                            <p className="text-foreground/90">
                                As seen in the heroes guide, each hero has its type and ability, moreover its peculiar features.
                                To maximize the effect of their specific properties heroes should be positioned in the proper way in a squad.
                            </p>
                            <div className="flex items-center space-x-4 mt-4">
                                <Shield className="w-6 h-6 text-gray-500" />
                                <Image src="/images/ability/defender.png" alt="Defense Icon" width={40} height={40} />
                                <p className="text-foreground/90"><strong>Defense</strong> heroes should be placed at the front of the team.</p>
                            </div>
                            <div className="flex items-center space-x-4 mt-2">
                                <Swords className="w-6 h-6 text-red-500" />
                                <Image src="/images/ability/attack.png" alt="Attack Icon" width={40} height={40} />
                                <p className="text-foreground/90"><strong>Attack</strong> or <strong>support</strong> heroes should be placed at the back.</p>
                            </div>
                            <div className="flex items-center space-x-4 mt-2">
                                <HeartPulse className="w-6 h-6 text-green-500" />
                                <Image src="/images/ability/support.png" alt="Support Icon" width={40} height={40} />
                                <p className="text-foreground/90"><strong>Support</strong> heroes also go in the back.</p>
                            </div>
                        </InfoSection>

                        <InfoSection icon={<Users className="w-6 h-6 text-purple-500" />} title="Example Squad Formation">
                            <p className="text-foreground/90">
                                Example of a squad at the first stages of the game (I suggest you use this squad if you are not big spender):
                            </p>
                            <ul className="list-disc list-inside space-y-2 mt-2 text-foreground/90">
                                <li><strong>Murphy</strong> and <strong>Viola</strong> on defense and therefore on the front line</li>
                                <li><strong>Kimberly</strong> and <strong>Mason</strong> are on the attack and therefore you put them in the back</li>
                                <li>A support hero <strong>Marshall</strong> in the back</li>
                            </ul>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-start">
                        <div className="relative w-full aspect-w-3 aspect-h-4">
                            <Image
                                src="/images/squads/squad-formation-1.png"
                                alt="Squad Formation Example"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SquadFormationComponent;