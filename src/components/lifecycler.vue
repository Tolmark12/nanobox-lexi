<script type="text/babel">
export default {
  name: 'lifecycler',
  props:{
    cycle : { default : false, type:Boolean}
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .button.lifecycle(v-bind:class="{ing:cycle}" @click="$emit('click')" @mouseover="$emit('mouseover')" @mouseout="$emit('mouseout')")
    slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .button.lifecycle {background: #09A6EC; color:white; font-size:14px; padding:0 20px; display:inline-flex; font-style:italic; transition: padding 0s;
    &.success       {pointer-events: none; color:#00B463; background:white; }
    &.disabled      {opacity:0.3; cursor:not-allowed; pointer-events: none;}
    &.ing           {padding-left:12px;}
  }
</style>
