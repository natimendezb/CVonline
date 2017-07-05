configurarSlick();
function configurarSlick(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'libs/slick/slick-theme-desktop.css';
    link.media = 'all';
    head.appendChild(link);
}

function onScroll() {
    var pixelesScroll = document.body.scrollTop;
    var botonPerfil = document.getElementById("boton_perfil");
    botonPerfil.style.opacity = "1";
    var botonConocimientos = document.getElementById("boton_conocimientos");
    botonConocimientos.style.opacity = "1";
    var botonProyectos = document.getElementById("boton_proyectos");
    botonProyectos.style.opacity = "1";
    var botonPortfolio = document.getElementById("boton_portfolio");
    botonPortfolio.style.opacity = "1";
    
    $(".botones_header").hover(
        function() {
            $(this).css("opacity","0.5");
        },
        function() {
            $(this).css("opacity","1");
        }
    );
    
    var pixelesFinPerfil, pixelesFinConocimientos, pixelesFinProyectos
    
    if (esResponsiveChico()) {
        pixelesFinPerfil = 450;
        pixelesFinConocimientos = 1550;
        pixelesFinProyectos = 3900;
    }
    else {
        pixelesFinPerfil = 450;
        pixelesFinConocimientos = 1550;
        pixelesFinProyectos = 3500;
    }
    
    if (pixelesScroll <= pixelesFinPerfil) {
        $("#boton_perfil").unbind('mouseenter mouseleave');
        cambiarTitulo("PERFIL");
        botonPerfil.style.opacity = "0.5";
    }
    if (pixelesScroll > pixelesFinPerfil && pixelesScroll <= pixelesFinConocimientos) {
        $("#boton_conocimientos").unbind('mouseenter mouseleave');
        cambiarTitulo("CONOCIMIENTOS");
        botonConocimientos.style.opacity = "0.5";
    }
    if (pixelesScroll > pixelesFinConocimientos && pixelesScroll <= pixelesFinProyectos) {
        $("#boton_proyectos").unbind('mouseenter mouseleave');
        cambiarTitulo("PROYECTOS");
        botonProyectos.style.opacity = "0.5";
    }

    if (pixelesScroll > pixelesFinProyectos) {
        $("#boton_portfolio").unbind('mouseenter mouseleave');
        cambiarTitulo("PORTFOLIO");
        botonPortfolio.style.opacity = "0.5";
    }
}

function esResponsiveChico(){
    return $(window).width() < 460-23;
}

function corregirFuncionamientoFlechasSlick(){
    $(".slick-list").css("margin", "auto");
    $(".slick-list").css("width", "90%");
    $(".slick-list").css("max-width", "700px");
}

function corregirFuncionamientoFlechasSlickGrande(){
    $(".slick-list").css("max-width", "900px");
    $(".slick-prev:before").css("font-size", "25px");
}

$(window).resize(function() {
    if ($(window).width()>=580-17){
        corregirFuncionamientoFlechasSlick();
    }
    if ($(window).width()>=850-17){
        corregirFuncionamientoFlechasSlickGrande();
    }
});

$(document).ready(function(){
    $('.carrusel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    corregirFuncionamientoFlechasSlick();
    corregirFuncionamientoFlechasSlickGrande();

    var figuresPortfolio = document.getElementsByClassName("portfolio_proyectos");

    Array.prototype.forEach.call(figuresPortfolio,
        function(element) {
            var imagen_portfolio = element.children[0].children[0];
            var titulo_portfolio = element.children[1].children[0];
            imagen_portfolio.addEventListener('mouseover',
                function() {
                    imagen_portfolio.style.opacity = '0.6';
                    titulo_portfolio.style.textDecoration = "underline";
                }
            );
            element.addEventListener('mouseout',
                function() {
                    imagen_portfolio.style.opacity = '1';
                    titulo_portfolio.style.textDecoration = 'none';
                }
            );
        }
    )

    Array.prototype.forEach.call(figuresPortfolio,
        function(element) {
            var imagen_portfolio = element.children[0].children[0];
            var titulo_portfolio = element.children[1].children[0];
            titulo_portfolio.addEventListener('mouseover',
                function() {
                    imagen_portfolio.style.opacity = '0.6';
                    titulo_portfolio.style.textDecoration = "underline";
                }
            );
            element.addEventListener('mouseout',
                function() {
                    imagen_portfolio.style.opacity = '1';
                    titulo_portfolio.style.textDecoration = 'none';
                }
            );
        }
    )
});