<template>
  <div>
    <el-backtop :bottom="100">
      <div class="upKey">
        UP
      </div>
    </el-backtop>
    <!-- 头部内容 -->
    <div class="overall-header">
      <div id="reveal-heard" class="overall-header-left">
        <div class="text-title">
          <vuetyped :strings="$t.my_typewriter" :loop="true" :smart-backspace="true" :type-speed="120" :start-delay="1000">
            <div class="typing" />
          </vuetyped>
        </div>
        <div class="text-sign">{{ $t.my_sign }}</div>
        <div class="text-content">
          <div v-for="(item,index) in $t.my_Link" :key="index" class="text-content-svg">
            <el-tooltip :content="item.title || '我没写'" placement="bottom" effect="light">
              <a :href="item.link" target="_black">
                <SvgIcon :icon-class="item.svg" />
              </a>
            </el-tooltip>
          </div>
          <div v-if="$t.loveThis">
            <el-tooltip content="我喜欢这个简历" placement="bottom" effect="light">
              <div :class="['loveBox','loveRed',loveState ? 'loveBoxAdm' : '']" @click="loveThis" />
            </el-tooltip>

          </div>
        </div>
        <div class="buttomDiv buttonFlex hvr-bounce-to-top hvr-buzz-out " @click="gotoCV">查看我的简历</div>
      </div>
      <div v-lazy:background-image="$t.rightImage" class="overall-header-right lazyBackground " />
      <div id="reveal-heard" class="overall-header-buttom">
        <div class="buttomDiv buttonFlex hvr-bounce-to-bottom hvr-wobble-horizontal" @click="gotoIntroduction">继续浏览</div>
      </div>
    </div>
    <!-- 个人介绍 -->
    <div class="introduction">
      <!-- 个人介绍 -->
      <div id="reveal-introduce" class="my_image_Exercise">
        <div class="my_Exercise">
          <div v-if="$t.my_name !== '' && $t.my_name" class="my_Exercise_text">姓名: <span class="my_Exercise_number">{{ $t.my_name }}</span> </div>
          <div v-if="$t.my_Position !== '' && $t.my_Position" class="my_Exercise_text">职位: <span class="my_Exercise_number">{{ $t.my_Position }}</span> </div>
          <div v-if="$t.my_mail !== '' && $t.my_mail" class="my_Exercise_text">邮箱: <span class="my_Exercise_number">{{ $t.my_mail }}</span> </div>
          <div v-if="$t.my_phone !== '' && $t.my_phone" class="my_Exercise_text">电话: <span class="my_Exercise_number">{{ $t.my_phone }}</span> </div>
          <div v-if="$t.my_colleges !== '' && $t.my_colleges" class="my_Exercise_text">毕业院校: <span class="my_Exercise_number">{{ $t.my_colleges }}</span> </div>
        </div>
        <div class="my_image">
          <img v-lazy="$t.my_photo" style="width: 100%;">
        </div>
      </div>
      <!-- 关于我 -->
      <div id="reveal-introduce" class="content_text">
        <div class="about_me"><span class="about_me_title">关于我</span></div>
        <div class="about_me_content">&emsp;&emsp;{{ $t.my_about }}</div>
      </div>
      <div id="reveal-heard" class="my_job_buttom">
        <div class="buttomDiv buttonFlex hvr-wobble-vertical hvr-bounce-to-right" @click="gotoExperience">继续浏览</div>
      </div>
    </div>
    <!-- 技能和经历 -->
    <div class="experience">
      <!-- 技能树 -->
      <div id="reveal-experience" class="tree_box">
        <div class="about_me"><span class="about_me_title">技能树</span> </div>
        <div class="my_tree_card">
          <div class="skill_points">
            <div v-if="$t.my_web.show" class="skill_web">
              <div class="skill_web_text">
                <div class="percentage">
                  <count-to ref="webPercentage" :start-val="0" :end-val="$t.my_web.percentage" :duration="8000" :autoplay="false" /><span>%</span>
                </div>
                <div class="suject">{{ $t.my_web.title }}</div>
                <div class="frame">{{ $t.my_web.context }}</div>
              </div>
              <SvgIcon icon-class="HTML5" class="webCard" />
            </div>
            <div v-if="$t.my_java.show" class="skill_end">
              <div class="skill_web_text">
                <div class="percentage">
                  <count-to ref="javaPercentage" :start-val="0" :end-val="$t.my_java.percentage" :duration="8000" :autoplay="false" /><span>%</span>
                </div>
                <div class="suject">{{ $t.my_java.title }}</div>
                <div class="frame">{{ $t.my_java.context }}</div>
              </div>
              <SvgIcon icon-class="java" class="webCard" />
            </div>
            <div v-if="$t.my_linux.show" class="skill_linux">
              <div class="skill_web_text">
                <div class="percentage">
                  <count-to ref="linuxPercentage" :start-val="0" :end-val="$t.my_linux.percentage" :duration="8000" :autoplay="false" /><span>%</span>
                </div>
                <div class="suject">{{ $t.my_linux.title }}</div>
                <div class="frame">{{ $t.my_linux.context }}</div>
              </div>
              <SvgIcon icon-class="linux" class="webCard" />
            </div>
          </div>
          <div class="skill_Progress">
            <div v-for="(item,index) in $t.my_Skill" :key="index" class="skill_Progress_content">
              <div class="skill_Progress_content_text">{{ item.title }}</div>
              <div class="Progress">
                <el-tooltip :content="item.introduce || '没有介绍'" placement="top" effect="dark">
                  <el-progress :text-inside="true" :stroke-width="18" :color="item.color" :percentage="item.percentage" />
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 经历 -->
      <div id="reveal-introduce" class="my_job_content">
        <div class="my_job_title">
          <div class="about_me"><span class="about_me_title">工作经历</span></div>
        </div>
        <div class="job_card_container">
          <div v-for="(item,index) in $t.my_experience" :key="index" class="job_card">
            <div v-lazy:background-image="item.cardBackground" class="card_background lazyBackground" />
            <div class="job_content my_Exercise">
              <img v-if="item.image" v-lazy="item.image" class="job_content_image">
              <div class="my_Exercise_text_job">公司:&nbsp;<span class="my_Exercise_number_job">{{ item.titles }}</span></div>
              <div class="my_Exercise_text_job">职位:&nbsp;<span class="my_Exercise_number_job">{{ item.post }}</span></div>
              <div class="my_Exercise_text_job">时间:&nbsp;<span class="my_Exercise_number_job">{{ item.time }}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div id="reveal-introduce" class="experience_buttom">
        <div class="buttomDiv buttonFlex hvr-wobble-to-bottom-right hvr-bounce-to-left" @click="gotoProject">继续浏览</div>
      </div>
    </div>
    <!-- 项目经历 -->
    <div class="my_project">
      <div class="my_project_background">
        <div class="g-polygon-1" />
        <div class="g-polygon-2" />
        <div class="g-polygon-3" />
      </div>
      <div id="reveal-project" class="my_job_title">
        <div class="about_me"><span class="about_me_title">项目经历</span></div>
      </div>
      <div class="my_project_content">
        <div id="reveal-project" class="my_project_content_flex">
          <div v-for="(item,index) in $t.my_project" :key="index" class="my_project_box">
            <img v-lazy="item.cardBackground" lazy class="my_project_box_img">
            <div class="my_project_box_text">
              <div>
                <div class="my_project_title">
                  {{ item.project_title }}
                </div>
                <div class="my_project_Universal">项目简介： </div>
                <div class="my_project_Introduction">
                  {{ item.project_Introduction }}
                </div>
                <div class="my_project_Universal">技术栈： </div>
                <div class="my_project_Technology">
                  {{ item.project_software }}
                </div>
                <div class="experience_buttom">
                  <div class="buttomDiv buttonFlex hvr-back-pulse" @click="checkProject(item)">查看详情</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="reveal-project" class="experience_buttom">
        <div class="buttomDiv buttonFlex hvr-shutter-in-horizontal " @click="gotoTheEnd">继续浏览</div>
      </div>
    </div>
    <theEnd />
    <!-- 弹窗的组件 -->
    <checkProject v-model="state.showDialog" v-model:content="my_project_son" />
  </div>
