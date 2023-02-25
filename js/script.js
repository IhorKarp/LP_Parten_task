$(document).ready(function() {
    $('.menu-line__burger') .click(function(event) {
        $('.menu-line__burger,.menu-line__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.top-line__icon-phone') .click(function(event) {
        $('.top-line__info,.top-line').toggleClass('phone-active');
    });
});




//vanilla js:
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
    
    //...or JQuery: 
    function ibg(){
    
    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();

    