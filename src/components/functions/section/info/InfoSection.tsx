export const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-secondary/20 p-4 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
        {children}
    </div>
);
