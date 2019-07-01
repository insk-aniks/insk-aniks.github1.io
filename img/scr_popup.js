$(document).ready(function(){
    $('head').append('<link href="./css/popup.css" rel="stylesheet" media="all" />');
    $('body').append('<div class="t4527"></div>'+
    '<div style="display: none;" class="p5213 dialog">'+
        '<div class="t1296">'+
            '<h4 class="y3498" style="text-align: center !important;">'+genericTitle+'</h4>'+
            /*'<div class="r6934" title="Закрыть">X</div>'+*/
            '<div class="i9983"><img src="'+imgPath+'"></div>'+
            '<div class="n1543"><div>'+indent1+'</div><br>'+indent2+'</div>'+
            '<a class="b4571" href="'+popupBtnLink+'" target="_blank">'+popupBtnText+'</a>'+
        '</div>'+
    '</div>'
    );

    if($(".t1296 .js-city").length > 0)
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '//click.lucky.online/click/ip-location.html', false);
        xhr.send();

        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            $('.js-city').html(response.city);
        }
    }    

    setTimeout(function () {
        var flag = true;

        $(window).mouseout(function(e){
            if(e.pageY - $(window).scrollTop() < 1 && flag == true)
            {
                $('.p5213, .t1296').fadeIn(300);
                $('.t4527').fadeIn(300);

                $(document.body).addClass('is-open-modal');
                $('.p5213').addClass('is-open');

                flag = false;
            }
        });
    }, 2000);

    if ($('#p5213_show').lenght > 0)
    {
        var windowHeight = $(window).height();

        $(document).on('scroll', function() {
            var self = $('#p5213_show');
            var height = self.offset().top + self.height();
            
            if ($(document).scrollTop() + windowHeight >= height)
            {
                $('.p5213, .t1296').fadeIn(300);
                $('.t4527').fadeIn(300);

                $(document.body).addClass('is-open-modal');
                $('.p5213').addClass('is-open');
            }
        });
    }

    $('div.r6934, .t4527').click(function(){
        $('.p5213').css('display', 'none');
        $('.t4527').css('display', 'none');
    });  

    $('.r6934').on('click', function(e){
        if (closeLink != '')
        {
            window.open((closeLink, closeLink));
        }
    });
    
    
});
