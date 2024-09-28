import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Gallery from '@/components/functions/blocks/image/Gallery';

const CitiesAndInfluence: React.FC = () => {
    const cityImages = [
        { src: '/images/season-one/map/city-1.png', alt: 'City 1', caption: 'City Level 1' },
        { src: '/images/season-one/map/city-2.png', alt: 'City 2', caption: 'City Level 2' },
    ];

    const influenceImages = [
        { src: '/images/season-one/influence-1.png', alt: 'Influence 1', caption: 'Influence Screen' },
        { src: '/images/season-one/influence-2.png', alt: 'Influence 2', caption: 'Leaderboard' },
    ];

    const influenceLevels = [
        { level: 1, points: '100 k' },
        { level: 2, points: '200 k' },
        { level: 3, points: '300 k' },
        { level: 4, points: '400 k' },
        { level: 5, points: '500 k' },
        { level: 6, points: '1 M' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Cities and Influence</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-semibold mb-2">Cities</h3>
                            <p className="mb-4">
                                City capture features many bonuses, from buffs to Alliance influence points and most importantly rewards.
                                To declare war on a city, an alliance must control at least one adjacent Military Stronghold.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <Gallery images={cityImages} />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-semibold mb-2">Influence</h3>
                            <p className="mb-4">
                                Capturing Cities increases Alliance influence points and each owned City provides a different amount based on its level:
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                {influenceLevels.map((level, index) => (
                                    <li key={index}>Level {level.level}: {level.points}</li>
                                ))}
                            </ul>
                            <p className="mb-4">
                                You can check your Alliance Influence Points amount clicking on the Season 1 Event icon right above the duel VS icon, then on the Season 1 banner and then Leaderboard button.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <Gallery images={influenceImages} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CitiesAndInfluence;