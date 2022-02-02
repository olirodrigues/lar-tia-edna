
const menu = document.querySelector('#menuMobil')

const btnAbre = document.querySelector('.icone')

const btnFecha = document.querySelector('.iconeFechar')

const btncontribua = document.querySelector('#btnCont')



const escondeHome = document.querySelector('.homeMenu')

btnAbre.onclick = function() {
    menu.style.display = "block"
    btncontribua.style.display = "none"
    btnAbre.style.display ="none"
    escondeHome.style.display="none"
}

btnFecha.onclick = function() {
    menu.style.display = "none"
    btncontribua.style.display = "block"
    btnAbre.style.display ="block"
}

window.onlick = function(event) {
    if (event.target == modal) {
        menu.style.display = "none";
        btncontribua.style.display = "block"
        btnAbre.style.display ="block"
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
