import React from 'react';
import Gallery from '../functions/blocks/image/Gallery';
import CostTable from './CostTableComponent';
import StarCostTable from './StarCostTableComponent';

const GearStarCost = () => {
    const starCostSummary = [
        { star: 'Star 1', gold: '93.6 M', ore: '62.5 k', ceramic: '750', blueprint: '5 Legendary' },
        { star: 'Star 2', gold: '121.6 M', ore: '81 k', ceramic: '975', blueprint: '10 Legendary' },
        { star: 'Star 3', gold: '150 M', ore: '100 k', ceramic: '1200', blueprint: '15 Legendary' },
        { star: 'Star 4', gold: '178 M', ore: '118.5 k', ceramic: '1425', blueprint: '20 Legendary' },
        { star: 'Star 5', gold: '206 M', ore: '138 k', ceramic: '1650', blueprint: '10 Mythic' },
        { star: 'TOTAL', gold: '750 M', ore: '500 k', ceramic: '6000', blueprint: '50 + 10' },
    ];

    const firstStarCost = [
        { level: 'Level 1', gold: '23.4 M', ore: '12.5 k', ceramic: '150', blueprint: '1' },
        { level: 'Level 2', gold: '23.4 M', ore: '12.5 k', ceramic: '150', blueprint: '1' },
        { level: 'Level 3', gold: '23.4 M', ore: '12.5 k', ceramic: '150', blueprint: '1' },
        { level: 'Level 4', gold: '23.4 M', ore: '12.5 k', ceramic: '150', blueprint: '1' },
        { level: 'Level 5', gold: '', ore: '12.5 k', ceramic: '150', blueprint: '1' },
        { level: 'TOTAL', gold: '93.6 M', ore: '62.5 k', ceramic: '750', blueprint: '5' },
    ];

    const secondStarCost = [
        { level: 'Level 1', gold: '30.4 M', ore: '16.2 k', ceramic: '195', blueprint: '2' },
        { level: 'Level 2', gold: '30.4 M', ore: '16.2 k', ceramic: '195', blueprint: '2' },
        { level: 'Level 3', gold: '30.4 M', ore: '16.2 k', ceramic: '195', blueprint: '2' },
        { level: 'Level 4', gold: '30.4 M', ore: '16.2 k', ceramic: '195', blueprint: '2' },
        { level: 'Level 5', gold: '', ore: '16.2 k', ceramic: '195', blueprint: '2' },
        { level: 'TOTAL', gold: '121.6 M', ore: '81 k', ceramic: '975', blueprint: '10' },
    ];

    const thirdStarCost = [
        { level: 'Level 1', gold: '37.5 M', ore: '20 k', ceramic: '240', blueprint: '3' },
        { level: 'Level 2', gold: '37.5 M', ore: '20 k', ceramic: '240', blueprint: '3' },
        { level: 'Level 3', gold: '37.5 M', ore: '20 k', ceramic: '240', blueprint: '3' },
        { level: 'Level 4', gold: '37.5 M', ore: '20 k', ceramic: '240', blueprint: '3' },
        { level: 'Level 5', gold: '', ore: '20 k', ceramic: '240', blueprint: '3' },
        { level: 'TOTAL', gold: '150 M', ore: '100 k', ceramic: '1200', blueprint: '15' },
    ];

    const fourthStarCost = [
        { level: 'Level 1', gold: '44.5 M', ore: '23.7 k', ceramic: '285', blueprint: '4' },
        { level: 'Level 2', gold: '44.5 M', ore: '23.7 k', ceramic: '285', blueprint: '4' },
        { level: 'Level 3', gold: '44.5 M', ore: '23.7 k', ceramic: '285', blueprint: '4' },
        { level: 'Level 4', gold: '44.5 M', ore: '23.7 k', ceramic: '285', blueprint: '4' },
        { level: 'Level 5', gold: '', ore: '23.7 k', ceramic: '285', blueprint: '4' },
        { level: 'TOTAL', gold: '178 M', ore: '118.5 k', ceramic: '1425', blueprint: '20' },
    ];

    const fifthStarCost = [
        { level: 'Level 1', gold: '44.5 M', ore: '27.5 k', ceramic: '330', blueprint: '2' },
        { level: 'Level 2', gold: '44.5 M', ore: '27.5 k', ceramic: '330', blueprint: '2' },
        { level: 'Level 3', gold: '44.5 M', ore: '27.5 k', ceramic: '330', blueprint: '2' },
        { level: 'Level 4', gold: '44.5 M', ore: '27.5 k', ceramic: '330', blueprint: '2' },
        { level: 'Level 5', gold: '', ore: '27.5 k', ceramic: '330', blueprint: '2' },
        { level: 'TOTAL', gold: '206 M', ore: '138 k', ceramic: '1650', blueprint: '10' },
    ];

    const galleryImages = [
        { src: '/images/gears/star-upgrade-1.png', alt: 'Star Upgrade Step 1' },
        { src: '/images/gears/star-upgrade-2.png', alt: 'Star Upgrade Step 2' },
        { src: '/images/gears/star-upgrade-3.png', alt: 'Star Upgrade Step 3' },
        { src: '/images/gears/star-upgrade-4.png', alt: 'Star Upgrade Step 4' },
        { src: '/images/gears/star-upgrade-5.png', alt: 'Star Upgrade Step 5' },
        { src: '/images/gears/star-upgrade-6.png', alt: 'Star Upgrade Step 6' },
        { src: '/images/gears/star-upgrade-7.png', alt: 'Star Upgrade Step 7' },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Stars cost</h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                    <p className="mb-2">Each star has an incremental cost.</p>
                    <p className="mb-2">The cost is the same for all types of gear.</p>
                    <p>To add 1 star you have to complete 5 levels.</p>
                    <p>Above is the sequence of level upgrades to add stars to the gear. The process is similar for all stars, with increasing costs for each subsequent star.</p>
                </div>
                <div className="md:w-1/2">
                    <Gallery images={galleryImages} />
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-primary">Summary of star costs</h3>
            <p className="mb-4">This table shows a summary of how much each star costs. In the paragraphs below, for each star, you can see also each level detail.</p>

            <CostTable data={starCostSummary} title="Star Cost Summary" />

            <StarCostTable data={firstStarCost} title="First Star" blueprintType="Legendary" />
            <StarCostTable data={secondStarCost} title="Second Star" blueprintType="Legendary" />
            <StarCostTable data={thirdStarCost} title="Third Star" blueprintType="Legendary" />
            <StarCostTable data={fourthStarCost} title="Fourth Star" blueprintType="Legendary" />

            <h3 className="text-xl font-semibold mb-2 text-primary">Fifth Star</h3>
            <p className="mb-4">The Last star can be achieved only using a rarer item, gear mythic blueprints</p>
            <StarCostTable data={fifthStarCost} title="Fifth Star" blueprintType="Mythic" />
        </div>
    );
};

export default GearStarCost;