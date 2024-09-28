import React from 'react';
import Image from 'next/image';
import { ImageTextPairProps } from '@/lib/interfaces/media/image';

const ImageTextPair: React.FC<ImageTextPairProps> = ({
    imageSrc,
    imageAlt,
    title,
    content,
    imagePosition = 'left',
}) => {
    return (
        <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-center mb-8`}>
            <div className="md:w-1/2">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
                <p className="text-foreground">{content}</p>
            </div>
        </div>
    );
};

export default ImageTextPair;