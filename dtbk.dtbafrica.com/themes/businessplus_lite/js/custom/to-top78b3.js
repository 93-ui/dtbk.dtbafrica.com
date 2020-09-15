if (sessionStorage.isVisited) $(".preloader-wrapper").fadeOut("slow");
else {
    var myVar;
    sessionStorage.isVisited = "true";
    var Body = $("body");

    function showPage() {
        $("body").removeClass("preloader-site"), $(".preloader-wrapper").fadeOut("slow")
    }
    Body.addClass("preloader-site"), myVar = setTimeout(showPage, 5e3)
}

function chatfunction() {
    $("#block-views-block-chat-box-block .views-field.views-field-field-webform").toggle(), $(".chat-show").toggle(), $(".view-chat-box .views-field-title").toggle()
}

function slideoutfunction(e) {
    var n = e;
    n.next("ul").fadeToggle("fast", "linear"), n.parent().siblings().find("ul").fadeOut(150), n.toggleClass("open-nav"), n.parent().siblings().find("a").removeClass("open-nav")
}

function exposedsearch() {
    var e = $("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded > ul.menu");
    e.is(":visible") && ($("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded ul").each(function() {
        $(this).hasClass("active") && $(this).removeClass("active")
    }), e.removeAttr("style"))
}

function countryfunction() {
    $(".hidden-country").toggleClass("show-country"), $(".arrow-left").toggleClass("active")
}

function megamenu(e) {
    var n = e;
    n.next("ul").hasClass("active") || n.parents(".active").length || (String(n.text()) === String("Products") || String(n.text()) === String("Produits") ? (togglemenu(), n.next("ul").fadeToggle("fast", "linear"), $("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded:first-child ul.menu > li").hasClass("menu-item--expanded") && $("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded:first-child > ul.menu").addClass("open-menu"), $("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded:first-child > ul.menu").addClass("active"), $("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded:first-child a.is-active").addClass("open-link")) : megamenuhover(e))
}

function megamenuhover(e) {
    var n = e;
    n.parents(".active").length || (togglemenu(), n.next("ul").children().hasClass("menu-item--expanded") && n.next("ul").addClass("open-menu"), n.addClass("open-link"), n.next("ul").addClass("active"))
}

function togglemenu() {
    $("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded ul").each(function() {
        $(this).hasClass("active") && $(this).removeClass("active"), $(this).hasClass("open-menu") && $(this).removeClass("open-menu")
    }), $("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded a").each(function() {
        $(this).hasClass("open-link") && $(this).removeClass("open-link")
    })
}

function detectIEEdge() {
    var e = window.navigator.userAgent,
        n = e.indexOf("MSIE");
    return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n))) : 0
}

function initSlider(e) {
    var n = e + 1,
        i = $(".block-views-blocknews-banner-block-" + n + " .view-content").children().length;
        console.log(n);
    if (i < 4) var t = i;
    else t = 4;
    $(".block-views-blocknews-banner-block-" + n + " .view-content").slick({
        arrows: !0,
        dots: !1,
        infinite: !1,
        speed: 300,
        slidesToShow: t,
        slidesToScroll: t,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 660,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".block-views-blocknews-banner-block-" + n + " .views-row").each(function() {
        var e = $(this).attr("style");
        $(this).find(".news-title").attr("style", "" + e)
    })
}

function initBannerslide(e) {
    var n = e + 1,
        i = $(".block-views-blocknews-banner-block-" + n + " .view-content").children().length;
        console.log(i);
    if (i > 1) var n = 1;
    else n = 7;
    $(".block-views-blocknews-banner-block-" + n + " .view-content").slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 5e3,
        fade: !0,
        cssEase: "linear",
        slidesToShow: 1,
        adaptiveHeight: !0
    })
}

