import React from "react";

export const InfoSection: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-secondary/20 p-4 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h3>
        {children}
    </div>
);
