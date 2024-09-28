import React, { useState } from 'react';
import HeroCard from '@/components/functions/theme/HeroCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeroInterface } from '@/lib/interfaces/media/heroInterface';
import { masonData, murphyData, kimberlyData } from '@/lib/data/heroData';

const allHeroes: HeroInterface[] = [masonData, murphyData, kimberlyData];

export const HeroShowcase: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [filterRarity, setFilterRarity] = useState('all');

    const filteredHeroes = allHeroes.filter(hero => {
        const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            hero.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || hero.type.toLowerCase() === filterType.toLowerCase();
        const matchesRarity = filterRarity === 'all' || hero.rarity.toLowerCase() === filterRarity.toLowerCase();
        return matchesSearch && matchesType && matchesRarity;
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Hero Showcase</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Input
                    placeholder="Search heroes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow"
                />
                <Select onValueChange={setFilterType} defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="tank">Tank</SelectItem>
                        <SelectItem value="missile">Missile</SelectItem>
                        <SelectItem value="aircraft">Aircraft</SelectItem>
                    </SelectContent>
                </Select>
                <Select onValueChange={setFilterRarity} defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by rarity" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Rarities</SelectItem>
                        <SelectItem value="ur">UR</SelectItem>
                        <SelectItem value="ssr">SSR</SelectItem>
                        <SelectItem value="sr">SR</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {filteredHeroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero} />
                ))}
            </div>

            {filteredHeroes.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No heroes found matching your criteria.</p>
            )}
        </div>
    );
};

export default HeroShowcase;