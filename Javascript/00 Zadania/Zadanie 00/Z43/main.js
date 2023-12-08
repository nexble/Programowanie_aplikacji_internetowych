const number = document.querySelector('#nr');
const wynik = document.querySelector('.wynik')
const btn = document.querySelector('button');



btn.addEventListener("click", function () {
    let nr = parseInt(number.value)

    console.log('a')

    if (nr > 9 && nr < 100) {
        wynik.innerHTML = `liczba a = ${nr} <br>
                            liczba jest dwucyfrowa`
        if (nr%2 === 0) {
            wynik.innerHTML = `liczba a = ${nr} <br>
                            liczba jest dwucyfrowa parzysta`
        }
        else {
            wynik.innerHTML = `liczba a = ${nr} <br>
                            liczba jest dwucyfrowa nieparzysta`
        }
    }
    else {
        wynik.innerHTML = `liczba a = ${nr} <br>
                            liczba nie jest dwucyfrowa`
    }


})