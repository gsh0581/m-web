const  indexTpl = require('./view/index.html');

const renderedIndexTpl = template.render(indexTpl,{});

document.querySelector("#app")