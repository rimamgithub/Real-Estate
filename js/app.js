
        $(window).on('load', function () {
            $('.loading-container').fadeOut('slow');
        });

        $(document).ready(function () {
            $('.list').click(function () {
                const value = $(this).attr('data-filter');
                if (value == 'all') {
                    $('.itemBox').show('1000');
                }
                else {
                    $('.itemBox').not('.' + value).hide('1000');
                    $('.itemBox').filter('.' + value).show('1000');
                }
            })
            $('.list').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            })
        })

        function openForm(evt, formName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabContent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none"
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(formName).style.display = "flex";
            evt.currentTarget.className += " active";
        }
