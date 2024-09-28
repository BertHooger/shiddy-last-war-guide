import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Gem, Calendar, ShoppingBag, Swords, Radar, Users, Target, Trophy, Castle, Building } from 'lucide-react';

const DiamondsComponent: React.FC = () => {
    const diamondSources = [
        {
            icon: <Calendar className="w-6 h-6 text-blue-500" />,
            title: "Daily Tasks",
            items: [
                "Chests: up to 100 daily",
                "Tasks: up to 110 daily"
            ]
        },
        {
            icon: <ShoppingBag className="w-6 h-6 text-green-500" />,
            title: "Mall",
            items: [
                "Daily sale freebie chest: 10",
                "Weekly pass free supply chest: 10"
            ]
        },
        {
            icon: <Swords className="w-6 h-6 text-red-500" />,
            title: "Arena",
            items: ["3v3 Brawl click on thumbs up: 90 daily"]
        },
        {
            icon: <Radar className="w-6 h-6 text-purple-500" />,
            title: "Radar Missions",
            items: [
                "Diamond mines: up to 100 daily (depends on luck)",
                "Treasure dig: up to 1000 daily (x2 if you win the random multiplier) (depends on luck)"
            ]
        },
        {
            icon: <Users className="w-6 h-6 text-yellow-500" />,
            title: "Alliance Exercise (Marshall)",
            items: ["Individual rewards: based on your level (up to 3 times a week)"]
        },
        {
            icon: <Target className="w-6 h-6 text-orange-500" />,
            title: "Wanted monsters",
            items: ["Frenzied Butcher: both for hits and goals (Mondays and Thursdays)"]
        },
        {
            icon: <Trophy className="w-6 h-6 text-indigo-500" />,
            title: "General's trial",
            items: ["Based on level and won challenges"]
        },
        {
            icon: <Swords className="w-6 h-6 text-pink-500" />,
            title: "Duel VS",
            items: [
                "Gold Tier Reward: 500 (weekly defeat) or 1000 (weekly victory) weekly",
                "Diamond Tier Reward: 1000 (weekly defeat) or 2000 (weekly victory) weekly"
            ]
        },
        {
            icon: <Castle className="w-6 h-6 text-teal-500" />,
            title: "Capitol War",
            items: ["Warzone chests: up to 700 when opening chests"]
        },
        {
            icon: <Building className="w-6 h-6 text-cyan-500" />,
            title: "Alliance Techs",
            items: [
                "Daily rewards: up to 30",
                "Weekly rewards: up to 100"
            ]
        }
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Gem className="w-8 h-8 mr-2" />
                    Diamonds
                    <Image
                        src="/images/basics/icons/diamonds.png"
                        alt="Diamond Icon"
                        width={24}
                        height={24}
                        className="ml-2 inline-block"
                    />
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90">
                    Diamonds are the most valuable type of resource and cannot be generated; they can only be won as prizes or purchased. Unlike food, iron, or gold, diamonds cannot be stolen by attacking enemies.
                </p>

                <p className="text-lg font-semibold text-primary">You can find diamonds in the following places:</p>

                {diamondSources.map((source, index) => (
                    <InfoSection key={index} icon={source.icon} title={source.title}>
                        <ul className="list-disc list-inside space-y-1 text-foreground/90">
                            {source.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </InfoSection>
                ))}
            </CardContent>
        </Card>
    );
};

export default DiamondsComponent;