</template>

<script >
const res = require('@/config.js')
import { onMounted, reactive, toRefs, ref, getCurrentInstance } from 'vue'
// 导入scrollReveal
import scrollReveal from 'scrollreveal'
// 导入配置的scroll
import retScroll from '@/utils/scroll.js'
// 导入详情介绍
import checkProject from '@/components/checkProject'
// 导入页尾
import theEnd from '@/components/theEnd'
export default {
  name: 'Home',
  components: {
    checkProject,
    theEnd
  },
  setup () {
    // 注册实例Vue2 this
    const { proxy } = getCurrentInstance()
    // 操作Dom 使用数字计时
    const webPercentage = ref(null)
    const javaPercentage = ref(null)
    const linuxPercentage = ref(null)

    // 赋值
    const data = reactive({
      // 声明 scrollReveal组件
      scrollReveal: scrollReveal(),
      // 点击爱心状态
      loveState: false,
      // 防抖
      States: false,
      // 工作经历传值
      my_project_son: []
    })
    // 状态位
    const state = reactive({
      // 弹出层
      showDialog: false
    })
    // 下载简历
    const gotoCV = () => {
      window.open(proxy.$t.my_CV)
    }
    // 点击爱心
    const loveThis = () => {
      if (data.States) return
      data.States = true
      setTimeout(() => {
        data.States = false
        data.loveState = !data.loveState
      }, 1000)
      data.loveState = !data.loveState
    }
    // 下滑到关于我
    const gotoIntroduction = () => {
      const element = document.querySelector('.introduction')
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // 下滑到技能经历
    const gotoExperience = () => {
      const element = document.querySelector('.experience')
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // 下滑到项目
    const gotoProject = () => {
      const element = document.querySelector('.my_project')
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // 下滑到结尾
    const gotoTheEnd = () => {
      const element = document.querySelector('.the_end')
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // 查看项目详情
    const checkProject = (e) => {
      data.my_project_son = e
      state.showDialog = true
      // console.log(state.showDialog)
    }
    // 页面加载生命周期
    onMounted(() => {
      // // 启动scrollReveal的方法
      retScroll(data, state, webPercentage, javaPercentage, linuxPercentage)
      console.log(res)
    })
    // 结构导出
    const dataOut = toRefs(data)
    return { ...dataOut, state, gotoCV, webPercentage, javaPercentage, linuxPercentage, gotoIntroduction, gotoExperience, gotoProject, checkProject, gotoTheEnd, loveThis }
  }

}
</script>
<style lang="scss" scoped>
@import '~@/styles/minxi';
@include buttomHover;
@include About;
@include Exercise;
:deep(.hvr-sweep-to-top:before) {
  background: $accentColor;
}
:deep(.hvr-shutter-in-horizontal:before) {
  background: $backgroundColor;
}
:deep(.el-dialog__title) {
  // font-family: $textSign;
  font-size: $titleMedium;
}
:deep(.el-dialog) {
  width: 80%;
  border-radius: 20px;
}
@keyframes sprite5 {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 100%;
  }
}
.overall-header,
.introduction,
.experience {
  transition: $transition;
}
.upKey {
  height: 100%;
  width: 100%;
  background-color: $backgroundColor;
  box-shadow: $borderCard;
  text-align: center;
  line-height: 40px;
  color: #000;
  border-radius: 10px;
  transition: $transition;
  &:hover {
    background: $accentColor;
    color: #fff;
  }
}
.overall-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 100px;
  grid-template-areas: 'a b' 'c c';
  height: auto;
  min-height: $minHeight;
  .overall-header-left {
    box-sizing: border-box;
    grid-area: a;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 100px 100px 1fr;
    grid-template-areas: 'a' 'b' 'd' 'c';
    font-size: $titleSize;
    .text-title {
      justify-self: center;
      align-self: flex-end;
      grid-area: a;
    }

    .text-sign {
      grid-area: b;
      justify-self: center;
      align-self: center;
      font-size: $contextSize;
      // font-family: $textSign;
      line-height: 1.3;
    }
    .text-content {
      display: flex;
      justify-content: space-evenly;
      justify-self: center;
      align-self: start;
      grid-area: d;
      font-size: $contextSize;
      width: 400px;
      height: 50px;
      // 设置爱心小盒子
      .loveBox {
        height: 100%;
        width: 50px;
        margin: auto;
        background-image: url('https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/heart.3c55287.png');
        background-repeat: no-repeat;
        background-size: 2900%;
        cursor: pointer;
      }
      // 把长条爱心背景图定格到最后
      .loveRed {
        background-position: 100%;
      }
      // 设置点击后的动画效果
      .loveBoxAdm {
        animation: sprite5 1s steps(28) forwards;
      }
      .text-content-svg {
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .buttonFlex {
      justify-self: center;
      align-self: start;
      grid-area: c;
    }
    .typing {
      font-weight: 700;
      // font-family: $textTypes;
    }
  }
  .overall-header-right {
    grid-area: b;
    background: #363636 repeat 0 0;
    box-shadow: 10px 0 30px black;
    // filter: blur(1px);
    /* 动画名称 */
    animation-name: animate, vignette-anim;
    /* 持续时间 */
    animation-duration: 18s, 3s;
    /* 动画过度类型 */
    animation-timing-function: linear;
    /* 动画是否反向运动 normal顺时针  reverse逆时针 alternate-reverse（正反循环 */
    animation-direction: normal;
    /* 动画循环次数  infinite无限 */
    animation-iteration-count: infinite;
    // animation: 18s linear 0s normal infinite animate;
    border-radius: 20px 0px 0px 20px;
  }

  .overall-header-buttom {
    grid-area: c;
    justify-self: center;
    align-self: center;
    // margin-top: $bottom;
  }
}
.introduction {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr 100px;
  grid-template-areas: 'a' 'b' 'c';
  gap: 30px 0px;
  width: $boxWith;
  height: auto;
  min-height: $minHeight;
  margin: 0 auto;
  margin-top: $containerTop;
  .my_image_Exercise {
    grid-area: a;
    box-sizing: border-box;
    padding-top: $containerTop;
    display: flex;
    justify-content: center;
    .my_Exercise_number {
      margin-left: 5px;
    }
    .my_image {
      align-self: center;
      margin-left: 15%;
      min-width: 100px;
      min-height: 150px;
      max-width: 200px;
      max-height: 300px;
      overflow: hidden;
      display: flex;
      align-items: center;
      transform: rotate(5deg);
      border: 20px solid white;
      box-shadow: $borderColor;
      transition: $transition;
      img {
        object-fit: cover;
      }
      &:hover {
        transform: rotate(3deg) scale(1.05);
        box-shadow: $borderHover;
      }
    }
  }
  .content_text {
    grid-area: b;
    display: grid;
    grid-template-rows: 70px 1fr;
    grid-template-areas: 'a' 'b';
    gap: 30px 0;
    .about_me_title {
      grid-area: a;
    }
    .about_me_content {
      height: 100%;
      max-width: 1600px;
      margin: 0 auto;
      grid-area: b;
      box-sizing: border-box;
      font-family: $textWrite;
      font-size: $contexSizeH5;
      line-height: 2;
    }
  }
  .my_job_buttom {
    grid-area: c;
    justify-self: center;
    align-self: center;
  }
}
.experience {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 100px;
  grid-template-areas: 'a b' 'c c';
  gap: 0px 120px;
  height: auto;
  min-height: $minHeight;
  width: $boxWith;
  margin: 0 auto;
  margin-top: $containerTop;
  .tree_box {
    grid-area: a;
    display: grid;
    grid-template-areas: 'a' 'b';
    grid-template-rows: 70px 1fr;
    gap: 30px 0;
    align-self: start;
    justify-self: center;
    width: 100%;

    padding-top: $containerTop;
    .about_me_title {
      // font-family: $textTypes;
      grid-area: a;
    }
    .my_tree_card {
      grid-area: b;
      box-sizing: border-box;
      background: $backgroundColor;
      box-shadow: $borderColor;
      border-radius: $borderRadius;
      padding: 26px 15px 20px 15px;
      transition: $transition;
      &:hover {
        box-shadow: $borderHover;
      }
      .skill_points {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        .skill_web,
        .skill_end,
        .skill_linux {
          flex: auto;
          min-width: 150px;
          height: 150px;
          margin: 0 15px;
          background: white;
          position: relative;
          padding: 5px 20px;
          box-sizing: border-box;
          box-shadow: $borderCard;
        }
        .skill_web {
          border-top: 5px solid $Vue;
          .percentage {
            color: $Vue;
          }
        }
        .skill_end {
          border-top: 5px solid $java;
          .percentage {
            color: $java;
          }
        }
        .skill_linux {
          border-top: 5px solid $accentColor;
          .percentage {
            color: $accentColor;
          }
        }
        .webCard {
          font-size: 78px;
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
        .skill_web_text {
          position: absolute;
          z-index: 2;
          .percentage {
            margin-top: 10px;
            // font-family: $textSign;
            font-size: 24px;
          }
          .suject {
            margin-top: 10px;
            font-size: 24px;
            // font-family: $textTypes;
          }
          .frame {
            margin-top: 10px;
            font-size: 18px;
            // font-family: $textTypes;
          }
        }
      }
      .skill_Progress {
        margin: 30px 15px 15px 15px;
        .skill_Progress_content {
          display: flex;
          height: 35px;
          align-items: center;
        }
        .skill_Progress_content_text {
          text-align: center;
          width: 110px;
          // font-family: $textSign;
        }
        .Progress {
          width: 100%;
        }
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
  .my_job_content {
    grid-area: b;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 70px 1fr;
    grid-template-areas: 'a' 'b';
    gap: 30px 0px;
    height: auto;
    padding-top: $containerTop;
    .job_card_container {
      grid-area: b;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: flex-start;
      gap: 60px;
      .job_card {
        border-radius: $borderRadius;
        position: relative;
        max-height: 270px;
        min-height: 249px;
        width: 300px;
        transition: $transition;
        .card_background {
          width: 100%;
          height: 100%;
          background-size: cover !important;
          background-position: center !important;
          border-radius: $borderRadius;
          background: rgba(255, 255, 255, 0.2);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          filter: brightness(0.85) saturate(1.2) contrast(0.85);
          transition: all 200ms linear;
          transform-origin: center;
          transform: scale(1) translateZ(0);
        }
        .job_content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 100%;
          text-align: center;
        }
        .job_content_image {
          max-width: 220px;
          max-height: 100px;
          border-radius: $borderRadius;
          margin-bottom: 20px;
          object-fit: cover;
        }
        &:hover .card_background {
          transform: scale(1.05) translateZ(0);
          box-shadow: $borderHoverWhite;
        }
      }
      &:hover .job_card:not(:hover) .card_background {
        filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
      }
    }
  }
  .experience_buttom {
    grid-area: c;
    justify-self: center;
    align-self: center;
  }
}
.my_project {
  position: relative;
  display: grid;
  grid-template-areas: 'a' 'b' 'c';
  grid-template-rows: 100px 1fr 100px;
  gap: 30px 0;
  height: auto;
  min-height: $minHeight;
  background: $backgroundColor;
  border-radius: 200px 200px 0 0;
  margin-top: 50px;
  padding-bottom: 63px;
  .my_project_background {
    position: absolute;
    width: 100%;
    height: 100%;
    .g-polygon-1 {
      bottom: 100px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 714px;
      height: 390px;
      background: linear-gradient(#ffee55, #fdee99);
      clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
      transition: $transition;
    }

    .g-polygon-2 {
      bottom: 0px;
      left: 30%;
      transform: translate(-50%, 0);
      width: 1000px;
      height: 450px;
      background: linear-gradient(-36deg, #e950d1, #f980d9);
      clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
      transition: $transition;
    }

    .g-polygon-3 {
      bottom: 0px;
      left: 70%;
      transform: translate(-50%, 0);
      width: 1000px;
      height: 450px;
      background: rgba(87, 80, 233);
      clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
      transition: $transition;
    }
    & > div {
      position: absolute;
      opacity: 0.5;
      border-radius: 200px 200px 0 0;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      backdrop-filter: blur(150px);
      z-index: 1;
    }
  }
  .my_project_content {
    box-sizing: border-box;
    margin: 0 auto;
    grid-area: b;
    width: 1200px;
    padding: 0 100px 0 100px;
    transition: $transition;
    z-index: 12;
    .my_project_content_flex {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 45px 0px;
    }
    .my_project_box {
      width: 300px;
      height: 400px;
      overflow: hidden;
      position: relative;
      // border-radius: $borderRadius;
      background: transparent;
      box-shadow: $borderColor;
      transition: $transition;
      .my_project_box_img {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        // border-radius: $borderRadius;
        transition: $transition;
      }
      .my_project_box_text {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        transform: scale(0);
        transition: $transition;
        padding: 20px;
        .my_project_title {
          font-size: 24px;
          // font-family: $textSign;
          margin-bottom: $bottom;
        }
        .my_project_Universal {
          color: $accentColor;
          // font-family: $textSign;
          margin-bottom: 3px;
        }
        .my_project_Introduction {
          font-size: $contextSize;
          // font-family: $textTypes;
          margin-bottom: $bottom;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .my_project_Technology {
          font-size: $buttonSize;
          // font-family: $textTypes;
          margin-bottom: $bottom;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
      &:hover {
        box-shadow: $borderHover;
      }
      &:hover .my_project_box_text {
        transform: scale(1);
      }
      &:hover .my_project_box_img {
        transform: scale(1.2);
      }
    }
  }
  .my_job_title {
    grid-area: a;
    align-self: center;
    z-index: 12;
  }
  .experience_buttom {
    justify-self: center;
    align-self: center;
    z-index: 12;
  }
}
@media (max-width: 1700px) {
  .introduction {
    width: $boxWithMiddle;
    margin-top: 0px;
  }
  .experience {
    grid-template-areas: 'a' 'b' 'c';
    width: $boxWithMiddle;
    grid-template-columns: 95%;
    grid-template-rows: 1fr auto 100px;
    gap: 30px 0px;
    justify-content: center;
    margin-top: 0px;
    .tree_box {
      grid-area: a;
    }
    .my_job_content {
      grid-area: b;
      padding-top: 0px;
      .job_card_container {
        margin-bottom: $bottom;
        justify-content: space-evenly;
      }
    }
    .experience_buttom {
      grid-area: c;
    }
  }
  .my_project {
    grid-template-rows: 100px auto 100px;
    min-height: 0;
    .my_project_background {
      .g-polygon-3 {
        width: 825px;
      }
    }
  }
}
@media (max-width: 1400px) {
  .my_project {
    .my_project_background {
      .g-polygon-2 {
        width: 400px;
      }

      .g-polygon-3 {
        width: 645px;
        left: 70%;
      }
    }
    .my_project_content {
      width: 850px;
    }
  }
  .typing {
    font-size: 38px;
  }
  .overall-header {
    .overall-header-left {
      .text-sign {
        font-size: 22px;
      }
    }
  }
}
@media (max-width: 1080px) {
  :deep(.el-dialog) {
    width: 100%;
  }
  .overall-header {
    grid-template-areas: 'a' 'b' 'c';
    grid-template-columns: 1fr;
    grid-template-rows: 280px 1fr 100px;
    justify-content: center;
    .overall-header-left {
      grid-area: b;
      grid-template-rows: repeat(4, 1fr);
      .text-title {
        align-self: center;
      }
      .buttonFlex {
        align-self: center;
      }
      .text-content {
        align-self: center;
      }
      .text-content {
        font-size: $titleSizeH5;
      }
    }
    .overall-header-right {
      grid-area: a;
      border-radius: 0px;
    }
  }
  .introduction {
    width: 100%;
    padding: $paddingMobile;
  }
  .experience {
    width: 100%;
    padding: $paddingMobile;
  }
  .my_project {
    width: 100%;
    .my_project_background {
      .g-polygon-1 {
        width: 400px;
      }
      .g-polygon-3 {
        width: 455px;
      }
    }
    .my_project_content {
      justify-content: center;
      width: 100%;
      padding: $paddingMobile;
      .my_project_content_flex {
        gap: 45px 35px;
        justify-content: center;
      }
    }
  }
}
@media (max-width: 780px) {
  .my_project {
    border-radius: 100px 100px 0 0;
  }
  .overall-header {
    overflow: hidden;
    .overall-header-left {
      .text-title,
      .text-sign,
      .text-content {
        align-self: flex-end;
        box-sizing: border-box;
        padding: 0 $paddingMobile 0 $paddingMobile;
      }
      .text-title {
        .typed-element {
          font-size: $contexSizeH5;
          .typing {
            font-size: $contexSizeH5;
          }
        }
      }
      .text-sign {
        font-size: $verySize;
      }
      .text-content {
        font-size: $contexSizeH5;
      }
    }
  }
  .introduction {
    grid-template-rows: 1fr auto 100px;
    .my_Exercise {
      font-size: $contexSizeH5;
      .my_Exercise_number {
        margin-left: 0px;
        margin-top: 10px;
        display: block;
      }
    }
    .my_image_Exercise {
      flex-wrap: wrap;
      .my_image {
        margin: 0 auto;
        margin-top: 10px;
        min-width: 80px;
        min-height: 80px;
      }
    }
  }
  .experience {
    width: 100%;
    padding: $paddingMobile;
    .tree_box {
      .my_tree_card {
        .skill_points {
          display: block;
          .skill_web,
          .skill_end,
          .skill_linux {
            margin-bottom: 30px;
            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
      }
    }
    .my_job_content {
      .job_card_container {
        .job_card {
          width: 255px;
        }
      }
    }
  }
  .my_project {
    width: 100%;
    .my_project_background {
      .g-polygon-2 {
        left: 0%;
        width: 300px;
      }
      .g-polygon-3 {
        right: 0;
        width: 345px;
      }
    }
  }
}
@media (max-width: 580px) {
  .introduction {
    .my_Exercise {
      .my_Exercise_text {
        display: flex;
        .my_Exercise_number {
          margin-left: 5px;
          margin-top: 0px;
        }
      }
    }
  }
  .my_project {
    .my_project_background {
      display: none;
    }
    .my_project_content {
      .my_project_content_flex {
        .my_project_box {
          .my_project_box_text {
            transform: scale(1);
          }
        }
      }
    }
  }
}
@keyframes vignette-anim {
  0%,
  100% {
    box-shadow: 10px 0 30px black;
  }
  50% {
    box-shadow: 0px 0 0px black;
  }
}
@keyframes animate {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 -1450px;
  }
}
</style>
