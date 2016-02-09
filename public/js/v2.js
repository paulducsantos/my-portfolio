$(document).ready(function(){
  var $window = $(window);
  $('.parallax').parallax();



/* =================================================================================
    NAVBAR SCROLL
  ================================================================================*/
  $window.scroll(function() {
    var scrollDis = $(this).scrollTop();
    var currentPos = $('#nav-name').scrollTop();
    if(scrollDis < 143) {
      $('#nav-name').css('top', 120 - scrollDis);
      $('#nav-name').css('font-size', 63 - (scrollDis/6));
    } else if(scrollDis > 160) {
      $('#nav-name').css('top', -22);
      $('#nav-name').css('font-size', 39.33);
    }
    if(scrollDis < 100) {
      $('#logo').css('left', 0 - (scrollDis/3) + '%');
    } else if(scrollDis > 160) {
      $('#logo').css('left', '-32.7%');
    }
  });

  setInterval(changeImage, 3000);
  var i = 1;
  var dailyBriefImages = [];
  dailyBriefImages[0] = '../static/images/db-head.png';
  dailyBriefImages[1] = '../static/images/db-head2.png';
  dailyBriefImages[2] = '../static/images/db-head3.png';
  function changeImage() {
    if(i < dailyBriefImages.length - 1) {
      $('.dbImages').fadeOut(500, function() {
        $(this).attr('src', dailyBriefImages[i]).fadeIn(500);
        i++;
      });
    } else {
      $('.dbImages').fadeOut(500, function() {
        $(this).attr('src', dailyBriefImages[i]).fadeIn(500);
        i = 0;
      });
    }
  }

  $('#TLDR').on('click', function() {
    $('#skill-tldr').toggleClass('tldr');
    $('#skill-section').toggleClass('skill-section');
    $('#tldr-icon').html($('#tldr-icon').text() == 'visibility' ? 'visibility_off' : 'visibility');
  });
});