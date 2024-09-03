function displayHelpEmbed() {
    const embedElement = document.createElement('div');
    embedElement.classList.add('embed');
    
    const embedTitle = document.createElement('div');
    embedTitle.classList.add('embed-title');
    embedTitle.textContent = 'Welkom!';

    const embedContent = document.createElement('div');
    embedContent.classList.add('embed-content');
    embedContent.innerHTML = 
        'Welkom bij de chat bot! Hier zijn enkele dingen die je kunt proberen:<br><br>' +
        '/8ball [vraag] - Stel de 8ball een vraag.<br>' +
        '/wheel [optie1, optie2, ...] - Laat de bot een keuze maken.<br>' +
        '/help - Toon deze help-embed.<br>' +
        'Typ iets om gewoon te chatten.';

    // Maak een container voor de titel en de afbeelding
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('embed-title-container');

    // Voeg de titel toe aan de container
    titleContainer.appendChild(embedTitle);

    // Voeg de afbeelding toe aan de container
    const botIcon = document.createElement('img');
    botIcon.src = 'images/image.png'; // Zorg dat het pad klopt
    botIcon.classList.add('embed-icon');
    titleContainer.appendChild(botIcon);

    // Voeg de container toe aan het embedElement
    embedElement.appendChild(titleContainer);
    embedElement.appendChild(embedContent);

    chatBox.appendChild(embedElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
