function esMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function adaptarANuevaSeccion(e){goToByScroll(e.toLowerCase())}function cambiarTitulo(e){var t=document.getElementById("titulo_seccion");t.innerHTML=e}function goToByScroll(e){e=e.replace("link",""),$("html,body").animate({scrollTop:$("#"+e).offset().top},"slow")}function publicarEdad(){var e=document.getElementById("edad"),t=calculateAge();e.innerHTML=t+" años"}function calculateAge(){var e=new Date("1993-05-28"),t=Date.now()-e.getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)}esMobile()?document.write('<script language="javascript" src="js/acciones-mobile_min.js"></script>'):document.write('<script language="javascript" src="js/acciones-desktop_min.js"></script>');