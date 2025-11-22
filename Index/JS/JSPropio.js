//SLICK

$(document).ready(function(){
  $('.SlickOfertas').slick({
    slidesToShow: 4,        // Mostrar 4 cards en fila
    slidesToScroll: 1,      // Mover 1 por vez
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  });
});
