'use client';

import React from 'react';
import { Button } from "@/components/ui/button"
import { isAndroid, isIOS, isMacOs } from 'react-device-detect';

const DownloadButton = () => {
    const handleDownload = () => {
        let url;
        if (isAndroid || isMacOs) {
            url = 'https://play.google.com/store/apps/details?id=com.fun.lastwar.gp&pcampaignid=web_share';
        } else if (isIOS) {
            url = 'https://apps.apple.com/pl/app/last-war-survival/id6448786147';
        } else {
            url = 'https://www.bluestacks.com/apps/strategy/last-warsurvival-game-on-pc.html';
        }
        window.open(url, '_blank');
    };

    return (
        <Button
            className="bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleDownload}
        >
            Download Game
        </Button>
    );
};

export default DownloadButton;