export interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export interface ImageWithCaption {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
}

export interface VideoProps {
    src: string;
    title: string;
    poster?: string;
}

export interface ImageTextPairProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    content: string;
    imagePosition?: 'left' | 'right';
}

export interface BuildingImageProps {
    src: string;
    alt: string;
};

export interface ContentProps {
    title: string;
    content: React.ReactNode;
    images?: (ImageProps | React.ReactElement)[];
    imagePosition?: 'top' | 'left' | 'right' | 'bottom' | 'grid';
    videos?: VideoProps[];
    videoPosition?: 'top' | 'bottom' | 'right' | 'grid';
}