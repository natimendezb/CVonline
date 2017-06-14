function cambio_titulo_onscroll() {
    var pixelesScroll = document.body.scrollTop;
    var botonPerfil = document.getElementById("boton_perfil");
        botonPerfil.style.opacity = "1";
    var botonConocimientos = document.getElementById("boton_conocimientos");
        botonConocimientos.style.opacity = "1";
    var botonProyectos = document.getElementById("boton_proyectos");
        botonProyectos.style.opacity = "1";
    var botonPortfolio = document.getElementById("boton_portfolio");
        botonPortfolio.style.opacity = "1";
    
    var pixelesPerfil, pixelesConocimientos, pixelesProyectos
    
    pixelesPerfil = 450;
    pixelesConocimientos = 1500;
    pixelesProyectos = 3800;
    
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

configurarCss();
configurarSlick();


function configurarCss(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/estilos_desktop.css';
    link.media = 'all';
    head.appendChild(link);
}

function configurarSlick(){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'libs/slick/slick-theme-desktop.css';
    link.media = 'all';
    head.appendChild(link);
}


$(document).ready(function(){
    $('.carrusel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
    
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



