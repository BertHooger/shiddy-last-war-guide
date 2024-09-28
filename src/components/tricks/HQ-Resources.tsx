import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { HelpCircle, Building, ArrowUpCircle, AlertTriangle } from 'lucide-react';

const LevelUpRequirements: React.FC = () => {

    const tableData = [
        { hqUnlock: 2, firstBuilding: "Drill Ground", secondBuilding: "Parking lots", iron: "~3.8 M", food: "~3.8 M", gold: "2.5 M", days: "~3" },
        { hqUnlock: 3, firstBuilding: "Wall", secondBuilding: "", iron: "7.9 M", food: "7.9 M", gold: "5 M", days: "~3" },
        { hqUnlock: 4, firstBuilding: "Barracks", secondBuilding: "Drill Ground", iron: "15.7 M", food: "15.7 M", gold: "7.5 M", days: "~4" },
        { hqUnlock: 5, firstBuilding: "Wall", secondBuilding: "Barracks", iron: "23.6 M", food: "23.6 M", gold: "10 M", days: "~5" },
        { hqUnlock: 6, firstBuilding: "Wall", secondBuilding: "Drill Ground", iron: "31.4 M", food: "31.4 M", gold: "12.5 M", days: "~5" },
        { hqUnlock: 7, firstBuilding: "Wall", secondBuilding: "Tank Center", iron: "39.3 M", food: "39.3 M", gold: "15 M", days: "~6" },
        { hqUnlock: 8, firstBuilding: "Tech Center", secondBuilding: "Alliance Center", iron: "47.1 M", food: "47.1 M", gold: "17.5 M", days: "~7" },
        { hqUnlock: 9, firstBuilding: "Tech Center", secondBuilding: "Tank Center", iron: "54.9 M", food: "54.9 M", gold: "20 M", days: "~7" },
        { hqUnlock: 10, firstBuilding: "Tech Center", secondBuilding: "Hospital", iron: "62.8 M", food: "62.8 M", gold: "22.5 M", days: "~8" },
        { hqUnlock: 11, firstBuilding: "Tech Center", secondBuilding: "Wall", iron: "70.6 M", food: "70.6 M", gold: "25 M", days: "~9" },
        { hqUnlock: 12, firstBuilding: "Tech Center", secondBuilding: "Barracks", iron: "78.4 M", food: "78.4 M", gold: "27.5 M", days: "~10" },
        { hqUnlock: 13, firstBuilding: "Tech Center", secondBuilding: "Tank Center", iron: "86.3 M", food: "86.3 M", gold: "30 M", days: "~11" },
        { hqUnlock: 14, firstBuilding: "Tech Center", secondBuilding: "Drill Ground", iron: "94.1 M", food: "94.1 M", gold: "32.5 M", days: "~12" },
        { hqUnlock: 15, firstBuilding: "Tech Center", secondBuilding: "Wall", iron: "102 M", food: "102 M", gold: "35 M", days: "~14" },
        { hqUnlock: 16, firstBuilding: "Tech Center", secondBuilding: "Alliance Center", iron: "109.8 M", food: "109.8 M", gold: "37.5 M", days: "~16" },
        { hqUnlock: 17, firstBuilding: "Tech Center", secondBuilding: "Tank Center", iron: "117.7 M", food: "117.7 M", gold: "40 M", days: "~18" },
        { hqUnlock: 18, firstBuilding: "Tech Center", secondBuilding: "Hospital", iron: "125.5 M", food: "125.5 M", gold: "42.5 M", days: "~20" },
        { hqUnlock: 19, firstBuilding: "Tech Center", secondBuilding: "Wall", iron: "133.3 M", food: "133.3 M", gold: "45 M", days: "~23" },
        { hqUnlock: 20, firstBuilding: "Tech Center", secondBuilding: "Barracks", iron: "141.2 M", food: "141.2 M", gold: "47.5 M", days: "~26" },
        { hqUnlock: 21, firstBuilding: "Tech Center", secondBuilding: "Tank Center", iron: "149 M", food: "149 M", gold: "50 M", days: "~29" },
        { hqUnlock: 22, firstBuilding: "Tech Center", secondBuilding: "Drill Ground", iron: "79.3 M", food: "79.3 M", gold: "25.6 M", days: "~3.82" },
        { hqUnlock: 23, firstBuilding: "Tech Center", secondBuilding: "Wall", iron: "105.6 M", food: "105.6 M", gold: "33.6 M", days: "~5.52" },
        { hqUnlock: 24, firstBuilding: "Tech Center", secondBuilding: "Alliance Center", iron: "131.6 M", food: "131.6 M", gold: "41.3 M", days: "~6.42" },
        { hqUnlock: 25, firstBuilding: "Tech Center", secondBuilding: "Tank Center", iron: "158.9 M", food: "158.9 M", gold: "50.4 M", days: "~8" },
        { hqUnlock: 26, firstBuilding: "Tech Center", secondBuilding: "Hospital", iron: "270 M", food: "270 M", gold: "96.5 M", days: "~11.5" },
        { hqUnlock: 27, firstBuilding: "Tech Center", secondBuilding: "Wall", iron: "374 M", food: "374 M", gold: "121.5 M", days: "~15" },
        { hqUnlock: 28, firstBuilding: "Tech Center", secondBuilding: "Barracks", iron: "487.6 M", food: "487.6 M", gold: "156 M", days: "~22" },
        { hqUnlock: 29, firstBuilding: "Tech Center", secondBuilding: "Tank Center", iron: "691.9 M", food: "691.9 M", gold: "224.4 M", days: "~30" },
        { hqUnlock: 30, firstBuilding: "Tech Center", secondBuilding: "Drill Ground", iron: "925 M", food: "925 M", gold: "305 M", days: "~39" },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <ArrowUpCircle className="w-8 h-8 mr-2" />
                    Level Up Requirements
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <InfoSection
                    icon={<Building className="w-6 h-6 text-blue-500" />}
                    title="Upgrade Requirements"
                >
                    <p className="text-foreground/90 mb-4">
                        To upgrade the Headquarters to higher levels, both resources and building requirements must be met at each stage.
                    </p>
                    <p className="text-foreground/90">
                        It&apos;s crucial to advance construction gradually to facilitate smooth progression to the next level of the headquarters and to spare enough resources. Failing to upgrade the Headquarters may result in having a weak squad, as this building determines the cap for Hero levels.
                    </p>
                </InfoSection>

                <InfoSection
                    icon={<AlertTriangle className="w-6 h-6 text-yellow-500" />}
                    title="Important Note"
                >
                    <p className="text-foreground/90 italic">
                        To unlock the new Headquarters level, the locking building must be leveled up to the HQ level before proceeding. Consider that the amounts are an average as it depends on the researches you did.
                    </p>
                </InfoSection>

                <InfoSection
                    icon={<HelpCircle className="w-6 h-6 text-green-500" />}
                    title="Upgrade Requirements Table"
                >
                    <div className="overflow-x-auto mt-4">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell>HQ to unlock</TableCell>
                                    <TableCell>First Building</TableCell>
                                    <TableCell>Second Building</TableCell>
                                    <TableCell>Iron</TableCell>
                                    <TableCell>Food</TableCell>
                                    <TableCell>Gold</TableCell>
                                    <TableCell>Days</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.hqUnlock}</TableCell>
                                        <TableCell>{row.firstBuilding}</TableCell>
                                        <TableCell>{row.secondBuilding}</TableCell>
                                        <TableCell>{row.iron}</TableCell>
                                        <TableCell>{row.food}</TableCell>
                                        <TableCell>{row.gold}</TableCell>
                                        <TableCell>{row.days}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default LevelUpRequirements;