import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Gem, Star, Truck, Train, Trophy, Swords, ShoppingBag, Castle } from 'lucide-react';

const ResourcesComponent: React.FC = () => {
    const goldenShardSources = [
        {
            icon: <Star className="w-6 h-6 text-yellow-500" />,
            title: "Secret Missions",
            content: "Up to 7 daily (if you are lucky with refresh)"
        },
        {
            icon: <Star className="w-6 h-6 text-purple-500" />,
            title: "VIP Program (Freebie chest)",
            content: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Level 10 or 11: 1 daily</li>
                    <li>Level 12 or 13: 2 daily</li>
                    <li>Level 14+: 3 daily</li>
                </ul>
            )
        },
        {
            icon: <Truck className="w-6 h-6 text-blue-500" />,
            title: "Trucks",
            content: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Dispatch trucks: up to 2/3 per truck =&gt; so up to 8/12 daily if lucky (based on 4 trucks)</li>
                    <li>Plunder trucks: up to 2/3 per truck =&gt; so up to 8/12 daily if lucky (based on 4 trucks and luck)</li>
                </ul>
            )
        },
        {
            icon: <Train className="w-6 h-6 text-green-500" />,
            title: "Train",
            content: "Up to 4 daily based on refresh luck"
        },
        {
            icon: <Trophy className="w-6 h-6 text-orange-500" />,
            title: "Arms Race",
            content: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Golden chest (18 today&apos;s goals): 2 daily</li>
                    <li>First position in daily ranking: 1 daily</li>
                </ul>
            )
        },
        {
            icon: <Swords className="w-6 h-6 text-red-500" />,
            title: "Duel VS",
            content: (
                <ul className="list-disc list-inside space-y-1">
                    <li>3.6 m chest: 1 daily</li>
                    <li>7.2 m chest: 1 daily</li>
                </ul>
            )
        },
        {
            icon: <ShoppingBag className="w-6 h-6 text-indigo-500" />,
            title: "Stores",
            content: (
                <ul className="list-disc list-inside space-y-1">
                    <li>Alliance Store: 5 weekly</li>
                    <li>Campaign Store: 10 weekly</li>
                    <li>Honor Store: 10 monthly</li>
                    <li>VIP Store (starting from VIP level 11): 7 weekly</li>
                </ul>
            )
        },
        {
            icon: <Castle className="w-6 h-6 text-teal-500" />,
            title: "Capitol War",
            content: "Warzone Winning Streak Rewards: 5 once at war won"
        }
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Gem className="w-8 h-8 mr-2" />
                    Resources and Where to Find Them
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90">
                    There are many types of resources in this game, and some are rare. Here&apos;s an initial outline on where to find some:
                </p>

                <InfoSection
                    icon={<Gem className="w-6 h-6 text-yellow-500" />}
                    title={
                        <span className="flex items-center">
                            Golden Shards (generic ones)
                            <Image
                                src="/images/basics/icons/shard-legendary.png"
                                alt="Golden Shard Icon"
                                width={24}
                                height={24}
                                className="ml-2 inline-block"
                            />
                        </span>
                    }
                >
                    <p className="text-foreground/90 mb-4">
                        Hero-specific shards are won by opening golden tickets for hero recruits. The following list is regarding generic golden shards:
                    </p>
                    {goldenShardSources.map((source, index) => (
                        <InfoSection key={index} icon={source.icon} title={source.title}>
                            <div className="text-foreground/90">{source.content}</div>
                        </InfoSection>
                    ))}
                    <p className="text-foreground/90 mt-4">
                        Some shards are also won when opening random rewards chests.
                    </p>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default ResourcesComponent;