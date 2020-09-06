"use strict";
var warn = function(e) {
        console.warn("JavaScript libraries may not have successfully loaded. (" + e + ")"), gae("jsWarning", "newLibNotLoaded-" + e)
    },
    checkLib = function(e) {
        "undefined" == typeof libLoaded ? warn(e + "-undefined") : libLoaded ? console.log("JavaScript libraries successfully loaded (" + e + ").") : warn(e + "-false")
    };
checkLib("initial");
var newTab = "undefined" != typeof cardNewTab && cardNewTab;

function addOrRemove(e, t) {
    var a = e.indexOf(t); - 1 === a ? e.push(t) : e.splice(a, 1)
}

function addParam(e, t) {
    var a = window.location.href;
    if (-1 < a.indexOf(t)) n = a.split("?" + t).join("?").split("&" + t).join("").split("?&").join("?");
    else {
        var i = (-1 === a.indexOf("?") ? "?" : "&") + t,
            n = a.replace(i, "");
        n += i
    }
    n = removeUrlParameter("page", n), window.location.href = n
}

function encryptForm(e, t) {
    checkLib("adyen"), "function" == typeof adyen.encrypt.createEncryptedForm ? (adyen.createEncryptedForm = function(e, a) {
        return adyen.encrypt.createEncryptedForm(e, t, a)
    }, "function" == typeof adyen.encrypt.createEncryption && (adyen.createEncryption = function(e) {
        return adyen.encrypt.createEncryption(t, e)
    })) : adyen.cse.available = !1;
    var a = {
            enableValidations: !0,
            submitButtonAlwaysEnabled: !0,
            numberIgnoreNonNumeric: !0,
            cardTypeElement: function(t, a) {
                document.getElementById("card-type").innerHTML = a || "", $("#card-type-input", e).val(t)
            }
        },
        i = adyen.createEncryptedForm(e, a);
    i && (i.addCardTypeDetection(a.cardTypeElement), $(e).on("submit", i.handleSubmit.bind(i)))
}
$(function() {
    return newTab && 767 < $(window).width() ? $(".tp_card_slideshow a").attr("target", "_blank") : null
}), $(function() {
    $("#expandHide").on("click", function() {
        var e = $(this),
            t = parseInt(e.data("state")) ? 0 : 1,
            a = t ? "minus" : "plus",
            i = t ? e.data("hide-text") : e.data("expand-text");
        return 0 == t ? (e.siblings("div").find("div.panel-collapse").collapse("hide"), e.find("div.panel-collapse").addClass("collapsed")) : (e.siblings("div").find("div.panel-collapse").collapse("show"), e.find("div.panel-collapse").removeClass("collapsed")), e.html('<i class="ebs-icon ebs-icon-' + a + '-rounded"></i>' + i), e.data("state", t), e.find('[data-toggle="collapse"]').toggleClass("collapsed"), !1
    }), $("#accordion div.panel-collapse").each(function() {
        var e = $(this),
            t = e.attr("id");
        e.parent().find('[data-toggle="collapse"]').toggleClass("collapsed"), e.on("show", function() {
            $('a[href="#' + t + '"]').addClass("collapsed")
        }), e.on("hide", function() {
            $('a[href="#' + t + '"]').removeClass("collapsed")
        })
    }), 768 > $(window).width() && $("#expandHide").click()
}), $(function() {
    $("#select_all_sites").change(function() {
        $(".site_checkbox").prop("checked", $(this).prop("checked"))
    }), $(".site_checkbox").change(function() {
        $("#select_all_sites").prop("checked", !1), $(this).prop("checked") ? $(this).attr("value", "on") : $(this).attr("value", "off")
    }), $(".accept_terms").change(function() {
        $("#select_all_sites").prop("checked", !1), $(this).prop("checked") ? $(this).attr("value", "on") : $(this).attr("value", "off")
    })
}), $(function() {
    $(".js-increase-value").on("click", function() {
        var e = $(this).parents(".js-change-value").find('input[type="number"]'),
            t = parseInt(e.val(), 10),
            a = e.attr("max");
        return (t = isNaN(t) ? 0 : t) < a && t++, e.val(t), e.trigger("change"), !1
    }), $(".js-decrease-value").on("click", function() {
        var e = $(this).parents(".js-change-value").find('input[type="number"]'),
            t = parseInt(e.val(), 10),
            a = e.attr("min");
        return 1 > (t = isNaN(t) ? 0 : t) && (t = 1), t > a && t--, e.val(t), e.trigger("change"), !1
    }), $(".custom_pkg_adults").on("change", function() {
        var e = $(this).val();
        $(".custom_pkg_adults").val(e)
    }), $(".custom_pkg_kids").on("change", function() {
        var e = $(this).val();
        $(".custom_pkg_kids").val(e)
    }), $(".custom_pkg_duration").on("change", function() {
        var e = $(this).val();
        $(".custom_pkg_duration").val(e)
    })
}), $(function() {
    if ($(".searchAutoComplete").keyup(function(e) {
            clearTimeout(window.autocompleteTimeout), window.thisac = this, 37 === e.keyCode || 38 === e.keyCode || 39 === e.keyCode || 40 === e.keyCode || (window.autocompleteTimeout = setTimeout(function() {
                if (2 < $(window.thisac).val().length) {
                    var e = $(window.thisac).parent();
                    $(window.thisac).attr("data-q", encodeURIComponent($(window.thisac).val())), e.find(".searchAutoCompleteList").show(), $.getJSON("/searchresults/autocomplete?q=" + encodeURIComponent($(window.thisac).val()), function(t) {
                        var a = [];
                        if ($.each(t.suggestions, function(n, r) {
                                var o = e.parent().find(".searchAutoComplete").val().toLowerCase().split(" "),
                                    s = r.toLowerCase();
                                for (i = 0; i < o.length; i++) s = s.replace(o[i], "<b>" + o[i] + "</b>");
                                s = s.replace(/,/g, ", ");
                                var l = "";
                                150 < t.numOfListings[n] && (l = " class='autocomplete_popular' data-num='" + t.numOfListings[n] + "'"), a.push("<li" + l + ">" + s + "</li>")
                            }), "undefined" != typeof autocomplete_with_benefits_2 && autocomplete_with_benefits_2 && "3" == siteid) {
                            var n = [
                                    ["Anusara Yoga", "/all/s/anusara-yoga"],
                                    ["Ashtanga Yoga", "/all/s/ashtanga-yoga"],
                                    ["Ayurveda Yoga", "/all/s/ayurveda-yoga"],
                                    ["Bikram / Hot Yoga", "/all/s/bikram-hot-yoga"],
                                    ["Hatha Yoga", "/all/s/hatha-yoga"],
                                    ["Iyengar Yoga", "/all/s/iyengar-yoga"],
                                    ["Kundalini Yoga", "/all/s/kundalini-yoga"],
                                    ["Tantra Yoga", "/all/s/tantra-yoga"],
                                    ["Vinyasa Yoga", "/all/s/vinyasa-yoga"],
                                    ["Yin Yoga", "/all/s/yin-yoga"],
                                    ["AcroYoga", "/all/s/acroyoga"],
                                    ["Aerial Yoga", "/all/s/aerial-yoga"],
                                    ["Ananda Yoga", "/all/s/ananda-yoga"],
                                    ["Baptiste yoga", "/all/s/baptiste-yoga"],
                                    ["Bhakti Yoga", "/all/s/bhakti-yoga"],
                                    ["Candlelight Yoga", "/all/s/candlelight-yoga"],
                                    ["Chakra Yoga", "/all/s/chakra-yoga"],
                                    ["Critical Alignment Yoga", "/all/s/critical-alignment-yoga"],
                                    ["Dru Yoga", "/all/s/dru-yoga"],
                                    ["Dynamic Yoga", "/all/s/dynamic-yoga"],
                                    ["Forrest Yoga", "/all/s/forrest-yoga"],
                                    ["Ganja yoga", "/all/s/ganja-yoga"],
                                    ["General Yoga", "/all/s/general-yoga"],
                                    ["Hormone Yoga", "/all/s/hormone-yoga"],
                                    ["Integral yoga", "/all/s/integral-yoga"],
                                    ["Japa Yoga", "/all/s/japa-yoga"],
                                    ["Jivamukti Yoga", "/all/s/jivamukti-yoga"],
                                    ["Jnana yoga", "/all/s/jnana-yoga"],
                                    ["Kalari Yoga", "/all/s/kalari-yoga"],
                                    ["Kanga Yoga", "/all/s/kanga-yoga"],
                                    ["Karma Yoga", "/all/s/karma-yoga"],
                                    ["Kashmir yoga", "/all/s/kashmir-yoga"],
                                    ["Kripalu Yoga", "/all/s/kripalu-yoga"],
                                    ["Kriya Yoga", "/all/s/kriya-yoga"],
                                    ["Laughter Yoga", "/all/s/laughter-yoga"],
                                    ["Mysore Yoga", "/all/s/mysore-yoga"],
                                    ["Nidra Yoga", "/all/s/nidra-yoga"],
                                    ["Para Yoga", "/all/s/para-yoga"],
                                    ["Partner Yoga", "/all/s/partner-yoga"],
                                    ["Power Yoga", "/all/s/power-yoga"],
                                    ["Purna Yoga", "/all/s/purna-yoga"],
                                    ["Raja Yoga", "/all/s/raja-yoga"],
                                    ["Restorative Yoga", "/all/s/restorative-yoga"],
                                    ["Rocket Yoga", "/all/s/rocket-yoga"],
                                    ["Satyananda Yoga", "/all/s/satyananda-yoga"],
                                    ["Scaravelli Yoga", "/all/s/scaravelli-yoga"],
                                    ["Sivananda Yoga", "/all/s/sivananda-yoga"],
                                    ["Thai yoga", "/all/s/thai-yoga"],
                                    ["Tibetan Yoga", "/all/s/tibetan-yoga"],
                                    ["Transformational Yoga", "/all/s/transformational-yoga"],
                                    ["Viniyoga", "/all/s/viniyoga"],
                                    ["Vipassana Yoga", "/all/s/vipassana-yoga"],
                                    ["Yang Yoga", "/all/s/yang-yoga"],
                                    ["Zen Yoga", "/all/s/zen-yoga"],
                                    ["Budget Retreats", "/all/c/budget-retreats"],
                                    ["Luxury Holidays", "/all/c/luxury-retreats"],
                                    ["Short Breaks and Weekends", "/all/c/short"],
                                    ["Yoga Meditation Retreats", "/all/c/yoga-meditation-retreats"],
                                    ["Yoga Teacher Training", "/all/c/yoga-teacher-training"],
                                    ["100-Hour Yoga Teacher Training", "/all/c/100-hour-yoga-teacher-training"],
                                    ["200-Hour Yoga Teacher Training", "/all/c/200-hour-yoga-teacher-training"],
                                    ["300-Hour Yoga Teacher Training", "/all/c/300-hour-yoga-teacher-training"],
                                    ["500-Hour Yoga Teacher Training", "/all/c/500-hour-yoga-teacher-training"],
                                    ["Adventure Yoga Retreats", "/all/c/adventure-yoga"],
                                    ["All-Inclusive Yoga Retreats", "/all/c/all-inclusive-yoga"],
                                    ["Aqua Healing and Yoga", "/all/c/aqua-yoga"],
                                    ["Ayahuasca Yoga Retreats", "/all/c/ayahuasca-yoga"],
                                    ["Christian Yoga Retreats", "/all/c/christian-yoga"],
                                    ["Christmas Yoga Retreats", "/all/c/christmas"],
                                    ["Easter Yoga Retreats", "/all/c/easter"],
                                    ["Full Moon Yoga Retreats", "/all/c/full-moon-yoga"],
                                    ["Kids Yoga Teacher Training", "/all/c/kids-yoga-teacher-training"],
                                    ["Kirtan Yoga Retreats", "/all/c/kirtan-yoga-retreats"],
                                    ["Level: Advanced", "/all/c/advanced-yoga"],
                                    ["Level: Beginner", "/all/c/beginner"],
                                    ["New Year Yoga Retreats", "/all/c/new-year"],
                                    ["Nude / Naked Yoga Retreats", "/all/c/nude"],
                                    ["Popular for Couples", "/all/c/couples-yoga"],
                                    ["Popular for Families", "/all/c/family-yoga"],
                                    ["Popular for Gay", "/all/c/gay-yoga"],
                                    ["Popular for Lesbians", "/all/c/lesbian-yoga"],
                                    ["Popular for Men", "/all/c/men-yoga"],
                                    ["Popular for Singles", "/all/c/yoga-singles"],
                                    ["Popular for Teen", "/all/c/teen"],
                                    ["Popular for Women", "/all/c/women-yoga"],
                                    ["Popular for solo", "/all/c/popular-for-solo"],
                                    ["Prenatal / Pregnant Yoga", "/all/c/prenatal-pregnant"],
                                    ["Prenatal Yoga Teacher Training", "/all/c/prenatal-yoga-training"],
                                    ["Retreats near the Sea or Beach", "/all/c/beach-retreats"],
                                    ["SUP Yoga Retreats", "/all/c/sup-yoga-retreats"],
                                    ["Shamanic Healing Yoga", "/all/c/shamanic-yoga"],
                                    ["Thanksgiving Yoga Retreats", "/all/c/thanksgiving"],
                                    ["Vegan Yoga Retreats", "/all/c/vegan-yoga"],
                                    ["Vegetarian Retreats", "/all/c/vegetarian-retreats"],
                                    ["Yoga Ashrams", "/all/c/ashrams"],
                                    ["Yoga Camps", "/all/c/yoga-camps"],
                                    ["Yoga Cruises", "/all/c/yoga-cruise"],
                                    ["Yoga Detox Retreats", "/all/c/yoga-detox-retreats"],
                                    ["Yoga Festivals", "/all/c/yoga-festivals"],
                                    ["Yoga Health Retreats", "/all/c/yoga-health-retreats"],
                                    ["Yoga Holidays", "/all/c/holidays"],
                                    ["Yoga Hotels and Resorts", "/all/c/yoga-hotels-and-resorts"],
                                    ["Yoga Spa Retreats", "/all/c/yoga-spa-retreats"],
                                    ["Yoga Spiritual Retreats", "/all/c/yoga-spiritual-retreats"],
                                    ["Yoga Therapy Retreats", "/all/c/yoga-therapy-retreats"],
                                    ["Yoga Tours", "/all/c/yoga-tours"],
                                    ["Yoga Wellness Retreats", "/all/c/yoga-wellness-retreats"],
                                    ["Yoga and Chanting Mantra", "/all/c/yoga-mantra"],
                                    ["Yoga and Cooking", "/all/c/yoga-cooking"],
                                    ["Yoga and Cycling", "/all/c/yoga-cycling"],
                                    ["Yoga and Dancing", "/all/c/yoga-dancing"],
                                    ["Yoga and Digital Detox Retreats", "/all/c/digital-detox-yoga"],
                                    ["Yoga and Diving", "/all/c/yoga-diving"],
                                    ["Yoga and Eco Retreats", "/all/c/yoga-and-eco-retreats"],
                                    ["Yoga and Fitness", "/all/c/yoga-and-fitness"],
                                    ["Yoga and Hiking", "/all/c/yoga-hiking"],
                                    ["Yoga and Horse Riding", "/all/c/yoga-and-horse-riding"],
                                    ["Yoga and Language Holidays", "/all/c/language-yoga"],
                                    ["Yoga and Life Coaching", "/all/c/yoga-and-life-coaching"],
                                    ["Yoga and Painting", "/all/c/yoga-and-painting"],
                                    ["Yoga and Photography", "/all/c/yoga-photography"],
                                    ["Yoga and Pilates", "/all/c/yoga-pilates"],
                                    ["Yoga and Pranayama", "/all/c/yoga-and-pranayama"],
                                    ["Yoga and Qigong Retreats", "/all/c/yoga-and-qigong-retreats"],
                                    ["Yoga and Raw Food Retreats", "/all/c/yoga-raw-food"],
                                    ["Yoga and Regression Therapy", "/all/c/regression-therapy-yoga"],
                                    ["Yoga and Reiki", "/all/c/yoga-reiki"],
                                    ["Yoga and Running", "/all/c/yoga-running"],
                                    ["Yoga and Sailing", "/all/c/yoga-sailing"],
                                    ["Yoga and Silent Retreats", "/all/c/yoga-silent"],
                                    ["Yoga and Skiing", "/all/c/yoga-ski"],
                                    ["Yoga and Surfing", "/all/c/yoga-surf"],
                                    ["Yoga and Tai Chi", "/all/c/yoga-and-tai-chi"],
                                    ["Yoga and Walking", "/all/c/yoga-walking"],
                                    ["Yoga and Writing", "/all/c/yoga-writing"]
                                ],
                                r = e.parent().find(".searchAutoComplete").val().toLowerCase().split(" "),
                                o = 1;
                            for (i = 0; i < n.length; i++) - 1 < n[i][0].toLowerCase().indexOf(r) && 10 > a.length && (console.log(n[i][0], n[i][1]), o && (1 < a.length && (a.unshift('<li><div class="autocomplete_separator" style="text-transform:uppercase;opacity:0.5;border-bottom: 1px solid rgba(0,0,0,0.1);pointer-events: none;font-size: 10px;margin: 5px 15px 5px 0;padding: 10px 1px 5px!important;width: calc(100% - 30px);">Destinations:</div></li>'), a.push('<li><div class="autocomplete_separator" style="text-transform:uppercase;opacity:0.5;border-bottom: 1px solid rgba(0,0,0,0.1);pointer-events: none;font-size: 10px;margin: 5px 15px 5px 0;padding: 10px 1px 5px!important;width: calc(100% - 30px);">Styles and categories:</div></li>')), o = !o), a.push("<li><a href='" + n[i][1] + "'>" + n[i][0] + "</a></li>"))
                        }
                        e.find(".searchAutoCompleteList").html("<ul>" + a.join("") + "</ul>"), e.find("li").on("mousedown", function() {
                            $(this).find("a").length ? window.location.href = $(this).find("a").attr("href") : (e.find('input[name="ac"]').val(1), e.find(".searchAutoComplete").val($(this).text().replace(/\b\w/g, function(e) {
                                return e.toUpperCase()
                            })), e.find(".searchAutoComplete").blur(), e.parent().submit(), e.submit())
                        })
                    })
                }
            }, 100)), 27 === e.keyCode && ($(".searchAutoCompleteList").hide(), $(".searchAutoComplete").blur()), 40 === e.keyCode && $(".searchAutoCompleteList").each(function() {
                $(this).is(":visible") && ($(this).find("li.selected").length ? ($(this).find("li.selected").next().addClass("selected"), $(this).find("li.selected").first().removeClass("selected")) : $(this).find("li").first().addClass("selected"), $(this).find("li.selected").find(".autocomplete_separator").length && ($(this).find("li.selected").next().addClass("selected"), $(this).find("li.selected").first().removeClass("selected"))), $(this).find("li.selected").length ? ($(this).parent().find(".searchAutoComplete").val($(this).parent().find("li.selected").first().text().replace(/\b\w/g, function(e) {
                    return e.toUpperCase()
                })), $(this).parent().find('input[name="ac"]').val(1)) : ($(this).parent().find(".searchAutoComplete").val(decodeURIComponent($(this).parent().find(".searchAutoComplete").attr("data-q"))), $(this).parent().find('input[name="ac"]').val(0))
            }), 38 === e.keyCode && $(".searchAutoCompleteList").each(function() {
                $(this).is(":visible") && ($(this).find("li.selected").length ? ($(this).find("li.selected").prev().addClass("selected"), $(this).find("li.selected").last().removeClass("selected")) : $(this).find("li").last().addClass("selected"), $(this).find("li.selected").find(".autocomplete_separator").length && ($(this).find("li.selected").prev().addClass("selected"), $(this).find("li.selected").last().removeClass("selected"))), $(this).find("li.selected").length ? ($(this).parent().find(".searchAutoComplete").val($(this).parent().find("li.selected").first().text().replace(/\b\w/g, function(e) {
                    return e.toUpperCase()
                })), $(this).parent().find('input[name="ac"]').val(1)) : ($(this).parent().find(".searchAutoComplete").val(decodeURIComponent($(this).parent().find(".searchAutoComplete").attr("data-q"))), $(this).parent().find('input[name="ac"]').val(0))
            })
        }), $(".searchAutoComplete").on("focusout", function() {
            $(this).parent().find(".searchAutoCompleteList").hide()
        }), $(".searchAutoComplete").on("focus", function() {
            $(this).parent().find(".searchAutoCompleteList").show()
        }), "3" == siteid) {
        var e = ['<li class="">spain, europe</li>', '<li class="">portugal, europe</li>', '<li class="">provinsi bali, indonesia, asia</li>', '<li class="">indonesia, asia</li>', '<li class="">thailand, asia</li>', '<li class="">badung, indonesia, asia</li>', '<li class="">india, asia</li>', '<li class="">united kingdom, europe</li>', '<li class="">italy, europe</li>', '<li class="">goa, india, asia</li>', '<li class="">rishikesh, india, asia</li>'];
        if (void 0 === t) var t = "Popular destinations";
        var a = '<div style="text-transform:uppercase;opacity:0.5;border-bottom: 1px solid rgba(0,0,0,0.1);pointer-events: none;font-size: 10px;margin: 0 15px 5px;padding: 10px 1px 5px!important;width: calc(100% - 30px);">' + t + ":</div>";
        for (i = 0; i < e.length; i++) a += e[i];
        $(".searchAutoCompleteList").append("<ul>" + a + "</ul>")
    }
    if ($(".searchAutoCompleteList").find("li").on("mousedown", function() {
            $("#search_form").find('input[name="ac"]').val(2), $("#search_form").find(".searchAutoComplete").val($(this).text().replace(/\b\w/g, function(e) {
                return e.toUpperCase()
            })), $("#search_form").find(".searchAutoComplete").blur(), $("#search_form").parent().submit(), $("#search_form").submit()
        }), isSearchresultsPage && !0 === window.localStorageStatus && 3 < $("#searchTerm").val().length) {
        var n = localStorage.getItem("searchHistory");
        null == n && (localStorage.setItem("searchHistory", "[]"), n = localStorage.getItem("searchHistory")), (n = JSON.parse(n)).unshift($("#searchTerm").val()), n = n.filter(function(e, t, a) {
            return t == a.indexOf(e)
        }), localStorage.setItem("searchHistory", JSON.stringify(n))
    }
}), $(function() {
    768 > $(window).width() && $(".mobile_back_logo").length && (1 < history.length ? ($(".mobile_back_logo").addClass("show"), $(".mobile_back_logo").show()) : ($(".mobile_back_logo").addClass("hide"), $(".mobile_back_logo").hide()))
}), $(function() {
    if (topicCallouts && 0 < $(".callouts").length) {
        gae("jsCallouts", "success");
        var e = [],
            t = {},
            a = new Set,
            i = function(i, n, r, o) {
                var s = {
                    prompt: i,
                    content: n,
                    className: r,
                    slug: o,
                    index: e.length
                };
                return a.add(r), e.push(s), t[o] = s, s
            };
        2618 === destinationID ? (i("Title 1", "Indonesia is home to one of the most beautiful gems in the world: Bali. This island in Southeast Asia is well known for its breathtaking landscapes, lots of amazing coral reefs, astonishing beaches, green rice fields, and many more jaw-dropping features that make every traveler fall in love with this place. To add on to its natural beauty, Bali is also regarded as a highly spiritual location. Underlined by the ever-mindful Balinese population, their fascinating religious traditions and the holiness of some unbelievable temples.", "message", "title-1"), i("Title 2", '<p>Yoga travel. Which yogi despise the idea of having a retreat in a far far away land while having some fun? Many people would love going on yoga retreats in an exotic place like Costa Rica or Bali. But traveling can also mean a lot of stress; long hours of flight, jet lag and not enough of sleep, problems with the flight, and not to mention a culture gap.</p>\n\n<p>Before you get discouraged by the idea of going on a yoga retreat far from home, it is better to read the following tips:</p>\n\n<ol>\n\t<li>Patience, positivity, and an open mind</li>\n\t<li>A little bit of yoga can’t hurt</li>\n\t<li>Find a good retreat organizer</li>\n\t<li>Ask for important info before you go</li>\n\t<li>When in Rome, do as the Romans do</li>\n</ol>\n\n<p>Read more about how to prepare for your trip <a href="https://www.bookyogaretreats.com/news/travel-tips-for-yogis">here</a>.</p>', "blog", "title-2"), i("External Widget", "Maybe some weather data or something.", "widget", "weather-widget")) : (i("Inspirational Message", "Looking for an experience of a lifetime with a yoga retreat in ?? At BookYogaRetreats.com, it is easy to compare and book yoga courses, yoga ashrams, or yoga retreats in ?. Browse all ? yoga retreats below and book now!", "message", "message"), i("Are You Drinking Water Correctly?", "<h1>Are You Drinking Water Correctly? This Is the Proper Ayurvedic Way to Hydrate Yourself</h1>\n\n\t\t\t\t<div class='byline'>\n\t\t\t\t\t<div class='image'>\n\t\t\t\t\t\t<div class='circle'></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='info'>\n\t\t\t\t\t\t<div class='author'>Kedy Bisht</div>\n\t\t\t\t\t\t<div class='date'>Thursday, September 28, 2017</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<img class='inset' src='https://www.bookyogaretreats.com/static/files/attachments/tg/mg/io/im/p_water_in_a_cup.png'>\n\n\t\t\t\tAyurveda is an ancient system of natural medicine that tries to relocate the body within nature. Water is the largest component of our body, so you can imagine just how important it is to drink it correctly.<br>\n\t\t\t\t<br>\n\t\t\t\tHere are a few tips based on <a href='https://www.bookyogaretreats.com/all/s/ayurveda-yoga'>Ayurveda</a> on how to make the water that you are drinking more effective for your body.\n\n\t\t\t\t<h2>Drink water while sitting instead of standing</h2>\n\n\t\t\t\t<img class='inset' src='https://www.bookyogaretreats.com/static/files/attachments/nm/im/eq/lr/p_sitting_water.jpg'>\n\n\t\t\t\t<a href='https://www.bookyogaretreats.com/all/c/yoga-meditation-retreats'>Having a calm mind</a> before drinking water is important because the circulation in the digestive system gets interrupted otherwise. When you are sitting, your body is calm as your muscles and the nervous system are more relaxed. Your kidneys too can act unimpeded. To calm yourself, you can try taking at least three deep belly breaths before you consume something. Also, <a href='https://www.bookyogaretreats.com/news/reasons-drink-more-water'>drinking water</a> standing up leads to less absorption by the stomach and more accumulation at the joints, resulting in retention of fluids, and consequently, arthritis.", "blog", "are-you-drinking-water-correctly"), i("External Widget", "Maybe some weather data or something.", "widget", "weather-widget")), $(".callouts").append(e.map(function(e, t) {
            return $("<div>", {
                class: "callout " + e.slug,
                html: '<a href="#">' + e.prompt + "</a>"
            }).attr("data-index", t)
        }));
        var n = "" === (s = window.location.hash.substring(1)) ? e[0] : t[s],
            r = $(".organizer-intro--description p"),
            o = function(e) {
                r.addClass(e.className), r.html(e.content), a.forEach(function(e) {
                    return r.removeClass(e)
                }), r.addClass(e.className), $(".callout").removeClass("active"), $("." + e.slug).addClass("active")
            };
        o(n), $(".callout").click(function() {
            var t = e[$(this).data("index")];
            o(t)
        })
    } else gae("jsCallouts", "failure");
    var s
}), $(function() {
    $("#listing-slider").sliderPro({
        width: 620,
        height: 465,
        fade: !0,
        arrows: !0,
        buttons: !1,
        shuffle: !1,
        smallSize: 500,
        mediumSize: 1e3,
        largeSize: 3e3,
        thumbnailArrows: !0,
        autoplay: 0 != $("#listing-slider").data("autoplay"),
        loop: 0 != $("#listing-slider").data("loop-gallery"),
        slideDistance: 0
    }), $("#listing-slider .sp-full-screen-button").click(function() {
        gae("gallery", "fullscreen")
    })
});
var cardFieldName = "adyen-encrypted-form-number";

function blockNonNumberEvents(e) {
    var t, a, i = !1;
    return window.event ? (t = e.keyCode, i = window.event.ctrlKey) : e.which && (t = e.which, i = e.ctrlKey), !(!isNaN(t) && (a = String.fromCharCode(t), 8 != t && !i)) || /[\d ]/.test(a)
}

function trim(e) {
    return rtrim(ltrim(e))
}

function ltrim(e) {
    if ("string" != typeof e) return e;
    for (; - 1 != " \r\n\t\f".indexOf(e.charAt(0)) && 0 != e.length;) e = e.substring(1);
    return e
}

function rtrim(e) {
    if ("string" != typeof e) return e;
    for (; - 1 != " \r\n\t\f".indexOf(e.charAt(e.length - 1)) && 0 != e.length;) e = e.substring(0, e.length - 1);
    return e
}

function digitsOnly(e) {
    if ("string" != typeof e) return e;
    for (var t = "", a = 0; a < e.length; a++) - 1 != "0123456789".indexOf(e.charAt(a)) && (t += e.charAt(a));
    return t
}

function removeLeadingZeros(e) {
    if ("string" != typeof e) return e;
    for (;
        "0" == e.charAt(0) && 0 != e.length;) e = e.substring(1);
    return e
}
var card_previousCardNumber = "";

function card_validateCcNumber() {
    var e = document.getElementById(cardFieldName).value;
    if (0 != e.length) {
        for (var t = 0; t < card_previousCardNumber.length && t < e.length;) {
            if (e[t] != card_previousCardNumber[t]) return void(card_previousCardNumber = e);
            t++
        }
        if (19 < (e = e.replace(/\s+/g, "")).length) card_ccNumberPresentation(!1);
        else {
            card_ccNumberPresentation(!0);
            var a = e.replace(/(\d{4})/g, "$1 ");
            a = a.replace(/\s+$/, ""), card_previousCardNumber = a, document.getElementById(cardFieldName).value = a
        }
    } else card_previousCardNumber = e
}

function card_ccNumberPresentation(e) {
    [].push(cardFieldName)
}
$(function() {
    var e = $("#" + cardFieldName);
    e.on("keypress", function(e) {
        return blockNonNumberEvents(e)
    }), e.on("keyup change", function(e) {
        return card_validateCcNumber(e)
    })
}), $(function() {
    $(".js-listing-availability").find("*").filter(function() {
        return "&nbsp;" === $.trim($(this).html())
    }).addClass("hide")
}), $(function() {
    var e = function(e) {
            e.parent().addClass("collapsed"), e.siblings(".listing-description-container").addClass("hide")
        },
        t = function(e) {
            e.parent().removeClass("collapsed"), e.siblings(".listing-description-container").removeClass("hide")
        };
    $("body").on("click", ".js-collapser", function(a) {
            $(this).parent().hasClass("collapsed") ? t($(this)) : e($(this))
        }), $(".js-expand-hide-all").on("click", function() {
            var a = $(this),
                i = $(".js-expand-all-parent").children(".collapsible"),
                n = (a.data("state"), parseInt(a.data("state")) ? 0 : 1),
                r = n ? "minus" : "plus",
                o = n ? a.data("hide-text") : a.data("expand-text");
            return 0 == n ? i.each(function() {
                e($(this).find(".collapser"))
            }) : i.each(function() {
                t($(this).find(".collapser"))
            }), a.html('<i class="ebs-icon ebs-icon-' + r + '-rounded"></i> ' + o), a.data("state", n), !1
        }),
        function() {
            if ("flex" === $(".columns").css("display")) {
                $(".collapser").each(function() {
                    e($(this))
                });
                var t = $(".js-expand-hide-all");
                t.data("state", !1), t.html('<i class="ebs-icon ebs-icon-plus-rounded"></i> ' + t.data("expand-text"))
            }
        }()
});
var dateWithoutDay, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};

