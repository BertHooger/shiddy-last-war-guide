import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { SendToBack, Map, Video } from 'lucide-react';

const ServerWarsTeleportingComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <SendToBack className="w-8 h-8 mr-2" />
                    Server Wars Teleporting
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-2/3 space-y-6">
                        <InfoSection
                            icon={<Map className="w-6 h-6 text-blue-500" />}
                            title="Teleporting to Different Servers"
                        >
                            <p className="text-foreground/90 mb-4">
                                When your server is part of a server war (warzone duel), you can teleport to different servers than the one allowed by the Attack feature of the Duel VS.
                            </p>
                            <p className="text-foreground/90 mb-4">
                                To do so, follow these steps:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-foreground/90">
                                <li>Go to the warzone duel icon</li>
                                <li>On the Match Info panel, click on the &quot;grouping&quot; button</li>
                                <li>From the next screen, scroll and select to which server you want to teleport</li>
                                <li>Only available servers will have the green &quot;Go button&quot;</li>
                            </ol>
                        </InfoSection>

                        <InfoSection
                            icon={<SendToBack className="w-6 h-6 text-green-500" />}
                            title="Usage and Availability"
                        >
                            <p className="text-foreground/90 mb-4">
                                This feature might not be available in all server wars. However, you might want to use this when:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                                <li>You need to do more kills to gain Duel VS points</li>
                                <li>Your opponent is either too strong or shielded</li>
                            </ul>
                        </InfoSection>
                    </div>

                    <div className="md:w-1/3 mt-6 md:mt-0">
                        <InfoSection
                            icon={<Video className="w-6 h-6 text-red-500" />}
                            title="Video Demonstration"
                        >
                            <div className="mt-2">
                                <video
                                    src="/videos/season-one/video-2.mp4"
                                    controls
                                    className="w-full rounded-lg shadow-md phone-frame"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </InfoSection>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ServerWarsTeleportingComponent;