"use client"

import React, { useState, useRef, useEffect } from 'react';
import { VideoProps, ContentProps } from '@/lib/interfaces/media/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX, Settings } from 'lucide-react';

const VideoPlayer: React.FC<VideoProps> = ({ src, poster }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (videoRef.current) {
                setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
            }
        }

        const handleMouseEnter = () => setShowControls(true);
        const handleMouseLeave = () => setShowControls(false);

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('timeupdate', handleTimeUpdate);
            videoElement.addEventListener('mouseenter',
                handleMouseEnter);
            videoElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('timeupdate',
                    handleTimeUpdate);
                videoElement.removeEventListener('mouseenter', handleMouseEnter);
                videoElement.removeEventListener('mouseleave', handleMouseLeave);

            }
        }
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);

        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted
                = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const progressBar = event.currentTarget;
        const clickPosition = (event.clientX - progressBar.getBoundingClientRect().left)
            / progressBar.offsetWidth;
        if (videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration * clickPosition;
        }
    };

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={src}
                poster={poster}
                playsInline
                preload="metadata"
                onMouseMove={() => setShowControls(true)} // Show controls on mouse move
            />
            {showControls && ( // Conditionally render controls
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center transition-opacity duration-300">
                    <button onClick={togglePlay} className="focus:outline-none">
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <div className="flex items-center">
                        <div
                            className="h-2 bg-gray-300 rounded-full mr-2 cursor-pointer"
                            style={{ width: `${progress}%` }}
                            onClick={handleProgressClick}
                        >
                            <div className="h-full bg-white rounded-full"></div> {/* Progress indicator */}
                        </div>
                        <button onClick={toggleMute} className="focus:outline-none">
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        {/* Add more controls here if needed (e.g., fullscreen, settings) */}
                        <button className="focus:outline-none ml-2">
                            <Settings size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


const VideoContent: React.FC<ContentProps> = ({ title, content, videos = [], videoPosition = 'bottom' }) => {
    const renderVideos = () => {
        if (videos.length === 0) return null;

        if (videoPosition === 'grid') {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {videos.map((video, index) => renderVideoWithPhoneBorder(video, index))}
                </div>
            );
        }

        return (
            <div className={`flex flex-wrap gap-8 ${videoPosition === 'right' ? 'justify-start' : 'justify-center'}`}>
                {videos.map((video, index) => renderVideoWithPhoneBorder(video, index))}
            </div>
        );
    };

    const renderVideoWithPhoneBorder = (video: VideoProps, index: number) => (
        <div key={index} className="flex flex-col items-center">
            <div className="border-8 border-gray-800 rounded-3xl overflow-hidden shadow-lg bg-gray-800">
                <div className="relative w-64 h-[450px]">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center justify-center">
                        <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    <VideoPlayer {...video} />
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                        <div className="w-12 h-12 rounded-full border-2 border-gray-600"></div>
                    </div>
                </div>
            </div>
            <p className="mt-2 text-center text-sm">{video.title}</p>
        </div>
    );

    const isRightPosition = videoPosition === 'right';

    return (
        <Card className="w-full mb-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className={`flex ${isRightPosition ? 'flex-col md:flex-row' : 'flex-col'} gap-6 items-start`}>
                    {videoPosition === 'top' && renderVideos()}
                    <div className={isRightPosition ? 'w-full md:w-1/2' : 'w-full'}>
                        {content}
                    </div>
                    {(videoPosition === 'bottom' || isRightPosition) && (
                        <div className={isRightPosition ? 'w-full md:w-1/2' : 'w-full'}>
                            {renderVideos()}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default VideoContent;