function respondToWheel(options) {
    const choice = options[Math.floor(Math.random() * options.length)].trim();
    displayMessage('Bot', `De keuze is: ${choice}`);
}
 