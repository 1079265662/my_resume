<template>
  <el-dialog v-model="showDialog" title="提示" center>
    <div class="dialog">
      <div class="dialog__title">
        项目类型
      </div>
      <div class="dialog_text">
        {{ content.project_style || '我不到啊' }}
      </div>
      <div class="dialog__title">
        开发周期
      </div>
      <div class="dialog_text">
        {{ content.project_time || '我不到啊' }}
      </div>
      <div class="dialog__title">
        开发软件
      </div>
      <div class="dialog_text">
        {{ content.project_software || 'Vue' }}
      </div>
      <div class="dialog__title">
        开发背景
      </div>
      <div class="dialog_text">
        {{ content.project_Introduction || '没有背景' }}
      </div>
      <div class="dialog__title">
        项目职责
      </div>
      <div class="dialog__introduce" v-html="content.project_duty" />

      <div class="dialog__title">
        项目预览
      </div>
      <div class="dialog__image_box">
        <el-image v-for="(item, index) in content.project_image" :key="index" class="dialog__image" :src="item.src" @click="openLightbox(index)" />
      </div>
      <!-- 灯箱 -->
      <vue-easy-lightbox esc-disabled move-disabled :visible="visible" :imgs="imgs" :index="index" @hide="handleHide" />
    </div>
    <!-- Vue3插槽 -->
    <template #footer>
      <div class="experience_buttom">
        <div class="buttomDiv buttonFlex hvr-back-pulse" @click="handleClose">我看完啦</div>
      </div>
    </template>

  </el-dialog>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'CheckProject',
  props: {
    content: {
      type: Object,
      default: -1
    }
  },
  setup (props, context) {
    // 储存接收的值
    const data = reactive({
      showDialog: props.showDialog,
      // 灯箱显示
      visible: false,
      // 灯箱索引
      index: 0, // default: 0
      // 灯箱图片
      imgs: []
    })
    // 关闭弹窗传值
    const handleClose = () => {
      // 关闭弹窗
      context.emit('update:modelValue', false)
    }
    // 打开灯箱
    const openLightbox = (e) => {
      // 显示灯箱
      data.visible = true
      // 灯箱内容
      data.imgs = props.content.project_image
      // 灯箱索引值
      data.index = e
    }
    // 关闭灯箱
    const handleHide = () => {
      data.visible = false
    }
    // 结构导出
    const dataOut = toRefs(data)
    return { handleClose, ...dataOut, handleHide, openLightbox }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/minxi';
@include buttomHover;
.buttonFlex {
  margin: 0 auto;
}
.dialog__title {
  box-sizing: border-box;
  font-size: $titleMedium;
  font-family: $textTypes;
  border-left: 4px solid #00a2ff;
  line-height: 48px;
  background: $bodyColor;
  padding-left: 10px;
  margin: 15px 0;
  &:first-child {
    margin-top: 0;
  }
}
.dialog_text {
  padding-left: 10px;
  font-size: $contexSizeH5;
}
.dialog__introduce {
  padding-left: 10px;
  font-size: $contexSizeH5;
  line-height: 180%;
}
.dialog__image_box {
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  .dialog__image {
    width: 300px;
    box-shadow: rgb(50 50 93 / 25%) 0 13px 27px -5px,
      rgb(0 0 0 / 30%) 0 8px 16px -8px;
    cursor: pointer;
  }
}
</style>
