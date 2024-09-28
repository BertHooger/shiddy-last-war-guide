import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Users, Recycle, Hammer } from 'lucide-react';

const LowTroopGatheringComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Users className="w-8 h-8 mr-2" />
                    Gather Resources with Low Troop Count
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <InfoSection
                    icon={<Users className="w-6 h-6 text-blue-500" />}
                    title="Low Troop Scenario"
                >
                    <p className="text-foreground/90 mb-4">
                        When you have a low amount of troops available in your drill grounds (for example, after the wars on Saturday),
                        you might not be able to send all squads to gather resources since each squad needs a certain amount of troops to be deployed.
                    </p>
                </InfoSection>

                <InfoSection
                    icon={<Recycle className="w-6 h-6 text-green-500" />}
                    title="Solution Strategy"
                >
                    <p className="text-foreground/90 mb-2">This can be solved in the following way:</p>
                    <ol className="list-decimal list-inside space-y-2 text-foreground/90">
                        <li>Recall your squads to the base so that you can change them.</li>
                        <li>Remove all heroes from each squad and add only 1 hero for each squad, possibly those that have a low value in the attribute command.</li>
                        <li>Now send squads to gather; each squad will use a much lower amount of troops, so you will be able to send all of them.</li>
                    </ol>
                </InfoSection>

                <InfoSection
                    icon={<Hammer className="w-6 h-6 text-yellow-500" />}
                    title="Quick Troop Training"
                >
                    <p className="text-foreground/90">
                        Additionally, you can just train level 1 soldiers with any barracks to have almost immediately some troops available, as training level 1 soldiers is fast.
                    </p>
                </InfoSection>
            </CardContent>
        </Card>
    );
};

export default LowTroopGatheringComponent;