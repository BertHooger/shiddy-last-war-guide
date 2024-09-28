import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ArmsRaceStrategy: React.FC = () => {
    const strategyData = [
        { area: "Buildings", action: "Level up", phase: "City Building" },
        { area: "Troops/Soldiers", action: "Training, updating", phase: "Unit Progression" },
        { area: "Technology Center", action: "Complete searches", phase: "Tech Research" },
        { area: "Drone", action: "Use of drone combat points", phase: "Drone Boost" },
        { area: "Heroes", action: "EXP Boost, Recruit Heroes", phase: "Hero Advancement" },
        { area: "Tavern", action: "Recruit Heroes", phase: "Hero Advancement" },
        { area: "Radar", action: "Perform mission by consuming stamina", phase: "Drone Boost" },
        { area: "Attacks/Rally", action: "Stamina consumption", phase: "Drone Boost" },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    Strategy
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90">
                    Arms race rewards are critical to grow at any stage. To secure all the prizes you need to organize the actions you do during the day well.
                </p>
                <p className="text-lg text-foreground/90">
                    Some of these associations are obvious, others less so, below is a summary table of what to do and at which stage:
                </p>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Area</TableHead>
                            <TableHead className="font-bold">Action</TableHead>
                            <TableHead className="font-bold">Arms Race Phase</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {strategyData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.area}</TableCell>
                                <TableCell>{row.action}</TableCell>
                                <TableCell>{row.phase}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Alert>
                    <AlertDescription>
                        <p className="font-bold mb-2">The following actions do not contribute points in any Arms race phase (but they will during the VS duel event which is available later), so they can be done at any time without losing points:</p>
                        <ul className="list-disc list-inside">
                            <li>Heroes: Raise class, use skill medals to upgrade skills</li>
                            <li>Drones: Synthesize drone components</li>
                        </ul>
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
    );
};

export default ArmsRaceStrategy;