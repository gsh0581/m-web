// import showList from "./show";

// showList.renderCategoryList();
function render(){
    $('.category-wrapper_content').on('click','.category-wrapper_item',function(e){
        $(e.target).addClass('category-wrapper_active ').siblings().removeClass('category-wrapper_active');
    })
    $('.home-factor_wrapper').on('click','.home-factor_wrapper_item',function(e){
        $(e.target).addClass('home-factor_wrapper_active').siblings().removeClass('home-factor_wrapper_active');
    })
}
export default {
    render
}
