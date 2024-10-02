"use client"

import { useState, useEffect, lazy, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Navigation from "@/components/functions/navigation/Navigation";
import LoadingSpinner from "@/components/functions/theme/LoadingSpinner";
import ErrorBoundary from "@/components/functions/security/ErrorBoundary";
import { Section } from "@/lib/interfaces/section/section";

const AllianceDuelVSIntroduction = lazy(() => import('@/components/events/allianceDuel/AllianceDuelVSIntroduction'))
const AllianceDuelVSStrategy = lazy(() => import('@/components/events/allianceDuel/AllianceDuelVSStrategy'))
const AllianceDuelVSActionTable = lazy(() => import('@/components/events/allianceDuel/AllianceDuelVSTable'))
const AllianceStrategicPreparation = lazy(() => import('@/components/events/allianceDuel/AllianceStrategicPreparation'))
const AllianceDuelVSRewards = lazy(() => import('@/components/events/allianceDuel/AllianceDuelVSRewards'))

const Sections: Section[] = [
    { title: 'Introduction', id: 'introduction', component: AllianceDuelVSIntroduction },
    { title: 'Strategy', id: 'strategy', component: AllianceDuelVSStrategy },
    { title: 'Table', id: 'table', component: AllianceDuelVSActionTable },
    { title: 'Preperation', id: 'prep', component: AllianceStrategicPreparation },
    { title: 'Rewards', id: 'rewards', component: AllianceDuelVSRewards },
];

function AllianceDuelPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedSection, setSelectedSection] = useState<Section>(Sections[0]);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const section = searchParams.get('section');
        const foundSection = Sections.find(s => s.id === section) || Sections[0];
        setSelectedSection(foundSection);
    }, [searchParams]);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSectionChange = (section: Section) => {
        setSelectedSection(section);
        router.push(`?section=${section.id}`, { scroll: false });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Head>
                <title>{`${selectedSection.title} | Alliance Exercise`}</title>
                <meta name="description" content={`Learn about ${selectedSection.title} in our Alliance Exercise guide.`} />
            </Head>
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Navigation
                    sections={Sections}
                    setSelectedSection={handleSectionChange}
                    selectedSection={selectedSection}
                />

                <div className="space-y-12 mt-8">
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            {selectedSection.component && <selectedSection.component />}
                        </Suspense>
                    </ErrorBoundary>
                </div>

                {showBackToTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
                        aria-label="Scroll back to top"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                )}
            </div>
        </>
    );
}

export default AllianceDuelPageContent;