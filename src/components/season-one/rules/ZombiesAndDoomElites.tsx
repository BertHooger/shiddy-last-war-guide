import React from 'react';
import Image from 'next/image';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skull, AlertTriangle, Info } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';

const ZombiesAndDoomElites: React.FC = () => {
    const zombieTypes = [
        { src: '/images/season-one/zombies/tank-zombie.png', alt: 'Tank Zombie', caption: 'Tank Zombie' },
        { src: '/images/season-one/zombies/aircraft-zombie.png', alt: 'Aircraft Zombie', caption: 'Aircraft Zombie' },
        { src: '/images/season-one/zombies/missile-zombie.png', alt: 'Missile Vehicle Zombie', caption: 'Missile Vehicle Zombie' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Skull className="w-8 h-8 mr-2" />
                    Zombies and Doom Elites
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <InfoSection icon={<Info className="w-6 h-6 text-primary" />} title="New Zombie Types">
                    <p className="text-foreground/90 mb-4">
                        A game-changing feature has been introduced for zombies that yield food, iron, or gold. They now have specific types similar to heroes: tank, aircraft, and missile vehicle.
                    </p>
                    <Gallery images={zombieTypes} />
                </InfoSection>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <InfoSection icon={<AlertTriangle className="w-6 h-6 text-destructive" />} title="Attacking Zombies">
                            <p className="text-foreground/80 mb-2">
                                When selecting a zombie to attack, you&apos;ll see detailed information. If your virus Resistance is lower than the zombie&apos;s virus level:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-foreground/80">
                                <li>You&apos;ll become infected upon hitting the zombie.</li>
                                <li>Your damage output will be reduced (e.g., by 18%).</li>
                            </ul>
                            <p className="text-foreground/90 font-semibold mt-2">
                                Ensure your power exceeds this reduction by a comfortable margin before attacking.
                            </p>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <Image
                            src="/images/season-one/zombies/zombie-attack-details.png"
                            alt="Zombie Attack Details"
                            width={250}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>

                <InfoSection icon={<Skull className="w-6 h-6 text-primary" />} title="Doom Elites">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="md:w-1/2">
                            <p className="text-foreground/90">
                                <strong>Doom Elites</strong> have also been updated. They now appear as gigantic, infectious scorpions. Exercise extreme caution when facing these formidable foes!
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/images/season-one/zombies/doom-elite-scorpion.png"
                                alt="Doom Elite Scorpion"
                                width={300}
                                height={200}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default ZombiesAndDoomElites;