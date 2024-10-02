"use client"

import { useState, useEffect, lazy, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Navigation from "@/components/functions/navigation/Navigation";
import LoadingSpinner from "@/components/functions/theme/LoadingSpinner";
import ErrorBoundary from "@/components/functions/security/ErrorBoundary";
import { Section } from "@/lib/interfaces/section/section";

const EventIntroduction = lazy(() => import('@/components/events/EventIntroduction'));
const EventRewards = lazy(() => import('@/components/events/EventRewards'))
const EventCityBuilding = lazy(() => import('@/components/events/EventCityBuilding'))
const EventUnit = lazy(() => import('@/components/events/EventUnit'))
const EventTech = lazy(() => import('@/components/events/EventTech'))
const EventDrone = lazy(() => import('@/components/events/EventDrone'))
const EventStrategy = lazy(() => import('@/components/events/EventStrategy'))

const Sections: Section[] = [
    { title: 'Introduction', id: 'intro', component: EventIntroduction },
    { title: 'Rewards', id: 'rewards', component: EventRewards },
    { title: 'Building', id: 'building', component: EventCityBuilding },
    { title: 'Units', id: 'unit', component: EventUnit },
    { title: 'Tech', id: 'tech', component: EventTech },
    { title: 'Drone', id: 'drone', component: EventDrone },
    { title: 'Strategy', id: 'strategy', component: EventStrategy },
]

function EventPageContent() {
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
                <title>{`${selectedSection.title} | Event Page`}</title>
                <meta name="description" content={`Information about ${selectedSection.title} in our event.`} />
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

export default EventPageContent;