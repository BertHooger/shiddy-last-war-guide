import { Suspense } from 'react';
import HeroPageContent from '@/components/pages/HeroPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function HeroPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <HeroPageContent />
        </Suspense>
    );
}