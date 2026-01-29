const ime = 'Edunova'; //prompt("Unesite svoje ime:");
// izbjegavanje opetovanog unosa pri testiranju

console.log(`Dobar dan ${ime}!`);

console.log(typeof ime, ime);

const unosGodina = 2026 //prompt ('Unesite svoje godine: ');

const godine = Number(unosGodina);

console.log(typeof godine, godine);

const unosDecimalniBroj = '3.14';
// decimalni broj -floating point

const decimalniBroj = parseFloat(unosDecimalniBroj);
// parse - interpretiraj

console.log(typeof decimalniBroj, decimalniBroj);

const cijeliBroj = parseInt('12');
console.log(typeof cijeliBroj, cijeliBroj);

const logickaVrijednost = true;

console.log(typeof logickaVrijednost, logickaVrijednost);

let broj = 7;

broj = 9;

console.log(typeof broj, broj);

broj = '9'; // promjena tipa varijable - samo interpreter, kao JS

console.log(typeof broj, broj);

broj = Number(broj); // vraćanje na brojčani tip // ovo niej bilo na predavanju, Copilot predložak

var i = 7;
console.log(typeof i, i);
i = '7';
console.log(typeof i, i);
var i = true; // var omogućava redeklaraciju i to nije dobra praksa
console.log(typeof i, i);

const velikiCijeliBroj = 823749872389754982738957n;
console.log(typeof velikiCijeliBroj, velikiCijeliBroj);

let x;
console.log(typeof x, x);
x = 6;
console.log(typeof x, x);

let y = null; // nije još ništa dodijeljeno, definirana vrijednost
console.log(typeof y, y);

// JSON - JavaScript Object Notation
// objektna notacija
const osobaObjekt = {
    ime: 'Pero',
    godine: 27,
    znaProgramirati: true
};
console.log(typeof osobaObjekt, osobaObjekt);
console.table(osobaObjekt);

const brojevi = [2,3,1,3,5]; // niz - array
console.log(typeof brojevi, brojevi);

const podaciBackend = [
    {
        ime: 'Ana',
        prezime: 'Anić',
    },

    {
        ime: 'Ivo',
        prezime: 'Ivić',
    }
];
console.table(podaciBackend);

function pozdrav() {
    console.log('Pozdrav iz funkcije');
}
console.log(typeof pozdrav, pozdrav);

const pozdravi = () => console.log('Pozdrav iz funkcije nove');
console.log(typeof pozdravi, pozdravi);

const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(typeof id1, id1);