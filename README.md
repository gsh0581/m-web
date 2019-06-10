# m-web
移动端环境


better-scroll 使用
💞.区域滚动必须有一个滚动的容器
🔆.容器的高度一定小于内容的高度
🔴.容器内有一个唯一的子元素

HTTP methods:
1xx:正在发送
2xx:成功
3xx:请求转发 
4xx:客户端错误
5xx:服务器错误

jQuery $.ajax() 返回Promise
2019-6-6
WebApp
1.前后端架构
- 前后端分离：
前后端两套分支。前端通过http协议请求后端接口。后端只关注接口开发。通过index.html/index.php与前端对接
- 前端架构：
R MVC + gulp + 模块化(CommonJs规范，ES module) + css预编译工具 sass +前端模板 +Mock数据 +UI框架（辅助移动端布局）
2.gulp
实现那些功能，
- 启动server  gulp-server
- JS模块化  webpack-stream
- CSS预处理 gulp-sass
- mock数据 http-proxy-middleware
- 生产与开发环境的分离  gulp -- gulpfile
- 版本号控制 gulp rev rev-collector

3. RMVC router MVC
- R:router 路径切换
- M:model  数据源
- V:view   结构和样式 html+CSS 
- C:Controller 交互逻辑 js
用到什么插件
4、模块化
CommonJS规范
ES Module,规范
CommonJS 和ES Module区别

5、SASS

6、前端模板
art-template

template.render(originString,{data});
{{if cond}}  {{/if}}
{{each}} $index $value {{/each}}

7、mock数据
- 有后端接口：代理
- 么有后端接口：代理+json Server
