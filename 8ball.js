function respondTo8Ball() {
    const responses = [
        // Positieve antwoorden
        'Zeker weten!',
        'Het is beslist zo.',
        'Zonder enige twijfel.',
        'Ja, absoluut.',
        'Je kunt erop rekenen.',
        'Natuurlijk!',
        'Ja, zeker!',
        
        // Voorzichtig positieve antwoorden
        'De voortekenen wijzen op ja.',
        'Ziet er goed uit.',
        'Ja, waarschijnlijk.',
        'Het is waarschijnlijk.',
        'De kansen zijn goed.',
        'Ik denk van wel.',

        // Neutrale antwoorden
        'Vraag later opnieuw.',
        'Ik kan het nu niet zeggen.',
        'Het is beter om het niet te weten.',
        'Focus en vraag opnieuw.',
        'Het is onzeker.',
        'De toekomst is onduidelijk.',

        // Negatieve antwoorden
        'Reken er niet op.',
        'Mijn bronnen zeggen nee.',
        'De vooruitzichten zijn niet zo goed.',
        'Heel twijfelachtig.',
        'Nee, absoluut niet.',
        'Nee, en dat weet je ook.'
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    displayMessage('Bot', response);
}
 