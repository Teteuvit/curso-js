var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sâo exatamente ${hora} horas.`)
if (hora <= 24){
    if (hora > 4 && hora < 12) {
    console.log('BOM DIA!!!')
    } else if (hora >= 12 && hora < 18){
    console.log('BOA TARDE!!!')

    } else if (hora >= 18 && hora < 24 ){
    console.log('BOA NOITE!!!')

    }
    else {
        console.log('BOA MADRUGADA!!!')
    }
} else {
    console.log('Horario invalido')
}