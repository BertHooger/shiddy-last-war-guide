import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="w-32 h-32 rounded-full animate-spin
                border-t-4 border-b-4 border-primary"></div>
        </div>
    );
};

export default LoadingSpinner;