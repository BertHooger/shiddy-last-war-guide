export const baseColors = [
    'blue',
    'green',
    'yellow',
    'purple',
    'pink',
    'red',
    'indigo',
    'orange',
    'teal',
    'cyan'
] as const;

export type BaseColor = typeof baseColors[number];

export const colorScheme: Record<BaseColor, string[]> = {
    blue: [
        '#E6F3FF', '#CCE7FF', '#B3DBFF', '#99CFFF', '#80C3FF',
        '#66B7FF', '#4DABFF', '#339FFF', '#1A93FF', '#0087FF'
    ],
    green: [
        '#E6FFEE', '#CCFFDD', '#B3FFCC', '#99FFBB', '#80FFAA',
        '#66FF99', '#4DFF88', '#33FF77', '#1AFF66', '#00FF55'
    ],
    yellow: [
        '#FFFCE6', '#FFF9CC', '#FFF6B3', '#FFF399', '#FFF080',
        '#FFED66', '#FFEA4D', '#FFE733', '#FFE41A', '#FFE100'
    ],
    purple: [
        '#F3E6FF', '#E7CCFF', '#DBB3FF', '#CF99FF', '#C380FF',
        '#B766FF', '#AB4DFF', '#9F33FF', '#931AFF', '#8700FF'
    ],
    pink: [
        '#FFE6F3', '#FFCCE7', '#FFB3DB', '#FF99CF', '#FF80C3',
        '#FF66B7', '#FF4DAB', '#FF339F', '#FF1A93', '#FF0087'
    ],
    red: [
        '#FFE6E6', '#FFCCCC', '#FFB3B3', '#FF9999', '#FF8080',
        '#FF6666', '#FF4D4D', '#FF3333', '#FF1A1A', '#FF0000'
    ],
    indigo: [
        '#E6E6FF', '#CCCCFF', '#B3B3FF', '#9999FF', '#8080FF',
        '#6666FF', '#4D4DFF', '#3333FF', '#1A1AFF', '#0000FF'
    ],
    orange: [
        '#FFF0E6', '#FFE1CC', '#FFD2B3', '#FFC399', '#FFB480',
        '#FFA566', '#FF964D', '#FF8733', '#FF781A', '#FF6900'
    ],
    teal: [
        '#E6FFFF', '#CCFFFF', '#B3FFFF', '#99FFFF', '#80FFFF',
        '#66FFFF', '#4DFFFF', '#33FFFF', '#1AFFFF', '#00FFFF'
    ],
    cyan: [
        '#E6FBFF', '#CCF7FF', '#B3F3FF', '#99EFFF', '#80EBFF',
        '#66E7FF', '#4DE3FF', '#33DFFF', '#1ADBFF', '#00D7FF'
    ]
};

export const getColorShade = (color: BaseColor, shade: number): string => {
    const shadeIndex = Math.max(0, Math.min(9, shade - 1));
    return colorScheme[color][shadeIndex];
};

export const getCommentColor = (depth: number, colorIndex: number): string => {
    const baseColor = baseColors[colorIndex % baseColors.length];
    const shadeIndex = Math.min(depth, 9);
    return colorScheme[baseColor][shadeIndex];
};