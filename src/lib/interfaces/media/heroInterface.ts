import { Skill, SkillUpgradeOrder } from "../skills"

export interface SpecialInfo {
    title: string;
    description: string;
    availableFrom: string;
}

export interface HeroInterface {
    id: string;
    name: string;
    title: string;
    intro: string;
    rarity: string;
    type: string;
    ability: string;
    mainImage: string;
    expandedImages: string[];
    skills: Skill[];
    skillUpgradeOrder: SkillUpgradeOrder[];
    specialInfo?: SpecialInfo;
}