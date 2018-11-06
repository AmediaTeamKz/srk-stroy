$(function(){
$('[data-tab]').click(function(){
    var t = $(this),
        a = $('[tab].active'),
        ti = t.attr('data-tab'),
        ne = $('[tab='+ti+']');
    
    if(!ne.hasClass('active')){
        ne.fadeIn().addClass('active')
        a.hide().removeClass('active');
    }

})

$('.hambu').click(function(){
    var m = $('.redheader'),
        b = $('body');

    if(!m.hasClass('open')){
        m.fadeIn().addClass('open')
        // b.css({'overflow':'hidden'})
    }
    else{
        // b.css({'overflow':'auto'})
        m.fadeOut().removeClass('open')
    }
})


$('.revslider').slick({
    nextArrow: '<button class="slick-next"><img class="svg" src="../img/svg/greenarr.svg" alt="" /></button>',
    prevArrow: '<button class="slick-prev"><img class="svg" src="../img/svg/greenarr.svg" alt="" /></button>',
})

$('[modal]').click(function(e){
    e.preventDefault()
    var t = $(this),
        i = t.attr('id'),
        b = $('.modalBg'),
        h = t.hasClass('close');
    if(h){
        var id = t.attr('modal'),
            obj = $('#'+id);
            b.fadeOut();
            obj.fadeOut();
            $('body').css({'overflow':'auto'})
    }else{
        var id = t.attr('modal'),
                    obj = $('#'+id);
                    b.fadeIn().css({'display':'flex'});
                    obj.fadeIn();
                    $('body').css({'overflow':'hidden'})

    }
})

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});



 $("a[href*='#']").on("click", function(e){
    $('.redheader').stop().animate({
        'opacity':'0.3'
    })
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 777, function(){
    $('.redheader').stop().animate({
        'opacity':'1'
    })
    });

    e.preventDefault();
    return false;
});





});

