export const VideoSection: React.FC<{ src: string }> = ({ src }) => (
    <div className="phone-frame">
        <div className="volume-button"></div>
        <div className="volume-button"></div>
        <div className="power-button"></div>
        <div className="screen">
            <video
                src={src}
                controls
                className="w-full h-full object-cover"
            >
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
);