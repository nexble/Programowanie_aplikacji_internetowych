const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    let suma = a+b;
    let roznica = a-b;
    let iloczyn = a*b;
    let iloraz = Math.floor(a/b);

    wynik.innerHTML = `a = ${a} <br>
                               b = ${b}<br>
                               suma = ${suma} <br>
                               roznica = ${roznica} <br>
                               iloczyn = ${iloczyn} <br>
                               iloraz = ${iloraz} <br>`;

})