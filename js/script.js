//HEADER FLUTUANTE (DESKTOP E MOBILE)
$(document).ready(function () {
  $('#header-placeholder').load('header.html', function () {
    initHeaderAnimation();
  });

  function initHeaderAnimation() {
    var isVisible = false;

    $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      var isMobile = $(window).width() <= 768;
      var headerId = isMobile ? '#headerFlutuanteMobile' : '#headerFlutuanteDesktop';

      if (scrollPosition > 200 && !isVisible) {
        $(headerId)
          .stop(true, true)
          .fadeIn(500)
          .removeClass('animate__fadeOutUp')
          .addClass('animate__fadeInDown');
        isVisible = true;
      }

      if (scrollPosition <= 200 && isVisible) {
        $(headerId)
          .stop(true, true)
          .fadeOut(500)
          .removeClass('animate__fadeInDown')
          .addClass('animate__fadeOutUp');
        isVisible = false;
      }
    });
  }
});

//FIM HEADER FLUTUANTE

// LOADER
$(document).ready(function () {
  $('body').addClass('loading');

  $(window).on('load', function () {
    if ($('#loader').length) {
      $('#loader').remove();
      $('body').removeClass('loading');
    }
  });

  setTimeout(function () {
    if ($('#loader').length) {
      $('#loader').remove();
      $('body').removeClass('loading');
    }
  }, 1000);
});
// FIM LOADER





//COOKIES
$(document).ready(function () {
  // Verifica se o banner já foi aceito nesta sessão
  if (!sessionStorage.getItem("cookiesAccepted")) {
    $('#cookieBanner').show();
  }

  // Ao clicar em "Aceitar"
  $('#acceptCookies').on('click', function () {
    sessionStorage.setItem("cookiesAccepted", "true");
    $('#cookieBanner').fadeOut();
  });
});
//FIM COOKIES



//MODAL NEWSLETTER

//FIM MODAL NEWSLETTER



// QUANTIDADE PRODUTO

// Funções para aumentar e diminuir a quantidade

$(document).ready(function () {
  // Aumentar a quantidade

  $("#increase").click(function () {
    let currentValue = parseInt($("#quantity").val());
    $("#quantity").val(currentValue + 1);
  });

  // Diminuir a quantidade

  $("#decrease").click(function () {
    let currentValue = parseInt($("#quantity").val());
    if (currentValue > 1) { // Previne que a quantidade fique negativa ou 0
      $("#quantity").val(currentValue - 1);
    }
  });
});

//FIM QUANTIDADE PRODUTO



// -=- CARROSSÉIS INDEX -=-

// CARROSSEL CATEGORIAS
$(document).ready(function () {
  $('.categories-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: true
      },
      600: {
        items: 5,
        nav: true
      },
      1000: {
        items: 7,
        nav: true,
        loop: true
      }
    }
  });
});
// FIM CARROSSEL CATEGORIAS



// CARROSSEL PRODUTOS
$(document).ready(function () {
  $('.products-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 5,
        nav: true,
        loop: true
      }
    }

  })
});
// FIM CARROSSEL PRODUTOS



// CARROSSEL BANNER
$(document).ready(function () {
  $(".carousel-banner").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    items: 1,
    stagePadding: 280,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    dots: true,

    responsive: {
      1200: {
        items: 1,
        stagePadding: 280,
      },
      992: {
        items: 1,
        stagePadding: 150,
      },
      768: {
        items: 1,
        stagePadding: 100,
      },
      0: {
        items: 1,
        stagePadding: 20,
      }
    }
  });
});
// FIM CARROSSEL BANNER



// CARROSSEL BLOG
$(document).ready(function () {
  $('.blog-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});
// FIM CARROSSEL BLOG



// CARROSSEL AVALIAÇÕES
$(document).ready(function () {
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });
});
// FIM CARROSSEL AVALIAÇÕES

// CARROSSEL BANNER INDEX
$(document).ready(function () {
  $('.banner-index-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 2 },
      768: { items: 2 },
      992: { items: 4 }
    }
  });
});
// FIM CARROSSEL BANNER INDEX

// -=- FIM CARROSSÉIS INDEX -=-