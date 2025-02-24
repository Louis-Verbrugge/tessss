const valkey = require('valkey');
const config = valkey('./valkey-config.js');

console.log(config.API_KEY);  // Affiche la clé API
console.log(config.BASE_URL);  // Affiche l'URL de base
