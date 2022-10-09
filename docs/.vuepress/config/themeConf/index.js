const navConf = require('./navConf.js');
const secret = require('../secret');

module.exports = {
  logo: '/img/logo.png',
  type: 'blog',
  smoothScroll: true,
  // 博客设置
  blogConfig: {
      category: {
          location: 1, // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认 “分类”
      },
      tag: {
          location: 2, // 在导航栏菜单中所占的位置，默认3
          text: '标签' // 默认 “标签”
      }
  },
  authorAvatar: '/img/avatar.png',
  // 最后更新时间
  lastUpdated: '上次更新时间', 
  author: 'wzm',
  // 项目开始时间
  startYear: '2022',
  nav: navConf,
  subSidebar: 'auto',
  search: true,
  searchMaxSuggestions: 10,
  // 项目加密
  // keyPage: secret.keyPage,
  vssueConfig: {
    platform: 'github-v4',
    owner: 'wzm-htdz',
    repo: 'myblog',
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
  }
}



