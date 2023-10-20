const a = document.querySelector('#dzielna');
const b = document.querySelector('#dzielnik');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let liczba_a = parseFloat(a.value);
    let liczba_b = parseFloat(b.value);

    console.log(liczba_a);
    console.log(liczba_b);

    let iloraz = liczba_a/liczba_b;
    wynik.innerHTML = 'iloraz liczb wynosi: '+iloraz;
    wynik.innerHTML = `iloraz liczb dla dzielnej rownej ${liczba_a} i dzielnik rownego ${liczba_b} wynosi `+iloraz;
    Math.round(2);
})