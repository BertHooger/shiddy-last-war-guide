import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GearIcon } from '@/components/functions/icons/GearIocn';

const HeroAttack: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-100 to-red-50 border-b border-red-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-red-600 flex items-center">
                    <Flame className="w-10 h-10 mr-3 text-red-500" />
                    Attack Hero
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                            They are the heroes who have the fire symbol <Image src="/images/ability/attack.png" alt="Attack" width={16} height={16} className="inline mx-1" /> at the top right corner.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            They have the task of staying in the second row and causing damages to their opponents.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Image
                                        src="/images/heroes/Kimberly-2.png"
                                        alt="Kimberly - Attack Hero"
                                        width={300}
                                        height={400}
                                        className="rounded-lg shadow-md"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>They are very strong at causing damage, the best way to upgrade them is with these equipments:</p>
                                    <ul className="list-none space-y-2 mt-2">
                                        <li><GearIcon type="Cannons (Turrets)" filename="gear-1.png" /></li>
                                        <li><GearIcon type="Chip" filename="gear-2.png" /></li>
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

export default HeroAttack;