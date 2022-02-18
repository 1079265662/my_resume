/*
页面参数配置表
*/
module.exports = {
  // 页面标题
  my_title: '个人简历_刘凯利',
  // 你的名字
  my_name: '刘凯利',
  // 你的电话
  my_phone: 15031723750,
  // 你的邮箱
  my_mail: '1079265662@qq.com',
  // 你的职位
  my_Position: 'Web前端开发',
  // 毕业院校
  my_colleges: '天津石油职业技术学院',
  // 我的签名
  my_sign: '热爱前端 , 喜欢新技术 , 想成为全栈工程师',
  // 页面打字机内容
  my_typewriter: ['面试官你好', '我叫刘凯利', '来自天津', '面试的岗位是Web前端开发', '主要面向Vue和小程序的开发'],
  // 个人跳转内容
  my_Link: [
    {
      // 标题
      title: 'gitee',
      // svg 图标
      // 目前支持: gitee github blog(播客) alipay(支付宝) mail邮箱(mailto: 前缀邮箱发送) phone(电话不要跳转) wechat(微信) zhihu(知乎)
      svg: 'gitee',
      // 跳转地址
      link: 'https://gitee.com/liu_kaili'
    },
    {
      title: 'github',
      svg: 'github',
      link: 'https://github.com/1079265662'
    },
    {
      title: '播客',
      svg: 'blog',
      link: 'https://liukaili.netlify.app/'
    },
    {
      title: '知乎',
      svg: 'zhihu',
      link: 'https://www.zhihu.com/people/liukaili-8'
    },
    {
      title: '邮箱',
      svg: 'mail',
      link: 'mailto: 1079265662@qq.com'
    },
    {
      title: '微信',
      svg: 'wechat',
      link: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/yaYsbMeFv41KUOh.jpg'
    }
  ],
  // 简历下载 (pdf可以直接预览 docx只能下载)
  my_CV: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/%E5%88%98%E5%87%AF%E5%88%A9%20Web%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%2015031723750.pdf',
  // 你的大头照
  my_photo: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/sunxiaochuan.jpg',
  // 个人简介
  my_about: '我是一名Web前端工作者，面向于Vue和小程序方面，乐于接收新的技术，喜欢记录。我个人对于网站开发我有着浓厚的兴趣 , 喜欢用学习到的知识去设计与编写一些独特的网站。工作中会和后端 产品 ui进行高效沟通，及时完成工作需求，能够承受工作压力。工作之余经常总结新技术、新知识，并且记录在个人播客中。',
  // 前端数据
  my_web: {
    // 是否显示
    show: true,
    // 百分比
    percentage: 75,
    // 前端名称
    title: '前端',
    // 前端内容
    context: 'HTML，CSS，Js，Vue，React ...'
  },
  // 后端数据
  my_java: {
    // 是否显示
    show: true,
    // 百分比
    percentage: 10,
    // 名称
    title: '后端',
    // 内容
    context: 'Java，GO，PHP，Python，表结构 ...'
  },
  // 操作系统
  my_linux: {
    // 是否显示
    show: true,
    // 百分比
    percentage: 5,
    // 名称
    title: '系统',
    // 内容
    context: 'Nginx，Linux，Docker，Apache ...'
  },
  // 技能点
  my_Skill: [
    {
      // 技能名称
      title: 'Vue2',
      // 技能百分比
      percentage: 75,
      // 颜色
      color: '#41b883',
      // 介绍
      introduce: '听你这么说,你很懂哦'
    },
    {
      // 技能名称
      title: 'Vue3',
      // 技能百分比
      percentage: 65,
      // 颜色
      color: '#41b883',
      introduce: '还在学习中'
    },
    {
      // 技能名称
      title: '小程序',
      // 技能百分比
      percentage: 60,
      // 颜色
      color: '#07c160',
      introduce: '小程序很方便'
    },
    {
      title: 'JavaScript',
      percentage: 50,
      color: '#fcdc00',
      introduce: '够用就行!'
    },
    {
      title: 'jQuery',
      percentage: 30,
      color: '#78cff5',
      introduce: '技术太老,我不喜欢'
    },
    {
      title: '表结构',
      percentage: 10,
      color: '#00758f',
      introduce: '做权限的时候略有了解'
    },
    {
      title: 'Linux',
      percentage: 5,
      color: '#1c1e1d',
      introduce: '就会个开关机算吗?'
    }

  ],
  // 在职公司
  my_experience: [
    {
      // 公司名称
      titles: '华北利星行机械',
      // 公司logo
      image: 'https://www.lshmnc.com.cn/res/LXHome/structure/3.jpg',
      // 在职岗位
      post: 'Web前端开发(全职)',
      // 时间
      time: '2021-08-27 to Present',
      // 卡片背景图
      cardBackground: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/wallhaven-3k6g16.jpg'
    },
    {
      // 公司名称
      titles: '天津黑潮有限公司',
      // 公司logo
      image: 'https://www.lshmnc.com.cn/res/LXHome/structure/3.jpg',
      // 在职岗位
      post: 'Web前端开发(全职)',
      // 时间
      time: '2020-11-27 to 2021-6-01',
      // 卡片背景图
      cardBackground: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/tianjing.jpg'
    },
    {
      // 公司名称
      titles: '华北利星行机械',
      // 公司logo
      image: 'https://www.lshmnc.com.cn/res/LXHome/structure/3.jpg',
      // 在职岗位
      post: 'Web前端开发(全职)',
      // 时间
      time: '2021-08-27 to Present',
      // 卡片背景图
      cardBackground: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/beijing.jpg'
    }
  ],
  // 工作经历内容
  my_project: [
    {
      // --------------- 卡片背景图
      cardBackground: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/demo.jpg',
      // --------------- 配置选项
      // 是否显示项目类型
      project_type: true,
      // --------------- 展示内容
      // 标题
      project_title: '华北利星行小程序',
      // 简介/背景
      project_Introduction: '华北利星行官方小程序 用于提供挖机资讯和收集用户购买意向',
      // 技术栈/开发软件
      project_software: '微信小程序 、 Vant组件库',
      // 开发周期
      project_time: '2021年2月28日 ➡ 2021年8月26日',
      // 项目类型
      project_style: '企业项目',
      // 项目职责
      project_duty: '<p>1. 负责可视化图表展示生产数据、员工信息管理、员工考勤管理、生产问题管理。</p> <p>2. 负责可视化图表展示生产数据、员工信息管理、员工考勤管理、生产问题管理。</p>',
      // 项目预览(图片)
      project_image: [
        {
          src: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/banner_image/banner_6.jpg',
          title: '第一张'
        },
        {
          src: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/banner_image/banner_6.jpg',
          title: '第二张'
        }
      ]
    },
    {
      // --------------- 卡片背景图
      cardBackground: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/wallhaven-kw8dm7.jpg',
      // --------------- 配置选项
      // 是否显示项目类型
      project_type: true,
      // --------------- 展示内容
      // 标题
      project_title: '矿山OA系统',
      // 简介/背景
      project_Introduction: '华北利星行官方小程序 用于提供挖机资讯和收集用户购买意向',
      // 技术栈/开发软件
      project_software: '微信小程序 + Vant组件库',
      // 开发周期
      project_time: '2021年2月28日 ➡ 2021年8月26日',
      // 项目类型
      project_style: '企业项目',
      // 项目职责
      project_duty: '        <p>1. 负责可视化图表展示生产数据、员工信息管理、员工考勤管理、生产问题管理。</p> <p>2. 负责可视化图表展示生产数据、员工信息管理、员工考勤管理、生产问题管理。</p>',
      // 项目预览(图片)
      project_image: [
        {
          src: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/banner_image/banner_6.jpg',
          title: '第一张'
        },
        {
          src: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/banner_image/banner_6.jpg',
          title: '第二张'
        }
      ]
    },
    {
      // --------------- 卡片背景图
      cardBackground: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/wallhaven-83z8g2.jpg',
      // --------------- 配置选项
      // 是否显示项目类型
      project_type: true,
      // --------------- 展示内容
      // 标题
      project_title: '华北利星行小程序',
      // 简介/背景
      project_Introduction: '华北利星行官方小程序 用于提供挖机资讯和收集用户购买意向',
      // 技术栈/开发软件
      project_software: '微信小程序 + Vant组件库',
      // 开发周期
      project_time: '2021年2月28日 ➡ 2021年8月26日',
      // 项目类型
      project_style: '企业项目',
      // 项目职责
      project_duty: '        <p>1. 负责可视化图表展示生产数据、员工信息管理、员工考勤管理、生产问题管理。</p> <p>2. 负责可视化图表展示生产数据、员工信息管理、员工考勤管理、生产问题管理。</p>',
      // 项目预览(图片)
      project_image: ''
    },
    {
      // --------------- 卡片背景图
      cardBackground: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/wallhaven-r26v6w.jpg',
      // --------------- 配置选项
      // 是否显示项目类型
      project_type: true,
      // --------------- 展示内容
      // 标题
      project_title: '华北利星行小程序',
      // 简介/背景
      project_Introduction: '华北利星行官方小程序 用于提供挖机资讯和收集用户购买意向',
      // 技术栈/开发软件
      project_software: '微信小程序 + Vant组件库',
      // 开发周期
      project_time: '2021年2月28日 ➡ 2021年8月26日',
      // 项目类型
      project_style: '企业项目',
      // 项目职责
      project_duty: '        <p>1. 负责可视化图表展示生产数据、员工信息管理、员工考勤管理、生产问题管理。</p> <p>2. 负责可视化图表展示生产数据、员工信息管理、员工考勤管理、生产问题管理。</p>',
      // 项目预览(图片)
      project_image: [
        {
          src: 'https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/banner_image/banner_6.jpg',
          title: '第一张'
        }
      ]
    }
  ],
  the_end: {
    // 标题
    title: 'The end',
    // 结尾语
    text: '您已浏览完毕简历页面 如果对我感兴趣 请立刻联系我参加面试!'
  }
}
