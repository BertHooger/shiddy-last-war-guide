import React from 'react';
import Image from 'next/image';

export const IconWithText: React.FC<{ src: string; alt: string; text: string }> = ({ src, alt, text }) => (
    <div className="flex items-center space-x-2">
        <Image src={src} alt={alt} width={24} height={24} />
        <span>{text}</span>
    </div>
);