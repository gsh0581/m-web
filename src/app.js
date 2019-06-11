const  indexTpl = require('./view/index.html');
const searchTpl = require('./view/search/search.html');
const categoryTpl = require('./view/category/category.html')
const detailTpl = require('./view/detail/detail.html')
import homeController  from "./controllers/";
import categoryControl from "./controllers/category"
const renderedIndexTpl = template.render(indexTpl,{});
const renderedSearchTpl = template.render(searchTpl,{});
const renderedcategoryTpl = template.render(categoryTpl,{});
const renderedDetailTpl = template.render(detailTpl,{});
$("#app").html(renderedIndexTpl);
// categoryControl.render()
homeController.render();
