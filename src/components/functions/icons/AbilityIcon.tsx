import React from 'react';
import Image from 'next/image';

export const AbilityIcon: React.FC<{ type: string }> = ({ type }) => (
    <div className="flex items-center space-x-2 text-lg">
        <Image src={`/images/ability/${type.toLowerCase()}.png`} alt={type} width={24} height={24} />
        <span>{type}</span>
    </div>
);