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
});