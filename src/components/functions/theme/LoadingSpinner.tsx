"use client"

import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
    const [showRefreshMessage, setShowRefreshMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRefreshMessage(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-64">
            <div className="w-32 h-32 rounded-full animate-spin
        border-t-4 border-b-4 border-primary mb-4"></div>
            {showRefreshMessage && (
                <p className="text-sm text-gray-600 mt-2">
                    If the site hasn&apos;t loaded, please try refreshing the page.
                </p>
            )}
        </div>
    );
};

export default LoadingSpinner;