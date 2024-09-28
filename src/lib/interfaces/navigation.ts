import { AnySection } from "../types/anySection";
import { Section } from "./section/section";

export interface HeroNavigationProps {
    sections: AnySection[];
    setSelectedSection: (section: AnySection) => void;
    selectedSection: AnySection;
}

export interface NavigationProps {
    sections: Section[];
    setSelectedSection: (section: Section) => void;
    selectedSection: Section;
}
