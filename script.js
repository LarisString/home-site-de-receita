
document.getElementById("botao").disabled = true;

document.getElementById("nav").addEventListener("click", () =>nav.classList.toggle("active"));
    var lista = document.getElementById("nav-list").value;

    if (document.getElementById("nav") !== null && document.getElementById("nav") !== 'lista') {
        document.getElementById("botao").disabled = false;
    } else {document.getElementById("botao").disabled = true;
}
;