const headConf = require('./config/headConf/index');
const themeConfig = require('./config/themeConf/index')
const pluginsConf = require('./config/plugins/index')

module.exports = {
  title: "无限的旅途",
  description: '记录、成长、无限',
  dest: './dist',
  head: headConf,
  theme: 'reco',
  themeConfig: themeConfig,
  plugins: pluginsConf,
  markdown: {
    lineNumbers: true
  },
}