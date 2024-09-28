import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Calendar, Flag, Crown } from 'lucide-react';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';

const CityRulesAndSchedule: React.FC = () => {
    const cityRules = [
        "Alliances can declare war on up to 2 cities per day (separate from city capture daily limit).",
        "Alliance territory must connect to the target city through owned Military Strongholds.",
        "Each alliance can only declare war on one City at a time.",
        "War declaration duration is 1 hour.",
        "Alliances can capture up to 6 Cities in the same Warzone.",
        "Alliances can capture up to 6 additional Cities in other Warzones during the season.",
        "Capturing a City increases the maximum number of Military Strongholds in that Warzone.",
        "War declaration requires capturing at least one adjacent Military Stronghold.",
        "After entering war protection status, cities are protected until 12:00 on the next Declaration Day (Server Time), 6 days later."
    ];

    const scheduleItems = [
        { day: 4, description: "Lv. 1 cities open for war declaration" },
        { day: 7, description: "Lv. 2 cities open for war declaration" },
        { day: 11, description: "Lv. 3 cities open for war declaration" },
        { day: 14, description: "Lv. 4 cities open for war declaration" },
        { day: 18, description: "Lv. 5 cities open for war declaration" },
        { day: 21, description: "Lv. 6 cities open for war declaration" },
        { day: 28, description: "City of Apocalypse open for war declaration" }
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Flag className="w-8 h-8 mr-2" />
                    City Rules and Unlock Schedule
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <InfoSection icon={<Check className="w-6 h-6 text-green-500" />} title="City Capture Rules">
                    <ul className="space-y-2">
                        {cityRules.map((rule, index) => (
                            <li key={index} className="flex items-start text-foreground/90">
                                <Check className="mr-2 mt-1 text-green-500 flex-shrink-0" />
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ul>
                </InfoSection>

                <InfoSection icon={<Crown className="w-6 h-6 text-yellow-500" />} title="Capitol Rules">
                    <p className="text-foreground/90">
                        The Alliance that captured the Capitol before the season event will continue to hold it and use ministries/hats until day 28 of season 1, when the Capitol will be open for capture again.
                    </p>
                </InfoSection>

                <InfoSection icon={<Calendar className="w-6 h-6 text-blue-500" />} title="City Unlock Schedule">
                    <ul className="space-y-2">
                        {scheduleItems.map((item, index) => (
                            <li key={index} className="flex items-center text-foreground/90">
                                <Calendar className="mr-2 text-blue-500 flex-shrink-0" />
                                <span className="font-semibold mr-2">Day {item.day}:</span>
                                <span>{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default CityRulesAndSchedule;