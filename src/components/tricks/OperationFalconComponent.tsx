import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { operationFalconImages } from '../ImageProps';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Shield, Users, Trophy } from 'lucide-react';

const ImageCard: React.FC<{ src: string; alt: string; description: string; width: number; height: number }> = ({ src, alt, description, width, height }) => (
    <Card className="flex flex-col h-full">
        <div className="relative w-full" style={{ paddingTop: `${(height / width) * 100}%` }}>
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg"
            />
        </div>
        <CardContent className="flex-grow p-4">
            <p className="text-sm text-center text-foreground/80">{description}</p>
        </CardContent>
    </Card>
);


const OperationFalconComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Shield className="w-8 h-8 mr-2" />
                    Operation Falcon/Special Ops
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <InfoSection
                    icon={<Users className="w-6 h-6 text-blue-500" />}
                    title="Free Troops at Highest Level"
                >
                    <p className="text-foreground/90 mb-4">
                        At the start and as you play, avoid doing the Special Ops in Operation Falcon unless you really need more troops. These ops give you free troops based on how well you keep soldiers alive during the stage, and when you finish a Special Op you receive that amount with the troop level equal to the highest trainable level in your barracks.
                    </p>
                    <p className="text-foreground/90 font-semibold">
                        Focus on upgrading your barracks as much as possible before trying to get free troops. In the troops guide, you can find more information on how barracks and troop levels work.
                    </p>
                </InfoSection>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {operationFalconImages.map((image, index) => (
                        <ImageCard key={index} {...image} />
                    ))}
                </div>

                <InfoSection
                    icon={<Trophy className="w-6 h-6 text-yellow-500" />}
                    title="Honorable Campaign – Farm Levels EXP and Resources"
                >
                    <p className="text-foreground/90 mb-4">
                        If you know that your squads are not strong enough to do the 2 next levels of Honorable Campaign, don&apos;t start that level.
                    </p>
                    <p className="text-foreground/90 mb-4">
                        Instead, swipe left to a previous level (that you already completed) that you know your squad should be able to win and start that.
                    </p>
                    <p className="text-foreground/90 font-semibold mb-4">
                        Important: Doing so you will be able to play only one level for that Mission category instead of 2, but at least you will complete all the stages and so farm many rewards.
                    </p>
                    <p className="text-foreground/90">
                        In time you will learn when to do so or when to proceed with new levels.
                    </p>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default OperationFalconComponent;