
fis
  .match('**.{js,jsx,es,ts,tsx,coffee,html,jade,css,less,png,jpg,jpeg,gif,mp3,mp4,flv,swf,svg,eot,ttf,woff,woff2}', {
    useHash: false
  })
  .match('**.{css,less}', {
    useSprite: false
  })
  .match('**', {
    charset: fis.get("charset")
  })
  .match("::package", {
    spriter: fis.plugin("csssprites", {
      layout: "matrix",
      margin: 1
    }),
    postpackager: [
      fis.plugin("loader"), // 影响data-fixed
      fis.plugin('replace', {
        '/src/index.html': {
          '__NODE_ENV': "\"dev\""
        }
      })
    ]
  });