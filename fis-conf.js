
fis.set("project.files", ["src/**"]);
fis.set("project.ignore", [".git/**", "dist/**", "node_modules/**", "README.md", "**/README.md"]);
fis.set('charset', 'utf-8');
fis.set('project.charset', 'utf-8');

fis.match("src/**.less", {
    parser: fis.plugin("less"),
    rExt: ".css"
  })
  .match("::package", {
    spriter: fis.plugin("csssprites", {
      layout: "matrix",
      margin: 1
    }),
    postpackager: [
      fis.plugin("loader")
    ]
  });

fis
  .match('**.{css,less}', {
    useSprite: false
  })


fis.media('lc')
  .hook("relative")
  .match("::package", {
    postpackager: [
      fis.plugin('loader', {
        allInOne: true // 加上这句就无法进行雪碧合并
      })
    ]
  })
  .match('src/(**)', {
    release: '$1'
  })
  .match("**.png", {
    optimizer: fis.plugin("png-compressor", {
      type: "pngquant"
    })
  })
  .match('**.{css,less}', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
  })
  .match('**', {
    relative: true,
    deploy: [fis.plugin('encoding'), fis.plugin('local-supply', {
      to: './dist/lc'
    })]
  });

fis.media('lc2')
  .hook("relative")
  .match("::package", {
    postpackager: [
      fis.plugin('loader', {
        // allInOne: true // 注释这句就可以进行雪碧合并了
      })
    ]
  })
  .match('src/(**)', {
    release: '$1'
  })
  .match("**.png", {
    optimizer: fis.plugin("png-compressor", {
      type: "pngquant"
    })
  })
  .match('**.{css,less}', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
  })
  .match('**', {
    relative: true,
    deploy: [fis.plugin('encoding'), fis.plugin('local-supply', {
      to: './dist/lc2'
    })]
  });

