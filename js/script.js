// -=- BASE -=-

// MODAL INICIAL
$(window).on('load', function () {
  setTimeout(function () {
    const modalEl = $('#promoModal')[0];
    const promoModal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    promoModal.show();
  }, 2000);
});
// FIM MODAL INICIAL

// BREADCRUMB
$(document).ready(function () {
  const pathArray = window.location.pathname.split("/").filter(Boolean);
  const $breadcrumb = $("#breadcrumb");

  $breadcrumb.append(`<li class="breadcrumb-item"><a href="/">Home</a></li>`);

  let cumulativePath = "";
  $.each(pathArray, function (index, segment) {
    cumulativePath += "/" + segment;
    segment = decodeURIComponent(segment.replace(/-/g, " "));

    if (index === pathArray.length - 1) {
      $breadcrumb.append(`<li class="breadcrumb-item active" aria-current="page">${segment}</li>`);
    } else {
      $breadcrumb.append(`<li class="breadcrumb-item"><a href="${cumulativePath}">${segment}</a></li>`);
    }
  });
});
// FIM BREADCRUMB

// HEADER FLUTUANTE (DESKTOP E MOBILE)
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
// FIM HEADER FLUTUANTE



// LOADER
$(function () {
  const $loader = $('#loader');

  function hideLoader() {
    if (!$loader.hasClass('hidden')) {
      $loader.addClass('hidden');
    }
  }

  $(document).on('DOMContentLoaded', function () {
    $('body').addClass('is-loading');
  });

  $(window).on('load', function () {
    $('body').removeClass('is-loading');
    hideLoader();
  });

  setTimeout(function () {
    hideLoader();
    $('body').removeClass('is-loading');
  }, 8000);
});
//FIM LOADER





// COOKIES
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
// FIM COOKIES

// MODAL NEWSLETTER

// FIM MODAL NEWSLETTER

// -=- FIM BASE -=-



// -=- CARROSSÉIS INDEX -=-

// CARROSSEL CATEGORIAS
$(document).ready(function () {
  $('.categories-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 7,
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
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1.8,
        dots: true,

      },
      600: {
        items: 2,
        dots: true

      },
      1000: {
        items: 5,
      }
    }
  });
});

// FIM CARROSSEL PRODUTOS

// CARROSSEL VITRINE DE PROMOÇÕES
$(document).ready(function () {
  $(".vitrine-promocoes").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1.2,
        dots: true,
        loop: true

      },
      600: {
        items: 3.2
      },
      1200: {
        items: 4
      }
    }
  });
});
// FIM CARROSSEL VITRINE DE PROMOÇÕES



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
    nav: false,
    dots: false,

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
        stagePadding: 15,
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
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1.2,
        dots: true
      },
      576: {
        items: 2.2,
        dots: true
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
    nav: false,
    dots: false,
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
    nav: false,
    dots: false,
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



// -=- TELA DE PRODUTO -=-

// CARROSSEL IMAGENS E MINI IMAGENS DA TELA DE PRODUTOS
$(document).ready(function () {
  var productCarousel = $('.product-image-carousel');
  var thumbnailCarousel = $('.product-thumbnails');
  var totalItems = thumbnailCarousel.find('img').length;

  productCarousel.owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    dots: true,
    draggable: false,
    swipeThreshold: false,
    mouseDrag: false,
    touchDrag: false,
    0: {
      nav: true,
      draggable: true,
      swipeThreshold: 80,
      mouseDrag: true,
      touchDrag: true
    },
    768: {
      nav: false,
      draggable: false,
      swipeThreshold: false,
      mouseDrag: false,
      touchDrag: false
    }
  });

  thumbnailCarousel.owlCarousel({
    items: 6,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 4 },
      768: { items: 6 }
    }
  });

  thumbnailCarousel.find('img').click(function () {
    var slideTo = $(this).data('slide-to');
    productCarousel.trigger('to.owl.carousel', [slideTo, 300, true]);

    thumbnailCarousel.find('img').removeClass('active');
    $(this).addClass('active');
  });

  productCarousel.on('changed.owl.carousel', function (event) {
    if (!event.namespace) return;

    var realIndex = event.item.index % totalItems;

    thumbnailCarousel.find('img').removeClass('active');
    thumbnailCarousel.find('img[data-slide-to="' + realIndex + '"]').addClass('active');
  });
});

// FIM CARROSSEL IMAGENS DA TELA DE PRODUTOS

// -=- FIM TELA DE PRODUTO -=-