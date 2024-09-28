const blacklistedWords = [
    'badword1',
    'badword2',
    'badword3',
    // Add more words to this list as needed
];

export function containsBlacklistedWord(text: string): boolean {
    const lowerText = text.toLowerCase();
    return blacklistedWords.some(word => lowerText.includes(word.toLowerCase()));
}

export function filterBlacklistedWords(text: string): string {
    let filteredText = text;
    blacklistedWords.forEach(word => {
        const regex = new RegExp(word, 'gi');
        filteredText = filteredText.replace(regex, '*'.repeat(word.length));
    });
    return filteredText;
}