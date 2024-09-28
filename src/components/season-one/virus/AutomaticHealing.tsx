import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AutomaticHealing: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Infect Virus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p>
                    If you don’t get more infected and no one heals you, you will slowly heal based on the debuffs timers and finally reach infection stack 0. But as you can see from the images above it can take quite some time.
                </p>
                <p>
                    So better to treat this virus immediately… let’s see how.
                </p>
            </CardContent>
        </Card>
    );
};

export default AutomaticHealing;