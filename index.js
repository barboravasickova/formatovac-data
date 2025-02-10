// https://kodim.cz/czechitas/js1/lekce/vstup-vystup-objekty/cv-ulozky/formatovac-data

const den = Number(prompt('Kolikátého dnes je?'));
const mesic = Number(prompt('Jaký je měsíc?'));
const rok = Number(prompt('Jaký je rok?'));

document.body.innerHTML += den + '. ' + mesic + '. ' + rok;

