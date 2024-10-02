import Image from 'next/image';
import { getImage } from '@/lib/images/season/season-one/intro/introImages';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked } from 'lucide-react';

export default function SeasonOverview() {
    const ladyInRedImage = getImage('ladyInRed');

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <BookMarked className="w-8 h-8 mr-2" />
                    The Story
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <p>
                            After the fall of the Doom Legion, the world experienced a fleeting peace. Dr. Noab, who escaped in a hurry, left behind unresolved secrets beneath the Capitol.
                        </p>
                        <p>
                            Fifteen years earlier, he had arrived at a castle in the north, where he quickly married the young <strong>Lady in Red</strong>, the estate&apos;s owner. She was aware that he was after her family&apos;s secret artifact the <strong>Gift of Blood Spawn</strong>. Despite this she chose to ally with Noah to form the Doom Legion, hoping to restore her family&apos;s former glory and ascend as queen of the world.
                        </p>
                        <p>
                            Ten years ago, the driven <strong>Lady in Red</strong> took a daring step by injecting herself with the Gift of Blood Spawn. She then secluded herself underground, biding her time until the moment was right.
                        </p>
                        <p>
                            Now as the queen emerges, she brings forth the <strong>Crimson Plague</strong>, plunging humanity into turmoil. <strong>Commander</strong>, the stage is set for a deadly conflict—this is your chance to demonstrate that you are the true ruler of this world!
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end items-start">
                        <div className="rounded-lg shadow-md overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                            <Image
                                src={ladyInRedImage.src}
                                alt={ladyInRedImage.alt}
                                width={ladyInRedImage.width}
                                height={ladyInRedImage.height}
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}