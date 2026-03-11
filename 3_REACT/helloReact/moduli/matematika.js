export const PI=3.14

export function zbroji (i,j){
    return i + j
}

export default function pozdrav(ime){
    return `Hello ${ime}, pozvao si default funkciju`
}

function prva(){
    return `Ovo vidim jer sam pozvao u app.js, ${druga()}`
}

function druga(){
    return `Ovo je druga funkcija`
}

export {prva} //ovdje se navode funkcije koje će se exportati, a nisu default, ali se ne želi da se navode u app.js, već se pozivaju preko default funkcije, odnosno pozdrav
