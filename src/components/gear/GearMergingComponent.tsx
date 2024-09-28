import React from 'react';
import Image from 'next/image';

const MaterialIcon = ({ name }: { name: string }) => (
    <Image
        src={`/images/gears/material-${name}.png`}
        alt={name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        width={24}
        height={24}
        className="inline-block mr-2"
    />
);

const GearMerging = () => {
    const screwsNeeded = 750 * 4 * 4 * 4 * 4;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Merge</h2>

            <p className="mb-4">
                Once you have enough gear material you can merge them into other gear material needed for your legendary equipment.
            </p>

            <ul className="list-none pl-0 mb-6">
                <li><MaterialIcon name="dialetric-ceramic" />Dialetric ceramic</li>
                <li><MaterialIcon name="synthetic-resin" />Synthetic resin</li>
                <li><MaterialIcon name="superalloy" />Super alloy</li>
                <li><MaterialIcon name="refined-iron-module" />Refined Iron module</li>
                <li><MaterialIcon name="screw" />Screw</li>
            </ul>

            <p className="mb-4">Merge rules are as follows:</p>
            <ul className="list-disc pl-6 mb-6">
                <li>4 screws merge into 1 refined Iron module</li>
                <li>4 refined iron modules merge into 1 super alloy</li>
                <li>4 super alloy merge into 1 synthetic resin</li>
                <li>4 synthetic resin merge into 1 dialetric ceramic</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Calculation</h3>
            <p className="mb-4">
                You need 750 dialetric ceramic to make one legendary gear item. Let&apos;s calculate how many screws you would need to merge in order to get a legendary gear item:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>750 dialetric ceramic * 4 synthetic resin per dialetric ceramic</li>
                <li>= 3,000 synthetic resin * 4 super alloy per synthetic resin</li>
                <li>= 12,000 super alloy * 4 refined iron modules per super alloy</li>
                <li>= 48,000 refined iron modules * 4 screws per refined iron module</li>
                <li>= 192,000 screws</li>
            </ul>
            <p className="mb-6">
                Therefore, you would need <strong>{screwsNeeded.toLocaleString()}</strong> screws to create one legendary gear item.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Image
                    src="/images/gears/merge-process-1.png"
                    alt="Merge Process 1"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                />
                <Image
                    src="/images/gears/merge-process-2.png"
                    alt="Merge Process 2"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default GearMerging;