// let glass = document.getElementById('glass');
// let cup = document.getElementsByClassName('min-glass');
// console.log(glass);
// console.log(cup);
// var j , k;
// var a = 0;
// for (let i = 0; i < cup.length; i++) {
//     let b = cup[i].addEventListener('click' , add_Substract);
//     console.log(b);
// }
// function add_Substract(){
//     if (a == 0) {
//         for (j = 0; j < cup.length; j++) {
//             console.log(j + 'add ho gya');
//         }
//         a = 1;
//     }
//     else {
//         for (k = 0; k < cup.length; k++) {
//             console.log(k + 'substract ho gya');
//         }
//         a = 0;
//     }
// }
// function add() {
//     console.log(j + 'add ho gya');
// }
// function substract() {
//     console.log(k + 'substract ho gya');
// }












const smallCups = document.querySelectorAll('.min-glass')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.min-glass.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}