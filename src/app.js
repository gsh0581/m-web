const  indexTpl = require('./view/index.html');
import homeController  from "./controllers/name";
import homePreview from "./controllers/second";
const renderedIndexTpl = template.render(indexTpl,{});

$("#app").html(renderedIndexTpl);
homePreview.second.loadData();
homePreview.second.init();

homePreview.renderTodayList(1);

homeController.list();
homeController.renderMoreList();
