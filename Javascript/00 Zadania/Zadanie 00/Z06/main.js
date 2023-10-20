const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const liczba_c = document.querySelector('#c')
const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = liczba_a.value;
    let b = liczba_b.value;
    let c = liczba_c.value;

    let wynik = Math.sqrt((a+b+c)(a+b-c)(a-b+c)(-a+b+c))/4;

    wynik.innerHTML = `a = ${a} <br>
                   b = ${b}<br>
                   c = ${c} <br>
                   wynik = ${wynik} <br>`
});