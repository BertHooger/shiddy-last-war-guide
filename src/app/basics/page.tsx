import { Suspense } from 'react';
import BasicPageContent from '@/components/pages/events/basics/BasicPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function BasicsPageContent() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <BasicPageContent />
        </Suspense>
    );
}