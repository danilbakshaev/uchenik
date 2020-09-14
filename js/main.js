$(function () {


  if ($('#menu')) {
    $('#menu').slinky();
  }

  if ($('.slider__items')) {
    $('.slider__items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      prevArrow: '',
      nextArrow: '',
    });
  }

  if ($('.digital__slide')) {
    $('.digital__slide').slick({
      slidesToShow: 1,
      arrows: true,
      variableWidth: true,
      prevArrow: '',
      nextArrow: '',
    });
  }

  if ($('.hits__items')) {
    $('.hits__items').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: '',
      nextArrow: '',
      responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }, ]
    });
  }

  if ($('.services-mobile__items')) {
    $('.services-mobile__items').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '',
      nextArrow: '',
      responsive: [{
        breakpoint: 760,
        settings: {
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
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '',
      nextArrow: '',
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  if ($('.brand__items')) {
    $('.brand__items').slick({
      slidesToShow: 4.1,
      slidesToScroll: 3,
      centerMode: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      // prevArrow: '<button type="button" class="slider-prev brand__slider-prev">Previous</button>',
      // nextArrow: '<button type="button" class="slider-next brand__slider-next">Next</button>',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 3.1,
            slidesToScroll: 2,
            centerMode: true,

          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            centerMode: true,

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,

          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
          }
        }
      ]
    });
  }

  if ($('.sale__items')) {
    $('.sale__items').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '',
      nextArrow: '',
      responsive: [{
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            arrows: true,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
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


  $(window).on('resize', function (e) {

    if (window.innerWidth < 1240) {

      if ($('#base-slick')) {
        if (!$('#base-slick').hasClass('slick-initialized')) {
          $('#base-slick').slick({
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 4,
            prevArrow: '',
            nextArrow: '',
            responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1

                }
              },
              {
                breakpoint: 760,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
        }
      }

      if ($('#slick-look')) {
        if (!$('#slick-look').hasClass('slick-initialized')) {
          $('#slick-look').slick({
            arrows: true,
            dots: false,
            infinite: false,
            // prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
            // nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
            slidesToShow: 3.2
          });
        }
      }

      if ($('#slick-license')) {
        if (!$('#slick-license').hasClass('slick-initialized')) {
          $('#slick-license').slick({
            arrows: true,
            dots: false,
            infinite: false,
            prevArrow: $('#license-arrow-prev'),
            nextArrow: $('#license-arrow-next'),
            // prevArrow: '<button type="button" class="slide-prev sale__slider-prev">Previous</button>',
            // nextArrow: '<button type="button" class="slide-next sale__slider-next">Next</button>',
            slidesToShow: 3
          });
        }
      }

      if ($('#whitePianino')) {
        if (!$('#whitePianino').hasClass('slick-initialized')) {
          $('#whitePianino').slick({
            arrows: true,
            prevArrow: '',
            nextArrow: '',
            dots: false,
            infinite: false,
            slidesToShow: 2.5,
            responsive: [{
              breakpoint: 740,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
              }
            }, ]
          });
        }
      }

      if ($('#blackPianino')) {
        if (!$('#blackPianino').hasClass('slick-initialized')) {
          $('#blackPianino').slick({
            arrows: true,
            prevArrow: '',
            nextArrow: '',
            dots: false,
            infinite: false,
            slidesToShow: 2.5,
            responsive: [{
              breakpoint: 740,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
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

      if ($('#cardSlider-2')) {
        if (!$('#cardSlider-2').hasClass('slick-initialized')) {
          $('#cardSlider-2').slick({
            arrows: true,
            prevArrow: '',
            nextArrow: '',
            dots: false,
            infinite: false,
            slidesToShow: 2.5
          });
        }
      }

      if ($('#cardSlider-3')) {
        if (!$('#cardSlider-3').hasClass('slick-initialized')) {
          $('#cardSlider-3').slick({
            arrows: true,
            prevArrow: '',
            nextArrow: '',
            dots: false,
            infinite: false,
            slidesToShow: 2.5
          });
        }
      }

      if ($('#services-slick')) {
        if (!$('#services-slick').hasClass('slick-initialized')) {
          $('#services-slick').slick({
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 2,
            responsive: [{
              breakpoint: 660,
              settings: {
                dots: false,
                slidesToShow: 1,
              }
            }, ]
          });
        }
      }
    };
  }).trigger('resize');



  if ($('#cardSlider')) {
    $('#cardSlider').slick({
      slidesToShow: 4.5,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: false,
      prevArrow: '',
      nextArrow: '',
      responsive: [{
        breakpoint: 1240,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      }, ]
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

  // $('a[href^="#"]').click(function () { // #1
  //   let anchor = $(this).attr('href'); // #2
  //   $('html, body').animate({ // #3
  //     scrollTop: $(anchor).offset().top // #4
  //   }, 600); // #5
  // });

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

  saleItem = $(".sale__item");
  sortSvgHorizontal = $(".sort__svg--horizontal");
  sortSvgVertical = $(".sort__svg--vertical");

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
    // console.log(localStorage.catalogView);
  });

  $('.viewSquare').on('click', function () {
    localStorage.setItem('catalogView', 'vertical')
    // console.log(localStorage.catalogView);
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