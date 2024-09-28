import { HeroInterface } from "../interfaces/media/heroInterface";

export const masonData: HeroInterface = {
    id: "mason",
    name: "Mason",
    title: "Raging Marksman",
    intro: "This hero will be available almost immediately at the beginning of the game. He is a powerful attacker. And spoiler alert: he is the first hero that can be upgraded to UR in the future Season 1 (when the server is 4 months old).",
    rarity: "SSR",
    type: "Tank",
    ability: "Attacker",
    mainImage: "/images/heroes/mason-1.png",
    expandedImages: [
        "/images/heroes/mason-1.png",
        "/images/heroes/mason-2.png"
    ],
    skills: [
        {
            name: "Tactics: Fire Cover",
            icon: "/images/skills/mason-skill-1.png",
            description: "Attack with a Minigun, dealing Physical Damage equals to X% (Scales with level) of the Attack. (Cooldown: 1.1s)",
            descriptionImage: "/images/skill/mason-skill-desc-1.png"
        },
        {
            name: "Passive: Zombie Purge",
            icon: "/images/skills/mason-skill-2.png",
            description: "Boost back-row Tank Heroes' Damage vs monsters in Battle by X% (Scales with level).",
            descriptionImage: "/images/skill/mason-skill-desc-2.png"
        },
        {
            name: "Auto Attack: Quick Reload",
            icon: "/images/skills/mason-skill-3.png",
            description: "Attack with a minigun, dealing Physical Damage equals to X% (Scales with level) of the attack. (Cooldown: 9s)",
            descriptionImage: "/images/skill/mason-skill-desc-3.png"
        },
        {
            name: "Expertise: Super Sensing",
            icon: "/images/skills/mason-skill-4.png",
            description: "Self HP, Attack, and Defense +10% respectively.",
            descriptionImage: "/images/skill/mason-skill-desc-4.png"
        }
    ],
    skillUpgradeOrder: [
        { skillName: "Auto Attack: Quick Reload", order: 1 },
        { skillName: "Tactics: Fire Cover", order: 2 },
        { skillName: "Expertise: Super Sensing", order: 3 },
        { skillName: "Passive: Zombie Purge", order: 4 }
    ],
    specialInfo: {
        title: "Mason Upgrade to UR",
        description: "It will be possible to upgrade Mason to UR hero type. Check it out in this article: Mason upgrade to UR.",
        availableFrom: "Season 1 – The Crimson Plague"
    },
};

export const murphyData: HeroInterface = {
    id: "murphy",
    name: "Murphy",
    title: "Unyielding Warrior",
    intro: "This is the first UR hero you can win in the game. He is a powerful defender and should be in your first squad, since he can absorb a lot of damage.",
    rarity: "UR",
    type: "Tank",
    ability: "Defender",
    mainImage: "/images/heroes/murphy-1.png",
    expandedImages: [
        "/images/heroes/murphy-1.png",
        "/images/heroes/murphy-2.png"
    ],
    skills: [
        {
            name: "Auto Attack: Cannon Fire",
            icon: "/images/skills/murphy-skill-1.png",
            description: "Fires a cannonball at the enemy, dealing Physical Damage equals to XX% (Scales with level) of the Attack. (Cooldown: 1.6s)",
            descriptionImage: "/images/skill/murphy-skill-desc-1.png"
        },
        {
            name: "Passive: Stand Firm",
            icon: "/images/skills/murphy-skill-2.png",
            description: "Reduce all damage taken in battle by XX% (Scales with level) for front-row units.",
            descriptionImage: "/images/skill/murphy-skill-desc-2.png"
        },
        {
            name: "Tactics: Ironclad Barrier",
            icon: "/images/skills/murphy-skill-3.png",
            description: "After casting the skill, boost the Physical Damage Reduction of the front-row units by X% (Scales with level) for 5s. (Cooldown: 10s)",
            descriptionImage: "/images/skill/murphy-skill-desc-3.png"
        },
        {
            name: "Expertise: Super Sensing",
            icon: "/images/skills/murphy-skill-4.png",
            description: "Self HP, Attack, and Defense +20% respectively. Skill cooldown rate +10%",
            descriptionImage: "/images/skill/murphy-skill-desc-4.png"
        }
    ],
    skillUpgradeOrder: [
        { skillName: "Passive: Stand Firm", order: 1 },
        { skillName: "Tactics: Ironclad Barrier", order: 2 },
        { skillName: "Expertise: Super Sensing", order: 3 },
        { skillName: "Auto Attack: Cannon Fire", order: 4 }
    ],
    specialInfo: {
        title: "Murphy's Exclusive Weapon",
        description: "A new exclusive weapon will be available for Murphy. The exclusive Weapon will give a huge boost of power and attributes. It will also increase levels of skills. Check it out in this article: Murphy's Exclusive Weapon.",
        availableFrom: "Season 2 – Polar Storm"
    },
};

export const kimberlyData: HeroInterface = {
    id: "kimberly",
    name: "Kimberly",
    title: "Rocket Shadow",
    intro: "This is the first attacker UR hero you will be able to buy and it is for a very low amount. Buying Kimberly gives you a huge advantage in attack power and allows you also to change your avatar.",
    rarity: "UR",
    type: "Tank",
    ability: "Attacker",
    mainImage: "/images/heroes/kimberly-1.png",
    expandedImages: [
        "/images/heroes/kimberly-1.png",
        "/images/heroes/kimberly-2.png"
    ],
    skills: [
        {
            name: "Auto Attack: Energy Assault",
            icon: "/images/skills/kimberly-skill-1.png",
            description: "Fire a rocket at a random enemy, dealing Energy Damage equals to X% (Scales with upgraded level) of the Attack. (Cooldown: 1.55s)",
            descriptionImage: "/images/skill/kimberly-skill-desc-1.png"
        },
        {
            name: "Passive: Energy Boosts",
            icon: "/images/skills/kimberly-skill-2.png",
            description: "Boost this hero's Energy Damage by X (Scales with level) in battle.",
            descriptionImage: "/images/skill/kimberly-skill-desc-2.png"
        },
        {
            name: "Tactics: Barrage Strike",
            icon: "/images/skills/kimberly-skill-3.png",
            description: "Fire 8 rockets at random enemies, each dealing a devastating amount of Energy Damage equals to X (Scales with level) of the Attack. (Cooldown: 10s)",
            descriptionImage: "/images/skill/kimberly-skill-desc-3.png"
        },
        {
            name: "Expertise: Super Sensing",
            icon: "/images/skills/kimberly-skill-4.png",
            description: "Self HP, Attack, and Defense +20% respectively. Skill cooldown rate +10%.",
            descriptionImage: "/images/skill/kimberly-skill-desc-4.png"
        }
    ],
    skillUpgradeOrder: [
        { skillName: "Passive: Energy Boost", order: 1 },
        { skillName: "Auto Attack: Energy Assault", order: 2 },
        { skillName: "Expertise: Super Sensing", order: 3 },
        { skillName: "Tactics: Barrage Strike", order: 4 }
    ]
};