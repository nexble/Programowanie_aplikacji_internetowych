const sec = document.querySelector('#s');
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button');



btn.addEventListener("click", function () {
    let s = parseInt(sec.value);

    let hr = Math.floor(s / 3600);
    let min = Math.floor((s % 3600) / 60);

    wynik.innerHTML = `Wynik ${hr}g ${min}min ${s}sek`
})