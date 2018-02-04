'use strict'

function consume(method, food) {
    
    switch (method) {
        case 'eat':
            console.log('\nEating ${food}: chomp, chomp ... burp.');
            return 'Got something to drink';
        case 'drink':
            console.log('\nDrinking ${food}: chomp, chomp ... burp.');
            return 'Got something to drink';

    }
}

