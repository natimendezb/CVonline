function cambio_titulo_onclick(nuevo_texto) {
    var pDelHeader = document.getElementById("titulo_seccion");
    
    pDelHeader.innerHTML = nuevo_texto; 
}

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
    
    if (pixelesScroll <= 1000) {
        cambio_titulo_onclick("PERFIL");
        botonPerfil.style.opacity = "0.5";
    }
    if (pixelesScroll > 1000 && pixelesScroll <= 3300) {
        cambio_titulo_onclick("CONOCIMIENTOS");
        botonConocimientos.style.opacity = "0.5";
        //document.getElementById("conocimientos").scrollIntoView();
    }
    if (pixelesScroll > 3300 && pixelesScroll <= 5600) {
        cambio_titulo_onclick("PROYECTOS");
        botonProyectos.style.opacity = "0.5";
    }
    
    if (pixelesScroll > 5600) {
        cambio_titulo_onclick("PORTFOLIO");
        botonPortfolio.style.opacity = "0.5";
    }
}
