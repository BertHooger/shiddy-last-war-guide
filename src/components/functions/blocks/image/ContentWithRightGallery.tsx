import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContentWithRightGalleryProps } from '@/lib/interfaces/media/galleryInterfaces';
import Gallery from './Gallery';

const ContentWithRightGallery: React.FC<ContentWithRightGalleryProps> = ({ title, content, images }) => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:justify-end gap-6">
                    <div className="md:w-1/2">
                        {content}
                    </div>
                    <div className="md:w-1/2">
                        <Gallery images={images} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ContentWithRightGallery;