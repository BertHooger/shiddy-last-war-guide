import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RAVirusGoals: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">RA Virus Goals</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p>
                            You can get chest rewards the more infect / cure / spread virus activities you do. It seems there is no upper limit on how many rewards you can get, but the activities to gain those points consume stamina, so your limit is your stamina.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                        <Image
                            src="/images/season-one/virus/ra-virus-goals.png"
                            alt="RA Virus Goals"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default RAVirusGoals;