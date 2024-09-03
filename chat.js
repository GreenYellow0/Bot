let responses = []; // Lege array voor de geladen responses

// Laad de responses vanuit dataset1.json
fetch('dataset1.json')
    .then(response => response.json())
    .then(data => {
        responses = data;
    })
    .catch(error => console.error('Error loading responses:', error));

    function respondToChat(message) {
        const lowerMessage = message.toLowerCase();
    
        const threshold = 3; // Hoe lager, hoe strikter de matching
    
        let response = 'Sorry, dat begrijp ik niet. Voor meer info gebruik /help.';
    
        for (const item of responses) {
            for (const keyword of item.keywords) {
                if (getLevenshteinDistance(lowerMessage, keyword) <= threshold) {
                    response = item.response === "TIME_RESPONSE" 
                        ? "Het is momenteel " + new Date().toLocaleTimeString() + "."
                        : item.response;
                    break;
                }
            }
            if (response !== 'Sorry, dat begrijp ik niet. Voor meer info gebruik /help.') {
                break;
            }
        }
    
        displayMessage('Bot', response);
    }
    

// Functie om de Levenshtein-afstand tussen twee strings te berekenen
function getLevenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
                );
            }
        }
    }

    return matrix[b.length][a.length];
}
