
/* Use https://skalman.github.io/UglifyJS-online/ to minify this code */

jQuery(function($){


    var view = $(window),

        htmlBody = $("html, body"),

        viewHeight = view.height(),

        body = $("#top"),

        bodyHeight = body.height(),

        wrapper = $("#wrapper"),

        header = $("#header"),

        container = $("#container"),

        navMain = $("#nav_main"),

        info = $("#info"),

        infoToggle = $("#info_toggle"),

        hamburger = $(".hamburger"),                        // for toggleMenu()

        main = $("#main"),

        article = $(".mod_article"),

        aNoLink = $("a.no_link"),

        footer = $("#footer"),

        toTopElem = $("#to_top");                         // Fensterhoehe
;

    function showCookieNotice(){

        var cookie_accepted = localStorage.getItem("cookie_accepted");

        if (cookie_accepted === null){

            var cookieNotice = $("#cookie_notice"),
                accept_notice = cookieNotice.find("#accept_notice");

            cookieNotice.removeClass("accepted");

            accept_notice.on("click", function(){
                cookieNotice.addClass("accepted");
                localStorage.setItem("cookie_accepted", true);
            });
        }
    }



    // function sessionCookieIndicator(){
    //
    //     var infoAccepted = localStorage.getItem("infoAccepted"),
    //         eventIndicator = document.getElementById("events_indicator"),
    //         toEvCal = document.getElementById("toevcal"),
    //         toEvCalN = document.getElementById("toevcaln"),
    //         toEvCalY = document.getElementById("toevcaly");
    //
    //     if (infoAccepted == null){
    //
    //         eventIndicator.classList.remove("accepted");
    //
    //         function acceptanceA(e){
    //
    //             e.preventDefault();
    //             localStorage.setItem("infoAccepted", true);
    //             eventIndicator.classList.add("accepted")
    //             eventIndicator.classList.remove("insight");
    //         }
    //
    //         function acceptanceB(e){
    //
    //             setTimeout(function() {
    //
    //                 window.location.href = url;
    //
    //             }, 50);
    //         }
    //
    //         toEvCalN.addEventListener("click", function(e){
    //
    //             acceptanceA(e);
    //         });
    //
    //         toEvCal.addEventListener("click", function(e){
    //
    //             acceptanceA(e);
    //
    //             url = this.href;
    //             acceptanceB(e);
    //         });
    //
    //         toEvCalY.addEventListener("click", function(e){
    //
    //             acceptanceA(e);
    //
    //             url = this.href;
    //             acceptanceB(e);
    //         });
    //
    //     }
    // }



    function checkJS(){

        body.toggleClass("js_off js_on").addClass("loaded");
    }


    function noLink(){

        aNoLink.click(function(event){

            event.preventDefault();
        });
    }


    function infoInOut(){

        infoToggle.click(function(){

            if(hamburger.is(".active")){
                hamburger.removeClass("active");
                navMain.removeClass("out");
            }

            $(this).toggleClass("active");
            info.toggleClass("out");
        });
    }


    function menuInOut(){

        hamburger.click(function(){

            if(infoToggle.is(".active")){
                infoToggle.removeClass("active");
                info.removeClass("out");
            }

            $(this).toggleClass("active");
            navMain.toggleClass("out");
        });
    }

    function scrollToContent(){

        var sliderHeight = $(window).height(),
            toContentButton = $(".to_content").find("a");

        toContentButton.click(function(event) {
            event.preventDefault();
            $("html,body").animate({"scrollTop" : sliderHeight}, 1000);
        });
    }

    function stickyFooter(){

        var viewHeight = view.height(),

            wrapperHeight = wrapper.height(),

            footerHeight = footer.height(),

            mainOffset = main.offset(),                         // offset.top = Headerhoehe

            headFootHeight = mainOffset.top + footerHeight,     // vorhandene Header- und Footerhoehe

            minContentHeight = viewHeight - headFootHeight;     // Minimalhoehe des #container, um das Browserfenster auszufuellen


        if (wrapperHeight < viewHeight){                        // erst feuern, falls #wrapper kleiner als Browserfenster

            container.removeAttr("style").css("min-height", minContentHeight);
        }

        footer.addClass("loaded");                              // Anti-Flash-Effect, benoetigt sticky_footer.css / sticky_footer.less

    }

    function toTop(){

        toTopElem.click(function(){

            htmlBody.animate({ scrollTop: 0 }, "slow");
        });
    }

    function detectScroll(){

        if ($(this).scrollTop() >= viewHeight / 2){

            toTopElem.addClass("out");

            var eventIndicator = $("#events_indicator");

            if(eventIndicator.is(".accepted")){

            } else {

                eventIndicator.addClass("insight");
            }
        }

        else {
            toTopElem.removeClass("out");
        }
    }

    /*function activeSlide(){

        var slider = $("#slider"),
            sliderWidth = slider.width(),
            sliderWidthHalf = sliderWidth / 2,
            slide = slider.find("div.block"),
            slideFirst = slide.first();

            slideFirst.addClass("active");

        setInterval(function(){

            slide.each(function(){

                $(this).removeClass("active");

                if($(this).offset().left < 0) {

                    $(this).removeClass("active")

                } else if($(this).offset().left <= sliderWidthHalf){

                    $(this).addClass("active")
                }


            });

        }, 1000);
    }*/

    function showPlanager(){

        var togglePlanager = $("#show_planager"),
            planager = $("#planager");

        togglePlanager.click(function(event){

            event.preventDefault();
            planager.attr("src", "https://www.planager.de/boulder-island/public/list.html?inline=1").removeClass("display_none");
        });
    }
    
    function showBoulderado(){

        var toggleBoulderado = $("#show_boulderado"),
            boulderado = $("#boulderado");

        toggleBoulderado.click(function(event){

            event.preventDefault();
            boulderado.attr("src", "https://www.boulderado.de/kurse/boulderisland/public/list.html?inline=1").removeClass("display_none");
        });
    }

    function sameHeightElement(){

        var viewWidth = view.width();

        if(viewWidth >= 640){

            var columns = $(".fix_height");

            columns.each(function(){

                var teaserH = $(this).find(":header"),
                    teaserBlock = $(this).find(">div.block"),
                    teaserP = $(this).find("p:not(.button)"),
                    maxHeightH3 = -1,
                    maxHeightBlock = -1,
                    maxHeightP = -1;
            //        reviewsP = $(".reviews").find("p");

                teaserH.each(function(){

                    if ($(this).outerHeight() > maxHeightH3) {
                        maxHeightH3 = $(this).outerHeight();
                    }
                });

                teaserP.each(function(){

                    if ($(this).outerHeight() > maxHeightP) {
                        maxHeightP = $(this).outerHeight();
                    }
                });

                teaserBlock.each(function(){

                    if ($(this).outerHeight() > maxHeightBlock) {
                        maxHeightBlock = $(this).outerHeight();
                    }
                });

                teaserH.removeAttr("style").css("min-height", maxHeightH3).parent().addClass("loaded");
                teaserP.removeAttr("style").css("min-height", maxHeightP);
                teaserBlock.removeAttr("style").css("min-height", maxHeightBlock);
            //    reviewsP.css("line-height", maxHeightP + "px");
            });
        }
    }

    function animateRoutes(){

        if (body.is(".home")){

            var routesBar = $("#routes_bar"),
                routesBarOffset = routesBar.offset(),
                timeToAnimate = routesBarOffset.top - viewHeight + 50;

            if($(this).scrollTop() > timeToAnimate){
                routesBar.addClass("animate");
            } else {
                routesBar.removeClass("animate");
            }
        }
    }

    function changeSize(){

        if(viewHeight < bodyHeight){

            var changeSet = header.height() * 1.5;

            if ($(this).scrollTop() >= changeSet){

                header.addClass("change");
                container.addClass("change");
                info.addClass("change");
            }

            else {
                header.removeClass("change");
                container.removeClass("change");
                info.removeClass("change");
            }
        }
    }


    function sliderAutoHeight(){

        if(article.is(".panorama")){

            var slider = $(".panorama"),
                sliderOffset = slider.offset(),
                sliderHeight = slider.height(),
                slides = slider.find(">div"),
                slidesHeight = slides.height(),
                sliderSum = sliderOffset.top + slidesHeight,
                hiddenSlider = slidesHeight - sliderHeight,
                hiddenSliderHalf = hiddenSlider / 2;

            if(slidesHeight > sliderHeight){

                slides.css("margin-top", - hiddenSliderHalf);
                slider.removeClass("height_auto");

            } else {
                slides.css("margin-top", "inherit");
                slider.addClass("height_auto");
            }
        }
    }

    function fixedVid(){

        var vidDiv = $(".ce_youtube, .ce_vimeo"),
            vidFrame = vidDiv.find("iframe"),
            vidDivWidth = vidDiv.width();

        vidFrame.each(function(){

            var vidFrameHeight = $(this).attr("height"),
                vidFrameWidth = $(this).attr("width"),
                vidFrameRatio = vidFrameHeight / vidFrameWidth;

            $(this).attr("width",vidDivWidth).attr("height", vidDivWidth * vidFrameRatio).addClass("loaded");
        });
    }

    function popUp(){

        var popUpWrap = main.find(".popup_info"),
            popUpX = popUpWrap.find(".popup_x");


        popUpX.click(function(){

            event.preventDefault();

            $(this).parents(".popup_info").addClass("adios");
        });
    }

/* ------------------------------------------------------------ CALL FUNCTIONS ----- */

    let last_known_scroll_position = 0;
    let ticking = false;

    $(window).on("resize", function(){
        sameHeightElement();
        sliderAutoHeight();
        scrollToContent();
        stickyFooter();
        fixedVid();
    });

    $(document).ready(function(){
        showCookieNotice();
        // sessionCookieIndicator();
        toTop();
        noLink();
        checkJS();
        infoInOut();
        menuInOut();
        changeSize(last_known_scroll_position);
        detectScroll(last_known_scroll_position);
        //showPlanager();
        showBoulderado();
        scrollToContent();
    });

    $(window).on("load", function(){
    //    activeSlide();
        popUp();
        fixedVid();
        stickyFooter();         // Erst wenn ALLE Elemente "gefuellt" sind, kann man die Werte auslesen
        animateRoutes();
        sliderAutoHeight();
        sameHeightElement();
    });

    $(window).scroll(function(){

        last_known_scroll_position = window.scrollY;

        if (!ticking){

            window.requestAnimationFrame(function(){

                detectScroll(last_known_scroll_position);
                changeSize(last_known_scroll_position);
                animateRoutes(last_known_scroll_position);

                ticking = false;
            });

            ticking = true;
        }
    });
});
