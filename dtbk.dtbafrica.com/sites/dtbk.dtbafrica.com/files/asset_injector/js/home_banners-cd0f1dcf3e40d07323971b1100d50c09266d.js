$(document).ready(function(){var e=$(".block-views-blockhome-banners-block-1 .views-row").click(function(n){$("#block-top-searches-block").hide(),e.not(this).removeClass("active");var a=$(n.target).attr("class"),s=$(n.target).text();if(String(a)===String("field-content")&&($(this).addClass("active"),$(".banner__section").addClass("open"),t()),6===s.length)$(this).toggleClass("active"),$(".banner__section").removeClass("open");else if(s.length>6){var o=$(n.target).attr("href");o&&(window.location.href=o)}else $(this).addClass("active"),$(".banner__section").addClass("open"),t();String(a)===String("banner-h4")&&($(this).addClass("active"),$(".banner__section").addClass("open"),t())});function t(){$(window).width()<481&&$("html, body").animate({scrollTop:$("#banner").offset().top},1e3)}});