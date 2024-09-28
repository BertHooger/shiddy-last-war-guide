import React from 'react';
import Image from 'next/image';

const ResourceIcon = ({ name }: { name: string }) => (
    <Image
        src={`/images/resources/${name}.png`}
        alt={name.charAt(0).toUpperCase() + name.slice(1)}
        width={20}
        height={20}
        className="inline-block mx-1"
    />
);

const GearUpgrade = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Gear Upgrade</h2>

            <p className="mb-4">
                Each gear has its attributes and you can upgrade its level up to 40 to enhance those attributes and gain extra ones (common gears don&apos;t have extra attributes).
            </p>

            <p className="mb-6">
                To level up a gear you need <ResourceIcon name="gold" />gold and <ResourceIcon name="ore" />Ore. Go on the hero and then click on the corresponding gear you want to upgrade.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
                <Image
                    src="/images/gears/upgrade-process-1.png"
                    alt="Gear Upgrade Process 1"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                />
                <Image
                    src="/images/gears/upgrade-process-2.png"
                    alt="Gear Upgrade Process 2"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                />
            </div>

            <p className="mb-4">
                Each time you hit level 10/20/30/40 of the gear, extra attributes are gained. So one suggestion would be to not spread upgrades to gears randomly but to have as goal to upgrade 10 levels each at once if possible.
            </p>
        </div>
    );
};

export default GearUpgrade;