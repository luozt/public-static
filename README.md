# public-static

Testing require `@angular/core`

对于普通的npm模块如jQuery, zone.js都可以直接同名引入，但angular2的npm模块由于@开头，貌似就不能直接引入，需通过加多node_modules。

`require("@angular/core") // fail`

`require("node_modules/@angular/core") // success`

但即使加多一个node_modules来引入，但@angular的一些插件里面也是直接通过`require("@angular/core")`来引入的，所以务必还是要解决这个问题，不要多加node_modules才能引入

具体看本项目，src/index.js里面：

```js
window.testCore = require("node_modules/@angular/core"); // require成功
window.testBrowser = require("node_modules/@angular/platform-browser"); // require失败
```

这是因为`@angular/platform-browser`里是直接`require("@angular/core")`的

## 项目运行方法

1. `npm i`
2. `npm run dev`