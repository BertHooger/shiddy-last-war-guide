import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

const EventIntroduction: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <CalendarDays className="w-8 h-8 mr-2" />
                    Arms Race – Daily Challenge with Numerous Rewards
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg text-foreground/90">
                    The Arms Race is a daily challenge offering numerous rewards, pitting you against 10 randomly selected opponents of similar level, both testing your personal skill and competitive spirit.
                </p>
                <p className="text-lg text-foreground/90 flex items-center">
                    You can access Arms Rush through Events
                    <Image src="/images/events/event-icon.png" alt="Event Icon" width={24} height={24} className="mx-2" />
                    Arms race.
                </p>
                <h3 className="text-xl font-bold text-secondary mt-6 mb-2">Introduction</h3>
                <p className="text-lg text-foreground/90">
                    Spanning across six phases, each lasting four hours, participants earn points through various actions, unlocking chests as they progress.
                </p>
                <p className="text-lg text-foreground/90">
                    The event&apos;s difficulty scales with the level of your headquarters, ensuring a challenging experience tailored to your progression.
                </p>
            </CardContent>
        </Card>
    );
};

export default EventIntroduction;