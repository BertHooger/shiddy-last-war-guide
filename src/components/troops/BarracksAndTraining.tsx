import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Gallery from '@/components/functions/blocks/image/Gallery';
import { GalleryProps } from '@/lib/interfaces/media/galleryInterfaces';

const BarracksAndTraining: React.FC = () => {
    const barracksImages: GalleryProps['images'] = [
        { src: '/images/troops/barracks-gun-symbol.png', alt: 'Barracks -> Gun symbol', caption: 'Barracks Location' },
        { src: '/images/troops/train-unit-screen.png', alt: 'Train unit screen', caption: 'Training Units' },
    ];

    const techCenterImages: GalleryProps['images'] = [
        { src: '/images/troops/tech-center-development.png', alt: 'Select Development in the Tech Center', caption: 'Tech Center Development' },
        { src: '/images/troops/extra-barracks-research.png', alt: 'Complete the searches until you get to Extra Barracks', caption: 'Extra Barracks Research' },
        { src: '/images/troops/researching-extra-barracks.png', alt: 'Researching Extra Barracks allows you to obtain 1 Barracks', caption: 'Obtaining Extra Barracks' },
    ];

    const drillGroundImages: GalleryProps['images'] = [
        { src: '/images/troops/drill-ground-symbol.png', alt: 'Drill Ground -> Click on the police hat symbol', caption: 'Drill Ground Location' },
        { src: '/images/troops/soldier-count-screen.png', alt: 'Here are listed how many soldiers you have and their level.', caption: 'Soldier Count and Levels' },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="font-title text-2xl md:text-3xl text-primary">Barracks and Soldier Training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <h3 className="font-title text-xl text-secondary mb-4">Soldiers Training in the Barracks</h3>
                        <p className="font-sans text-lg mb-4">
                            Training soldiers through barracks consumes resources and takes time proportionally to how many soldiers are trained and what level they are.
                        </p>
                        <p className="font-sans text-lg mb-4">
                            Each barracks, depending on its level, can train soldiers of different levels. Read further on how to manage the upgrading of soldiers and consequently how to update barracks levels.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Gallery images={barracksImages} />
                    </div>
                </div>

                <div>
                    <h3 className="font-title text-xl text-secondary mb-4">Barracks Level Requirements</h3>
                    <p className="font-sans text-lg mb-4">
                        Below is the list of soldier levels and which barracks level allows you to train such soldiers:
                    </p>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-title text-primary">Soldier Level</TableHead>
                                <TableHead className="font-title text-primary">Barracks Level</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { soldier: 1, barracks: "1 or higher" },
                                { soldier: 2, barracks: "4 or higher" },
                                { soldier: 3, barracks: "6 or higher" },
                                { soldier: 4, barracks: "10 or higher" },
                                { soldier: 5, barracks: "14 or higher" },
                                { soldier: 6, barracks: "17 or higher" },
                                { soldier: 7, barracks: "20 or higher" },
                                { soldier: 8, barracks: "24 or higher" },
                                { soldier: 9, barracks: "27 or higher" },
                                { soldier: 10, barracks: "30 or higher + search for X units" },
                            ].map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-sans">{row.soldier}</TableCell>
                                    <TableCell className="font-sans">{row.barracks}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <h3 className="font-title text-xl text-secondary mb-4">Additional Barracks</h3>
                        <p className="font-sans text-lg mb-4">
                            You can obtain an additional barracks by completing the relevant research in the technology center in the <strong>Development</strong> section:
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Gallery images={techCenterImages} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <h3 className="font-title text-xl text-secondary mb-4">Drill Grounds</h3>
                        <p className="font-sans text-lg mb-4">
                            Once the soldiers have been trained they will go to drill grounds (the further you play the more drill grounds you will have). From here you can see how many soldiers you have and what level.
                        </p>
                        <p className="font-sans text-lg mb-4">
                            Here are listed how many soldiers you have and their level. If any team has been sent to attack/rally or collect fields then some soldiers will be Outside, otherwise they will be in-shelter.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Gallery images={drillGroundImages} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default BarracksAndTraining;