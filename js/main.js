$(function () {


  if ($('#menu')) {
    $('#menu').slinky();
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
      autoplay: false,
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


  if ($('#map-contact')) {
    ymaps.ready(function () {
      var myMapContact = new ymaps.Map('map-contact', {
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

      if ($('#base-slick')) {
        if (!$('#base-slick').hasClass('slick-initialized')) {
          $('#base-slick').slick({
            arrows: true,
            dots: false,
            infinite: false,
            draggable: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: '.prev-js-base',
            nextArrow: '.next-js-base',
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

  $(".contacts__bottom").not(":first").hide();
  $(".title-link__link--contact").click(function () {
    $(".title-link__link--contact").removeClass("title-link__link--active").eq($(this).index()).addClass("title-link__link--active");
    $(".contacts__bottom").hide().eq($(this).index()).fadeIn()
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

});

//Модальные окна на Pure Js
(function () {

  //Вызов окна колбека
  if (document.querySelector('.openCallback')) {
    openCallback = document.querySelectorAll('.openCallback');
    callbackModal = document.querySelector('.modal-wrapper__callback');

    for (let i = 0; i < openCallback.length; i++) {
      openCallback[i].addEventListener('click', () => {
        closeRegPopup();
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
    openReg = document.querySelector('.openReg');
    regModal = document.querySelector('.modal-wrapper__callback--reg');

    openReg.addEventListener('click', function () {
      closecallbackPopup();
      regModal.classList.remove('hidden');
      setTimeout(function () {
        regModal.classList.remove('animation');
      }, 20);
    })

    function closeRegPopup() {
      if (!regModal.classList.contains('hidden')) {
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

  if (document.querySelector('.openCity')) {
    openCity = document.querySelector('.openCity');
    cityModal = document.querySelector('.modal-wrapper__city');

    openCity.addEventListener('click', function () {
      openBaseModal();
      cityModal.classList.remove('hidden');
      setTimeout(function () {
        cityModal.classList.remove('animation');
      }, 20);
    })

    function closeCityModal() {
      if (!cityModal.classList.contains('hidden')) {
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
      openBaseModal();
      questionModal.classList.remove('hidden');
      setTimeout(function () {
        questionModal.classList.remove('animation');
      }, 20);
    })

    function closeQuestionModal() {
      if (!questionModal.classList.contains('hidden')) {
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
  }

  function closeAllModal() {
    if (document.querySelector('.openCallback')) {
      closecallbackPopup();
    }
    if (document.querySelector('.openReg')) {
      closeRegPopup();
    }
    if (document.querySelector('.openMenu')) {
      closeleftMenuModal();
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