$('document').ready(function(){

    $('.img4').parent().css('color','black');
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






    

