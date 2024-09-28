import React from 'react';
import { InfoSectionProps } from '@/lib/interfaces/section/infoSection';

export const InfoSection: React.FC<InfoSectionProps> = ({ icon, title, children }) => {
    return (
        <div className="bg-secondary/20 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
                {icon}
                <span className="ml-2">{title}</span>
            </h3>
            {children}
        </div>
    );
};