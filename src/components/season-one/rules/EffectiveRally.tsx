import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EffectiveRally: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Effective rally against doom elite</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p>
                            You can see here that the Virus Resistance is 500/2200, so by yourself you will not be able to kill this zombie given the Damage Dealt -99,9%.
                        </p>
                        <p>
                            If you have a low virus resistance, given the huge Damage Dealt debuff, a rally against a doom elite will cause a huge loss of troops, regardless of success or defeat.
                        </p>
                        <p>To avoid that, you can ask help from your allies:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Create a 1 hero squad, with the hero that has the lowest command attribute (so to bring along less troops)</li>
                            <li>Launch a rally on doom elite monsters, asking to participate to those that have enough Virus Resistance to be able to kill the zombie</li>
                        </ul>
                        <p>
                            With this approach you defeat the zombie and therefore you earn a lot of mutant crystals
                            <Image
                                src="/images/season-one/resources/mutant-crystal.png"
                                alt="Mutant Crystal"
                                width={20}
                                height={20}
                                className="inline-block ml-2"
                            />,
                            with a minimum troop loss.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <Image
                            src="/images/season-one/game-action/effective-rally.png"
                            alt="Effective Rally Example"
                            width={300}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EffectiveRally;