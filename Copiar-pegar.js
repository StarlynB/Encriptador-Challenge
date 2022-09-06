
function copyText() {
    var content = document.querySelector("#text-input-salida");
    content.select();
    document.execCommand("copy");

    alert("texto copiado!");


}