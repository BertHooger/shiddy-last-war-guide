"use client"

import { useState, useEffect, lazy, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Navigation from '@/components/functions/navigation/Navigation';
import LoadingSpinner from "@/components/functions/theme/LoadingSpinner";
import ErrorBoundary from "@/components/functions/security/ErrorBoundary";
import { Section } from "@/lib/interfaces/section/section";

const SeasonOverview = lazy(() => import('@/components/season-one/season/SeasonOneOverview'));
const Introduction = lazy(() => import('@/components/season-one/rules/Introduction'));
const NewS1Resources = lazy(() => import('@/components/season-one/rules/NewResources'));
const NewBuildings = lazy(() => import('@/components/season-one/buildings/NewBuildings'));
const WorldAndMap = lazy(() => import('@/components/season-one/buildings/WorldAndMap'));
const MilitaryBases = lazy(() => import('@/components/season-one/buildings/MilitaryBases'));
const MilitaryStrongholds = lazy(() => import('@/components/season-one/buildings/MilitaryStrongholds'));
const CitiesAndInfluence = lazy(() => import('@/components/season-one/cities/CitiesAndInfluence'));
const AllianceTerritory = lazy(() => import('@/components/season-one/buildings/AllianceTerritory'));
const StrongholdCaptureRules = lazy(() => import('@/components/season-one/rules/StrongholdCaptureRules'));
const StrongholdCaptureRewards = lazy(() => import('@/components/season-one/buildings/StrongholdCaptureRewards'));
const CityRulesAndSchedule = lazy(() => import('@/components/season-one/rules/CityRulesAndSchedule'));
const HeroUpgradesAndWeapons = lazy(() => import('@/components/season-one/rules/HeroUpgradesAndWeapons'));
const ExclusiveWeapons = lazy(() => import('@/components/season-one/passes/ExclusiveWeapons'));
const InfectVirus = lazy(() => import('@/components/season-one/virus/InfectVirus'));
const RAVirus = lazy(() => import('@/components/season-one/virus/RA-Virus'));
const VirusStacks = lazy(() => import('@/components/season-one/virus/VirusStacks'));
const InfectionStackLogic = lazy(() => import('@/components/season-one/virus/InfectionStackLogic'));
const VirusResistance = lazy(() => import('@/components/season-one/virus/VirusResistance'));
const GameAction = lazy(() => import('@/components/season-one/rules/GameAction'));
const ZombiesAndDoomElites = lazy(() => import('@/components/season-one/rules/ZombiesAndDoomElites'));
const NewEnemyTypes = lazy(() => import('@/components/season-one/buildings/NewEnemyTypes'));
const DangerousAutoRally = lazy(() => import('@/components/season-one/rules/DangerousAutoRally'));
const InfectionAndHealing = lazy(() => import('@/components/season-one/virus/InfectionAndHealing'));
const SeasonAllianceMilestones = lazy(() => import('@/components/season-one/season/SeasonAllianceMilestones'));
const SeasonOnePasses = lazy(() => import('@/components/season-one/passes/SeasonOnePasses'));
const WeeklyPass = lazy(() => import('@/components/season-one/passes/WeeklyPass'));
const KimberlyExclusiveWeaponPass = lazy(() => import('@/components/season-one/passes/KimberlyExclusiveWeaponPass'));
const DVAExclusiveWeaponPass = lazy(() => import('@/components/season-one/passes/DVAExclusiveWeaponPass'));
const TeslaExclusiveWeaponPass = lazy(() => import('@/components/season-one/passes/TeslaExclusiveWeaponPass'));
const SeasonQuests = lazy(() => import('@/components/season-one/season/SeasonQuests'));
const Goals = lazy(() => import('@/components/season-one/passes/Goals'));

const Sections: Section[] = [
    { title: 'Season Overview', id: 'season-overview', component: SeasonOverview },
    { title: 'New Resources', id: 'new-resources', component: NewS1Resources },
    { title: 'World and Map', id: 'world-and-map', component: WorldAndMap },
    { title: 'Introduction', id: 'introduction', component: Introduction },
    { title: 'New Buildings', id: 'new-buildings', component: NewBuildings },
    { title: 'Military Bases', id: 'military-bases', component: MilitaryBases },
    { title: 'Military Strongholds', id: 'military-strongholds', component: MilitaryStrongholds },
    { title: 'Cities and Influence', id: 'cities-and-influence', component: CitiesAndInfluence },
    { title: 'Alliance Territory', id: 'alliance-territory', component: AllianceTerritory },
    { title: 'Stronghold Capture Rules', id: 'stronghold-capture-rules', component: StrongholdCaptureRules },
    { title: 'Stronghold Capture Rewards', id: 'stronghold-capture-rewards', component: StrongholdCaptureRewards },
    { title: 'City Rules and Schedule', id: 'city-rules-and-schedule', component: CityRulesAndSchedule },
    { title: 'Hero Upgrades and Weapons', id: 'hero-upgrades-and-weapons', component: HeroUpgradesAndWeapons },
    { title: 'Exclusive Weapons', id: 'exclusive-weapons', component: ExclusiveWeapons },
    { title: 'Infect Virus', id: 'infect-virus', component: InfectVirus },
    { title: 'RA Virus', id: 'ra-virus', component: RAVirus },
    { title: 'Virus Stacks', id: 'virus-stacks', component: VirusStacks },
    { title: 'Infection Stack Logic', id: 'infection-stack-logic', component: InfectionStackLogic },
    { title: 'Virus Resistance', id: 'virus-resistance', component: VirusResistance },
    { title: 'Game Action', id: 'game-action', component: GameAction },
    { title: 'Zombies and Doom Elites', id: 'zombies-and-doom-elites', component: ZombiesAndDoomElites },
    { title: 'New Enemy Types', id: 'new-enemy-types', component: NewEnemyTypes },
    { title: 'Dangerous Auto Rally', id: 'dangerous-auto-rally', component: DangerousAutoRally },
    { title: 'Infection and Healing', id: 'infection-and-healing', component: InfectionAndHealing },
    { title: 'Season Alliance Milestones', id: 'season-alliance-milestones', component: SeasonAllianceMilestones },
    { title: 'Season One Passes', id: 'season-one-passes', component: SeasonOnePasses },
    { title: 'Weekly Pass', id: 'weekly-pass', component: WeeklyPass },
    { title: 'Kimberly Exclusive Weapon Pass', id: 'kimberly-exclusive-weapon-pass', component: KimberlyExclusiveWeaponPass },
    { title: 'D.VA Exclusive Weapon Pass', id: 'dva-exclusive-weapon-pass', component: DVAExclusiveWeaponPass },
    { title: 'Tesla Exclusive Weapon Pass', id: 'tesla-exclusive-weapon-pass', component: TeslaExclusiveWeaponPass },
    { title: 'Season Quests', id: 'season-quests', component: SeasonQuests },
    { title: 'Goals', id: 'goals', component: Goals },
];

function SeasonOnePageContent() {
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
                <title>{`${selectedSection.title} | Season One Guide`}</title>
                <meta name="description" content={`Learn about ${selectedSection.title} in our comprehensive Season One guide.`} />
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

export default SeasonOnePageContent;