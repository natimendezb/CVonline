function cambio_titulo_onclick(nuevo_texto) {
    var pDelHeader = document.getElementById("titulo_seccion");
    
    pDelHeader.innerHTML = nuevo_texto; 
}


var posicionActual;

function cambio_titulo_onscroll() {
    var pixelesScroll = document.body.scrollTop;
    posicionActual = pixelesScroll;
    var botonPerfil = document.getElementById("boton_perfil");
        botonPerfil.style.opacity = "1";
    var botonConocimientos = document.getElementById("boton_conocimientos");
        botonConocimientos.style.opacity = "1";
    var botonProyectos = document.getElementById("boton_proyectos");
        botonProyectos.style.opacity = "1";
    var botonPortfolio = document.getElementById("boton_portfolio");
        botonPortfolio.style.opacity = "1";
    
    var pixelesPerfil, pixelesConocimientos, pixelesProyectos
    
    if (esPortrait()) {
        pixelesPerfil = 475;
        pixelesConocimientos = 1800;
        pixelesProyectos = 3500;
    }
    else {
        pixelesPerfil = 600;
        pixelesConocimientos = 2000;
        pixelesProyectos = 5500;
    }
    
    if (pixelesScroll <= pixelesPerfil) {
            cambio_titulo_onclick("PERFIL");
            botonPerfil.style.opacity = "0.5";
        }
        if (pixelesScroll > pixelesPerfil && pixelesScroll <= pixelesConocimientos) {
            cambio_titulo_onclick("CONOCIMIENTOS");
            botonConocimientos.style.opacity = "0.5";
        }
        if (pixelesScroll > pixelesConocimientos && pixelesScroll <= pixelesProyectos) {
            cambio_titulo_onclick("PROYECTOS");
            botonProyectos.style.opacity = "0.5";
        }

        if (pixelesScroll > pixelesProyectos) {
            cambio_titulo_onclick("PORTFOLIO");
            botonPortfolio.style.opacity = "0.5";
        }
    
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


// Carrusel Slick Portrait / Landscape
function configurarCarruselParaPortrait(){
    $('.carrusel').slick("slickSetOption", "slidesToShow", 1, "refresh", true);
}

function configurarCarruselParaLandscape(){
    $('.carrusel').slick("slickSetOption", "slidesToShow", 2, "refresh", true);
}

function esPortrait(){
    return screen.orientation.angle == 0;
}

// Reponsive
function esMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function configurarCssParaMobile(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/estilos_mobile.css';
    link.media = 'all';
    head.appendChild(link);
}

function configurarCssParaDesktop(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/estilos_desktop.css';
    link.media = 'all';
    head.appendChild(link);
}


if(esMobile()) {
   configurarCssParaMobile();
}
else {
   configurarCssParaDesktop();
}


$(document).ready(function(){
    $('.carrusel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    
    if(!esPortrait()) {
        configurarCarruselParaLandscape();
    }
    
});


$(window).on("orientationchange",function(){
    if(esPortrait()) {
        configurarCarruselParaPortrait();
    } else {
        configurarCarruselParaLandscape();
    }
});




