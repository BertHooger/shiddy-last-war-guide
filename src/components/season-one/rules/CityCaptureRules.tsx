import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CityCaptureRules: React.FC = () => {
    const cityRules = [
        "Alliances can declare war on up to 2 cities per day (this limit is separated from the city capture daily limit).",
        "An Alliance's territory must be connected to the target city to declare war on, through Military Strongholds owned territories.",
        "Each alliance can only declare war on one City at a time",
        "The duration of the war declaration is 1 hour",
        "In the same Warzone, an Alliance can capture up to 6 Cities",
        "During the season, Alliances can also capture up to 6 Cities in other Warzones",
        "After capturing a City, the maximum number of Military Strongholds the Alliance can hold in the target war zone increases (check previous paragraph)",
        "Declaring war on a city requires the Alliance to have captured at least one adjacent Military Stronghold",
        "After the city enters the war protection status, the time lasts until 6 days later, 12:00 on the next Declaration Day Server Time"
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">City capture rules</CardTitle>
            </CardHeader>
            <CardContent>
                <ol className="list-decimal list-inside space-y-2 mb-6">
                    {cityRules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ol>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Capitol rules</h3>
                    <p>
                        The Alliance that captured the Capitol before the season event will continue to hold the Capitol, and will be able to use ministries/hats until day 28 of season 1 when the Capitol will be up to capture again.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default CityCaptureRules;