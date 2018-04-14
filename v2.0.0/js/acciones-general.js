function esMobile(){
    return /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function esIos() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function configurarCssMobile(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/estilos_mobile.css';
    link.media = 'all';
    head.appendChild(link);
}

function configurarCssMobileIos(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/estilos_mobile_ios.css';
    link.media = 'all';
    head.appendChild(link);
}

function configurarCssDesktop(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/estilos_desktop.css';
    link.media = 'all';
    head.appendChild(link);
}

if (esMobile()) {
    configurarCssMobile();
	document.write("<script language=\"javascript\" src=\"js/acciones-mobile.js\"></script>");
}

if (esIos()) {
    configurarCssMobileIos();
    document.write("<script language=\"javascript\" src=\"js/acciones-mobile.js\"></script>");
}

if (!esMobile() && !esIos()) {
    configurarCssDesktop();
	document.write("<script language=\"javascript\" src=\"js/acciones-desktop.js\"></script>");
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