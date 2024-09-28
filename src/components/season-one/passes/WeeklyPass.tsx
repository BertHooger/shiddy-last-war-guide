import React from 'react';
import Image from 'next/image';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Gift, Clock } from 'lucide-react';

const WeeklyPass: React.FC = () => {
    const totalBenefits = [
        "Extra Protein Farm: while the weekly pass is active it will produce immune proteins. This feature will expire with the pass.",
        "Instant +250 Virus Resistance bonus. This bonus will expire with the pass.",
        "Marching Speed. This bonus will expire with the pass.",
        "20k Mutant Crystals",
        "500 VIP Points"
    ];

    const dailyBenefits = [
        "50 stamina",
        "20k Mutant Crystals",
        "60 5m generic speed-ups"
    ];

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <CalendarDays className="w-8 h-8 mr-2" />
                    Weekly Pass
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p className="text-lg text-foreground/90">
                            You will be able to purchase this pass during the whole season (48 days).
                        </p>
                        <p className="text-lg text-foreground/90">
                            Once purchased it will last for 7 days. During these 7 days you will have access to the exclusive fifth Protein Farm.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <Image
                            src="/images/season-one/passes/weekly-pass.png"
                            alt="Weekly Pass"
                            width={300}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <InfoSection icon={<Gift className="w-6 h-6 text-primary" />} title="Total Available Benefits">
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                {totalBenefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </InfoSection>
                        <InfoSection icon={<Clock className="w-6 h-6 text-primary" />} title="Daily Benefits">
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                {dailyBenefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <Image
                            src="/images/season-one/passes/weekly-pass-benefits.png"
                            alt="Weekly Pass Benefits"
                            width={300}
                            height={400}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default WeeklyPass;