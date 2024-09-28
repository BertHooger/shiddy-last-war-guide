import { Suspense } from 'react';
import GearPageContent from '@/components/pages/GearPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function GearPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <GearPageContent />
        </Suspense>
    );
}