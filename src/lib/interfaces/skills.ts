export interface Skill {
    name: string;
    icon: string;
    description: string;
    descriptionImage: string;
}

export interface SkillUpgradeOrder {
    skillName: string;
    order: number;
}