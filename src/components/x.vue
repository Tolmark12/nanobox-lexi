<script>
export default {
  name: 'back',
  props:{
    txt:{default:null, type:String}
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .x(@click="$emit('click')")
    .btn
      .cross
      .txt(v-if="!!$slots.default")
        slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss">
  @import "vars-utils";
  $hover-color:#143B50;

  .x  {display:inline-flex;
    .cross    {@include cross();}
    .txt      {margin-left:6px; @include btn-style()}
    .btn      {cursor: pointer; display: flex; align-items: center; padding:3px 3px;
      &:hover {color:$hover-color;
        .cross{
          &:after,
          &:before
              {background:$hover-color}
        }
      }
    }
    &.stretch {display: flex;  justify-content: flex-end;}
  }
</style>
