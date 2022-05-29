// 导出配置的scrollReveal
export default function retScroll (data, state, webPercentage, javaPercentage, linuxPercentage) {
  // reveal()的类名可以为id (#reveal-top) 也可以为class(.reveal-top) 名称随意 并且也支持并集class写法 注意必须设置类否则无法使用
  data.scrollReveal.reveal('#reveal-heard', {
    // 动画的时长
    duration: 800,
    // 延迟时间
    delay: 150,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    origin: 'bottom',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    // distance: '20px',
    // 其他可用的动画效果
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    scale: 0.6,
    beforeReveal: function (ele) {
      // 显示头部内容
      state.header = 1
    }
  })
  // 配置内容懒加载
  data.scrollReveal.reveal('#reveal-introduce', {
    // 动画的时长
    duration: 800,
    // 延迟时间
    delay: 150,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    // origin: 'top',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    // distance: '-30px',
    // 其他可用的动画效果
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    // scale: 0.8,
    beforeReveal: function (ele) {
      // 显示个人介绍
      state.introduce = 1
    }
  })
  // 配置技能和经历懒加载
  data.scrollReveal.reveal('#reveal-experience', {
    // 动画的时长
    duration: 800,
    // 延迟时间
    delay: 150,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    // origin: 'right',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    // distance: '-30px',
    // 其他可用的动画效果
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    // scale: 0.8,
    beforeReveal: function (ele) {
      // 显示技能和经历
      state.experience = 1
    },
    afterReveal: function (ele) {
      if (webPercentage.value) {
        webPercentage.value.start()
      }
      if (javaPercentage.value) {
        javaPercentage.value.start()
      }
      if (linuxPercentage.value) {
        linuxPercentage.value.start()
      }
    }
  })
  // 配置项目经历懒加载
  data.scrollReveal.reveal('#reveal-project', {
    // 动画的时长
    duration: 800,
    // 延迟时间
    delay: 150,
    // 动画开始的位置，'bottom', 'left', 'top', 'right'
    // origin: 'top',
    // 回滚的时候是否再次触发动画
    reset: false,
    // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
    useDelay: 'onload',
    // 在移动端是否使用动画
    mobile: true,
    // 滚动的距离，单位可以用%，rem等
    // distance: '-30px',
    // 其他可用的动画效果
    // 执行速度 线性函数啥的
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    // 执行方式（缩放）
    // scale: 0.8,
    beforeReveal: function (ele) {
      // 显示个人介绍
      state.project = 1
    }
  })
}
