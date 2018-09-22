$('document').ready(function(){
    console.log(1);
    http.post('/fnc/unclaimed',{
        
    },res => {
        
        console.log(res);
        //动态添加卡片
        var flag1 = 0;
        res.Evn.forEach(e => {
            var time = new Date(parseInt(e.date));
            var cardbox = `
            <div class="mainbox">
                <div class="blackbox"></div>
                <div class="mainImg" data-id = "${e.eventId}">
                    <div class="mainboxtop">
                        <div class="label">${e.tag}</div>
                        <div class="date">${time.getMonth()}月${time.getDay()}日</div>
                        <div class="time">${time.getHours()}:${time.getMinutes()}</div>
                    </div>
                    <div class="mainboxmid">
                        <p>${e.describe}</p>
                    </div>
                </div>
    
                <div class="mainboxbottom">
                    <div class="mainhead"><div class="headimg"></div><span>jio雯婷</span></span></div>
                    <div class="btnPick" data-id = "${e.eventId}" data-like ="0"></div>
                    <div class="btnDiscuss"></div>
                </div>
            </div>`;
            console.log(1);
            $("#mainbefore").after(cardbox);
        //    console.log(e.involve);   
        //获取刷新页面后点赞的初始值
            // if(res.Evns[flag1]){
            //     switch(res.Evns[flag1].like){
            //         case 0: for(let j=0;j < res.Evn.length;j++){
            //                 if($(this).dataset.id == res.Evns[i].eventId){
            //                     $('.btnpick')[j].dataset.like = res.Evns[i].like.toString();
            //                 }
            //         }
            //     }
            // }
        }); 
        pick();

    },err => {
        console.log('xxxx',err)
    })

    
    // 交互
    // http.post('/fnc/unclaimed',{},function(res){
    //     for(let i=0;i < res.Evn.length;i++){
    //         var a = parseInt(res.Evn[i].date);
    //         var time = new Date(a);
    //         var tag =res.Evn[i].tag;
    //         var month =time.getMonth();
    //         var day =time.getDay();
    //         var hour = time.getHours();
    //         var minutes = time.getMinutes();
    //         var describe =res.Evn[i].describe;
    //         var eventId = res.Evn[i].eventId;
    //         var cardbox = `
    //         <div class="mainbox">
    //             <div class="blackbox"></div>
    //             <div class="mainImg" data-id = "${eventId}">
    //                 <div class="mainboxtop">
    //                     <div class="label">${tag}</div>
    //                     <div class="date">${month}月${day}日</div>
    //                     <div class="time">${hour}:${minutes}</div>
    //                 </div>
    //                 <div class="mainboxmid">
    //                     <p>${describe}</p>
    //                 </div>
    //             </div>
    
    //             <div class="mainboxbottom">
    //                 <div class="mainhead"><div class="headimg"></div><span>jio雯婷</span></span></div>
    //                 <div class="btnPick" data-id = "${eventId}" data-like ="0"></div>
    //                 <div class="btnDiscuss"></div>
    //             </div>
    //         </div>`;
    //         $('#mainbefore').after(cardbox);
    //         console.log(eventId);
    //         //获取刷新页面后点赞的初始值
    //         if(res.Evns[i]){
    //             switch(res.Evns[i].like){
    //                 case 0: for(let j=0;j < res.Evn.length;j++){
    //                         if($(this).dataset.id == res.Evns[i].eventId){
    //                             $('.btnpick')[j].dataset.like = res.Evns[i].like.toString();
    //                         }
    //                 }
    //             }
    //         }
    //     }
    //     pick();
    // },function(err){
    //     console.log(err);
    // });


    function pick(){
        var flag = 0;
        $('.btnPick').click(function(){
                    //交互

                    var that = this;
                    console.log(this);
                    var date =new Date();   ``
                    http.post('/like/up',{
                        eid:this.dataset.id,
                        liketime: date
                    },function(res){    
                        if(that.dataset.like == "0"){//若初始状态为未点赞，那么点击改为点赞并且社交处增加一条点赞消息
                            that.dataset.like = "1";
                            // console.log(that.dataset.like);
                        }
                        else{
                            that.dataset.like = "0";
                        }
                    },function(err){

                    })

        });
    }
    //点击卡片跳转到卡片详情
    $('.mainImg').click(function(){
        $('#header').css('display','none');
        $('#main').css('display','none');
        $('#carddetail').css('display','block');
        $('#carddetail').css('opacity','1');
        //交互
        
    });
    $('.btnDiscuss').click(function(){
        $('#header').css('display','none');
        $('#main').css('display','none');
        $('#carddetail').css('display','block');
        $('#carddetail').scrollTop(600);
        $('#carddetail').css('opacity','1');   
    });
});
