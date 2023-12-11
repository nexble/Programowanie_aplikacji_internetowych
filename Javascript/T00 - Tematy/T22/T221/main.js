function wartoscBezwzgledna1(a){
    if(a>0) return a;
    else return a*(-1);
}

const nr = document.querySelector('#liczba')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')
addEventListener('click', function (){
    let liczba = parseInt(nr.value)
    let wynik = wartoscBezwzgledna1(nr)

    console.log(wartoscBezwzgledna1())
    document.write(wartoscBezwzgledna1())
})
