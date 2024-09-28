"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { InfoBox } from '@/components/functions/section/info/InfoBox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bug, Brain, AlertTriangle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const RAVirus: React.FC = () => {
    const [activeImage, setActiveImage] = useState(0);
    const virusImages = [
        { src: '/images/season-one/virus/ra-virus-1.png', alt: 'RA Virus Image 1' },
        { src: '/images/season-one/virus/ra-virus-2.png', alt: 'RA Virus Image 2' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Bug className="w-8 h-8 mr-2" />
                    RA Virus (Gift of Blood Spawn)
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed italic">
                    The RA Virus, also known as the <strong>Gift of Blood Spawn</strong>, originates from ancient insects preserved in amber. The <strong>Lady in Red</strong>&apos;s family has dedicated generations to its preservation.
                </p>

                <Tabs defaultValue="characteristics" className="w-full">
                    <TabsList>
                        <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
                        <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                        <TabsTrigger value="evolution">Evolution</TabsTrigger>
                    </TabsList>
                    <TabsContent value="characteristics">
                        <InfoBox
                            icon={<Bug className="w-6 h-6 text-primary" />}
                            title="Virus Particles"
                            content="Each particle is only 100 nanometers across, but can multiply to 2000 in just an hour after infecting a human."
                        />
                    </TabsContent>
                    <TabsContent value="symptoms">
                        <InfoBox
                            icon={<AlertTriangle className="w-6 h-6 text-destructive" />}
                            title="Initial Symptoms"
                            content="Fever, dry cough, and fatigue, followed by increased appetite and severe breathing difficulties as the body mutates and becomes highly infectious."
                        />
                    </TabsContent>
                    <TabsContent value="evolution">
                        <InfoBox
                            icon={<Brain className="w-6 h-6 text-primary" />}
                            title="Mutation Process"
                            content="An upgraded version produces a gel-like substance that encapsulates the infected, slowing mutation. Longer processes result in smarter infected, sometimes exceeding average human intelligence."
                        />
                    </TabsContent>
                </Tabs>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p>
                            Early mutants of the RA virus are less intelligent and uncontrollable. The upgraded version&apos;s gel-like substance slows mutation, potentially resulting in infected individuals smarter than average humans.
                        </p>
                        <p className="font-bold text-primary">
                            After 5 years of hibernation, the Lady in Red evolved into the almighty Crimson Queen. Her intelligence and power far exceed our imagination.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex flex-col justify-center items-center space-y-4">
                        <Image
                            src={virusImages[activeImage].src}
                            alt={virusImages[activeImage].alt}
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md"
                        />
                        <div className="flex space-x-2">
                            {virusImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${index === activeImage ? 'bg-primary' : 'bg-gray-300'}`}
                                    onClick={() => setActiveImage(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default RAVirus;