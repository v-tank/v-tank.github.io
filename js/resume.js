!function (t) {
  "use strict";
  t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var e = t(this.hash);
      if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) return t("html, body").animate({
        scrollTop: e.offset().top
      }, 1e3, "easeInOutExpo"), !1
    }
  }), t(".js-scroll-trigger").click(function () {
    t(".navbar-collapse").collapse("hide")
  }), t("body").scrollspy({
    target: "#sideNav"
  }), t('[data-toggle="tooltip"]').tooltip()
}(jQuery);

// ===== Scroll to Top ==== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 700) {        // If page is scrolled more than 700px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function () {      // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0                       // Scroll to top of body
  }, 500);
});