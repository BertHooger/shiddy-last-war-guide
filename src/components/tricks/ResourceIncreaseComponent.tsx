/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Coins, Search, AlertTriangle } from 'lucide-react';
import { heroImages } from '../ImageProps';

const ResourceIncreaseComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Coins className="w-8 h-8 mr-2" />
                    Increase Resource Rewards from Zombies
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-6">
                        <InfoSection
                            icon={<Coins className="w-6 h-6 text-yellow-500" />}
                            title="Monica's Treasure Hunter Skill"
                        >
                            <p className="text-foreground/90 mb-4">
                                The hero Monica, even if not really strong, has a really nice skill called Treasure Hunter:
                            </p>
                            <div className="bg-secondary/20 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold mb-2">Treasure Hunter</h4>
                                <p className="text-foreground/90">
                                    After defeating regular World Map zombies like Ironhead Glutton, Miser, and Doom Elites, your squad earns an additional 39% in Coin, Food, and Iron resources.
                                </p>
                            </div>
                        </InfoSection>

                        <InfoSection
                            icon={<Search className="w-6 h-6 text-blue-500" />}
                            title="Eligible Zombies"
                        >
                            <p className="text-foreground/90">
                                The World Map zombies are the ones you can find using the magnifying glass research feature in map mode.
                            </p>
                        </InfoSection>

                        <InfoSection
                            icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
                            title="Important Note"
                        >
                            <p className="text-foreground/90 mb-2">
                                Other zombies from events are usually not eligible for this bonus.
                            </p>
                            <p className="text-foreground/90 font-semibold">
                                So use the squad with Monica when you kill those zombies to gain at least 39% more resources.
                            </p>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-start">
                        {/* Use the heroImages object to display Monica's image */}
                        <Image
                            {...heroImages.monica} // Spread the properties from heroImages
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ResourceIncreaseComponent;