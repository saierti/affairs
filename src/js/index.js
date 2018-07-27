$('document').ready(function(){


































    /****************************************** */

    $('.img4').parent().css('color','black');
    var  aA = $('#footerFlex > a');




    /**************************/ 
    var oHead2 = $('#header2')
    var oHead3 = $('#header3')
    var oDiv1 = $('#part1')
    var oDiv2 = $('#part2')
    var oDiv3 = $('#part3')
    $(aA[1]).click(function(){
        {
            $(oHead3).css('display','block');
            $(oDiv3).css('display','block');
            $(oHead2).css('display','none');
            $(oDiv2).css('display','none');
            $(oDiv1).css('display','none');
        }
    })
    $('.div1').click(function(){
        {
            $(oHead3).css('display','none');
            $(oDiv3).css('display','none');
            $(oHead2).css('display','block');
            $(oDiv2).css('display','block');
            $(oDiv1).css('display','none');
        }
    })
    $(aA[4]).click(function(){
        {
            $(oHead3).css('display','none');
            $(oDiv3).css('display','none');
            $(oHead2).css('display','none');
            $(oDiv2).css('display','none');
            $(oDiv1).css('display','block');
        }
    })

    /***************************/ 

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
    /************************* */
})






    

