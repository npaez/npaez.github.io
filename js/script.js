$(document).ready(function() {
   'use strict';

   $('.sidebar-button').on('click', function(e) {
      $('.sidebar-menu').toggleClass('visible');
      $(".fa-bars").toggleClass("not-visible");
      $(".fa-close").toggleClass("not-visible");
      $("body").toggleClass("no-overflow");
   });
});




$("#footerYear").text(new Date().getFullYear());