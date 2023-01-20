var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'pWfYG2AxDU4',
    playerVars: {
      color: 'white',
      showinfo: 0,
      rel: 0,
      enablejsapi: 1,
      modestbranding: 1,
      showinfo: 0,
      ecver: 2,
    },
    events: {
      onStateChange: onPlayerStateChange,
      onReady: function () {
        $('.ytp-expand-pause-overlay .ytp-pause-overlay').css(
          'display',
          'none'
        );
        $('.video-thumb').click(function () {
          console.log('clicked');
          var $this = $(this);
          if (!$this.hasClass('active')) {
            player.loadVideoById($this.attr('data-video'));
            $('.video-thumb').removeClass('active');
            $this.addClass('active');
          }
        });
      },
    },
  });
  function onPlayerStateChange(e) {
    console.log('state');
    if (e.data == YT.PlayerState.ENDED) {
      document.getElementById('playerWrap').classList.add('shown');
    }
  }
  document.getElementById('playerWrap').addEventListener('click', function () {
    player.seekTo(0);
    document.getElementById('playerWrap').classList.remove('shown');
  });
}

(function ($) {
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
      autoplay: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 5,
        },
      },
    });
  });
})(jQuery);

jQuery(document).ready(function($) {
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top 
    }, 500);
  }
  $('.onclick').on('click', scrollToSection);

  $(".slick-carousel").slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      swipeToSlide: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
  });
}(jQuery));