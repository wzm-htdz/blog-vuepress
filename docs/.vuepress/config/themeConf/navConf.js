module.exports = [
  {
    text: '本站指南', link: '/guide/', icon: 'reco-eye'
  },
  {
    text: '基础知识', link: '/基础知识/', icon: 'reco-sticky',
    items: [
      {
        text: '浏览器工作原理', link: '/基础知识/浏览器工作原理',
      },
    ]
  },
  {
    text: '前端', link: '/前端/', icon: 'reco-document',
    items: [
      {
        text: '三大件', link: '/前端/三大件/',
        items: [
          { text: 'Html', link: '/前端/三大件/html' },
          { text: 'Css', link: '/前端/三大件/css' },
          { text: 'Javascript', link: '/前端/三大件/javascript' },
        ]
      },
      {
        text: '框架', link: '/前端/框架/',
        items: [
          { text: 'Vue', link: '/前端/框架/Vue' },
        ]
      },
    ]
  },
  {
    text: '算法', icon: 'reco-npm', link: '/算法/',
    items: [
      {
        text: '数据结构', link: '/算法/数据结构/',
        items: [
          { text: '排序', link: '/算法/数据结构/排序' },
        ]
      },
      {
        text: '刷题', link: '/算法/刷题/',
        items: [
          { text: '刷题指南（点我）', link: 'https://programmercarl.com/' },
          { text: '数组', link: '/算法/刷题/数组' },
        ]
      },
    ]
  },
  {
    text: '开发工具', icon: 'reco-coding',
    items: [
      { text: 'Git', link: '/开发工具/git' },
      { text: 'Github', link: '/开发工具/github' },
      { text: 'Vscode', link: '/开发工具/vscode' },
    ]
  },
  {
    text: '其他', icon: 'reco-other', link: '/其他/',
    items: [
      { text: '个人博客', link: '/其他/个人博客/'},
    ]
  },
  {
    text: '娱乐', icon: 'reco-color', link: '/娱乐/',
    items: [
      { text: '游戏', link: '娱乐/游戏/' ,
        items: [
          { text: '自制js小游戏', link: '娱乐/游戏/自制js小游戏' },
          { text: '网络游戏', link: '娱乐/游戏/网络游戏' },
        ]
      },
      { text: '小说', link: '娱乐/小说/' },
      { text: '动漫', link: '娱乐/动漫/' },
    ]
  },
  { text: '联系我', icon: 'reco-account',
    items: [
      { text: 'QQ', link: '/联系我/' },
      { text: '仓库',
        items: [
          { text: 'Github', link: 'https://github.com/wzm-htdz/' },
          { text: 'Gitee', link: 'https://gitee.com/wzm-htdz/' },
        ]
      },
    ] 
  },
  { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
]




