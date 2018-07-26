
$('document').ready(function(){
    var a = $('header p');
    /*初始化状态下显示待完成 */
    $(a[0]).next().css("width","20%");
    /*重置另一个图标的样式 */
    function reset(e){
        e.css('font-size','4.5vw');
        e.css("color","#ffffff");
        e.next().css("width","0");
    }
    $(a[0]).click(function(){
        reset($(a[1]));
        $(a[0]).css("font-size","5.2vw");
        $(a[0]).css("color","#fbf6c1");
        $(a[0]).next().css("width","20%");
    })
    $(a[1]).click(function(){
        reset($(a[0]));
        $(a[1]).css("font-size","5.2vw");
        $(a[1]).css("color","#fbf6c1");
        $(a[1]).next().css("width","20%");
    })
})