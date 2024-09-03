function respondToNsfwTime() {
    // Definieer hier je eigen opties voor minuten en uren
    const timeOptions = [
        '30 minuten',
        '30 minuten',
        '30 minuten',
        '45 minuten',
        '45 minuten',
        '45 minuten',
        '45 minuten',
        '45 minuten',
        '50 minuten',
        '50 minuten',
        '50 minuten',
        '50 minuten',
        '50 minuten',
        '50 minuten',
        '1 uur',
        '1 uur',
        '1 uur',
        '2 uren'
    ];

    // Kies willekeurig een optie uit de array
    const randomIndex = Math.floor(Math.random() * timeOptions.length);
    const chosenTime = timeOptions[randomIndex];

    // Bouw het antwoord
    const response = `Je hebt ${chosenTime} om te kijken naar NSFW! 🔞`;

    displayMessage('Bot', response);
}
