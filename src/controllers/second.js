const localData = require('../mock/mock').naviList;
const homeWeekTpl = require('../view/homeWeek.html');
const homeCardTpl = require('../view/home-card.html');
import fetch from '../models/fetch'
let todayList = [];
let time = new Date();
let today =  time.getDay();
let date = time.toLocaleDateString().replace(/\//g,'-');
const renderTodayList = async (index) => {
    
    let result = await fetch.get(`https://search.damai.cn/searchajax.html?keyword=&cty=&ctl=&sctl=&tsg=${index}&st=&et=&order=1&pageSize=30&currPage=1&tn=`);
    let data = todayList = result.pageData.resultData;
    $(".home-card").html('');
    let renderedTodayListTpl = template.render(homeCardTpl, { data });
    $(".home-card").html(renderedTodayListTpl);
}
const second={
    
    loadData(){
       
        let array = localData.schedule;
        let arrays =today == 0?array:array.slice(today, array.length).concat(array.slice(0, today));
        arrays[0] ="今天";arrays[1]="明天";
        let renderedhomeWeekTpl = template.render(homeWeekTpl, { arrays });
        $(".home-week").html(renderedhomeWeekTpl);
    },
    init(){
        document.querySelector(".home-week").addEventListener('click',function(e){
            $(e.target).addClass("selected").siblings().removeClass('selected');
            let index = parseInt($(e.target).attr("data-spm").match(/\d+/)[0])+1;
            renderTodayList(index);
        })
    }
} 
export default{
    second,
    renderTodayList
}