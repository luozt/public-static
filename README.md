fis3-postpackager-loader插件影响`<script data-fixed="true">`标签的固定位置功能，比如下面的：

```html
<head>
  <script data-fixed="true">
  document.write('<base href="' + document.location + '" />');
  </script>
  <!--ignore-->
```

script标签在打包时还是会被放在`<body/>`处，就算加了ignore也没用，只有把fis-conf.js的loader插件注释掉，script的位置才能固定在head中

```js
    postpackager: [
      fis.plugin("loader"), // 影响data-fixed。注释掉这行则正常了
      fis.plugin('replace', {
        '/src/index.html': {
          '__NODE_ENV': "\"dev\""
        }
      })
    ]
```