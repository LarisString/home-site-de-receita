
document.getElementById("botao").disabled = true;

function toggle() {
    document.getElementById("nav-list").addEventListener("click", () => { 
    


    var lista = document.getElementById("nav").value;

    if (lista !== null && document.getElementById("nav") !== 'lista') {
        document.getElementById("botao").disabled = false;
    } else {document.getElementById("botao").disabled = true;
    }});
}