function configurarSlickTheme(){var e=document.getElementsByTagName("head")[0],o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.href="libs/slick/slick-theme-desktop.css",o.media="all",e.appendChild(o)}function configurarSlick(){var e=document.getElementsByTagName("head")[0],o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.href="libs/slick/slick-desktop.css",o.media="all",e.appendChild(o)}function onScroll(){var e=window.pageYOffset||document.body.scrollTop,o=document.getElementById("boton_perfil");o.style.opacity="1";var t=document.getElementById("boton_conocimientos");t.style.opacity="1";var i=document.getElementById("boton_proyectos");i.style.opacity="1";var n=document.getElementById("boton_portfolio");n.style.opacity="1",$(".botones_header").hover(function(){$(this).css("opacity","0.5")},function(){$(this).css("opacity","1")});var c,s,r;esResponsiveChico()?(c=450,s=1550,r=3900):(c=450,s=1550,r=3100),c>=e&&($("#boton_perfil").unbind("mouseenter mouseleave"),cambiarTitulo("PERFIL"),o.style.opacity="0.5"),e>c&&s>=e&&($("#boton_conocimientos").unbind("mouseenter mouseleave"),cambiarTitulo("CONOCIMIENTOS"),t.style.opacity="0.5"),e>s&&r>=e&&($("#boton_proyectos").unbind("mouseenter mouseleave"),cambiarTitulo("PROYECTOS"),i.style.opacity="0.5"),e>r&&($("#boton_portfolio").unbind("mouseenter mouseleave"),cambiarTitulo("PORTFOLIO"),n.style.opacity="0.5")}function esResponsiveChico(){return $(window).width()<460}function esReponsiveGrande(){return $(window).width()>=850}function corregirFuncionamientoFlechasSlick(){$(".slick-list").css("margin","auto"),$(".slick-list").css("width","90%"),$(".slick-list").css("max-width","700px")}function corregirFuncionamientoFlechasSlickGrande(){$(".slick-list").css("max-width","900px"),$(".slick-prev:before").css("font-size","25px")}configurarSlick(),configurarSlickTheme(),$(window).resize(function(){$(window).width()>=563&&corregirFuncionamientoFlechasSlick(),$(window).width()>=833&&corregirFuncionamientoFlechasSlickGrande()}),$(document).ready(function(){$(".carrusel").slick({autoplay:!0,autoplaySpeed:3e3,dots:!0,arrows:!0,slidesToShow:3,slidesToScroll:1,infinite:!0,responsive:[{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:580,settings:{slidesToShow:1,arrows:!1}}]}),corregirFuncionamientoFlechasSlick(),corregirFuncionamientoFlechasSlickGrande();var e=document.getElementsByClassName("portfolio_proyectos");Array.prototype.forEach.call(e,function(e){var o=e.children[0].children[0],t=e.children[1].children[0];o.addEventListener("mouseover",function(){o.style.opacity="0.6",t.style.textDecoration="underline"}),e.addEventListener("mouseout",function(){o.style.opacity="1",t.style.textDecoration="none"})}),Array.prototype.forEach.call(e,function(e){var o=e.children[0].children[0],t=e.children[1].children[0];t.addEventListener("mouseover",function(){o.style.opacity="0.6",t.style.textDecoration="underline"}),e.addEventListener("mouseout",function(){o.style.opacity="1",t.style.textDecoration="none"})})});