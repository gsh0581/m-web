const BScroll = require('better-scroll').default;
let bScroll = new BScroll('#index-scroll',{
    probeType:1,
    click:true
})
// 初始化位置
bScroll.scrollTo(0,0);
// 绑定滑动事件
bScroll.on('scroll',function(){
    let y = this.y;
    let maxY = this.maxScrollY - y
    if(maxY >= 0){
        return 
    }
})
bScroll.on('scrollEnd',async function () {  
    if(this.y<0){
        this.scrollTo(0,0)
    }
    let maxY = this.maxScrollY - this.y;
    if(maxY>-40 && maxY <0){
        this.scrollTo(0,this.maxScrollY+40);
    }else if(maxY >=0){
        let result = await fetch.get(``);
        let data = positionList = [...positionList,...result.pageData.resultData];
        let renderedrenderMoreListTpl = template.render(moreListTpl, { data });
        $(".home-content-more_projects>div").html(renderedrenderMoreListTpl);

        this.refresh() // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        this.scrollTo(0, this.maxScrollY + 40)
    }
})



