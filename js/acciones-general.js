function esMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (esMobile()){
	document.write("<script language=\"javascript\" src=\"js/acciones-mobile_min.js\"></script>");
}

else {
	document.write("<script language=\"javascript\" src=\"js/acciones-desktop_min.js\"></script>");
}


function adaptarANuevaSeccion(seccion){
    goToByScroll(seccion.toLowerCase());
}

function cambiarTitulo(nuevo_texto) {
    var pDelHeader = document.getElementById("titulo_seccion");
    
    pDelHeader.innerHTML = nuevo_texto;
}

function goToByScroll(id){
      // Reove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}

function publicarEdad() {
    var pDeLaEdad = document.getElementById("edad");
    var miEdadHoy = calculateAge();
    
    pDeLaEdad.innerHTML = miEdadHoy + " años";
}

function calculateAge() {
    var birthday = new Date("1993-05-28");
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}