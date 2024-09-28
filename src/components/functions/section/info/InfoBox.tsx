export const InfoBox: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
    <div className="flex items-start space-x-3 p-4 bg-secondary/20 rounded-lg">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-primary mb-1">{title}</h4>
            <p className="text-sm text-foreground/80">{content}</p>
        </div>
    </div>
);