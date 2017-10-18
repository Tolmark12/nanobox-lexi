<script>
export default {
  name: 'back',
  props:{
    txt           : {default:null,      type:String},
    size          : {default:'20',      type:String},
    color         : {default:'#143B50', type:String},
    lineWidth     : {default:'2',       type:String},
    hover         : {default:'#009AD2', type:String},
  },
  data(){
    return{
      crossbars : {
        height     : `${this.size}px`,
        background : this.color,
        width      : `${this.lineWidth}px`,
        left       : `${this.size/2}px`
      },
      cross     : {
        width  : `${this.size}px`,
        height : `${this.size}px`,
      }
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .x(@click="$emit('click')")
    .btn
      .cross(v-bind:style="cross")
        .before(v-bind:style="crossbars")
        .after(v-bind:style="crossbars")
      .txt(v-if="!!$slots.default")
        slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss">
  @import "vars-utils";
  $hover-color:#18A9E1;

  .x          {display:inline-flex;
    .cross    {@include cross();}
    .txt      {margin-left:6px; @include btn-style()}
    .btn      {cursor: pointer; display: flex; align-items: center; padding:3px 3px;
      &:hover {
        .txt  {color:$hover-color !important;}
        .cross{
          .after,
          .before
              {background:$hover-color !important; }
        }
      }
    }
    &.stretch {display: flex;  justify-content: flex-end;}
  }
</style>