function initDatePicker() {
    function e(e) {
        return $.fn.datepicker.DPGlobal.formatDate(e, "yymmdd", "en")
    }

    function t(e) {
        var t = new Date(e);
        return t.setTime(t.getTime() + 6e4 * t.getTimezoneOffset()), t
    }

    function a(e) {
        return selectedCurrencyFormat.replace("{amount}", e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }

    function i(i) {
        window.availabilityDate = i.getTime() / 1e3;
        var r, o, s, l = e(t(i)),
            c = !1;
        $("input.package-selection-item[data-availability]").each(function() {
            var e = $(this),
                t = parseInt(e.data("id")),
                i = $("#listing-query-package-price-" + t),
                n = h[t][l];
            if (n) {
                e.data("availability-type", n.type), e.closest("li").show(), i.text(a(n.price)), i.attr("data-price", n.price), $("#package-card-" + t).find(".package-card__secondary-button").attr("href", window.location.pathname + "/inquiry?arrival_date=" + ($("#listing_query_arrival_date.date-picker:last").val() || $("#listing_query_arrival_date").val()) + "&package_id=" + t + "&submit_reservation=Or+request+a+reservation"), $("#package-card-" + t).removeClass("hidden"), $("#package-card-" + t).find(".package-card__price-number").html("<i class='ebs-icon-spinner pulse-icon' style='font-size:20px'></i>"), setTimeout(function() {
                    $("#package-card-" + t).find(".package-card__price-number").text(a(n.price)), $("#package-card-" + t + " .package-card__arrival .package-card__mobile-title").text(($("#beauty_arrival_date").val() || $(".js-sc1-inquiry-modal-arrival:first").text()) + " (" + $(".package-cards-wrapper_duration").text().trim() + ")"), $("#package-card-" + t + " .package-card__arrival").removeClass("hide")
                }, 600), (!r || n.price < r) && (r = n.price, o = e), (!s || n.price > s) && (s = n.price, e), $(".expandedPackage").removeClass("expandedPackage"), $("#listing-query-package-table-id-" + t + " .price").html(a(n.price)), $("#listing-query-package-table-id-" + t + " .price").data("price", n.price), $("#listing-query-package-table-id-" + t + " .primary-cta-btn").attr("href", location.protocol + "//" + location.host + location.pathname + "/inquiry?arrival_date=" + $(".arrival_date_select").val() + "&package_id=" + t + "&submit_inquiry"), $("#listing-query-package-table-id-" + t + " .secondary-cta-btn").attr("href", location.protocol + "//" + location.host + location.pathname + "/inquiry?arrival_date=" + $(".arrival_date_select").val() + "&package_id=" + t + "&submit_reservation"), $(".package-cards-wrapper_from").removeClass("hidden"), $(".package-cards-wrapper_price").removeClass("hidden").text(a(r));
                var d = i.parent().parent().find(".package-selection-item"),
                    p = d.attr("data-deal-percent"),
                    u = d.attr("data-deal-fixed");
                if (p || u) {
                    var f = Math.round(n.price * (1 - p / 100) - u);
                    i.html('<span class="promoPrice oldPrice">' + a(n.price) + '</span><span class="promoPrice newPrice">' + a(f) + "</span>"), (!r || f < r) && (r = f, o = e), (!s || f > s) && (s = f, e)
                }
                $("#listing-query-package-table-id-" + t).show();
                var m = $("#inquiry-query-submit").data("no-pre-payment");
                "undefined" == m && (m = !1), 2 == n.type ? (e.removeAttr("disabled"), e.closest("li").removeClass("instant")) : 1 != n.type || m ? (e.removeAttr("disabled"), e.closest("li").removeClass("instant")) : (e.removeAttr("disabled"), e.closest("li").addClass("instant"))
            } else $("#package-card-" + t).find(".package-card__secondary-button").attr("href", "#"), $("#package-card-" + t).find(".package-card__price-number").text("--"), $("#package-card-" + t).addClass("hidden"), $("#listing-query-package-table-id-" + t).hide(), e.closest("li").hide().removeClass("instant"), i.text("--"), e.is(":checked") && (c = !0)
        }), c && o && o.prop("checked", !0), $(".listing-price-wrapper span.price").text(r ? a(r) : "--"), $("input.package-selection-item[data-availability]").each(n), 0 < $(".safety_usps_wrapper").length && 5e3 < s && $(".safety_usps_wrapper").hide()
    }

    function n() {
        var e = $(this);
        if (e.is(":checked")) {
            var t = parseInt(e.data("availability-type")),
                a = $("#reservation-query-submit"),
                i = $("#inquiry-query-submit").data("no-pre-payment");
            "undefined" == i && (i = !1), 2 == t ? (a.val(a.data("request-text")), $("#instant_res_label").hide()) : 1 != t || i ? (a.val(a.data("request-text")), $("#instant_res_label").hide()) : (a.val(a.data("instant-text")), $("#instant_res_label").show())
        }
        s()
    }

    function r(e) {
        return _ != e && (i(t(e)), _ = e, !0)
    }

    function o(e) {
        if (!e) return null;
        var a, i = [],
            n = e.toString().split(",");
        for (var r in n) {
            var o, s, l = n[r],
                c = l.split("-"),
                d = 1 < c.length ? parseInt(c[1]) : 1;
            l = c[0], 0 < r ? (a.setDate(a.getDate() + parseInt(l.slice(0, 4))), o = parseInt(l.slice(4, 5)), s = parseInt(l.slice(5))) : ((a = new Date(0)).setUTCFullYear(parseInt(l.slice(0, 2)) + 2e3), a.setUTCMonth(parseInt(l.slice(2, 4)) - 1), a.setUTCDate(parseInt(l.slice(4, 6))), o = parseInt(l.slice(6, 7)), s = parseInt(l.slice(7)));
            for (var p, u = 0; u < d; ++u) p = {
                date: t(a),
                type: o,
                price: s
            }, i.push(p), a.setDate(a.getDate() + 1)
        }
        return i
    }

    function s(e) {
        $("#arrival_date_select").length ? $("#inquiry-query-submit-date").html($("#arrival_date_select option:selected").text()) : $("#beauty_arrival_date").length ? e ? $("#inquiry-query-submit-date").html(e) : $("#inquiry-query-submit-date").html($("#beauty_arrival_date").val()) : $("#inquiry-query-submit-date").hide()
    }
    var l, c, d, p, u = {
        dates: null,
        guaranteed: null,
        duration: (l = $("#listing_query_arrival_date.date-picker")).data("duration-in-days")
    };
    $("#duration_in_days").length && $("#duration_in_days").change(function() {
        u.duration = $(this).val(), l.datepicker(), p(), c("#listing-availability-container .datepicker .day.active")
    });
    var h = {},
        f = $("#listing-availability-container");
    if (f.length) {
        var m = o(f.data("availability"));
        for (var g in m) {
            var v = m[g],
                y = e(t(v.date));
            u.dates || (u.dates = {}), u.dates[y] = !0, 0 < v.type && (!u.guaranteed && (u.guaranteed = {}), u.guaranteed[y] = !0)
        }
        $("input.package-selection-item[data-availability]").each(function() {
            var a = $(this),
                i = parseInt(a.data("id")),
                n = {},
                r = o(a.data("availability"));
            for (var s in r) {
                var l = r[s];
                n[e(t(l.date))] = l
            }
            h[i] = n
        })
    }
    c = function(e) {
        var t, a, i, n;
        if ($(e).length) return t = $(".day"), i = t.index($(e)), a = parseInt(u.duration), n = $.grep(t, function(e, t) {
            return t < i + a && t >= i
        }), $(n).addClass("highlight")
    }, d = function() {
        return c(".public .datepicker:visible .day.active")
    }, p = function() {
        return $(".day.highlight").removeClass("highlight")
    }, $(".arrival_date_select").change(function() {
        if ($('.arrival_date_select [value="' + $(this).val() + '"]').selected(), !r($(this).val())) {
            $("#departure_dates div").hide();
            var e = "dd_" + $(this).val();
            $("#" + e).show()
        }
    }), $("input.package-selection-item[data-availability]").on("change", n);
    var _ = $("#listing_query_arrival_date").val();
    _ || (_ = $("#arrival_date_select").val()), i(t(_));
    var w = $("#inquiry-query-submit").data("no-pre-payment");
    "undefined" == w && (w = !1), l.datepicker({
        language: selectedLanguage,
        format: "yyyy-mm-dd",
        container: "#listing-availability-container",
        weekStart: 1,
        autoclose: !0,
        orientation: "bottom auto",
        beforeShowDay: function(t) {
            var a = !0;
            if (u.dates) {
                a = {
                    enabled: !1,
                    classes: ""
                };
                var i = e(t);
                if (u.dates[i]) {
                    var n = "available";
                    u.guaranteed && u.guaranteed[i] && !w && (n = n.concat(" guaranteed")), a.enabled = !0, a.classes = n
                }
            }
            return a
        }
    }).on("show", function() {
        return u.dates && $(".public .datepicker:visible").addClass("listing-show"), $(".public .datepicker:visible").on("mouseover.duration", ".available", function() {
            return p(), c(this)
        }).on("mouseout.duration", ".available", function() {
            return p(), c(".public .datepicker:visible .day.active")
        }), c(".public .datepicker:visible .day.active")
    }).on("hide", function() {
        return $(".public .datepicker:visible .day.active").off("click.disabled"), $(".public .datepicker:visible").off("mouseover.duration mouseout.duration", ".available")
    }).on("keypress", function() {
        return !u.dates
    }).on("changeDate", function(a) {
        if (!r(a.format("yyyy-mm-dd"))) {
            var i = e(t(a));
            u.guaranteed && u.guaranteed[i] ? $("#instant_reservation_date_selected").removeClass("hidden") : $("#instant_reservation_date_selected").addClass("hidden")
        }
        return "en" == selectedLanguage ? (s(a.format("DD MM d, yyyy")), $("#beauty_arrival_date").val(a.format("DD MM d, yyyy"))) : (s(a.format("d DD MM, yyyy")), $("#beauty_arrival_date").val(a.format("d DD MM, yyyy")))
    }).on("changeMonth", function() {
        return setTimeout(d, 1)
    }), $("#beauty_arrival_date").on("click", function() {
        return l.datepicker("show")
    }).on("keypress", function() {
        return !1
    }), $("#beauty_inq_arrival_date").on("click", function() {
        return l.datepicker("show")
    }).on("keypress", function() {
        return !1
    }), $(".availability-dates label.date_picker").on("click", function() {
        return l.datepicker("show")
    }), l.val() && l.datepicker("setDate", $("#listing_query_arrival_date").val()), $(".js-calendar-open").click(function() {
        return l.datepicker("show")
    }), s(), $(".js-dialogs-date-picker").each(function(e, t) {
        var a = $(t);
        return a.datepicker({
            language: selectedLanguage,
            format: a.data("date-format") ? a.data("date-format") : "yyyy-mm-dd",
            weekStart: 1,
            autoclose: !0,
            orientation: "bottom auto",
            beforeShowDay: function() {
                return !0
            }
        }).on("show", function() {}).on("hide", function() {}).on("keypress", function() {
            return !u.dates
        }).on("changeDate", function(e) {
            var t = $(a.data("target")),
                i = a.data("target-date-format") ? a.data("target-date-format") : "DD MM d, yyyy";
            return t.is("input") ? t.val(e.format(i)) : t.html(e.format(i))
        }).on("changeMonth", function() {}), $(a.data("target")).on("click", function() {
            return a.datepicker("show")
        }).on("keypress", function() {
            return !1
        }), a.parents("label").on("click", function() {
            return a.datepicker("show")
        }), a.val() && a.datepicker("setDate", a.val()), $(a.data("icon-id")).on("click", function() {
            return a.datepicker("show")
        })
    })
}! function(e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && (module.exports = e(), t = !0), !t) {
        var a = window.Cookies,
            i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = a, i
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var a = arguments[e];
            for (var i in a) t[i] = a[i]
        }
        return t
    }
    return function t(a) {
        function i(t, n, r) {
            var o;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    if ("number" == typeof(r = e({
                            path: "/"
                        }, i.defaults, r)).expires) {
                        var s = new Date;
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * r.expires), r.expires = s
                    }
                    r.expires = r.expires ? r.expires.toUTCString() : "";
                    try {
                        o = JSON.stringify(n), /^[\{\[]/.test(o) && (n = o)
                    } catch (e) {}
                    n = a.write ? a.write(n, t) : encodeURIComponent(n + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(t + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var c in r) r[c] && (l += "; " + c, !0 !== r[c]) && (l += "=" + r[c]);
                    return document.cookie = t + "=" + n + l
                }
                t || (o = {});
                for (var d = document.cookie ? document.cookie.split("; ") : [], p = /(%[0-9A-Z]{2})+/g, u = 0; u < d.length; u++) {
                    var h = d[u].split("="),
                        f = h.slice(1).join("=");
                    '"' === f.charAt(0) && (f = f.slice(1, -1));
                    try {
                        var m = h[0].replace(p, decodeURIComponent);
                        if (f = a.read ? a.read(f, m) : a(f, m) || f.replace(p, decodeURIComponent), this.json) try {
                            f = JSON.parse(f)
                        } catch (e) {}
                        if (t === m) {
                            o = f;
                            break
                        }
                        t || (o[m] = f)
                    } catch (e) {}
                }
                return o
            }
        }
        return i.set = i, i.get = function(e) {
            return i.call(i, e)
        }, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function(t, a) {
            i(t, "", e(a, {
                expires: -1
            }))
        }, i.withConverter = t, i
    }(function() {})
}), Date.prototype.toUTC = function() {
    return new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0))
}, Date.prototype.addDays = function(e) {
    var t;
    return (t = new Date(this.valueOf()).toUTC()).setUTCDate(t.getUTCDate() + e), t
}, dateWithoutDay = function(e) {
    return e.slice(0, 7)
}, $(function() {
    initDatePicker()
}), $(function() {
    $(".package_table").length && ($(".pti_imgs").each(function() {
        0 == $(this).find(".pti_thumb").length && $(this).parent().addClass("pti_thumb_empty")
    }), $(".pti_thumb_empty").length ? gae("ip_hyperlinking", "pack_table_thumb_empty") : $(".pti_thumb").length && gae("ip_hyperlinking", "pack_table_thumb"))
});
for (var letters, defaultDiacriticsRemovalap = [{
        base: "A",
        letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
    }, {
        base: "AA",
        letters: "Ꜳ"
    }, {
        base: "AE",
        letters: "ÆǼǢ"
    }, {
        base: "AO",
        letters: "Ꜵ"
    }, {
        base: "AU",
        letters: "Ꜷ"
    }, {
        base: "AV",
        letters: "ꜸꜺ"
    }, {
        base: "AY",
        letters: "Ꜽ"
    }, {
        base: "B",
        letters: "BⒷＢḂḄḆɃƂƁ"
    }, {
        base: "C",
        letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
    }, {
        base: "D",
        letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
    }, {
        base: "DZ",
        letters: "ǱǄ"
    }, {
        base: "Dz",
        letters: "ǲǅ"
    }, {
        base: "E",
        letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
    }, {
        base: "F",
        letters: "FⒻＦḞƑꝻ"
    }, {
        base: "G",
        letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
    }, {
        base: "H",
        letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
    }, {
        base: "I",
        letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
    }, {
        base: "J",
        letters: "JⒿＪĴɈ"
    }, {
        base: "K",
        letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
    }, {
        base: "L",
        letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
    }, {
        base: "LJ",
        letters: "Ǉ"
    }, {
        base: "Lj",
        letters: "ǈ"
    }, {
        base: "M",
        letters: "MⓂＭḾṀṂⱮƜ"
    }, {
        base: "N",
        letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
    }, {
        base: "NJ",
        letters: "Ǌ"
    }, {
        base: "Nj",
        letters: "ǋ"
    }, {
        base: "O",
        letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
    }, {
        base: "OI",
        letters: "Ƣ"
    }, {
        base: "OO",
        letters: "Ꝏ"
    }, {
        base: "OU",
        letters: "Ȣ"
    }, {
        base: "OE",
        letters: "Œ"
    }, {
        base: "oe",
        letters: "œ"
    }, {
        base: "P",
        letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
    }, {
        base: "Q",
        letters: "QⓆＱꝖꝘɊ"
    }, {
        base: "R",
        letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
    }, {
        base: "S",
        letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
    }, {
        base: "T",
        letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
    }, {
        base: "TZ",
        letters: "Ꜩ"
    }, {
        base: "U",
        letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
    }, {
        base: "V",
        letters: "VⓋＶṼṾƲꝞɅ"
    }, {
        base: "VY",
        letters: "Ꝡ"
    }, {
        base: "W",
        letters: "WⓌＷẀẂŴẆẄẈⱲ"
    }, {
        base: "X",
        letters: "XⓍＸẊẌ"
    }, {
        base: "Y",
        letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
    }, {
        base: "Z",
        letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
    }, {
        base: "a",
        letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
    }, {
        base: "aa",
        letters: "ꜳ"
    }, {
        base: "ae",
        letters: "æǽǣ"
    }, {
        base: "ao",
        letters: "ꜵ"
    }, {
        base: "au",
        letters: "ꜷ"
    }, {
        base: "av",
        letters: "ꜹꜻ"
    }, {
        base: "ay",
        letters: "ꜽ"
    }, {
        base: "b",
        letters: "bⓑｂḃḅḇƀƃɓ"
    }, {
        base: "c",
        letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
    }, {
        base: "d",
        letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
    }, {
        base: "dz",
        letters: "ǳǆ"
    }, {
        base: "e",
        letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
    }, {
        base: "f",
        letters: "fⓕｆḟƒꝼ"
    }, {
        base: "g",
        letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
    }, {
        base: "h",
        letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
    }, {
        base: "hv",
        letters: "ƕ"
    }, {
        base: "i",
        letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
    }, {
        base: "j",
        letters: "jⓙｊĵǰɉ"
    }, {
        base: "k",
        letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
    }, {
        base: "l",
        letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
    }, {
        base: "lj",
        letters: "ǉ"
    }, {
        base: "m",
        letters: "mⓜｍḿṁṃɱɯ"
    }, {
        base: "n",
        letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
    }, {
        base: "nj",
        letters: "ǌ"
    }, {
        base: "o",
        letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
    }, {
        base: "oi",
        letters: "ƣ"
    }, {
        base: "ou",
        letters: "ȣ"
    }, {
        base: "oo",
        letters: "ꝏ"
    }, {
        base: "p",
        letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
    }, {
        base: "q",
        letters: "qⓠｑɋꝗꝙ"
    }, {
        base: "r",
        letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
    }, {
        base: "s",
        letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
    }, {
        base: "t",
        letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
    }, {
        base: "tz",
        letters: "ꜩ"
    }, {
        base: "u",
        letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
    }, {
        base: "v",
        letters: "vⓥｖṽṿʋꝟʌ"
    }, {
        base: "vy",
        letters: "ꝡ"
    }, {
        base: "w",
        letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
    }, {
        base: "x",
        letters: "xⓧｘẋẍ"
    }, {
        base: "y",
        letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
    }, {
        base: "z",
        letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
    }], diacriticsMap = {}, i = 0; i < defaultDiacriticsRemovalap.length; i++) {
    letters = defaultDiacriticsRemovalap[i].letters;
    for (var j = 0; j < letters.length; j++) diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base
}

function removeDiacritics(e) {
    return e.replace(/[^\u0000-\u007E]/g, function(e) {
        return diacriticsMap[e] || e
    })
}
$(function() {
    if ($exp.track("dialogActions")) {
        var e = new URLSearchParams(window.location.search).get("action");
        console.log("action test:", e);
        var t = {
            accept: function() {
                $("#inline_package_summary").clone().appendTo("#reconfirm_summary_container"), $("#payment_conditions").is(":visible") && $("#cancellation_msg, #deposit_msg").clone().appendTo("#reconfirm_summary_container"), $("#reconfirm_summary_container #remote_edit_package_button").remove(), $("#confirm_modal").modal("show"), $("#confirm_modal").on("hide", function() {
                    $("#reconfirm_summary_container").empty(), $("html,body").animate({
                        scrollTop: 0
                    }, 400)
                })
            },
            edit: function() {
                $(".dialog_edit_package_modal_marker").length ? $("#remote_edit_package_button_modal").trigger("click") : setTimeout(function() {
                    return $("#remote_edit_package_button").trigger("click")
                }, 0)
            },
            decline: function() {
                setTimeout(function() {
                    return $("#not-available-tab").click()
                }, 0)
            },
            reply: function() {
                setTimeout(function() {
                    return $("#swap_to_why").click()
                }, 0)
            }
        };
        t[e] && t[e]()
    }
}), $(function() {
    function e() {
        var e = $("#payment_percentage"),
            a = $("#payment_amount"),
            i = $("input[name=deposit_type]:checked", "#noajax_dialogs_form").val(),
            n = parseInt(100 * $.fn.getPercentage(e.data("price"), e.val() / 100)) / 100;
        "percentage" == i && 1e4 == e.val() || "fixed" == i && a.val() >= a.data("price") / 100 ? $("#rest_paid_on_wrapper").css({
            opacity: .5
        }) : $("#rest_paid_on_wrapper").css({
            opacity: 1
        }), $("#deposit_price").html("(" + n + " " + e.data("currency") + ")");
        var r, o, s = $("input[name=deposit_type][value=fixed]").prop("checked"),
            l = s ? $("#payment_amount").val() : n,
            c = $("input[name=rest_paid_on]:checked").val(),
            d = "before_arrival" == c ? parseInt($("#x_days_before").val()) : 0,
            p = t.data("total-price") / 100,
            u = new Date(t.data("arrival-date")),
            h = new Date(t.data("departure-date")),
            f = new Date;
        if ("departure" == c ? f = h : (f = u).setDate(u.getDate() - d), "Invalid Date" != f && $("#span_days_before").html(" days before arrival: " + f.toString().slice(4, 15)), new Date > f)
            if (r = t.data("deposit-increased-msg"), $("#deposit_price").html("(" + p + " " + e.data("currency") + ")"), $("#percent").html("100"), document.getElementById("payment_amount").value = p, document.getElementById("payment_percentage").value = 1e4, $("#balance_due_date_note_small").css("color"), $("#balance_due_date_note_small,#balance_non_refundable").css("color", "red"), setTimeout(function() {
                    $("#balance_due_date_note_small,#balance_non_refundable").css("color", "#999999")
                }, 500), $("#deposit_details").css({
                    opacity: .5
                }), null != (o = document.getElementById("balance_due_date_note_small"))) o.innerHTML = r;
            else {
                var m = document.createElement("small");
                m.setAttribute("id", "balance_due_date_note_small");
                var g = document.createTextNode(r);
                m.appendChild(g);
                var v = document.getElementById("rest_paid_on_radio"),
                    y = document.getElementById("balance_non_refundable");
                v.insertBefore(m, y)
            }
        else $("#deposit_details").css({
            opacity: 1
        }), null != (o = document.getElementById("balance_due_date_note_small")) && (o.innerHTML = ""), r = l >= t.data("total-price") / 100 ? t.data("full-payment-msg") : t.data(s ? "deposit-fixed-msg" : "deposit-msg") + " " + t.data(0 < d ? "rest-paid-before-arrival-msg" : "rest-paid-on-msg");
        t.text(_.template(r)({
            amount: l + " " + e.data("currency"),
            percentage: e.val() / 100,
            nr_days: d,
            when: translation["rest_paid_on_" + ("before_arrival" == c ? "arrival" : c)]
        })), 0 == +$("#original-price-wrapper").data("package-id") && 0 == +p && ($("input[type='radio'][name='_available'][value='-1']").trigger("click"), $("input[type='radio'][name='_available'][value='1']").parent().attr("style", "opacity:0.25;pointer-events:none;"), $(".inline_package_summary_tab3").show(), $("#preconfirm_availabilty_button").length && $("#preconfirm_availabilty_button").prop("disabled", !0), $("#tab-1").hide())
    }
    $("#accept_payment").on("change", function() {
        $("#payments_on").toggleClass("hidden", !this.checked), $("#payments_off").toggleClass("hidden", this.checked), $("#payment_conditions").toggleClass("hidden", !this.checked), $("p#payments_off.warning").closest("div").toggleClass("warning")
    }), $("#payment_percentage").on("input", function() {
        parseInt($(this).val() / 100) > $(this).attr("min") / 100 && $(this).val(100 * parseInt($(this).val() / 100)), $($(this).data("target2")).text($(this).val() / 100 + "%")
    });
    var t = $("#deposit_msg");
    $("#payment_percentage, #payment_amount, input[name=deposit_type], input[name=rest_paid_on], #x_days_before").on("input change", e), $(".payment-wrpr #before_arrival_balance").is(":checked") || $(".payment-wrpr small").css({
        opacity: .7
    }), $(".payment-wrpr input:radio").on("change", function() {
        $(".payment-wrpr small").css({
            opacity: $("#before_arrival_balance").is(":checked") ? 1 : .7
        })
    }), $.fn.getPercentage = function(e, t) {
        return e * t / 1e4
    }, $("input[name=cancellation_policy], #refundable_nr_days_before_checkin").on("input change", function() {
        var e = "refundable" == $("input[name=cancellation_policy]:checked").val() && 0 == $("#refundable_nr_days_before_checkin").val() ? $("#cancellation_msg").data("fully-refundable") : $("#cancellation_msg").data($("input[name=cancellation_policy]:checked").val());
        $("#cancellation_msg").text(_.template(e)({
            nr_days: $("#refundable_nr_days_before_checkin").val()
        }))
    }), $("#x_days_before").on("input click", function() {
        $("input[name=rest_paid_on][value=before_arrival]").click(), $(this).focus()
    }), $("#refundable_nr_days_before_checkin").on("input click", function() {
        $("input[name=cancellation_policy][value=refundable]").click(), $(this).focus()
    }), $("#why_not_suitable_other_input").on("input click", function() {
        $("#why_not_suitable_other").prop("checked", !0)
    }), $("#payment_percentage").on("input click", function() {
        $("input[name=deposit_type][value=percentage]").click(), $("input[name=deposit_type]").each(function(e, t) {
            $(t).parent().css({
                opacity: $(t).prop("checked") ? 1 : .7
            })
        })
    }), $("#payment_amount").on("input click", function() {
        $("input[name=deposit_type][value=fixed]").click(), $("input[name=deposit_type]").each(function(e, t) {
            $(t).parent().css({
                opacity: $(t).prop("checked") ? 1 : .7
            })
        }), $(this).focus()
    }), $("#payment_amount_min").on("input click", function() {
        $("input[name=deposit_type][value=fixed_min]").click(), $("input[name=deposit_type]").each(function(e, t) {
            $(t).parent().css({
                opacity: $(t).prop("checked") ? 1 : .7
            })
        }), $(this).focus()
    }), $("input[name=deposit_type]").on("change", function() {
        $("input[name=deposit_type]").each(function(e, t) {
            $(t).parent().css({
                opacity: $(t).prop("checked") ? 1 : .5
            })
        })
    }), $(".trip-tabs ul.tabs li.current").children("input").prop("checked", !0), $(".trip-tabs ul.tabs li").click(function() {
        var e = $(this).attr("data-tab");
        $(this).parent().hasClass("pick-first") && $(this).parent().removeClass("pick-first"), $(".trip-tabs ul.tabs li").removeClass("current"), $(".trip-tabs .tab-content").removeClass("current"), $(this).addClass("current"), $(this).children("input").prop("checked", !0), $("#" + e).addClass("current"), $(".trip-tabs .tab-content.current .dialogs_conditions_reply_message_destination").prepend($("#dialogs_conditions_reply_message").show()), $(".trip-tabs .tab-content.current .ctas-holder").prepend($(".send_copy_checkbox")), 0 < $(this).children("input").val() || -1 == $(this).children("input").val() ? $("#edit_package_button").show() : ($("form#edit_package").hasClass("editable") && $("#edit_package_button").trigger("click"), $("#edit_package_button").hide())
    });
    var a = $('.switch input#accept_payment[type="checkbox"]'),
        i = function() {
            a.siblings(".slider").text(a.is(":checked") ? "Enabled" : "Disabled")
        };
    i(), a.click(i), $(".trip-tabs .tab-content.current .dialogs_conditions_reply_message_destination").prepend($("#dialogs_conditions_reply_message")), e()
}), $(function() {
    var e = $("#edit_package_button.mainText").html();
    $("#edit_package_button").on("click", function() {
        return $(this).toggleClass("edit-mode", "non-edit-mode"), $("#edit_package").toggleClass("editable", "noneditable"), $(this).toggleClass("altText"), $("#remote_edit_package_button").toggleClass("hide"), $(".mainText").html(e), $(".altText").text("Cancel"), !1
    }), $("#remote_edit_package_button").on("click", function() {
        $("#edit_package_button").trigger("click");
        var e = $(this.hash);
        return !!(e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length && ($("html,body").animate({
            scrollTop: e.offset().top - 25
        }, 400), !1)
    }), $("#edit_package").bind("successCallback", function() {
        $(".package_element .show .price").html($("#price").val()), $(".package_element .show .package-attributes").html($("#menu1").html()), $("#arrival_date_show").html($("#arrival_date_picker").val()), $("#departure_date_show").html($("#departure_date_picker").val()), $("#listing_title_show").html($("#listing_title").val()), $("#edit_package_button").click();
        var e = $("#message-form-wrapper").offset().top;
        $("html,body").animate({
            scrollTop: e
        }, 400), location.reload()
    })
}), $(function() {
    $(".js-send-email-button").click(function() {
        var e, t, a, i = $(this),
            n = i.val(),
            r = i.data("disable-with"),
            o = i.data("post-url"),
            s = i.data("login-url"),
            l = i.data("organizer");
        i.attr("disabled", 1), i.val(r), e = o, t = s, a = l, $.ajax({
            url: e,
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                organizerID: a,
                specificPageLink: t,
                linkValidityMinutes: 10080
            }),
            statusCode: {
                200: function(e) {
                    1 == e ? ($(".js-email-sent-sucessfully").show(), $(".js-send-email-button").hide()) : ($(".js-email-sent-failed").show(), $(".js-send-email-button").hide(), i.val(n), i.removeAttr("disabled"))
                },
                504: function() {
                    $(".js-email-sent-failed").show(), $(".js-send-email-button").hide()
                },
                500: function() {
                    $(".js-email-sent-failed").show(), $(".js-send-email-button").hide()
                }
            }
        })
    })
}), $(function() {
    function e() {
        var e = $(".content-dialog #message-history-wrapper.customer");
        if (e.length && e[0].scrollHeight) {
            var t = $(".message-container").data("message-sent");
            e[0].scrollTop = 1 == t && $(".pay-msg").length ? e[0].scrollHeight - e.height() - parseInt(e.css("padding-top")) - parseInt(e.css("padding-bottom")) - $(".pay-msg").parent().outerHeight() - $("#listing-message-holder").find(".customer-message:last-child").outerHeight() : e[0].scrollHeight - e.height() - parseInt(e.css("padding-top")) - parseInt(e.css("padding-bottom"));
            var a = $("body")[0];
            a.scrollTop = a.scrollHeight
        }
    }

    function t() {
        var e = $(this);
        if ($(this).is(":visible")) {
            var t = $(".inner-container.messenger-form"),
                a = Math.min(108, 0 == e.val().length ? 28 : this.scrollHeight);
            e.css("height", a + "px"), t.css("height", a + 14 + "px")
        }
    }

    function a() {
        var e = [];
        return $("#message-form-wrapper input:file").each(function() {
            this.files && 0 != this.files.length || e.push(this)
        }), $(e)
    }

    function i(e) {
        var t, a, i = (t = e, a = Math.floor(Math.log(t) / 6.931471805599453), (t / Math.pow(1024, a)).toFixed(1) + " " + ["bytes", "KB", "MB", "GB", "TB", "PB"][a]);
        return e <= n ? i : "<span style='color: red;'>" + i + "</span>"
    }
    var n = 10485760;
    e(), $("textarea.simple-message-form.mobile[name='message']").keyup(t), "undefined" != typeof exp_dialogs_cust_resizable_textarea && exp_dialogs_cust_resizable_textarea && $("#simple_message_form_message").on("change keyup paste", function() {
        $("#simple_message_form_message").autosize().css("resize", "vertical"), $(".inner-container.messenger-form").css("height", "auto"), $("#message-history-wrapper").css("padding-bottom", $(".inner-container.messenger-form").css("height"))
    }), $("#message-form-submit").on("click", function(a) {
        function i() {
            l.val(c), l.removeAttr("disabled")
        }

        function r(e) {
            $("textarea.simple-message-form[name='message']").each(function() {
                e || $(this).is(":visible") ? $(this).removeAttr("disabled") : $(this).attr("disabled", 1)
            })
        }

        function o(e) {
            (e = $("#message-form-client-errors #" + e).text()) && e.length && s.text(e).removeClass("hide")
        }
        a.preventDefault();
        var s = $("#message-form-errors");
        s.text("").addClass("hide");
        var l = $(this),
            c = l.val(),
            d = l.data("disable-with");
        l.attr("disabled", 1), l.val(d);
        var p = $("#new_simple_message_form");
        return p.ajaxSubmit({
            dataType: "html",
            beforeSerialize: function() {
                if (r(), 0 < $("#message-form-wrapper input:file").filter(function() {
                        return this.files && this.files.length && this.files[0].size > n
                    }).length) return o("file_too_large"), i(), !1
            },
            success: function(a) {
                $("#listing-message-holder").html(a), $("#message-form-wrapper .attachments-wrp .list").html(""), e(), $("#listing-message-holder").find(".message-container:last-child").addClass("highlight"), p[0].reset(), t.apply($("textarea.simple-message-form.mobile[name='message']")[0]), "undefined" != typeof exp_dialogs_cust_resizable_textarea && exp_dialogs_cust_resizable_textarea && ($("textarea#simple_message_form_message").css("height", "60px"), $("#message-history-wrapper").css("padding-bottom", "130px"))
            },
            error: function(e) {
                var t = e.responseText && e.responseText.trim();
                t && t.length ? s.text(e.responseText.trim()).removeClass("hide") : o("failed_contact_server"), i()
            },
            complete: function() {
                r(!0), i()
            }
        }), !1
    }), $("#message-form-wrapper").on("change", "input.slot", function() {
        var e = a(),
            t = e.length ? e.first().attr("id") : "undefined";
        $("label.attachment").attr("for", t), $(".attachments-wrp").trigger("addfile")
    }), $("#message-form-wrapper").on("addfile", ".attachments-wrp", function() {
        var e = $(this),
            t = e.find(".list").html("");
        e.find("input:file").each(function() {
            this.files && 0 < this.files.length && t.append("<li file-id='" + this.id + "'><span class='file-name'>" + this.files[0].name + " (" + i(this.files[0].size) + ")</span>&nbsp;<span class='close delete'>&times;</span></li>")
        })
    }), $("#message-form-wrapper").on("click", ".attachments-wrp .delete", function() {
        var e = $(this).closest("li"),
            t = e.attr("file-id");
        e.remove(), $("#" + t).replaceWith('<input class="slot" id="' + t + '" name="file" type="file">'), $("label.attachment").attr("for", a().first().attr("id"))
    });
    var r = $(".inquiry-list-cta"),
        o = $(".inquiry-info-cta"),
        s = $("#backiqlist"),
        l = $("#backiqInfo"),
        c = $(".inquiry-list-cta, .inquiry-info-cta");
    r.on("click", function(e) {
        return c.hasClass("no-click") ? c.removeClass("no-click") : $(".inquiries-container").animate({
            left: "+0%",
            opacity: 1
        }, 333), e.preventDefault(), !1
    }), "undefined" != typeof dp_toggle_buttons && ($(".inquiry-list-toggle").click(function() {
        return $(".interested-listing").removeClass("js-slide-in"), $(".inquiry-info-toggle").removeClass("active"), $(".inquiries-container").toggleClass("js-slide-in").off("click"), $(this).toggleClass("active"), !1
    }), $(".inquiry-info-toggle").click(function() {
        return $(".inquiries-container").removeClass("js-slide-in"), $(".inquiry-list-toggle").removeClass("active"), $(".interested-listing").toggleClass("js-slide-in").off("click"), $(this).toggleClass("active"), !1
    })), "undefined" != typeof ask_review_dialogs_leakage && 481 > $(window).width() && ("undefined" == typeof dp_toggle_buttons ? r.trigger("click") : $(".inquiry-info-toggle").trigger("click")), s.on("click", function(e) {
        return c.addClass("no-click"), $(".inquiries-container").animate({
            left: "-100%",
            opacity: 0
        }, 333, function() {
            c.removeClass("no-click")
        }), e.preventDefault(), !1
    }), o.on("click", function(e) {
        return c.hasClass("no-click") ? c.removeClass("no-click") : (c.addClass("no-click"), $(".interested-listing").animate({
            left: "+0%",
            opacity: 1
        }, 333)), e.preventDefault(), !1
    }), l.on("click", function(e) {
        return c.addClass("no-click"), $(".interested-listing").animate({
            left: "+100%",
            opacity: 0
        }, 333, function() {
            c.removeClass("no-click")
        }), e.preventDefault(), !1
    });
    var d = $(".reinf-badges-container .reinf-item.economical"),
        p = $(".reinf-badges-container .reinf-item.economical .reinf-tooltip"),
        u = $(".reinf-badges-container .reinf-item.popularity"),
        h = $(".reinf-badges-container .reinf-item.popularity .reinf-tooltip");
    d.on("mouseenter", function(e) {
        p.animate({
            opacity: 1,
            right: "38"
        }, 100).show(), e.preventDefault()
    }), d.on("mouseleave", function(e) {
        p.animate({
            opacity: 0,
            right: "8"
        }, 100).hide(), e.preventDefault()
    }), u.on("mouseenter", function(e) {
        h.animate({
            opacity: 1,
            right: "38"
        }, 100).show(), e.preventDefault()
    }), u.on("mouseleave", function(e) {
        h.animate({
            opacity: 0,
            right: "8"
        }, 100).hide(), e.preventDefault()
    })
}), $(function() {
    1024 < $(window).width() && $("#dd_destinations").length && ($(document).keyup(function(e) {
        27 == e.keyCode && $("#dd_destinations").removeClass("active")
    }), $(".btn.dropdown-toggle").click(function(e) {
        $(e.target).closest("#destinations").length || $("#dd_destinations").removeClass("active")
    }), $("#destinations").click(function() {
        $("#dd_destinations").toggleClass("active")
    }), $(".dd_container").each(function() {
        3 < $(this).find(".dd_group_1").length && ($(this).addClass("dd_col_" + $(this).find(".dd_group_1").length), $(".dd_group_1").each(function() {
            11 < $(this).find("li").length && $(this).addClass("collapsed")
        })), 4 > $(this).find(".dd_group_1").length && $(this).addClass("dd_col_1")
    }), $(".dd_expander").click(function() {
        $(this).closest(".dd_group_1").parent().find(".dd_group_1").removeClass("collapsed"), gae("topicPage", "dd_remake_expand")
    }))
}), $.fn.bindFirst = function(e, t) {
    this.bind(e, t);
    var a = $._data($(this).get(0), "events")[e.split(".")[0]],
        i = a.pop();
    a.splice(0, 0, i)
};
var $exp = function() {
    var e, t = {},
        a = [];
    return {
        track: function(i, n) {
            if (!i) return 0;
            var r = t[i],
                o = this.variant(i);
            return r ? (n && (r.pending ? r.callbacks.push(n) : n(o)), o) : ((r = {}).callbacks = [], r.pending = !0, "function" == typeof n && r.callbacks.push(n), t[i] = r, a.push(i), e && clearTimeout(e), e = setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: "/track/" + a.join(","),
                    async: !0
                }).done(function() {
                    for (var e in r.pending = !1, r.callbacks) {
                        (0, r.callbacks[e])(o)
                    }
                }), a = []
            }, 25), o)
        },
        variant: function(e) {
            return "undefined" == typeof variants_ ? 0 : variants_[e] || 0
        }
    }
}();

