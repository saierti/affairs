$('document').ready(function(){


































    /***************页面跳转测试部分************************** */

    $('.img1').parent().css('color','black');
    var  aA = $('#footerFlex > a');









    /**************************/ 
    var oHeader = $('#header');

    var oDiv1 = $('#main');
    var oDiv2 = $('#social');
    var oDiv4 = $('#message');
    var oDiv5 = $('#me');
    var oDiv51 = $('#myBusiness');
    var oDiv52 = $('#myGroup');
    var oDiv53 = $('#myBin');
    var oDiv54 = $('#history');

    oDiv1.css('display','flex');          /**********首页！！！！ */

    $(aA[0]).click(function(){
    
        oDiv1.css('display','flex');
        $('#header').css('display','block')
        $('#header1').text('待领取')
        $('#header2').text('待完成')
        $('#mainhead').css('display','block')
        $('#otherhead').css('display','none')

        oDiv4.css('display','none');
        oDiv2.css('display','none');
        oDiv5.css('display','none');
        oDiv51.css('display','none');
        oDiv52.css('display','none');
        oDiv53.css('display','none');
        oDiv54.css('display','none');
    })
    $(aA[1]).click(function(){
          
        oDiv2.css('display','block');
        $('#header').css('display','block')
        $('#header3').text('社交')
        $('#mainhead').css('display','none')
        $('#otherhead').css('display','block')

        oDiv1.css('display','none');
        oDiv4.css('display','none');
        oDiv5.css('display','none');
        oDiv51.css('display','none');
        oDiv52.css('display','none');
        oDiv53.css('display','none');
        oDiv54.css('display','none');

    })
    $(aA[3]).click(function(){
        oDiv4.css('display','block');
        $('#header').css('display','block');
        $('#header3').text('待办')
        $('#mainhead').css('display','none')
        $('#otherhead').css('display','block')

        oDiv1.css('display','none');
        oDiv2.css('display','none');
        oDiv5.css('display','none');
        oDiv51.css('display','none');
        oDiv52.css('display','none');
        oDiv53.css('display','none');
        oDiv54.css('display','none');
    })
    $(aA[4]).click(function(){

        oDiv5.css('display','block');
        $('#header').css('display','none')

        oDiv1.css('display','none');
        oDiv2.css('display','none');
        oDiv4.css('display','none');
        oDiv51.css('display','none');
        oDiv52.css('display','none');
        oDiv53.css('display','none');
        oDiv54.css('display','none');

    })

    $('.div1').click(function(){

        oDiv51.css('display','block');
        $('#header').css('display','block')
        $('#header3').text('我的事务')
        $('#mainhead').css('display','none')
        $('#otherhead').css('display','block')
        
        oDiv1.css('display','none');
        oDiv2.css('display','none');
        oDiv4.css('display','none');
        oDiv5.css('display','none');
        oDiv52.css('display','none');
        oDiv53.css('display','none');
        oDiv54.css('display','none');

    })
    $('.div2').click(function(){

        oDiv52.css('display','block');
        $('#header').css('display','block')
        $('#header3').text('我的小组')
        $('#mainhead').css('display','none')
        $('#otherhead').css('display','block')
        
        oDiv1.css('display','none');
        oDiv2.css('display','none');
        oDiv4.css('display','none');
        oDiv5.css('display','none');
        oDiv51.css('display','none');
        oDiv53.css('display','none');
        oDiv54.css('display','none');

    })

    $('.div3').click(function(){

        oDiv53.css('display','block');
        $('#header').css('display','block')
        $('#header3').text('草稿箱')
        $('#mainhead').css('display','none')
        $('#otherhead').css('display','block')
        
        oDiv1.css('display','none');
        oDiv2.css('display','none');
        oDiv4.css('display','none');
        oDiv5.css('display','none');
        oDiv52.css('display','none');
        oDiv51.css('display','none');
        oDiv54.css('display','none');

    })


    $('.div4').click(function(){

        oDiv54.css('display','block');
        $('#header').css('display','block')
        $('#header1').text('个人记录')
        $('#header2').text('小组记录')
        $('#mainhead').css('display','block')
        $('#otherhead').css('display','none')
        
        oDiv1.css('display','none');
        oDiv2.css('display','none');
        oDiv4.css('display','none');
        oDiv5.css('display','none');
        oDiv51.css('display','none');
        oDiv52.css('display','none');
        oDiv53.css('display','none');

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






    

