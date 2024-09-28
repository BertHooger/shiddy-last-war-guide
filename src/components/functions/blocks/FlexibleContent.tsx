import React from 'react';
import Image from 'next/image';
import { ImageProps, ContentProps } from '@/lib/interfaces/media/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FlexibleContent: React.FC<ContentProps> = ({ title, content, images, imagePosition = 'right' }) => {
    const renderImages = () => {
        if (!images || images.length === 0) return null;

        const renderImage = (img: ImageProps | React.ReactElement, index: number) => {
            if (React.isValidElement(img)) {
                return img;
            }
            const { src, width, height, alt = 'Image description not available' } = img as ImageProps;
            return (
                <Image
                    key={index}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    className="rounded-lg shadow-md"
                />
            );
        };

        if (imagePosition === 'grid') {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                    {images.map((img, index) => renderImage(img, index))}
                </div>
            );
        }

        return (
            <div className="flex flex-wrap gap-4 justify-center">
                {images.map((img, index) => renderImage(img, index))}
            </div>
        );
    };

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className={`flex flex-col ${imagePosition === 'left' || imagePosition === 'right' ? 'md:flex-row' : ''} gap-6 items-center`}>
                    {(imagePosition === 'top' || imagePosition === 'left') && renderImages()}
                    <div className={imagePosition === 'left' || imagePosition === 'right' ? 'md:w-1/2' : 'w-full'}>
                        {content}
                    </div>
                    {(imagePosition === 'bottom' || imagePosition === 'right') && renderImages()}
                </div>
            </CardContent>
        </Card>
    );
};

export default FlexibleContent;