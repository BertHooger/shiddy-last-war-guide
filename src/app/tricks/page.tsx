import { Suspense } from 'react';
import TricksPageContent from '@/components/pages/TricksPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function TricksPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <TricksPageContent />
        </Suspense>
    );
}