import pozdrav, {PI, zbroji, prva, /*druga*/} from './matematika'

// import {zbroji} from './matematika'

console.log(PI)
console.log(zbroji(5,10))
console.log(pozdrav('Edunova'))
console.log(prva())
// console.log(druga()) Ne mogu je pozvati jer nije napravljen export, a nije ni default funkcija, pa se ne može pozivati preko pozdrav funkcije, jer ona ne zna za tu funkciju, odnosno nije joj dostupna.