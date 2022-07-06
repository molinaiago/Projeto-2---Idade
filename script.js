function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Você é do futuro? Verifique seu ano de nascimento!')
    } else {
        var fsex = document.getElementsByName('radsex')
       var resultado = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
                gênero = 'Homem'
                if (resultado >= 0 && resultado < 12) {
                    img.setAttribute('src', 'crimeno.png')
                } else if (resultado < 21) {
                    img.setAttribute('src', 'menino.png')
                } else if (resultado < 50) {
                    img.setAttribute('src', 'homem.png')
                } else {
                    img.setAttribute('src', 'idoso.png')
                }               
                
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (resultado >= 0 && resultado < 12) {
                img.setAttribute('src', 'crimena.png')
               } else if (resultado < 21) {
                img.setAttribute('src', 'menina.png')
               } else if (resultado < 50) {
                img.setAttribute('src', 'mulher.png')
               } else {
                img.setAttribute('src', 'idosa.png')
               }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${resultado} anos.<br>`
        res.appendChild(img)
    }
}