const generatePassword = require("generate-password");

const password = generatePassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
});

console.log(`Mot de pass généré avec succés: ${password}`);

