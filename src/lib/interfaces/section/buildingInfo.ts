export interface BuildingImageProps {
    src: string;
    alt: string;
};

export interface BuildingInfoProps {
    title: string;
    content: React.ReactNode;
    images: BuildingImageProps[];
};