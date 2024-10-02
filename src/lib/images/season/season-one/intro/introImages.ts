// src/lib/images/season/season-one/intro/introImages.ts

import { ImageProps } from 'next/image';

export const IntroImages: Record<string, ImageProps> = {
    ladyInRed: {
        src: '/images/season-one/intro-story-image.png',
        alt: 'Lady in Red',
        width: 416,
        height: 801,
    },
};

export const getImage = (key: keyof typeof IntroImages): ImageProps => {
    return IntroImages[key];
};
