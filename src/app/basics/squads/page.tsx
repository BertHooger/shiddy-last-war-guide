import { Suspense } from 'react';
import SquadPageContent from '@/components/pages/events/squad/SquadPageContent';
import LoadingSpinner from '@/components/functions/theme/LoadingSpinner'

export default function SquadPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <SquadPageContent />
        </Suspense>
    );
}