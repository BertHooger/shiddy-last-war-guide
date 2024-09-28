import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ListChecks } from 'lucide-react';

const HeroAttributes: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-primary/20">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-primary flex items-center">
                    <ListChecks className="w-10 h-10 mr-3" />
                    Hero Attributes
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-10 p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Attribute Factors</h3>
                        <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                            Each hero&apos;s attributes are influenced by various factors, including:
                        </p>
                        <ul className="list-none space-y-2 text-foreground/90 mb-4">
                            {['Rarity', 'Hero level', 'Building level of the hero type (tank building, missile building)', 'Research'].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-primary mr-2">•</span>
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <div className="bg-secondary/20 p-4 rounded-lg shadow-lg">
                            <Image
                                src="/images/heroes/Murphy.png"
                                alt="Murphy's Attributes"
                                width={300}
                                height={400}
                                className="rounded-md shadow-md mx-auto"
                            />
                            <p className="text-sm text-foreground/70 mt-4 text-center italic">
                                Example: Murphy&apos;s attributes
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Attribute Descriptions</h3>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-primary/5">
                                <TableHead className="w-1/4 text-lg font-bold text-primary">Attribute</TableHead>
                                <TableHead className="text-lg font-bold text-primary">Description</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { attr: "Attack", desc: "Attack points" },
                                { attr: "HP", desc: "Life points" },
                                { attr: "Defense", desc: "Defense points" },
                                { attr: "Command", desc: "Quantity of soldiers (troops) that the hero brings when attacking or rallying, regardless of individual soldier level." }
                            ].map((row, index) => (
                                <TableRow key={index} className="hover:bg-secondary/5 transition-colors">
                                    <TableCell className="font-medium text-primary">{row.attr}</TableCell>
                                    <TableCell className="text-foreground/90">{row.desc}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

export default HeroAttributes;