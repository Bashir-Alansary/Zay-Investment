
$(function() {

  // global *********
  // body padding top
  $('body').css('padding-top', $('.navbar').height()); 

  // smoothly scroll when pressing on links
  $('.navbar li:not(.bg) a').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 1000);
  });

   // var to up scroll button
   var btnUp = $('.to-up');
   $(window).scroll(function () {
      // go to the page up
     if($(window).scrollTop() >= 1000) {
       if(btnUp.is(':hidden')) {
         btnUp.fadeIn(400);
     } 
   } else {
     btnUp.fadeOut(400);
   }
   });

   btnUp.on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    },1000)
  });

  // chat box and button 
  $('.chat-icon').on('click', function() {
    $('.chat-box') .fadeIn(400);
    $(this).fadeOut();
  });

  $('.send-message').on('click', function() {
    if ($('.chat-box .bottom input').val() == '') {
      // dont do anything
    } else {
          $('.chat-box .content').append('<div class="user"><p class="user-message">'
        + $('.chat-box .bottom input').val()+ '</p></div>');
        $('.chat-box .bottom input').val('');
        $('.chat-box .content').scrollTop($('.chat-box .content').height());
    }
    
  });

  // close chat
  $('.chat-box .go-back').on('click', function() {
    $('.chat-box').fadeOut();
    $('.chat-icon').fadeIn();
  });

  //************* ********/ acount page ****************************/
    $('.account .left .links li:not(.logout)').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.account .right .container > div').hide();
        $($(this).data('content')).fadeIn();
    });

     // when i click on box in about in account
     $('.account .about .up .icon i').on('click', function() {
      $(this).parent('.icon').parent('.up').next('p').slideToggle();
      $(this).toggleClass('fa-chevron-up').toggleClass('fa-chevron-down')
    });

      // from a deposit page *******************
      // when you press on the done button
      var myInput = $('.in-dep');
      $('.done').on('click', function(e) {
        if(myInput.val() <= 10) {
          $('.message').animate({
            opacity: 1
          }, 1000);
          e.preventDefault();
        } else {
          $('.over').fadeIn(800);
          $('.my-val').text(myInput.val());
          myInput.val('');
        }
      });
  
      // to close the over page
      $('.out').on('click', function() {
        $('.over').fadeOut(400);
      });

      //***************mobile acount */
  
    $('.navbar .icon i').on('click', function() {
      var lfMenu = $('.account .left');
      lfMenu.toggleClass('lf-visible');
      if (lfMenu.hasClass('lf-visible')) {
        lfMenu.animate({
          marginLeft: -272
        }, 1000);
      } else {
        lfMenu.animate({
          marginLeft:0
        }, 1000);
      }
    });
  
    if($(window).width() <= 976) {
      $('.account .left .links li').on('click', function() {
        $('.left').animate({
          marginLeft:-272,
        }, 100);
        $('.left').addClass('lf-visible');
      });
    }
    

    //********* */ trigger nice scroll
    $('.account .left').niceScroll({
      cursorcolor :'#fbe950',
      cursorwidth : '10px',
      cursorborder : 'none',
      cursorborderradius :5,
      autohidemode:'leave',
      });

      $('.chat-box .content').niceScroll({
        cursorcolor :'rgb(197 206 251)',
        cursorwidth : '10px',
        cursorborder : 'none',
        cursorborderradius :5,
        autohidemode:'leave',
        });

      $('.nicescroll-rails').css({
        top: '75px',
      });
      
      // to remove links menu when press on a link
      $('.collapse').css('height','0');

      $('.navbar-default .navbar-nav > li > a').on('click', function() {
        if($(window).width() <= 976) {
          $('.navbar-collapse').fadeOut().removeClass('in');
          $('.navbar-collapse').css({
            height: '0px',
            overflow:'hidden',
            paddingTop:0
          });
          $('.navbar-default .navbar-nav > li:first-child > a').css('margin-top','51px');
          $('.navbar-collapse').fadeIn();
        }
  
      });

            // to copy link
      document.querySelector('.copy').onclick =  function() {
        'use strict';
        var myCopy = document.querySelector('.cpy');
        myCopy.select();
        myCopy.setSelectionRange(0, 99999);
        document.execCommand("copy");
      };

  });
