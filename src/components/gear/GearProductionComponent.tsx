import React from 'react';
import Image from 'next/image';

const GearProduction = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Gear Production (Gear Factory)</h2>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="flex-1">
                    <p className="mb-4">
                        Gears are crafted in the gear factory.
                    </p>

                    <p className="mb-4">In the gear factory you can:</p>

                    <ul className="list-disc pl-6 mb-4">
                        <li>Craft</li>
                        <li>Dismantle</li>
                        <li>Merge</li>
                        <li>Disintegrate</li>
                    </ul>
                </div>

                <div className="md:w-1/3">
                    <Image
                        src="/images/gears/gear-factory.png"
                        alt="Gear Factory"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-primary">Craft</h3>
            <p className="mb-4">
                To craft a gear you need to have gear materials. It is highly suggested to only craft legendary gear as the other levels can be easily won during the game so it would be a waste of resources to build them (you spend money and time to build a gear).
            </p>
            <p className="mb-6">
                You can build any type of gear you want in this section, and the cost in materials and money depends on the rarity level.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Image
                    src="/images/gears/gear-crafting-1.png"
                    alt="Gear Crafting Process 1"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                />
                <Image
                    src="/images/gears/gear-crafting-2.png"
                    alt="Gear Crafting Process 2"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default GearProduction;