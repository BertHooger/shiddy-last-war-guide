export interface Source {
    text: string;
    icon?: string;
};

export interface ResourceItemProps {
    name: string;
    icons: string[];
    description: string;
    sources: Source[];
};
