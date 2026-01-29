const a=2, b=3;
let rez=a+b;
console.log(rez);

console.log(9%2); // 1 - ostatak pri dijeljenju
console.log(8%2); // 0 - ostatak pri dijeljenju

console.log(1000%100 === 0); // true

rez= rez+2;
console.log(rez);
rez+=2; // rez = rez + 2
console.log(rez);
rez -= 5;
console.log(rez);

const x=2;
rez += x; 
console.log(rez);

rez += 1;
console.log(rez);
rez++;  // ovo ni ono iznda se ne radi
console.log(rez);

console.log(rez++);
console.log(++rez);
console.log(--rez);
console.log(rez--);
console.log(rez);

console.log(5==5);  // true
console.log(5=='5'); // true
console.log(5==3); // false

console.log(5===5); // true
console.log(5==='5'); // false
console.log('Osijek'==='Osijek'); // true
console.log('Osijek'==='Druga škola'); // false

console.log(5!=3); // true
console.log(5!=5); // false
console.log(5!='5'); // false
console.log(5!== '5'); // true // Copilot

let godine=18;
console.log(godine>18); // false
console.log(godine>=18); // true

godine=21;
console.log(godine<21); // false
console.log(godine<=21); // true

const i1 = 5 == '5'; // true
const i2 = 7 > 9; // false

console.log(i1 && i2); // false
console.log(i1 || i2); // true //operator ili (or)
console.log(!i2); // true // negacija - not

const poruka = (godine >= 18) ? 'Punoljetni ste' : 'Maloljetni ste';
console.log(poruka);

const skola = 'Edunova';
console.log('Najbolja škola je ' +skola);
console.log(`Najbolja škola je ${skola}`);

const razred = 5;
console.log('Idem u ' + razred + '. razred.');
console.log(`Idem u ${razred}. razred.`);

const niz = [2,2,3,3];
console.log(niz);
const noviNiz = [1, ...niz, 4,5];
console.log(noviNiz);

const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
};
console.log(osoba);

const polaznik = {
    ...osoba,
    edukacija: 'Frontend'
};
console.log(polaznik);
console.table(polaznik);

const [prvi, drugi] = [1,2];
console.log(prvi);
console.log(drugi);

const {prezime, ...objekBezPrezimena} = polaznik;
console.log(objekBezPrezimena);
console.log(prezime);

let sifra = null;
console.log(sifra ?? 'Šifra nije postavljena');

const korisnik ={
    adresa:{
        grad: 'Osijek'
    }
};
console.log(korisnik.adresa.grad);
console.log(korisnik.adresa.ulica);

console.log(korisnik?.adresa?.ulica); 

console.log([3,4,5] instanceof Array); // true

console.log('prezime'in osoba); // true
console.log('prezime'in objekBezPrezimena); // false

