/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dailyTasksImages } from '../ImageProps';

const DailyTasksComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Daily Tasks Diamond Rewards - Up to 30 Diamonds</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3 space-y-4">
                    <p>
                        Even if you already received all Daily Tasks rewards by opening the 5 chests, execute these actions to receive the 10 diamonds for each, if not already executed:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Recruit Heroes 1 Time</li>
                        <li>Attack Commanders 1 Time (best to attack those without an alliance to avoid revenge)</li>
                        <li>Plunder others’ Epic or Legendary Secret Task 1 Time</li>
                    </ul>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center space-y-4">
                    <Image
                        {...dailyTasksImages.dailyTask1} // Use the centralized image data
                        className="rounded-lg shadow-md"
                    />
                    <Image
                        {...dailyTasksImages.dailyTask2} // Use the centralized image data
                        className="rounded-lg shadow-md"
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default DailyTasksComponent;