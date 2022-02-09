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
          <vuetyped :strings="typewriter" :loop="true" :smart-backspace="true" :type-speed="120" :start-delay="1000">
            <div class="typing" />
          </vuetyped>
        </div>
        <div class="text-sign">{{ my_sign }}</div>
        <div class="text-content">
          <div v-for="(item,index) in linkOut" :key="index" class="text-content-svg">
            <el-tooltip :content="item.title || '我没写'" placement="bottom" effect="light">
              <a :href="item.link" target="_black">
                <SvgIcon :icon-class="item.svg" />
              </a>
            </el-tooltip>
          </div>
        </div>
        <div class="buttomDiv buttonFlex hvr-bounce-to-top hvr-buzz-out " @click="gotoCV">查看我的简历</div>
      </div>
      <div id="reveal-heard" class="overall-header-right" />
      <div id="reveal-heard" class="overall-header-buttom">
        <div class="buttomDiv buttonFlex hvr-bounce-to-bottom hvr-wobble-horizontal" @click="gotoIntroduction">继续浏览</div>
      </div>
    </div>
    <!-- 个人介绍 -->
    <div class="introduction">
      <!-- 个人介绍 -->
      <div id="reveal-introduce" class="my_image_Exercise">
        <div class="my_Exercise">
          <div v-if="my_name !== '' && my_name !== null" class="my_Exercise_text">姓名: <span class="my_Exercise_number">{{ my_name }}</span> </div>
          <div v-if="my_Position !== '' && my_Position !== null" class="my_Exercise_text">职位: <span class="my_Exercise_number">{{ my_Position }}</span> </div>
          <div v-if="my_mail !== '' && my_mail !== null" class="my_Exercise_text">邮箱: <span class="my_Exercise_number">{{ my_mail }}</span> </div>
          <div v-if="my_phone !== '' && my_phone !== null" class="my_Exercise_text">电话: <span class="my_Exercise_number">{{ my_phone }}</span> </div>
          <div v-if="my_colleges !== '' && my_colleges !== null" class="my_Exercise_text">毕业院校: <span class="my_Exercise_number">{{ my_colleges }}</span> </div>
        </div>
        <div class="my_image">
          <el-image :src="my_photo" fit="fill" />
        </div>
      </div>
      <!-- 关于我 -->
      <div id="reveal-introduce" class="content_text">
        <div class="about_me"><span class="about_me_title">关于我</span></div>
        <div class="about_me_content">&emsp;&emsp;{{ my_about }}</div>
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
            <div v-if="my_web.show" class="skill_web">
              <div class="skill_web_text">
                <div class="percentage">
                  <count-to ref="webPercentage" :start-val="0" :end-val="my_web.percentage" :duration="8000" :autoplay="false" /><span>%</span>
                </div>
                <div class="suject">前端</div>
                <div class="frame">HTML，CSS，Js，Vue，React ...</div>
              </div>
              <SvgIcon icon-class="HTML5" class="webCard" />
            </div>

            <div v-if="my_java.show" class="skill_end">
              <div class="skill_web_text">
                <div class="percentage">
                  <count-to ref="javaPercentage" :start-val="0" :end-val="my_java.percentage" :duration="8000" :autoplay="false" /><span>%</span>
                </div>
                <div class="suject">后端</div>
                <div class="frame">Java，GO，PHP，Python，表结构 ...</div>
              </div>
              <SvgIcon icon-class="java" class="webCard" />
            </div>

            <div v-if="my_linux.show" class="skill_linux">
              <div class="skill_web_text">
                <div class="percentage">
                  <count-to ref="linuxPercentage" :start-val="0" :end-val="my_linux.percentage" :duration="8000" :autoplay="false" /><span>%</span>
                </div>
                <div class="suject">Linux</div>
                <div class="frame">Nginx，Linux，Docker，Apache ...</div>
              </div>
              <SvgIcon icon-class="linux" class="webCard" />
            </div>
          </div>
          <div class="skill_Progress">
            <div v-for="(item,index) in my_Skill" :key="index" class="skill_Progress_content">
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
      <div id="reveal-experience" class="my_job_content">
        <div class="my_job_title">
          <div class="about_me"><span class="about_me_title">工作经历</span></div>
        </div>
        <div class="job_card_container">
          <div v-for="(item,index) in my_experience" :key="index" class="job_card">
            <div class="card_background" :style="{background: 'url('+ item.cardBackground +')'}" />
            <div class="job_content my_Exercise">
              <el-image class="job_content_image" :src="item.image" fit="fill" />
              <div class="my_Exercise_text_job">公司:&nbsp;<span class="my_Exercise_number_job">{{ item.titles }}</span></div>
              <div class="my_Exercise_text_job">职位:&nbsp;<span class="my_Exercise_number_job">{{ item.post }}</span></div>
              <div class="my_Exercise_text_job">时间:&nbsp;<span class="my_Exercise_number_job">{{ item.time }}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="experience_buttom">
        <div class="buttomDiv buttonFlex hvr-wobble-to-bottom-right hvr-bounce-to-left" @click="gotoProject">继续浏览</div>
      </div>
    </div>
    <!-- 项目经历 -->
    <div class="my_project">
      <div id="reveal-project" class="my_job_title">
        <div class="about_me"><span class="about_me_title">项目经历</span></div>
      </div>
      <div class="my_project_content">
        <div id="reveal-project" class="my_project_content_flex">
          <div v-for="(item,index) in my_project" :key="index" class="my_project_box">
            <el-image class="my_project_box_img" :src="item.cardBackground" fit="cover" />
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
                  <div class="buttomDiv buttonFlex hvr-bounce-to-right" @click="checkProject(item)">查看详情</div>
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

