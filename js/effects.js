$(document).ready(function () {
    $("#card").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card2").flip({
        axis: 'x',
        trigger: 'click'
    });
     $("#card3").flip({
        axis: 'x',
        trigger: 'click'
    });


        if( $(window).width() > 800){
            $('header .textos').css({
                opacity: 0,
                marginLeft: 0
            });
    
            $('header .textos').animate({
                opacity: 1,
                marginLeft: '-52px'
            }, 2000);
        }

        $('.boton').css({
            opacity: 0,
            marginTop: 0
        });

        $('.boton').animate({
            opacity: 1,
            marginTop: '-50px'
        }, 2000);

});

