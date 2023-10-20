let a = parseInt(prompt("Podaj a: ",""));
let b = parseInt(prompt("Podaj b: ",""));
let c = parseInt(prompt("Podaj c: ",""));
let d = parseInt(prompt("Podaj d: ",""));

let iloczyn = a*b*c*d;
let srednia_geometryczna = Math.pow(iloczyn,0.25) ;
//--------------------------------------
console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);
console.log("d = "+d);
console.log("srednia_geometryczna = "+srednia_geometryczna);
//---------------------------------------
document.write(`a = ${a} <br>`);
document.write(`b = ${b} <br>`);
document.write(`c = ${c} <br>`);
document.write(`d = ${d} <br>`);

document.write(`<br> srednia geometryczna bez zaokraglenia =<b> ${srednia_geometryczna} </b>`);
document.write(`<br> srednia geometryczna bez zaokraglenia =<b> ${srednia_geometryczna.toFixed(3)} </b>`);