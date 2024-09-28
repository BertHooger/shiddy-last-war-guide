import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Gallery from '@/components/functions/blocks/image/Gallery';
import { GalleryProps } from '@/lib/interfaces/media/galleryInterfaces';

const TroopLevelsAndCharacteristics: React.FC = () => {
    const images: GalleryProps['images'] = [
        { src: '/images/troops/soldier-level-1.png', alt: 'Soldier level 1', caption: 'Soldier Level 1' },
        { src: '/images/troops/soldier-level-3.png', alt: 'Soldier level 3', caption: 'Soldier Level 3' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="font-title text-2xl md:text-3xl text-primary">Troops Levels and Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <h3 className="font-title text-xl text-secondary mb-4">Troop Levels</h3>
                        <p className="font-sans text-lg mb-4">
                            The soldiers have different levels, from 1 to 10 (also called T1… T10), each of which has different characteristics, the higher the level the greater the power.
                        </p>
                        <p className="font-accent text-sm italic text-muted-foreground">
                            [I will shortly extend the guide with further details for each of those values.]
                        </p>

                        <h3 className="font-title text-xl text-secondary mt-8 mb-4">Characteristics of the Soldiers</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-title text-primary">Characteristic</TableHead>
                                    <TableHead className="font-title text-primary">Meaning</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-sans font-bold">Power</TableCell>
                                    <TableCell className="font-sans">It is the power that each individual soldier of this level contributes to the team when attacking or defending</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-sans font-bold">Troop Load</TableCell>
                                    <TableCell className="font-sans">Indicates the amount of resources that a soldier of this level manages to &quot;steal&quot; when attacking a base.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="md:w-1/3">
                        <Gallery images={images} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TroopLevelsAndCharacteristics;