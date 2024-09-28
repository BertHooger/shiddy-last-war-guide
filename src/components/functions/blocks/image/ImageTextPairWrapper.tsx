import React from 'react';
import { ImageTextPairWrapperProps } from '@/lib/interfaces/media/image';

const ImageTextPairWrapper: React.FC<ImageTextPairWrapperProps> = ({ reverse = false, children }) => {
    const className = reverse ? 'image-text-pair-reverse' : 'image-text-pair';
    return <div className={className}>{children}</div>;
};

export default ImageTextPairWrapper;