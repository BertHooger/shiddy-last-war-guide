import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ThemeToggle = dynamic(
    () => import('./ThemeToggle').then((mod) => mod.ThemeToggle),
    {
        loading: () => <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>,
        ssr: false
    }
);

const DynamicThemeToggle = () => (
    <Suspense fallback={<div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>}>
        <ThemeToggle />
    </Suspense>
);

export default DynamicThemeToggle;