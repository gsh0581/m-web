const focusPicListTpl = require('../view/focusPisList.html');
const navigationListTpl = require('../view/navigation.html');
import homePreview from "./second";
const BScroll = require('better-scroll').default;
const localData = require('../mock/mock').naviList;
import showList from "./show"
const Swiper = require('swiper').default;
function list() {

    let focusPicList = localData.focusPicList;
    let renderedfocusPicListTpl = template.render(focusPicListTpl, { focusPicList });
    $(".mswiper>.swiper-container>.swiper-wrapper").html(renderedfocusPicListTpl);
    let navigationList = localData.navigationList;
    let renderednavigationListTpl = template.render(navigationListTpl, { navigationList });
    $(".home-grids").html(renderednavigationListTpl);
    new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',

        },
        autoplay: true,//等同于以下设置
    });

}
function bindLink() {
    $('.home-grids').on('click', '.home-grids__item', handleLink.bind(this))
  }
  function handleLink(e){
        e.preventDefault();
        // 获取元素路径属性
        let href = $(e.target).next().html()
       console.log(window.location.href+'category?ctl='+ href);
        // 对非路由链接直接跳转
        // if (href.slice(0, 1) !== '#') {
        //   window.location.href ='category?ctl='+ href
        // } else {
        //   let path = href
        //   history.pushState({
        //     path: path
        //   }, null, path)
        //   // 加载相应页面
        //   this.loadView(path.split('?')[0])
        // }
      
  }
function render() {
    homePreview.second.loadData();
    homePreview.second.init();
    homePreview.renderTodayList(1);
    list();
    bindLink();
    showList.renderMoreList();
    
}
export default {
    render
}
