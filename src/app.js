const  indexTpl = require('./view/index.html');

const renderedIndexTpl = template.render(indexTpl,{});

$("#app").html(renderedIndexTpl);