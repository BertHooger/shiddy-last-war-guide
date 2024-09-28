import React from 'react';
import Image from 'next/image';
import { AlertCircle } from 'lucide-react';

const GearPromotion = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Gear promotion – Legendary/Mythic level</h2>

            <p className="mb-4">
                Once a gear reached level 40 it is possible to promote it.
            </p>

            <p className="mb-6">
                To do so you will have to level up your Gear Factory building first to level 20.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
                <div className="text-center">
                    <Image
                        src="/images/gears/gear-factory-below-20.png"
                        alt="Gear Factory below level 20"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md mb-2"
                    />
                    <p className="text-sm text-gray-600">With Gear Factory lower than level 20</p>
                </div>
                <div className="text-center">
                    <Image
                        src="/images/gears/gear-factory-level-20.png"
                        alt="Gear Factory at level 20"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md mb-2"
                    />
                    <p className="text-sm text-gray-600">Once Gear Factory reaches level 20</p>
                </div>
            </div>

            <p className="mb-4">
                The promotion allows to add up to 5 stars to a gear.
            </p>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-r">
                <div className="flex items-center">
                    <AlertCircle className="mr-2" />
                    <p className="font-bold">IMPORTANT:</p>
                </div>
                <p>
                    Don&apos;t spend Honor Points in the Honor Shop for anything else than Gear Blueprint (Legendary), as those items cannot be bought in any other way in the game and you will need lots of them.
                </p>
            </div>
        </div>
    );
};

export default GearPromotion;