! function(e, a, t, o, i, l, r) {
    e.GoogleAnalyticsObject = "ga", e.ga = e.ga || function() {
        (e.ga.q = e.ga.q || []).push(arguments)
    }, e.ga.l = 1 * new Date, l = a.createElement(t), r = a.getElementsByTagName(t)[0], l.async = 1, l.src = "https://www.google-analytics.com/analytics.js", r.parentNode.insertBefore(l, r)
}(window, document, "script"), ga("create", "UA-101543279-1", "auto"), ga("send", "pageview");
var $buoop = {
    vs: {
        i: 10,
        f: -8,
        o: -4,
        s: 8,
        c: -8
    },
    api: 4
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js", document.body.appendChild(e)
}
try {
    document.addEventListener("DOMContentLoaded", $buo_f, !1)
} catch (e) {
    window.attachEvent("onload", $buo_f)
}

function togglecountry() {
    $(".hidden-country").toggleClass("show-country"), $(".arrow-left").toggleClass("active")
}

function addFlexibleChargeAmount() {
    var e = $("#add-flexible-charge-amount :input").serializeArray();
    e.push({
        name: "_action",
        value: "add"
    }), $.ajax({
        type: "POST",
        url: "https://dtbcalculator.farwell-consultants.com/site/add-flexible-charge-amount?&callback=",
        data: e,
        dataType: "jsonp",
        contentType: "application/json; charset=utf-8",
        success: function(e) {
            $("#add-flexible-charge-amount").html(e)
        }
    })
}
$("document").ready(function() {
    var e, a = $("#quickestimateform-bank").val();
    $("#quickestimateform-facility").empty().html("<option value=''>Select Facility</option>"), 0 !== a.length && ($.ajax({
        type: "POST",
        url: "https://dtbcalculator.farwell-consultants.com/site/get-facilities?&callback=",
        data: {
            bank_id: a
        },
        dataType: "jsonp",
        contentType: "application/json; charset=utf-8",
        success: function(e) {
            console.log(e);
            for (var a in e) {
                var t = "<option value='" + e[a].id + "'>" + e[a].facilityType.name + "</option>";
                $("#quickestimateform-facility").append(t)
            }
        }
    }), $("#estimateSubmitbutton").on("click", function(a) {
        var t = $("#quick-estimate-form"),
            o = $("#quickestimateform-facility").val(),
            i = $("#quickestimateform-paymentfrequency").val(),
            l = $("#quickestimateform-loanamount").val(),
            r = $("#quickestimateform-loanperiod").val(),
            s = $("#quickestimateform-bank").val(),
            n = $("#quickestimateform-termsagree").val();
            
        if (8 == parseInt(s) && 420 == o) {
             c = $("#quickestimateform-purchasecost").val(); 
             m = $("#quickestimateform-deposit").val();

            parseInt(c) <= 0 ? ($(".field-quickestimateform-purchasecost").addClass("has-error"), $(".field-quickestimateform-purchasecost .help-block").text("This field cannot be cannot be blank")) : ($(".field-quickestimateform-purchasecost").removeClass("has-error"), $(".field-quickestimateform-purchasecost .help-block").empty()), null === parseInt(m) ? ($(".field-quickestimateform-deposit").addClass("has-error"), $(".field-quickestimateform-deposit .help-block").text("This field cannot be cannot be blank")) : ($(".field-quickestimateform-deposit").removeClass("has-error"), $(".field-quickestimateform-deposit .help-block").empty())
        } else {
           c = null, m = null; 
        }
           

         if(15 === parseInt(o) && parseInt(r) > 60 || 462 === parseInt(o) && parseInt(r) > 60){
        	$(".field-quickestimateform-loanperiod").addClass("has-error"); 
        		$(".field-quickestimateform-loanperiod .help-block").text("The Loan period must be less than or equal to 60 months for loans of up to 5 years");
        		return false;
        }else{
        	$(".field-quickestimateform-loanperiod").removeClass("has-error"); 
        	$(".field-quickestimateform-loanperiod .help-block").empty();
        }

        if ("" === o ? ($(".field-quickestimateform-facility").addClass("has-error"), $(".field-quickestimateform-facility .help-block").text("This field cannot be cannot be blank")) : 
        	($(".field-quickestimateform-facility").removeClass("has-error"), $(".field-quickestimateform-facility .help-block").empty()), "" === i ? 
        	($(".field-quickestimateform-paymentfrequency").addClass("has-error"), $(".field-quickestimateform-paymentfrequency .help-block").text("This field cannot be cannot be blank")) : 
        	($(".field-quickestimateform-paymentfrequency").removeClass("has-error"), $(".field-quickestimateform-paymentfrequency .help-block").empty()), 
        	$("#quickestimateform-termsagree").is(":checked") ? ($(".field-quickestimateform-termsagree").removeClass("has-error"), 
        		$(".field-quickestimateform-termsagree .help-block").empty()) : ($(".field-quickestimateform-termsagree").addClass("has-error"), 
        		$(".field-quickestimateform-termsagree .help-block").text("Kindly mark this field if the terms and conditions are agreeable")), parseInt(l) <= 0 ? (
        		$(".field-quickestimateform-loanamount").addClass("has-error"), $(".field-quickestimateform-loanamount .help-block").text("This field cannot be cannot be blank")) : (
        		$(".field-quickestimateform-loanamount").removeClass("has-error"), $(".field-quickestimateform-loanamount .help-block").empty()), parseInt(r) <= 0 ? (
        		$(".field-quickestimateform-loanperiod").addClass("has-error"), $(".field-quickestimateform-loanperiod .help-block").text("This field cannot be cannot be blank")) : ($
        		(".field-quickestimateform-loanperiod").removeClass("has-error"), $(".field-quickestimateform-loanperiod .help-block").empty()), 413 === parseInt(o) && parseInt(r) > 12 ? (
        		$(".field-quickestimateform-loanperiod").addClass("has-error"), 
        		$(".field-quickestimateform-loanperiod .help-block").text("The Loan period must be less than or equal to 12 months for loans of up to 1 year")) : (
        		$(".field-quickestimateform-loanperiod").removeClass("has-error"), $(".field-quickestimateform-loanperiod .help-block").empty()), 423 === parseInt(o) && parseInt(r) > 60 ? (
        		$(".field-quickestimateform-loanperiod").addClass("has-error"), 
        		$(".field-quickestimateform-loanperiod .help-block").text("The Loan period must be less than or equal to 60 months for loans of up to 5 years")) : ($(".field-quickestimateform-loanperiod").removeClass("has-error"), $(".field-quickestimateform-loanperiod .help-block").empty()), 414 === parseInt(o) && parseInt(r) > 120 ? ($(".field-quickestimateform-loanperiod").addClass("has-error"), $(".field-quickestimateform-loanperiod .help-block").text("The Loan period must be less than or equal to 120 months for loans of up to 10 years")) : ($(".field-quickestimateform-loanperiod").removeClass("has-error"), $(".field-quickestimateform-loanperiod .help-block").empty()), t.find(".has-error").length) return !1;


        var d = $(window).width();
        if (d < 600) {
            $("#chartContainer").css("min-height", "200px");
            var u = 14
        } else $("#chartContainer").css("min-height", "350px"), u = 18;

        return $.ajax({
            url: "https://dtbcalculator.farwell-consultants.com/site/process-estimate?&callback=",
            type: "POST",
            data: {
                facility: o,
                paymentfrequency: i,
                loanamount: l,
                loanperiod: r,
                bank: s,
                terms: n,
                purchaseCost: c,
                deposit: m
            },
            dataType: "jsonp",
            contentType: "application/json; charset=utf-8",
            success: function(a) {console.log(a);
                if (e = a, console.log(e), $("#results").show(), $("#estimateSubmitbutton").addClass("btn_loading").html('<span class="estimating">Estimating.. <img src="/images/ajax-loader2.gif" alt="Estimting" class="ajax-loading" /></em>').attr("disabled", !1), $("#aprcalc").addClass("not-show"), 6 === a.bank_id) var t = "TZS";
                else t = 8 === a.bank_id ? "KES" : "UGX";
                $.each(a, function(e, a) {
                    if ("creditRequired" === e || "monthlyPayment" === e)
                        //console.log(value)
                        for (var o = 0; o <= 2; o++) valuecharge = Math.round(a), value = valuecharge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), $("#" + e + "-" + o).empty().append(t + " " + value);
                    else "numRepayments" === e || "facility" === e ? $("#" + e).empty().append(a) : "annualInterestRate" === e || "APR" === e ? $("#" + e).empty().append(a + " %") : "externalchargesall" === e || "internalchargesall" === e || "externalBankCharges" === e ? ($("#" + e).empty(), $.each(a, function(a, o) {
                        value = Math.round(o.chargeValue), chargevalue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), $("#" + e).append($('<div class="pull-left">' + o.chargeName + '</div><div class="pull-right">' + t + " " + chargevalue + "</div><br/>"))
                    })) : (valuecharge = Math.round(a), value = valuecharge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), $("#" + e).empty().append(t + " " + value))
                }), $("#estimateSubmitbutton").removeClass("btn_loading").html("Estimate").attr("disabled", !1);
                var o = e.amort.values.APR,
                    i = e.amort.values.COC,
                    l = e.amort.values.MRP,
                    r = e.amort.values.NRP,
                    s = e.amort.values.TC,
                    n = e.amort.values.TITBP,
                    c = (e.amort.values, e.amort.bank_name),
                    m = e.amort.interest,
                    f = e.amort.facility,
                    p = e.amort.loan_amount,
                    h = (e.amort.interest, e.amort.terms),
                    k = e.amort.loanStart;
                if (8 === e.bank_id) var y = e.amort.values.EC,
                    g = e.amort.values.IC;
                else y = null, g = null;
                $.ajax({
                    url: "https://dtbcalculator.farwell-consultants.com/site/armotization-pdf?&callback=",
                    method: "GET",
                    data: {
                        loan_amount: p,
                        interest: m,
                        terms: h,
                        loanStart: k,
                        bank_name: c,
                        facility: f,
                        values_APR: o,
                        values_COC: i,
                        values_EC: y,
                        values_IC: g,
                        values_MRP: l,
                        values_NRP: r,
                        values_TC: s,
                        values_TITBP: n,
                        size: u
                    },
                    xhrFields: {
                        responseType: "blob"
                    },
                    dataType: "jsonp",
                    contentType: "application/json; charset=utf-8",
                    success: function(e) {
                        $("#content").empty().append($("" + e.content))
                    }
                }), google.charts.load("visualization", "1", {
                    packages: ["corechart"]
                }), google.charts.setOnLoadCallback(function() {
                    var a = google.visualization.arrayToDataTable([
                        ["Task", "Hours per Day"],
                        ["Principal Amount", parseInt(e.creditRequired)],
                        ["Total Interest Paid", n]
                    ]);
                    new google.visualization.NumberFormat({
                        prefix: t + " "
                    }).format(a, 1);
                    var o = {
                        title: f + " summary",
                        colors: ["#e71a3d", "#f5d734"],
                        pieSliceText: "value",
                        titleTextStyle: {
                            fontSize: "" + u
                        }
                    };
                    new google.visualization.PieChart(document.getElementById("chartContainer")).draw(a, o)
                }), d < 768 && $("html,body").animate({
                    scrollTop: $("#APR").offset().top
                }, "slow")
            },
            error: function() {}
        }), !1
    }), $("#quickestimateform-bank").on("change", function() {
        var e = $(this).val();
        $("#quickestimateform-facility").empty().html("<option value=''>Select Facility</option>"), 0 !== e.length && $.ajax({
            type: "POST",
            url: "https://dtbcalculator.farwell-consultants.com/site/get-facilities?&callback=",
            data: {
                bank_id: e
            },
            dataType: "jsonp",
            contentType: "application/json; charset=utf-8",
            success: function(e) {console.log(e)
                for (var a in e) {
                    var t = "<option value='" + e[a].id + "'>" + e[a].facilityType.name + "</option>";
                    $("#quickestimateform-facility").append(t)
                }
            }
        })
    }), $("#quickestimateform-facility").on("change", function() {
        var e = $(this).val();
        0 !== e.length && $.ajax({
            type: "POST",
            url: "https://dtbcalculator.farwell-consultants.com/site/get-facility-type?&callback=",
            data: {
                facility_id: e
            },
            dataType: "jsonp",
            contentType: "application/json; charset=utf-8",
            success: function(e) {console.log(e)
                1 === parseInt(e.facility_type_id) ? ($("#mortg-grp").show(), $("#quickestimateform-purchasecost,#quickestimateform-deposit").removeAttr("disabled")) : 9 === parseInt(e.facility_type_id) ? ($("#mortg-grp").show(), $("#quickestimateform-purchasecost,#quickestimateform-deposit").removeAttr("disabled")) : ($("#mortg-grp").hide(), $("#quickestimateform-purchasecost,#quickestimateform-deposit").attr("disabled", "disabled"))
            }
        })
    }))
});
var getCanvas, container = document.getElementById("content"),
    filename = "Loan Repayment Schedule.pdf";
$('#amortLink .armort-label').click(function(e) {
    //console.log("click");
    downloadFile();
});
function downloadFile() {
    //console.log("got it");
    window.scrollTo(0, 0), html2canvas(container).then(function(e) {
        var a;
        if ($(window).width() < 600) var t = 100,
            o = 80,
            i = a = e.height * t / e.width;
        else t = 210, o = 295, i = a = e.height * t / e.width;
        var l = new jsPDF("p", "mm"),
            r = 0;
        for (l.addImage(e.toDataURL("image/jpeg", 1), "JPEG", 0, r, t, a), i -= o; i >= 0;) r = i - a, l.addPage(), l.addImage(e.toDataURL("image/jpeg", 1), "JPEG", 0, r, t, a), i -= o;
        l.save(filename)
    })
} $(".arrow-left").click(function() {
    togglecountry()
});