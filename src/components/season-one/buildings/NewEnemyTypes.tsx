import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skull, Shield, AlertTriangle } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';

const NewEnemyTypes: React.FC = () => {
    const corruptorImages = [
        { src: '/images/season-one/enemies/corruptor-1.png', alt: 'Corruptor 1', caption: 'Corruptor Type A' },
        { src: '/images/season-one/enemies/corruptor-2.png', alt: 'Corruptor 2', caption: 'Corruptor Type B' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Skull className="w-8 h-8 mr-2" />
                    New Enemy Types
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <InfoSection icon={<Skull className="w-6 h-6 text-destructive" />} title="World Boss">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-foreground/90 mb-4">
                                World bosses now have new appearances, but the same rules apply—except that they <strong>will infect you</strong> with the virus when you hit them (it&apos;s a very mild infection in this case).
                            </p>
                            <p className="text-foreground/90">
                                This is how the Frenzied Butcher appears now.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center items-start">
                            <Image
                                src="/images/season-one/enemies/frenzied-butcher.png"
                                alt="Frenzied Butcher"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </InfoSection>

                <InfoSection icon={<Shield className="w-6 h-6 text-primary" />} title="Corruptor">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-foreground/90 mb-4">
                                When capturing a Military Stronghold for the first time, you&apos;ll face its guardian, a new and powerful enemy: the <strong>Corruptor</strong>.
                            </p>
                            <p className="text-foreground/90 mb-4">
                                They are extremely powerful, and remember that attacking them <strong>will always infect you</strong>, regardless of your Virus Resistance.
                            </p>
                            <p className="text-foreground/90">
                                Additionally, a damage debuff applies if your virus resistance is lower than their virus strength.
                            </p>
                        </div>
                        <div className="md:w-1/3">
                            <Gallery images={corruptorImages} />
                        </div>
                    </div>
                </InfoSection>

                <InfoSection icon={<AlertTriangle className="w-6 h-6 text-destructive" />} title="Infected Zombies">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-foreground/90 mb-4">
                                Corruptors are not the only guardians of Military Strongholds; there are also Infected Zombies.
                            </p>
                            <p className="text-foreground/90 mb-4">
                                These Zombies will infect you, regardless of your Virus Resistance.
                            </p>
                            <p className="text-foreground/90">
                                Additionally, a damage debuff applies if your virus resistance is lower than their virus strength.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center items-start">
                            <Image
                                src="/images/season-one/enemies/infected-zombie.png"
                                alt="Infected Zombie"
                                width={300}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default NewEnemyTypes;