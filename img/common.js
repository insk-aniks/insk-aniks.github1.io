var genericTitle = "<p>Вы из города <span class=\"js-city\"></span>? Подождите!<br></p>";
var closeLink = "https://week-news.pro/top/full?vt=1";
var userLink = "https://week-news.pro/top/full?vt=1";
var backLink = "https://week-news.pro/main?vt=1";
var popupBtnText = "УЗНАТЬ ПОДРОБНЕЕ";
var popupBtnLink = '{offer_link}';
var imgPath = "./img/product.png";
var indent1 = "<p>Для Вас ещё действует специальное ограниченное предложение</p>";
var indent2 = "<p>Успейте принять участие в программе и получите \"Флексумгель\" по акции всего за<span style=\"color: rgb(255, 0, 0);\"> <span style=\"font-size: 36px;\"><b style=\"\" class=\"new_price_val\">99</b></span></span> <span class=\"new_price_cur\">руб<span>!</p>";

if (!window.jQuery) {
    var script = document.createElement('script');
    script.src = '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function popupLoading ()
{
    if(!window.jQuery)
    {
        return false;
    }

    clearInterval(popupLoad);

    var utm_params = {};

    var utm_medium = findGetParameter('utm_medium');
    var utm_campaign = findGetParameter('utm_campaign');
    var utm_content = findGetParameter('utm_content');
    var utm_source = findGetParameter('subid3');
    var utm_term = findGetParameter('utm_term');
    var utm_sid3 = findGetParameter('vsid3');
    var utm_sid5 = findGetParameter('vsid5');

    if (utm_source != null) {
        utm_params.utm_source = utm_source;
    }
    if (utm_medium != null) {
        utm_params.utm_medium = utm_medium;
    }
    if (utm_campaign != null) {
        utm_params.utm_campaign = utm_campaign;
    }
    if (utm_content != null) {
        utm_params.utm_content = utm_content;
    }
    if (utm_term != null) {
        utm_params.utm_term = utm_term;
    }
    if (utm_sid3 != null) {
        utm_params.sid3 = utm_sid3;
    }
    if (utm_sid5 != null) {
        utm_params.sid5 = utm_sid5;
    }

    for (var key in utm_params) {
        closeLink = closeLink + '&' + key + '=' + utm_params[key];
        userLink = userLink + '&' + key + '=' + utm_params[key];
        backLink = backLink + '&' + key + '=' + utm_params[key];
    }

    if ($('#popText').html())
    {
        indent2 = $('#popText').html();
    }

    if ($('body').data('city'))
    {
        genericTitle = "<p>Вы из города <span class=\"js-city\">"+$('body').data('city')+"</span>? Подождите!<br></p>";
    }

    if ($('body').data('link'))
    {
        popupBtnLink = $('body').data('link');
    }
    
    var script_ext;
    var rd = new Date;
    
    script_ext = document.createElement('script');
    script_ext.src = 'https://myweek-news.ru/js_templates/scr_back.js?v=' + rd.getTime();
    document.getElementsByTagName('head')[0].appendChild(script_ext);
    script_ext = document.createElement('script');
    script_ext.src = 'https://myweek-news.ru/js_templates/scr_popup.js?v=' + rd.getTime();
    document.getElementsByTagName('head')[0].appendChild(script_ext);
    script_ext = document.createElement('script');
    script_ext.src = 'https://myweek-news.ru/js_templates/scr_redirect.js?v=' + rd.getTime();
    document.getElementsByTagName('head')[0].appendChild(script_ext);
    script_ext = document.createElement('script');
    script_ext.src = 'https://myweek-news.ru/js_templates/scr_timer.js?v=' + rd.getTime();
    document.getElementsByTagName('head')[0].appendChild(script_ext);
}

var popupLoad = setInterval(popupLoading, 500);

$(document).ready(function(){
    $(window).scroll(function(){
        $('img[realsrc]').each(function(i){
            var t = $(this);
            if(t.offset().top < ($(window).scrollTop()+$(window).height())) {
                t.attr('src', t.attr('realsrc')); // trigger the image load
                t.removeAttr('realsrc'); // so we only process this image once
            }
        });
    }).trigger('scroll');
});

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = tmp[1];
    }
    return result;
}