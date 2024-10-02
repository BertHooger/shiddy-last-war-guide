import React from 'react';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ActionItem {
    area: string;
    action: string;
    iconUrls?: string[];
    day: string;
    armsRacePhase: string;
}

const actionItems: ActionItem[] = [
    { area: "Buildings", action: "Upgrade", iconUrls: ["/images/events/table/upgrade.png"], day: "2,5", armsRacePhase: "City Building" },
    { area: "Buildings", action: "Use Speedups (construct speedup or generic speedup, any length)", iconUrls: ["/images/events/table/speedup.png", "/images/events/table/speedup-2.png"], day: "2,5,6", armsRacePhase: "City Building" },
    { area: "Truck", action: "Dispatch Legendary Truck (Golden)", iconUrls: ["/images/events/table/ur-truck.png"], day: "2,6", armsRacePhase: "Secret mobile squad" },
    { area: "Start", action: "Legendary Secret Mission (Golden)", iconUrls: ["/images/events/table/mission.png"], day: "2,6", armsRacePhase: "Secret mobile squad" },
    { area: "Food/Iron/Gold", action: "Gathering", iconUrls: ["/images/events/table/gold-mine-map.png", "/images/events/table/iron-mine-map.png", "/images/events/table/food-field-map.png"], day: "1", armsRacePhase: "Soldiers" },
    { area: "Soldiers", action: "Training, upgrading", day: "5", armsRacePhase: "Unit Progression" },
    { area: "Soldiers", action: "Use Speedups (training speedup or generic speedup, any length)", iconUrls: ["/images/events/table/train-speedup.png", "/images/events/table/speedup-2.png"], day: "6", armsRacePhase: "Unit Progression" },
    { area: "Hospitals", action: "Use Speed ups (healing speedup or generic speedup, any length)", iconUrls: ["/images/events/table/heal-speedup.png", "/images/events/table/speedup-2.png"], day: "6", armsRacePhase: "" },
    { area: "Technology Center", action: "Complete Research", iconUrls: ["/images/events/table/research-speedup.png", "/images/events/table/speedup-2.png"], day: "3.5", armsRacePhase: "Technological Research" },
    { area: "Valor Badge", action: "Consume valor badges by launching researches of section “Alliance Duel”, “Intercity Truck” or “Special Forces”", iconUrls: ["/images/events/table/valor-badge.png"], day: "3", armsRacePhase: "Technological Research" },
    { area: "Drone", action: "Use Drone Combat Data and Drone Parts", iconUrls: ["/images/events/table/drone-data.png", "/images/events/table/drone-parts.png"], day: "1", armsRacePhase: "Boost Drone" },
    { area: "Drone", action: "Open Drone Data chip chests in inventory (starting from day 85, not to be confused with Drone Component)", iconUrls: ["/images/events/table/drone-chip-chest-epic.png"], day: "1", armsRacePhase: "Boost Drone" },
    { area: "Drone", action: "Open Drone Component chest in inventory (not to be confused with Drone Chip chests) (any chest level)", iconUrls: ["/images/events/table/drone-chest.png"], day: "3", armsRacePhase: "" },
    { area: "Heroes", action: "EXP boost", iconUrls: ["/images/events/table/hero-exp-purple.png"], day: "1,4", armsRacePhase: "Hero advancement" },
    { area: "Heroes", action: "Use shards to increase hero class Use skill medals to increase hero skill", iconUrls: ["/images/events/table/shard-legendary.png", "/images/events/table/hero-skill-medals.png"], day: "4", armsRacePhase: "Heroes" },
    { area: "Heroes", action: "This is available starting from RA virus molecule Season 1 – The Crimson Plague: You can both use universal exclusive weapon shards or Hero specific Exclusive Weapon shard to obtain these points ( for example Kimberly’s Exclusive weapon Rocket Shadow, or any other hero specific exclusive weapon shard ).", iconUrls: ["/images/events/table/kimberly-exclusive-weapon-shard.png", "/images/events/table/universal-exclusive-weapon-shard.png"], day: "4", armsRacePhase: "" },
    { area: "Tavern", action: "Use the Legendary Recruitment Tickets in the heroes section to recruit heroes (to not be confused with recruit survivor)", iconUrls: ["/images/events/table/recruit-hero.png"], day: "4", armsRacePhase: "Hero Advancement" },
    { area: "Tavern", action: "Recruit Survivors(to not be confused with recruit hero)", iconUrls: ["/images/events/table/recruit-survivor.png"], day: "4", armsRacePhase: "Hero Advancement" },
    { area: "Tavern", action: "Use the Hero’s Return Recruitment Tickets in the heroes section to recruit returning heroes (to not be confused with recruit survivor)", iconUrls: ["/images/events/table/heroes-return-recruitment-ticket.png"], day: "4", armsRacePhase: "Hero Advancement" },
    { area: "Radar", action: "Perform mission that consume stamina", iconUrls: ["/images/events/table/stamina.png"], day: "1, 3, 5", armsRacePhase: "Boost Drone" },
    { area: "Attacks/Rally	", action: "Stamina consumption", iconUrls: ["/images/events/table/stamina.png"], day: "7", armsRacePhase: "" },
];

const AllianceDuelVSActionTable: React.FC = () => {
    return (
        <Card className="w-full mb-8 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-blue-200">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-blue-600">
                    Alliance Duel VS Actions
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-foreground/90 mb-6">
                    Here is a schedule detailing the optimal timing for various actions to maximize points in both the duel and the arms race.
                </p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px]">Area</TableHead>
                            <TableHead>Action</TableHead>
                            <TableHead className="w-[100px]">Day</TableHead>
                            <TableHead>Arms Race Phase</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {actionItems.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.area}</TableCell>
                                <TableCell>
                                    <div className="flex items-center justify-between">
                                        <span>{item.action}</span>
                                        {item.iconUrls && item.iconUrls.length > 0 && (
                                            <div className="flex ml-4 items-center">
                                                {item.iconUrls.map((url, iconIndex) => (
                                                    <div key={iconIndex} className="relative w-10 h-10 ml-2">
                                                        <Image
                                                            src={url}
                                                            alt={`Icon ${iconIndex + 1} for ${item.action}`}
                                                            layout="fill"
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell>{item.day}</TableCell>
                                <TableCell>{item.armsRacePhase}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default AllianceDuelVSActionTable;