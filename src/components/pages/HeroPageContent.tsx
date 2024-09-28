"use client"

import { useState, useEffect, lazy, Suspense } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';
import HeroNavigation from "@/components/functions/navigation/HeroNavigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoadingSpinner from "@/components/functions/theme/LoadingSpinner";
import ErrorBoundary from "@/components/functions/security/ErrorBoundary";

import { AnySection } from "@/lib/types/anySection";

const HeroesOverview = lazy(() => import("@/components/heroes/HeroesOverview"));
const HeroAttributes = lazy(() => import("@/components/heroes/HeroAttributes"));
const HeroRarity = lazy(() => import("@/components/heroes/HeroRarity"));
const HeroTypes = lazy(() => import("@/components/heroes/HeroTypes"));
const HeroDefense = lazy(() => import("@/components/heroes/HeroDefense"));
const HeroAttack = lazy(() => import("@/components/heroes/HeroAttack"));
const HeroUpgrades = lazy(() => import("@/components/heroes/HeroUpgrades"));
const ExperienceLevelUpgrade = lazy(() => import("@/components/heroes/ExperienceLevelUpgrade"));
const HeroShowcase = lazy(() => import("@/components/heroes/HeroShowcase"));

const Sections: AnySection[] = [
    { title: 'Overview', id: 'overview', component: HeroesOverview },
    { title: 'Attributes', id: 'attributes', component: HeroAttributes },
    { title: 'Hero Rarity', id: 'rarity', component: HeroRarity },
    { title: 'Hero Types', id: 'types', component: HeroTypes },
    { title: 'Hero Defense', id: 'defense', component: HeroDefense },
    { title: 'Hero Attack', id: 'attack', component: HeroAttack },
    { title: 'Hero Upgrades', id: 'upgrade', component: HeroUpgrades },
    { title: 'Experience Level', id: 'xp', component: ExperienceLevelUpgrade },
    { title: 'Hero Showcase', id: 'showcase', isShowcase: true },
];

function HeroesPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedSection, setSelectedSection] = useState<AnySection>(Sections[0]);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [showShowcase, setShowShowcase] = useState(false);

    useEffect(() => {
        const section = searchParams.get('section');
        const foundSection = Sections.find(s => s.id === section) || Sections[0];
        setSelectedSection(foundSection);
        setShowShowcase(section === 'showcase');
    }, [searchParams]);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSectionChange = (section: AnySection) => {
        if ('isShowcase' in section) {
            setShowShowcase(true);
        } else {
            setSelectedSection(section);
            router.push(`?section=${section.id}`, { scroll: false });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Head>
                <title>{`${selectedSection.title} | Heroes Guide`}</title>
                <meta name="description" content={`Learn about ${selectedSection.title} in our comprehensive heroes guide.`} />
            </Head>
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <HeroNavigation
                    sections={Sections}
                    setSelectedSection={handleSectionChange}
                    selectedSection={selectedSection}
                />

                <div className="space-y-12 mt-8">
                    {'component' in selectedSection && (
                        <ErrorBoundary>
                            <Suspense fallback={<LoadingSpinner />}>
                                <selectedSection.component />
                            </Suspense>
                        </ErrorBoundary>
                    )}

                    <Dialog open={showShowcase} onOpenChange={setShowShowcase}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="mt-4">Open Hero Showcase</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full h-[90vh] overflow-y-auto">
                            <ErrorBoundary>
                                <Suspense fallback={<LoadingSpinner />}>
                                    <HeroShowcase />
                                </Suspense>
                            </ErrorBoundary>
                        </DialogContent>
                    </Dialog>
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

export default HeroesPageContent;