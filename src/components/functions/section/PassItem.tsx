import React from "react";
import Image from "next/image";

export const PassItem: React.FC<{ name: string; icon: string }> = ({ name, icon }) => (
    <div className="flex items-center space-x-2">
        {icon && (
            <Image
                src={icon}
                alt={name}
                width={24}
                height={24}
                className="inline-block"
            />
        )}
        <span>{name}</span>
    </div>
);