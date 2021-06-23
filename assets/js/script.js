/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    $(function () {
        var valueBubble = '<output class="rangeslider__value-bubble" />';
        function updateValueBubble(pos, value, context) {
            console.log(context.$element[0].attributes[0].nodeValue);
            pos = pos || context.position;
            value = value || context.value;
            var $valueBubble = $('.rangeslider__value-bubble', context.$range);
            var tempPosition = pos + context.grabPos;
            var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

            if ($valueBubble.length) {
                $valueBubble[0].style.left = Math.ceil(position) + 'px';
                // $valueBubble[0].innerHTML =  `$${value}`;
                $valueBubble[0].innerHTML = context.$element[0].attributes[0].nodeValue === 'loanTerms' ? `${value} Months` : `$${value}`;
            }
        }

        $('input[type="range"]').rangeslider({
            polyfill: false,
            onInit: function () {
                this.$range.append($(valueBubble));
                updateValueBubble(null, null, this);
            },
            onSlide: function (pos, value) {
                updateValueBubble(pos, value, this);
            }
        });
    });



    // jquery datepicker
    $(function () {
        if ($("#datepicker").length) {
            $("#datepicker").datepicker({
                changeMonth: true,
                changeYear: true
            });
        }
    });

    // jquery datepicker
    $(function () {
        if ($(".lendingPartnerCarousel").length) {
            $(".lendingPartnerCarousel").owlCarousel({
                items: 7,
                loop: true,
                margin: 18,
                nav: $(window).width() > 1140 ? true : false,
                dots: false,
                autoplay: true,
                center: $(window).width() > 1140 ? true : false,
                autoplayHoverPause: true,
                autoHeight: true,
                navText: ["<span class='left'><img src='assets/img/left-chevron.svg'  alt='' class='img-fluid' /> </span>", "<span class='right'><img src='assets/img/right-chevron.svg'  alt='' class='img-fluid' /></span>"],
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 4
                    },
                    1024: {
                        items: 2
                    },
                    1200: {
                        items: 7
                    }
                }
            });
        }
    });


    // jquery datepicker
    $(function () {
        if ($(".useSelect2").length) {
            $('.useSelect2').select2();
        }
    });


    // custom steps
    if ($('.financeApplication-tab').length) {
        function stepsButtonInit() {
            if ($('.financeApplication-tab li.clickMe:first-child > a').hasClass("activeTab")) {
                $('#btn-prev').hide()
            } else {
                $('#btn-prev').show()
            }
            if ($('.financeApplication-tab li.clickMe:last-child > a').hasClass("activeTab")) {
                $('#btn-next').hide()
                $('#btn-submit').show()
            } else {
                $('#btn-submit').hide()
                $('#btn-next').show()
            }
        }
        function stepsButtonTrigger() {
            $('#btn-next').on('click', function () {
                $('.financeApplication-tab .clickMe a.activeTab').parent('.clickMe').next().find('a').trigger("click");
            });

            $('#btn-prev').on('click', function () {
                $('.financeApplication-tab .clickMe a.activeTab').parent('.clickMe').prev().find('a').trigger("click");
            });
        }

        $(function () {
            stepsButtonInit();
            $('.financeApplication-tab .clickMe a').click(function (e) {
                e.preventDefault();
                $('.financeApplication-tab .clickMe a').removeClass('activeTab');
                $(this).addClass('activeTab');
                var tagid = $(this).data('tag');
                $('.financeApplication-tabContent .list').removeClass('active').addClass('hide');
                $('#' + tagid).addClass('active').removeClass('hide');
                stepsButtonInit();
            });
            stepsButtonTrigger();
        });
    }





});
