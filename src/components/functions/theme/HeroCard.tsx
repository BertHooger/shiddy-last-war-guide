"use client "

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import { HeroInterface } from '@/lib/interfaces/media/heroInterface';

const HeroCard: React.FC<{ hero: HeroInterface }> = ({ hero }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <span>{hero.name} – <span className="text-primary">{hero.title}</span></span>
                        <CollapsibleTrigger asChild>
                            <button className="rounded-full hover:bg-accent p-2">
                                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </button>
                        </CollapsibleTrigger>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex-shrink-0">
                            <Image src={hero.mainImage} alt={hero.name} width={200} height={300} className="rounded-lg" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-lg mb-2">{hero.intro}</p>
                            <ul className="list-disc list-inside">
                                <li>Rarity: {hero.rarity}</li>
                                <li>Type: {hero.type}</li>
                                <li>Ability: {hero.ability}</li>
                            </ul>
                        </div>
                    </div>

                    <CollapsibleContent>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                            <div className="flex justify-center space-x-4 mb-6">
                                {hero.expandedImages.map((img, index) => (
                                    <Image key={index} src={img} alt={`${hero.name} ${index + 1}`} width={200} height={300} className="rounded-lg" />
                                ))}
                            </div>

                            <h4 className="text-lg font-semibold mb-2">Skills</h4>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Skill</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Visual</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {hero.skills.map((skill, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Image src={skill.icon} alt={`Skill ${index + 1}`} width={50} height={50} />
                                            </TableCell>
                                            <TableCell className="font-semibold">{skill.name}</TableCell>
                                            <TableCell>{skill.description}</TableCell>
                                            <TableCell>
                                                <Image src={skill.descriptionImage} alt={`${skill.name} Description`} width={100} height={100} className="rounded-md" />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <h4 className="text-lg font-semibold mt-6 mb-2">Suggested Skill Upgrade Order</h4>
                            <ol className="list-decimal list-inside">
                                {hero.skillUpgradeOrder.map((upgradeInfo, index) => (
                                    <li key={index} className="mb-1">
                                        <span className="font-semibold">{upgradeInfo.skillName}</span>
                                    </li>
                                ))}
                            </ol>
                            {hero.specialInfo && (
                                <div className="mt-6 bg-primary/10 p-4 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                                        <Star className="w-5 h-5 mr-2 text-primary" />
                                        {hero.specialInfo.title}
                                    </h4>
                                    <p className="mb-2">{hero.specialInfo.description}</p>
                                    <p className="text-sm text-primary">Available from: {hero.specialInfo.availableFrom}</p>
                                </div>
                            )}
                        </div>
                    </CollapsibleContent>
                </CardContent>
            </Card>
        </Collapsible>
    );
};

export default HeroCard;