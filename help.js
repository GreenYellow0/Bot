function displayHelpEmbed() {
    const embedElement = document.createElement('div');
    embedElement.classList.add('embed');
    
    const embedTitle = document.createElement('div');
    embedTitle.classList.add('embed-title');
    embedTitle.textContent = 'Welkom!';

    const embedContent = document.createElement('div');
    embedContent.classList.add('embed-content');
    embedContent.innerHTML = `
        <p>Welkom bij de chat bot! Hier zijn enkele dingen die je kunt proberen:</p>
        <ul>
            <li><strong>/8ball [vraag]</strong> - Stel de 8ball een vraag.</li>
            <li><strong>/wheel [optie1, optie2, ...]</strong> - Laat de bot een keuze maken.</li>
            <li><strong>/help</strong> - Toon deze help-embed.</li>
            <li><strong>/nsfwtime</strong> - Gebruik deze command om te zien hoelang je NSFW mag kijken.</li>
        </ul>
        <p>Typ iets om gewoon te chatten.</p>
    `;

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('embed-title-container');

    const botIcon = document.createElement('img');
    botIcon.src = 'images/image.png'; // Zorg dat het pad klopt
    botIcon.classList.add('embed-icon');

    titleContainer.appendChild(embedTitle);
    titleContainer.appendChild(botIcon);

    embedElement.appendChild(titleContainer);
    embedElement.appendChild(embedContent);

    chatBox.appendChild(embedElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
