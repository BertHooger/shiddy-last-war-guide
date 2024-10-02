import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Header = dynamic(
    () => import('../Header'),
    {
        loading: () => <div className="h-16 w-full bg-gray-200 animate-pulse"></div>,
        ssr: true // Changed to true as headers are typically rendered on the server
    }
);

const DynamicHeader = () => (
    <Suspense fallback={<div className="h-16 w-full bg-gray-200 animate-pulse"></div>}>
        <Header />
    </Suspense>
);

export default DynamicHeader;