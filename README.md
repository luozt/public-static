#test

.test-icon是使用link标签引入的样式

.login-bg是Angular2js的Component的styleUrls引入的样式

使用`npm start`进行开发时，可以看到.test-icon和.login-bg

但使用`npm run build`进行相对路径的打包时，只能看到.test-icon，而.login-bg的路径引用错误，这时：

.test-icon路径解析为：url(../../src/img/test.png)。正确

.test-bg路径解析为：url(../img/login-bg.jpg)。404错误

证明fis3-preprocessor-ng2-inline插件不支持fis3-hook-relative的相对路径打包啊，求解决方案~


