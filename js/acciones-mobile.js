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
    
//    var posicionPorcentualActual = posicionActual/alturaTotal;
//    alturaTotal = document.getElementById("contenedor").scrollHeight;
//    var nuevaPosicion = (posicionPorcentualActual-0.1)*alturaTotal;
//    scrollTo(0, nuevaPosicion);
});