<script>
const res = require('@/config.js')
import { onMounted, reactive, toRefs, ref } from 'vue'
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
    // 操作Dom
    const webPercentage = ref(null)
    const javaPercentage = ref(null)
    const linuxPercentage = ref(null)
    // 赋值
    const data = reactive({
      // 声明 scrollReveal组件
      scrollReveal: scrollReveal(),
      // 打字机内容
      typewriter: res.my_typewriter,
      // 跳转内容
      linkOut: res.my_Link,
      // 个人签名
      my_sign: res.my_sign,
      // 简历下载
      my_CV: res.my_CV,
      // 你的大头照
      my_photo: res.my_photo,
      // 关于我
      my_about: res.my_about,
      // 名字
      my_name: res.my_name,
      // 职位
      my_Position: res.my_Position,
      // 邮箱
      my_mail: res.my_mail,
      // 电话
      my_phone: res.my_phone,
      // 学校
      my_colleges: res.my_colleges,
      // 前端
      my_web: res.my_web,
      // 后端
      my_java: res.my_java,
      // 系统
      my_linux: res.my_linux,
      // 技能树
      my_Skill: res.my_Skill,
      // 在职公司
      my_experience: res.my_experience,
      // 工作经历
      my_project: res.my_project,
      // 工作经历传值
      my_project_son: []
    })
    // 状态位
    const state = reactive({
      // 顶部显示的状态位
      header: 0,
      // 显示内容的状态位
      introduce: 0,
      // 显示技能和经历
      experience: 0,
      // 显示项目经历
      project: 0,
      // 详情页弹窗
      showDialog: false
    })
    // 下载简历
    const gotoCV = () => {
      window.open(data.my_CV)
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
      // 启动scrollReveal的方法
      retScroll(data, state, webPercentage, javaPercentage, linuxPercentage)
      console.log(res)
    })
    // 结构导出
    const dataOut = toRefs(data)
    return { ...dataOut, state, gotoCV, webPercentage, javaPercentage, linuxPercentage, gotoIntroduction, gotoExperience, gotoProject, checkProject, gotoTheEnd }
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
  font-family: $textSign;
  font-size: $titleMedium;
}
:deep(.el-dialog) {
  width: 80%;
}

.overall-header,
.introduction,
.experience,
.my_project {
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
  opacity: v-bind('state.header');
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
      font-family: $textSign;
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
      .text-content-svg {
        align-self: center;
      }
    }
    .buttonFlex {
      justify-self: center;
      align-self: start;
      grid-area: c;
    }
    .typing {
      font-weight: 700;
      font-family: $textTypes;
    }
  }
  .overall-header-right {
    grid-area: b;
    background: url('https://jinyanlong-1305883696.cos.ap-hongkong.myqcloud.com/bg.jpg')
      no-repeat;
    background-size: cover;
    background-attachment: fixed;
    // filter: blur(1px);
    animation: vignette-anim 3s infinite;
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
  opacity: v-bind('state.introduce');
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
  opacity: v-bind('state.experience');
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
            font-family: $textSign;
            font-size: 24px;
          }
          .suject {
            margin-top: 10px;
            font-size: 24px;
            font-family: $textTypes;
          }
          .frame {
            margin-top: 10px;
            font-size: 18px;
            font-family: $textTypes;
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
          font-family: $textSign;
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
      justify-content: space-between;
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
  opacity: v-bind('state.project');
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
  .my_project_content {
    box-sizing: border-box;
    margin: 0 auto;
    grid-area: b;
    width: 1200px;
    padding: 0 100px 0 100px;
    transition: $transition;
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
      border-radius: $borderRadius;
      background: transparent;
      box-shadow: $borderColor;
      transition: $transition;
      .my_project_box_img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: $borderRadius;
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
          font-size: $titleMedium;
          font-family: $textSign;
          margin-bottom: $bottom;
        }
        .my_project_Universal {
          color: $accentColor;
          font-family: $textSign;
          margin-bottom: 3px;
        }
        .my_project_Introduction {
          font-size: $contextSize;
          font-family: $textTypes;
          margin-bottom: $bottom;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .my_project_Technology {
          font-size: $buttonSize;
          font-family: $textTypes;
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
  }
  .experience_buttom {
    justify-self: center;
    align-self: center;
  }
}
@media (max-width: 1630px) {
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
  }
}
@media (max-width: 1400px) {
  .my_project {
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
        font-size: $contexSizeH5;
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
    grid-template-rows: 1fr 1fr 100px;
    justify-content: center;
    .overall-header-left {
      grid-area: b;
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
      grid-template-rows: auto 50px 50px auto;
      .text-title,
      .text-sign,
      .text-content {
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
}
@media (max-width: 580px) {
  .my_project {
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
</style>
