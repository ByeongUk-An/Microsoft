$(function () {
  // Main-slick-slider
  $(".main-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  // $(".main-slider").hover(function () {
  //   if ($(".slick-slider").find(".slick-current").length) {
  //     if ($(".slick-slide.slick-current > .slier-item").data("item") == "0") {
  //       console.log("data");
  //     }
  //   }
  // });
  $(".main-slider").hover(function () {
    if ($(".slick-current").data("slick-index") == 0) {
      $(".slick-prev").addClass("hov");
      $(".slick-next").addClass("hov");
    } else if ($(".slick-current").data("slick-index") == 1) {
      $(".slick-prev").addClass("hov1");
      $(".slick-next").addClass("hov1");
    }
  });
  $(".main-slider").mouseleave(function () {
    $(".slick-prev").removeClass("hov");
    $(".slick-next").removeClass("hov");
    $(".slick-prev").removeClass("hov1");
    $(".slick-next").removeClass("hov1");
  });
  $(".slick-prev").click(function () {
    if ($(".slick-current").data("slick-index") == 0) {
      $(".slick-prev").removeClass("hov1");
      $(".slick-next").removeClass("hov1");
      $(".slick-prev").addClass("hov");
      $(".slick-next").addClass("hov");
    } else if ($(".slick-current").data("slick-index") == 1) {
      $(".slick-prev").removeClass("hov");
      $(".slick-next").removeClass("hov");
      $(".slick-prev").addClass("hov1");
      $(".slick-next").addClass("hov1");
    }
  });
  $(".slick-next").click(function () {
    if ($(".slick-current").data("slick-index") == 0) {
      $(".slick-prev").removeClass("hov1");
      $(".slick-next").removeClass("hov1");
      $(".slick-prev").addClass("hov");
      $(".slick-next").addClass("hov");
    } else if ($(".slick-current").data("slick-index") == 1) {
      $(".slick-prev").removeClass("hov");
      $(".slick-next").removeClass("hov");
      $(".slick-prev").addClass("hov1");
      $(".slick-next").addClass("hov1");
    }
  });

  $(".slick-pause").on("click", function () {
    var $pauseBtn = $(this);
    if ($pauseBtn.hasClass("paused")) {
      // $(".main-slider").find(".play").hide();
      // $(".main-slider").find(".stop").show();
      $(".main-slider").slick("slickPlay");
      $pauseBtn.removeClass("paused");
    } else {
      // $(".main-slider").find(".play").show();
      // $(".main-slider").find(".stop").hide();
      $(".main-slider").slick("slickPause");
      $pauseBtn.addClass("paused");
    }
  });
  $(".play").on("click", function () {
    $(".main-slider").slick("slickPlay");
    // var $pauseBtn = $(this);
    // if ($pauseBtn.hasClass("paused")) {
    //   $(".main-slider").slick("slickPlay");
    //   $pauseBtn.removeClass("paused");
    // } else {
    //   $(".main-slider").slick("slickPause");
    //   $pauseBtn.addClass("paused");
    // }
  });
  $(".stop").on("click", function () {
    $(".main-slider").slick("slickPause");
    // var $pauseBtn = $(this);
    // if ($pauseBtn.hasClass("paused")) {
    //   $(".main-slider").slick("slickPlay");
    //   $pauseBtn.removeClass("paused");
    // } else {
    //   $(".main-slider").slick("slickPause");
    //   $pauseBtn.addClass("paused");
    // }
  });
});
