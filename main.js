const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function processInput() {
    const input = userInput.value.trim();
    if (input === '') return;

    displayMessage('You', input);

    // Controleer of het een commando is (begint met "/")
    if (input.startsWith('/')) {
        const commandParts = input.split(' ');
        const command = commandParts[0].toLowerCase(); // Het eerste woord is het commando
        const args = commandParts.slice(1).join(' '); // De rest zijn de argumenten voor het commando

        if (command === '/8ball') {
            respondTo8Ball();
        } else if (command === '/wheel') {
            respondToWheel(args);
        } else if (command === '/help') {
            displayHelpEmbed();
        } else if (command === '/greet') {  // Nieuw commando
            respondToGreet(args);  // Aparte functie voor het commando
        } else {
            displayMessage('Bot', 'Onbekend commando.');
        }
    } else {
        respondToChat(input);
    }

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    if (sender === 'You') {
        messageElement.classList.add('you');
    } else {
        messageElement.classList.add('bot');
    }

    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
}

document.getElementById('user-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        processInput();
    }
});
