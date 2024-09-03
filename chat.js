function respondToChat(message) {
    const lowerMessage = message.toLowerCase();

    // Definieer enkele eenvoudige reacties gebaseerd op sleutelwoorden of zinnen
    const responses = [
        {
            keywords: ['hallo', 'hi', 'hoi', 'hey'],
            response: 'Hallo! Hoe kan ik je helpen vandaag?'
        },
        {
            keywords: ['hoe gaat het', 'hoe gaat het met je', 'hoe gaat het met jou'],
            response: 'Het gaat goed, dank je! Hoe gaat het met jou?'
        },
        {
            keywords: ['wat is je naam', 'wie ben jij', 'je naam'],
            response: 'Ik ben een eenvoudige chatbot die hier is om te helpen!'
        },
        {
            keywords: ['wat kun je doen', 'wat doe je', 'wat kan jij'],
            response: 'Ik kan eenvoudige commando\'s uitvoeren zoals /8ball en /wheel. Probeer het eens!'
        },
        {
            keywords: ['bedankt', 'dank je', 'thanks'],
            response: 'Graag gedaan! Als ik ergens anders mee kan helpen, laat het me weten.'
        },
        {
            keywords: ['tot ziens', 'doei', 'bye'],
            response: 'Tot ziens! Fijne dag verder!'
        }
    ];

    // Bepaal een drempelwaarde voor acceptabele overeenkomsten
    const threshold = 3; // Hoe lager, hoe strikter de matching

    // Zoek naar een passend antwoord met fuzzy matching
    let response = 'Sorry, dat begrijp ik niet. Voor meer info gebruik /help.';

    for (const item of responses) {
        for (const keyword of item.keywords) {
            if (getLevenshteinDistance(lowerMessage, keyword) <= threshold) {
                response = item.response;
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
 