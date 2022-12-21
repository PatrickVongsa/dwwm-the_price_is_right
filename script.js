const name = prompt("Entrez votre Pseudo :");

const random = Math.floor(Math.random() * 100) + 1;

let number = parseInt(prompt("Entrez un chiffre entre 1 et 100"));

while (number !== random) {
    if (number < random) {
        console.log("It is more !");
        number = parseInt(prompt("It is more ! Réessayez! Entrez un chiffre entre 1 et 100"));
    } else if (number > random) {
        console.log("It is less !");
        number = parseInt(prompt("It is less ! Réessayez! Entrez un chiffre entre 1 et 100"));
    }
}
console.log(`${name} win's`);
alert(`${name} win's`);