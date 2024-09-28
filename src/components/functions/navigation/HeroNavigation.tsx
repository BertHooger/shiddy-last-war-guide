"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HeroNavigationProps } from '@/lib/interfaces/navigation';

const HeroNavigation: React.FC<HeroNavigationProps> = ({ sections, setSelectedSection, selectedSection }) => {
    const currentSectionIndex = sections.findIndex(s => s.id === selectedSection.id);

    const handlePrevious = () => {
        if (currentSectionIndex > 0) {
            setSelectedSection(sections[currentSectionIndex - 1]);
        }
    };

    const handleNext = () => {
        if (currentSectionIndex < sections.length - 1) {
            setSelectedSection(sections[currentSectionIndex + 1]);
        }
    };

    return (
        <nav className="bg-background border border-border rounded-lg p-4 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentSectionIndex === 0}
                    className="w-full sm:w-auto"
                >
                    Previous
                </Button>

                <Select
                    onValueChange={(value) => {
                        const foundSection = sections.find(s => s.id === value);
                        if (foundSection) {
                            setSelectedSection(foundSection);
                        }
                    }}
                    value={selectedSection.id}
                >
                    <SelectTrigger className="w-full sm:w-64 bg-background text-foreground border-border">
                        <SelectValue placeholder="Select a section" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border shadow-lg">
                        {sections.map((section) => (
                            <SelectItem
                                key={section.id}
                                value={section.id}
                                className="hover:bg-muted focus:bg-muted"
                            >
                                {section.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Button
                    variant="outline"
                    onClick={handleNext}
                    disabled={currentSectionIndex === sections.length - 1}
                    className="w-full sm:w-auto"
                >
                    Next
                </Button>
            </div>
        </nav>
    );
};

export default HeroNavigation;