import { Suspense } from 'react';
import TroopsPageContent from '@/components/pages/TroopsPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function TroopsPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <TroopsPageContent />
        </Suspense>
    );
}