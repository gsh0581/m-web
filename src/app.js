const  indexTpl = require('./view/index.html');
import homeController  from "./controllers/name";

const renderedIndexTpl = template.render(indexTpl,{});

$("#app").html(renderedIndexTpl);
homeController.renderTodayList();
homeController.list();