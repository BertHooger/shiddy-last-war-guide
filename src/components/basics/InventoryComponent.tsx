import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoSection } from '@/components/functions/section/info/InfoSectionProps';
import { Package, AlertTriangle } from 'lucide-react';

const InventoryComponent: React.FC = () => {
    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
                    <Package className="w-8 h-8 mr-2" />
                    Inventory
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3 space-y-4">
                        <InfoSection icon={<Package className="w-6 h-6 text-blue-500" />} title="Resource Storage">
                            <p className="text-foreground/90">
                                When you win chests or resource rewards, they are stored in your inventory. From there, once opened, they are added to the corresponding resource meters.
                            </p>
                        </InfoSection>

                        <InfoSection icon={<AlertTriangle className="w-6 h-6 text-yellow-500" />} title="Important Note">
                            <p className="text-foreground/90 font-semibold">
                                It&apos;s advisable to keep resources in the inventory until needed.
                            </p>
                            <p className="text-foreground/90 mt-2">
                                During enemy attacks resulting in loss, part of these resources may be taken by the attacker.
                            </p>
                        </InfoSection>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-start">
                        <div className="relative w-full aspect-w-3 aspect-h-2">
                            <Image
                                src="/images/basics/icons/inventory.png"
                                alt="Inventory Image"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default InventoryComponent;