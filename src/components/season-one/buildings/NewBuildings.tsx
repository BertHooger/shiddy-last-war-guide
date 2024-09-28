import React from 'react';
import BuildingGallery from '@/components/functions/blocks/image/InfoGallery';
import { buildingData } from '@/lib/data/buildingData';
import { ContentItem } from '@/lib/types/contentItem';

const NewBuildings: React.FC = () => {
    const renderContent = (contentItems: ContentItem[]) => {
        return contentItems.map((item, index) => {
            const Element = item.type as 'p' | 'h3' | 'h4';

            if (item.className === 'italic') {
                return (
                    <div key={index} className="bg-yellow-500 p-2 rounded-lg shadow-md mt-2">
                        <Element className={item.className}>{item.content}</Element>
                    </div>
                );
            } else {
                return <Element key={index} className={item.className}>{item.content}</Element>;
            }
        });
    };

    return (
        <BuildingGallery
            title="New Buildings"
            content={buildingData.map(item => renderContent(item.content))}  // Use map instead of flatMap
            images={buildingData.map(item => item.image)}
        />
    );
};

export default NewBuildings;