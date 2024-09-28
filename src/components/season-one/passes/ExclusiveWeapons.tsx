import React from 'react';
import { FeatureItem } from '@/components/functions/section/FeatureItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sword, Shield, Zap, ArrowUp } from 'lucide-react';

const ExclusiveWeapons: React.FC = () => {
    const features = [
        {
            icon: <Sword className="w-6 h-6 text-primary" />,
            title: "Unique Weapons",
            description: "Every legendary hero has a distinct Exclusive Weapon, enhancing their capabilities."
        },
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: "Unlock Levels",
            description: "New vehicle appearances and skills unlock at levels 1, 10, 20, and 30."
        },
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Attribute Boost",
            description: "Upgrading weapons significantly enhances various hero attributes."
        },
        {
            icon: <ArrowUp className="w-6 h-6 text-primary" />,
            title: "Skill Enhancement",
            description: "Weapon upgrades increase the maximum levels of existing hero skills."
        }
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Exclusive Weapons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                    Season 1 introduces Exclusive Weapons for every legendary hero, revolutionizing combat dynamics. These weapons are unlocked progressively and require specific shards for activation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <FeatureItem key={index} {...feature} />
                    ))}
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg mt-6">
                    <p className="text-foreground/80 italic">
                        Note: Availability times for Exclusive Weapons may vary for each hero. Stay tuned for specific release schedules.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default ExclusiveWeapons;