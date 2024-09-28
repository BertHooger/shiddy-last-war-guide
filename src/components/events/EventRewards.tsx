import React, { useState } from 'react';
import Image from 'next/image';
import Gallery from '../functions/blocks/image/Gallery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const EventRewards: React.FC = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const galleryImages = [
        { src: "/images/events/bronze-chest.png", alt: "Bronze Chest", caption: "Bronze Chest - 2 Arms Race Badges" },
        { src: "/images/events/silver-chest.png", alt: "Silver Chest", caption: "Silver Chest - 8 Arms Race Badges" },
        { src: "/images/events/gold-chest.png", alt: "Gold Chest", caption: "Gold Chest - 18 Arms Race Badges" },
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Gift className="w-8 h-8 mr-2" />
                    Rewards
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg text-foreground/90">
                    Each phase allows you to obtain different rewards:
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <TooltipProvider>
                        <Tooltip open={showTooltip}>
                            <TooltipTrigger asChild>
                                <div
                                    className="relative"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    <Image
                                        src="/images/events/todays-goal-chests.png"
                                        alt="Current phase chests"
                                        width={407}
                                        height={111}
                                        className="rounded-lg shadow-md"
                                    />
                                    <p className="mt-2 text-center text-sm font-medium">Current phase chests (The large red/blue/orange chests)</p>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-sm">
                                <p>As you score points, the progress bar will fill green, gradually allowing you to open large chests (red/blue/orange) that have various rewards.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <div className="relative">
                        <Image
                            src="/images/events/current-phase-chests.png"
                            alt="Today's goal chests"
                            width={407}
                            height={111}
                            className="rounded-lg shadow-md"
                        />
                        <p className="mt-2 text-center text-sm font-medium">Today&apos;s goal chests (Smallest bronze/silver/gold chests)</p>
                    </div>
                </div>

                <ul className="list-disc pl-5 text-foreground/90">
                    <li>Overall daily ranking rewards</li>
                </ul>

                <div className="mt-8">
                    <h3 className="text-xl font-bold text-secondary mb-4">Current phase rewards</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-foreground/90 mb-2">
                                <strong>Arms Race Badge</strong> can always be found in chests in this quantity:
                            </p>
                            <ul className="list-disc pl-5 text-foreground/90">
                                <li>First chest: 1 <strong>Arms Race Badge</strong></li>
                                <li>Second chest: 2 <strong>Arms Race Badge</strong></li>
                                <li>Third chest: 3 <strong>Arms Race Badge</strong></li>
                            </ul>
                        </div>
                        <div className="md:w-1/3">
                            <Image
                                src="/images/events/arms-race-card.png"
                                alt="Arms Race Badge"
                                width={200}
                                height={200}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-secondary mb-4">Opening chests of today&apos;s goal</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2">
                            <p className="text-lg text-foreground/90 mb-4">
                                Every time you open a chest you get an <strong>Arms Race Badge</strong> as described in the previous paragraph.
                            </p>
                            <p className="text-lg text-foreground/90 mb-4">
                                Once you reach 2 / 8 / 18 <strong>Arms Race Badges</strong>, the bronze/silver/gold chests containing very important prizes are opened:
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Gallery images={galleryImages} />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-bold text-secondary mb-4">Overall daily ranking rewards</h3>
                    <p className="text-lg text-foreground/90 mb-4">
                        Finally, there are the rewards for the daily general ranking.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2 flex flex-col">
                            <p className="text-center font-bold mb-2">Overall daily ranking rewards</p>
                            <Image
                                src="/images/events/daily-ranking-rewards.png"
                                alt="Daily Ranking Rewards"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-1/2 flex flex-col">
                            <p className="text-center font-bold mb-2 flex items-center justify-center">
                                Phases
                            </p>
                            <Image
                                src="/images/events/phases-schedule.png"
                                alt="Phases Schedule"
                                width={400}
                                height={300}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-lg text-foreground/90 flex items-center flex-wrap">
                            <span>You can check the schedule of the phases by clicking on the upper left calendar icon</span>
                            <span className="inline-flex items-center mx-1">
                                <Image
                                    src="/images/events/calendar.png"
                                    alt="Calendar"
                                    width={35}
                                    height={35}
                                />
                            </span>
                            <span>inside the Arms Race Event page.</span>
                        </div>
                        <p className="text-lg text-foreground/90 mt-2">
                            The time can change from day to day, but the order of the phases is always the same.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EventRewards;