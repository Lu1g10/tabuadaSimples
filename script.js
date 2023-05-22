function multiplicar() {
    var numero = Number(document.querySelector('input#num').value)
    var res = document.querySelector('select#tabu')

    if (numero < 0) {
        alert('[ERRO] Insira valores positivos!')
    } else {
        for (i = 1; i <= 10; i++) {
            res.options[i - 1] = new Option(numero + ' x ' + i + ' = ' + numero * i)
        }
    }
}