import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Footer = dynamic(
    () => import('../Footer').then((mod) => mod.Footer),
    {
        loading: () => <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>,
        ssr: false
    }
);

const DynamicFooter = () => (
    <Suspense fallback={<div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>}>
        <Footer />
    </Suspense>
);

export default DynamicFooter;