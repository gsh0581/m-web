const moreListTpl = require('../view/moreProjects.html');
import fetch from '../models/fetch'
let moreList = [];
const renderMoreList = async () => {
    let result = await fetch.get(`https://search.damai.cn/searchajax.html?keyword=&cty=&ctl=&sctl=&tsg=0&st=&et=&order=1&pageSize=30&currPage=1&tn=`);
    let data = moreList = result.pageData.resultData;
    let renderedrenderMoreListTpl = template.render(moreListTpl, { data });
    $(".home-content-more_projects>div").html(renderedrenderMoreListTpl);
}
export default{
    renderMoreList
}