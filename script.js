function play() {
    let digito = document.getElementById('num').value
    let res1 = document.getElementById('resultado')
    let res2 = document.getElementById('resultado2')
    let winner = document.getElementById('winner')

    let AI = Math.floor(Math.random() * 3 + 1)

    if (digito > 3 || digito < 1) {
        alert("Enter correct number!!!")
    } else {
        if (digito == AI) {
            //Empate
            if (digito == 1) {
                res1.innerHTML = '<img src="pedra.png">'
                res2.innerHTML = '<img src="pedra.png">'
                winner.innerHTML = `YOU TIED`
            } else if (digito == 2) {
                res1.innerHTML = '<img src="papel.png">'
                res2.innerHTML = '<img src="papel.png">'
                winner.innerHTML = `YOU TIED`
            } else {
                res1.innerHTML = '<img src="tesoura.png">'
                res2.innerHTML = '<img src="tesoura.png">'
                winner.innerHTML = `YOU TIED`
            }
        } else if (digito == 1 && AI == 2 || digito == 2 && AI == 3 || digito == 3 && AI == 1) {
            //Perdeu
            if (digito == 1 && AI == 2) {
                res1.innerHTML = '<img src="pedra.png">'
                res2.innerHTML = '<img src="papel.png">'
                winner.innerHTML = `YOU LOSE`
            } else if (digito == 2 && AI == 3) {
                res1.innerHTML = '<img src="papel.png">'
                res2.innerHTML = '<img src="tesoura.png">'
                winner.innerHTML = `YOU LOSE`
            } else {
                res1.innerHTML = '<img src="tesoura.png">'
                res2.innerHTML = '<img src="pedra.png">'
                winner.innerHTML = `YOU LOSE`
            }
        } else if (digito == 1 && AI == 3 || digito == 2 && AI == 1 || digito == 3 && AI == 2) {
            //Ganhou
            if (digito == 1 && AI == 3) {
                res1.innerHTML = '<img src="pedra.png">'
                res2.innerHTML = '<img src="tesoura.png">'
                winner.innerHTML = `YOU WIN`
            } else if (digito == 2 && AI == 1) {
                res1.innerHTML = '<img src="papel.png">'
                res2.innerHTML = '<img src="pedra.png">'
                winner.innerHTML = `YOU WIN`
            } else {
                res1.innerHTML = '<img src="tesoura.png">'
                res2.innerHTML = '<img src="papel.png">'
                winner.innerHTML = `YOU WIN`
            }
        }
    }
}