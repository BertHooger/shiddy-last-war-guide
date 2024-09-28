export interface BuildingGalleryProps {
    title: string;
    content: React.ReactElement[][];
    images: { src: string; alt: string }[];
}

export interface ContentWithBottomGalleryProps {
    title: string;
    content: React.ReactNode;
    images: React.ReactElement[];
}

export interface ContentWithRightGalleryProps {
    title: string;
    content: React.ReactNode;
    images: { src: string; alt: string; caption?: string }[];
}

export interface GalleryProps {
    images: { src: string; alt: string; caption?: string }[];
    onImageChange?: (index: number) => void;
}