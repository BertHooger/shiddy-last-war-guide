import { Suspense } from 'react';
import SeasonOnePageContent from '@/components/pages/SeasonOnePageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function SeasonOnePage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <SeasonOnePageContent />
        </Suspense>
    );
}