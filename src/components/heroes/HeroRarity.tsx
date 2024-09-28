import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

import Gallery from '@/components/functions/blocks/image/Gallery';
import { IconWithText } from '@/components/functions/icons/IconWithText';

const HeroRarity: React.FC = () => {
    const galleryImages = [
        { src: "/images/heroes/Murphy.png", alt: "Murphy", caption: "Murphy - UR Tank Defender" },
        { src: "/images/heroes/Kimberly.png", alt: "Kimberly", caption: "Kimberly - UR Tank Attacker" },
    ];

    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-b border-yellow-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-yellow-600 flex items-center">
                    <Star className="w-10 h-10 mr-3 text-yellow-500" />
                    Hero Rarity
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                            As explained before, there are 3 levels of rarity in heroes:
                        </p>
                        <ul className="list-none space-y-3 text-foreground/90 mb-6">
                            <li><IconWithText src="/images/rarity/ur.png" alt="UR" text="UR (legendary)" /></li>
                            <li><IconWithText src="/images/rarity/ssr.png" alt="SSR" text="SSR (epic)" /></li>
                            <li><IconWithText src="/images/rarity/sr.png" alt="SR" text="SR (rare)" /></li>
                        </ul>
                        <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                            UR is the most powerful, followed by SSR, and finally SR.
                        </p>
                        <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                            Throughout the game, you will be able to win many SSR and SR heroes, but you will have to wait a long time before many other UR heroes will be available for free. Many UR heroes are available only through purchase.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            In the first 1-2 weeks, you will be able to win Murphy (a UR Tank defender) for free, and Kimberly (UR Tank attacker) will be available for purchase right away at a very low cost.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <Gallery images={galleryImages} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default HeroRarity;