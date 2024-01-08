const celc = document.querySelector('#x');
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button');



btn.addEventListener("click", function () {
    let x = parseInt(celc.value)

    let result1 = Math.pow(x, 2)
    let result2 = Math.pow(x, 3)

    wynik.innerHTML = `${x}<sup><small>2</small></sup> to: ${result1} <br>
     ${x}<sup><small>3</small></sup> to: ${result2}`
})