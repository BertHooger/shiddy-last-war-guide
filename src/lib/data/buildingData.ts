type ContentItem = {
    type: 'p' | 'h3' | 'h4';
    className?: string;
    content: string;
};

interface BuildingDataItem {
    image: { src: string; alt: string };
    content: ContentItem[];
}

export const buildingData: BuildingDataItem[] = [
    {
        image: { src: '/images/season-one/buildings/virus-research-institute-1.png', alt: 'Collective' },
        content: [
            {
                type: 'h3',
                className: 'text-xl font-semibold mt-4',
                content: 'The New Buildings'
            },
            {
                type: 'p',
                content: 'New types of buildings are available and necessary, they can be built only on the outside of your base\'s perimeter. Some appear right at the beginning of the season, others will follow.'
            },
            {
                type: 'p',
                className: 'italic',
                content: 'The land has been infected by a potent virus carried by zombies, surviving the apocalypse requires enhanced Virus Resistance, achievable only through constructing a Virus Research Institute'
            }
        ]
    },
    {
        image: { src: '/images/season-one/buildings/virus-research-institute-2.png', alt: 'Virus Research Institute' },
        content: [
            {
                type: 'h3',
                className: 'text-xl font-semibold mt-4',
                content: 'Virus Research Institute'
            },
            {
                type: 'p',
                content: 'The Virus research institute allows to enhance Virus Resistance.'
            },
            {
                type: 'h4',
                className: 'text-lg font-semibold mt-2',
                content: 'Level up Virus Research Institute'
            },
            {
                type: 'p',
                content: 'You will need immune protein to level up the Virus Research Institute. Leveling up this building allows to increase the Virus Resistance that is fundamental to survive in these apocalyptic times. This building can be upgraded up to level 30, regardless of your HQ level.'
            }
        ]
    },
    {
        image: { src: '/images/season-one/buildings/protein-farm-1.png', alt: 'Protein Farm' },
        content: [
            {
                type: 'h3',
                className: 'text-xl font-semibold mt-4',
                content: 'Protein Farm'
            },
            {
                type: 'p',
                content: 'This new building farms immune proteins, one of the new resources of the season. There is a total of 5 Protein Farms available (the fifth available only with Season\'s Weekly Pass)'
            }
        ]
    },
    {
        image: { src: '/images/season-one/buildings/protein-farm-2.png', alt: 'Protein Farm Upgrades' },
        content: [
            {
                type: 'h4',
                className: 'text-lg font-semibold mt-2',
                content: 'Level up Protein Farms'
            },
            {
                type: 'p',
                content: 'You will need mutant crystals to level up the protein Farms. This building can be upgraded up to level 30, regardless of your HQ level. Once your first Protein Farm reaches a level 5 a new Protein Farm will be available. Subsequent Protein Farms will be available when the previous reaches level 10. One Protein Farm will be immediately available with the Season\'s Weekly Pass.'
            }
        ]
    }
];