$('document').ready(function(){

    $('.img1').parent().css('color','black');
    var  aA = $('#footerFlex > a');

    aA.click(function(ev){

        var  ev = ev || window.event ;
        var target = ev.target || ev.srcElement ;
        
        for ( let i = 0 ; i < aA.length ; i++){

            if( i != 2){
                $(aA[i]).children().attr('src',function(){
                    return 'img/a'+i+'.png';
                });
                $(aA[i]).css('color','#959191');
            } 
        }

        if(target.nodeName.toLowerCase() == 'img'){

            $(target).parent().css('color','black');

            for( let i =0 ; i < aA.length ; i++){

                if( target.parentNode == aA[i] ){

                    $(target).attr('src', 'img/b'+i+'.png');
                }
            }   
        }
        if(target.nodeName.toLowerCase() == 'a'){

            $(target).css('color','black');

            for( let i =0 ; i < aA.length ; i++){

                if( target == aA[i] ){

                    $(target).children().attr('src', 'img/b'+i+'.png');

                }
            }   

        }
    })
})
    // $('.img1').parent().click(function(){
    //     $('.img1').attr('src',"img/a2.png"),$('.img1').parent().css('color','black');
    //     $('.img2').attr('src',"img/b1.png"),$('.img2').parent().css('color','#959191');
    //     $('.img3').attr('src',"img/d1.png"),$('.img3').parent().css('color','#959191');
    //     $('.img4').attr('src',"img/e1.png"),$('.img4').parent().css('color','#959191');
    // })

    // $('.img2').parent().click(function(){
    //     $('.img1').attr('src',"img/a1.png"),$('.img1').parent().css('color','#959191');
    //     $('.img2').attr('src',"img/b2.png"),$('.img2').parent().css('color','black');
    //     $('.img3').attr('src',"img/d1.png"),$('.img3').parent().css('color','#959191');
    //     $('.img4').attr('src',"img/e1.png"),$('.img4').parent().css('color','#959191');
    // })
    // $('.img3').parent().click(function(){
    //     $('.img1').attr('src',"img/a1.png"),$('.img1').parent().css('color','#959191');
    //     $('.img2').attr('src',"img/b1.png"),$('.img2').parent().css('color','#959191');
    //     $('.img3').attr('src',"img/d2.png"),$('.img3').parent().css('color','black');
    //     $('.img4').attr('src',"img/e1.png"),$('.img4').parent().css('color','#959191');
    // })

    // $('.img4').parent().click(function(){
    //     $('.img1').attr('src',"img/a1.png"),$('.img1').parent().css('color','#959191');
    //     $('.img2').attr('src',"img/b1.png"),$('.img2').parent().css('color','#959191');
    //     $('.img3').attr('src',"img/d1.png"),$('.img3').parent().css('color','#959191');
    //     $('.img4').attr('src',"img/e2.png"),$('.img4').parent().css('color','black');
    // })
    // $('#footerRad').click(function(){
    //     $('.img1').attr('src',"img/a1.png"),$('.img1').parent().css('color','#959191');
    //     $('.img2').attr('src',"img/b1.png"),$('.img2').parent().css('color','#959191');
    //     $('.img3').attr('src',"img/d1.png"),$('.img3').parent().css('color','#959191');
    //     $('.img4').attr('src',"img/e1.png"),$('.img4').parent().css('color','#959191');
    // })

    

