function displayHelpEmbed() {
    const embedElement = document.createElement('div');
    embedElement.classList.add('embed');
    
    const embedTitle = document.createElement('div');
    embedTitle.classList.add('embed-title');
    embedTitle.textContent = 'Help';
    
    const embedContent = document.createElement('div');
    embedContent.classList.add('embed-content');
    embedContent.innerHTML = 
        'Gebruik de volgende commando\'s:<br><br>' +
        '/8ball [vraag] - Stel de 8ball een vraag.<br>' +
        '/wheel [optie1, optie2, ...] - Laat de bot een keuze maken.<br>' +
        '/help - Toon deze help-embed.';

    embedElement.appendChild(embedTitle);
    embedElement.appendChild(embedContent);
    
    chatBox.appendChild(embedElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
 