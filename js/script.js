function openTab(elementId) {
    var ele = document.getElementById(elementId);
    if(ele.style.display == "block") {
            ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }
} 

function Validacion() {
    if (document.contactform.multitext.value == "") {

        alert("No te olvides de escribir tu consulta");
        return false;
    }
}