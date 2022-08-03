
function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML= `Agora são ${hora} horas.`
    if(hora >= 0 && hora <12){
        //bom dia!
        img.src = "imagens/manha.corte2.jpeg"
        document.body.style.background = '#e2cd9f'
        document.getElementById('msg').style.color = '#e2cd9f'
        } else if(hora >12 && hora <19){
            //boa tarde!
            img.src = "imagens/tarde2.jpeg"
            document.body.style.background = '#b9846f'
            document.getElementById('msg').style.color = '#b9846f'
            } else{
                //boa noite!
                img.src="imagens/noite2.jpeg"
                document.body.style.background = '#515154'
                document.getElementById('msg').style.color = '#515154'
                
            }
    }
