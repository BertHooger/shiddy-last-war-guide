import React, { useState } from 'react';
import Image from 'next/image';
import { PassItem } from '@/components/functions/section/PassItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, CreditCard, Crown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery: React.FC<{ images: { src: string; alt: string }[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative">
            <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={300}
                height={200}
                className="rounded-lg shadow-md"
            />
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                <Button
                    onClick={prevImage}
                    variant="outline"
                    size="icon"
                    className="bg-black/50 text-white hover:bg-black/70"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    onClick={nextImage}
                    variant="outline"
                    size="icon"
                    className="bg-black/50 text-white hover:bg-black/70"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <p className="text-center mt-2 text-sm text-foreground/70">
                {currentIndex + 1} / {images.length}
            </p>
        </div>
    );
};

const SeasonOnePasses: React.FC = () => {
    const passes = [
        "Season Battle Pass",
        "Weekly Pass",
        "Kimberly's Exclusive Weapon Battle Pass",
        "DVA's Exclusive Weapon Battle Pass",
        "Tesla's Exclusive Weapon Battle Pass"
    ];

    const tiers = [
        { name: "Freebie", price: "", icon: Trophy },
        { name: "Game Season Advanced", price: "~11,99 €", icon: CreditCard },
        { name: "Game Season Luxury", price: "~23,99 €", icon: Crown }
    ];

    const battlePassImages = [
        { src: "/images/season-one/passes/battle-pass-1.png", alt: "Battle Pass Example 1" },
        { src: "/images/season-one/passes/battle-pass-2.png", alt: "Battle Pass Example 2" },
    ];

    const advancedPassItems = [
        { name: "Golden shards", icon: "/images/season-one/icons/golden-shards.png" },
        { name: "Profession EXP", icon: "/images/season-one/icons/profession-exp.png" },
        { name: "mutant crystals", icon: "/images/season-one/resources/mutant-crystal.png" },
        { name: "Hero's return Tickets", icon: "/images/season-one/tickets/heroes-return-ticket.png" },
        { name: "S1 Skill Points", icon: "/images/season-one/icons/s1-skill-points.png" },
        { name: "Lucky Chests: Ore and Gear", icon: "" },
        { name: "Diamonds", icon: "" }
    ];

    const luxuryPassItems = [
        { name: "Profession Change Certificate", icon: "/images/season-one/icons/profession-change-certificate.png" },
        { name: "Profession Skill Reset Book", icon: "/images/season-one/icons/profession-skill-reset-book.png" },
        { name: "Permanent Crimson Memories Nameplate", icon: "/images/season-one/icons/crimson-memories-nameplate.png" },
        { name: "Doubles items of Advanced Pass", icon: "" }
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Trophy className="w-8 h-8 mr-2" />
                    Season 1 Passes
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p className="text-lg text-foreground/90">
                            During Season 1, you have access to multiple passes that will help you throughout the season and power up your heroes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-foreground/90">
                            {passes.map((pass, index) => (
                                <li key={index}>{pass}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <Image
                            src="/images/season-one/passes/season-battle-pass.png"
                            alt="Season Battle Pass"
                            width={300}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Season Battle Pass</h3>
                    <p className="text-foreground/90">
                        The <strong>Season Battle Pass</strong> lasts 48 days and provides essential goods for an advantageous start in Season 1.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-2/3">
                        <Tabs defaultValue="tiers" className="w-full">
                            <TabsList>
                                <TabsTrigger value="tiers">Pass Tiers</TabsTrigger>
                                <TabsTrigger value="advanced">Advanced Pass</TabsTrigger>
                                <TabsTrigger value="luxury">Luxury Pass</TabsTrigger>
                            </TabsList>
                            <TabsContent value="tiers">
                                <div className="space-y-4">
                                    <p className="text-lg text-foreground/90">The <strong>Season Battle Pass</strong> is structured in 3 tiers:</p>
                                    <ul className="space-y-2">
                                        {tiers.map((tier, index) => (
                                            <li key={index} className="flex items-center space-x-2">
                                                {<tier.icon className="w-5 h-5 text-primary" />}
                                                <span className="font-semibold">{tier.name}</span>
                                                {tier.price && <span className="text-foreground/70">({tier.price})</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>
                            <TabsContent value="advanced">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Main items in the <strong>Advanced Pass</strong>:</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {advancedPassItems.map((item, index) => (
                                            <li key={index}>
                                                <PassItem name={item.name} icon={item.icon} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>
                            <TabsContent value="luxury">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold">Main items in the <strong>Luxury Pass</strong>:</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {luxuryPassItems.map((item, index) => (
                                            <li key={index}>
                                                <PassItem name={item.name} icon={item.icon} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <p className="text-foreground/90 mt-4">
                            The Profession and hero items are valuable, but one of the best aspects of the additional tiers is the large amount of <strong>mutant crystals</strong>. These allow rapid progression in upgrading Protein Farms and the Virus Research Institute, giving you a chance to be the first to fight the most infectious zombies and win.
                        </p>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt-0">
                        <Gallery images={battlePassImages} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SeasonOnePasses;