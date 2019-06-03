const  indexTpl = require('./view/index.html');
const name = require("./controllers/name");
const {list,renderCard} = require("./controllers/name");

const Swiper = require('swiper')
const renderedIndexTpl = template.render(indexTpl,{});

$("#app").html(renderedIndexTpl);
list();
renderCard();