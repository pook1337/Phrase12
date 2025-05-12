const bip39 = require('bip39');

// Generate a 12-word mnemonic phrase (128 bits entropy)
const mnemonic = bip39.generateMnemonic(128);

console.log('12-word mnemonic phrase:', mnemonic);
