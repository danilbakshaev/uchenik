$(function () {


  if ($('#menu')) {
    $('#menu').slinky();
  }

  if ($('#rubric')) {
    $('#rubric').slinky();
  }

  if ($('.slider__items')) {
    $('.slider__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      prevArrow: '.prev-js-slider',
      nextArrow: '.next-js-slider',
    });
  }

  if ($('.product-appraisal')) {
    $('.product-appraisal').slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      prevArrow: '.prev-js-digital--33',
      nextArrow: '.next-js-digital--33',
      responsive: [{
        breakpoint: 1240,
        settings: {
          swipe: true,
          swipeToSlide: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true
        }
      }, ]
    });
  }

  if ($('.digital__slide')) {
    $('.digital__slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      prevArrow: '.prev-js-digital--1',
      nextArrow: '.next-js-digital--1',
    });
  }

  if ($('.hits__items')) {
    $('.hits__items').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      infinite: true,
      autoplay: true,
      swipe: false,
      autoplaySpeed: 5000,
      prevArrow: '.prev-js-hits',
      nextArrow: '.next-js-hits',
      responsive: [{
        breakpoint: 1240,
        settings: {
          swipe: true,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }, ]
    });
  }


  if ($('#curs-slider')) {
    $('#curs-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '.prev-js-curs',
      nextArrow: '.next-js-curs',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }

  if ($('.brand__items')) {
    $('.brand__items').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
      arrows: true,
      draggable: false,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '.prev-js-brand',
      nextArrow: '.next-js-brand',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
          }
        },
      ]
    });
  }

  if ($('.sale__items--perviy')) {
    $('.sale__items--perviy').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-sale--perviy',
      nextArrow: '.next-js-sale--perviy',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }


  if ($('.sale__items--hity')) {
    $('.sale__items--hity').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-sale--hity',
      nextArrow: '.next-js-sale--hity',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.sale__items--novinky')) {
    $('.sale__items--novinky').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-sale--novinky',
      nextArrow: '.next-js-sale--novinky',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.sale__items--cyfrovie')) {
    $('.sale__items--cyfrovie').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-sale--cyfrovie',
      nextArrow: '.next-js-sale--cyfrovie',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.sale__items--syntezatory')) {
    $('.sale__items--syntezatory').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-sale--syntezatory',
      nextArrow: '.next-js-sale--syntezatory',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.sale__items--skydky')) {
    $('.sale__items--skydky').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-sale--skydky',
      nextArrow: '.next-js-sale--skydky',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }


  if ($('.sale__items--skydk')) {
    $('.sale__items--skydk').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-sale--skydk',
      nextArrow: '.next-js-sale--skydk',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }


  if ($('.sale__items--tovar')) {
    $('.sale__items--tovar').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      // draggable: false,
      infinite: false,
      prevArrow: '.prev-js--tovar',
      nextArrow: '.next-js--tovar',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }


  if ($('.sale__items--tov')) {
    $('.sale__items--tov').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-sale--tov',
      nextArrow: '.next-js-sale--tov',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }

  if ($('.trade__items')) {
    $('.trade__items').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      draggable: false,
      infinite: false,
      prevArrow: '.prev-js-trade',
      nextArrow: '.next-js-trade',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
  }



  //   $('.digital__right-inner').slick({
  //     slidesToShow: 1,
  //     arrows: true,
  //     prevArrow: '<button type="button" class="slider-prev-digital digital__slider-prev">Previous</button>',
  //     nextArrow: '<button type="button" class="slider-next-digital digital__slider-next">Next</button>',
  //     responsive: [{
  //           breakpoint: 9999,
  //           settings: "unslick"
  //       },
  //       {
  //          breakpoint: 1240,
  //          settings: {
  //          slidesToShow: 3,
  //          slidesToScroll: 1
  //       }
  //   },
  // ]
  //   });




  // $('#whitePianino').slick({
  //   slidesToShow: 3
  // });


  $(document).ready(function () {
    $('.reviews-61__photos').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {

      }
    });
  });


  if ($('#map-contact-spb')) {
    ymaps.ready(function () {
      var myMapContact = new ymaps.Map('map-contact-spb', {
        center: [59.8894701, 30.3423895],
        zoom: 13,
        // controls: []
      });

      placemark8 = new ymaps.Placemark([59.8977864, 30.4184471], {
        hintContent: '',
        balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-check.svg',
        // Размеры метки.
        iconImageSize: [44, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

      myMapContact.geoObjects
        .add(placemark8);

      // myMap.behaviors.get('drag').disable();
      myMapContact.behaviors.get('scrollZoom').disable();
      myMapContact.behaviors.get('rightMouseButtonMagnifier').disable();
      myMapContact.behaviors.get('dblClickZoom').disable();
    });
  }

  if ($('#map-contact-moscow')) {
    ymaps.ready(function () {
      var myMapContact = new ymaps.Map('map-contact-moscow', {
        center: [59.8894701, 30.3423895],
        zoom: 13,
        // controls: []
      });

      placemark8 = new ymaps.Placemark([59.8977864, 30.4184471], {
        hintContent: '',
        balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-check.svg',
        // Размеры метки.
        iconImageSize: [44, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

      myMapContact.geoObjects
        .add(placemark8);

      // myMap.behaviors.get('drag').disable();
      myMapContact.behaviors.get('scrollZoom').disable();
      myMapContact.behaviors.get('rightMouseButtonMagnifier').disable();
      myMapContact.behaviors.get('dblClickZoom').disable();
    });
  }

  if ($('#map-contact-murmansk')) {
    ymaps.ready(function () {
      var myMapContact = new ymaps.Map('map-contact-murmansk', {
        center: [59.8894701, 30.3423895],
        zoom: 13,
        // controls: []
      });

      placemark8 = new ymaps.Placemark([59.8977864, 30.4184471], {
        hintContent: '',
        balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-check.svg',
        // Размеры метки.
        iconImageSize: [44, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

      myMapContact.geoObjects
        .add(placemark8);

      // myMap.behaviors.get('drag').disable();
      myMapContact.behaviors.get('scrollZoom').disable();
      myMapContact.behaviors.get('rightMouseButtonMagnifier').disable();
      myMapContact.behaviors.get('dblClickZoom').disable();
    });
  }

  if ($('#map-delivery')) {
    ymaps.ready(function () {
      var myMapContact = new ymaps.Map('map-delivery', {
        center: [59.897767, 30.418519],
        zoom: 13,
        // controls: []
      });

      placemark8 = new ymaps.Placemark([59.897767, 30.418519], {
        hintContent: '',
        balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-check.svg',
        // Размеры метки.
        iconImageSize: [44, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

      myMapContact.geoObjects
        .add(placemark8);

      // myMap.behaviors.get('drag').disable();
      myMapContact.behaviors.get('scrollZoom').disable();
      myMapContact.behaviors.get('rightMouseButtonMagnifier').disable();
      myMapContact.behaviors.get('dblClickZoom').disable();
    });
  }

  if ($('#map-about')) {
    ymaps.ready(function () {
      var myMapContact = new ymaps.Map('map-about', {
        center: [59.897767, 30.418519],
        zoom: 17,
        // controls: []
      });

      placemark8 = new ymaps.Placemark([59.897767, 30.418519], {
        hintContent: '',
        balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-check.svg',
        // Размеры метки.
        iconImageSize: [44, 55],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

      myMapContact.geoObjects
        .add(placemark8);

      // myMap.behaviors.get('drag').disable();
      myMapContact.behaviors.get('scrollZoom').disable();
      myMapContact.behaviors.get('rightMouseButtonMagnifier').disable();
      myMapContact.behaviors.get('dblClickZoom').disable();
    });
  }






  $(window).on('resize', function (e) {

    if (window.innerWidth < 1240) {


      if (!$('#base-slick0').hasClass('slick-initialized')) {
        $('#base-slick0').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base0',
          nextArrow: '.next-js-base0',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }



      if (!$('#base-slick1').hasClass('slick-initialized')) {
        $('#base-slick1').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base1',
          nextArrow: '.next-js-base1',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }



      if (!$('#base-slick2').hasClass('slick-initialized')) {
        $('#base-slick2').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base2',
          nextArrow: '.next-js-base2',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }



      if (!$('#base-slick3').hasClass('slick-initialized')) {
        $('#base-slick3').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base3',
          nextArrow: '.next-js-base3',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }




      if (!$('#base-slick4').hasClass('slick-initialized')) {
        $('#base-slick4').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base4',
          nextArrow: '.next-js-base4',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }



      if (!$('#base-slick5').hasClass('slick-initialized')) {
        $('#base-slick5').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base5',
          nextArrow: '.next-js-base5',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }



      if (!$('#base-slick6').hasClass('slick-initialized')) {
        $('#base-slick6').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base6',
          nextArrow: '.next-js-base6',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }



      if (!$('#base-slick7').hasClass('slick-initialized')) {
        $('#base-slick7').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base7',
          nextArrow: '.next-js-base7',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }



      if (!$('#base-slick8').hasClass('slick-initialized')) {
        $('#base-slick8').slick({
          arrows: true,
          dots: false,
          infinite: false,
          draggable: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: '.prev-js-base8',
          nextArrow: '.next-js-base8',
          responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3

              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }



      if ($('.services__items--perviy')) {
        $('.services__items--perviy').slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          draggable: false,
          arrows: true,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          prevArrow: '.prev-js-services--perviy',
          nextArrow: '.next-js-services--perviy',
          responsive: [{
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }, ]
        });
      }

      if ($('.item__head-wrap')) {
        $('.item__head-wrap').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: false,
          arrows: true,
          dots: true,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 5000,
          prevArrow: '.prev-js-services--perviy',
          nextArrow: '.next-js-services--perviy',
          responsive: [{
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }, ]
        });
      }

      if ($('.services__items--top')) {
        if (!$('.services__items--top').hasClass('slick-initialized')) {
          $('.services__items--top').slick({
            arrows: true,
            dots: false,
            draggable: false,
            prevArrow: '.prev-js-services--top',
            nextArrow: '.next-js-services--top',
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }, ]
          });
        }
      }

      if ($('.services__items--bottom')) {
        if (!$('.services__items--bottom').hasClass('slick-initialized')) {
          $('.services__items--bottom').slick({
            arrows: true,
            dots: false,
            draggable: false,
            prevArrow: '.prev-js-services--bottom',
            nextArrow: '.next-js-services--bottom',
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }, ]
          });
        }
      }

      if ($('.services__items--white2')) {
        if (!$('.services__items--white2').hasClass('slick-initialized')) {
          $('.services__items--white2').slick({
            arrows: true,
            dots: true,
            draggable: false,
            prevArrow: '.prev-js-services--white2',
            nextArrow: '.next-js-services--white2',
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }, ]
          });
        }
      }


      if ($('#slick-look')) {
        if (!$('#slick-look').hasClass('slick-initialized')) {
          $('#slick-look').slick({
            arrows: true,
            dots: false,
            infinite: false,
            draggable: false,
            prevArrow: '.prev-js-look',
            nextArrow: '.next-js-look',
            slidesToShow: 3.2,
            slidesToScroll: 3.2,
          });
        }
      }

      if ($('#slick-license')) {
        if (!$('#slick-license').hasClass('slick-initialized')) {
          $('#slick-license').slick({
            arrows: true,
            dots: false,
            infinite: false,
            draggable: false,
            prevArrow: '.prev-js-license',
            nextArrow: '.next-js-license',
            slidesToShow: 3.2,
            slidesToScroll: 3.2,
          });
        }
      }

      if ($('.whitePianino')) {
        if (!$('.whitePianino').hasClass('slick-initialized')) {
          $('.whitePianino').slick({
            arrows: true,
            prevArrow: '.prev-js-whitePianino',
            nextArrow: '.next-js-whitePianino',
            dots: false,
            infinite: false,
            slidesToShow: 2.5,
            responsive: [{
              breakpoint: 740,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
              breakpoint: 400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }, ]
          });
        }
      }

      if ($('.blackPianino')) {
        if (!$('.blackPianino').hasClass('slick-initialized')) {
          $('.blackPianino').slick({
            arrows: true,
            prevArrow: '.prev-js-blackPianino',
            nextArrow: '.next-js-blackPianino',
            dots: false,
            infinite: false,
            slidesToShow: 2.5,
            responsive: [{
              breakpoint: 740,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
              breakpoint: 400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }, ]
          });
        }
      }

      if ($('#art-slick')) {
        if (!$('#art-slick').hasClass('slick-initialized')) {
          $('#art-slick').slick({
            arrows: false,
            dots: false,
            infinite: false,
            slidesToShow: 2,
            responsive: [{
              breakpoint: 760,
              settings: {
                dots: false
              }
            }, ]
          });
        }
      }

      if ($('.digital__right-inner--komplekt2')) {
        if (!$('.digital__right-inner--komplekt2').hasClass('slick-initialized')) {
          $('.digital__right-inner--komplekt2').slick({
            arrows: true,
            prevArrow: '.prev-js--komplekt2',
            nextArrow: '.next-js--komplekt2',
            dots: false,
            infinite: false,
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
            responsive: [{
              breakpoint: 440,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                dots: false
              }
            }, ]
          });
        }
      }

      if ($('.digital__right-inner--komplekt3')) {
        if (!$('.digital__right-inner--komplekt3').hasClass('slick-initialized')) {
          $('.digital__right-inner--komplekt3').slick({
            arrows: true,
            prevArrow: '.prev-js--komplekt3',
            nextArrow: '.next-js--komplekt3',
            dots: false,
            infinite: false,
            slidesToShow: 2.5,
            slidesToScroll: 2.5,
            responsive: [{
              breakpoint: 440,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                dots: false
              }
            }, ]
          });
        }
      }

      // if ($('#services-slick')) {
      //   if (!$('#services-slick').hasClass('slick-initialized')) {
      //     $('#services-slick').slick({
      //       arrows: false,
      //       dots: true,
      //       infinite: false,
      //       slidesToShow: 2,
      //       responsive: [{
      //         breakpoint: 660,
      //         settings: {
      //           dots: false,
      //           slidesToShow: 1,
      //         }
      //       }, ]
      //     });
      //   }
      // }
    };
  }).trigger('resize');



  if ($('.digital__right-inner--komplekt1')) {
    $('.digital__right-inner--komplekt1').slick({
      slidesToShow: 4.5,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      prevArrow: '.prev-js--komplekt1',
      nextArrow: '.next-js--komplekt1',
      responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        },
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: false
        }
      }, ]
    });
  }

  if ($('.slider-for')) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      draggable: false,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      autoSlidesToShow: true,
      slidesToShow: 7,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      infinite: false,
      draggable: false,
      variableWidth: true,
    });
  }

  if ($('.zoom-gallery')) {
    $('.zoom-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function (element) {
          return element.find('img');
        }
      }
    });
  }


  // $(window).on('resize', function(e){
  //   // Переменная, по которой узнаем запущен слайдер или нет.
  //   // Храним её в data
  //   var init = $(".card-box").data('init-slider');
  //   // Если мобильный
  //   if(window.innerWidth < 1240){
  //     // Если слайдер не запущен
  //     if(init != 1){
  //       // Запускаем слайдер и записываем в data init-slider = 1
  //       $('#blackPianino').slick({
  //         arrows: false,
  //         dots: true,
  //         slidesToShow: 2.2
  //       }).data({'init-slider': 1});
  //     }
  //   }
  // }).trigger('resize');




  // window.addEventListener("resize", function () {
  //   if (window.innerWidth <= 1240) {
  //     $('.sale__items').slick('unslick');
  //     sliderIsLive = false;
  //   } else {
  //     if (sliderIsLive) {
  //       $('.sale__items').slick();
  //       sliderIsLive = true;
  //     }
  //   }
  // });
  // window.addEventListener("resize", function () {
  //   if (window.innerWidth <= 1240) {
  //     $('.curs__items').slick('unslick');
  //     sliderIsLive = false;
  //   } else {
  //     if (sliderIsLive) {
  //       $('.curs__items').slick();
  //       sliderIsLive = true;
  //     }
  //   }
  // });

  if ($('a[href^="#btn-up"]')) {
    $('a[href^="#btn-up"]').click(function () { // #1
      let anchor = $(this).attr('href'); // #2
      $('html, body').animate({ // #3
        scrollTop: $(anchor).offset().top // #4
      }, 600); // #5
    });
  }

  //Валидатор форм и маска для форм
  // const offerFormModal = $('.offer-form-modal')
  // offerFormModal.submit(function (e) {
  //   e.preventDefault()
  // })

  // offerFormModal.validate({
  //   errorElement: "",
  //   errorPlacement: (error, element) =>
  //     error.appendTo(element.parent().parent()),
  //   rules: {
  //     tel: {
  //       maskRu: true
  //     }
  //   },
  //   messages: {
  //     name: "",
  //     tel: ""
  //   },
  //   submitHandler: function (form) {
  //     const formInstance = $(form)

  //     console.log('submit')
  //     $.ajax({
  //       type: "POST",
  //       url: "mail.php",
  //       data: formInstance.serialize()
  //     }).done(function () {
  //       console.log('DONE')
  //       formInput.val("");
  //       formInput.siblings().removeClass('active')
  //       $('.modal-wrapper-offer .success-message').addClass('show')
  //     });
  //     return false;
  //   }
  // });
  // jQuery.validator.addMethod('maskRu', function (value, element) {
  //   console.log(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value));
  //   return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  // });

  // $('[name="tel"]').mask("+7(999)999-9999", {
  //   autoclear: false
  // });

  if ($('.header-banner')) {
    $('.header-banner__close').on('click', function () {
      $('.header-banner').removeClass('header-banner--show');
      localStorage.setItem('a', '25')
    });

    if (!localStorage.getItem('a')) {
      $('.header-banner').addClass('header-banner--show');
    }
  }

  if ($(".article-hide")) {
    $(".article-hide").hide()
    $(".article__inner").click(function () {
      $(this).toggleClass("article__inner--active");
      $(this).children(".article-hide").slideToggle("slow");
    });
  }

  if ($(".wrapper-final__text")) {
    $(".telReg").click(function () {
      $(".card__input").removeClass("card__input--active");
      $(".telReg").removeClass("wrapper-final__text-blue");
      $(".telRegInput").addClass("card__input--active");
      $(".emailReg").addClass("wrapper-final__text-blue");
    });

    $(".emailReg").click(function () {
      $(".card__input").removeClass("card__input--active");
      $(".emailReg").removeClass("wrapper-final__text-blue");
      $(".emailRegInput").addClass("card__input--active");
      $(".telReg").addClass("wrapper-final__text-blue");
    });
  }

  saleItem = $(".sale__item--digital");
  sortSvgHorizontal = $(".sort--horizontal");
  sortSvgVertical = $(".sort--vertical");

  catalogView = localStorage.getItem('catalogView', 'vertical')
  if (catalogView === null || catalogView === 'vertical') {
    console.log("vertical")
    saleItem.removeClass('sale__item--horizont')
    sortSvgVertical.addClass('svg--active')
  } else if (catalogView === 'horizontal') {
    console.log("horizontal")
    saleItem.addClass('sale__item--horizont')
    sortSvgHorizontal.addClass('svg--active')
  }

  $('.viewLine').on('click', function () {
    localStorage.setItem('catalogView', 'horizontal')
    saleItem.addClass('sale__item--horizont')
    sortSvgVertical.removeClass('svg--active')
    sortSvgHorizontal.addClass('svg--active')
  });

  $('.viewSquare').on('click', function () {
    localStorage.setItem('catalogView', 'vertical')
    saleItem.removeClass('sale__item--horizont')
    sortSvgHorizontal.removeClass('svg--active')
    sortSvgVertical.addClass('svg--active')
  });

  musicCatalogLink = $(".music__catalog-link");
  musicCatalogItem = $(".music__link-item");

  musicCatalogLink.click(function () {
    // Убираем со всех кнопок класс active
    musicCatalogLink.removeClass('subcategory--active');
    musicCatalogItem.removeClass('subcategory--active');

    $(this).addClass('subcategory--active');

    for (const item of musicCatalogItem) {
      if (item.dataset.subcategory === this.dataset.subcategory) {
        $(item).addClass('subcategory--active');
      }
    }
  });

  $(".contacts__bottom--contacts").not(":first").hide();
  $(".title-link__link--contact").click(function () {
    $(".title-link__link--contact").removeClass("title-link__link--active").eq($(this).index()).addClass("title-link__link--active");
    $(".contacts__bottom--contacts").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active");

  $(".instrument-tab1").not(":first").hide();
  $(".title-link__link--choose").click(function () {
    $(".title-link__link--choose").removeClass("title-link__link--active1").eq($(this).index()).addClass("title-link__link--active1");
    $(".instrument-tab1").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active1");

  $(".instrument-tab2").not(":first").hide();
  $(".title-link__link--object").click(function () {
    $(".title-link__link--object").removeClass("title-link__link--active3").eq($(this).index()).addClass("title-link__link--active3");
    $(".instrument-tab2").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active3");

  $(".instrument-tab3").not(":first").hide();
  $(".title-link__link--advice").click(function () {
    $(".title-link__link--advice").removeClass("title-link__link--active2").eq($(this).index()).addClass("title-link__link--active2");
    $(".instrument-tab3").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active2");

  $(".instrument-tab4").not(":first").hide();
  $(".title-link__link--instrument").click(function () {
    $(".title-link__link--instrument").removeClass("title-link__link--active4").eq($(this).index()).addClass("title-link__link--active4");
    $(".instrument-tab4").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active4");

  $(".contacts-payment").not(":first").hide();
  $(".title-link__link--payment").click(function () {
    $(".title-link__link--payment").removeClass("title-link__link--active5").eq($(this).index()).addClass("title-link__link--active5");
    $(".contacts-payment").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active5");

  $(".instrument-tab5").not(":first").hide();
  $(".title-link__link--choose2").click(function () {
    $(".title-link__link--choose2").removeClass("title-link__link--active6").eq($(this).index()).addClass("title-link__link--active6");
    $(".instrument-tab5").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active6");

  $(".instrument-tab6").not(":first").hide();
  $(".title-link__link--choose3").click(function () {
    $(".title-link__link--choose3").removeClass("title-link__link--active7").eq($(this).index()).addClass("title-link__link--active7");
    $(".instrument-tab6").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active7");

  $(".instrument-tab7").not(":first").hide();
  $(".title-link__link--choose3-1").click(function () {
    $(".title-link__link--choose3-1").removeClass("title-link__link--active8").eq($(this).index()).addClass("title-link__link--active8");
    $(".instrument-tab7").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active8");

  $(".instrument-tab8").not(":first").hide();
  $(".title-link__link--choose3-2").click(function () {
    $(".title-link__link--choose3-2").removeClass("title-link__link--active9").eq($(this).index()).addClass("title-link__link--active9");
    $(".instrument-tab8").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("title-link__link--active9");

  if ($(".select")) {
    $('.select').each(function () {
      const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

      _this.hide();
      _this.wrap('<div class="select"></div>');
      $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
      }).insertAfter(_this);

      const selectHead = _this.next('.new-select');
      $('<div>', {
        class: 'new-select__list'
      }).insertAfter(selectHead);

      const selectList = selectHead.next('.new-select__list');
      for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
              text: selectOption.eq(i).text()
            })
          })
          .attr('data-value', selectOption.eq(i).val())
          .appendTo(selectList);
      }

      const selectItem = selectList.find('.new-select__item');
      selectList.slideUp(0);
      selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
          $(this).addClass('on');
          selectList.slideDown(duration);

          selectItem.on('click', function () {
            let chooseItem = $(this).data('value');

            $('select').val(chooseItem).attr('selected', 'selected');
            selectHead.text($(this).find('span').text());

            selectList.slideUp(duration);
            selectHead.removeClass('on');
          });

        } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
        }
      });
    });
  }

});

//Модальные окна на Pure Js
(function () {

  //Вызов окна колбека
  if (document.querySelector('.openCallback')) {
    openCallback = document.querySelectorAll('.openCallback');
    callbackModal = document.querySelector('.modal-wrapper__callback');

    for (let i = 0; i < openCallback.length; i++) {
      openCallback[i].addEventListener('click', () => {
        openBaseModal();
        callbackModal.classList.remove('hidden');
        setTimeout(function () {
          callbackModal.classList.remove('animation');
        }, 20);
      });
    }

    function closecallbackPopup() {
      if (!callbackModal.classList.contains('hidden')) {
        callbackModal.classList.add('animation');
        callbackModal.addEventListener('transitionend', function (e) {
          callbackModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openReg')) {
    openReg = document.querySelectorAll('.openReg');
    regModal = document.querySelector('.modal-wrapper__callback--reg');

    
    if (document.querySelector('.openReg')) {
      for (let i = 0; i < openReg.length; i++) {
        openReg[i].addEventListener('click', () => {
          body.style.maxHeight = "100vh";
          closecallbackPopup();
          openBaseModal();
          regModal.classList.remove('hidden');
          setTimeout(function () {
            regModal.classList.remove('animation');
          }, 20);
        });
      }
    }

    function closeRegPopup() {
      if (!regModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        regModal.classList.add('animation');
        regModal.addEventListener('transitionend', function (e) {
          regModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openLogin')) {
    openLogin = document.querySelector('.openLogin');
    loginModal = document.querySelector('.modal-wrapper__callback--login');

    openLogin.addEventListener('click', function () {
      body.style.maxHeight = "100vh";
      closecallbackPopup();
      closeRegPopup();
      openBaseModal();
      loginModal.classList.remove('hidden');
      setTimeout(function () {
        loginModal.classList.remove('animation');
      }, 20);
    })

    function closeLoginPopup() {
      if (!loginModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        loginModal.classList.add('animation');
        loginModal.addEventListener('transitionend', function (e) {
          loginModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openRecovery')) {
    openRecovery = document.querySelectorAll('.openRecovery');
    recoveryModal = document.querySelector('.modal-wrapper__callback--recovery');

    if (document.querySelector('.openRecovery')) {
      for (let i = 0; i < openRecovery.length; i++) {
        openRecovery[i].addEventListener('click', () => {
          body.style.maxHeight = "100vh";
          closecallbackPopup();
          openBaseModal();
          recoveryModal.classList.remove('hidden');
          setTimeout(function () {
            recoveryModal.classList.remove('animation');
          }, 20);
        });
      }
    }

    function closeLoginPopup() {
      if (!recoveryModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        recoveryModal.classList.add('animation');
        recoveryModal.addEventListener('transitionend', function (e) {
          recoveryModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openSuccess')) {
    openSuccess = document.querySelector('.openSuccess');
    successModal = document.querySelector('.modal-wrapper__callback--success');

    openSuccess.addEventListener('click', function () {
      openBaseModal();
      body.style.maxHeight = "100vh";
      successModal.classList.remove('hidden');
      setTimeout(function () {
        successModal.classList.remove('animation');
      }, 20);
    })


    function closeSuccessModal() {
      if (!successModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        successModal.classList.add('animation');
        successModal.addEventListener('transitionend', function (e) {
          successModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openOrderInOne')) {
    openOrderInOne = document.querySelector('.openOrderInOne');
    orderInOneModal = document.querySelector('.modal-wrapper__orderinone');

    openOrderInOne.addEventListener('click', function () {
      openBaseModal();
      body.style.maxHeight = "100vh";
      orderInOneModal.classList.remove('hidden');
      setTimeout(function () {
        orderInOneModal.classList.remove('animation');
      }, 20);
    })


    function closeOrderInOneModal() {
      if (!orderInOneModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        orderInOneModal.classList.add('animation');
        orderInOneModal.addEventListener('transitionend', function (e) {
          orderInOneModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openBasket')) {
    openBasket = document.querySelector('.openBasket');
    basketModal = document.querySelector('.modal-wrapper--basket');

    openBasket.addEventListener('click', function () {
      openBaseModal();
      body.style.maxHeight = "100vh";
      basketModal.classList.remove('hidden');
      setTimeout(function () {
        basketModal.classList.remove('animation');
      }, 20);
    })


    function closeBasketModal() {
      if (!basketModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        basketModal.classList.add('animation');
        basketModal.addEventListener('transitionend', function (e) {
          basketModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }
  if (document.querySelector('.openCredit')) {
    openCredit = document.querySelector('.openCredit');
     creditModal = document.querySelector('.modal-wrapper--credit');

    openCredit.addEventListener('click', function () {
      openBaseModal();
      body.style.maxHeight = "100vh";
      creditModal.classList.remove('hidden');
      setTimeout(function () {
        creditModal.classList.remove('animation');
      }, 20);
    })


    function closeCreditModal() {
      if (!creditModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        creditModal.classList.add('animation');
        creditModal.addEventListener('transitionend', function (e) {
          creditModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  //Вызов окна колбека
  if (document.querySelector('.openMenu')) {
    openLeftMenu = document.querySelector('.openMenu');
    leftMenuModal = document.querySelector('.modal-wrapper__left-menu');

    openLeftMenu.addEventListener('click', function () {
      openBaseModal();
      leftMenuModal.classList.remove('hidden');
      setTimeout(function () {
        leftMenuModal.classList.remove('animation');
      }, 20);
    })


    function closeleftMenuModal() {
      if (!leftMenuModal.classList.contains('hidden')) {
        leftMenuModal.classList.add('animation');
        leftMenuModal.addEventListener('transitionend', function (e) {
          leftMenuModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }


  if (document.querySelector('.openMenuWhite')) {
    openMenuWhite = document.querySelector('.openMenuWhite');
    leftMenuModal = document.querySelector('.modal-wrapper__left-menu');

    openMenuWhite.addEventListener('click', function () {
      openBaseModal();
      leftMenuModal.classList.remove('hidden');
      setTimeout(function () {
        leftMenuModal.classList.remove('animation');
      }, 20);
    })


    function closeleftMenuModal() {
      if (!leftMenuModal.classList.contains('hidden')) {
        leftMenuModal.classList.add('animation');
        leftMenuModal.addEventListener('transitionend', function (e) {
          leftMenuModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openRubric')) {
    openRubric = document.querySelectorAll('.openRubric');
    rubricModal = document.querySelector('.modal-wrapper__rubric');

    if (document.querySelector('.openRubric')) {
      for (let i = 0; i < openRubric.length; i++) {
        openRubric[i].addEventListener('click', () => {
          openBaseModal();
          body.style.maxHeight = "100vh";
          rubricModal.classList.remove('hidden');
          setTimeout(function () {
            rubricModal.classList.remove('animation');
          }, 20);
        });
      }
    }

    function closeRubricModal() {
      if (!rubricModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        rubricModal.classList.add('animation');
        rubricModal.addEventListener('transitionend', function (e) {
          rubricModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openCity')) {
    openCity = document.querySelectorAll('.openCity');
    cityModal = document.querySelector('.modal-wrapper__city');

    if (document.querySelector('.openCity')) {
      for (let i = 0; i < openCity.length; i++) {
        openCity[i].addEventListener('click', () => {
          body.style.maxHeight = "100vh";
          openBaseModal();
          cityModal.classList.remove('hidden');
          setTimeout(function () {
            cityModal.classList.remove('animation');
          }, 20);
        });
      }
    }

    function closeCityModal() {
      if (!cityModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        cityModal.classList.add('animation');
        cityModal.addEventListener('transitionend', function (e) {
          cityModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  if (document.querySelector('.openQuestion')) {
    openQuestion = document.querySelector('.openQuestion');
    questionModal = document.querySelector('.modal-wrapper__question');

    openQuestion.addEventListener('click', function () {
      body.style.maxHeight = "100vh";
      openBaseModal();
      questionModal.classList.remove('hidden');
      setTimeout(function () {
        questionModal.classList.remove('animation');
      }, 20);
    })

    function closeQuestionModal() {
      if (!questionModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        questionModal.classList.add('animation');
        questionModal.addEventListener('transitionend', function (e) {
          questionModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }if (document.querySelector('.openReview')) {
    openReview = document.querySelector('.openReview');
    reviewModal = document.querySelector('.modal-wrapper__review');

    openReview.addEventListener('click', function () {
      body.style.maxHeight = "100vh";
      openBaseModal();
      reviewModal.classList.remove('hidden');
      setTimeout(function () {
        reviewModal.classList.remove('animation');
      }, 20);
    })

    function closeReviewModal() {
      if (!reviewModal.classList.contains('hidden')) {
        body.style.maxHeight = "100%";
        reviewModal.classList.add('animation');
        reviewModal.addEventListener('transitionend', function (e) {
          reviewModal.classList.add('hidden');
        }, {
          capture: false,
          once: true,
          passive: false
        });
      }
    };
  }

  function closeAllModal() {
    if (document.querySelector('.openCallback')) {
      closecallbackPopup();
    }
    if (document.querySelector('.openReg')) {
      closeRegPopup();
    }
    if (document.querySelector('.openLogin')) {
      closeLoginPopup();
    }
    if (document.querySelector('.openSuccess')) {
      closeSuccessModal();
    }
    if (document.querySelector('.openOrderInOne')) {
      closeOrderInOneModal();
    }
    if (document.querySelector('.openBasket')) {
      closeBasketModal();
    }
    if (document.querySelector('.openCredit')) {
      closeCreditModal();
    }
    if (document.querySelector('.openReview')) {
      closeReviewModal();
    }
    if (document.querySelector('.openMenu')) {
      closeleftMenuModal();
    }
    if (document.querySelector('.openRubric')) {
      closeRubricModal();
    }
    if (document.querySelector('.openCity')) {
      closeCityModal();
    }
    if (document.querySelector('.openQuestion')) {
      closeQuestionModal();
    }
    closeBaseModal();
  };

  //База модальных окон
  body = document.querySelector('body');
  modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapperBg = document.querySelector('.modal-wrapper__bg');
  modalWrapperClose = document.querySelectorAll('.modal-wrapper__close');

  function openBaseModal() {
    body.classList.add('noflow');
    modalWrapper.classList.remove('hidden');
    setTimeout(function () {
      modalWrapper.classList.remove('animation');
    }, 20);
  };

  function closeBaseModal() {
    body.classList.remove('noflow');
    modalWrapper.classList.add('animation');
    modalWrapper.addEventListener('transitionend', function (e) {
      modalWrapper.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  };

  for (let i = 0; i < modalWrapperClose.length; i++) {
    modalWrapperClose[i].addEventListener('click', () => {
      closeAllModal();
    });
  }

  modalWrapperBg.addEventListener('click', function () {
    closeAllModal();
  })

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) {
      closeAllModal();
    }
  };

})();