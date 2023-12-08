const year = document.querySelector('#rok');
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button');



btn.addEventListener("click", function () {
    let rok = parseInt(year.value)

    if (rok % 4=== 0 && rok %100 !== 0 || rok % 400 === 0) {
        wynik.innerHTML = `rok <strong>${rok} jest przestępny</strong>`
    }
    else {
        wynik.innerHTML = `rok <strong>${rok} nie jest przestępny</strong>`
    }

})