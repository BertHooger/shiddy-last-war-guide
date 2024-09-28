import React from 'react';
import Image from 'next/image';
import { StarCostTableProps } from '@/lib/interfaces/media/table';

const StarCostTable: React.FC<StarCostTableProps> = ({ data, title, blueprintType }) => {
    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-background text-foreground">
                    <thead>
                        <tr className="bg-secondary">
                            <th className="border border-border p-2 text-left">Level</th>
                            <th className="border border-border p-2 text-left">
                                <Image src="/images/resources/gold.png" alt="Gold" width={20} height={20} className="inline mr-1" />
                                Gold
                            </th>
                            <th className="border border-border p-2 text-left">
                                <Image src="/images/resources/ore.png" alt="Ore" width={20} height={20} className="inline mr-1" />
                                Ore
                            </th>
                            <th className="border border-border p-2 text-left">
                                <Image src="/images/gears/material-dialetric-ceramic.png" alt="Dialetric Ceramic" width={20} height={20} className="inline mr-1" />
                                Dialetric Ceramic
                            </th>
                            <th className="border border-border p-2 text-left">
                                <Image src={`/images/gears/material-${blueprintType.toLowerCase()}-gear-blueprint.png`} alt={`${blueprintType} Blueprint`} width={20} height={20} className="inline mr-1" />
                                Gear Blueprint ({blueprintType})
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-secondary'}>
                                <td className="border border-border p-2 font-medium">{row.level}</td>
                                <td className="border border-border p-2">{row.gold}</td>
                                <td className="border border-border p-2">{row.ore}</td>
                                <td className="border border-border p-2">{row.ceramic}</td>
                                <td className="border border-border p-2">{row.blueprint}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StarCostTable;