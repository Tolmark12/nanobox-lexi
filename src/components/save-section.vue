<script>
export default {
  name: 'save-section',
  props: {
    saveText    : { default : "Save",   type:String},
    cancelText  : { default : "Cancel", type:String},
    showCancel  : { default : true,     type:Boolean},
    cycling     : { default : false,    type:Boolean}
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .save-section
    .cancel(v-if="showCancel" @click="$emit('cancel')" ) {{ cancelText }}
    .button.lifecycle(@click="$emit('save')" v-bind:class="{ing:cycling}") {{ saveText }}
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .save-section       {display: flex; align-items: center; justify-content: flex-end; font-size:14px; font-style:italic; margin-top:10px;
    .cancel           {margin-right:20px; color:#99abb9; cursor:pointer;}
    .button           {background: #09A6EC; color:white; font-size:14px; padding:0 20px; display:inline-flex; font-style:italic;
      &.success       {pointer-events: none; color:#00B463; background:white; }
      &.disabled      {opacity:0.3; cursor:not-allowed; pointer-events: none;}
    }
  }
</style>
