function configurarCss(){var e=document.getElementsByTagName("head")[0],t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href="css/estilos_mobile_min.css",t.media="all",e.appendChild(t)}function configurarSlick(){var e=document.getElementsByTagName("head")[0],t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href="libs/slick/slick-theme-mobile_min.css",t.media="all",e.appendChild(t)}function onScroll(){actualizarHeader(),actualizarEstadoSeccion()}function actualizarHeader(){var e=document.body.scrollTop;posicionActual=e;var t=document.getElementById("boton_perfil");t.style.opacity="1";var o=document.getElementById("boton_conocimientos");o.style.opacity="1";var a=document.getElementById("boton_proyectos");a.style.opacity="1";var r=document.getElementById("boton_portfolio");r.style.opacity="1";var i,n,c;esPortrait()?(i=1200,n=3800,c=8e3):(i=600,n=2e3,c=5500),i>=e&&(cambiarTitulo("PERFIL"),t.style.opacity="0.5"),e>i&&n>=e&&(cambiarTitulo("CONOCIMIENTOS"),o.style.opacity="0.5"),e>n&&c>=e&&(cambiarTitulo("PROYECTOS"),a.style.opacity="0.5"),e>c&&(cambiarTitulo("PORTFOLIO"),r.style.opacity="0.5")}function actualizarEstadoSeccion(){isScrolledIntoView("#conocimientos")&&(estadoSeccion="conocimientos")}function isScrolledIntoView(e){var t=$(window).scrollTop(),o=t+$(window).height(),a=$(e).offset().top,r=a+$(e).height();return o>=r&&a>=t||r>o&&t>a}function configurarCarruselParaPortrait(){$(".carrusel").slick("slickSetOption","slidesToShow",1,"refresh",!0)}function configurarCarruselParaLandscape(){$(".carrusel").slick("slickSetOption","slidesToShow",2,"refresh",!0)}function esPortrait(){return 0==screen.orientation.angle}configurarCss(),configurarSlick();var estadoSeccion="no";$(document).ready(function(){$(".carrusel").slick({autoplay:!0,autoplaySpeed:3e3,dots:!0,arrows:!1}),esPortrait()||configurarCarruselParaLandscape();var e=document.getElementsByClassName("portfolio_proyectos");Array.prototype.forEach.call(e,function(e){e.addEventListener("click",function(){window.open(e.children[0].href)})})}),$(window).on("orientationchange",function(){esPortrait()?configurarCarruselParaPortrait():configurarCarruselParaLandscape()});