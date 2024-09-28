import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { AbilityIcon } from '@/components/functions/icons/AbilityIcon';
import { GearIcon } from '../functions/icons/GearIocn';

const HeroDefense: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 border-b border-green-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-green-600 flex items-center">
                    <Shield className="w-10 h-10 mr-3 text-green-500" />
                    Hero Abilities
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                            There are 3 types of abilities within heroes:
                        </p>
                        <ul className="list-none space-y-3 text-foreground/90 mb-6">
                            <li><AbilityIcon type="Defender" /></li>
                            <li><AbilityIcon type="Attack" /></li>
                            <li><AbilityIcon type="Support" /></li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-primary mb-4">Defense hero</h3>
                        <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                            They are the heroes who have the shield symbol <Image src="/images/ability/defender.png" alt="Defense" width={16} height={16} className="inline mx-1" /> at the top right corner.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            They have the task of being in the front row of the team and absorbing damage while the attack and support heroes in the second row generate damages to the opponents.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Image
                                        src="/images/heroes/Murphy-2.png"
                                        alt="Murphy - Defense Hero"
                                        width={300}
                                        height={400}
                                        className="rounded-lg shadow-md"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>They are very strong at taking damages, the best way to upgrade is equipping them with:</p>
                                    <ul className="list-none space-y-2 mt-2">
                                        <li><GearIcon type="Armor" filename="gear-3.png" /></li>
                                        <li><GearIcon type="Radar" filename="gear-4.png" /></li>
                                    </ul>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default HeroDefense;