$('document').ready(function(){
    var flag = 0;
    $('.btnPick').click(function(){
            if(flag == 0){
                $(this).css('background-image','url(img/pick1.png)');
                flag++;
            }
            else{
                $(this).css('background-image','url(img/pick0.png)');
                flag--;
             }
    });
    //点击卡片跳转到卡片详情
    $('.mainImg').click(function(){
        $('#header').css('display','none');
        $('#main').css('display','none');
        $('#carddetail').css('display','block');
        $('#carddetail').css('opacity','1');
    });
    $('.btnDiscuss').click(function(){
        $('#header').css('display','none');
        $('#main').css('display','none');
        $('#carddetail').css('display','block');
        $('#carddetail').scrollTop(600);
        $('#carddetail').css('opacity','1');   
    });
});
