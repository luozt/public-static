// 根据不同的发布方式替换为该环境的类型
var NODE_ENV = process.env.NODE_ENV || 'dev';

console.log('current media: ', NODE_ENV);

// 配置
var config  = {};

// 环境类型
config.media = NODE_ENV;

module.exports = config;

