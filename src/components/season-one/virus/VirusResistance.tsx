import React from 'react';
import Image from 'next/image';
import { InfoSection } from '@/components/functions/section/info/InfoSectionIcon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Info, AlertTriangle } from 'lucide-react';
import Gallery from '@/components/functions/blocks/image/Gallery';

const VirusResistance: React.FC = () => {
    const resistanceImages = [
        { src: '/images/season-one/virus/virus-resistance-1.png', alt: 'Virus Resistance Image 1', caption: 'Virus Resistance Interface' },
        { src: '/images/season-one/virus/virus-resistance-2.png', alt: 'Virus Resistance Image 2', caption: 'Resistance Level Impact' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Shield className="w-8 h-8 mr-2" />
                    Virus Resistance
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-2/3 space-y-6">
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Virus Resistance is crucial in Season 1. Continuously upgrading your Virus Research Institute allows you to increase resistance and obtain numerous rewards.
                        </p>

                        <InfoSection icon={<Info className="w-6 h-6 text-primary" />} title="Checking Virus Resistance">
                            <p className="mb-2 text-foreground/80">To view your current Virus Resistance value:</p>
                            <ol className="list-decimal list-inside space-y-2 text-foreground/80">
                                <li className="flex items-center">
                                    Click on the Season 1 Event icon above the duel VS icon
                                    <Image
                                        src="/images/season-one/icons/season-1-icon.png"
                                        alt="Season 1 Event Icon"
                                        width={20}
                                        height={20}
                                        className="inline-block ml-2"
                                    />
                                </li>
                                <li>Click on the Season 1 banner at the top</li>
                                <li>Click the Goals button</li>
                            </ol>
                        </InfoSection>

                        <InfoSection icon={<AlertTriangle className="w-6 h-6 text-destructive" />} title="Infection Risk">
                            <p className="text-foreground/80">
                                When attacking a zombie, the information window will display the required Virus Resistance. If your resistance is insufficient and you proceed with the attack, your troops will become infected.
                            </p>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/3 mt-6 md:mt-0">
                        <Gallery images={resistanceImages} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default VirusResistance;