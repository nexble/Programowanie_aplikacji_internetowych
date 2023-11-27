const celc = document.querySelector('#c');
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button');



btn.addEventListener("click", function () {
    let c = parseInt(celc.value)

    let k = c + 273.15
    let f = (c * 9 / 5) + 32

    wynik.innerHTML = `Wyniki obliczeń dla &degC: ${c} <br>
     Kelvin: ${k} <br>
     Fahrenheit: ${f}`
})