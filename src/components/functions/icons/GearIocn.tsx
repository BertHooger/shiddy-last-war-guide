import React from 'react';
import Image from 'next/image';

export const GearIcon: React.FC<{ type: string; filename: string }> = ({ type, filename }) => (
    <div className="flex items-center space-x-2">
        <Image src={`/images/gears/${filename}`} alt={type} width={24} height={24} />
        <span>{type}</span>
    </div>
);