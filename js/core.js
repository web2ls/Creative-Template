function initMap() {
  const mapElem = document.querySelector('.gmap');
  const config = {
    center: new google.maps.LatLng(59.938804, 30.316286),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  const gmap = new google.maps.Map(mapElem, config);
};

$(document).ready(function() {
  $('#main-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1000
  });
  $('#testimonials-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: true
  });

  $('nav ul').singlePageNav();
  $('.main-slider__arrow-down').singlePageNav();

  $('.main-slider__controls_arrow-left').click(function() {
    const owl = $('.owl-carousel');
    owl.trigger('prev.owl.carousel');
  });
  $('.main-slider__controls_arrow-right').click(function() {
    const owl = $('.owl-carousel');
    owl.trigger('next.owl.carousel');
  });

  let mobileMenuIsOpen = false;
  $('.mobile-menu').click(function() {
    if (mobileMenuIsOpen) {
      $('nav ul').fadeOut();
      $('.darker').fadeOut();
      setTimeout(function() {
        $('nav ul li').removeClass('mobile-menu-class');
      }, 400);
      mobileMenuIsOpen = false;
    } else {
      $('.darker').fadeIn();
      $('nav ul').fadeIn();
      $('nav ul li').addClass('mobile-menu-class');
      mobileMenuIsOpen = true;
    }
  });

  $('.services__content_tabs').children().click(function(event) {
    const currElem = event.target;
    const dataAttr = event.target.dataset.tab;
    if (dataAttr === 'development') {
      $(currElem).addClass('active-tab').siblings().removeClass('active-tab');
      $('.services__content_development').addClass('active-data')
        .siblings().removeClass('active-data');
      $('.specialization__content_development').addClass('specs-active-data')
        .siblings().removeClass('specs-active-data');
      fillProgress('development');
    } else if (dataAttr === 'design') {
      $(currElem).addClass('active-tab').siblings().removeClass('active-tab');
      $('.services__content_design').addClass('active-data')
        .siblings().removeClass('active-data');
      $('.specialization__content_design').addClass('specs-active-data')
        .siblings().removeClass('specs-active-data');
      fillProgress('design');
    } else if (dataAttr === 'marketing') {
      $(currElem).addClass('active-tab').siblings().removeClass('active-tab');
      $('.services__content_marketing').addClass('active-data')
        .siblings().removeClass('active-data');
      $('.specialization__content_marketing').addClass('specs-active-data')
        .siblings().removeClass('specs-active-data');
      fillProgress('marketing');
    }
  });

  function fillProgress(tabName) {
    if (tabName === 'development') {
      let currentValue = 0;
      $('.development-progress-one').attr('value', currentValue);
      $('.development-progress-two').attr('value', currentValue);
      $('.development-progress-three').attr('value', currentValue);
      $('.development-progress-four').attr('value', currentValue);
      const timerId = setInterval(function() {
        currentValue += 5;
        if (currentValue > 77) {
          clearInterval(timerId);
          return;
        };
        $('.development-progress-one').attr('value', currentValue);
        $('.development-progress-two').attr('value', currentValue);
        $('.development-progress-three').attr('value', currentValue);
        $('.development-progress-four').attr('value', currentValue);
        $('.progress-percent').text(currentValue + '%');
      }, 100)
    } else if (tabName === 'design') {
      let currentValue = 0;
      $('.design-progress-one').attr('value', currentValue);
      $('.design-progress-two').attr('value', currentValue);
      $('.design-progress-three').attr('value', currentValue);
      $('.design-progress-four').attr('value', currentValue);
      const timerId = setInterval(function() {
        currentValue += 5;
        if (currentValue > 82) {
          clearInterval(timerId);
          return;
        };
        $('.design-progress-one').attr('value', currentValue);
        $('.design-progress-two').attr('value', currentValue);
        $('.design-progress-three').attr('value', currentValue);
        $('.design-progress-four').attr('value', currentValue);
        $('.progress-percent').text(currentValue + '%');
      }, 100)
    } else {
      let currentValue = 0;
      $('.marketing-progress-one').attr('value', currentValue);
      $('.marketing-progress-two').attr('value', currentValue);
      $('.marketing-progress-three').attr('value', currentValue);
      $('.marketing-progress-four').attr('value', currentValue);
      const timerId = setInterval(function() {
        currentValue += 5;
        if (currentValue > 80) {
          clearInterval(timerId);
          return;
        };
        $('.marketing-progress-one').attr('value', currentValue);
        $('.marketing-progress-two').attr('value', currentValue);
        $('.marketing-progress-three').attr('value', currentValue);
        $('.marketing-progress-four').attr('value', currentValue);
        $('.progress-percent').text(currentValue + '%');
      }, 100)
    }
  };

  $('.works__filters li').click(function() {
    $(this).addClass('active-filter').siblings().removeClass('active-filter');
    const currentFilter = $(this).attr('data-category');
    if (currentFilter === 'all') {
      $('.works__list li').show();
      return;
    };
    $('.works__list li').show();
    $('.works__list li[data-category!=' + currentFilter +']').hide();
  });

  function incrementResultCounters() {
    const projects = $('.results__counter[data-counter=projects]');
    const awards = $('.results__counter[data-counter=awards]');
    const clients = $('.results__counter[data-counter=clients]');
    const cups = $('.results__counter[data-counter=cups]');
    let countProjects = 195;
    let countAwards = 27;
    let countClients = 950;
    let countCups = 510;

    setInterval(function() {
      countProjects++;
      $(projects).text(countProjects);
    }, 20000);

    setInterval(function() {
      countAwards++;
      $(awards).text(countAwards);
    }, 40000);

    setInterval(function() {
      countClients++;
      $(clients).text(countClients);
    }, 12000);

    setInterval(function() {
      countCups++;
      $(cups).text(countCups);
    }, 3000);
  };

  // function initMap() {
  //   const mapElem = document.querySelector('.gmap');
  //   const config = {
  //     center: new google.maps.LatLng(51.5, -0.12),
  //     zoom: 10,
  //     mapTypeId: google.maps.MapTypeId.HYBRID
  //   };
  //
  //   const gmap = new google.maps.Map(mapElem, config);
  // };

  fillProgress('development');
  incrementResultCounters();

})
