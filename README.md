# 前端单元测试/Webpack构建示例
> 运行示例前请先在命令行运行`npm install`安装Node模块！

## 框架/库/工具
- 测试框架 [mocha](https://mochajs.org/)  
- 断言库 [chai](http://chaijs.com/)  
- 辅助测试库 [sinon](http://sinonjs.org/)  
- 覆盖率 [istanbul](https://github.com/gotwarlost/istanbul)  
- 自动化单测 [karma](https://karma-runner.github.io/0.13/index.html)
- 无壳浏览器 [phantomjs](http://phantomjs.org/)  
- 编译打包工具 [webpack](https://webpack.github.io/)  

## 运行单测

### 浏览器端单测

- 无需编译直接运行的情况
  - 手工测试  
  浏览器直接打开`browser_test/browser/index.html`
  - 运行`npm run browser`  
  自动进行Phantomjs，Chrome，Firefox的测试，并一直启动着测试进程，修改源文件，自动测试。输出覆盖率报告到`coverage_browser/Icov-report/index.html`
  - 运行`npm run browser-once`  
  进行Phantomjs，Chrome，Firefox的测试。输出覆盖率报告到`coverage_browser/Icov-report/index.html`

- 需Webpack做打包编译的情况
  - 浏览器中测试  
  运行`node test-server.js`，浏览器打开`http://localhost:3000/test.html`
  - Node环境测试  
  运行`npm test`

### Node端单测
运行`npm test`

### Node端覆盖率
运行`npm run cover`，输出覆盖率报告到`coverage/Icov-report/index.html`



## 单测Case源码

### 浏览器端
- ES5
  - [ES5/jQuery](browser_test/browser/es5.jquery.spec.js)
  - [Ajax](browser_test/browser/ajax.spec.js)
- ES6
  - [ES6](test/browser/index.spec.js)
  - [Promise/Fetch](browser_test/browser/promise.fetch.spec.js)

### Node.js
- ES5
  - [CommonJS](test/node/add.spec.js)
  - [async](test/node/async.spec.js)
  - [timeout](test/node/timeout.spec.js)
- ES6
  - [ES6](test/node/add.spec-es6.js)
  - [Promise](test/node/promise.spec.js)

## Webpack
> 未来前端的工程化体系核心

## Features
1. Plugins
  - 插件化体系，灵活
2. Loaders
  - 支持各种静态资源
3. Code Splitting
  - 代码分块，按需加载，性能优秀
4. Development Tools
  - 开发服务器，SourceMap，模块热重载
5. Performance
  - 异步IO，缓存
6. Support
  - AMD, CommonJS, ES6
7. Optimizations
  - 压缩，分块，多入口，hash
8. Multiple targets
  - Web, WebWorkers, Node

## 示例
- [开发模式](webpack.config.js)  
运行`node dev-server.js`，浏览器打开`http://localhost:3000`
- [测试模式](webpack.test.config.js)  
运行`node test-server.js`，浏览器打开`http://localhost:3000/test.html`
- [生产模式](webpack.production.config.js)  
运行`npm run build`，在build目录下会生成bundle.js

