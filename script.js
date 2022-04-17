function play() {
    let digito = document.getElementById('num').value
    let res1 = document.getElementById('resultado')
    let res2 = document.getElementById('resultado2')
    let win = document.getElementById('winner')

    let AI = Math.floor(Math.random() * 3 + 1)

    if (digito > 3 || digito < 1) {
        alert("Enter correct number!!!")
    } else {
        if (digito == AI) {
            //Empate
            if (digito == 1) {
                res1.innerHTML = '<img src="images/pedra.png">'
                res2.innerHTML = '<img src="images/pedra.png">'
            } else if (digito == 2) {
                res1.innerHTML = '<img src="images/papel.png">'
                res2.innerHTML = '<img src="images/papel.png">'
            } else {
                res1.innerHTML = '<img src="images/tesoura.png">'
                res2.innerHTML = '<img src="images/tesoura.png">'
            }
            win.innerHTML = `YOU TIED`

        } else if (digito == 1 && AI == 2 || digito == 2 && AI == 3 || digito == 3 && AI == 1) {
            //Perdeu
            if (digito == 1 && AI == 2) {
                res1.innerHTML = '<img src="images/pedra.png">'
                res2.innerHTML = '<img src="images/papel.png">'
            } else if (digito == 2 && AI == 3) {
                res1.innerHTML = '<img src="images/papel.png">'
                res2.innerHTML = '<img src="images/tesoura.png">'
            } else {
                res1.innerHTML = '<img src="images/tesoura.png">'
                res2.innerHTML = '<img src="images/pedra.png">'
            }
            win.innerHTML = `YOU LOSE`

        } else if (digito == 1 && AI == 3 || digito == 2 && AI == 1 || digito == 3 && AI == 2) {
            //Ganhou
            if (digito == 1 && AI == 3) {
                res1.innerHTML = '<img src="images/pedra.png">'
                res2.innerHTML = '<img src="images/tesoura.png">'
            } else if (digito == 2 && AI == 1) {
                res1.innerHTML = '<img src="images/papel.png">'
                res2.innerHTML = '<img src="images/pedra.png">'
            } else {
                res1.innerHTML = '<img src="images/tesoura.png">'
                res2.innerHTML = '<img src="images/papel.png">'
            }
            win.innerHTML = `YOU WIN`
        }
    }
}