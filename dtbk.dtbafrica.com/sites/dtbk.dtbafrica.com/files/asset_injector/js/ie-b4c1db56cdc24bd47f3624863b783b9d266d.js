$(function() {
    var s;
    s = window.navigator.userAgent, /msie|Trident.*rv[ :]*11\./gi.test(s) && ($(".page-container").addClass("custom-fit"), $(".slideout").addClass("slide-IE"), i = 0, $(".custom-fit .block-views-blockhome-banners-block-1 .views-row .field-content").each(function() {
        i++, $(this).closest(".views-row").addClass("indexed-" + i);
        var s = $(this).find("img"),
            e = s.attr("src");
        $(this).css("background-image", "url(" + e + ")"), s.hide()
    })), /Edge/.test(navigator.userAgent) && $(".page-container").addClass("custom-fit-edge"), $(".float-sm").addClass("float-edge")
    $("#block-onlinebanking ul.menu li.menu-item a").click(function(n) {
        n.preventDefault();
        var i = $(this).attr("href"); console.log(i);
        window.open(i, "_blank");
    })
});
