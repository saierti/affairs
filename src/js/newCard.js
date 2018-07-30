// myCard.js
$(function(){
    // 表单传标签的值
    $(".tags").click(function(){
        $(this).addClass("card-active");
        $("#tag").val(this.innerHTML);
        $(this).siblings().removeClass("card-active");
    });
    // 表单传事件执行模式的值
    $(".e-moshis").click(function(){
        $(this).addClass("card-active");
        $("#e-model").val(this.innerHTML);
        $(this).siblings().removeClass("card-active");
    });
    // 点击×和取消退出卡片并保存
    // 判断是否为空？用户自己选择？
    $(".quit-card1").click(function(){
        // $(".make-card").form("reset");
        $("#newMyCard").css("display","none");
    });
})