//person.js
//name export - isAdult(18) - return true if is the age over 18 otherwise false
//name export - canDrink() - return true is is input is over 18 otherwise false

const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 18;
const isSenior = (age) => age >= 50;

export { isAdult, canDrink, isSenior as default };
