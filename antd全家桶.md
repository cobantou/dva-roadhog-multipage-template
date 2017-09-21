# antd全家桶
antd是蚂蚁金服团队出的一个中台设计语言，官方是这样说的:

> Ant Design 是一个致力于提升『用户』和『设计者』使用体验的中台设计语言。它模糊了产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色边界，将进行 UE 设计和 UI 设计人员统称为『设计者』，利用统一的规范进行设计赋能，全面提高中台产品体验和研发效率。

而我们常说的antd其实指的是官方出的Ant Design of React这个UI框架(当然现在也出了Angular的版本`NG-ZORRO`),具体的组件地址可以参见：
[Ant Design of React](https://ant.design/docs/react/introduce-cn/)

本文所说的全家桶，具体有下面几个部分：
1. UI组件库：[antd](https://ant.design/docs/react/introduce-cn/)
2. 应用框架：[dva](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)
3. 开发工具：[dva-cli](https://github.com/dvajs/dva-cli)、[roadhog](https://github.com/sorrycc/roadhog)
4. 视图框架：[React.js](https://facebook.github.io/react/),和它的各种配套组件库。。。

## dva
dva是基于react周边组件库的一个应用框架，集成了包括[redux](https://github.com/reactjs/redux)，[redux-saga](https://github.com/redux-saga/redux-saga)，[react-router](https://github.com/ReactTraining/react-router)等，并且自己提供了一套语法规范和目录结构；
各种需要看的文档：

* 理解 dva 的 [8 个概念](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md) ，以及他们是如何串起来的
* 掌握 dva 的[所有 API](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md)
* 查看 [dva 知识地图](https://github.com/dvajs/dva-knowledgemap) ，包含 ES6, React, dva 等所有基础知识


## dva-cli
dva-cli可以迅速生成一套前端项目模板，里面已经定义好了全家桶内的各种npm包；

## roadhog
roadhog是一个基于webpack的工具，它可以提供开发服务器，并且封装了webpack的一些功能，也提供打包和测试等；

## react
一个视图框架，基本理念是` v=f(s)`,一个页面视图就是一个状态机，根据状态的不同来展示出不同的样子而已；
推崇组件化和纯函数。

## 其他
除了上面写的几个直接关联的，还有些外层的知识需要看的，例如但不限于：
* es5,es6,es7,es8(一年一个版本，厉害了)
* Node.js
* npm
* webpack
* 纯函数编程

再外层的知识我就不列举了。上面的链接的内容，很重要，需要点开给个链接去看；下面其他里面的能看懂基本就差不多了吧。。。

