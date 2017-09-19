<script>
export default {
  name: 'back',
  mounted(){ castShadows(this.$el[0]); }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .lexi-back(@click="$emit('back')")
    img.shadow-icon(data-src="lexi-back-x")
    .txt Back
</template>

<!--
  ***** C S S *****
-->

<style lang="scss">
  $hover-color:#143B50;
  .lexi-back     {display: flex; align-items: center; justify-content: flex-end; font-size:15px; font-size:$semibold; color:#3F5F6B; font-style: italic; cursor: pointer;
    .txt    {margin-left:6px; }
    &:hover {color:$hover-color;
      svg * {fill:$hover-color}
    }
  }
</style>
