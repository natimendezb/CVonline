// Reponsive
configurarCss();
configurarSlick();

function configurarCss(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/estilos_mobile.css';
    link.media = 'all';
    head.appendChild(link);
}

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
    actualizarHeader();
    actualizarEstadoSeccion();
}

function actualizarHeader() {
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
        pixelesPerfil = 1200;
        pixelesConocimientos = 3800;
        pixelesProyectos = 8000;
    }
    else {
        pixelesPerfil = 600;
        pixelesConocimientos = 2000;
        pixelesProyectos = 5500;
    }
    
    if (pixelesScroll <= pixelesPerfil) {
            cambiarTitulo("PERFIL");
            botonPerfil.style.opacity = "0.5";
        }
        if (pixelesScroll > pixelesPerfil && pixelesScroll <= pixelesConocimientos) {
            cambiarTitulo("CONOCIMIENTOS");
            botonConocimientos.style.opacity = "0.5";
        }
        if (pixelesScroll > pixelesConocimientos && pixelesScroll <= pixelesProyectos) {
            cambiarTitulo("PROYECTOS");
            botonProyectos.style.opacity = "0.5";
        }

        if (pixelesScroll > pixelesProyectos) {
            cambiarTitulo("PORTFOLIO");
            botonPortfolio.style.opacity = "0.5";
        }    
}

var estadoSeccion = "no";
function actualizarEstadoSeccion(){
    if(isScrolledIntoView("#conocimientos")){
        estadoSeccion = "conocimientos";
    }
}

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) ||
            ((elemBottom > docViewBottom) && (elemTop < docViewTop));
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
    
/*    if(estadoSeccion != "no"){
        window.location.hash = estadoSeccion;
    }*/
    
//    var posicionPorcentualActual = posicionActual/alturaTotal;
//    alturaTotal = document.getElementById("contenedor").scrollHeight;
//    var nuevaPosicion = (posicionPorcentualActual-0.1)*alturaTotal;
//    scrollTo(0, nuevaPosicion);
});

