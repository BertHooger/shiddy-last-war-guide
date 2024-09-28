import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContentWithBottomGalleryProps } from '@/lib/interfaces/media/galleryInterfaces';

const ContentWithBottomGallery: React.FC<ContentWithBottomGalleryProps> = ({ title, content, images }) => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6"> {/* Stack content and images vertically */}
                    <div> {/* Content at the top */}
                        {content}
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center"> {/* Images at the bottom, centered */}
                        {images}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ContentWithBottomGallery;