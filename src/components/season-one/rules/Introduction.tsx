import React from 'react';
import VideoContent from '@/components/functions/blocks/VideoContent';

const Introduction: React.FC = () => {
    const videos = [
        { src: '/videos/season-one/video-1-intro.mp4', title: 'Map Season One' },
    ];

    return (
        <VideoContent
            title="Overview of the new map"
            content={
                <>
                    <p>This is how the map will look like at the beginning of season one.</p>
                </>
            }
            videos={videos}
            videoPosition="bottom"
        />
    );
};

export default Introduction;