function gae(e, t, a) {
    if (window.gaeList = window.gaeList || [], void 0 === a) {
        var i = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        a = "mobile";
        1024 < i ? a = "desktop" : 768 <= i && (a = "tablet")
    }
    window.gaeList.push(e + ", " + t + ", " + a), "undefined" != typeof ga && (ga(function() {
        var i = ga.getAll()[0].get("name");
        ga(i + ".send", "event", {
            eventCategory: e,
            eventAction: t,
            eventLabel: a
        })
    }), window.__insp = window.__insp || [], __insp.push(["tagSession", {
        category: e,
        action: t,
        label: a
    }])), (-1 < window.location.href.indexOf("localhost") || -1 < window.location.href.indexOf("w1.")) && console.log("GAE", e, t, a)
}
$(function() {
    var e = $(window),
        t = $("[data-exp-track-on-view]");
    if (t.length) {
        var a = function() {
            t.filter(function() {
                return $(this).is(":visible") && (t = this, a = e.width(), i = e.height(), n = e.scrollTop(), r = e.scrollLeft(), o = $(t), s = o.offset(), l = o.width(), c = o.height(), d = a + r <= s.left, p = r >= s.left + l, u = i + n <= s.top, h = n >= s.top + c, !(d || p || u || h));
                var t, a, i, n, r, o, s, l, c, d, p, u, h
            }).map(function() {
                return $(this).data("exp-track-on-view")
            }).each(function() {
                $exp.track(this)
            })
        };
        a(), $(window).on("scroll resize click mouseup", function() {
            window.__exp_viewport_tid && clearTimeout(window.__exp_viewport_tid), window.__exp_viewport_tid = setTimeout(a, 333)
        })
    }
    $.each(["blur", "change", "click", "dblclick"], function(e, t) {
        $("[data-exp-track-on-" + t + "]").on(t, function() {
            $exp.track($(this).data("exp-track-on-" + t))
        })
    })
}), $(function() {
    $(".favorites").on("click", function() {
        var e, t = $(this),
            a = parseInt($("#listing-favorite-count").html());
        t.hasClass("ebs-icon-heart") ? (t.removeClass("ebs-icon-heart").addClass("ebs-icon-heart-stroked"), e = "DELETE", a--, $("#listing-favorite-count").html(a), 0 == a && $("#listing-favorite-count-div").hide()) : (t.removeClass("ebs-icon-heart-stroked").addClass("ebs-icon-heart"), e = "PUT", a++, $("#listing-favorite-count").html(a), 0 < a && $("#listing-favorite-count-div").show()), $.ajax({
            type: e,
            url: "/favorites/" + t.data("listing-id"),
            async: !0
        }).done(function(e) {
            e && ($("#user_favorite_count").html(e.count), $(".user_favorite_count").html(e.count))
        }), gae("wishlist", "button_toggle")
    })
}), $(function() {
    $("input[type=range]").on("input", function() {
        var e = $(this),
            t = e.data("target");
        $(t).length && $(t).text(e.val() + (e.data("percent") ? "%" : ""))
    })
}), $(function() {
    if ("undefined" != typeof expAddCustomDimensions && 1 == expAddCustomDimensions) {
        if (isIndexPage) var e = "Home";
        else if (isListingPage) e = "Listing";
        else if (isOrganizerPage) e = "Organizer";
        else if (isSearchresultsPage) e = "Search results";
        else if (isDialogForCustomer) e = "Dialog (customer)";
        else if (isBlogHome) e = "Blog home";
        else if (isBlogPost) e = "Blog article";
        else if (isConfirmationPage) e = "Confirmation";
        else if (isInquiryPage) e = "Inquiry/Reservation";
        else if (isContinentPage) e = "Continent";
        else if (isCountryPage) e = "Country";
        else if (isRegionPage) e = "Region";
        else if (isCategoryPage) e = "Category";
        else e = "Other";
        ga(function() {
            var t = ga.getAll()[0].get("name");
            ga(t + ".set", "dimension4", e)
        }), (-1 < window.location.href.indexOf("localhost") || -1 < window.location.href.indexOf("w1.")) && console.log("GACD", e)
    }
}), $(function() {
    $(".gototop").on("click", function(e) {
        $("html, body").animate({
            scrollTop: 0
        }, 400), e.preventDefault()
    })
}), $(document).scroll(function() {
    584 < $(this).scrollTop() ? $(".gototop-btn").fadeIn() : $(".gototop-btn").fadeOut()
});
var getUrlParameter = function(e) {
    var t, a, i = decodeURIComponent(window.location.search.substring(1)).split("&");
    for (a = 0; a < i.length; a++)
        if (t = i[a].split("="), t[0] === e) return void 0 === t[1] || t[1]
};

function removeUrlParameter(e, t) {
    var a, i = t.split("?")[0],
        n = [],
        r = -1 === t.indexOf("?") ? "" : t.split("?")[1];
    if ("" !== r) {
        for (var o = (n = r.split("&")).length - 1; 0 <= o; o -= 1) a = n[o].split("=")[0], a === e && n.splice(o, 1);
        i = 0 < n.length ? i + "?" + n.join("&") : i
    }
    return i
}

function localStorageTest() {
    var e = "test";
    try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0
    } catch (e) {
        return !1
    }
}

function nl2br(e) {
    return (e + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br />$2")
}

function br2nl(e) {
    return (e + "").replace(/<br ?\/?>/g, "\n")
}

function elementInViewport(e) {
    for (var t = e.offsetTop, a = e.offsetLeft, i = e.offsetWidth, n = e.offsetHeight; e.offsetParent;) e = e.offsetParent, t += e.offsetTop, a += e.offsetLeft;
    return t < window.pageYOffset + window.innerHeight && a < window.pageXOffset + window.innerWidth && t + n > window.pageYOffset && a + i > window.pageXOffset
}

function formatDate(e) {
    var t = new Date(e),
        a = "" + (t.getMonth() + 1),
        i = "" + t.getDate(),
        n = t.getFullYear();
    return 2 > a.length && (a = "0" + a), 2 > i.length && (i = "0" + i), [n, a, i].join("-")
}

function shuffle(e) {
    var t, a, i;
    for (i = e.length - 1; 0 < i; i--) t = Math.floor(Math.random() * (i + 1)), a = e[i], e[i] = e[t], e[t] = a
}

function saveEnteredData() {
    sessionStorage.setItem("cc", $("#adyen-encrypted-form-number").val()), sessionStorage.setItem("month", $("#adyen-encrypted-form-expiry-month").val()), sessionStorage.setItem("year", $("#adyen-encrypted-form-expiry-year").val())
}

function saveCustomerData() {
    return sessionStorage.setItem("name", $("#inquiry_message_form_first_name").val()), sessionStorage.setItem("lastName", $("#inquiry_message_form_last_name").val()), sessionStorage.setItem("email", $("#inquiry_message_form_email").val()), $("#inquiry_message_form_message").length && sessionStorage.setItem("text", $("#inquiry_message_form_message").val()), !1
}

function loadEnteredData() {
    loadFieldFromSession("cc", "#adyen-encrypted-form-number"), loadFieldFromSession("month", "#adyen-encrypted-form-expiry-month"), loadFieldFromSession("year", "#adyen-encrypted-form-expiry-year"), loadFieldFromSession("name", "#inquiry_message_form_first_name"), loadFieldFromSession("lastName", "#inquiry_message_form_last_name"), loadFieldFromSession("email", "#inquiry_message_form_email"), $("#inquiry_message_form_message").length && loadFieldFromSession("text", "#inquiry_message_form_message")
}

function loadFieldFromSession(e, t) {
    if (null != sessionStorage) {
        var a = sessionStorage.getItem(e);
        "undefined" != a && null != a && "" != a && $(t).val(a)
    }
}

function fullAmountOrDepositChanged(e) {
    "deposit" == e.selectedOptions[0].value ? $("#please_pay_deposit_now").show(500) : $("#please_pay_deposit_now").hide(500)
}
window.localStorageStatus = localStorageTest(), $(function() {
    $("[data-showmore-limit]").length && ($("[data-showmore-limit]").each(function() {
        var e = $(this).attr("data-showmore-limit"),
            t = $(this).attr("data-showmore-text") ? $(this).attr("data-showmore-text") : "Show More",
            a = this.innerHTML,
            i = "";
        (a = a.replace(/\s+/g, " ")).length > e && (i = (i = (i += "<div class='show-content-visible'>") + a.substring(0, e) + "...") + "<span class='show-more-cta'>" + t + "</span>", i = (i += "</div>") + "<div class='show-content-hidden'>" + a + "</div>", $(this).html(i))
    }), $(".show-more-cta").click(function() {
        return $(this).closest(".show-content-visible").hide(), $(this).parents().next(".show-content-hidden").show(), $(this).attr("data-showmore-gaevent") ? gae("readmore", $(this).attr("data-showmore-gaevent")) : gae("readmore", "not_specified"), !1
    })), $("[data-user-circle-name]").length && $("[data-user-circle-name]").each(function() {
        var e = Math.floor(5 * Math.random()) + 1,
            t = $(this).attr("data-user-circle-name").substring(0, 1),
            a = $(this).find(".review-user-cirle").first();
        a.addClass("color-" + e), a.html(t)
    }), $("[data-paginate]").length && ($("[data-paginate]").each(function() {
        var e = $(this).attr("data-paginate"),
            t = $(this).find("[data-paginate-item]"),
            a = $(this).attr("data-showmore-gaevent") ? 'data-showmore-gaevent="' + $(this).attr("data-showmore-gaevent") + '"' : "";
        console.log(a);
        var n = t.length,
            r = 0;
        if (n > e)
            for (i = e; i < n; i++) t.eq(i).hide(), r = 1;
        if (r) {
            var o = $(this).find(" > :hidden").length;
            $(this).after('<div class="load-more-items-container"><a href="#" ' + a + ' data-target="' + $(this).attr("id") + '" class="load-more-items">Show more (' + o + ")</a></div>")
        }
    }), $(".load-more-items").click(function() {
        var e = $(this).attr("data-target"),
            t = $("#" + e).find("[data-paginate-item]"),
            a = $("#" + e + " > :visible").length,
            n = a + parseInt($("#" + e).attr("data-paginate"));
        for (i = a; i < n; i++) t.eq(i).show();
        var r = $("#" + e + " > :hidden").length;
        return 0 == r ? $(this).hide() : $(this).text("Show more (" + r + ")"), $(this).attr("data-showmore-gaevent") ? gae("paginate", $(this).attr("data-showmore-gaevent")) : gae("paginate", "not_specified"), !1
    })), $(".transparent-menu .btn-navbar").click(function() {
        $(this).hasClass("collapsed") ? $(this).parents(".navbar-inner").removeClass("dark-background") : $(this).parents(".navbar-inner").addClass("dark-background")
    }), $(".js-scroll-to").click(function() {
        return $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 60
        }, 300), !1
    })
}), $(function() {
    $(".js-close-btn").click(function() {
        $(this).parents(".js-close-btn-container").fadeOut();
        var e = $(this).parents(".js-close-btn-container").attr("data-experiment-name");
        return void 0 !== e && gae(e, "closeButton"), !1
    })
}), $(function() {
    $(".js-expand-btn").click(function() {
        $(this).parents(".js-expand-container").toggleClass("open");
        var e = $(this).parents(".js-expand-container").attr("data-experiment-name");
        return void 0 !== e && gae(e, "expandButton"), !1
    })
}), $(function() {
    $(".edit-editor-cta").on("click", function() {
        var e = $(this).parents("[data-display]"),
            t = e.next("[data-edit-" + e.data("display") + "]");
        t.find("[data-edit-content]").each(function() {
            $(this).val(br2nl($(this).val()))
        }), t.show(), e.hide()
    }), $("[data-edit-cancel]").on("click", function() {
        var e = $(this),
            t = e.parents("[data-edit-" + e.data("hide-fieldset") + "]"),
            a = t.siblings("[data-display]"),
            i = t.find(".edit-inline-error");
        t.hide(), i.hide(), a.show()
    }), $("[data-edit-save]").on("click", function() {
        var e = $("body").find("[data-instructor-id]").data("instructor-id"),
            t = $("body").find("[data-instructor-token]").data("instructor-token"),
            a = $(this),
            i = $(this).data("saving-text"),
            n = $(this).data("default-text"),
            r = a.parents("[data-edit-" + a.data("save-fieldset") + "]"),
            o = r.siblings("[data-display]"),
            s = {};
        r.find("[data-edit-content]").each(function() {
            var e = nl2br($(this).val()),
                t = $(this).attr("name");
            "" != e && (s[t] = e)
        }), a.html(i);
        var l = new XMLHttpRequest;
        l.open("PUT", "/objectAttributesAPI/instructor/" + e), l.setRequestHeader("Content-Type", "application/json"), l.setRequestHeader("token", t), l.onload = function() {
            if (200 === l.status) {
                var e = Object.keys(s),
                    t = 0;
                o.find("[data-display-content]").each(function() {
                    if (name = $(this).data("name"), "social-link" == $(this).data("display-content-type") && -1 != e.indexOf(name)) {
                        var a = $(this).attr("href").substring(0, $(this).attr("href").lastIndexOf("/") + 1);
                        $(this).attr("href", a + s[name]), $(this).parent("li").show(), $(".social-default-text").hide(), t = 1
                    } else "social-link" == $(this).data("display-content-type") && -1 == e.indexOf(name) ? $(this).parent("li").hide() : $(this).html(s[name])
                }), 0 == t && $(".social-default-text").show(), o.show(), a.html(n), r.hide()
            } else 200 !== l.status && (a.html(n), a.parent().prepend('<p class="edit-inline-error">Opps, something went wrong</p>'))
        }, l.send(JSON.stringify(s))
    })
}), $(function() {
    var e = $("form#new_inquiry_message_form");
    "undefined" != typeof rememberInfo && rememberInfo && loadEnteredData(), $("#reservation-query-submit").on("click", function() {
        var e = $("#reservation-query-submit").attr("href");
        e += "&title=" + encodeURIComponent(void 0 == $("#inquiry_message_form_title").val() ? "" : $("#inquiry_message_form_title").val()), e += "&name=" + encodeURIComponent($("#inquiry_message_form_name").val()), e += "&first_name=" + encodeURIComponent($("#inquiry_message_form_first_name").val()), e += "&last_name=" + encodeURIComponent($("#inquiry_message_form_last_name").val()), e += "&email=" + encodeURIComponent($("#inquiry_message_form_email").val()), e += "&telephone_number_code=" + encodeURIComponent($("#inquiry_message_form_telephone_number_code").val()), e += "&telephone_number=" + encodeURIComponent($("#inquiry_message_form_telephone_number").val()), e += "&message=" + encodeURIComponent($("#inquiry_message_form_message").val()), $("#reservation-query-submit").attr("href", e)
    }), $("#new-inquiry-submit", e).on("click", function(t) {
        $(this).prop("disabled", !0), $(this).html("<i class='ebs-icon-spinner spin-icon'></i> " + $(this).data("progress-text"));
        var a = Date.now(),
            i = Date.now() - a,
            n = 1e3 < i ? 0 : 2e3 - i;
        return "undefined" != typeof rememberInfo && rememberInfo && saveEnteredData(), setTimeout(function() {
            try {
                e.submit()
            } catch (e) {
                gae("payment", "paymentSubmissionFaild: " + e.message)
            }
        }, n), t.stopImmediatePropagation(), !1
    });
    var t = $("form#easy_inquiry_message_form");
    t.find(".org-rsp-avg.red, .org-rsp-avg.red p").hide(), $("#new-inquiry-submit", t).on("click", function(e) {
        $(this).prop("disabled", !0), $(this).html("<i class='ebs-icon-spinner spin-icon'></i> " + $(this).data("progress-text"));
        var a = Date.now(),
            i = Date.now() - a;
        return setTimeout(function() {
            var e = !0,
                a = $("#inquiry_message_form_email").val();
            if (t.find(".org-rsp-avg.yellow").show(), t.find(".org-rsp-avg.red, .org-rsp-avg.red p").hide(), t.find(".control-group").removeClass("error"), !a.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                t.find(".org-rsp-avg.red").show(), t.find(".org-rsp-avg.red").find("p:nth-child(3)").show(), $("#inquiry_message_form_email").parents(".control-group").addClass("error");
                e = !1
            }
            return t.find("input.required, textarea.required").each(function() {
                if ("" === $(this).val() && ("inquiry_message_form_message" != $(this).prop("id") || "undefined" == typeof allowEmptyInquiry || !allowEmptyInquiry)) {
                    t.find(".org-rsp-avg.red").show();
                    var a = $(this).parents(".control-group").index() + 1;
                    t.find(".org-rsp-avg.red").find("p:nth-child(" + a + ")").show(), $(this).parents(".control-group").addClass("error"), e = !1
                }
            }), 1 == e ? (t.find(".org-rsp-avg.red").hide(), void t.submit()) : (t.find(".org-rsp-avg.yellow").hide(), $("#new-inquiry-submit").prop("disabled", !1), $("#new-inquiry-submit").html($("#inquiry-query-submit").text()), !1)
        }, 1e3 < i ? 0 : 2e3 - i), e.stopImmediatePropagation(), !1
    });
    var a = function() {
        var e = $("#listing_slug").val(),
            t = $("#listing_query_arrival_date").length ? $("#listing_query_arrival_date").val() : $("#arrival_date_select").val(),
            a = function(a) {
                return BASE_URL + e + "/inquiry?arrival_date=" + t + "&package_id=" + a + "&submit_inquiry=Send+Inquiry&easy_inquiry"
            },
            i = function(e) {
                return $("form#easy_inquiry_message_form").attr("action", e)
            };
        $(".package-selection-item").on("click", function() {
            i(a(this.value))
        }), $("#arrival_date_select").on("change", function() {
            i(a($(".package-selection-item:checked").val()))
        }), $("#listing_query_arrival_date").on("change", function() {
            i(a($(".package-selection-item:checked").val()))
        }), $(document).ready(function() {
            i(a($(".package-selection-item:checked").val()))
        })
    };
    $("form#easy_inquiry_message_form").length && a(), $("#easy_inquiry_modal").on("shown", a)
}), $(function() {
    $("#easy_inquiry_modal.package-selection").length && $(".pck-dropdown .dropdown-menu li").click(function() {
        var e = '<span class="selected-option">' + $(this).find(".package-attributes").html() + "</span>";
        $(this).parents(".dropdown").find(".dropdown-toggle").html(e + '<span class="caret"></span>'), $(window).width()
    })
});
_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
$(function() {
        var e = function(e) {
            return e && e.length && 0 < e.length
        };
        if (e($("#reviews-ll-marker"))) var t = function(e) {
                rebrand ? (console.log("rebrand response test:", e), $("#reviews-ll-wrapper").append(v(reviewsTransTags.verified_site_reviews, e.newOrganizerReviews), y(reviewsTransTags.verified_site_reviews, e.reviewsByOurSite), y(reviewsTransTags.testimonials, e.reviewsByOthers))) : $("#reviews-ll-wrapper").append(d(reviewsTransTags.verified_site_reviews, s, e.newOrganizerReviews), d(reviewsTransTags.verified_site_reviews, c, e.reviewsByOurSite), d(reviewsTransTags.testimonials, c, e.reviewsByOthers)), document.getElementById("reviews-ll-marker").innerHTML = ""
            },
            a = function(t) {
                return function() {
                    return e(0 >= arguments.length ? void 0 : arguments[0]) ? t.apply(void 0, arguments) : null
                }
            },
            i = a(function(e) {
                return $("<h3>", {
                    class: "review-text review-text-highlight",
                    text: e.trim()
                })
            }),
            n = a(function(e, t) {
                return $("<p>", {
                    class: "review-text review-text-" + t,
                    text: e
                }).prepend($("<span>", {
                    class: "review-text-title review-text-title-" + t,
                    text: t.toUpperCase()
                }).prepend($("<span>", {
                    class: "review-icon-title-" + t
                }), $("<b>", {
                    text: (a = e, "" + a[0].toUpperCase() + a.slice(1))
                })));
                var a
            }),
            r = a(function(e) {
                return $("<p>", {
                    class: "review-text review-text-reply",
                    text: e
                }).prepend($("<span>", {
                    class: "review-text-title review-text-title-reply",
                    text: reviewsTransTags.organizer_response
                }).prepend($("<span>", {
                    class: "review-icon-title-reply"
                })))
            }),
            o = function(e) {
                return $("<div>", {
                    class: "item-body"
                }).append($("<div>").append(i(e.reviewHighlight), n(e.reviewTextCons, "cons"), n(e.reviewTextPros, "pros")), "undefined" == typeof lp_reviews_overall_score ? (t = e, $("<div>", {
                    class: "review-stats"
                }).append(Object.keys(t.scores).map(function(e) {
                    return $("<div>", {
                        class: "review-stat-item"
                    }).append($("<span>", {
                        class: "review-stat-title",
                        html: reviewsTransTags[e]
                    }).prepend($("<span>", {
                        class: "review-stat-value",
                        text: t.scores[e]
                    })), $("<div>", {
                        class: "review-stat-bar"
                    }).append($("<div>", {
                        class: "review-stat-progress",
                        style: "width: " + 10 * t.scores[e] + "%"
                    }).append($("<div>", {
                        class: "review-stat-progress-color"
                    })).addClass(5 > t.scores[e] ? "review-stat-progress-low" : null)))
                }))) : null, r(e.organizerReply), $("<p>", {
                    class: "review-date",
                    text: e.createdDate
                }));
                var t
            },
            s = function(e) {
                return $("<li>", {
                    class: "review-item border-box"
                }).append((t = e, a = $("<div>", {
                    class: "item-header"
                }), i = $("<div>", {
                    class: "holder-avatar"
                }), n = $("<div>", {
                    class: "avatar"
                }), r = $("<div>", {
                    class: "reviewer"
                }), s = $("<div>", {
                    class: "reviewer-title"
                }), a.append(i.append(n), r.append(s, "undefined" == typeof lp_reviews_overall_score ? null : $("<div>", {
                    class: "review_score review_" + (t.scores.overallImpression / 2.5 + 1)
                }))), t.isAnonymous ? (n.append($("<div>", {
                    class: "holder-img trpnr-logo"
                })), s.text(reviewsTransTags.review_by_customer_from_country_anonymous)) : (n.addClass("neutral-icon").append($("<div>", {
                    class: "review-avatar-letter center",
                    text: t.customerName[0]
                })), s.html(l(t.customerName, t.countryName))), a), o(e));
                var t, a, i, n, r, s
            },
            l = function(e, t) {
                return reviewsTransTags.review_by_customer_from_country_customer.replace("CUSTOMER", "<b>" + e + "</b>").replace("COUNTRY", t)
            },
            c = function(e) {
                return $("<li>", {
                    class: "review-item border-box"
                }).append($("<div>", {
                    class: "item-header"
                }).append($("<div>", {
                    class: "holder-avatar"
                }).append($("<div>", {
                    class: "avatar"
                }).append($("<div>", {
                    class: "holder-img trpnr-logo"
                }))), $("<div>", {
                    class: "reviewer"
                }).html(0 < (t = e).from.length ? l(t.reviewer, t.from) : 0 < t.reviewer.length ? reviewsTransTags.review_by_customer + ' <span class="reviewer-name">' + t.reviewer + "</span>" : null)), $("<div>", {
                    class: "item-body"
                }).append(i(e.reviewHighlight), 0 < e.reviewText.length ? $("<p>", {
                    class: "review-text",
                    text: e.reviewText
                }) : null, $("<p>", {
                    class: "review-date",
                    text: e.source
                })));
                var t
            },
            d = function(e, t, a) {
                return 0 < a.length ? $("<div>", {
                    class: "reviews-section split-exp-fix border-box"
                }).append($("<h4>", {
                    class: "reviews_section_title"
                }).html(e), $("<div>", {
                    class: "lp-reviews-container"
                }).append($("<ul>", {
                    class: "list-unstyled"
                }).append($("<div>", {
                    class: "reviews-organizer"
                }).append(a.map(t))))) : null
            },
            p = function(e, t, a) {
                return e ? reviewsTransTags.review_by_customer_from_country_anonymous : l(t, a)
            },
            u = function(t, a) {
                return e(t) ? $("<tr>").append($('<td class="review__thumbs">').append($('<i class="ebs-icon ebs-icon-t-' + a + '"></i>')), $("<td>", {
                    text: t
                })) : null
            },
            h = function(e) {
                return $("<table>", {
                    class: "review__ratings"
                }).append(Object.keys(e.scores).map(function(t) {
                    return $("<tr>").append($("<td>", {
                        html: reviewsTransTags[t]
                    }), $("<td>", {
                        html: (a = e.scores[t], a = 10 < a ? a / 10 : a, [
                            [$('<i class="ebs-icon ebs-icon-t-star-half"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-half"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-half"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-half"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-empty"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-half"></i>')],
                            [$('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>'), $('<i class="ebs-icon ebs-icon-t-star-full"></i>')]
                        ].find(function(e, t) {
                            return t + 2 > a
                        }))
                    }));
                    var a
                }))
            },
            f = function(e, t, a) {
                return 0 < t.length ? $('<div class="section">').append($("<h2>", {
                    class: "title",
                    html: e
                }), t.map(a)) : null
            },
            m = function(t) {
                return $("<div>", {
                    class: "review"
                }).append($("<div>", {
                    class: "review__credit",
                    html: p(t.isAnonymous, t.customerName, t.countryName)
                }), $("<div>", {
                    class: "review__date",
                    text: t.createdDate
                }), $("<table>", {
                    class: "review__table"
                }).append(e(t.reviewHighlight) ? $("<tr>").append($("<td>"), $("<td>").append($("<h3>", {
                    class: "title review__highlight",
                    text: '"' + t.reviewHighlight + '"'
                }))) : null, u(t.reviewTextCons, "thumbs-down"), u(t.reviewTextPros, "thumbs-up"), $("<tr>").append($('<td class="review__empty">'), $("<td>").append(h(t)))), e(t.organizerReply) ? [$("<div>", {
                    class: "subtitle review__organizer-reply-title",
                    html: reviewsTransTags.organizer_response + ":"
                }), $("<div>", {
                    class: "review__organizer-reply",
                    text: t.organizerReply
                })] : null)
            },
            g = function(e) {
                return $("<div>", {
                    class: "review"
                }).append($("<div>", {
                    class: "review__credit",
                    html: p("" === e.reviewer, e.reviewer, e.from)
                }), $("<div>", {
                    class: "review__text",
                    text: e.reviewText
                }), $("<div>", {
                    class: "review__source",
                    text: "~ " + e.source
                }))
            },
            v = function(e, t) {
                return f(e, t, m)
            },
            y = function(e, t) {
                return f(e, t, g)
            },
            _ = setInterval(function() {
                var e, a;
                e = document.getElementById("reviews-ll-marker").getBoundingClientRect(), a = Math.max(document.documentElement.clientHeight, window.innerHeight), !(0 > e.bottom || 0 <= e.top - a) && (gae("lazyloading", "lp_review_init"), clearInterval(_), "object" == _typeof(window.reviewsData) ? t(window.reviewsData) : $.ajax({
                    type: "GET",
                    url: window.location.pathname + "/reviews/",
                    async: !0
                }).done(function(e) {
                    t(e)
                }))
            }, 600)
    }), $(function() {
        767 > $(window).width() && -1 < window.location.href.indexOf("#reviews") && setTimeout(function() {
            $("html,body").animate({
                scrollTop: $("#reviews").offset().top
            })
        }, 800)
    }),
    function(e) {
        var t, a = {
                className: "autosizejs",
                id: "autosizejs",
                append: "\n",
                callback: !1,
                resizeDelay: 10,
                placeholder: !0
            },
            i = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
            n = e('<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>').data("autosize", !0)[0];
        n.style.lineHeight = "99px", "99px" === e(n).css("lineHeight") && i.push("lineHeight"), n.style.lineHeight = "", e.fn.autosize = function(r) {
            return this.length ? (r = e.extend({}, a, r || {}), n.parentNode !== document.body && e(document.body).append(n), this.each(function() {
                function a() {
                    var t, a = !!window.getComputedStyle && window.getComputedStyle(u, null);
                    a ? ((0 === (t = u.getBoundingClientRect().width) || "number" != typeof t) && (t = parseInt(a.width, 10)), e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, i) {
                        t -= parseInt(a[i], 10)
                    })) : t = p(h.width(), 0), n.style.width = t + "px"
                }

                function o() {
                    var o, s;
                    t === u ? a() : function() {
                        var o = {};
                        if (t = u, n.className = r.className, n.id = r.id, l = parseInt(h.css("maxHeight"), 10), e.each(i, function(e, t) {
                                o[t] = h.css(t)
                            }), e(n).css(o).attr("wrap", h.attr("wrap")), a(), window.chrome) {
                            var s = u.style.width;
                            u.style.width = "0px", u.offsetWidth, u.style.width = s
                        }
                    }(), n.value = !u.value && r.placeholder ? (h.attr("placeholder") || "") + r.append : u.value + r.append, n.style.overflowY = u.style.overflowY, s = parseInt(u.style.height, 10), n.scrollTop = 0, n.scrollTop = 9e4, o = n.scrollTop, l && o > l ? (u.style.overflowY = "scroll", o = l) : (u.style.overflowY = "hidden", o < c && (o = c)), s !== (o += f) && (u.style.height = o + "px", m && r.callback.call(u, u))
                }

                function s() {
                    clearTimeout(d), d = setTimeout(function() {
                        var e = h.width();
                        e !== v && (v = e, o())
                    }, parseInt(r.resizeDelay, 10))
                }
                var l, c, d, p = Math.max,
                    u = this,
                    h = e(u),
                    f = 0,
                    m = e.isFunction(r.callback),
                    g = {
                        height: u.style.height,
                        overflow: u.style.overflow,
                        overflowY: u.style.overflowY,
                        wordWrap: u.style.wordWrap,
                        resize: u.style.resize
                    },
                    v = h.width();
                h.data("autosize") || (h.data("autosize", !0), ("border-box" === h.css("box-sizing") || "border-box" === h.css("-moz-box-sizing") || "border-box" === h.css("-webkit-box-sizing")) && (f = h.outerHeight() - h.height()), c = p(parseInt(h.css("minHeight"), 10) - f || 0, h.height()), h.css({
                    overflow: "hidden",
                    overflowY: "hidden",
                    wordWrap: "break-word",
                    resize: "none" === h.css("resize") || "vertical" === h.css("resize") ? "none" : "horizontal"
                }), "onpropertychange" in u ? "oninput" in u ? h.on("input.autosize keyup.autosize", o) : h.on("propertychange.autosize", function() {
                    "value" === event.propertyName && o()
                }) : h.on("input.autosize", o), !1 !== r.resizeDelay && e(window).on("resize.autosize", s), h.on("autosize.resize", o), h.on("autosize.resizeIncludeStyle", function() {
                    t = null, o()
                }), h.on("autosize.destroy", function() {
                    t = null, clearTimeout(d), e(window).off("resize", s), h.off("autosize").off(".autosize").css(g).removeData("autosize")
                }), o())
            })) : this
        }
    }(window.jQuery || window.$);
_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};

