<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
import { computed } from '@vue/reactivity'
/**
 * icon-svg 组件（展示所有的svg）
 */
export default {
  name: 'BaseSvgIcon',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    iconClass: { type: String },
    // eslint-disable-next-line vue/require-default-prop
    className: { type: String }
  },
  setup (props) {
    const iconName = computed(() => {
      return props.iconClass ? `#icon-${props.iconClass}` : '#icon'
    })
    const svgClass = computed(() => {
      return props.className ? 'svg-icon ' + props.className : 'svg-icon'
    })
    return { iconName, svgClass }
  }
}
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
