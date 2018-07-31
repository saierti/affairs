$('document').ready(function(){
    var head = $('.userhead');
    var headarea = $('.headarea');
    var length = $('.userhead').length;
    //头像多余五个时显示省略
    if(length > 5){
        $(head[4]).css('background-image','url(img/more.png)');
        $('.headarea').append('<div class="userhead"></div>');
        $('.userhead:last').css('background-image','url(img/slideup.png)');
        var length1 = $('.userhead').length;
        for(let i = 5;i < length;i++){
            $(head[i]).css('display','none');
        }
        if(head[5].style.display == 'none'){
            //点击more键时展开
            $(head[4]).click(function(e){
                e.preventDefault();
                e.stopPropagation();//阻止冒泡，防止点击时同时触发下拉和上拉
                $(head[4]).css('background-image','url(img/test.png)');
                $('.headarea').css('height',Math.ceil(length1/5)*(35)+'px');//Math.ceil向上取整
                for(let i = 5;i < length1;i++){
                    $(head[i]).css('display','inline-block');
                }
            })
        }
        //上拉
        $('.userhead:last').click(function(e){
            e. stopPropagation();
            $('.headarea').css('height','35px');
            setTimeout(function(){
                $(head[4]).css('background-image','url(img/more.png)')
                for(let i = 5;i < length1;i++){
                    $(head[i]).css('display','none');
                }    
            },600);
        })
    }
    //点击底部消失
    $('#footerFlex a').click(function(){
        $('#carddetail').css('display','none');
    });
    
});