function monthSelection() {
    15 == $("#filter_flexible").val() ? ($(".datepicker-inline > div").hide(), $(".datepicker-inline .datepicker-months").show(), $(".datepicker-inline .datepicker-months thead th").css("opacity", "0"), $(".datepicker-inline .datepicker-months thead th.datepicker-switch").css("opacity", "1"), $(".datepicker-inline .datepicker-months thead").css("pointer-events", "none"), $(".datepicker-inline .datepicker-months span").on("click", function() {
        setTimeout(function() {
            for (var e = 15; $('td:contains("' + e + '")').hasClass("disabled");) e++;
            $('td:contains("' + e + '")').trigger("click"), $("#availability-options").hide()
        }, 1)
    })) : ($(".datepicker-inline > div").hide(), $(".datepicker-inline .datepicker-days").show())
}! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" == typeof jQuery ? window.Zepto : jQuery)
}(function(e) {
    function t(t) {
        var a = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(a))
    }

    function a(t) {
        var a = t.target,
            i = e(a);
        if (!i.is("[type=submit],[type=image]")) {
            var n = i.closest("[type=submit]");
            if (0 === n.length) return;
            a = n[0]
        }
        var r = this;
        if (r.clk = a, "image" == a.type)
            if (void 0 !== t.offsetX) r.clk_x = t.offsetX, r.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = i.offset();
            r.clk_x = t.pageX - o.left, r.clk_y = t.pageY - o.top
        } else r.clk_x = t.pageX - a.offsetLeft, r.clk_y = t.pageY - a.offsetTop;
        setTimeout(function() {
            r.clk = r.clk_x = r.clk_y = null
        }, 100)
    }

    function i() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {
            fileapi: void 0 !== e("<input type='file'/>").get(0).files,
            formdata: void 0 !== window.FormData
        },
        r = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!r) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function a(a) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (e) {
                    i("cannot get iframe.contentWindow document: " + e)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (a) {
                    i("cannot get iframe.contentDocument: " + a), t = e.document
                }
                return t
            }

            function s() {
                var t = c.attr2("target"),
                    a = c.attr2("action"),
                    r = c.attr("enctype") || c.attr("encoding") || "multipart/form-data";
                k.setAttribute("target", m), (!o || /post/i.test(o)) && k.setAttribute("method", "POST"), a != u.url && k.setAttribute("action", u.url), u.skipEncodingOverride || o && !/post/i.test(o) || c.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), u.timeout && (b = setTimeout(function() {
                    w = !0, l(C)
                }, u.timeout));
                var s = [];
                try {
                    if (u.extraData)
                        for (var d in u.extraData) u.extraData.hasOwnProperty(d) && (e.isPlainObject(u.extraData[d]) && u.extraData[d].hasOwnProperty("name") && u.extraData[d].hasOwnProperty("value") ? s.push(e('<input type="hidden" name="' + u.extraData[d].name + '">').val(u.extraData[d].value).appendTo(k)[0]) : s.push(e('<input type="hidden" name="' + d + '">').val(u.extraData[d]).appendTo(k)[0]));
                    u.iframeTarget || g.appendTo("body"), v.attachEvent ? v.attachEvent("onload", l) : v.addEventListener("load", l, !1), setTimeout(function e() {
                        try {
                            var t = n(v).readyState;
                            i("state = " + t), t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (e) {
                            i("Server abort: ", e, " (", e.name, ")"), l(T), b && clearTimeout(b), b = void 0
                        }
                    }, 15);
                    try {
                        k.submit()
                    } catch (e) {
                        document.createElement("form").submit.apply(k)
                    }
                } finally {
                    k.setAttribute("action", a), k.setAttribute("enctype", r), t ? k.setAttribute("target", t) : c.removeAttr("target"), e(s).remove()
                }
            }

            function l(t) {
                if (!y.aborted && !D) {
                    if ((I = n(v)) || (i("cannot access response document"), t = T), t === C && y) return y.abort("timeout"), void x.reject(y, "timeout");
                    if (t == T && y) return y.abort("server abort"), void x.reject(y, "error", "server abort");
                    if (I && I.location.href != u.iframeSrc || w) {
                        v.detachEvent ? v.detachEvent("onload", l) : v.removeEventListener("load", l, !1);
                        var a, r = "success";
                        try {
                            if (w) throw "timeout";
                            var o = "xml" == u.dataType || I.XMLDocument || e.isXMLDoc(I);
                            if (i("isXml=" + o), !o && window.opera && (null === I.body || !I.body.innerHTML) && --P) return i("requeing onLoad callback, DOM not available"), void setTimeout(l, 250);
                            var s = I.body ? I.body : I.documentElement;
                            y.responseText = s ? s.innerHTML : null, y.responseXML = I.XMLDocument ? I.XMLDocument : I, o && (u.dataType = "xml"), y.getResponseHeader = function(e) {
                                return {
                                    "content-type": u.dataType
                                }[e.toLowerCase()]
                            }, s && (y.status = +s.getAttribute("status") || y.status, y.statusText = s.getAttribute("statusText") || y.statusText);
                            var c = (u.dataType || "").toLowerCase(),
                                d = /(json|script|text)/.test(c);
                            if (d || u.textarea) {
                                var p = I.getElementsByTagName("textarea")[0];
                                if (p) y.responseText = p.value, y.status = +p.getAttribute("status") || y.status, y.statusText = p.getAttribute("statusText") || y.statusText;
                                else if (d) {
                                    var h = I.getElementsByTagName("pre")[0],
                                        m = I.getElementsByTagName("body")[0];
                                    h ? y.responseText = h.textContent ? h.textContent : h.innerText : m && (y.responseText = m.textContent ? m.textContent : m.innerText)
                                }
                            } else "xml" == c && !y.responseXML && y.responseText && (y.responseXML = R(y.responseText));
                            try {
                                q = A(y, c, u)
                            } catch (e) {
                                r = "parsererror", y.error = a = e || r
                            }
                        } catch (e) {
                            i("error caught: ", e), r = "error", y.error = a = e || r
                        }
                        y.aborted && (i("upload aborted"), r = null), y.status && (r = 200 <= y.status && 300 > y.status || 304 === y.status ? "success" : "error"), "success" === r ? (u.success && u.success.call(u.context, q, "success", y), x.resolve(y.responseText, "success", y), f && e.event.trigger("ajaxSuccess", [y, u])) : r && (void 0 === a && (a = y.statusText), u.error && u.error.call(u.context, y, r, a), x.reject(y, "error", a), f && e.event.trigger("ajaxError", [y, u, a])), f && e.event.trigger("ajaxComplete", [y, u]), f && !--e.active && e.event.trigger("ajaxStop"), u.complete && u.complete.call(u.context, y, r), D = !0, u.timeout && clearTimeout(b), setTimeout(function() {
                            u.iframeTarget ? g.attr("src", u.iframeSrc) : g.remove(), y.responseXML = null
                        }, 100)
                    }
                }
            }
            var d, p, u, f, m, g, v, y, $, _, w, b, k = c[0],
                x = e.Deferred();
            if (x.abort = function(e) {
                    y.abort(e)
                }, a)
                for (p = 0; p < h.length; p++) d = e(h[p]), r ? d.prop("disabled", !1) : d.removeAttr("disabled");
            if ((u = e.extend(!0, {}, e.ajaxSettings, t)).context = u.context || u, m = "jqFormIO" + (new Date).getTime(), u.iframeTarget ? (_ = (g = e(u.iframeTarget)).attr2("name")) ? m = _ : g.attr2("name", m) : (g = e('<iframe name="' + m + '" src="' + u.iframeSrc + '" />')).css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                }), v = g[0], y = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(t) {
                        var a = "timeout" === t ? "timeout" : "aborted";
                        i("aborting upload... " + a), this.aborted = 1;
                        try {
                            v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
                        } catch (t) {}
                        g.attr("src", u.iframeSrc), y.error = a, u.error && u.error.call(u.context, y, a, t), f && e.event.trigger("ajaxError", [y, u, a]), u.complete && u.complete.call(u.context, y, a)
                    }
                }, (f = u.global) && 0 == e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [y, u]), u.beforeSend && !1 === u.beforeSend.call(u.context, y, u)) return u.global && e.active--, x.reject(), x;
            if (y.aborted) return x.reject(), x;
            ($ = k.clk) && ((_ = $.name) && !$.disabled && (u.extraData = u.extraData || {}, u.extraData[_] = $.value, "image" == $.type && (u.extraData[_ + ".x"] = k.clk_x, u.extraData[_ + ".y"] = k.clk_y)));
            var C = 1,
                T = 2,
                S = e("meta[name=csrf-token]").attr("content"),
                j = e("meta[name=csrf-param]").attr("content");
            j && S && (u.extraData = u.extraData || {}, u.extraData[j] = S), u.forceSync ? s() : setTimeout(s, 10);
            var q, I, D, P = 50,
                R = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                Y = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                A = function(t, a, i) {
                    var n = t.getResponseHeader("content-type") || "",
                        r = "xml" === a || !a && 0 <= n.indexOf("xml"),
                        o = r ? t.responseXML : t.responseText;
                    return r && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), i && i.dataFilter && (o = i.dataFilter(o, a)), "string" == typeof o && ("json" === a || !a && 0 <= n.indexOf("json") ? o = Y(o) : ("script" === a || !a && 0 <= n.indexOf("javascript")) && e.globalEval(o)), o
                };
            return x
        }
        if (!this.length) return i("ajaxSubmit: skipping submit process - no element selected"), this;
        var o, s, l, c = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), o = t.type || this.attr2("method"), (l = (l = "string" == typeof(s = t.url || this.attr2("action")) ? e.trim(s) : "") || window.location.href || "") && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: o || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var d = {};
        if (this.trigger("form-pre-serialize", [this, t, d]), d.veto) return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var u, h = [],
            f = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, u = e.param(t.data, p)), t.beforeSubmit && !1 === t.beforeSubmit(f, this, t)) return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [f, this, t, d]), d.veto) return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var m = e.param(f, p);
        u && (m = m ? m + "&" + u : u), "GET" == t.type.toUpperCase() ? (t.url += (0 <= t.url.indexOf("?") ? "&" : "?") + m, t.data = null) : t.data = m;
        var g = [];
        if (t.resetForm && g.push(function() {
                c.resetForm()
            }), t.clearForm && g.push(function() {
                c.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var v = t.success || function() {};
            g.push(function(a) {
                var i = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[i](a).each(v, arguments)
            })
        } else t.success && g.push(t.success);
        if (t.success = function(e, a, i) {
                for (var n = t.context || this, r = 0, o = g.length; r < o; r++) g[r].apply(n, [e, a, i || c, c])
            }, t.error) {
            var y = t.error;
            t.error = function(e, a, i) {
                var n = t.context || this;
                y.apply(n, [e, a, i, c])
            }
        }
        if (t.complete) {
            var $ = t.complete;
            t.complete = function(e, a) {
                var i = t.context || this;
                $.apply(i, [e, a, c])
            }
        }
        var _, w = 0 < e("input[type=file]:enabled", this).filter(function() {
                return "" !== e(this).val()
            }).length,
            b = "multipart/form-data",
            k = c.attr("enctype") == b || c.attr("encoding") == b,
            x = n.fileapi && n.formdata;
        i("fileAPI :" + x), !1 !== t.iframe && (t.iframe || (w || k) && !x) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
            _ = a(f)
        }) : _ = a(f) : _ = (w || k) && x ? function(a) {
            for (var i = new FormData, n = 0; n < a.length; n++) i.append(a[n].name, a[n].value);
            if (t.extraData) {
                var r = function(a) {
                    var i, n, r = e.param(a, t.traditional).split("&"),
                        o = r.length,
                        s = [];
                    for (i = 0; i < o; i++) r[i] = r[i].replace(/\+/g, " "), n = r[i].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
                    return s
                }(t.extraData);
                for (n = 0; n < r.length; n++) r[n] && i.append(r[n][0], r[n][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: o || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var a = e.ajaxSettings.xhr();
                return a.upload && a.upload.addEventListener("progress", function(e) {
                    var a = 0,
                        i = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (a = Math.ceil(i / n * 100)), t.uploadProgress(e, i, n, a)
                }, !1), a
            }), s.data = null;
            var l = s.beforeSend;
            return s.beforeSend = function(e, a) {
                a.data = t.formData ? t.formData : i, l && l.call(this, e, a)
            }, e.ajax(s)
        }(f) : e.ajax(t), c.removeData("jqxhr").data("jqxhr", _);
        for (var C = 0; C < h.length; C++) h[C] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n) {
        if ((n = n || {}).delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var r = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && r.s ? (i("DOM not ready, queuing ajaxForm"), e(function() {
                e(r.s, r.c).ajaxForm(n)
            }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, a).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, a), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, a)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, a) {
        var i = [];
        if (0 === this.length) return i;
        var r, o, s, l, c, d, p, u, h = this[0],
            f = this.attr("id"),
            m = t ? h.getElementsByTagName("*") : h.elements;
        if (m && !/MSIE [678]/.test(navigator.userAgent) && (m = e(m).get()), f && ((r = e(':input[form="' + f + '"]').get()).length && (m = (m || []).concat(r))), !m || !m.length) return i;
        for (o = 0, p = m.length; o < p; o++)
            if (d = m[o], l = d.name, l && !d.disabled) {
                if (t && h.clk && "image" == d.type) {
                    h.clk == d && (i.push({
                        name: l,
                        value: e(d).val(),
                        type: d.type
                    }), i.push({
                        name: l + ".x",
                        value: h.clk_x
                    }, {
                        name: l + ".y",
                        value: h.clk_y
                    }));
                    continue
                }
                if ((c = e.fieldValue(d, !0)) && c.constructor == Array)
                    for (a && a.push(d), s = 0, u = c.length; s < u; s++) i.push({
                        name: l,
                        value: c[s]
                    });
                else if (n.fileapi && "file" == d.type) {
                    a && a.push(d);
                    var g = d.files;
                    if (g.length)
                        for (s = 0; s < g.length; s++) i.push({
                            name: l,
                            value: g[s],
                            type: d.type
                        });
                    else i.push({
                        name: l,
                        value: "",
                        type: d.type
                    })
                } else null !== c && void 0 !== c && (a && a.push(d), i.push({
                    name: l,
                    value: c,
                    type: d.type,
                    required: d.required
                }))
            }
        if (!t && h.clk) {
            var v = e(h.clk),
                y = v[0];
            (l = y.name) && !y.disabled && "image" == y.type && (i.push({
                name: l,
                value: v.val()
            }), i.push({
                name: l + ".x",
                value: h.clk_x
            }, {
                name: l + ".y",
                value: h.clk_y
            }))
        }
        return i
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var a = [];
        return this.each(function() {
            var i = this.name;
            if (i) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var r = 0, o = n.length; r < o; r++) a.push({
                        name: i,
                        value: n[r]
                    });
                else null !== n && void 0 !== n && a.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(a)
    }, e.fn.fieldValue = function(t) {
        for (var a = [], i = 0, n = this.length; i < n; i++) {
            var r = this[i],
                o = e.fieldValue(r, t);
            null !== o && void 0 !== o && (o.constructor != Array || o.length) && (o.constructor == Array ? e.merge(a, o) : a.push(o))
        }
        return a
    }, e.fieldValue = function(t, a) {
        var i = t.name,
            n = t.type,
            r = t.tagName.toLowerCase();
        if (void 0 === a && (a = !0), a && (!i || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == r && -1 == t.selectedIndex)) return null;
        if ("select" == r) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s, l = [], c = t.options, d = "select-one" == n, p = d ? o + 1 : c.length, u = d ? o : 0; u < p; u++)
                if (s = c[u], s.selected) {
                    var h = s.value;
                    if (h || (h = s.attributes && s.attributes.value && !s.attributes.value.specified ? s.text : s.value), d) return h;
                    l.push(h)
                }
            return l
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var i = this.type,
                n = this.tagName.toLowerCase();
            a.test(i) || "textarea" == n ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == i ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(i) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            "function" != typeof this.reset && ("object" != _typeof(this.reset) || this.reset.nodeType) || this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var a = this.type;
            if ("checkbox" == a || "radio" == a) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var i = e(this).parent("select");
                t && i[0] && "select-one" == i[0].type && i.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery)
}(function(e) {
    var t = 0;
    e.ajaxTransport("iframe", function(a) {
        var i, n;
        if (a.async && ("POST" === a.type || "GET" === a.type)) return {
            send: function(r, o) {
                i = e('<form style="display:none;"></form>'), n = e('<iframe src="javascript:false;" name="iframe-transport-' + (t += 1) + '"></iframe>').bind("load", function() {
                    var t, r = e.isArray(a.paramName) ? a.paramName : [a.paramName];
                    n.unbind("load").bind("load", function() {
                        var t;
                        try {
                            if (!(t = n.contents()).length || !t[0].firstChild) throw new Error
                        } catch (e) {
                            t = void 0
                        }
                        o(200, "success", {
                            iframe: t
                        }), e('<iframe src="javascript:false;"></iframe>').appendTo(i), i.remove()
                    }), i.prop("target", n.prop("name")).prop("action", a.url).prop("method", a.type), a.formData && e.each(a.formData, function(t, a) {
                        e('<input type="hidden"/>').prop("name", a.name).val(a.value).appendTo(i)
                    }), a.fileInput && a.fileInput.length && "POST" === a.type && (t = a.fileInput.clone(), a.fileInput.after(function(e) {
                        return t[e]
                    }), a.paramName && a.fileInput.each(function(t) {
                        e(this).prop("name", r[t] || a.paramName)
                    }), i.append(a.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")), i.submit(), t && t.length && a.fileInput.each(function(a, i) {
                        var n = e(t[a]);
                        e(i).prop("name", n.prop("name")), n.replaceWith(i)
                    })
                }), i.append(n).appendTo(document.body)
            },
            abort: function() {
                n && n.unbind("load").prop("src", "javascript".concat(":false;")), i && i.remove()
            }
        }
    }), e.ajaxSetup({
        converters: {
            "iframe text": function(t) {
                return e(t[0].body).text()
            },
            "iframe json": function(t) {
                return e.parseJSON(e(t[0].body).text())
            },
            "iframe html": function(t) {
                return e(t[0].body).html()
            },
            "iframe script": function(t) {
                return e.globalEval(e(t[0].body).text())
            }
        }
    })
}),
function(e) {
    var t;
    e.rails = t = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var a = e('meta[name="csrf-token"]').attr("content");
            a && t.setRequestHeader("X-CSRF-Token", a)
        },
        fire: function(t, a, i) {
            var n = e.Event(a);
            return t.trigger(n, i), !1 !== n.result
        },
        confirm: function(e) {
            function t() {
                return e.apply(this, arguments)
            }
            return t.toString = function() {
                return e.toString()
            }, t
        }(function(e) {
            return confirm(e)
        }),
        ajax: function(t) {
            return e.ajax(t)
        },
        handleRemote: function(a) {
            var i, n, r, o, s = a.data("cross-domain") || null,
                l = a.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
            if (t.fire(a, "ajax:before")) {
                if (a.is("form")) {
                    i = a.attr("method"), n = a.attr("action"), r = a.serializeArray();
                    var c = a.data("ujs:submit-button");
                    c && (r.push(c), a.data("ujs:submit-button", null))
                } else a.is(t.inputChangeSelector) ? (i = a.data("method"), n = a.data("url"), r = a.serialize(), a.data("params") && (r = r + "&" + a.data("params"))) : (i = a.data("method"), n = a.attr("href"), r = a.data("params") || null);
                return o = {
                    type: i || "GET",
                    data: r,
                    dataType: l,
                    crossDomain: s,
                    beforeSend: function(e, i) {
                        return void 0 === i.dataType && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), t.fire(a, "ajax:beforeSend", [e, i])
                    },
                    success: function(e, t, i) {
                        a.trigger("ajax:success", [e, t, i])
                    },
                    complete: function(e, t) {
                        a.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, i) {
                        a.trigger("ajax:error", [e, t, i])
                    }
                }, n && (o.url = n), t.ajax(o)
            }
            return !1
        },
        handleMethod: function(t) {
            var a = t.attr("href"),
                i = t.data("method"),
                n = t.attr("target"),
                r = e("meta[name=csrf-token]").attr("content"),
                o = e("meta[name=csrf-param]").attr("content"),
                s = e('<form method="post" action="' + a + '"></form>'),
                l = '<input name="_method" value="' + i + '" type="hidden" />';
            void 0 !== o && void 0 !== r && (l += '<input name="' + o + '" value="' + r + '" type="hidden" />'), n && s.attr("target", n), s.hide().append(l).appendTo("body"), s.submit()
        },
        disableFormElements: function(a) {
            a.find(t.disableSelector).each(function() {
                var t = e(this),
                    a = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[a]()), t[a](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function(a) {
            a.find(t.enableSelector).each(function() {
                var t = e(this),
                    a = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[a](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var a, i = e.data("confirm"),
                n = !1;
            return !i || (t.fire(e, "confirm") && (n = t.confirm(i), a = t.fire(e, "confirm:complete", [n])), n && a)
        },
        blankInputs: function(t, a, i) {
            var n, r = e();
            return t.find(a || "input,textarea").each(function() {
                n = e(this), (i ? n.val() : !n.val()) && (r = r.add(n))
            }), !!r.length && r
        },
        nonBlankInputs: function(e, a) {
            return t.blankInputs(e, a, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function(t, a) {
            var i = t.data("events"),
                n = !0;
            return void 0 !== i && void 0 !== i.submit && e.each(i.submit, function(e, t) {
                if ("function" == typeof t.handler) return n = t.handler(a)
            }), n
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return t.stopEverything(e)
            })
        },
        enableElement: function(e) {
            void 0 !== e.data("ujs:enable-with") && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, e.ajaxPrefilter(function(e, a, i) {
        e.crossDomain || t.CSRFProtection(i)
    }), e(document).delegate(t.linkDisableSelector, "ajax:complete", function() {
        t.enableElement(e(this))
    }), e(document).delegate(t.linkClickSelector, "click.rails", function(a) {
        var i = e(this),
            n = i.data("method"),
            r = i.data("params");
        return t.allowAction(i) ? (i.is(t.linkDisableSelector) && t.disableElement(i), void 0 !== i.data("remote") ? (a.metaKey || a.ctrlKey) && (!n || "GET" === n) && !r || (!1 === t.handleRemote(i) && t.enableElement(i), !1) : i.data("method") ? (t.handleMethod(i), !1) : void 0) : t.stopEverything(a)
    }), e(document).delegate(t.inputChangeSelector, "change.rails", function(a) {
        var i = e(this);
        return t.allowAction(i) ? (t.handleRemote(i), !1) : t.stopEverything(a)
    }), e(document).delegate(t.formSubmitSelector, "submit.rails", function(a) {
        var i = e(this),
            n = void 0 !== i.data("remote"),
            r = t.blankInputs(i, t.requiredInputSelector),
            o = t.nonBlankInputs(i, t.fileInputSelector);
        return t.allowAction(i) ? r && void 0 == i.attr("novalidate") && t.fire(i, "ajax:aborted:required", [r]) ? t.stopEverything(a) : n ? o ? t.fire(i, "ajax:aborted:file", [o]) : !e.support.submitBubbles && "1.7" > e().jquery && !1 === t.callFormSubmitBindings(i, a) ? t.stopEverything(a) : (t.handleRemote(i), !1) : void setTimeout(function() {
            t.disableFormElements(i)
        }, 13) : t.stopEverything(a)
    }), e(document).delegate(t.formInputClickSelector, "click.rails", function(a) {
        var i = e(this);
        if (!t.allowAction(i)) return t.stopEverything(a);
        var n = i.attr("name"),
            r = n ? {
                name: n,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", r)
    }), e(document).delegate(t.formSubmitSelector, "ajax:beforeSend.rails", function(a) {
        this == a.target && t.disableFormElements(e(this))
    }), e(document).delegate(t.formSubmitSelector, "ajax:complete.rails", function(a) {
        this == a.target && t.enableFormElements(e(this))
    })
}(jQuery), $(function() {
    return $("body").on("click", ".currency-option", function(e) {
        var t, a, i, n;
        return e.preventDefault(), t = $(this).data("currencyCode"), n = $("#currencies-options").data("setCurrencyConvertTo"), a = $("#original-price-wrapper").length ? (i = $("#original-price-wrapper").data("packageId"), {
            currency_convert_to: t,
            listing_id: $("#original-price-wrapper").data("listingId"),
            package_id: i
        }) : {
            currency_convert_to: t
        }, $.ajax({
            type: "POST",
            data: a,
            url: n
        }).done(function() {
            if (isSearchresultsPage) {
                var e = location.href;
                e = removeUrlParameter("price_max", e = removeUrlParameter("price_min", e)), location.href = e
            } else location.reload(!0)
        })
    })
}), $(function() {
    var e = $(".full-description-btn a"),
        t = $(".description-wrapper"),
        a = $(".full-reviews-btn a"),
        i = $(".lp-reviews-container");
    $(".custom-file-button .content").on("click", function() {
        $("input[type='file']").click()
    }), e.on("click", function(e) {
        e.preventDefault(), t.toggle()
    }), a.on("click", function(e) {
        $(this).toggleText("Show all reviews", "Hide all reviews"), i.toggle(), e.preventDefault()
    }), $.fn.toggleText = function(e, t) {
        return this.text() == e ? this.text(t) : this.text(e), this
    }, window.location.hash.length && e.trigger("click")
}), $(function() {
    $(".date-picker:not(.special)").datepicker({
        language: selectedLanguage,
        format: "yyyy-mm-dd",
        weekStart: 1,
        autoclose: !0,
        todayHighlight: !0
    }), $("div.input-append span.add-on").click(function() {
        return console.log("clicked1"), $(this).siblings(".date-picker").datepicker("show")
    }), $(".js-calendar-open").click(function() {
        return console.log("clicked2"), $(this).siblings(".date-picker").datepicker("show")
    })
}), $(function() {
    function e(e) {
        return $.fn.datepicker.DPGlobal.formatDate(e, "yymmdd", "en")
    }

    function t(e) {
        var t = new Date(e);
        return t.setTime(t.getTime() + 6e4 * t.getTimezoneOffset()), t
    }

    function a() {
        var e, t, a;
        (e = $("#availability-options div.month").first().datepicker("getUTCDate")) && !isNaN(e) && (a = (t = parseInt($("#filter_flexible").val())) && 0 < t ? " +/- " + t : "", !$("#available-dates").parents(".sr-sidebar").length && $("#availability-options .month").parents(".filter.btn-group").find(".title").html("" + $.fn.datepicker.DPGlobal.formatDate(e, "d M yyyy", selectedLanguage) + a), i("#availability-options .datepicker .day.active"))
    }
    var i, n, r, o;
    window.arrivalDateSet = function() {
        var e = $("#availability-options div.month").datepicker("getUTCDate");
        return e && !isNaN(e)
    }, $(".filter-option").click(function() {
        return $(this).parents(".filter.btn-group").find(".title").html($(this).text())
    }), $(".filter-reset a").click(function() {
        var e;
        return (e = $(this).parents(".filter.btn-group").find(".title")).html(e.data("default"))
    }), r = function() {
        var e = $("#destinations-options");
        700 < $(window).width() && !e.data("no-shift") ? e.css("left", Math.min(0, 470 - e.outerWidth())) : e.css("left", 0), e.css("visibility", ""), $("#filters #destination-input").focus()
    }, $("#filters #destinations").click(function() {
        return $("#destinations-options").css("visibility", "hidden"), setTimeout(r, 1)
    }), $("#filters #destination-input").click(function() {
        return !1
    }), n = function() {
        return i("#availability-options .datepicker:visible .day.active")
    }, o = function() {
        return $(".day.highlight").removeClass("highlight")
    }, (i = function(e) {
        var t, a, i, n;
        if (n = parseInt($("#filter_flexible").val()), $(e).length && n) return t = $(".day"), a = t.index($(e)), i = $.grep(t, function(e, t) {
            return t <= a + n && t >= a - n && !$(e).hasClass("disabled")
        }), $(i).addClass("highlight")
    })(".public .datepicker .day.active");
    var s = function(a) {
        if (!a) return null;
        var i, n = {},
            r = a.toString().split(",");
        for (var o in r) {
            var s = r[o],
                l = s.split("-"),
                c = 1 < l.length ? parseInt(l[1]) : 1;
            s = l[0], 0 < o ? i.setDate(i.getDate() + parseInt(s.slice(0, 4))) : ((i = new Date(0)).setUTCFullYear(parseInt(s.slice(0, 2)) + 2e3), i.setUTCMonth(parseInt(s.slice(2, 4)) - 1), i.setUTCDate(parseInt(s.slice(4, 6))));
            for (var d = 0; d < c; ++d) n[e(t(i))] = !0, i.setDate(i.getDate() + 1)
        }
        return n
    }($("#availability-options .month").data("availability"));
    return $("#filter_flexible").on("change", function() {
        monthSelection()
    }), $("#availability-options .month").datepicker({
        language: selectedLanguage,
        format: "yyyy-mm-dd",
        weekStart: 1,
        beforeShowDay: function(a) {
            var i = e(t(a));
            return !!s[i] && "available"
        }
    }).on("changeDate", function() {
        var e, t;
        if (a(), e = $(this).datepicker("getUTCDate"), t = $.prototype.datepicker.DPGlobal.formatDate(e, "yyyy-mm-dd", "en"), console.log("arrivalDate test:", e), e && !isNaN(e)) {
            var i = window.location.search;
            i = removeQueryStringParameter(i = updateQueryStringParameter(i = updateQueryStringParameter(i, "arrival_date", t), "flexible", $("#filter_flexible").val()), "page"), window.location.search = i
        }
    }).on("changeMonth", function() {
        return setTimeout(n, 1)
    }), $("#availability-options .search").on("click", function() {
        var e, t;
        if (e = $("#availability-options div.month").datepicker("getUTCDate"), t = $.fn.datepicker.DPGlobal.formatDate(e, "yyyy-mm-dd", "en"), e && !isNaN(e)) {
            var a = window.location.search;
            a = removeQueryStringParameter(a = updateQueryStringParameter(a = updateQueryStringParameter(a, "arrival_date", t), "flexible", $("#filter_flexible").val()), "page"), window.location.search = a
        }
        return $("#availability-options div.month").trigger("click.dropdown.data-api")
    }), $("#availability-options").on("click", function(e) {
        return e.stopPropagation()
    }), $("#available-dates").on("click", function() {
        monthSelection(), $("#availability-options .search").hide()
    }), $("#availability-options .datepicker").on("mouseover.duration", ".available", function() {
        return o(), i(this)
    }).on("mouseout.duration", ".available", function() {
        return o(), i("#availability-options .datepicker:visible .day.active")
    }), $("#availability-options select").on("change", function() {
        o(), a();
        var e = $("#availability-options div.month").datepicker("getUTCDate");
        if (e && !isNaN(e)) return $("#availability-options .search").click()
    })
}), $(function() {
    void 0 !== getUrlParameter("arrival_date") && $("#filter_flexible").change(function() {
        window.filter_flexible_timeout = setTimeout(function() {
            var e = window.location.search;
            e = updateQueryStringParameter(e, "flexible", $("#filter_flexible").val()), window.location.search = e
        }, 1e3), $(".datepicker *").click(function() {
            clearInterval(window.filter_flexible_timeout)
        })
    })
}), $(function() {
    if (767 > $(window).width()) {
        $("#filtersWrapper .dropdown-menu").css("cssText", "width:calc(100% - 30px) !important;"), $("#filtersWrapper .dropdown-menu").not("#availability-options").css("cssText", "max-height:" + Math.round(.8 * $(window).height()) + "px");
        var e = 0;
        $("#filtersWrapper .dropdown-toggle").each(function() {
            var t = $(this).find(".title").height();
            e < t && (e = t)
        }), $("#filtersWrapper .dropdown-toggle").css("cssText", "height:" + (43 + e) + "px !important"), $("#filtersWrapper .dropdown-toggle").click(function() {
            $("html,body").animate({
                scrollTop: $(this).offset().top - 15
            })
        });
        var t = $("#sorting").attr("data-transtag");
        $("#sorting .dropdown-toggle").prepend(t + " ")
    }
});
_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}, warn = function(e, t) {
    console.warn("Invalid response to AJAX submission (" + e + "):", t), gae("jsWarning", "invalidAjaxResponse-" + e)
};

function subscribe(e) {
    setTimeout(function() {
        window.history && window.history.pushState && window.history.replaceState({}, document.title, removeHost(removeQueryStringParameter(window.location.href, "email"))), $("#subscribe_modal").modal("show"), $("#subscribe_modal #subscriber_email").val(e), setTimeout(function() {
            $("#subscribe_modal form").submit()
        }, 333)
    }, 333)
}

function npsSuccess(e) {
    if ($(".nps-container").hide(), $(".nps-question").fadeIn(), 7 > e) $("#nps-question-bad").show();
    else if (9 > e) $("#nps-question-neutral").show();
    else {
        $("#nps-question-good").show(), 3 == $(".nps-container").data("site-id") && ($("#nps-reply-text").hide(), $(".nps-reply-send").hide())
    }
}

function npsQuestionSuccess() {
    $(".nps-question").hide(), $(".nps-confirmation").fadeIn(), setTimeout(function() {
        $(".nps-confirmation").fadeOut()
    }, 3e3)
}

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
}

function receipt_field(e, t) {
    return '<div class="receipt_field_wrapper"><div class="receipt_field_name">' + e + '</div><div class="receipt_field_price">' + t + "</div></div>"
}

function formatCurrency(e) {
    return e && e.toString ? selectedCurrencyFormat.replace("{amount}", e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : selectedCurrencyFormat.replace("{amount}", void 0)
}

function receipt_update() {
    var e = Math.round;
    if ($("#receipt_with_fees").length) {
        var t = $(".package-selection-item:checked").parent().parent();
        $(t).find('[data-id="0"]').length ? $("#receipt_with_fees").hide() : $("#receipt_with_fees").show();
        var a = $(t).find(".price").attr("data-price");
        $("#receipt_pack").html(receipt_field($(t).find(".package-attribute:nth-of-type(1)").text().trim() + "</br>" + $(t).find(".package-attribute:nth-of-type(2)").text().trim(), formatCurrency(a))), $("#receipt_with_fees #receipt_final .receipt_field_price").text(formatCurrency(e(a) + e(0 * a)))
    }
}
$(document).ready(function() {
    $(".dropdown-toggle").dropdown(), $("input.focus").focus(), $(".ajax-submission").submit(function(e) {
        e.preventDefault(), e.stopImmediatePropagation();
        var t = $(this),
            a = t.attr("action"),
            i = t.attr("method"),
            n = {},
            r = {};
        return $(":input", t).each(function() {
            var e = $(this);
            n[e.attr("name")] = e.val(), e.next(".help-block").html(""), $(e.parents(".control-group")[0]).removeClass("error"), "submit" == e.attr("type") && (r.el = e, r.html = e.html(), r.val = e.val())
        }), $.ajax({
            type: i,
            url: a,
            data: n,
            dataType: "json",
            xhrFields: {
                withCredentials: !0
            },
            complete: function(e) {
                if (e)
                    if (e.responseText)
                        if ("" !== e.responseText) {
                            var i = JSON.parse(e.responseText);
                            if (i.redirect ? window.location = a.replace(/(https?:\/\/[^/]+).*/, "$1" + i.redirect) : i.redirect_full && (window.location = i.redirect_full), r.el.button("reset"), r.el.html(r.html), r.el.val(r.val), i.error || 422 == e.status) {
                                var n = "";
                                if ("string" == typeof i.error)(s = $(":input", t).first()).next(".help-block").html(i.error), $(s.parents(".control-group")[0]).addClass("error"), n = i.error;
                                else if ("object" == _typeof(i.error))
                                    for (var o in $(":input", t).each(function() {
                                            var e = $(this),
                                                t = e.attr("name");
                                            i.error[t] && (e.parent().find(".help-block").html(i.error[t]), $(e.parents(".control-group")[0]).addClass("error"))
                                        }), i.error) n += i.error[o] + "<br>";
                                (s = $("#alert-msg", t).first()).addClass("alert alert-error"), s.html(n), $(t).trigger("errorCallback", i, e)
                            } else {
                                var s;
                                if (i.success && "string" == typeof i.success)(s = $("#alert-msg", t).first()).addClass("alert alert-success"), s.removeClass("alert-error"), s.html(i.success);
                                $(t).trigger("successCallback", i, e)
                            }
                        } else warn("emptyResponseText", e);
                else warn("noResponseText", e);
                else warn("noResponseObject", e)
            }
        }), !1
    })
}), $(function() {
    var e = {
        errorMessages: [],
        validate: function(t, a) {
            e.errorMessages = [];
            var i = e.usedInputs();
            return e.emptyMessage() && !$("#available-button").length && e.errorMessages.push(translation.the_message_cant_be_empty), e.hasExcessFiles(i) ? e.errorMessages.push("File size must be less then 10MB.") : e.allFileSize(i) > 51380224 && e.errorMessages.push("The total size of attachments too large. Try to download them individually."), e.showErrorMessages(a)
        },
        showErrorMessages: function(e) {
            if (this.errorMessages.length) {
                $("#message-form-wrapper .result-message").removeClass("alert-success").addClass("alert alert-error"), $("#message-form-wrapper .result-message").html(this.errorMessages.join(" "));
                var t = $("#message-form-wrapper").offset().top;
                return $("body, html").animate({
                    scrollTop: t
                }), e && setTimeout(function() {
                    $.rails.enableFormElements(e)
                }, 26), !1
            }
            return !0
        },
        hasExcessFiles: function(e) {
            return e.filter(function() {
                return this.files[0].size > 10485760
            }).length
        },
        allFileSize: function(e) {
            var t = 0;
            return e.each(function() {
                t += $(this)[0].files[0].size
            }), t
        },
        readablizeBytes: function(e) {
            var t = Math.floor(Math.log(e) / 6.931471805599453);
            return (e / Math.pow(1024, t)).toFixed(1) + " " + ["bytes", "KB", "MB", "GB", "TB", "PB"][t]
        },
        emptyInputs: function() {
            var e = [];
            return $("#message-form-wrapper input:file:not(#new_attachment)").each(function() {
                this.files && 0 != this.files.length || e.push(this)
            }), $(e)
        },
        emptyMessage: function() {
            return "" == $("#simple_message_form_message").val()
        },
        usedInputs: function() {
            var e = [];
            return $("#message-form-wrapper input:file:not(#new_attachment)").each(function() {
                this.files && 0 < this.files.length && e.push(this)
            }), $(e)
        }
    };
    $("#noajax_dialogs_form").on("submit", function() {
            return e.validate()
        }), $("#message-form-wrapper").on("refresh", "#new_simple_message_form, #noajax_dialogs_form", function() {
            $("#new_simple_message_form").ajaxForm({
                dataType: "script",
                beforeSubmit: e.validate
            }), $("#simple_message_form_message").autosize().css("resize", "vertical")
        }), $("#message-form-wrapper").on("click", "label[for='undefined']", function(e) {
            e.preventDefault(), alert("You can load only 5 files in this browser.")
        }), $("#message-form-wrapper").on("change", "input.file", function() {
            var t = e.emptyInputs(),
                a = "undefined";
            if (t.length) a = t.first().attr("id");
            else if (document.addEventListener) {
                var i = $("#new_attachment").clone();
                i.prop("disabled", !1), a = "file_" + $("#message-form-wrapper input:file:not(#new_attachment)").length, i.attr("id", a), i.insertAfter($("#message-form-wrapper input:file:not(#new_attachment):last"))
            }
            $("label.file").attr("for", a), $(".attachments").trigger("addFile")
        }), $("#message-form-wrapper").on("addFile", ".attachments", function() {
            var t = $(this),
                a = t.find(".list").html("");
            t.find("input:file:not(#new_attachment)").each(function() {
                if (this.files && 0 < this.files.length) {
                    var t = this.files[0];
                    a.append("<li><span class='file-name'>" + t.name + " (" + e.readablizeBytes(t.size) + ")</span>&nbsp;<span class='close delete'>&times;</span></li>")
                }
            })
        }), $("#message-form-wrapper").on("click", ".delete", function() {
            var t = $(this).parent();
            $("#message-form-wrapper input.file:not(#new_attachment):eq(" + t.index() + ")").val(""), $("label.file").attr("for", e.emptyInputs().first().attr("id")), t.remove()
        }), $(".new_simple_message_form").trigger("refresh"), $("#simple_message_form_message").keyup(function() {
            $("#simple_message_form_message").length && sessionStorage.setItem("message", $("#simple_message_form_message").val())
        }),
        function() {
            if (null != sessionStorage) {
                var e = sessionStorage.getItem("message");
                "undefined" != e && null != e && "" != e && $("#simple_message_form_message").val(e)
            }
        }(), $("#available-button, #notavailable-button, #not-suitable-button").click(function() {
            sessionStorage.setItem("message", "")
        }), $("#save_edit_package").click(function(e) {
            var t = $("form#edit_package");
            return $(this).prop("disabled", !0), $(this).html("<i class='ebs-icon-spinner spin-icon'></i> " + $(this).data("progress-text")), t.submit(), e.stopImmediatePropagation(), !1
        }), $("#js-create-quote-submit").click(function(e) {
            var t = $("form#edit_package");
            return sessionStorage.setItem("message", $("#create_quote_text").val()), $(this).prop("disabled", !0), $(this).html("<i class='ebs-icon-spinner spin-icon'></i> " + $(this).data("progress-text")), t.submit(), e.stopImmediatePropagation(), !1
        })
}), $(function() {
    $("#newsletters_email_modal").on("show", function() {
        var e = $(this).attr("new-form-url");
        $.ajax({
            type: "GET",
            dataType: "script",
            url: e
        })
    })
}), $(function() {
    $("#organizer_email_modal").on("show", function() {
        var e = $(this).attr("new-form-url");
        $.ajax({
            type: "GET",
            dataType: "script",
            url: e
        })
    })
}), $(function() {
    var e;
    return e = $(".per-person-wrap").outerWidth(), $("body").on("currencyChanged", ".price", function() {
        var t, a, i;
        t = $(this).siblings(".per-person-wrap").outerWidth(), a = $(this).parents(".price-wrapper").outerWidth() - t + e, i = $(this).parents("div").innerWidth() - 24;
        var n = $(this).siblings(".per-person-wrap");
        return a > i ? (n.attr("per_person", n.html()), n.html("")) : "" == n.html() ? n.html(n.attr("per_person")) : void 0
    }), $(".price").trigger("currencyChanged")
}), $(function() {
    var e;
    $("#send-message").length && ((e = $("#send-message").attr("new-form-url")) && $.ajax({
        type: "GET",
        dataType: "script",
        url: e
    }))
}), $("#subscribe_modal").on("show", function() {
    var e = $(this).attr("new-form-url");
    $.ajax({
        type: "GET",
        dataType: "script",
        url: e
    })
}), $(function() {
    $("#easy_inquiry_modal").on("shown", function() {
        var e = $('input[name="package_id"]:checked').parents(".radio").find(".price").text();
        $(".js-payment-info-price").html(e);
        $("#easy_inquiry_modal").find(".js-ip-allow-empty").length;
        var t = $(".holder-listing-infos .package-attributes"),
            a = $(".js-inquiry-arrival-date-display"),
            i = $(".js-inquiry-departure-date-display"),
            n = $(".js-inquiry-duration-display");
        481 > $(window).width() && ($("body").attr("data-pos", $(window).scrollTop()), $("body,html").addClass("noscroll"));
        var r = $('input[name="package_id"]:checked').val(),
            o = $('input[name="package_id"]:checked').parent().find(".package-attributes").clone(!0, !0);
        if (t.show(), $("#easy_inquiry_modal").find(".js-copy-package-here").html("").append(o), 0 == r) {
            var s = $("#custom_pkg_placeholder").text();
            $("#inquiry_message_form_message").attr("placeholder", s);
            var l = $("#custom-pkg-people").clone(!0, !0);
            $("#easy_inquiry_modal").find(".js-copy-package-here").append(l)
        } else $("#inquiry_message_form_message").attr("placeholder", "");
        if (0 < $(".js-sc1-inquiry-modal-dates-container").length) {
            var c = $(".js-sc1-inquiry-modal-arrival").text(),
                d = $(".js-sc1-inquiry-modal-departure").text();
            if (0 == r) {
                var p = $("#custom_pkg_duration").clone(!0, !0);
                $("#easy_inquiry_modal").find(".js-inquiry-arrival-date-display, .js-inquiry-departure-date-display").addClass("hide"), $(".js-inquiry-duration-display").show(), $("#easy_inquiry_modal").find(".js-insert-duration").html("").append(p)
            } else $("#easy_inquiry_modal").find(".js-inquiry-arrival-date-display, .js-inquiry-departure-date-display").removeClass("hide"), $(".js-inquiry-duration-display").hide(), $("#easy_inquiry_modal").find(".js-insert-arrival-date").text(c), $("#easy_inquiry_modal").find(".js-insert-departure-date").text(d);
            a.show(), i.show()
        }
        if (0 < $(".js-sc2-inquiry-modal-dates-container").length) {
            c = $(".js-sc2-inquiry-modal-arrival option:selected").text(), d = $(".js-sc2-inquiry-modal-departures div").filter(":visible").text();
            if (0 == r) {
                p = $("#custom_pkg_duration").clone(!0, !0);
                $("#easy_inquiry_modal").find(".js-inquiry-arrival-date-display, .js-inquiry-departure-date-display").addClass("hide"), $(".js-inquiry-duration-display").show(), $("#easy_inquiry_modal").find(".js-insert-duration").html("").append(p)
            } else $("#easy_inquiry_modal").find(".js-inquiry-arrival-date-display, .js-inquiry-departure-date-display").removeClass("hide"), $(".js-inquiry-duration-display").hide(), $("#easy_inquiry_modal").find(".js-insert-arrival-date").text(c), $("#easy_inquiry_modal").find(".js-insert-departure-date").text(d);
            a.show(), i.show()
        }
        if (0 < $(".js-sc3-inquiry-modal-dates-container").length) {
            c = $(".js-sc3-inquiry-modal-arrival").val();
            if ($("#easy_inquiry_modal").find(".js-insert-arrival-date").text(c), 0 == r) {
                p = $("#custom_pkg_duration").clone(!0, !0);
                $("#easy_inquiry_modal").find(".js-insert-duration").html("").append(p)
            } else {
                p = $(".js-sc3-inquiry-modal-duration").text();
                $("#easy_inquiry_modal").find(".js-insert-duration").text(p)
            }
            a.show(), n.show()
        }
    }), $("#easy_inquiry_modal").on("hidden", function() {
        $("#easy_inquiry_modal").find(".holder-listing-infos .package-attributes").empty(), $("#easy_inquiry_modal").find(".payment-info .price").empty(), $("#easy_inquiry_modal").find(".dates p").hide().find("span").empty(), $("#easy_inquiry_modal").find(".control-group.error").removeClass("error"), $("#easy_inquiry_modal").find(".org-rsp-avg.red").hide(), $("#easy_inquiry_modal").find(".org-rsp-avg.yellow").show(), 481 > $(window).width() && ($("body,html").removeClass("noscroll"), $(window).scrollTop($("body").attr("data-pos"))), $(".easy-inquiry-highlited-price").length && $("#prices-wrapper").show()
    })
}), $(function() {
    $(".js-clean-content").children().each(function() {
        "&nbsp;" == $(this).html() && $(this).remove()
    })
}), $(function() {
    var e = function(e) {
            var t = {},
                a = e.offset() || null;
            return a && a.top && (t.top = a.top, t.bottom = a.top + e.outerHeight()), t
        },
        t = function(t, a) {
            return i = a, t.length && i.length && function(t, a) {
                var i = t.offset() || null;
                if (i && i.top) {
                    var n = e(t),
                        r = $(window).scrollTop(),
                        o = r + $(window).height(),
                        s = n.bottom + a.height() > r,
                        l = n.top < o - a.height();
                    if (s && l) a.addClass("in-view"), a.css("left", ""), a.css("width", "");
                    else {
                        if (a.removeClass("in-view"), 767 < $(window).width()) {
                            var c = $(".listing-query-box");
                            c.length && c.offset() && c.offset().left && (a.css("left", c.offset().left), a.css("width", c.outerWidth()))
                        } else a.css("left", ""), a.css("width", "");
                        var d = $("footer");
                        if (d.length) {
                            var p = e(d);
                            e(a), o > p.top ? a.css("bottom", o - p.top) : a.css("bottom", "")
                        }
                    }
                }
            }(t, a);
            var i
        },
        a = function() {
            return t($(".js-listing-sidebar-anchor-top"), $(".js-sidebar-sticky-button"))
        };
    $(".js-sidebar-inquiry-button, .js-sidebar-reservation-button").on("click", function() {
        var e = $(".js-sidebar-sticky-button"),
            t = $(window),
            a = $(".js-listing-sidebar-anchor-top"),
            i = $(window).scrollTop(),
            n = i + $(window).innerHeight(),
            r = a.offset();
        if (r && r.top) {
            var o = r.top;
            if (o <= i || o > n - (e.outerHeight() - .8 * $("#listing_side_list").outerHeight())) {
                var s = 5 + o + e.outerHeight() - t.innerHeight();
                return $("html, body").animate({
                    scrollTop: s
                }, 400), $(this).blur(), !1
            }
        }
    }), a(), $(window).on("resize scroll", function() {
        a()
    })
}), $(function() {
    $("#easy_inquiry_modal").on("shown", function() {
        var e = $('input[name="package_id"]:checked').parents(".radio").find(".price").text();
        if ($("#easy_inquiry_modal").find(".payment-info .price").html(e), $(".holder-listing-infos .package-attributes").show(), $(".holder-listing-infos .dates .all-dates").show(), $(".holder-listing-infos .dates .arrival-date").show(), $(".package-on-inquiry").hide(), 481 > $(window).width() && ($("body").attr("data-pos", $(window).scrollTop()), $("body,html").addClass("noscroll")), 0 == (n = $('input[name="package_id"]:checked').val())) {
            var t = $("#custom_pkg_placeholder").text();
            $("#inquiry_message_form_message").attr("placeholder", t)
        } else $("#inquiry_message_form_message").attr("placeholder", "");
        var a, i = $('input[name="package_id"]:checked').parent().find(".package-attributes").clone(!0, !0),
            n = n;
        if ($("#easy_inquiry_modal").find(".holder-listing-infos .package-attributes").html("").append(i), 0 < $('#listing-query #listing-availability-container input[type="hidden"]').length) {
            var r = $("#listing_query_arrival_date").prev().html();
            $("#easy_inquiry_modal").find(".dates .all-dates").show().find("span").append(r), a = $("#listing_query_arrival_date").val(), $("#easy_inquiry_modal").find(".dates .departure-date, .dates .arrival-date").hide()
        }
        if (0 < $("#listing-query #arrival_date_select").length) {
            var o = $("#arrival_date_select option:selected").text(),
                s = $("#departure_dates div").filter(":visible").text();
            $("#easy_inquiry_modal").find(".dates .arrival-date").show().find("span").append(o), $("#easy_inquiry_modal").find(".dates .departure-date").show().find("span").append(s), a = $("#arrival_date_select option:selected").val()
        }
        if (0 < $("#listing-query .date_picker").length) {
            o = $("#beauty_arrival_date").val();
            var l = Date.parse(o);
            if ($("#easy_inquiry_modal").find(".dates .arrival-date").show().find("span").append(o), 0 == n) {
                var c = $("#custom_pkg_duration").clone(!0, !0);
                $("#easy_inquiry_modal").find(".dates .duration").show().find("span").html("").append(c)
            } else {
                c = $("#listing-query-box .listing-duration > span").text();
                $("#easy_inquiry_modal").find(".dates .duration").show().find("span").append(c)
            }
            a = formatDate(l)
        }
        var d = window.location.href.split("?")[0] + "/" + n + "/" + a + "/original-prices";
        $(".easy-inquiry-highlited-price").length && $.get(d, function(t) {
            $(".easy-inquiry-highlited-price .original-price").text(e), $(".easy-inquiry-highlited-price .price").text(t), $("#prices-wrapper").hide()
        })
    }), $("#easy_inquiry_modal").on("hidden", function() {
        $("#easy_inquiry_modal").find(".holder-listing-infos .package-attributes").empty(), $("#easy_inquiry_modal").find(".payment-info .price").empty(), $("#easy_inquiry_modal").find(".dates p").hide().find("span").empty(), $("#easy_inquiry_modal").find(".control-group.error").removeClass("error"), $("#easy_inquiry_modal").find(".org-rsp-avg.red").hide(), $("#easy_inquiry_modal").find(".org-rsp-avg.yellow").show(), 481 > $(window).width() && ($("body,html").removeClass("noscroll"), $(window).scrollTop($("body").attr("data-pos"))), $(".easy-inquiry-highlited-price").length && $("#prices-wrapper").show()
    })
}), $(function() {
    $("#lp_variable_duration_select").change(function() {
            $("#duration_in_days").val(parseInt($("#lp_variable_duration_select").val())).change(), gae("listingPage", "duration_select")
        }), $("#duration_in_days").change(function() {
            var e = parseInt($("#duration_in_days").val()),
                t = $("#lp_variable_duration_select");
            if (0 < t.length)
                if (t.attr("data-transtag")) {
                    var a = t.attr("data-transtag").replace("DAYS", e).replace("NIGHTS", e - 1);
                    $(".js-insert-duration").html(a), $("#lp_variable_duration_select").val(e)
                } else console.warn("data-transtag attribute could not be found on #lp_variable_duration_select element."), gae("jsWarning", "lp_variable_duration_select.data-transtag-noAttribute")
        }), $("#listing_query_arrival_date").change(function() {
            $("#duration_in_days").change()
        }), $("#duration_in_days_plus").click(function() {
            var e = parseInt($("#duration_in_days").val()),
                t = parseInt($("#duration_in_days_original").val());
            $("#duration_in_days").val(parseInt($("#lp_variable_duration_select").val())).change(), e < 2 * t && $("#duration_in_days").val(e + 1).change(), gae("listingPage", "duration_plus")
        }), $("#duration_in_days_minus").click(function() {
            var e = parseInt($("#duration_in_days").val()),
                t = parseInt($("#duration_in_days_original").val());
            $("#duration_in_days").val(parseInt($("#lp_variable_duration_select").val())).change(), (3 < e || e > t) && $("#duration_in_days").val(e - 1).change(), gae("listingPage", "duration_minus")
        }), "1" == $("#price_needs_approval").val() && $(".price_, .price").css("color", "red"), $("#duration_in_days").change(function() {
            if ($("#duration_in_days").length && $("#duration_in_days_original").length) {
                var e = parseInt($("#duration_in_days").val()),
                    t = parseInt($("#duration_in_days_original").val());
                e == t ? ($("#reservation-query-submit").removeClass("hide"), $(".js-show-on-custom-package").addClass("hide")) : ($("#reservation-query-submit").addClass("hide"), $(".js-show-on-custom-package").removeClass("hide"));
                var a = 0;
                $(".price").each(function() {
                    if ($(this).attr("data-price")) {
                        var e = parseInt($(this).data("price"));
                        (e < a || 0 == a) && (a = e)
                    }
                }), $(".price").each(function() {
                    if ($(this).html().length) {
                        var i = $(this).html(),
                            n = /\d/gim.exec(i);
                        if (n) {
                            var r, o = i.substring(0, n.index);
                            r = $(this).attr("data-price") ? parseInt($(this).data("price")) : a, r = Math.round(r * e / t);
                            var s = e == t || $(this).attr("data-price") ? "" : "<small> (" + $("#price_is_indicative_hidden").val() + ")</small>";
                            $(this).html(o + r + s)
                        }
                    }
                })
            }
        }),
        function() {
            for (var e = 3, t = parseInt($("#duration_in_days_original").val()); e <= 2 * t;) {
                var a = $("#lp_variable_duration_select").attr("data-transtag").replace("DAYS", e).replace("NIGHTS", e - 1),
                    i = "";
                e == t && (i = 'selected="selected"'), $("#lp_variable_duration_select").append("<option " + i + ' value="' + e + '">' + a + "</option>"), e++
            }
        }()
}), $(function() {
    var e = $(".favorites-count-wrp .fav-count-container"),
        t = $(".favorites-count-wrp .fav-count-container .tooltip-fav");
    e.on("mouseenter", function(e) {
        t.animate({
            opacity: 1,
            left: "31"
        }, 300), e.preventDefault()
    }), e.on("mouseleave", function(e) {
        t.animate({
            opacity: 0,
            left: "16"
        }, 100), e.preventDefault()
    })
}), $(function() {
    $(".js-mobile-menu").click(function() {
        $(".js-navbar__navs").toggleClass("flex")
    })
}), $(function() {
    function e(e, t, a) {
        e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent && e.attachEvent("on" + t, a)
    }
    if ((isIndexPage || isTopicPage) && !isSubscriber && e(window, "load", function() {
            e(document, "mouseout", function(e) {
                e = e || window.event;
                var t = 1 == $("body").data("showModalWhenLeavingWindow"),
                    a = e.relatedTarget || e.toElement;
                t && (!a || "HTML" == a.nodeName) && e.pageY < jQuery(window).scrollTop() && ($("#subscribe_modal").length ? "function" == typeof $("#subscribe_modal").modal ? $("#subscribe_modal").modal() : (console.warn('The "_subscribe_modal" element does not have a "modal" method.'), gae("jsWarning", "noModal-methodNotFound")) : (console.warn('No "subscribe_modal" element found.'), gae("jsWarning", "noModal-elementNotFound")))
            })
        }), $("#subscribe_modal").on("hide", function() {
            $.post("/disable_modal", function() {}), $("body").data("showModalWhenLeavingWindow", 0)
        }), "undefined" != typeof isIndexPage && "undefined" != typeof isTopicPage && ((isIndexPage || isTopicPage) && !0 === window.localStorageStatus && !isSubscriber && 0 == $("body").data("showModalWhenLeavingWindow") && setInterval(function() {
            var e = Math.floor;
            try {
                if (null == localStorage.getItem("corner")) localStorage.setItem("corner", 0);
                else if (300 < e(Date.now() / 1e3) - +localStorage.getItem("corner") && window.matchMedia("all and (min-width: 768px)").matches) {
                    clearInterval(t);
                    var t = setInterval(function() {
                        1e3 < $(document).scrollTop() && (localStorage.setItem("corner", e(Date.now() / 1e3)), clearInterval(t), $("body").append('<div id="cornerSubscription"><div id="cornerSub"><h5>' + translation_subscribe_newsletter_selling_var1 + "</h5><h6>" + translation_sign_up_for_our_newsletter_base_modal + '</h6></div><div id="cornerHide"></div></div>'), setTimeout(function() {
                            $("#cornerSubscription").addClass("visible")
                        }, 500), $("#cornerSub").click(function() {
                            $("#subscribe_modal").modal("show"), $("#cornerSubscription").removeClass("visible")
                        }), $("#cornerHide").click(function() {
                            $("#cornerSubscription").removeClass("visible"), localStorage.setItem("corner", e(Date.now() / 1e3) + 600)
                        }))
                    }, 1e3)
                }
            } catch (e) {
                if ("SecurityError" !== e.name) throw e;
                console.warn("Could not save to localStorage due to security settings."), gae("jsWarning", "localStorage-SecurityError")
            }
        }, 1e3), $("#sub_eol_form").length)) {
        var t = function() {
            var e = $("#sub_eol_email").val();
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) ? ($("#sub_eol_email").removeClass("sub_eol_warning"), $.post("/subscribers", {
                email: e
            }, function() {
                $("#sub_eol").addClass("sub_eol_subscribed"), gae("newsletter_sub_modal", "eol_subscribe")
            })) : $("#sub_eol_email").addClass("sub_eol_warning")
        };
        $("#sub_eol_button").on("click", function() {
            t()
        }), $("html").on("keyup", function(e) {
            "13" == (e.keyCode || e.which) && 0 < $("#sub_eol_email").val().length && t()
        }), gae("newsletter_sub_modal", "eol_init")
    }
}), $(function() {
    $(".nps-confirmation").hide(), $(".nps-value").on("click", function() {
        var e = $(this).data("value"),
            t = $(".nps-container").data("is-confirmation"),
            a = t ? "/customer/confirmation/nps" : "/customer/review/nps",
            i = t ? getUrlParameter("token") : $(".nps-container").data("token");
        $.ajax({
            type: "POST",
            url: a,
            data: '{"score":' + e + ', "token" : "' + i + '"}',
            contentType: "application/json"
        }).done(function() {
            npsSuccess(e)
        })
    }), $(".nps-reply-send").on("click", function() {
        var e = $("#nps-reply-text").val(),
            t = $(".nps-container").data("is-confirmation"),
            a = t ? "/customer/confirmation/submit_nps_text" : "/customer/review/submit_nps_text",
            i = t ? getUrlParameter("token") : $(".nps-container").data("token");
        return $.ajax({
            type: "POST",
            url: a,
            data: '{"token" : "' + i + '", "text" : "' + e + '"}',
            contentType: "application/json"
        }).done(function() {
            npsQuestionSuccess()
        }), !1
    })
}), $(function() {
    var e = window,
        t = document,
        a = t.documentElement,
        i = t.getElementsByTagName("body")[0],
        n = e.innerWidth || a.clientWidth || i.clientWidth;
    if ($(".js-organizer-listing-swiper").length) {
        var r = $(".js-organizer-listing-swiper .swiper-slide").length;
        new Swiper(".js-organizer-listing-swiper", {
            slidesPerView: "auto",
            slidesPerGroup: 768 > n ? 1 : 2,
            spaceBetween: 768 > n ? 0 : 20,
            nextButton: ".js-swiper-button--next",
            prevButton: ".js-swiper-button--prev",
            grabCursor: !0,
            loop: !!(2 < r),
            onInit: function(e) {
                var t = 0;
                e.slides.each(function() {
                    t += $(this).outerWidth()
                }), t < e.width && (e.nextButton.remove(), e.prevButton.remove(), e.unsetGrabCursor())
            }
        })
    }
    if ($(".js-organizer-instructor-swiper").length) r = $(".js-organizer-instructor-swiper .swiper-slide").length, new Swiper(".js-organizer-instructor-swiper", {
        slidesPerView: "auto",
        spaceBetween: 1024 > n ? 0 : 20,
        nextButton: ".js-swiper-button--next",
        prevButton: ".js-swiper-button--prev",
        grabCursor: !0,
        loop: !!(2 < r),
        onInit: function(e) {
            var t = 0;
            e.slides.each(function() {
                t += $(this).outerWidth()
            }), t < e.width && (e.nextButton.remove(), e.prevButton.remove(), e.unsetGrabCursor())
        }
    });
    if ($(".js-organizer-review-swiper").length) {
        var o;
        new Swiper(".js-organizer-review-swiper", (o = {
            slidesPerView: 3,
            spaceBetween: 30,
            nextButton: ".js-swiper-button--next",
            prevButton: ".js-swiper-button--prev"
        }, _defineProperty(o, "slidesPerView", 1024 > n ? 768 > n ? 1 : 2 : 3), _defineProperty(o, "pagination", ".js-swiper-pagination"), _defineProperty(o, "grabCursor", !0), _defineProperty(o, "onInit", function(e) {
            var t = 0;
            e.slides.each(function() {
                t += $(this).outerWidth()
            }), t < e.width && (e.nextButton.remove(), e.prevButton.remove(), e.unsetGrabCursor())
        }), o))
    }
    if ($(".js-organizer-testimonial-swiper").length) {
        var s;
        new Swiper(".js-organizer-testimonial-swiper", (s = {
            slidesPerView: 3,
            spaceBetween: 30,
            nextButton: ".js-swiper-button--next",
            prevButton: ".js-swiper-button--prev"
        }, _defineProperty(s, "slidesPerView", 1024 > n ? 768 > n ? 1 : 2 : 3), _defineProperty(s, "pagination", ".js-swiper-pagination"), _defineProperty(s, "grabCursor", !0), _defineProperty(s, "onInit", function(e) {
            var t = 0;
            e.slides.each(function() {
                t += $(this).outerWidth()
            }), t < e.width && (e.nextButton.remove(), e.prevButton.remove(), e.unsetGrabCursor())
        }), s))
    }
}), $(function() {
    var e = $(".pck-selected-style .package-option input[type=radio].package-selection-item");
    $(".pck-selected-style .package-option input[type=radio].package-selection-item:checked").parents("label.radio").addClass("selected"), e.change(function() {
        "0" == $(this).attr("data-id") ? $("#reservation-query-submit").hide() : $("#reservation-query-submit").show();
        var t = this;
        e.each(function() {
            this !== t && $(this).closest("label").removeClass("selected")
        }), $(this).closest("label").addClass("selected"), receipt_update()
    });
    var t = $(".dates-selected-style .listing_query_arrival_date input[type=radio].radio_buttons");
    $(".dates-selected-style .listing_query_arrival_date input[type=radio].radio_buttons:checked").parents("label.radio").addClass("selected"), t.change(function() {
        var e = this;
        t.each(function() {
            this !== e && $(this).closest("label").removeClass("selected")
        }), $(this).closest("label").addClass("selected")
    })
}), $(function() {
    function e() {
        setTimeout(function() {
            switch ($('[name="customer_selected_amount"]:checked').val()) {
                case "deposit":
                    $("#please_pay_deposit_now p").html(trans_paymentDeposit), $("#please-pay-placeholder").html(trans_paymentDeposit), $("#paymentList li").not(":first-child").show();
                    break;
                case "total":
                    $("#please_pay_deposit_now p").html(trans_paymentTotal), $("#please-pay-placeholder").html(trans_paymentTotal), $("#paymentList li").not(":first-child").hide()
            }
        }, 200)
    }
    if ("undefined" != typeof sendToPayment) {
        var t = function() {
                if (void 0 != $("input[name=brandCode]:checked") && $("input[name=brandCode]:checked") && void 0 != $("input[name=brandCode]:checked").attr("id")) {
                    var e = $("input[name=brandCode]:checked").attr("id").split("-")[1];
                    $("#pm-" + e).slideDown(), $("#query-form .payment_methods_form .method_form").not($("#pm-" + e)).slideUp()
                }
            },
            a = function(e) {
                switch ($("ul.breadcrumb.checkout li").removeClass("active"), $("#accordion_section_details_summary").empty(), $("#accordion_section_details h4 span.edit, #accordion_continue").remove(), $("#new-inquiry-submit").show(), e) {
                    case "accordion_section_details":
                        if ($("ul.breadcrumb.checkout li:nth-child(2)").addClass("active"), "undefined" == typeof uncollapsedPaymentSection || !uncollapsedPaymentSection) {
                            $("#new-inquiry-submit").hide(), $("#continue-payment").hide();
                            var t = ".accordion_section_content .span5";
                            if ("undefined" != typeof textInReservation && textInReservation) t = ".accordion_section_content .span12";
                            $(t).append('<span id="accordion_continue" class="btn btn-success">' + transl_reservation_cta_continue + "</span>"), $("#accordion_continue").on("click", function() {
                                $("#query-form .payment_methods_form .accordion_section h4").trigger("click"), $("#continue-payment").click()
                            })
                        }
                        break;
                    case "accordion_section_payment":
                        $("ul.breadcrumb.checkout li:nth-child(3)").addClass("active"), $("#accordion_section_details_summary").html("<p>" + $("#inquiry_message_form_title option:selected").text() + " " + $("#inquiry_message_form_first_name").val() + " " + $("#inquiry_message_form_last_name").val() + "<br />" + $("#inquiry_message_form_email").val() + "<br />" + $("#inquiry_message_form_telephone_number_code").val() + " " + $("#inquiry_message_form_telephone_number").val() + "</p>"), $("#accordion_section_details h4").append(' <span class="edit">' + transl_edit + "</span>")
                }
            };
        $("#query-form .payment_methods_form legend").click(t), $("input[name=brandCode]").on("change", function() {
            var e = document.getElementById("keep_reservation_payment").value;
            document.getElementById("is_deposit_expired").value;
            "undefined" == typeof paymentMessage ? (paymentMessage = "", paymentMessageCC = "") : 0 == $("#customer_selected_amount").length && ("cc" == $("input[name=brandCode]:checked").val() && "true" == sendToPayment ? $("#please-pay-placeholder").html(paymentMessageCC) : $("#please-pay-placeholder").html(paymentMessage)), "cc" == $("input[name=brandCode]:checked").val() || "false" != e ? (null != $("#plus-transaction-fee") && $("#plus-transaction-fee").html("<small>" + $("#plus-credit-card-fee-hidden").val() + "</small>"), $("#cc-currency-msg").show(), $("#plus-transaction-fee").show(), $("#new-inquiry-submit").find(".show-on-pm-others").hide(), $("#new-inquiry-submit").find(".show-on-pm-credit-card").show()) : "paypal" == $("input[name=brandCode]:checked").val() ? (null != $("#plus-transaction-fee") && $("#plus-transaction-fee").html("<small>" + $("#plus-paypal-fee-hidden").val() + "</small>"), $("#plus-transaction-fee").show(), $("#cc-currency-msg").hide(), $("#paid-cc-currency-msg").hide(), $("#new-inquiry-submit").find(".show-on-pm-credit-card").hide(), $("#new-inquiry-submit").find(".show-on-pm-others").show()) : ($("#plus-transaction-fee").hide(), $("#cc-currency-msg").hide(), $("#paid-cc-currency-msg").hide(), $("#new-inquiry-submit").find(".show-on-pm-credit-card").hide(), $("#new-inquiry-submit").find(".show-on-pm-others").show());
            var t = $(this).val();
            $(this).parents(".payment-methods-toggle").find("label").removeClass("active"), $(this).parent("label").addClass("active"), $(this).parents(".js-parent-container").find(".payment-method-form").hide(), $(this).parents(".js-parent-container").find("#pm-" + t).show()
        }), ErrorInDetails || "" == $("#inquiry_message_form_first_name").val() && "" == $("#inquiry_message_form_last_name").val() && "" == $("#inquiry_message_form_email").val() ? ($(".payment_methods_form .method_form").hide(), $("#method_cc .method_form").show()) : ($("#query-form .payment_methods_form .accordion_section div.accordion_section_content, .method_form").hide(), $("#accordion_section_payment .accordion_section_content").show(), $("#query-form .payment_methods_form .accordion_section h4").on("click", function() {
            if ("undefined" != typeof uncollapsedPaymentSection && uncollapsedPaymentSection || $("#query-form .payment_methods_form .accordion_section div.accordion_section_content").hide(), $(this).siblings(".accordion_section_content").slideDown(), a($(this).closest("li").attr("id")), 736 > $(window).width()) return $("html,body").animate({
                scrollTop: $(".checkout_accordion").offset().top - 25
            }, 400), !1
        }), t(), a("accordion_section_payment"))
    }
    if ($(".pay_deposit_or_total input").on("change", function() {
            e()
        }), e(), function(e, t) {
            try {
                if (null != sessionStorage) {
                    var a = sessionStorage.getItem(e);
                    if ("undefined" != a && null != a && "" != a)
                        if ($('input[name="brandCode"][value="' + a + '"]').click(), void 0 != (e = $("input[name=brandCode]:checked").attr("id"))) {
                            var i = e.split("-")[1];
                            $("#pm-" + i).slideDown(), $("#query-form .payment_methods_form .method_form").not($("#pm-" + i)).slideUp()
                        }
                }
            } catch (e) {
                gae("payment", "User had cookies disabled so sessionStorage throws error")
            }
        }("paymentMethod"), $('input[name="customer_selected_amount"]').length && $('input[name="customer_selected_amount"]').change(function() {
            $(".full-or-deposit-toggle").length && ($(this).parents(".full-or-deposit-toggle").find(".active").removeClass("active"), $(this).parents("label").addClass("active"), e()), $("#receipt_deposit, #receipt_full").length && ("total" != $('input[name="customer_selected_amount"]:checked').val() && ($("#receipt_deposit").show(), $(".final-tip").css("display", "block")), "total" == $('input[name="customer_selected_amount"]:checked').val() && ($("#receipt_deposit").hide(), $(".final-tip").css("display", "none"), $("#receipt_full").show()))
        }), $("#inquiry_message_form_telephone_number_code").length) {
        var i = function() {
            $("#inquiry_message_form_flag_icon").attr("class", "sprite _" + $("#inquiry_message_form_telephone_number_code").val().toLowerCase().split(" ")[0] + " ")
        };
        $("#inquiry_message_form_telephone_number_code").on("change", function() {
            i()
        }), i()
    }
    $("#rp_edit_details_button").click(function() {
        return $(this).parents().find(".your-details-fields").removeClass("hidden"), $(this).parents(".js-hide-pesonal-info-summary").hide(), !1
    })
}), $(function() {
    if ($("#privacy_modal_trigger").length) {
        var e = document.getElementById("privacy_modal_trigger");
        if (e)
            for (;
                (e = e.parentElement) && !e.classList.contains("modal"););
        null != e && ($("#privacy_modal_trigger").attr("data-toggle", "none"), $("#privacy_modal_trigger").attr("target", "_blank"), $("#privacy_modal_trigger").attr("href", "/terms-and-privacy/" + $("#privacy_modal_trigger").attr("href"))), -1 < window.location.href.indexOf("#privacy_modal") && setTimeout(function() {
            $("#privacy_modal").modal()
        }, 600)
    }
}), $(function() {
    $('[data-toggle="popover"]').length && $('*[data-toggle="popover"]').hover(function() {
        return $(this).parent().find(".popover").toggle(), !1
    })
}), $(function() {
    if ($(".js-payment-countdown").length) {
        var e = $(".js-payment-expiration").val(),
            t = new Date(e);
        t.setHours(t.getHours() + 1);
        var a = t.getTime(),
            i = setInterval(function() {
                var e = Math.floor,
                    t = (new Date).getTime(),
                    n = a - t,
                    r = e(n % 864e5 / 36e5),
                    o = e(n % 36e5 / 6e4),
                    s = e(n % 6e4 / 1e3);
                $(".js-payment-countdown").text(r + " " + hoursTranslationTag + ", " + o + " " + minutesTranslationTag + ", " + s + " " + secondsTranslationTag), 0 > n && (clearInterval(i), $(".js-payment-countdown").parent().text("This payment form is expired"))
            }, 1e3)
    }
}), $(function() {
    $("#show_reviews_from_gallery").on("click", function(e) {
        if ($(".full-description-btn a").trigger("click"), e.preventDefault(), location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if ((t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
                scrollTop: t.offset().top - 25
            }, 400), !1
        }
    }), $("button#footer-subscribe").on("click", function(e) {
        e.preventDefault(), $(".pre-footer input#email").removeClass("error"), $.ajax({
            type: "POST",
            url: "/subscribers",
            data: {
                json: !0,
                email: $(".pre-footer input#email").val()
            },
            async: !0
        }).done(function(e) {
            e && !e.isError ? $(".form-newsletter").html("<h3>" + e.msg + "</h3>") : $(".pre-footer input#email").addClass("error")
        })
    }), 736 > $(window).width() && $("div.right_col_subgroup.magic").insertAfter("#full-description-btn"), $("#arrival_date_select").change(function() {
        $("#departure_dates div").hide();
        var e = "dd_" + $(this).val();
        $("#" + e).show()
    }), $("#preconfirm_availabilty_button").click(function() {
        $("#inline_package_summary").clone().appendTo("#reconfirm_summary_container"), $("#payment_conditions").is(":visible") && $("#cancellation_msg, #deposit_msg").clone().appendTo("#reconfirm_summary_container"), $("#reconfirm_summary_container #remote_edit_package_button").remove(), $("#confirm_modal").on("hide", function() {
            $("#reconfirm_summary_container").empty(), $("html,body").animate({
                scrollTop: 0
            }, 400)
        })
    })
}), $(function() {
    $("#receipt_with_fees").length && receipt_update()
}), $(function() {
    if ($(".lp-thumbs").length) {
        var e = 0;
        $(".lpt-thumb").each(function() {
            $(this).attr("data-index", e), e++, $(this).click(function() {
                var e = +$(this).attr("data-index");
                0 < $("#listing-slider").length ? ($("#listing-slider").sliderPro("gotoSlide", e), gae("gallery", "thumbnail-list")) : 0 < $("#listing-slider2").length && ($("#listing-slider2").sliderPro("gotoSlide", e), gae("gallery", "thumbnail-list-fullwidth"))
            })
        })
    }
}), $(function() {
    "undefined" != typeof lp_min_content && ($(".ebs-panel .panel-collapse").each(function() {
        400 < $(this).height() && ($(this).height(350), $(this).append('<div class="full_content"></div>'))
    }), $('[data-toggle="collapse"]').click(function() {
        $(this).parent().parent().parent().find(".full_content").hide()
    }), $(".full_content").click(function() {
        $(this).parent().height("auto"), $(this).hide(), gae("ip_hyperlinking", "expand_content_card")
    }))
}), $(function() {
    $(".popular_suggestions_slider").length && new Swiper(".popular_suggestions_slider", {
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        spaceBetween: 30,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoHeight: !0,
        autoplay: 5e3,
        loop: !0
    })
}), $.fn.isOnScreen = function() {
    var e = $(window),
        t = {
            top: e.scrollTop(),
            left: e.scrollLeft()
        };
    t.right = t.left + e.width(), t.bottom = t.top + e.height();
    var a = this.offset();
    return a.right = a.left + this.outerWidth(), a.bottom = a.top + this.outerHeight(), !(t.right < a.left || t.left > a.right || t.bottom < a.top || t.top > a.bottom)
};
var lp_lazy_load_gallery = function() {
    $("[data-ll-src]").each(function() {
        $(this).isOnScreen() && ($(this).hide(), $(this).parent().attr("style", "background:center no-repeat url(" + $(this).attr("data-ll-src") + ");background-size:cover;width:100%;height:100%;"))
    });
    var e = $(window).width();
    480 < e && $("[data-ll-src-mobile]").each(function() {
        $(this).isOnScreen() && ($(this).hide(), $(this).parent().attr("style", "background:center no-repeat url(" + $(this).attr("data-ll-src-desktop") + ");background-size:cover;width:100%;"))
    }), 480 >= e && $("[data-ll-src-desktop]").each(function() {
        $(this).isOnScreen() && ($(this).hide(), $(this).parent().attr("style", "background:center no-repeat url(" + $(this).attr("data-ll-src-mobile") + ");background-size:cover;width:100%;"))
    })
};
$(function() {
    $("[data-ll-src], [data-ll-src-mobile], [data-ll-src-desktop]").length && (window.lp_lazy_load_gallery_interval = setInterval(function() {
        lp_lazy_load_gallery(), $("[data-ll-src], [data-ll-src-mobile], [data-ll-src-desktop]").length || clearInterval(window.lp_lazy_load_gallery_interval)
    }, 600), lp_lazy_load_gallery())
}), $(function() {
    $("#index_pop_carousel").length ? (768 > $(window).width() && !(-1 < window.location.href.indexOf("sorting")) && $.ajax({
        type: "GET",
        url: location.protocol + "//" + location.host + location.pathname + "popular.json",
        async: !0
    }).done(function(e) {
        var t = "";
        for (i = 0; i < e.length; i++) t += "<div class=\"carousel_item_wrapper swiper-slide\" onClick=\"gae('indexPage','mobile_carousel_click');\">", t += '<a href="' + e[i].href + '" target="_blank" class="carousel_item">', t += '<div class="carousel_image" style="background-image:url(' + e[i].image + ');">', t += '<div class="carousel_overlay">' + e[i].interest + "</div>", t += "</div>", t += '<div class="carousel_text">', t += "<h2>" + e[i].title + "</h2>", t += "<h3>" + e[i].price.split(".")[0] + "</h3>", t += "</div>", t += "</a>", t += "</div>";
        $("#index_pop_carousel").append('<div class="swiper-wrapper">' + t + "</div>"), $("#carousel_wrapper").show(), new Swiper("#index_pop_carousel", {
            loop: !0,
            grabCursor: !0,
            slidesPerView: 1.5,
            onTouchEnd: function() {
                gae("indexPage", "mobile_carousel_swipe")
            }
        })
    }), $("#sorting .dropdown-toggle").click(function() {
        gae("indexPage", "sorting_with_carousel")
    })) : $("#sorting .dropdown-toggle").click(function() {
        gae("indexPage", "sorting_no_carousel")
    })
}), $(function() {
    "undefined" != typeof tp_dropdown_destinations_to_sr && tp_dropdown_destinations_to_sr && $("#destinations-options li a").each(function() {
        var e = $(this).text();
        $(this).attr("href", "/searchresults?q=" + encodeURI(e.trim().split("&").join("and")) + "&src=filters")
    })
}), $(function() {
    if ("undefined" != typeof tp_budget_badge && ($exp.track("tp_budget_badge"), tp_budget_badge)) {
        var e = +Cookies.get("lowestPrice") || 0;
        $(".listWrapper .tile").each(function() {
            if (!$(this).find(".per_day").length) {
                var t = +$(this).find(".price").first().text().replace("€ ", "").replace(",", "");
                $(this).attr("data-price", t), (0 == e || t < e) && (e = t)
            }
        }), $('[data-price="' + e + '"]').append('<a href="/all/c/budget-retreats/?src=badge" target="_blank" class="budget_badge border-box"><b>This is the cheapest retreat you have found!</b><p>More Budget Retreats</p></a>'), Cookies.set("lowestPrice", e)
    }
}), $(function() {
    function e() {
        $(".wrapper-img-placeholder").each(function() {
            if (elementInViewport($(this)[0])) {
                var e = $(this).attr("data-image-large");
                768 > $(window).width() && (e = $(this).attr("data-image-medium")), $(this).append('<img class="image-preloader" src="' + e + '">'), $(".image-preloader").on("load", function() {
                    $(this).parent().parent().parent().append('<div class="wrapper-img-loaded" style="background-image:url(' + $(this).attr("src") + ');"></div>'), $(this).parent().parent().parent().find(".wrapper-img-loaded").fadeIn(800), $(this).remove()
                })
            }
        })
    }
    setTimeout(function() {
        e(), $(window).scroll(function() {
            e()
        })
    }, 300)
}), $(function() {
    767 > $(window).width() && $(".showcard_summary_container").on("click", function(e) {
        var t = e.target;
        if (0 == $(t).closest(".showcard_summary_overlay").length) {
            $(".showcard_summary_overlay").remove();
            var a = $(this).closest(".tile").find(".cta-holder a");
            if ($(this).closest(".showcard").find(".showcard__button").length) a = $(this).closest(".showcard").find(".showcard__button");
            $(this).append('\n\t\t\t\t\t<div class="showcard_summary_overlay">\n\t\t\t\t\t\t<div class="showcard_summary_overlay_backdrop"></div>\n\t\t\t\t\t\t<div class="showcard_summary_overlay_container">\n\t\t\t\t\t\t\t' + $(this).html() + '\n\t\t\t\t\t\t\t<a href="' + $(a).attr("href") + '" target="_blank" class="showcard_summary_overlay_cta">' + $(a).text() + '</a>\n\t\t\t\t\t\t\t<div class="showcard_summary_overlay_killer"><div class="ebs-icon ebs-icon-close fc-1"></div></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t'), $(".showcard_summary_overlay_killer").on("click", function() {
                $(this).closest(".showcard_summary_overlay").fadeOut(1e3).remove()
            })
        }
    })
}), $(function() {
    if ("undefined" != typeof promo_badges && promo_badges) {
        var e = [{
            type: "gift",
            text: "Gifts included"
        }, {
            type: "sale",
            text: "-33%"
        }, {
            type: "deal",
            text: "Deal available"
        }, {
            type: "deal",
            text: "Early bird deal"
        }];
        shuffle(e), $(".tile,.listing-query-box,#listing-query-box").each(function(t) {
            e[t] && ($(this).attr("data-promo-type", e[t].type), $(this).attr("data-promo-text", e[t].text))
        }), $("[data-promo-type][data-promo-text]").each(function() {
            $(this).append('\n\t\t\t\t\t<div class="promo_badge promo_badge_' + $(this).attr("data-promo-type") + '">\n\t\t\t\t\t\t<div class="promo_badge_background"></div>\n\t\t\t\t\t\t<div class="promo_badge_text">' + $(this).attr("data-promo-text") + "</div>\n\t\t\t\t\t</div>\n\t\t\t\t"), 5 > $(this).attr("data-promo-text").length && $(this).find(".promo_badge").addClass("promo_badge_scaled")
        })
    }
}), $(function() {
    $(".sf_filter_group").each(function() {
        $(this).find(".selected").length && $(this).addClass("active")
    }), $(".sf_filter_group_title").click(function() {
        $(this).closest(".sf_filter_group").toggleClass("active")
    })
}), $(function() {
    if ($("#sf_item_arrival_toggle").length) {
        var e = function() {
            $("#sf_item_arrival .js-arrival-toggle").toggleClass("selected"), $("#sf_item_arrival").toggleClass("hidden"), $("#sf_item_arrival").closest(".sf_item_list").addClass("noMaxHeight"), $(".js-arrival-toggle").addClass("hidden"), gae("sidebar_filters", "sf_arrival_date_calendar_toggle")
        };
        $(".js-arrival-toggle").click(function() {
            e()
        }), -1 != window.location.href.indexOf("arrival_date") && -1 != window.location.href.indexOf("flexible") && e()
    }
}), $(function() {
    function e() {
        gae("structured_packages", "sp_inquiry_event"), setTimeout(function() {
            $("#structured_packages_modal").modal("hide"), $("#easy_inquiry_modal").modal("show")
        }, 300)
    }
    if ($(".package-card").each(function() {
            $(this).find(".package-card__image").each(function(e) {
                5 > e && (200 < $(this).width() ? $(this).css("background-image", "url(" + $(this).attr("data-image-l") + ")") : $(this).css("background-image", "url(" + $(this).attr("data-image-s") + ")"))
            })
        }), $(".listing-query-box__availability *").each(function(e, t) {
            "" === $.trim($(t).text()) && $(t).remove()
        }), $(".listing-availability__controls *").click(function() {
            1 < $("#structured_packages .datepicker").length && $("#structured_packages .datepicker")[0].remove()
        }), $("#structured_packages").length) {
        var t = function() {
            var e = $("#structured_packages").offset().top,
                t = $("#structured_packages").offset().top + $("#structured_packages").outerHeight(),
                a = $(window).scrollTop() + window.innerHeight,
                i = $(window).scrollTop();
            a > e && i < t ? $(".js-sidebar-sticky-button").css("display", "none", "important") : $(".js-sidebar-sticky-button").css("display", "")
        };
        $(".js-sidebar-sticky-button").click(function() {
            $("html,body").animate({
                scrollTop: $("#structured_packages").offset().top
            }, 500)
        }), 768 > $(window).width() ? setInterval(t, 300) : $(window).scroll(function() {
            t()
        })
    }
    if ($("#structured_packages").length) {
        var a = 1,
            n = 1,
            r = 1,
            o = 1;
        $(".package-card").each(function() {
            $(this).find(".package-card__descriptions p").each(function() {
                "" == $(this).text() && (a = 0)
            }), 0 == $(this).find(".package-card__facility").length && (n = 0), 0 == $(this).find(".package-card__bedding img").length && (r = 0), 0 == $(this).find(".package-card__image").length && (o = 0)
        }), a || (gae("structured_packages", "sp_quality-no-descriptions"), Cookies.set("sp_quality", 0)), n || (gae("structured_packages", "sp_quality-no-facilities"), Cookies.set("sp_quality", 0)), r || (gae("structured_packages", "sp_quality-no-beddings"), Cookies.set("sp_quality", 0)), o || (gae("structured_packages", "sp_quality-no-images"), Cookies.set("sp_quality", 0)), a && n && r && o && (gae("structured_packages", "sp_quality-has-everything"), Cookies.set("sp_quality", 1))
    }
    $(".package-card").click(function() {
        var e = $(this).closest(".package-card").attr("data-id");
        $("#listing-query-package-id-" + e).closest("label").trigger("click")
    }), $(".package-card__primary-button").click(e), $(".package-card__secondary-button").click(function() {
        gae("structured_packages", "sp_reservation_event")
    }), $(".package-card__gallery,.package-card__description").click(function() {
        gae("structured_packages", "sp_open_modal");
        var t = $(this).closest(".package-card"),
            a = $(t).attr("data-id"),
            n = $(t).find(".package-card__price").html().trim(),
            r = $("#beauty_arrival_date").val() || $(".js-sc1-inquiry-modal-arrival:first").text();
        r || (r = $("#arrival_date_select").val());
        var o = $(".listing-query-box__duration").text().trim(),
            s = $(t).find(".package-card__title").text(),
            l = $(t).find(".package-card__subtitle").text(),
            c = $(t).find(".package-card__people").html().trim(),
            d = $(t).find(".package-card__people[data-title]").attr("data-title");
        if ($(t).find(".package-card__bedding").length) var p = {
            icons: $(t).find(".package-card__bedding").html().trim(),
            title: $(t).find(".package-card__bedding[data-title]").attr("data-title")
        };
        var u = {};
        $(t).find("[data-facility-type]").each(function() {
            var e = $(this).attr("data-facility-type");
            void 0 === u[e] && (u[e] = []), u[e].push($(this).text())
        });
        var h = {};
        $(t).find("[data-description-type]").each(function() {
            var e = $(this).attr("data-description-type");
            void 0 === h[e] && (h[e] = []), h[e].push($(this).text())
        });
        var f = [];
        $(t).find(".package-card__image").each(function() {
            f.push($(this).attr("data-image-l"))
        });
        var m = $(t).find(".package-card__primary-button").text(),
            g = $(t).find(".package-card__secondary-button").text(),
            v = '<div class="spm_cta_wrapper"><div class="spm_cta spm_cta-primary">' + m + '</div><a class="spm_cta spm_cta-secondary" href="' + window.location.pathname + "/inquiry?arrival_date=" + ($("#listing_query_arrival_date.date-picker:last").val() || $("#listing_query_arrival_date").val()) + "&package_id=" + a + '&submit_reservation=Or+request+a+reservation" onclick="gae(\'structured_packages\',\'sp_reservation_event\');"target="_blank">' + g + "</a></div>",
            y = $("<div></div>");
        $(y).append('<div class="spm__gallery"></div>');
        var _ = $(y).find(".spm__gallery");
        for ($(_).append('<div id="spm_swiper" class="swiper-container"><div class="swiper-wrapper"></div><div class="spm_swiper-next" onClick="spm_swiper.slideNext(500);gae(\'structured_packages\',\'sp_gallery_click_next\');"></div><div class="spm_swiper-prev" onClick="spm_swiper.slidePrev(500);gae(\'structured_packages\',\'sp_gallery_click_prev\');"></div></div>'), $(_).append('<div class="spm_thumbnails"></div>'), i = 0; i < f.length; i++) $(_).find(".swiper-wrapper").append('<div class="swiper-slide filter-gingham" style="background-image:url(' + f[i] + ');"></div>'), $(_).find(".spm_thumbnails").append('<div class="spm_thumb" data-index="' + i + '" onclick="spm_swiper.slideTo(' + (i + 1) + ');" style="background-image:url(' + f[i] + ');"></div>');
        $(y).append('<div class="spm__description"></div>');
        var w = $(y).find(".spm__description");
        $(w).append('<p class="spm__title">' + s + "</div>"), $(w).append('<p class="spm__subtitle">' + l + "</div>"), $(w).append('<p class="spm_icon spm__people"><span class="spm_icon-image">' + c + '</span><span class="spm_icon-text">' + d + "</span></div>"), void 0 !== p && $(w).append('<p class="spm_icon spm__bedding"><span class="spm_icon-image">' + p.icons + '</span><span class="spm_icon-text">' + p.title + "</span></div>"), $(w).append('<p class="spm_icon spm__arrival"><span class="spm_icon-image"><img src="/static/files/svg/arrival.svg"></span><span class="spm_icon-text">' + r + " (" + o + ")</span></div>"), $(w).append('<p class="spm_icon spm__price"><span class="spm_icon-image"><img src="/static/files/svg/price.svg"></span><span class="spm_icon-text">' + n + "</span></div>"), $.each(h, function(e, t) {
            if ("" != t) {
                var a = $('<div class="spm__block spm__block-descriptions"></div>');
                $(a).append('<p class="spm__block-title">' + e + "</p>"), $(a).append('<p class="spm__block-text">' + t + "</p>"), $(w).append(a)
            }
        }), $.each(u, function(e, t) {
            if (0 < t.length) {
                var a = $('<div class="spm__block spm__block-facilities"></div>');
                for ($(a).append('<p class="spm__block-title">' + e + "</p>"), $(a).append("<ul></ul>"), i = 0; i < t.length; i++) $(a).find("ul").append("<li>" + t[i] + "</li>");
                $(w).append(a)
            }
        }), $(w).append($(".js-payment-message").html()), $(y).append(v), $("#structured_packages_modal .modal-body").html("").append(y), $("#structured_packages_modal").modal("show"), $("body").css("overflow", "hidden"), $("#structured_packages_modal").on("hidden.bs.modal", function() {
            $("#structured_packages_modal").off("hidden.bs.modal"), $("body").css("overflow", "")
        }), 768 > $(window).width() && $("#structured_packages_modal .spm_cta_wrapper").detach().appendTo("#structured_packages_modal .form-wrapper"), $(".spm_cta-primary").click(e), window.spm_swiper = new Swiper("#spm_swiper", {
            loop: !0,
            autoplay: 1500,
            navigation: {
                nextEl: ".spm_swiper-next",
                prevEl: ".spm_swiper-prev"
            },
            onSlideChangeEnd: function(e) {
                $(".spm_thumb").removeClass("active"), $('.spm_thumb[data-index="' + e.realIndex + '"]').addClass("active")
            }
        })
    }), "undefined" != typeof lp_structured_packages_confirmation && (+Cookies.get("sp_quality") ? gae("structured_packages", "sp_confirmation-1") : gae("structured_packages", "sp_confirmation-0"))
});
var filters = ["filter-1977", "filter-aden", "filter-amaro", "filter-ashby", "filter-brannan", "filter-brooklyn", "filter-charmes", "filter-clarendon", "filter-crema", "filter-dogpatch", "filter-earlybird", "filter-gingham", "filter-ginza", "filter-hefe", "filter-helena", "filter-hudson", "filter-inkwell", "filter-kelvin", "filter-juno", "filter-lark", "filter-lofi", "filter-ludwig", "filter-maven", "filter-mayfair", "filter-moon", "filter-nashville", "filter-perpetua", "filter-poprocket", "filter-reyes", "filter-rise", "filter-sierra", "filter-skyline", "filter-slumber", "filter-stinson", "filter-sutro", "filter-toaster", "filter-valencia", "filter-vesper", "filter-walden", "filter-willow", "filter-xpro-ii"];

function addFilters(e) {
    $(".showcard__image, .hero-background-container").each(function() {
        for (var t, a = $(this).attr("class").split(" "), i = [], n = 0; n < a.length; n++) t = a[n].search(/filter+/), t && (i[i.length] = a[n]);
        $(this).removeClass().addClass(i.join(" ")), $(this).addClass(filters[e])
    })
}

function getInstructorId() {
    var e = 0;
    $("#inpInstructor").val();
    return e = $("#inpInstructor").find("option:selected").prop("id"), 0 < $("#instructorBlock_" + e).length && (e = -1), e
}

function instructorsReview() {
    var e = getInstructorId(),
        t = $("#inpInstructor").val();
    if ($("#inpInstructor").val(""), 0 < e) {
        var a = $("#instructorReviewBlock").clone().prop("id", "instructorBlock_" + e);
        a.prop("class", "instructor_block"), a.appendTo("#instructorsContainer"), $("#instructorBlock_" + e + " label[name=remove]").each(function() {
            $(this).prop("id", e)
        }), $("#instructorBlock_" + e + " label[name=instructorName]").each(function() {
            $(this).text(t), $(this).prop("id", "instructorName_" + e)
        }), $("#instructorBlock_" + e + " input[name=review-instructor]").each(function() {
            $(this).prop("name", "review_instructor_" + e), $(this).prop("id", "review_instructor_" + e)
        }), $("#instructorBlock_" + e + " input[name=instructor]").each(function(t) {
            $(this).prop("name", "instructor_" + e), $(this).prop("id", "r_" + e + "_" + t + 1)
        }), $("#instructorBlock_" + e + " input[name=instructor]").each(function(t) {
            $(this).prop("name", "instructor_" + e), $(this).prop("id", "r_" + e + "_" + t + 1)
        }), $("#instructorBlock_" + e + " label[name=opText]").each(function(t) {
            $(this).prop("for", "r_" + e + "_" + t + 1)
        })
    }
    return $("#instructor-review-overlay").show(200), !1
}

function closeInstructorReviews() {
    return $("#instructor-review-overlay").hide(200), !1
}

function confirmSubmitReview() {
    return $("#customer-country").val($("#country-name").text()), loadReviewModalData(), $("#review-confirm-overlay").modal("show"), !1
}

function loadReviewModalData() {
    var e = parseInt($("input[name=isAnonymous]:checked").val()) + 1;
    $("#name-text").text($("#ri0" + e + "-text").text()), loadRadioOption("qualityOfActivity", "#quality-activity-text"), loadRadioOption("accommodationAndFacilities", "#acc-facilities-text"), loadRadioOption("food", "#food-text"), loadRadioOption("location", "#location-text"), loadRadioOption("valueForMoney", "#value-for-money-text"), loadInstructorsSummary(), $("#highlight-text").text($("#review-highlight").val()), $("#what-good-text").text($("#review-text-pros").val()), $("#what-not-good-text").text($("#review-text-cons").val()), loadRadioOption("overallImpression", "#overall-text")
}

function loadRadioOption(e, t) {
    var a = $("input[name=" + e + "]:checked").prop("id");
    void 0 != a && $(t).text($("#" + a + "-text").text())
}

function closeConfirmOverlay() {
    $("#review-confirm-overlay").modal("hide")
}

function loadInstructorsSummary() {
    $("#instructor-text").text(""), $("#instructorsContainer div[class=instructor_block]").each(function() {
        var e = $(this).prop("id");
        e = e.replace("instructorBlock_", "");
        var t = $("#instructorName_" + e).text(),
            a = $("#review_instructor_" + e).val();
        $("#instructor-text").append("<br><strong>" + t + ": </strong>" + a + "<br>")
    })
}

function removeInstructor(e) {
    $("#instructorBlock_" + e.id).remove(), 0 == $("#instructorsContainer").children().length && $("#instructor-review-overlay").hide(200)
}
$(function() {
    $(".tp_prominent_destinations").length && $(document).keypress(function(e) {
        $(".tp_prominent_destinations").hasClass("expanded") || 13 == e.which || ($(".tp_prominent_destinations").toggleClass("expanded"), $(".tp_prominent_destinations").hasClass("expanded") && $(".js_sf_dropdown_filtering").focus())
    })
}), $(function() {
    $(".showcard__review-highlight").each(function() {
        $(this).closest(".showcard").addClass("showcard--review-highlighted")
    })
}), $(function() {
    var e = function() {
        $(".dropdown").removeClass("show"), $("*").removeClass("dropdown-open")
    };
    $(".dropdown-toggler").click(function() {
        var t = $(this),
            a = ($(this).parent(), t.find(".dropdown").first()),
            i = a.hasClass("show");
        return e(), i ? (a.removeClass("show"), void t.removeClass("dropdown-open")) : (a.addClass("show"), t.addClass("dropdown-open"), 1024 > $(window).width() && $("html,body").scrollTop(t.offset().top - 10), !1)
    }), $(document).click(function(t) {
        var a = t.target;
        $(a).is(".dropdown-toggler") || $(a).parents().is(".dropdown-toggler") || e()
    })
}), $(function() {
    var e = "sm";
    768 <= $(window).width() && 1024 > $(window).width() ? e = "md" : 1024 <= $(window).width() && (e = "lg"), $(".js-responsive").each(function() {
        $(this).attr("data-responsive-img-" + e) ? $(this).append('<img src="' + $(this).attr("data-responsive-img-" + e) + '">') : $(this).attr("data-responsive-bg-" + e) && $(this).css("background", "center no-repeat url(" + $(this).attr("data-responsive-bg-" + e) + ")").css("background-size", "cover")
    })
}), $(function() {
    $("#review_highlight_title").length && $("#review_highlight_title input").on("keyup", function() {
        var e = $("#review_highlight_title .review_limit_chars"),
            t = $("#review_highlight_title input"),
            a = t.attr("maxlength") - t.val().length;
        $(e).text(a), 10 > a ? $(e).addClass("review_limit_warning") : $(e).removeClass("review_limit_warning"), 0 == a ? $(t).addClass("review_input_warning") : $(t).removeClass("review_input_warning")
    })
}), $(function() {
    150 > $("#reviews-wrapper").height() && $("#reviews-wrapper").hide(), $("#button_confirm").on("click", function() {
        $("#review_form").submit()
    })
}), $(function() {
    $(".label_security_code").length && $(".label_security_code i").hover(function() {
        $(this).parent().parent().find(".popover").toggle()
    })
}), $(function() {
    $(".pre-payment-form-container").length && ($('input[name="prepayment-selected"]').change(function() {
        $(this).is(":checked") ? ($(".js-hide-on-pre-payment").slideUp(), $(".js-show-on-pre-payment").slideDown()) : ($(".js-hide-on-pre-payment").slideDown(), $(".js-show-on-pre-payment").slideUp())
    }), $('input[name="prepayment-selected"]').is(":checked") && ($(".js-hide-on-pre-payment").hide(), $(".js-show-on-pre-payment").show())), $(".js-instant-payment-form").length && ("instant" == $('input[name="js-prepayment-button"]').val() ? $(".prepayment-selected").val("on") : $(".prepayment-selected").val("off"), $('input[name="js-prepayment-button"]').change(function() {
        $("#prepayment-not-selected").is(":checked") ? ($(".prepayment-selected").val("off"), $(".js-hide-on-pre-payment").slideDown(), $(".js-show-on-pre-payment").slideUp()) : ($(".prepayment-selected").val("on"), $(".js-hide-on-pre-payment").slideUp(), $(".js-show-on-pre-payment").slideDown())
    }), $('input[name="prepayment-selected"]').is(":checked") && ($(".js-hide-on-pre-payment").hide(), $(".js-show-on-pre-payment").show())), $(".prepayment-toggle-buttons").length && $('.prepayment-toggle-buttons input[type="radio"]').change(function() {
        $(this).parents(".prepayment-toggle-buttons").find("label").removeClass("active"), $(this).parents(".prepayment-toggle-buttons").find('input[type="radio"]').attr("checked", !1), $(this).parent("label").addClass("active"), $(this).attr("checked", !0)
    })
}), $(function() {
    function e() {
        $(".search-hero-input-container").removeClass("active"), $(window).off("scroll", e)
    }
    if ($(".search-hero-suggestions").length && "undefined" != typeof destination && "undefined" != typeof arrival) {
        if ($(".search-hero-suggestions").length)
            for (i = 0; i < destination.popular.length; i++) $(".search-hero-suggestions").append('<a href="' + destination.popular[i].href + '" target="_blank">' + destination.popular[i].title + "</a>");
        if ($("#search-hero-destinations").length) {
            for ($("#search-hero-destinations").parent().find(".search-hero-dropdown").append('\n                    <div class="js-close closer"><div class="ebs-icon ebs-icon-close fc-1"></div></div>\n                    <div class="search-hero-dd-mobileHeader"><input type="text" placeholder="' + $("#search-hero-destinations").attr("placeholder") + '"></div>\n                    <div class="search-hero-dropdown-content">\n                        <div class="search-hero-dd-autocompleteDestination hidden"></div>\n                        <div class="search-hero-dd-recentDestination"><p>Recent searches</p></div>\n                        <div class="search-hero-dd-popularDestination"><p>Popular searches</p></div>\n                    </div>\n                '), $("#search-hero-destinations").parent().find(".search-hero-dd-mobileHeader input").on("keyup", function() {
                    $("#search-hero-destinations").val($(this).val()), $("#search-hero-destinations").trigger("keyup")
                }), i = 0; i < destination.recent.length; i++) $("#search-hero-destinations").parent().find(".search-hero-dd-recentDestination").append('<a href="' + destination.recent[i].href + '" target="_blank">' + destination.recent[i].title + "</a>");
            for (i = 0; i < destination.popular.length; i++) $("#search-hero-destinations").parent().find(".search-hero-dd-popularDestination").append('<a href="' + destination.popular[i].href + '" target="_blank">' + destination.popular[i].title + "</a>")
        }
        if ($("#search-hero-arrival").length) {
            for ($("#search-hero-arrival").parent().find(".search-hero-dropdown").append('\n                    <div class="js-close closer"><div class="ebs-icon ebs-icon-close fc-1"></div></div>\n                    <div class="search-hero-dd-mobileHeader"><input id="search-hero-arrival-inputHeader" type="text" disabled="disabled" value="' + $("#search-hero-arrival").attr("placeholder") + '"></div>\n                    <div class="search-hero-dropdown-content">\n                        <div class="search-hero-dd-arrivalDatepicker"></div>\n                        <div class="search-hero-dd-popularArrival"><p>Popular arrival dates</p></div>\n                    </div>\n                '), i = 0; i < arrival.popular.length; i++) $("#search-hero-arrival").parent().find(".search-hero-dd-popularArrival").append('<a href="' + arrival.popular[i].href + '" target="_blank">' + arrival.popular[i].title + "</a>");
            $(".search-hero-dd-arrivalDatepicker").datepicker({
                todayHighlight: !0,
                weekStart: 1,
                minDate: -1,
                inline: !0
            }).on("changeDate", function(t) {
                $("#search-hero-arrival, #search-hero-arrival-inputHeader").val(t.format("yyyy-mm-dd")), e()
            })
        }
    }
    $(".search-hero-input-container > input").on("focus", function(t) {
        e(), $(t.target).closest(".search-hero-input-container").addClass("active"), 767 < $(window).width() ? $(window).on("scroll", e) : $(t.target).closest(".search-hero-input-container").find(".search-hero-dd-mobileHeader input").focus()
    }), $(".search-hero-input-container .js-close").on("click", function(e) {
        $(e.target).closest(".search-hero-input-container").removeClass("active")
    }), $(document).keyup(function(t) {
        27 === t.keyCode && e()
    }), $("#search-hero-destinations").on("keyup", function(e) {
        clearTimeout(window.autocompleteTimeout), window.query = $(this).val(), 37 === e.keyCode || 38 === e.keyCode || 39 === e.keyCode || 40 === e.keyCode || (window.autocompleteTimeout = setTimeout(function() {
            if (2 < window.query.length) $.getJSON("/searchresults/autocomplete?q=" + encodeURIComponent(window.query), function(e) {
                var t = [];
                $.each(e.suggestions, function(e, a) {
                    var n = window.query.toLowerCase().split(" "),
                        r = a.toLowerCase();
                    for (i = 0; i < n.length; i++) r = r.replace(n[i], "<b>" + n[i] + "</b>");
                    r = r.replace(/,/g, ", "), t.push("<li><a href='#' style='text-transform: capitalize;'>" + r + "</a></li>")
                });
                var a = $(".search-hero-dd-autocompleteDestination");
                $(a).removeClass("hidden"), $(a).html("<ul>" + t.join("") + "</ul>"), $(a).find("li").on("click", function() {
                    $("#search-hero-destinations").val($(this).text().replace(/\b\w/g, function(e) {
                        return e.toUpperCase()
                    }))
                })
            });
            else {
                var e = $(".search-hero-dd-autocompleteDestination");
                $(e).addClass("hidden")
            }
        }, 100))
    }), $(".search-hero-input-cta").on("click", function() {
        alert("Now you are redirected to: " + $("#search-hero-destinations").val() + " on " + $("#search-hero-arrival").val() + ". Congratulations! 🎉")
    })
}), $(function() {
    if ($("#sr-price-button").on("click", function() {
            var e = window.location.search,
                t = $("#sr-price-min").val(),
                a = $("#sr-price-max").val();
            e = removeQueryStringParameter(e = removeQueryStringParameter(e = removeQueryStringParameter(e, "price_min"), "price_max"), "page"), a && +a >= parseInt($("#sr-price-max").attr("min")) && (e = addQueryStringParameter(e, "price_max", 100 * a)), t && +t <= parseInt($("#sr-price-min").attr("max")) && (e = addQueryStringParameter(e, "price_min", 100 * t)), window.location.search = e, $(".fullscreen-loader").length && $(".fullscreen-loader").css("display", "table")
        }), $("#bisection-sympton-found-buttoun").on("click", function() {
            var e = window.location.search;
            e = addQueryStringParameter(e = removeQueryStringParameter(e, "_exp_bisect"), "_exp_bisect", "1"), window.location.search = decodeURIComponent(e)
        }), $("#bisection-sympton-not-found-buttoun").on("click", function() {
            var e = window.location.search;
            e = addQueryStringParameter(e = removeQueryStringParameter(e, "_exp_bisect"), "_exp_bisect", "0"), window.location.search = decodeURIComponent(e)
        }), $(window).on("load", function() {
            if (void 0 !== document.getElementsByClassName("price-filter")[0]) var e = document.getElementsByClassName("price-filter")[0].getElementsByClassName("error-wrapper")[0];
            var t = function(e) {
                    return '<div class="alert-container"><div class="alert alert-error">' + e + "</div></div>"
                },
                a = function() {
                    var a = $("#sr-price-min"),
                        i = a.val(),
                        n = +i,
                        r = +a.attr("max"),
                        o = $("#sr-price-max"),
                        s = o.val(),
                        l = +s,
                        c = +o.attr("min"),
                        d = !0,
                        p = "";
                    i && s && n > l && (d = !1, p = t(warningIncorrectRange)), d && s && l < c && (d = !1, p = t(warningOutOfRangeMax)), d && i && n > r && (d = !1, p = t(warningOutOfRangeMin)), e.innerHTML = p, $("#sr-price-button").prop("disabled", !d)
                };
            $("#sr-price-min, #sr-price-max").on("change", function() {
                a()
            }), $("#sr-price-min, #sr-price-max").keyup(function(e) {
                a(), 13 == e.which && ($("#sr-price-button").prop("disabled") ? e.preventDefault() : $("#sr-price-button").trigger("click"))
            })
        }), $(".sr-price-button-reset").on("click", function() {
            var e = window.location.search;
            return e = removeQueryStringParameter(e = removeQueryStringParameter(e = removeQueryStringParameter(e, "price_min"), "price_max"), "page"), window.location.search = e, !1
        }), $(".sr-filter-wrpr input[type=checkbox]").change(function() {
            var e = window.location.search,
                t = $(this).attr("name");
            $(this).prop("checked") ? -1 == t.indexOf("durationOption") ? e = addQueryStringParameter(e, t, $(this).val()) : "durationOption1" == t ? e = addQueryStringParameter(e, "duration_option", 1) : "durationOption2" == t ? e = addQueryStringParameter(e, "duration_option", 2) : "durationOption3" == t ? e = addQueryStringParameter(e, "duration_option", 3) : "durationOption4" == t && (e = addQueryStringParameter(e, "duration_option", 4)) : -1 == t.indexOf("durationOption") ? e = removeQueryStringParameter(e, t, $(this).val()) : "durationOption1" == t ? e = removeQueryStringParameter(e, "duration_option", 1) : "durationOption2" == t ? e = removeQueryStringParameter(e, "duration_option", 2) : "durationOption3" == t ? e = removeQueryStringParameter(e, "duration_option", 3) : "durationOption4" == t && (e = removeQueryStringParameter(e, "duration_option", 4)), $(".fullscreen-loader").length && $(".fullscreen-loader").css("display", "table"), e = removeQueryStringParameter(e, "page"), window.location.search = e
        }), $("h3.filter-title").each(function() {
            0 < $(this).children("a.sr-filters-clear-btn").length && $(this).closest(".sr-filter-wrpr").addClass("selected")
        }).click(function() {
            1 > $(this).children("a.sr-filters-clear-btn").length && $(this).siblings(".filter-holder, .sr-popular").slideToggle()
        }), $(".sr-sidebar #available-dates").click(function() {
            return (!$(this).hasClass("selected") || $("#fixed_mobile_nav").is(":visible")) && $(this).parent().find("#availability-options").slideToggle(), !1
        }), $(".sr-sidebar .filter-option").click(function() {
            $(".fullscreen-loader").css("display", "table")
        }), $("#fixed_mobile_nav").length) {
        var e = function() {
                var e = $(window).scrollTop();
                $(".mobile_filters_active").length || e > t && e < a ? $("#fixed_mobile_nav").addClass("stickit") : $("#fixed_mobile_nav").removeClass("stickit")
            },
            t = $("#fixed_mobile_nav").offset().top,
            a = $(".content-box").offset().top + $(".content-box").outerHeight();
        $(window).scroll(function() {
            $("#fixed_mobile_nav").offset().top, $(".content-box").offset().top, $(".content-box").outerHeight();
            e()
        }), $(window).resize(e)
    }
}), $(function() {
    if (console.log("showcard-rebrand test"), 767 < $(window).width()) {
        var e = $(".js-showcard-link");
        console.log("showcards test:", e), e.attr("target", "_blank")
    }
}), $(function() {
    var e = $(window).width();
    $(".showcards .showcard").hover(function() {
        if (1024 < e) {
            var t = $(this).find("a").attr("href").split("?")[0];
            $.ajax({
                type: "GET",
                url: t + "/json/",
                context: this,
                data: {
                    json: !0,
                    card: !0
                },
                async: !0
            }).done(function(e) {
                if (e && !e.isError && void 0 !== e.images) {
                    $(this).addClass("card_slideshow");
                    var t = $(this).find(".wrapper-img");
                    for (i = 1; i < Math.min(e.images.length, 6); i++) $(t).append('<img class="hide" src="' + e.images[i].extraLarge + '">');
                    $(t).append('<img class="hide" src="' + e.images[0].extraLarge + '">'), $(this).addClass("card_slideshow")
                }! function(e) {
                    var t = [];
                    e = $(e).find(".wrapper-img"), t = $(e).find("img"), $(e).parent().find(".wrapper-img-loaded").length && (e = $(e).parent().find(".wrapper-img-loaded"), t = $(e).parent().find("img"));
                    var a = 0;
                    clearInterval(window.card_slideshow_interval), window.card_slideshow_interval = setInterval(function() {
                        a++, void 0 == $(t[a]).attr("src") && (a = 0);
                        var i = $(t[a]).attr("src");
                        $(e).css("background-image", "url(" + i + ")")
                    }, 1e3)
                }(this)
            })
        }
    }, function() {
        clearInterval(window.card_slideshow_interval)
    })
}), $(function() {
    $(".sidebar_filters").length && ($(".sidebar_filters .sf_item_list").each(function() {
        6 < $(this).find("li").length && ($(this).addClass("ellipsis"), $(this).addClass("collapsed"), 0 < $(this).find("li.selected").length && "sf_destinations" == $(this).attr("id") && $(this).addClass("collapsedFull"), $(this).find(".expander").click(function() {
            $(this).closest(".sf_item_list").removeClass("ellipsis"), $(this).parent().removeClass("collapsed").removeClass("collapsedFull")
        }))
    }), $(".sidebar_filters .sf_item").click(function() {
        gae("sidebar_filters", $(this).attr("id"))
    }), $(".sidebar_filters #availability-options *").click(function() {
        clearTimeout(window.sf_arrival_calendar), window.sf_arrival_calendar = setTimeout(function() {
            gae("sidebar_filters", "sf_arrival_calendar")
        }, 200)
    }), $(".js-destinations-dropdown").click(function(e) {
        0 == $(e.target).closest(".sf_dropdown_content").length && ($(this).toggleClass("expanded"), $(this).hasClass("expanded") && $(".js_sf_dropdown_filtering").focus())
    }), $(document).click(function(e) {
        0 == $(e.target).closest(".sf_separate_field").length && $(".js-destinations-dropdown").removeClass("expanded")
    }), $(document).keyup(function(e) {
        if (13 === e.keyCode) {
            var t = $(".sf_dropdown_content[data-lucky]").attr("data-lucky");
            t && (gae("sidebar_filters_query", "Enter Key"), window.location.href = t)
        }
        27 === e.keyCode && $(".js-destinations-dropdown").removeClass("expanded")
    }), $(".js_sf_dropdown_filtering").keyup(function() {
        var e = $(this).val().toLowerCase();
        clearTimeout(window.sf_destinations_filtering), window.sf_destinations_filtering = setTimeout(function() {
            gae("sidebar_filters_query", e)
        }, 300);
        var t = 0;
        $(this).closest(".sf_dropdown_content").find(".sf_dropdown_filtering__noresults").addClass("hidden"), $(this).closest(".sf_dropdown_content").find(".ddc_wrapper a").each(function() {
            -1 < $(this).text().toLowerCase().indexOf(e) ? (0 == t && $(this).closest(".sf_dropdown_content").attr("data-lucky", $(this).attr("href")), $(this).removeClass("hidden"), $(this).parent().find(".ddc_1").removeClass("hidden"), t++) : $(this).addClass("hidden")
        }), 0 == t && ($(this).closest(".sf_dropdown_content").find(".ddc_wrapper a").removeClass("hidden"), $(this).closest(".sf_dropdown_content").find(".sf_dropdown_filtering__noresults").removeClass("hidden")), $(".ddc_wrapper").each(function() {
            $(this).find("a:not(.hidden)").length ? $(this).removeClass("hidden") : $(this).addClass("hidden")
        })
    }), $(".sf_field input").each(function() {
        $(this).focus(function() {
            $(this).closest(".sf_item_list").removeClass("ellipsis"), $(this).closest(".collapsed").removeClass("collapsed").removeClass("collapsedFull")
        }), $(this).keyup(function(e) {
            var t = e.which;
            if (13 == t) {
                var a = $(this).closest(".sf_item_list").find("li:visible a[href]").first().attr("href");
                return a && (window.location.href = a), !1
            }
            if (27 == t) return $(this).val(""), $(this).closest(".sf_item_list").find("li").show(), !1;
            var i = $(this).val().toLowerCase();
            2 < i.length && ($(this).closest(".sf_item_list").removeClass("ellipsis"), $(this).closest(".sf_item_list").find("li").each(function() {
                -1 < $(this).text().toLowerCase().indexOf(i) || -1 < $(this).text().toLowerCase().indexOf("usa") && -1 < "united states of america".indexOf(i) ? ($(this).show(), 0) : $(this).hide()
            })), 2 < i.length || $(this).closest(".sf_item_list").find("li").show().addClass("ellipsis"), 2 < i.length && (clearTimeout(window.sf_destination_query), window.sf_destination_query = setTimeout(function() {
                gae("sidebar_filters_query", i)
            }, 500))
        })
    }))
}), $("#sf_item_arrival").css("display", "none"), $(function() {
    if ($("[data-social-widget]").length) {
        var e = window.location.href; - 1 < e.indexOf("/inquiry/") && (e = (e = e.split("/inquiry/"))[0] + "/?utm_source=cp_share&utm_medium=cp_share&utm_campaign=cp_share");
        var t = document.title;
        if ($(".sp-image").length) var a = $(".sp-image")[0].src;
        else a = "";
        var n = [{
            u: "https://www.facebook.com/sharer.php?u=" + e,
            n: "Facebook",
            c: "all",
            t: "_blank"
        }, {
            u: "https://twitter.com/intent/tweet?url=" + e,
            n: "Twitter",
            c: "all",
            t: "_blank"
        }, {
            u: "http://www.stumbleupon.com/submit?url=" + e + "&title=" + t,
            n: "Stumbleupon",
            c: "desktop",
            t: "_blank"
        }, {
            u: "https://pinterest.com/pin/create/bookmarklet/?media=" + a + "&url=" + e + "&description=" + t,
            n: "Pinterest",
            c: "desktop",
            t: "_blank"
        }, {
            u: "https://www.linkedin.com/shareArticle?mini=true&url=" + e + "&title=" + t,
            n: "Linkedin",
            c: "desktop",
            t: "_blank"
        }, {
            u: "whatsapp://send?text=" + e,
            n: "Whatsapp",
            c: "mobile",
            t: "_blank"
        }, {
            u: "fb-messenger://share?link=" + e,
            n: "Messenger",
            c: "mobile",
            t: "_blank"
        }, {
            u: "mailto:?subject=" + t + "&body=" + e,
            n: "Mail",
            c: "all",
            t: "_self"
        }];
        $("[data-social-widget]").each(function() {
            var e = "";
            for (i = 0; i < n.length; i++) e += '<a href="' + encodeURI(n[i].u) + '" target="' + n[i].t + '" data-social-network="' + n[i].n.toLowerCase() + '" class="socialbutton social' + n[i].c + " social" + n[i].n.toLowerCase() + '"></a>';
            $(this).html('<div class="socialwidget social' + $(this).attr("data-social-widget") + '">' + e + "</div>"), $(this).find(".socialbutton").on("click", function() {
                gae("social_widget", $(this).parent().parent().attr("data-social-track") + "_" + $(this).attr("data-social-network"))
            })
        })
    }
});
var __ctaStickyMode = 0,
    __ctaStickyLeft = -1,
    __ctaStickyClasses = "";

function updateMainCTA0() {
    var e = $("#sticky-reserve");
    if (window.matchMedia("all and (max-width: 480px)").matches) {
        var t = $(".gototop-btn");
        e && e.position() && e.position().top && e.position().top > $(window).height() ? t.css("bottom", "") : t.css("bottom", e.height() + 30 + "px")
    }
    if (0 < e.length) {
        var a = __ctaStickyMode,
            i = $(window),
            n = $("#sticky-top-anchor"),
            r = $("footer");
        if (0 < n.length && 0 < r.length) {
            var o = i.scrollTop(),
                s = o + i.innerHeight(),
                l = "sticky sticky-bot box white fixed",
                c = n.offset().top;
            if (c <= o || c > s - e.outerHeight()) {
                0 == a && e.addClass(l);
                var d = parseInt((r.css("marginTop") || "").replace("px", ""));
                s >= r.offset().top - d ? (2 != a && (e.removeClass("sticky"), e.addClass("sticky-abs"), e.css({
                    bottom: 0
                })), a = 2) : (2 == a && (e.removeClass("sticky-abs"), e.addClass("sticky")), 1 != a && e.css({
                    bottom: 0
                }), a = 1);
                var p = e.parent().offset().left - e.offsetParent().offset().left;
                p != __ctaStickyLeft && (__ctaStickyLeft = p, e.css({
                    left: p
                }))
            } else 0 != a && e.removeClass(l), a = 0;
            __ctaStickyMode = a
        }
    }
}
var datePicked_ = !1,
    dateShown_ = !1;

function initStickyCTA() {
    $(window).scroll(updateMainCTA0), $(window).resize(updateMainCTA0), $(window).bind("touchmove", updateMainCTA0), $(window).bind("touchend", updateMainCTA0);
    var e = $("#listing_query_arrival_date.date-picker");
    e.on("changeDate", function() {
        dateShown_ && (datePicked_ = !0)
    }), e.on("click", function() {
        dateShown_ = !0
    }), e.on("show", function() {
        dateShown_ = !0
    });
    var t = function() {
        var e = $("#sticky-reserve"),
            t = $(window),
            a = $("#sticky-top-anchor"),
            i = t.scrollTop(),
            n = i + t.innerHeight(),
            r = a.offset();
        if (r && r.top) {
            var o = r.top;
            if (o <= i || o > n - (e.outerHeight() - .8 * $("#listing_side_list").outerHeight())) {
                var s = 5 + o + e.outerHeight() - t.innerHeight();
                return $("html, body").animate({
                    scrollTop: s
                }, 400), $(this).blur(), !1
            }
        }
    };
    $("#inquiry-query-submit, #reservation-query-submit").on("click", t), $("#inquiry-query-submit, #reservation-query-submit").on("touchstart", t), setTimeout(updateMainCTA0, 150)
}
if ($(function() {
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && 1025 > $(window).width() && $("#sticky-reserve").length && $(document).on("scroll", function() {
            clearTimeout(window.ios_fixed_cta_fix_to), $("#sticky-reserve").addClass("ios_fixed_cta_fix"), window.ios_fixed_cta_fix_to = setTimeout(function() {
                $("#sticky-reserve").removeClass("ios_fixed_cta_fix")
            }, 50)
        })
    }), $(function() {
        $("#survey-close, #make-survey").click(function() {
            $.post("/close_survey", function() {})
        }), $("#survey-close_tech, #make-survey_tech").click(function() {
            $.post("/close_survey_tech", function() {})
        }), $("#survey-close_2, #make-survey_2").click(function() {
            $.post("/close_survey_2", function() {})
        })
    }), $(function() {
        $("[data-warning]").each(function() {
            var e = $(this).attr("data-warning"),
                t = +Cookies.get("warning-" + e) || 0;
            3 > t && ($(this).css("display", "block"), Cookies.set("warning-" + e, t + 1))
        }), $("[data-warning] .close").unbind(), $("[data-warning] .close").click(function() {
            console.log("close");
            var e = $(this).closest("[data-warning]").attr("data-warning");
            Cookies.set("warning-" + e, 99), $(this).closest("[data-warning]").remove()
        })
    }), $(function() {
        var e = $(".tp.instant-reservation-wrapper .inst-res-icon-container a"),
            t = $(".tp.instant-reservation-wrapper .inst-res-icon-container .tooltip-inst-res");
        e.on("mouseenter", function(e) {
            t.animate({
                opacity: 1,
                right: "190"
            }, 100).show(), e.preventDefault()
        }), e.on("mouseleave", function(e) {
            t.animate({
                opacity: 0,
                right: "175"
            }, 100).hide(), e.preventDefault()
        })
    }), function() {
        function e() {
            return {
                sending: !1,
                sent: Date.now(),
                items: []
            }
        }

        function t() {
            p || (p = !0, d = new Date)
        }

        function a() {
            p && (p = !1, n(), r("user"))
        }

        function i() {
            p || t(), u = new Date
        }

        function n() {
            var e = Date.now();
            o("user", e - d), d = e
        }

        function r(e) {
            var t = h[e];
            !t.sending && t.items.length && 5e3 <= Date.now() - t.sent && s(e)
        }

        function o(e, t) {
            h[e].items.push(t)
        }

        function s(e) {
            var t = h[e];
            if (!t.sending) {
                t.sending = !0;
                var a = 0;
                for (var i in t.items) a += t.items[i];
                var n = t.items.length;
                !a && n ? (t.items = [], t.sending = !1) : 0 < a ? $.ajax({
                    type: "POST",
                    url: "/track-time/" + viewUUID + "/" + e,
                    data: "t=" + a
                }).done(function() {
                    t.items = t.items.slice(n), t.sending = !1, t.sent = Date.now()
                }).fail(function() {
                    t.sending = !1
                }) : t.sending = !1
            }
        }
        var l, c, d = new Date,
            p = !1,
            u = new Date,
            h = {
                load: e(),
                user: e()
            };
        $(window).on("focus", function() {
            t()
        }), $(window).on("blur", function() {
            a()
        }), $(window).on("unload", function() {
            a(), s("user")
        }), void 0 === document.hidden ? void 0 === document.mozHidden ? void 0 === document.msHidden ? void 0 !== document.webkitHidden && (l = "webkitHidden", c = "webkitvisibilitychange") : (l = "msHidden", c = "msvisibilitychange") : (l = "mozHidden", c = "mozvisibilitychange") : (l = "hidden", c = "visibilitychange"), l && document.addEventListener(c, function() {
            document[l] ? a() : t()
        }, !1), $(window).load(function() {
            "undefined" != typeof loadStart && (o("load", Date.now() - loadStart), s("load")), document.getElementById("perftrack") && setTimeout(function() {
                var e = function() {
                    var e = window.performance;
                    if (e) {
                        var t = {};
                        return ["navigationStart", "unloadEventStart", "unloadEventEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"].forEach(function(a) {
                            t[a] = e.timing[a]
                        }), t
                    }
                    return e
                }();
                if (e) {
                    e.continent = continentCode, e.pageType = parseInt(pageType), e.isBot = isBot ? 1 : 0, e.isNewSession = isNewSession ? 1 : 0;
                    var t = JSON.stringify(e),
                        a = new XMLHttpRequest;
                    a.open("POST", "/track-perf/" + viewUUID, !0), a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), a.send(t)
                }
            }, 0)
        }), $(function() {
            $(document).on("mousemove", i), $(document).on("touchstart", i), $(document).on("scroll", i), $(document).on("keydown", i), $(document).on("mousedown", i)
        }), setInterval(function() {
            var e = new Date;
            p && e - u >= 15e3 && (u = e, a()), p && 333 <= e - d && n(), r("user"), r("load")
        }, 333)
    }(), "undefined" != typeof trustpilot_killswitch && 1 == trustpilot_killswitch) {
    var trustpilotReviews = [{
            img: "https://user-images.trustpilot.com/59db45ef0000ff000ad2a00d/73x73.png",
            name: "Yogaresort AlpenRetreat",
            title: "BookYogaRetreats is really great …",
            body: "BookYogaRetreats is really great service for us. We are running a retreat center and working with their team has always been helpful, easy and smooth. If there was anything they always reacted fast and solved any issues in the shortest possible time. They are a great partner to have. Thank you for your service.",
            date: "Monday, October 9, 2017 - 9:48:42 AM",
            stars: "5",
            link: "/reviews/59db45fa31302a01bc6ca3e5",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/59da4ea20000ff000ad26a4f/73x73.png",
            name: "Lindsey Porter",
            title: "Review of Book Yoga Retreats",
            body: "HI, I'm a Yoga Teacher based in Scotland and we have promoted our Wellbeing Retreats with bookyogaretreats for 3 years now and find their service effective and efficient. It's also great to have your own Account Manager to help support contact and changes. Lindsey Porter Yoganuu.com",
            date: "Sunday, October 8, 2017 - 4:13:30 PM",
            stars: "5",
            link: "/reviews/59da4eaa31302a01bc6c7ae9",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/59da0cf80000ff000ad258cb/73x73.png",
            name: "Perumal Koshy",
            title: "We have been working with Book Yoga …",
            body: "We have been working with Book Yoga Retreats for 3 years now. From the beginning we acquired reservations for our yoga retreats. In addition to that they have provided great support with our queries. They have a great user-friendly system. Book Yoga Retreats team members took the time to speak directly with us when we needed to.  We also noticed that Book Yoga Retreats appeared to have downsized their retreat list. We are pleased to know that Book Yoga Retreats is selective and so we are honored to be on their board of retreats.",
            date: "Sunday, October 8, 2017 - 11:33:35 AM",
            stars: "5",
            link: "/reviews/59da0d0f31302a01bc6c6ce5",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/59d59e860000ff000ad1236c/73x73.png",
            name: "Fabiana Iraci",
            title: "Great attention and excellent website …",
            body: "Great attention and excellent website service !",
            date: "Thursday, October 5, 2017 - 2:53:12 AM",
            stars: "5",
            link: "/reviews/59d59e9831302a0338b6b64b",
            type: "short"
        }, {
            img: "https://user-images.trustpilot.com/59d555df0000ff000ad117e9/73x73.png",
            name: "Rachel Aliwell",
            title: "This is a great website",
            body: "This is a great website. There are so many different retreats and training courses to choose from. Having one site where you can find so many made it so much easier for me to find the right one. I spent a wonderful week in Thailand which has made my love of yoga grow so much more. I would definitely use this site again!",
            date: "Wednesday, October 4, 2017 - 9:43:03 PM",
            stars: "5",
            link: "/reviews/59d555e731302a0338b6af0d",
            type: "customer"
        }, {
            img: "https://user-images.trustpilot.com/59d522950000ff000ad1015f/73x73.png",
            name: "Laura Serrano De Pedro",
            title: "Very good service and easy way of promotion",
            body: "They have an efficient team who is always willing to help. Good means of promotion the different retreats offered on their website and easy layout to work with. I would highly recommend to be in that website. They are always improving their system. We would highly recommend to use Book Yoga Retreats as a way to sell your retreats.",
            date: "Wednesday, October 4, 2017 - 6:04:14 PM",
            stars: "5",
            link: "/reviews/59d5229ed2c875030464317b",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/59d4e3bd0000ff000ad0dfed/73x73.png",
            name: "Istmo Retreat",
            title: "Great and honest and hard working …",
            body: "Great and honest and hard working company that delivers on what they promise!  I always recommend them to all the retreat leaders who host retreats at my retreat center.",
            date: "Wednesday, October 4, 2017 - 1:36:23 PM",
            stars: "5",
            link: "/reviews/59d4e3d7d2c87503046417b9",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/59d4d2250000ff000ad0d7bd/73x73.png",
            name: "Alicia Waters",
            title: "Effective and helpful",
            body: "I've found BYR a great help in promoting my events. They are always willing to help with updates to my event information or with any questions. Definitely recommended as part of a marketing strategy to any yoga teachers / trainers running events.",
            date: "Wednesday, October 4, 2017 - 12:21:00 PM",
            stars: "5",
            link: "/reviews/59d4d22cd2c8750304641134",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/59d4d1830000ff000ad0d771/73x73.png",
            name: "Sonja Elfers",
            title: "Trust 100%",
            body: "Absolutely professional, always reliable and fast responding. Trust 100%.",
            date: "Wednesday, October 4, 2017 - 12:18:23 PM",
            stars: "5",
            link: "/reviews/59d4d19031302a0338b67d70",
            type: "short"
        }, {
            img: "https://user-images.trustpilot.com/59cda5fb0000ff000acee0e9/73x73.png",
            name: "Goes Nicks",
            title: "Best site with best recommended hotel…",
            body: "Best site with best recommended retreats hotel in Bali. Our favorites is the retreat package offered by Blue Karma Resort in Ubud and Seminyak",
            date: "Friday, September 29, 2017 - 1:46:46 AM",
            stars: "5",
            link: "/reviews/59cda606d2c8750304628b80",
            type: "customer"
        }, {
            img: "https://user-images.trustpilot.com/59cd1d2b0000ff000aceb2e5/73x73.png",
            name: "Hinterland Village",
            title: "Great support",
            body: "Real support for our yoga studio to promote our various retreats. The site is very easy and flexible for listing as well as editing. All the concerned people are so helpful. We are thoroughly enjoying the association and arrangements with book yoga retreats.",
            date: "Thursday, September 28, 2017 - 4:03:04 PM",
            stars: "5",
            link: "/reviews/59cd1d38d2c8750304626919",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/59b6a0f40000ff000ac77055/73x73.png",
            name: "Stefan Camilleri",
            title: "When you work with these guys that can …",
            body: "When you work with these guys that can make your business. Their platform is great and it just works.",
            date: "Monday, September 11, 2017 - 2:43:09 PM",
            stars: "5",
            link: "/reviews/59b6a0fd31302a083059fb39",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/58df6c190000ff000a886568/73x73.png",
            name: "Kaisa Kuurne",
            title: "This service was very helpful!",
            body: "This service was very helpful when trying to find a nice yoga retreat in India for the very first time! Our retreat experience was amazing!  Thanks!",
            date: "Saturday, April 1, 2017 - 9:00:21 AM",
            stars: "5",
            link: "/reviews/58df6c25774f640bbcb5e2d2",
            type: "customer"
        }, {
            img: "https://user-images.trustpilot.com/58aafb650000ff000a797570/73x73.png",
            name: "Peaceful Mind - The Ancient Yoga",
            title: "World's best site to Book your Yoga Retreats",
            body: "BookYogaRetreats is a world's best site to Book your Yoga Retreats in any where in the world. It's very easy to searching Yoga retreats as per your requirement like budget, destination choice and various type of Yoga and retreats. Staff is very prompt, they ready to help you ever and Guide us properly. My best wishes to BookYogaRetreats for their long Journey and providing to people a platform to choice right yoga retreats.....",
            date: "Monday, February 20, 2017 - 2:22:40 PM",
            stars: "5",
            link: "/reviews/58aafbb0b499ab07d48e9938",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/587feb1e0000ff000a6df10e/73x73.png",
            name: "Kristina Caputi",
            title: "Huge variety of retreats",
            body: "Great place to find your dream retreat. There are a large variety of budget and upscale retreats locally or in beautiful destinations abroad. Highly recommend it!",
            date: "Wednesday, January 18, 2017 - 10:24:41 PM",
            stars: "5",
            link: "/reviews/587feb298a103107fc26abdd",
            type: "customer"
        }, {
            img: "https://user-images.trustpilot.com/5873ee0f0000ff000a6a7f90/73x73.png",
            name: "Peter Guinosso",
            title: "Great to do business with them!",
            body: "I have been working with Book Yoga Retreats for about 2-3 years now and I have nothing but good things to say about them. They are very professional, timely in responding to any questions that I have AND they have helped me promote my retreats to people outside of my community.",
            date: "Monday, January 9, 2017 - 8:10:05 PM",
            stars: "5",
            link: "/reviews/5873ee1d8a103103cc19fc94",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/58617f690000ff000a65a824/73x73.png",
            name: "Christina Thomas",
            title: "We LOVE working with BookYogaRetreats!!",
            body: "I've been working for years now with BYR and have found them to be fluid in their bookings, easy to work with, and very thorough when details.  Love the experience and will continue to work with them!",
            date: "Monday, December 26, 2016 - 8:37:25 PM",
            stars: "5",
            link: "/reviews/58617f8573a4bb03e8d7e442",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/585d9b700000ff000a650a97/73x73.png",
            name: "Shannon Jamail",
            title: "The absolute best",
            body: "I have used BookYogaRetreats for almost two years. It's my number one platform for bookings. The service is phenomenal and my bookings have increased tremendously. I'm so grateful.",
            date: "Friday, December 23, 2016 - 9:47:39 PM",
            stars: "5",
            link: "/reviews/585d9b7b09f8ed09e81ac26f",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/585941bb0000ff000a63c11e/73x73.png",
            name: "AmaTierra Hotel",
            title: "Review of Book Yoga Retreats",
            body: "We have now been working with Book Yoga retreats for close to a year and have found them to be one of the best communicator's in any business i have ever worked with. The staff is great and probably the most efficient that you will find in this tourism industry.The only one suggestion i have is maybe a bit too much communication to the customer can make the customer feel a bit of pressure when they ask \"We have not heard from you in a while\" and that statement can sometimes be a bit too soon after an inquiry. It takes time for people to respond, especially in the busy Holiday times, so patience is a virtue.Otherwise Book Yoga Retreats has helped my business immensely and i can not thank them enough for their expertise in dealing with this very competitive market in Costa Rica  and hope we have a very long and positive relationship.... Happy Holiday's to Robert and his entire staff.. Bob and Jill Ruttenberg at Amatierra Retreat & Wellness Center in Costa Rica",
            date: "Tuesday, December 20, 2016 - 2:36:00 PM",
            stars: "5",
            link: "/reviews/585941d073a4bb03e8d696cd",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/56c9e4c90000ff000a0824b4/73x73.png",
            name: "Radhika",
            title: "!!! BookYogaRetreats is simply the best !!!",
            body: "We are very happy with BookYogaRetreats.The staff is helping wherever they can and we get many clients thru their website. It is a pleasure to work with them. It is also very easy for our trainees, as they provide all needed information on their website about us and our yoga school. The next important thing is that they have very fair prices. BYR is simply the best and we are very happy with the profesional treat they offer. I hope we work a long time together.Om Shanti Om...Radhika from Gayatri Yoga Tenerife.",
            date: "Sunday, February 21, 2016 - 4:35:38 PM",
            stars: "5",
            link: "/reviews/56c9e75a0000ff00093daf81",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/557bdb4e0000ff0001c5a940/73x73.png",
            name: "Davide Bedetti",
            title: "A wonderful team of professionals, supporter for my business",
            body: "Thanks to BYR I could increase the number of my customers and improve my credibility in the vast world of Yoga offer.I am very happy and also very grateful to have the opportunity to work with Book Yoga Retreat Team..They are always there, helping me every day, with great professionalism.They take care of us and all our customersI highly recommend it to all friends of the Yoga WorldDavide Bedetti Yogamea Team",
            date: "Monday, February 15, 2016 - 7:09:51 AM",
            stars: "5",
            link: "/reviews/56c179bf0000ff00093b4692",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/5383b375000064000175b7ea/73x73.png",
            name: "Ishara De Silva",
            title: "Great supportive travel company",
            body: "I have now been working with BookYogaRetreats for over a year where we advertise our retreats at our hotel. We find most travel companies - even those in the wellbeing sector to be very cut throat and unreasonable. I can whole heartedly say that BookYogaRetreats is such a pleasure to work with. They are professional, helpful and fair. Which is a change from the rest in the industry. I would have no hesitations in recommending bookyogaretreats to anyone.",
            date: "Monday, April 20, 2015 - 2:21:26 PM",
            stars: "5",
            link: "/reviews/55350b660000ff0002deb88c",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/5534e67a0000ff0001b984a5/73x73.png",
            name: "Naomi Kosic",
            title: "Book Yoga Retreats",
            body: "A fantastic company with great customer service.The team at Book Yoga Retreats are simply a delight to work with, and I am proud to be a partner.5 stars!",
            date: "Monday, April 20, 2015 - 11:44:11 AM",
            stars: "5",
            link: "/reviews/5534e68b0000ff0002dead84",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/552d193b0000ff0001b83d5b/73x73.png",
            name: "Nikki",
            title: "The most effective and helpful team.",
            body: "Since our humble beginnings four years ago, book yoga retreats have supported Feel Great Breaks every step of the way. Nothing is ever too much trouble for any of the team and they are always willing to lend a hand. Without them our journey wouldn't have been so enjoyable. Their response times are fabulous and their customer care and positivity is so welcome and exceptional. We would recommend them to everyone, without a doubt.",
            date: "Tuesday, April 14, 2015 - 1:43:15 PM",
            stars: "5",
            link: "/reviews/552d19730000ff0002dd156b",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/5527c9390000ff0001b76a4a/73x73.png",
            name: "Nattaya Srirak",
            title: "Paradise-Koh Yao",
            body: "Excellent Service!",
            date: "Monday, April 13, 2015 - 9:49:23 AM",
            stars: "5",
            link: "/reviews/552b91230000ff0002dcb346",
            type: "short"
        }, {
            img: "https://user-images.trustpilot.com/5527e39a0000ff0001b77087/73x73.png",
            name: "Anne S. Haack",
            title: "Great place to advertise retreats",
            body: "Thanks to bookyogaretreats we had several bookings of new clients. The site is very user friendly and gives an excellent overview of our retreats. Mail correspondance with the team behind bookyogaretreats is often within one or two days. They instantly apply changes, if needed, on the presentation of our retreats and are always there to answer any questions.Yoga on!",
            date: "Friday, April 10, 2015 - 2:52:28 PM",
            stars: "5",
            link: "/reviews/5527e3ac0000ff0002dc1382",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/5526ea160000ff0001b74b7f/73x73.png",
            name: "Maya Cookson",
            title: "Courteous, Professional, Thorough",
            body: "Shortly after BookYogaRetreats.com scooped up our little retreat center last year and began featuring our retreats, we had to hire somebody just to stay on top of all the booking inquiries that came flooding in.At present, about 80% of the reservations on our books for the upcoming months have come through BYR, and we have seen significant increases in both revenue and website traffic over the course of the past year. BYR has also helped us to streamline our booking and correspondence processes, saving time and gaining a higher volume of bookings through what is usually our slow season. This has opened up room to expand our retreat offerings, add to our program and divert energy towards some much-needed infrastructural developments.Aside from the material benefits we've experienced through our association with BookYogaRetreats, it has also just been a pleasure to work with them. The BYR staff are lovely, cheerful and incredibly hard-working. They absolutely do not miss a beat, always letting us know if an inquiry falls through the cracks and sending gentle reminders to help us maintain good guest rapport. Emails sent out on weekends have always been answered well before Monday morning, usually same-day. The BYR staff have gone above and beyond on numerous occasions in order to help us resolve communication mishaps with clients, payment details and even technological issues that have arisen. They have been willing to work with us in creating and managing appealing web pages, and even offered advice and perspective on certain policies when asked. Beyond even this, there is a personal touch to their correspondence that has translated into a truly motivating and supportive business relationship.Engaging with BookYogaRetreats does require and support a highly responsive administrative branch; there are frequent updates to submit, invoices to pay, and inquiries that go unanswered for more than 24 hours turn into alerts. But this actually works quite well for us, and the expense of energy is marginal compared to the benefits---emails mean inquiries, updates mean bookings, and invoices mean income!Our experience working with BYR has been overwhelmingly positive, and I would recommend them with zero qualms.---Pleasant Valley SanctuaryNorth San Juan, California, USA",
            date: "Thursday, April 9, 2015 - 9:07:37 PM",
            stars: "5",
            link: "/reviews/5526ea190000ff0002dbe4bf",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/5525a4d60000ff0001b70fbc/73x73.png",
            name: "Namit Kathoria",
            title: "Perfect",
            body: "The book yoga retreats team are simply perfect to work with.They are all extremely friendly, knowledgeable, honest and there are no words to describe what a pleasure it is to work with them.Each member of the team is always friendly and happy to share knowledge. Added to this they are efficient and communication with them is such a delight :)They should serve as a model for being the perfect people to work with :)",
            date: "Wednesday, April 8, 2015 - 10:00:03 PM",
            stars: "5",
            link: "/reviews/5525a4e30000ff0002db993d",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/552590690000ff0001b70ba6/73x73.png",
            name: "Yoga Bless",
            title: "best of the best",
            body: "Bookyogaretreats is the best.I have only good words to say about this proffesional concious company full of  helpfull and understanding people!!!",
            date: "Wednesday, April 8, 2015 - 8:33:53 PM",
            stars: "5",
            link: "/reviews/552590b10000ff0002db9457",
            type: "customer"
        }, {
            img: "https://user-images.trustpilot.com/552583e50000ff0001b7085e/73x73.png",
            name: "Karissa Isaac",
            title: "A great team, great service, great site",
            body: "The team at bookyogaretreats is extremely helpful and professional. They provide an extensive directory of retreats, on a great website. For our guests, its very easy to navigate and use. They are always willing to help you with your listings to make them as accurate and attractive as possible. They genuinely care, and our bookings have increased as a result of working with them. I recommend them highly, and enjoy working with them.",
            date: "Wednesday, April 8, 2015 - 7:41:18 PM",
            stars: "5",
            link: "/reviews/5525845e0000ff0002db9057",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/552573df0000ff0001b703dd/73x73.png",
            name: "Jamie Wood",
            title: "Wonderful Service for Retreat Companies",
            body: "I have been a client of Book Yoga Retreats for 2 years now and I am very pleased with their service.I receive the most inquiries and leads from BYR more than any other online retreat booking service.Their customer service is top notch, I truly enjoy working with their staff.Regards,Sanga Retreats",
            date: "Wednesday, April 8, 2015 - 6:33:14 PM",
            stars: "5",
            link: "/reviews/5525746a0000ff0002db8ab6",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/552560fd0000ff0001b6fe62/73x73.png",
            name: "Slava Anand",
            title: "BookYogaRetreats - the best choice",
            body: "Great Team: they are kind professionals always ready to help, they are joyful people spreading joy and health throughout the world.They are honest people: the commission fee  is very reasonable.Great job!All the best!Slava AnandDetox yoga retreat at the Dead Sea",
            date: "Wednesday, April 8, 2015 - 5:15:08 PM",
            stars: "5",
            link: "/reviews/5525621c0000ff0002db8411",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/5525566c0000ff0001b6fb6d/73x73.png",
            name: "Carolina Cardenas Pimienta",
            title: "Great Partner",
            body: "We love working with BookYogaRetreats, everything is very clear and they have a great custumer service.",
            date: "Wednesday, April 8, 2015 - 4:25:29 PM",
            stars: "5",
            link: "/reviews/552556790000ff0002db801f",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/552535d40000ff0001b6f272/73x73.png",
            name: "Man Moh Han",
            title: "Above Expectations!!!",
            body: "Being an owner of a Yoga school, I always look for different ways and advertising partners to promote my retreats and yoga programs. While researching and experiencing numerous yoga portals and similar websites, the best I found is Book Yoga Retreats. It stands out from others because of its result-oriented marketing strategies and fantastic customer care support. Each team member represents a mix of professionalism and friendly yogic manner of doing business. They bring good traffic of yogis and efficiently increase your customer reach. From the very beginning of our cooperation till now they are constantly proving that they are the best in its field. Highly Recommended to Yoga Schools and Organizers!",
            date: "Wednesday, April 8, 2015 - 2:07:37 PM",
            stars: "5",
            link: "/reviews/552536290000ff0002db754d",
            type: "organizer"
        }, {
            img: "https://user-images.trustpilot.com/552529490000ff0001b6ef5d/73x73.png",
            name: "Jennifer Fitzsimmons",
            title: "Review Book Yoga Retreats",
            body: "Book Yoga Retreats is the best of all the advertising we do. There service is fast, friendly and extremely professional. Edits are done immediately and accurately and most our retreats come from them. They have personalized service that makes dealing with them great. We highly recommend Book Yoga Retreats.",
            date: "Wednesday, April 8, 2015 - 1:13:03 PM",
            stars: "5",
            link: "/reviews/5525295f0000ff0002db7150",
            type: "organizer"
        }],
        trustpilotOverview = {
            reviews: 222,
            rating: "Great",
            stars: 4,
            score: 8.9,
            split: {
                Excellent: 85,
                Great: 9,
                Average: 1,
                Poor: 1,
                Bad: 4
            }
        },
        trustpilotLogo = '<svg class="tp_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.085 58.186"><style>.c2{fill:#f9a220}.c3{fill:url(#SVGID_1_)}.c4{opacity:.5;fill:url(#SVGID_2_)}.c5{fill:url(#SVGID_3_)}.c8{fill:#929497}.dark .c6{fill:#fff}</style><g id="Logo"><path class="c6" d="M119.272 3.316c0 .558-.029 1.059-.088 1.472-.068.425-.161.757-.296 1.012a1.5 1.5 0 0 1-.487.558 1.243 1.243 0 0 1-.655.177h-16.289v50.214c0 .245-.063.449-.181.63-.119.178-.33.322-.626.423a7.134 7.134 0 0 1-1.184.275c-.494.064-1.113.11-1.856.11-.715 0-1.329-.047-1.836-.11a7.14 7.14 0 0 1-1.213-.275c-.296-.101-.5-.245-.622-.423a1.107 1.107 0 0 1-.178-.63V6.534H77.464c-.238 0-.449-.058-.648-.177a1.317 1.317 0 0 1-.466-.558c-.122-.254-.219-.587-.296-1.012a8.8 8.8 0 0 1-.106-1.472c0-.57.034-1.07.106-1.5.077-.438.174-.787.296-1.054.119-.263.275-.462.466-.584A1.28 1.28 0 0 1 77.464 0h40.282c.241 0 .456.064.655.178.187.122.352.322.487.584.135.266.228.616.296 1.054.059.43.088.929.088 1.5zm49.414 53.432c0 .245-.042.449-.144.63-.084.178-.275.331-.575.439-.301.127-.714.211-1.252.277a20.77 20.77 0 0 1-2.149.092c-.778 0-1.412-.034-1.903-.092-.49-.065-.885-.161-1.184-.294a1.527 1.527 0 0 1-.694-.561 3.281 3.281 0 0 1-.431-.898l-5.32-13.648a52.507 52.507 0 0 0-1.946-4.273c-.673-1.294-1.472-2.411-2.398-3.357a9.792 9.792 0 0 0-3.265-2.188c-1.252-.524-2.757-.786-4.517-.786h-5.152v24.657a.99.99 0 0 1-.203.63c-.135.178-.338.322-.626.423a6.48 6.48 0 0 1-1.158.275 14.56 14.56 0 0 1-1.862.11c-.744 0-1.361-.047-1.852-.11a7.172 7.172 0 0 1-1.193-.275c-.296-.101-.498-.245-.626-.423a1.144 1.144 0 0 1-.173-.63V3.138c0-1.167.301-1.979.918-2.444.609-.46 1.255-.694 1.944-.694h12.304c1.463 0 2.681.043 3.65.114.968.069 1.843.161 2.618.251 2.237.384 4.212.997 5.93 1.831 1.714.833 3.156 1.891 4.323 3.18a12.81 12.81 0 0 1 2.614 4.407c.583 1.649.872 3.482.872 5.478 0 1.947-.263 3.68-.787 5.219-.519 1.532-1.268 2.889-2.254 4.069a14.936 14.936 0 0 1-3.536 3.067c-1.37.87-2.91 1.597-4.614 2.194a10.79 10.79 0 0 1 2.601 1.582 14.124 14.124 0 0 1 2.17 2.306c.668.901 1.302 1.93 1.908 3.101a50.655 50.655 0 0 1 1.785 3.937l5.19 12.748c.419 1.075.685 1.833.808 2.259.111.435.179.768.179 1.005zm-11.594-40.68c0-2.267-.508-4.187-1.523-5.752-1.015-1.561-2.716-2.691-5.101-3.376-.749-.21-1.59-.357-2.529-.452-.943-.089-2.17-.131-3.693-.131h-6.492v19.515h7.521c2.03 0 3.776-.251 5.261-.741 1.476-.496 2.707-1.18 3.688-2.061a8.044 8.044 0 0 0 2.174-3.108c.462-1.192.694-2.493.694-3.894zm63.173 20.15c0 3.463-.498 6.557-1.514 9.272-1.011 2.723-2.458 5.016-4.344 6.897-1.878 1.878-4.17 3.299-6.873 4.268-2.694.978-5.769 1.461-9.203 1.461-3.148 0-6.006-.456-8.595-1.367-2.579-.909-4.8-2.253-6.653-4.034-1.849-1.777-3.27-4.006-4.268-6.667-.998-2.676-1.497-5.76-1.497-9.249V1.413c0-.237.055-.437.173-.622.118-.174.325-.312.613-.414a6.39 6.39 0 0 1 1.151-.263c.466-.077 1.083-.114 1.849-.114.706 0 1.307.037 1.806.114.495.069.888.161 1.167.263.275.102.478.24.597.414.118.185.177.385.177.622v34.45c0 2.648.321 4.952.965 6.916.651 1.971 1.582 3.607 2.799 4.913a11.54 11.54 0 0 0 4.408 2.955c1.713.658 3.646.993 5.795.993 2.199 0 4.161-.318 5.874-.976 1.725-.64 3.176-1.608 4.37-2.902 1.188-1.296 2.094-2.897 2.723-4.81.639-1.898.952-4.131.952-6.689V1.413a1.1 1.1 0 0 1 .178-.622c.118-.174.322-.312.613-.414a6.463 6.463 0 0 1 1.167-.263c.486-.077 1.1-.114 1.832-.114.706 0 1.298.037 1.78.114a5.78 5.78 0 0 1 1.146.263c.284.102.486.24.621.414.132.185.191.385.191.622v34.805zm43.425 5.257c0 2.657-.495 5.018-1.468 7.082a15.214 15.214 0 0 1-4.057 5.255c-1.733 1.444-3.772 2.53-6.115 3.258-2.348.724-4.864 1.092-7.576 1.092-1.895 0-3.645-.157-5.256-.488-1.62-.316-3.059-.705-4.327-1.174-1.265-.466-2.331-.944-3.189-1.438-.858-.496-1.45-.915-1.781-1.266-.343-.35-.592-.799-.748-1.331-.161-.541-.242-1.264-.242-2.166 0-.638.029-1.167.089-1.59.055-.423.144-.767.262-1.029.114-.262.262-.443.431-.546.177-.101.385-.151.613-.151.406 0 .985.251 1.726.741.744.498 1.695 1.04 2.863 1.614 1.163.589 2.568 1.135 4.208 1.633 1.646.512 3.545.77 5.698.77 1.628 0 3.126-.211 4.479-.655 1.353-.439 2.518-1.057 3.498-1.853a8.184 8.184 0 0 0 2.245-2.947c.516-1.163.778-2.487.778-3.972 0-1.606-.363-2.977-1.082-4.107-.732-1.137-1.688-2.132-2.885-2.992a25.185 25.185 0 0 0-4.086-2.354 1099.15 1099.15 0 0 0-4.69-2.186 48.416 48.416 0 0 1-4.674-2.467 19.698 19.698 0 0 1-4.057-3.185c-1.197-1.223-2.166-2.661-2.91-4.301-.741-1.642-1.112-3.617-1.112-5.913 0-2.364.431-4.462 1.294-6.31a12.85 12.85 0 0 1 3.577-4.653c1.528-1.248 3.347-2.208 5.458-2.859 2.105-.66 4.389-.986 6.83-.986 1.253 0 2.508.114 3.781.325 1.261.221 2.457.516 3.577.876 1.122.364 2.117.774 2.995 1.218.863.452 1.447.82 1.718 1.1.28.275.461.49.545.651.094.161.166.368.221.61.058.249.106.546.131.9.029.347.05.796.05 1.345 0 .529-.03.994-.072 1.401-.039.41-.11.757-.199 1.032-.085.27-.212.482-.369.609a.866.866 0 0 1-.544.198c-.327 0-.82-.207-1.511-.617a50.947 50.947 0 0 0-2.508-1.375c-.99-.509-2.166-.969-3.511-1.396-1.358-.418-2.881-.635-4.568-.635-1.568 0-2.94.217-4.102.635-1.163.427-2.128.99-2.88 1.678a6.733 6.733 0 0 0-1.705 2.487 8.38 8.38 0 0 0-.567 3.063c0 1.569.364 2.919 1.092 4.06.728 1.137 1.695 2.141 2.901 3.011a25.893 25.893 0 0 0 4.129 2.397c1.543.728 3.117 1.468 4.715 2.214a61.558 61.558 0 0 1 4.716 2.439 20.155 20.155 0 0 1 4.132 3.144 14.43 14.43 0 0 1 2.914 4.284c.753 1.646 1.125 3.583 1.125 5.82zm47.812-38.167c0 .566-.03 1.057-.089 1.468-.064.419-.156.76-.291 1.01a1.38 1.38 0 0 1-.492.558 1.184 1.184 0 0 1-.649.177H293.72v50.13c0 .238-.058.449-.181.623-.116.181-.327.325-.624.43a6.774 6.774 0 0 1-1.183.262c-.496.077-1.114.116-1.853.116-.719 0-1.332-.039-1.831-.116a6.644 6.644 0 0 1-1.206-.262c-.3-.105-.507-.249-.629-.43a1.107 1.107 0 0 1-.179-.623V6.521h-16.261c-.236 0-.453-.054-.648-.177a1.245 1.245 0 0 1-.469-.558 4.477 4.477 0 0 1-.293-1.01 8.601 8.601 0 0 1-.113-1.468c0-.563.041-1.071.113-1.492.078-.438.179-.791.293-1.054.119-.263.275-.462.469-.584.196-.114.412-.178.648-.178h40.208c.238 0 .458.064.649.178.19.122.364.322.492.584.135.263.227.616.291 1.054.059.422.089.929.089 1.492z"></path><path class="c8" d="M356.234 16.96c0 2.897-.477 5.507-1.438 7.838-.958 2.326-2.317 4.314-4.095 5.947-1.773 1.646-3.951 2.915-6.535 3.808-2.581.898-5.654 1.341-9.243 1.341h-6.575v20.855c0 .245-.073.449-.204.63-.135.178-.341.322-.625.423a6.36 6.36 0 0 1-1.169.275c-.485.064-1.106.11-1.851.11-.744 0-1.367-.047-1.852-.11a6.825 6.825 0 0 1-1.193-.275c-.303-.101-.508-.245-.626-.423a1.085 1.085 0 0 1-.179-.63V3.316c0-1.193.313-2.042.94-2.554.627-.508 1.323-.762 2.106-.762h12.393c1.258 0 2.454.051 3.607.161 1.145.101 2.508.325 4.065.669 1.57.342 3.169.987 4.797 1.924a15.14 15.14 0 0 1 4.136 3.468c1.138 1.374 2.009 2.96 2.618 4.767.613 1.806.923 3.794.923 5.971zm-8.104.626c0-2.356-.44-4.322-1.324-5.899-.876-1.583-1.966-2.767-3.265-3.541-1.299-.774-2.64-1.269-4.023-1.475a28.007 28.007 0 0 0-4.056-.313h-7.114v23.224h6.937c2.326 0 4.259-.299 5.793-.896 1.536-.6 2.829-1.418 3.87-2.48 1.044-1.06 1.838-2.326 2.378-3.802.533-1.476.804-3.084.804-4.818zm26.316 39.125c0 .236-.058.447-.178.621s-.326.318-.626.419c-.296.107-.684.194-1.179.271-.482.073-1.104.107-1.844.107-.711 0-1.32-.034-1.823-.107-.508-.077-.91-.165-1.201-.271-.296-.101-.508-.245-.627-.419a1.118 1.118 0 0 1-.174-.621V1.426c0-.241.068-.45.195-.626.135-.174.355-.318.672-.415a6.626 6.626 0 0 1 1.197-.271A12.458 12.458 0 0 1 370.619 0c.74 0 1.361.043 1.844.114.495.069.884.165 1.179.271.3.097.507.241.626.415.12.176.178.384.178.626v55.285zm44.254-1.878c0 .587-.026 1.09-.084 1.492-.061.402-.157.754-.297 1.032-.13.282-.291.496-.486.621-.19.136-.422.208-.698.208h-25.602c-.685 0-1.327-.232-1.941-.698-.609-.462-.914-1.277-.914-2.44V1.434c0-.237.052-.449.175-.626.123-.178.329-.322.622-.423a6.647 6.647 0 0 1 1.215-.271A13.257 13.257 0 0 1 392.527 0c.741 0 1.358.043 1.852.114.495.073.885.165 1.185.271.299.101.508.245.626.423.122.178.182.39.182.626v50.081h20.763c.276 0 .508.067.698.204.195.131.356.327.486.58.14.254.237.587.297 1.01.058.415.084.922.084 1.524zm52.438-26.458c0 4.552-.54 8.668-1.615 12.331-1.075 3.658-2.681 6.772-4.818 9.347-2.132 2.566-4.813 4.543-8.035 5.923-3.223 1.382-6.992 2.07-11.285 2.07-4.243 0-7.912-.63-11.006-1.889-3.091-1.27-5.654-3.104-7.673-5.521-2.017-2.407-3.523-5.401-4.509-8.975-.987-3.576-1.489-7.686-1.489-12.33 0-4.445.545-8.481 1.616-12.122 1.074-3.626 2.69-6.715 4.843-9.259 2.149-2.546 4.835-4.499 8.063-5.88C438.457.694 442.212 0 446.513 0c4.154 0 7.77.626 10.853 1.874 3.074 1.252 5.639 3.075 7.691 5.468 2.045 2.399 3.567 5.363 4.571 8.89 1.002 3.529 1.51 7.576 1.51 12.143zm-7.93.522c0-3.198-.288-6.168-.851-8.917-.57-2.74-1.515-5.122-2.833-7.144-1.318-2.016-3.084-3.598-5.287-4.731-2.205-1.126-4.936-1.696-8.185-1.696-3.248 0-5.977.612-8.184 1.83-2.204 1.223-3.994 2.843-5.372 4.878-1.382 2.038-2.366 4.413-2.96 7.125-.597 2.721-.892 5.575-.892 8.565 0 3.312.274 6.362.828 9.158.55 2.779 1.481 5.186 2.782 7.202 1.309 2.023 3.059 3.596 5.247 4.709 2.189 1.12 4.939 1.679 8.255 1.679 3.273 0 6.031-.61 8.268-1.833 2.229-1.221 4.031-2.863 5.394-4.943 1.36-2.081 2.335-4.485 2.913-7.207.58-2.732.877-5.627.877-8.675zm52.877-25.581c0 .558-.03 1.059-.093 1.472-.055.425-.156.757-.293 1.012-.132.25-.295.436-.487.558a1.212 1.212 0 0 1-.646.177h-16.287v50.214c0 .245-.064.449-.192.63-.113.178-.321.322-.62.423-.3.103-.693.198-1.189.275-.485.064-1.108.11-1.858.11a14.82 14.82 0 0 1-1.831-.11 6.953 6.953 0 0 1-1.208-.275c-.298-.101-.508-.245-.625-.423a1.1 1.1 0 0 1-.18-.63V6.534h-16.3c-.229 0-.444-.058-.639-.177a1.322 1.322 0 0 1-.476-.558 4.487 4.487 0 0 1-.289-1.012 8.267 8.267 0 0 1-.11-1.472c0-.57.034-1.07.11-1.5a4.94 4.94 0 0 1 .289-1.054c.121-.263.281-.462.476-.584.195-.113.41-.177.639-.177h40.289c.238 0 .45.064.646.178.193.122.355.322.487.584.137.266.237.616.293 1.054.064.43.094.929.094 1.5z"></path><path class="c2" d="M0 .012v25.665s19.433 9.25 29.297 25.788c0 0 4.352-36.523 28.785-51.453H0z"></path><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="29.041" y1="58.186" x2="29.041" y2="25.006"><stop offset="0" stop-color="#e37a27"></stop><stop offset=".472" stop-color="#f9a220"></stop></linearGradient><path class="c3" d="M0 46.824v11.363h26.11c0-.001-9.947-10.593-26.11-11.363zm33.118 11.362h24.964v-33.18c-14.128 3.827-24.964 33.18-24.964 33.18z"></path><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="28.926" y1="22.669" x2="28.926" y2=".394"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f9a220"></stop></linearGradient><path class="c4" d="M.388.401L57.465.395s-9.366 3.308-19.46 21.915c0 0-22.076 2.246-37.564-4.496L.388.401z"></path><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="29.041" y1=".242" x2="29.041" y2="57.957"><stop offset="0" stop-color="#4a484a"></stop><stop offset="1"></stop></linearGradient><path class="c5" d="M29.297 51.466C19.433 34.927 0 25.677 0 25.677v21.146c16.128.794 26.11 11.363 26.11 11.363h7.008s10.836-29.353 24.964-33.18V.012l-.074.045C33.641 15.015 29.297 51.466 29.297 51.466z"></path></g></svg>';
    (function(e) {
        var t, a, i;
        for (i = e.length; i; i--) t = Math.floor(Math.random() * i), a = e[i - 1], e[i - 1] = e[t], e[t] = a
    })(trustpilotReviews),
    function(e, t) {
        e.sort(function(e, a) {
            var i = e[t],
                n = a[t];
            return i < n ? -1 : i > n ? 1 : 0
        })
    }(trustpilotReviews, "type"), $(function() {
        if (999 < $(window).width() && $(".trustpilot_logo_overview").length) {
            $(".trustpilot_logo_overview").mouseover(function() {
                $(this).addClass("trustpilot_logo_overview_show")
            }), $(".trustpilot_logo_overview").append('\n                    <a href="https://www.trustpilot.com/review/bookyogaretreats.com" target="_blank" class="trustpilot_logo_overview_block">\n                        <div class="tp_row">\n                            <div class="tp_rating">' + trustpilotOverview.rating + '</div>\n                            <div class="tp_stars tp_stars_' + trustpilotOverview.stars + '"><i></i><i></i><i></i><i></i><i></i></div>\n                            <div class="tp_score">' + trustpilotOverview.score + ' out of 10</div>\n                        </div>\n                        <div class="tp_row">\n                            <div class="tp_reviews">' + trustpilotOverview.reviews + " reviews on</div>\n                            " + trustpilotLogo + '\n                        </div>\n                        <div class="tp_cta">See all reviews</div>\n                        <div class="tp_close">✕</div>\n                    </a>\n                ');
            var e = +Cookies.get("tp_shown") || 0;
            2 > e && ($(".trustpilot_logo_overview").addClass("trustpilot_logo_overview_show"), Cookies.set("tp_shown", e + 1)), $(".tp_close").click(function() {
                return $(".trustpilot_logo_overview").removeClass("trustpilot_logo_overview_show"), Cookies.set("tp_shown", 9), !1
            })
        }
    }), $(function() {
        if ($(".trustpilot_bot_carousel").length) {
            $(".trustpilot_bot_carousel").find("h3").html(trustpilotLogo + " reviews<span>Rated " + trustpilotOverview.score + " out of 10 (" + trustpilotOverview.rating + ") in " + trustpilotOverview.reviews + " reviews</span>"), $(".trustpilot_bot_carousel").find("ul").remove();
            var e = "";
            for (i = 0; i < trustpilotReviews.length; i++) "customer" == trustpilotReviews[i].type && (e += '\n                            <a class="swiper-slide clearfix" href="https://www.trustpilot.com' + trustpilotReviews[i].link + '" target="_blank">\n                                <div class="tp_slide_user">\n                                    ' + (trustpilotReviews[i].img ? '<img src="' + trustpilotReviews[i].img + '">' : "") + "\n                                    <p>" + trustpilotReviews[i].name + "</p>\n                                    <p><span>" + trustpilotReviews[i].date.split(" - ")[0] + '</span></p>\n                                </div>\n                                <div class="tp_slide_review">\n                                    <div class="tp_stars tp_stars_' + trustpilotReviews[i].stars + '"><i></i><i></i><i></i><i></i><i></i></div>\n                                    <h4>' + trustpilotReviews[i].title + "</h4>\n                                    <p>" + trustpilotReviews[i].body + "</p>\n                                </div>\n                            </a>\n                        ");
            $(".trustpilot_bot_carousel .container").append('<div id="tp_carousel" class="swiper-container border-box"><div class="swiper-wrapper trustpilot_bot_carousel_wrapper">' + e + '</div></div><div class="swiper-button--next"></div><div class="swiper-button--prev"></div>');
            var t = window,
                a = document,
                n = a.documentElement,
                r = a.getElementsByTagName("body")[0],
                o = t.innerWidth || n.clientWidth || r.clientWidth;
            window.tp_carousel = new Swiper("#tp_carousel", {
                loop: !0,
                nextButton: ".swiper-button--next",
                prevButton: ".swiper-button--prev",
                grabCursor: !0,
                autoplay: 480 > o ? 0 : 2e3,
                slidesPerView: 480 > o ? 1 : 2,
                spaceBetween: 15
            }), $(".trustpilot_bot_carousel .swiper-slide").each(function() {
                for (; $(this).height() - 30 < $(this).find(".tp_slide_review").height();) $(this).find(".tp_slide_review p").text($(this).find(".tp_slide_review p").text().split(" ").slice(0, -10).join(" ") + "...")
            })
        }
    }), $(function() {
        if ($(".js-topic-truspilot-swiper").length) {
            $(".js-current-score").html(trustpilotOverview.score), $(".js-current-rating").html(trustpilotOverview.rating), $(".js-current-totalreviews").html(trustpilotOverview.reviews);
            var e = "";
            for (i = 0; i < trustpilotReviews.length; i++) "customer" == trustpilotReviews[i].type && (e += '\n                              <li class="swiper-slide clearfix">\n                                    <div class="trustpilot-reviewer">\n                                          <img src="' + trustpilotReviews[i].img + '" />\n                                    </div>\n\n                                    <div class="trustpilot-review">\n\n                                          <div class="tplp_stars tplp_stars_' + trustpilotReviews[i].stars + ' clearfix">\n                                                <i></i><i></i><i></i><i></i><i></i>\n                                          </div>\n\n                                          <div class="trustpilot-review-highlight catamaran">\n                                                <a href="https://www.trustpilot.com' + trustpilotReviews[i].link + '" target="_blank">\n                                                      "' + trustpilotReviews[i].title + '"\n                                                </a>\n                                          </div>\n\n                                          <div class="trustpilot-review-details">\n                                                <p>' + trustpilotReviews[i].body + '</p>\n                                          </div>\n\n                                          <div class="trustpilot-review-meta">\n                                                <p class="trustpilot-review-meta--name">' + trustpilotReviews[i].name + '</p>\n                                                <p class="trustpilot-review-meta--date">' + trustpilotReviews[i].date.split(" - ")[0] + "</p>\n                                          </div>\n                                    </div>\n                              </li>\n                              ");
            $(".js-trustpilot-reviews").append(e);
            var t = window,
                a = document,
                n = a.documentElement,
                r = a.getElementsByTagName("body")[0],
                o = t.innerWidth || n.clientWidth || r.clientWidth;
            window.tpRebrandSwiper = new Swiper("#topic-truspilot-swiper-container", {
                autoplay: 480 > o ? 0 : 4e3,
                speed: 1024 > o ? 300 : 700,
                loop: !0,
                autoHeight: !!(1024 > o),
                spaceBetween: 60,
                nextButton: ".js-tp-swiper-button--next",
                prevButton: ".js-tp-swiper-button--prev",
                grabCursor: !0,
                slidesPerView: 1024 > o ? 1 : 2,
                pagination: ".js-swiper-pagination"
            })
        }
    }), $(function() {
        if (1023 < $(window).width() && $(".js-topic-logo-trustpilot").length) {
            var e = +Cookies.get("tp_shown") || 0,
                t = +Cookies.get("tp_closed") || 0;
            2 > e && 1 > t && $(".js-topic-logo-trustpilot").mouseover(function() {
                $(this).addClass("show-popup")
            }), $(".js-topic-logo-trustpilot").append('\n                        <a href="https://www.trustpilot.com/review/bookyogaretreats.com" target="_blank" class="topic-logo-trustpilot-container">\n                        \n                        <div class="tp_row">\n                              <div class="tp_reviews">' + trustpilotOverview.reviews + " reviews on</div>\n                              " + trustpilotLogo + '\n                        </div>\n                        <div class="tp_row">\n                              <div class="tp_rating">' + trustpilotOverview.rating + '</div>\n                              <div class="tplp_stars tplp_stars_' + trustpilotOverview.stars + '"><i></i><i></i><i></i><i></i><i></i></div>\n                              <div class="tp_score">' + trustpilotOverview.score + ' out of 10</div>\n                        </div>\n                        \n                        <div class="tp_cta">See all reviews</div>\n                        <div class="tp_close">✕</div>\n                        </a>\n                        '), 2 > e && ($(".js-topic-logo-trustpilot").addClass("show-popup"), Cookies.set("tp_shown", e + 1)), $(".tp_close").click(function() {
                return $(".js-topic-logo-trustpilot").removeClass("show-popup"), $(".js-topic-logo-trustpilot").addClass("donot-show-popup"), Cookies.set("tp_closed", 1), !1
            })
        }
    }), $(function() {
        if ($(".trustpilot_lp").length) {
            var e = "";
            for (var t in trustpilotOverview.split) e += '\n                        <div class="review-stat-item">\n                            <span class="review-stat-title">\n                                <span class="review-stat-value">' + trustpilotOverview.split[t] + "%</span>" + t + " (" + trustpilotOverview.split[t] + '%)</span>\n                                <div class="review-stat-bar">\n                                    <div class="review-stat-progress" style="width:' + trustpilotOverview.split[t] + '%;">\n                                    <div class="review-stat-progress-color"></div>\n                                </div>\n                            </div>\n                        </div>\n                    ';
            $(".trustpilot_lp").append('\n                    <a href="https://www.trustpilot.com/review/bookyogaretreats.com" target="_blank" class="card trustpilot_lp_card border-box">\n                        <div class="tplp_intro_wrapper">\n                            <div class="tplp_row">\n                                <div class="tplp_stars tplp_stars_' + trustpilotOverview.stars + '"><i></i><i></i><i></i><i></i><i></i></div>\n                            </div>\n                            <div class="tplp_row">\n                                <div class="tplp_score" style="margin-bottom: -3px;">BookYogaRetreats.com is rated ' + trustpilotOverview.score + ' out of 10</div>\n                                <div class="tplp_score">based on <span>' + trustpilotOverview.reviews + " reviews</span> on " + trustpilotLogo + '</div>\n                            </div>\n                        </div>\n                        <div id="review_summary_side" class="reviews-section">\n                            <div class="review-stats">\n                                ' + e + "\n                            </div>\n                        </div>\n                    </a>\n                ")
        }
    }), $(function() {
        if ($(".trustpilot_about").length) {
            var e = "";
            for (var t in trustpilotOverview.split) e += '\n                        <div class="review-stat-item">\n                            <span class="review-stat-title">\n                                <span class="review-stat-value">' + trustpilotOverview.split[t] + "%</span>" + t + " (" + trustpilotOverview.split[t] + '%)</span>\n                                <div class="review-stat-bar">\n                                    <div class="review-stat-progress" style="width:' + trustpilotOverview.split[t] + '%;">\n                                    <div class="review-stat-progress-color"></div>\n                                </div>\n                            </div>\n                        </div>\n                    ';
            $(".trustpilot_about").append('\n                    <a href="https://www.trustpilot.com/review/bookyogaretreats.com" target="_blank" class="card trustpilot_lp_card border-box">\n                        <div class="tplp_row">\n                            <div class="tplp_stars tplp_stars_' + trustpilotOverview.stars + '"><i></i><i></i><i></i><i></i><i></i></div>\n                        </div>\n                        <div class="tplp_row">\n                            <div class="tplp_score"><span>' + trustpilotOverview.reviews + " reviews</span> on " + trustpilotLogo + '</div>\n                        </div>\n                        <div id="review_summary_side" class="reviews-section">\n                            <div class="review-stats">\n                                ' + e + "\n                            </div>\n                        </div>\n                    </a>\n                ")
        }
    }), $(function() {
        if (768 > $(window).width() && $("#trustpilot_mobile_index").length) {
            $("#trustpilot_mobile_index").append('\n                    <a href="https://www.trustpilot.com/review/bookyogaretreats.com" target="_blank" class="trustpilot_logo_overview_block">\n                        <div class="tp_row">\n                            <div class="tp_rating">' + trustpilotOverview.rating + '</div>\n                            <div class="tp_stars tp_stars_' + trustpilotOverview.stars + '"><i></i><i></i><i></i><i></i><i></i></div>\n                            <div class="tp_score">' + trustpilotOverview.score + ' out of 10</div>\n                        </div>\n                        <div class="tp_row">\n                            <div class="tp_reviews">' + trustpilotOverview.reviews + " reviews on</div>\n                            " + trustpilotLogo + '\n                        </div>\n                        <div class="tp_cta">See all reviews</div>\n                        <div class="tp_close">✕</div>\n                    </a>\n                ');
            var e = +Cookies.get("tpm_shown") || 0;
            2 > e && ($("#trustpilot_mobile_index").addClass("trustpilot_logo_overview_show"), Cookies.set("tpm_shown", e + 1)), $("#trustpilot_mobile_index .tp_close").click(function() {
                return $("#trustpilot_mobile_index").removeClass("trustpilot_logo_overview_show"), Cookies.set("tpm_shown", 9), !1
            })
        }
    }), $(function() {
        $(".rp-trustpilot__box").length && ($(".rp-trustpilot__title").removeClass("hidden"), $(".rp-trustpilot__box").append('\n                    <a href="https://www.trustpilot.com/review/bookyogaretreats.com" target="_blank" class="trustpilot_logo_overview_block" onclick="gae(\'payments\',\'trustpilot_box_click\');">\n                        <div class="tp_row">\n                            <div class="tp_rating">' + trustpilotOverview.rating + '</div>\n                            <div class="tp_stars tp_stars_' + trustpilotOverview.stars + '"><i></i><i></i><i></i><i></i><i></i></div>\n                        </div>\n                        <div class="tp_row">\n                            <div class="tp_score">' + trustpilotOverview.score + " out of 10 on</div>\n                            " + trustpilotLogo + "\n                        </div>\n                    </a>\n                "))
    })
}

function getQueryStringParameterByName(e, t) {
    t = t.replace(/[\[\]]/g, "\\$&");
    var a = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
    return a ? a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : "" : null
}

function updateQueryStringParameter(e, t, a) {
    var i = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
        n = -1 === e.indexOf("?") ? "?" : "&";
    return e.match(i) ? e.replace(i, "$1" + t + "=" + a + "$2") : e + n + t + "=" + a
}

function addQueryStringParameter(e, t, a) {
    var i = e.split("#"),
        n = i[0],
        r = 1 < i.length ? "#" + i[1] : "";
    return n + (-1 === n.indexOf("?") ? "?" : "&") + t + "=" + a + r
}

function removeQueryStringParameter(e, t, a) {
    var i = e.split("?"),
        n = i[0];
    if (1 < i.length) {
        for (var r, o = 1 < (i = i[1].split("#")).length ? i[1] : "", s = i[0].split("&"), l = 0; l < s.length;) r = s[l].split("="), r[0] !== t || void 0 !== a && r[1] != a ? ++l : s.splice(l, 1);
        s.length && (n = n + "?" + s.join("&")), o.length && (n += "#" + o)
    }
    return n
}

function removeHost(e) {
    var t = e.indexOf("://"); - 1 != t && (e = e.substring(t + 3));
    var a = e.indexOf("/");
    if (-1 != a) e = e.substring(a);
    else {
        var i = e.indexOf("?"); - 1 != i && (e = "/" + e.substring(i))
    }
    return e
}

function hasHtml5Validation() {
    return "function" == typeof document.createElement("input").checkValidity
}

function hearAboutUsSuccess() {
    $(".hear-about-us-container").hide(), $(".hear-about-us-confirmation").fadeIn(), setTimeout(function() {
        $(".hear-about-us-confirmation").fadeOut()
    }, 3e3)
}
$(function() {
        var e = $(".validate-form input"),
            t = e.filter("input[readonly][required]").click(function() {
                this.setAttribute("readonly", "on")
            }).keydown(function() {
                this.setAttribute("readonly", "on")
            });
        e.on("invalid", function(e) {
            e.preventDefault();
            var t = $(this).data("empty-msg"),
                a = $(this).data("invalid-msg");
            t && a ? $("#error-msg").html("" == this.value ? t : a) : a ? $("#error-msg").html(a) : t && $("#error-msg").html(t), $(this).focus(), this.scrollIntoView()
        }).on("change", function() {
            try {
                this.setCustomValidity("")
            } catch (e) {}
            $("#error-msg").html("")
        }), $("#listing_query_arrival_date").on("change", function() {
            try {
                $("#beauty_arrival_date")[0].setCustomValidity("")
            } catch (e) {}
            $("#error-msg").html("")
        }), hasHtml5Validation() && $(".validate-form").submit(function(e) {
            t.removeAttr("readonly"), this.checkValidity() || e.preventDefault()
        })
    }),
    function(e) {
        e.extend(e, {
            belowthefold: function(t, a) {
                return e(window).height() + e(window).scrollTop() <= e(t).offset().top - a.threshold
            },
            abovethetop: function(t, a) {
                return e(window).scrollTop() >= e(t).offset().top + e(t).height() - a.threshold
            },
            rightofscreen: function(t, a) {
                return e(window).width() + e(window).scrollLeft() <= e(t).offset().left - a.threshold
            },
            leftofscreen: function(t, a) {
                return e(window).scrollLeft() >= e(t).offset().left + e(t).width() - a.threshold
            },
            inviewport: function(t, a) {
                return !(e.rightofscreen(t, a) || e.leftofscreen(t, a) || e.belowthefold(t, a) || e.abovethetop(t, a))
            }
        }), e.extend(e.expr[":"], {
            "below-the-fold": function(t) {
                return e.belowthefold(t, {
                    threshold: 0
                })
            },
            "above-the-top": function(t) {
                return e.abovethetop(t, {
                    threshold: 0
                })
            },
            "left-of-screen": function(t) {
                return e.leftofscreen(t, {
                    threshold: 0
                })
            },
            "right-of-screen": function(t) {
                return e.rightofscreen(t, {
                    threshold: 0
                })
            },
            "in-viewport": function(t) {
                return e.inviewport(t, {
                    threshold: 0
                })
            }
        })
    }(jQuery), $(function() {
        $(".hear-about-us-confirmation").hide(), $(".hear-about-us-send").on("click", function() {
            var e = $("#channel").val();
            if (null == e) return !1;
            "other" == e && (e = $("#other").val());
            var t = getUrlParameter("token");
            return $.ajax({
                type: "POST",
                url: "/customer/confirmation/customer_selected_channel",
                data: '{"token" : "' + t + '", "text" : "' + e + '"}',
                contentType: "application/json"
            }).done(function() {
                hearAboutUsSuccess()
            }), !1
        }), $("#channel").change(function() {
            var e = $(this).val();
            "other" == e ? $("#other").val("").removeClass("js-hide") : $("#other").val(e).addClass("js-hide")
        })
    });