import { Suspense } from 'react';
import AllianceDuelPageContent from '@/components/pages/events/alliance/duel/AllianceDuelPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function EventPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <AllianceDuelPageContent />
        </Suspense>
    );
}