jQuery(document).ready(function(e) {

    $('div[class*="block-views-blocknews-banner-block-"]').each(function(e) {
        e > 0 ? initSlider(e) : initBannerslide(e)
    }),

	$("a.scroll").on("click", function(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500, "linear")
    }), detectIEEdge() > 0 && swal({
        title: "Your web browser (Internet Explorer " + detectIEEdge() + ") is out of date",
        text: "Please update your browser for more security, speed and the best experience on this site.",
        icon: "warning",
        dangerMode: !0,
        className: "browser-alert",
        button: {
            text: "Update browser",
            closeModal: !1
        },
        closeOnClickOutside: !1
    }).then(function(e) {
        window.open("http://browser-update.org/update.html?force_outdated=true", "_blank")
    }), $("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded:first-child > a").each(function() {
        $(this).hasClass("is-active") ? console.log("") : (console.log(""), $(this).addClass("is-active"))
    }), $("#content-top .block-menu.navigation  ul.clearfix.menu li.menu-item--expanded:first-child > a").each(function() {
        $(this).hasClass("is-active") ? console.log("") : (console.log(""), $(this).addClass("is-active"))
    }), e(window).scroll(function() {
        0 != e(this).scrollTop() ? e(".to-top").addClass("show") : e(".to-top").removeClass("show")
    }), e(".to-top").click(function() {
        e("body,html").animate({
            scrollTop: 0
        }, 800)
    }), e(".field--entity-reference-target-type-taxonomy-term .field__item a").click(function(e) {
        e.preventDefault()
    }), e(".more").click(function() {
        e("html,body").animate({
            scrollTop: e("#block-views-block-product-tabs-block-1").offset().top
        }, "slow")
    }), e(".chat-link.call-back").on("click", function() {
        chatfunction()
    }), e("#webform_submission_feed_back_node_17_add_form-ajax").click(function(n) {
        e(event.target);
        var i = e(event.target).attr("id");
        console.log(), String(i) === String("back-btn") && chatfunction()
    }), e(".slideout ul.clearfix.menu li.menu-item--expanded > a").click(function(n) {
        n.preventDefault(), slideoutfunction(e(this))
    }), e(".region-sidebar-first .block-menu.navigation h2").html(function() {
        var n = e(this).text().trim().split(" "),
            i = n.shift();
        return (n.length > 0 ? "<span class='red'>" + i + "</span> " : i + "<hr/>") + n.join(" ")
    }), e(".slideout ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded a").click(function(n) {
        e(".slideout ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded a").not(this).removeClass("open-menu"), e(".slideout ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded a").not(this).removeClass("open-nav"), e(".slideout ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded ul.menu").each(function() {
            e(this).is(":visible") && e(this).hide()
        }), e(this).toggleClass("open-menu"), e(this).next("ul").show()
    }), e(".region-footer-bottom ul.menu li.menu-item a").click(function(n) {
        var i = e(this).attr("href");
        e(this).attr("title").length && (n.preventDefault(), window.open(i, "_blank"))
    }), e("#block-privacypolicy ul li a").click(function(n) {
        var i = e(this).attr("href");
        e(this).attr("title").length && (n.preventDefault(), window.open(i, "_blank"))
    }), e("#block-mainnavigation ul.menu li.menu-item a").click(function(n) {
        var i = e(this).attr("href");
        e(this).attr("title").length && (n.preventDefault(), window.open(i, "_blank"))
    });
    var n = e(window).width();
    n < 661 ? e("#banner .block-menu.navigation ul.clearfix.menu li > a.is-active").on("click", function(n) {
        n.preventDefault(), slideoutfunction(e(this))
    }) : (e("#banner .block-menu.navigation ul.clearfix.menu li > a.is-active").on("click", function(n) {
        n.preventDefault(), megamenu(e(this))
    }), e("#banner .block-menu.navigation ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded a").hover(function(n) {
        megamenuhover(e(this))
    })), e("#content-top .block-menu.navigation ul.clearfix.menu li.menu-item--expanded > a").on("click", function(n) {
        n.preventDefault(), slideoutfunction(e(this))
    }), n < 481 && e("ul.links a.is-active").on("click", function(n) {
        n.preventDefault(), e(this).hasClass("open-link") ? (e(this).parent().siblings().hide("fast", "linear"), e(this).removeClass("open-link")) : (e(this).parent().siblings().show("fast", "linear"), e(this).addClass("open-link"))
    }), e(".float-fb > span").on("click", function(n) {
        n.preventDefault(), e(".float-mobile").toggleClass("open")
    }), e(".arrow-left").on("click", function() {
        countryfunction()
    }), e(".fixed-country").on("click", function(e) {
        e.preventDefault(), countryfunction()
    }), e("#block-exposedformsearchpage-1 #edit-title").focus(function() {
        exposedsearch()
    })
});
