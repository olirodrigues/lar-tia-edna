function mobileMenu() {

    let menuContato = document.querySelector('#contatoMenu')
    let menuVoluntariado = document.querySelector('#voluntariadoMenu')
    let menuObjetivos = document.querySelector('#objetivosMenu')
    let menuFinalidade = document.querySelector('#finalidadeMenu')
    let menuSobre = document.querySelector('#sobreMenu')
    let btnContri = document.querySelector('#btnCont')
    let menuItem = document.querySelector('.menuItens');
    let iconezin = document.querySelector('.icone');
    let menuMob = document.getElementById('meuNavegador');
    if(menuMob.className === "navegador") {
        menuMob.className += "responsive";
        menuMob.style.cssText =
        'left: 70%;' +
        'top: 2%;' +
        'position: absolute;' +
        'background-color: #70F4BD;' 
        iconezin.style.cssText = 
        'position: absolute;'  +
        'right: 0;' +
        'top: 0;' +
        'width: 200px'
        menuItem.style.cssText =
        'font-size: 15px;' +
        'margin-bottom: 40px;'
        btnContri.style.cssText =
        'font-size: 10px;' +
        'padding-top: 5px;' +
        'padding-bottom: 5px;' +
        'padding-right: 11px;' +
        'padding-left: 11px;'
        menuSobre.style.cssText = 
        'font-size: 15px;'
        menuFinalidade.style.cssText = 
        'font-size: 15px;'
        menuObjetivos.style.cssText = 
        'font-size: 15px;'
        menuVoluntariado.style.cssText = 
        'font-size: 15px;'
        menuContato.style.cssText = 
        'font-size: 15px;'


    } else {
        menuMob.className = "navegador";
    }
}

function lerMore() {

    let textoEdna = document.getElementById('escondeText');
    if(textoEdna.className === "hideText") {
        textoEdna.className += ".aparece"; 

    } else {
        textoEdna.className = "hideText";
    }
}