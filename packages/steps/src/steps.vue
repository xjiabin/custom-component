<template>
  <!-- 最外层的容器 -->
  <div class="lg-steps">
    <!-- 横线 -->
    <div class="lg-steps-line"></div>
    <!-- 步骤 -->
    <div
      class="lg-step"
      v-for="index in count"
      :key="index"
      :style="{ color: active >= index ? activeColor : defaultColor}">
      {{ index }}
    </div>
  </div>
</template>

<script>
import './steps.css'

export default {
  name: 'LgSteps',
  props: {
    count: { // 总步骤
      type: Number,
      default: 3
    },
    active: { // 已经完成几步
      type: Number,
      default: 0 // 0就是一个都没有完成，1 就是已经完成了一步
    },
    activeColor: { // 完成之后的高亮颜色
      type: String,
      default: 'red'
    },
    defaultColor: { // 步骤的默认颜色
      type: String,
      default: 'green'
    }
  },
}
</script>
