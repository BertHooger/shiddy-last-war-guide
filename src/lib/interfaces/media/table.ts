interface TableRow {
    star: string;
    gold: string;
    ore: string;
    ceramic: string;
    blueprint: string;
}

export interface CostTableProps {
    data: TableRow[];
    title: string;
}

interface StarTableRow {
    level: string;
    gold: string;
    ore: string;
    ceramic: string;
    blueprint: string;
}

export interface StarCostTableProps {
    data: StarTableRow[];
    title: string;
    blueprintType: 'Legendary' | 'Mythic';
}
