const homeCardTpl = require('../view/home-card.html');
const homeWeekTpl = require('../view/homeWeek.html');
const focusPicListTpl = require('../view/focusPisList.html');
const navigationListTpl = require('../view/navigation.html');
const BScroll = require('better-scroll').default;
const localData = require('../mock/mock').naviList;
const Swiper = require('swiper').default;
import fetch from '../models/fetch'
let todayList = [];
const renderTodayList = async () => {
    let result = await fetch.get(`https://search.damai.cn/searchajax.html?keyword=&cty=&ctl=&sctl=&tsg=1&st=&et=&order=1&pageSize=30&currPage=1&tn=`);
    let data = todayList = result.pageData.resultData;
    
    let renderedTodayListTpl = template.render(homeCardTpl, { data });
    $(".home-card").html(renderedTodayListTpl);
}

    function list() {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                autoplay: true,//等同于以下设置
            },
        });
        new Swiper('.swiper-artists', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
            },
        });
       
        let array = localData.schedule;
        let renderedhomeWeekTpl = template.render(homeWeekTpl, { array });
        $(".home-week").html(renderedhomeWeekTpl);
        let focusPicList = localData.focusPicList;
        let renderedfocusPicListTpl = template.render(focusPicListTpl, { focusPicList });
        $(".mswiper>.swiper-container>.swiper-wrapper").html(renderedfocusPicListTpl);
        let navigationList = localData.navigationList;
        let renderednavigationListTpl = template.render(navigationListTpl, { navigationList });
        $(".home-grids").html(renderednavigationListTpl);
       
    }

export default{
    list,
    renderTodayList,
}
