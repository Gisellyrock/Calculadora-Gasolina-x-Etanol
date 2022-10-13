var etanol
var gasolina

function calcular() {
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
    if (etanol< 0.7 * gasolina) {
        document.getElementById("status").src="./assets/3.jpeg";
    }
    else {
        document.getElementById("status").src="./assets/2.jpeg"; 
    }
}

function resetar () {
    document.getElementById("status").src="./assets/1.jpeg";
}

