import { Suspense } from 'react';
import AllianceExercisePageContent from '@/components/pages/events/alliance/AllianceEventPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function EventPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <AllianceExercisePageContent />
        </Suspense>
    );
}