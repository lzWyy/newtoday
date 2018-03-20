### React仿今日头条app

公司项目一直使用vue做项目，去年自学了react后。一直没有机会用它来做实践，加上许久没有写过react，都快要忘记react怎么写了，所以本来想趁着最近有点空闲，自己用react仿写一个webapp。花了一上午时间重新看了下react文档，又花了一下午写了这个demo，由于时间原因，暂时只能停下。等以后有空再继续往下做下去吧。

- 项目脚手架：`generator-react-webpack`
- 路由使用了 `react-router-dom`
- 数据请求使用  `axios`
- 由于自己不会抓包，看网上提供的api请求只能免费10条，多了就要钱，所以就简单的在今日头条拷贝了几条数据
- 使用 `express` 简单的搭建了下后台服务器，简单的mock了下数据，能够模仿正常请求数据。

在项目 `src`目录下的 `mock` 文件里运行命令 `node index` 启动node服务,

在项目根目录下运行 `npm start` 跑起项目

demo效果图如下： 有时间的话接着完善吧

![Kapture 2018-03-20 at 15.45.36.gif](https://upload-images.jianshu.io/upload_images/8154823-062b302796ee4c47.gif?imageMogr2/auto-orient/strip)