import React from 'react';
import Image from 'next/image';
import { BuildingInfoProps } from '@/lib/interfaces/section/buildingInfo';
import { Card, CardContent } from '@/components/ui/card';

const BuildingInfo: React.FC<BuildingInfoProps> = ({ title, content, images }) => {
    return (
        <Card className="w-full mb-8">
            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 space-y-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative w-full h-48 md:h-64">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <div className="prose max-w-none">{content}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default BuildingInfo;