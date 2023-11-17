<template>
  <div class="face-blender-container">
    <div class="blender-circle">
      <div
        class="blend-pointer"
        ref="pointer"
        :style="{
          left: `${pointerPosition.x}px`,
          top: `${pointerPosition.y}px`
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue'

export default {
  setup() {
    const BLENDER_BORDER_WIDTH = 2 // 圆形混合器边宽
    const BLENDER_RADIUS = 224 * 0.5 - BLENDER_BORDER_WIDTH // 圆形混合器半径
    const POINTER_RADIUS = 20 * 0.5 // 可拖动指示器半径
    // 圆形混合器中心点
    const center = {
      x: BLENDER_RADIUS,
      y: BLENDER_RADIUS
    }
    const state = reactive({
      pointerPosition: { x: center.x, y: center.y }
    })
    const pointer = ref(null)
    // 计算 x y
    const getPositionByRadian = (radian, radius) => {
      const x = radius * Math.cos(radian) + center.x
      const y = radius * Math.sin(radian) + center.y
      return { x, y }
    }
    // 可拖动圆型指示器
    const initPointer = () => {
      const pointerDom = pointer.value
      pointerDom.onmousedown = e => {
        // 鼠标按下，计算当前元素距离可视区的距离
        const originX = e.clientX - pointerDom.offsetLeft - POINTER_RADIUS
        const originY = e.clientY - pointerDom.offsetTop - POINTER_RADIUS
        document.onmousemove = function (e) {
          // 通过事件委托，计算移动的距离
          // 小球在 中的 left/ top 值
          const left = e.clientX - originX
          const top = e.clientY - originY
          const dx = left - center.x
          const dy = top - center.y
          console.log(dx, dy)
          // 计算当前鼠标与中心点的弧度
          const radian = Math.atan2(dy, dx)
          // 计算当前鼠标与中心点距离
          const dist = Math.sqrt(dx * dx + dy * dy)
          //   console.log(dist)
          const radius = dist >= BLENDER_RADIUS ? BLENDER_RADIUS : dist
          // 根据半径与弧度计算 x, y
          const { x, y } = getPositionByRadian(radian, radius)
          state.pointerPosition.x = x
          state.pointerPosition.y = y
        }
        document.onmouseup = function (e) {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }

    onMounted(() => {
      initPointer()
    })

    return {
      ...toRefs(state),
      pointer
    }
  }
}
</script>

<style lang="scss" scoped>
$stageDiameter: 360px;
$blenderCircleDiameter: 224px;
$faceCircleDiameter: 64px;
$PointerDiameter: 20px;
.face-blender-container {
  position: relative;
  width: $stageDiameter;
  height: $stageDiameter;
}
.blender-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: $blenderCircleDiameter * -0.5;
  margin-top: $blenderCircleDiameter * -0.5;
  width: $blenderCircleDiameter;
  height: $blenderCircleDiameter;
  border-radius: $blenderCircleDiameter;
  background: #f00;
  border: 2px solid #000;
}

.blend-pointer {
  position: absolute;
  left: 50%;
  top: 50%;
  width: $PointerDiameter;
  height: $PointerDiameter;
  margin-left: $PointerDiameter * -0.5;
  margin-top: $PointerDiameter * -0.5;
  border-radius: $PointerDiameter;
  background: #11bbf5;
  border: 2px solid #ffffff;
  z-index: 10;
}
</style>
