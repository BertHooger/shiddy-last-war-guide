import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Treatments: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Treatments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p>
                    Treatments can reduce virus intensity, and overcoming other commanders can help spread the infection.
                </p>
                <p>
                    To treat an ally click on his base and then on the symbol
                    <Image
                        src="/images/season-one/virus/treatment-indicator.png"
                        alt="Treatment Indicator"
                        width={20}
                        height={20}
                        className="inline-block mx-1"
                    />,
                    your airplane (similar to scout) will go and reduce the infection by 1. This will consume your immune protein count.
                </p>
                <p>
                    To be cured share your base location in your alliance chat and ask for being cured.
                </p>

                <div className="flex justify-center space-x-4">
                    <Image
                        src="/images/season-one/virus/treatment-1.png"
                        alt="Treatment Image 1"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md"
                    />
                    <Image
                        src="/images/season-one/virus/treatment-2.png"
                        alt="Treatment Image 2"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <p>
                            But here come the interesting part: For each healing you do you receive as reward a gene fragment (type IV,V or VI).
                        </p>
                        <p>
                            Check your mail -&gt; Event section and claim your rewards
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <Image
                            src="/images/season-one/virus/gene-fragment-reward.png"
                            alt="Gene Fragment Reward"
                            width={200}
                            height={300}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Treatments;