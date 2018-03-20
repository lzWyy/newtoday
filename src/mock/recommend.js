/**
 * title: 标题
 * article_url: 文章链接
 * datetime： 时间
 * image_url： 图片
 * label : "置顶",
 * source: 来源
 * comment_count: 评论数
 * hot: (0, 1)
 * tag: 推荐类型（1: word， 2: finance， 3: video）
 */
const recommend = [
  {
    title: '美日韩安全高官在美会晤，讨论韩朝、美朝首脑拟会谈事宜',
    article_url: 'http://m.thepaper.cn/rss_detail.jsp?contid=2033032&from=toutiao',
    datetime: '刚刚',
    imgUrl: "http://image.thepaper.cn/wap/image/7/17/552.jpg",
    label :"置顶",
    source: '澎湃新闻',
    comment_count: '60',
    hot: 0,
    keywords: '普京,俄罗斯,莫斯科,战略伙伴',
    tag: "word"
  },
  {
    title: '你所不知道的上海未来：宏伟规划如何用（对比首都二机场与雄安）',
    article_url: 'http://toutiao.com/group/6534527752127644173/',
    datetime: '3分钟前',
    imgUrl: ['https://p3.pstatp.com/list/6ed20004077a32577558', 'https://p3.pstatp.com/list/6c3f00053bf49c6264b2', 'https://p3.pstatp.com/list/6ed200040af1baefe0eb'],
    label :"",
    source: '董希淼',
    comment_count: '620',
    hot: 1,
    keywords: '金融科技,中国银行业,银行,2016年H股上市银行剖析,上市银行,银行业,上市',
    tag: "finance"
  },
  {
    title: '5块钱收来的废品里竟藏着4万现金，看他怎么做',
    article_url: 'http://toutiao.com/group/6534475626131243528/',
    datetime: '10分钟前',
    videoUrl: 'http://v1-tt.ixigua.com/7aac297abfe2f0f6bcad8f0a64936262/5ab0aac8/video/m/2207711421699aa46df942a81ab00a2c68f115566640000c24a703e1732/',
    label :"",
    source: '闪电新闻',
    comment_count: '620',
    hot: 0,
    keywords: '废品,青岛,李付明,水清沟,收废品',
    tag: "video"
  },
]
module.exports = recommend
