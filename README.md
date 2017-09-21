# 安装
```
npm i 
npm i dva-cli -g
//注意：不要全局安装roadhog
```
# 启动
```
npm run start
```
# 发布

```
npm run build
```
# 开发
1. 约定webpack的alias命名以“@”开头；
2. 图片的引用方式：暂时应该放在assets目录下，等全部转为webapp后，将地址的映射指向dist目录，就可以把图片放在public目录下；
3. 代码优化，当页面越来越多，routes组件越来越多，依赖的components很多的时候，可以把一些不通用的components组件抽出，从components目录抽出到routes下面，会更清晰一点，相应的routes目录下有index和它依赖的其他业务组件；通用的组件就还是放在components下面。但是如果业务组件也通用了？这时应该用HOC高阶组件，将业务逻辑抽离；
4. 数据mock写在mock文件目录下，由.roadhogrc.mock.js引用，需要注意请求地址是否与.roadhogrc的proxy代理地址重合，如果重合会请求代理而不会走mock，需要走mock的时候，可以手动编辑一下原来的请求地址和mock的地址，或者关闭proxy代理；   
