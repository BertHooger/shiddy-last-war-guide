import React from 'react';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Info, Shield } from 'lucide-react';

const DangerousAutoRally: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <AlertTriangle className="w-8 h-8 mr-2 text-destructive" />
                    Dangerous Auto-Rally
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <InfoSection icon={<Info className="w-6 h-6 text-primary" />} title="The Risk">
                    <p className="text-foreground/90 mb-4">
                        In this new world, auto-rally can be dangerous. You might be involved in rallies while offline, leading to unexpected infections.
                    </p>
                    <div className="bg-destructive/10 p-3 rounded-md">
                        <p className="text-foreground/90 font-semibold">
                            Important: It is currently not possible to disable the auto-rally feature. The &quot;Ignore all-out attacks&quot; setting does not solve this issue.
                        </p>
                    </div>
                </InfoSection>

                <InfoSection icon={<Shield className="w-6 h-6 text-primary" />} title="Solution">
                    <p className="text-foreground/90 mb-2">To mitigate this risk, you can:</p>
                    <ul className="list-disc list-inside text-foreground/90">
                        <li>Send all troops to gather resources on tiles, preventing them from being included in rallies.</li>
                    </ul>
                </InfoSection>

                <InfoSection icon={<Info className="w-6 h-6 text-primary" />} title="Impact">
                    <p className="text-foreground/90">
                        If your squad gets involved in an auto-rally, it typically only includes 5 troops. While troop loss may be minimal, your infection stacks could increase significantly if involved in multiple rallies.
                    </p>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default DangerousAutoRally;