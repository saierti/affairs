$('document').ready(function(){
    //交互
    http.post('/fnc/unclaimed',{},function(res){
        for(let i=0;i < res.Evn.length;i++){
            var a = parseInt(res.Evn[i].date);
            var time = new Date(a);
            var tag =res.Evn[i].tag;
            var month =time.getMonth();
            var day =time.getDay();
            var hour = time.getHours();
            var minutes = time.getMinutes();
            var describe =res.Evn[i].describe;
            var cardbox = `
            <div class="mainbox">
                <div class="blackbox"></div>
                <div class="mainImg">
                    <div class="mainboxtop">
                        <div class="label">${tag}</div>
                        <div class="date">${month}月${day}日</div>
                        <div class="time">${hour}:${minutes}</div>
                    </div>
                    <div class="mainboxmid">
                        <p>${describe}</p>
                    </div>
                </div>
    
                <div class="mainboxbottom">
                    <div class="mainhead"><div class="headimg"></div><span>jio雯婷</span></span></div>
                    <div class="btnPick"></div>
                    <div class="btnDiscuss"></div>
                </div>
            </div>`;
            $('#mainbefore').after(cardbox);
            console.log(1);
            test();
        }
    },function(err){
        console.log(err);
    })


    function test(){
        var flag = 0;
        $('.btnPick').click(function(){
            console.log(this);
                if(flag == 0){
                    $(this).css('background-image','url(img/pick1.png)');
                    //交互
                    var date =new Date().toLocaleString();
                    console.log(date);
                //     http.post('/like/up',{
                //         eid:
                }
                else{
                    $(this).css('background-image','url(img/pick0.png)');
                    flag--;
                }
        });
    }
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
