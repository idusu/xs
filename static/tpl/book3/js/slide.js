$(function () {
  var o = $(".mod-banner .banner-slide");
  if (o.length > 0) o.slide({
    titCell  : ".slide-point li",
    mainCell : ".slideBox",
    autoPlay : !0,
    interTime: 2e3
  }).hover(function () {
    if ($(this).children(".slideBox").children().length <= 1) return !1;
    $(this).find(".prev,.next").stop(!0, !0).fadeTo(300, 1)
  }, function () {
    $(this).find(".prev,.next").fadeOut(300)
  }), $(".page-ad-3").slide({mainCell: ".slideBox", autoPlay: !0, interTime: 2e3}).hover(function () {
    if ($(this).children(".slideBox").children().length <= 1) return !1;
    $(this).find(".prev,.next").stop(!0, !0).fadeTo(300, 1)
  }, function () {
    $(this).find(".prev,.next").fadeOut(300)
  }), $("#tabs-2").slide({
    titCell : "#tabs-2-bd li",
    mainCell: "#tabs-2-hd"
  }), $("#tabs-3").slide({titCell: "#tabs-3-bd li", mainCell: "#tabs-3-hd", autoPlay: !1});
});