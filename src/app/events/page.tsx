import { Suspense } from 'react';
import EventPageContent from '@/components/pages/EventPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function EventPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <EventPageContent />
        </Suspense>
    );
}