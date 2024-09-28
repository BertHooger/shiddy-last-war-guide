import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';
import { Alert, AlertDescription } from '@/components/ui/alert';

const StarsTiersUpgrade: React.FC = () => {
    const galleryImages = [
        { src: '/images/upgrades/star-upgrade-1.png', alt: 'Star Upgrade Step 1', caption: 'Step 1' },
        { src: '/images/upgrades/star-upgrade-2.png', alt: 'Star Upgrade Step 2', caption: 'Step 2' },
        { src: '/images/upgrades/star-upgrade-3.png', alt: 'Star Upgrade Step 3', caption: 'Step 3' },
        { src: '/images/upgrades/star-upgrade-4.png', alt: 'Star Upgrade Step 4', caption: 'Step 4' },
        { src: '/images/upgrades/star-upgrade-5.png', alt: 'Star Upgrade Step 5', caption: 'Step 5' },
        { src: '/images/upgrades/star-upgrade-complete.png', alt: 'Star Upgrade Complete', caption: 'Upgrade Complete' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Star className="w-8 h-8 mr-2" />
                    Stars/Tiers Upgrade
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p className="text-lg text-foreground/90">
                            To upgrade a Hero Star/Tier Level you need to collect the corresponding Hero Shards, for each hero you can either use:
                        </p>
                        <ul className="list-none space-y-2">
                            <li className="flex items-center">
                                <Image src="/images/shards/mason-shard.png" alt="Mason Shard" width={24} height={24} className="mr-2" />
                                <span>The specific Hero Shard, for example for Mason</span>
                            </li>
                            <li className="flex items-center">
                                <Image src="/images/shards/universal-ssr-shard.png" alt="Universal SSR Shard" width={24} height={24} className="mr-2" />
                                <span>The universal shard of the same rarity level, for example given Mason it is the Universal SSR Shards (called in the game Epic Hero Universal Shards)</span>
                            </li>
                        </ul>
                        <p className="text-lg text-foreground/90">
                            A Hero can be upgraded up to 5 ⭐️. To earn each star 5 tiers of stars need to be earned doing the Hero Promotion.
                        </p>
                        <p className="text-lg text-foreground/90">
                            Each star level has a different price per tier:
                        </p>
                        <ul className="list-disc pl-5 text-foreground/90">
                            <li>First ⭐️: each tier 5 shards = 5×5 = 25 shards</li>
                            <li>Second ⭐️: each tier 10 shards = 5×10 = 50 shards</li>
                            <li>Third ⭐️: each tier 20 shards = 5×20 = 100 shards</li>
                            <li>Fourth ⭐️: each tier 60 shards = 5×60 = 300 shards</li>
                            <li>Fifth ⭐️: each tier 100 shards = 5×100 = 500 shards</li>
                        </ul>
                        <p className="text-lg text-foreground/90 font-bold">
                            So to fully upgrade a Hero to 5 ⭐️ you will need a total of: <span className="text-primary">975</span> shards (can be mixed hero specific and universal of same rarity)
                        </p>
                        <p className="text-lg text-foreground/90">
                            Upgrading the ⭐️ level on a hero unlocks Skills.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <Gallery images={galleryImages} />
                    </div>
                </div>

                <Alert variant="destructive">
                    <AlertDescription>
                        ATTENTION: In Season 1 it will be possible to upgrade Mason to UR, and only in that case the price to level him up on 5 ⭐️ it will cost the double amount of shards (<strong>1950 shards</strong>). Check Mason upgrade to UR article.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
};

export default StarsTiersUpgrade;