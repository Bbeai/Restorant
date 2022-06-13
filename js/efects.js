$(document).ready(function () {
  //efecto cuando aparece el menu***********************
  $(".menu a").each(function (index, elemento) {
    $(this).css({
      top: "-200px",
    });

    $(this).animate(
      {
        top: "0",
      },
      2000 + index * 500 //si se le quita aparecen a mismo tiempo
    ); //la anumacion se ejecuta
    //cada uno de los elemntos del menu se ejecuta a diferente tiempo
  });

  //Efecto de los textos********************************
  if ($(window).width() > 800) {
    //condicion porque solo aparecera el efecto a cierto tamaño de la pantalla
    $("header.texts").css({
      opacity: 0,
      marginTop: 0,
    });
    $("header.texts").animate(
      {
        opacity: 1,
        marginTop: "-52px",
      },
      1500
    );
  }

  //scroll elementos menu
  var abouthat = $("#about").offset().top, //posicion en la pantalla del contenedor con el id about
    menu = $("#dishes").offset().top,
    galery = $("#galery").offset().top,
    ubication = $("#ubication").offset().top;

  $("#btn-about").on("click", function () {
    // e.preventDefault(); //quita la aomohadilla que aparece en el enlace al peionar en el menu
    $("html,body").animate(
      {
        scrollTop: abouthat,
      },
      500
    );
  });

  $("#btn-menu").on("click", function () {
    // e.preventDefault(); //quita la aomohadilla que aparece en el enlace al peionar en el menu
    $("html,body").animate(
      {
        scrollTop: menu,
      },
      500
    );
  });

  $("#btn-galery").on("click", function () {
    // e.preventDefault(); //quita la aomohadilla que aparece en el enlace al peionar en el menu
    $("html,body").animate(
      {
        scrollTop: galery,
      },
      500
    );
  });

  $("#btn-ubication").on("click", function () {
    // e.preventDefault(); //quita la aomohadilla que aparece en el enlace al peionar en el menu
    $("html,body").animate(
      {
        scrollTop: ubication,
      },
      500
    );
  });
});
