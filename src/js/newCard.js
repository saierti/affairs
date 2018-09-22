// myCard.js
$(function(){


    //为了日历的placeholder而写的死js代码
    // $("#dead-date").focus(function() {
    //     $(this).attr({type: 'datetime-local'});
    //     $(this).focus();
    // });





    // 自己测试添加选项函数
    // var selfJSON = {
    //     "a":"tug",
    //     "b":'gfd',
    //     "c":"asd"
    // }
    // function a(data){
    //     var groupList = '<option value="" disabled selected style="display: none;color: grey;">查看小组列表</option>';
    //     $.each(data, function(i, items){
    //         groupList += '<option value="'+ items + '">' + items + '</option>';
    //     });
    //     $("#s-group").html(groupList);
    // }
    // $("#s-group").click(function(){
    //     // alert("a");
    //     // alert($(".make-card").serialize());
    //     a(selfJSON);
    // });

    //做个定时器实时更新列表数据？
    // var timer = setInterval(a(selfJSON),1000);

    // --------------------------------------------




    
    //进入新建我的卡片触发按钮点击之后
    $("#footerRad").click(function(){
        //新建定时器定时刷新我的小组和小组成员
        // var timer1 = setInterval(function(){
        //     groupListRefresh();
        //     memberListRefresh();
        // },4000);
    });



    http.login(function(){
        console.log('登陆成功')
    },function(){
        console.log('登陆失败')
    });

    // 从后台传数据作为面向小组选项值
    // function groupListRefresh(){
    //     $.getJSON("", function(data){
    //         var groupList = '<option value="" disabled selected style="display: none;color: grey;">查看小组列表</option>';
    //         $.each(data, function(i, items){
    //             groupList += '<option value="'+ items + '">' + items + '</option>';
    //         });
    //         $("#s-group").html(groupList);
    //     })
    // };
    // groupListRefresh();

    // // // 从后台传数据作为选择参与成员的选项值
    // function memberListRefresh(){
    //     $.getJSON("", function(data){
    //         var memberList = '<option value="" disabled selected style="display: none;">查看小组成员</option>';
    //         $.each(data, function(i, items){
    //             memberList += '<option value="'+ items + '">' + items + '</option>';
    //         });
    //         $("#s-member").html(memberList);
    //     })
    // };
    // memberListRefresh();

    // 点击小组下拉列表的时候刷新
    // $("#s-group").click(function(){
    //     groupListRefresh();
    // });
    // 点击小组成员下拉列表的时候刷新
    // $("#s-member").click(function(){
    //     memberListRefresh();
    // });




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
        $("#newCard").css("display","none");


    });




    // 点击创建按钮触发的事件
    $(".card-submit").click(function(){
        //判断是否填写必填处
        if($("input[name$='title']").val() == ""){
            //标题为空触发
            alert("标题不能为空");
        }
        if($("input[name$='tag']").val() == ""){
            alert("请选择一个标签");
        }
        alert("123");
        var now = new Date().getTime();
        http.post('/event/create',{
            title:$("#title").val(),
            describe:$("#describe").val(),
            tag:$("#tag").val(),
            // s-group:$("#s-group").val(),
            involve:$("#involve").val(),
            // e-model:$(".e-model").val(),
            date:now,
            limited:$("#limited").val()
        },function(res){
            console.log(111);
            $("#dark-cover").css("display","block");
            $(".reflect-message").css("display","block");
            $("#fabu").attr("src","img/fabu-happy.png");
            $("#fabu-word").text("耶！消息发布成功啦~");
        },function(err){
            $("#dark-cover").css("display","block");
            $(".reflect-message").css("display","block");
            $("#fabu").attr("src","img/fabu-sad.png");
            $("#fabu-word").text("啊哦，消息未发布。可进入草稿箱查看哦。");
        })
    });
    // 作为提交状态反应的两只小熊猫的点击事件，点击消失
    $(".reflect-message").click(function(){
        $(".reflect-message").css("display","none");
        $("#dark-cover").css("display","none");
    });




    //我的小组部分----------------------------------------------
    //预留一个点击小组列表中的小组的点击事件
    //触发ajax获取小组成员表以及其他信息
    // $("").click(function(){

        

        // //点击事件触发后获取信息
        // $.ajax({
        //     type:"POST",
        //     dataType:"json",
        //     url:"",
        //     //哪个小组？？？？
        //     data:"",
        //     success:function(data,textStatus){
        //         if(textStatus !== 200)alert("错误原因报码："+ textStatus);
        //         else{
        //             $(".group-name").val() = data.groupname;
        //             $(".team-character-show").val() = data.g-xingzhi;
        //             $(".group-words").val() = data.groupintroduce;
        //         }
        //     }
        // });
        


        //更新点赞人的数据后进行判断，采取对应的样式
        if($(".like-man").length > 12){
            $(".like-man").eq(11).nextAll().css("display","none");
            $(".like-man").eq(11).after('<div class="like-man" id="more-members"><img class="like-man-head" src="img/dark-dot.png" alt=""><p class="like-man-name"></p></div>');
        }
        $("#more-members").click(function(){
            $(".like-man").eq(11).nextAll().css("display","inline-block");
            $("#more-members").css("display","none");            
        });
    // });
















    
})
