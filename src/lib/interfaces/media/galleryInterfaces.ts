export interface BuildingGalleryProps {
    title: string;
    content: React.ReactElement[][];
    images: { src: string; alt: string }[];
}

export interface GalleryProps {
    images: { src: string; alt: string; caption?: string }[];
    onImageChange?: (index: number) => void;
}