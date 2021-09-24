// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'Python',
    link: '/python/',
    items: [
      {
        text: 'Python语法',
        items: [
          {
            text: '基础语法', link: '/pages/bef152/'
          }
        ]
      },
      {
        text: 'Python爬虫',
        items: [
          {
            text: 'Urllib', link: '/pages/245196/'
          }
        ]
      },
      {
        text: 'Python数据分析',
        items: [
          {
            text: '数据分析', link: '/pages/1a9b65/'
          }
        ]
      },

    ]
  },

  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
