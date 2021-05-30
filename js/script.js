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
    let empty_field = document.contactform.multitext; 
    let empty_field_style = document.getElementById("multi_text");
    if ( empty_field.value == "") {
        empty_field_style.style.borderColor = "red";
        empty_field_style.style.borderWidth = "thick";
        alert("No te olvides de escribir tu consulta");
        return false;
    }
}
