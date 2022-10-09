const headConf = require('./config/headConf/index');
const themeConfig = require('./config/themeConf/index')
const pluginsConf = require('./config/plugins/index')

module.exports = {
  // base: '/blog-test/',
  title: "无限的旅途",
  description: '记录、成长、无限',
  head: headConf,
  theme: 'reco',
  themeConfig: themeConfig,
  plugins: pluginsConf,
  markdown: {
    lineNumbers: true
  },
}