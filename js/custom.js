/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	Responsive Labour Directory Template

-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var labourdirectory = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            /*-------------- Labour Directory Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.Slider();
            this.MailFunction();
            this.Counter();
            this.Wow();
            this.Load_more();
            this.Responsive_menu();

        },

        /*-------------- Interior Design definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        //Banner Slider

        Slider: function() {
            if ($(".rev_slider_wrapper").length) {

                var tpj = jQuery;

                var revapi1068;
                tpj(document).ready(function() {
                    if (tpj("#rev_slider_1068_2").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_1068_2");
                    } else {
                        revapi1068 = tpj("#rev_slider_1068_2").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "plugin/revolution/js",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            delay: 9000,
                            navigation: {
                                keyboardNavigation: "off",
                                keyboard_direction: "horizontal",
                                mouseScrollNavigation: "off",
                                mouseScrollReverse: "default",
                                onHoverStop: "off",
                                touch: {
                                    touchenabled: "on",
                                    swipe_threshold: 75,
                                    swipe_min_touches: 1,
                                    swipe_direction: "vertical",
                                    drag_block_vertical: false
                                },
                                bullets: {
                                    enable: true,
                                    hide_onmobile: true,
                                    hide_under: 1024,
                                    style: "uranus",
                                    hide_onleave: false,
                                    direction: "vertical",
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 30,
                                    v_offset: 0,
                                    space: 5,
                                    tmp: '<span class="tp-bullet-inner"></span>'
                                }
                            },
                            viewPort: {
                                enable: true,
                                outof: "wait",
                                visible_area: "80%",
                                presize: false
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "single",
                            shadow: 0,
                            spinner: "off",
                            stopLoop: "off",
                            stopAfterLoops: -1,
                            stopAtSlide: -1,
                            shuffle: "off",
                            autoHeight: "off",
                            autoPlay: "true",
                            fullScreenAutoWidth: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: ".header",
                            fullScreenOffset: "",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                nextSlideOnWindowFocus: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                }); /*ready*/
            }
        },
        //Help mail function	
        MailFunction: function() {
            $('.submit_form').on('click', function() {
                var u_name = $('#name').val();
                var u_email = $('#email').val();
                var u_phoneno = $('#phone').val();
                var u_subject = $('#subject').val();
                var u_msg = $('#message').val();

                $.ajax({
                    type: "POST",
                    url: "contactmail.php",
                    data: {
                        'username': u_name,
                        'useremail': u_email,
                        'userphone': u_phoneno,
                        'usersubject': u_subject,
                        'user_msg': u_msg,
                    },
                    success: function(msg) {
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#name').val("");
                            $('#email').val("");
                            $('#subject').val("");
                            $('#phone').val("");
                            $('#message').val("");
                            $('#err_msg').html(full_msg[1]);
                        } else {
                            $('#name').val(u_name);
                            $('#email').val(u_email);
                            $('#phone').val(u_phoneno);
                            $('#subject').val(u_subject);
                            $('#message').val(u_msg);
                            $('#err_msg').html(full_msg[1]);
                        }
                    }
                });
            });
        },
        // Counter
        Counter: function() {
            if ($('.counter_wrapper').length > 0) {
                $('.counter_wrapper').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },
		Load_more:function() {
			$(".view_more").click(function(){
				$(this).addClass('hide_me');
				$(".more_category").show();
			});
		},
        //Wow
        Wow:function() {
            new WOW().init();
        },
		Responsive_menu:function() {
			$(".menu_toggle").click(function(){
				$(".ld_menu_wrapper").addClass('open_menu');
			});
			$(".menu_close").click(function(){
				$(".ld_menu_wrapper").removeClass('open_menu');
			});
		},
		



    };

    $(document).ready(function() {
        labourdirectory.init();
    });
	
		// Load Event
	
	$(window).on('load', function() {
		jQuery(".loader").fadeOut();
		jQuery(".loader").delay(600).fadeOut("slow");

	});
	

    //On scroll fixed menu
    $(window).scroll(function() {
    });
	
})(jQuery);