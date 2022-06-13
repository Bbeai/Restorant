//efecto parallar cuando dos eleentos se mueven a veocidades
//diferentes

$(document).ready(function () {
  //debemos obtener el ancho de pantalla
  //para que solo la ejecute cuadno este en un escritorio

  $(window).scroll(function () {
    var windowWidth = $(window).width();

    if (windowWidth > 800) {
      //valores en media queries
      var scroll = $(window).scrollTop(); //lo podemos correr en la consola del
      //navegador y nos da el valor del scroll

      $("header .texts").css({
        transform: "translate(0px," + scroll / 2 + "%)",
      });

      $(".about article").css({
        transform: "translate(0px, -" + scroll / 2 + "%)",
        //translate (0px, 50px) cambiamos las posicionenes del transform de vorma vertical no orizontal
        //el signo - es para que vaya hacia arriba y no haci abajo
      });
    }
  });

  //cuando cambie la venana que se restablescan los valores

  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 800) {
      $(".about article").css({
        transform: "translate(0px, 0px)",
      });
    }
  });
});
