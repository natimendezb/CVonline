// Reponsive
configurarSlick();

function configurarSlick(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'libs/slick/slick-theme-mobile.css';
    link.media = 'all';
    head.appendChild(link);
}


function onScroll(){
    actualizarEstadoSeccion();
    actualizarHeader();
}

function seccionActual(){
    var nombreSeccion = "";
    var pixelesScroll = document.body.scrollTop;
    var pixelesFinPerfil, pixelesFinConocimientos, pixelesFinProyectos
    
    if (esPortrait()) {
        pixelesFinPerfil = 1200;
        pixelesFinConocimientos = 3800;
        pixelesFinProyectos = 8400;
    }
    else {
        pixelesFinPerfil = 600;
        pixelesFinConocimientos = 2400;
        pixelesFinProyectos = 5900;
    }
    
    if (pixelesScroll <= pixelesFinPerfil) {
        nombreSeccion = "perfil";
    }
    if (pixelesScroll > pixelesFinPerfil && pixelesScroll <= pixelesFinConocimientos) {
        nombreSeccion = "conocimientos";
    }
    if (pixelesScroll > pixelesFinConocimientos && pixelesScroll <= pixelesFinProyectos) {
        nombreSeccion = "proyectos";
    }
    if (pixelesScroll > pixelesFinProyectos) {
        nombreSeccion = "portfolio";
    }

    return nombreSeccion;
}

function actualizarHeader() {
    var botonPerfil = document.getElementById("boton_perfil");
        botonPerfil.style.opacity = "1";
    var botonConocimientos = document.getElementById("boton_conocimientos");
        botonConocimientos.style.opacity = "1";
    var botonProyectos = document.getElementById("boton_proyectos");
        botonProyectos.style.opacity = "1";
    var botonPortfolio = document.getElementById("boton_portfolio");
        botonPortfolio.style.opacity = "1";
    
    var nombreSeccionActual = seccionActual();
    if (nombreSeccionActual == "perfil") {
        cambiarTitulo("PERFIL");
        botonPerfil.style.opacity = "0.5";
    }
    if (nombreSeccionActual == "conocimientos") {
        cambiarTitulo("CONOCIMIENTOS");
        botonConocimientos.style.opacity = "0.5";
    }
    if (nombreSeccionActual == "proyectos") {
        cambiarTitulo("PROYECTOS");
        botonProyectos.style.opacity = "0.5";
    }
    if (nombreSeccionActual == "portfolio") {
        cambiarTitulo("PORTFOLIO");
        botonPortfolio.style.opacity = "0.5";
    }
}

var estadoSeccion = null;
function actualizarEstadoSeccion(){
    estadoSeccion = seccionActual();
}

function scrollearASeccion(idSeccion){
    var positionY = $("#"+idSeccion).offset().top;
    window.scrollTo(0, positionY);
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


//var alturaTotal;

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
    
    var figuresPortfolio = document.getElementsByClassName("portfolio_proyectos");

    Array.prototype.forEach.call(figuresPortfolio,
        function(element) {
          element.addEventListener('click',
            function() {
                window.open(element.children[0].href);
            }
          );
        }
    );
//    alturaTotal = document.getElementById("contenedor").scrollHeight;
});


$(window).on("orientationchange",function(){
    if(esPortrait()) {
        configurarCarruselParaPortrait();
    } else {
        configurarCarruselParaLandscape();
    }

    mantenerEnSeccionAlRotar();
});

function mantenerEnSeccionAlRotar() {
    if(estadoSeccion){
        scrollearASeccion(estadoSeccion);
    }
}