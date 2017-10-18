<script>
import lifecycler from './lifecycler'
export default {
  name: 'save-section',
  props: {
    saveText    : { default : "Save",   type:String},
    cancelText  : { default : "Cancel", type:String},
    showCancel  : { default : true,     type:Boolean},
    cycling     : { default : false,    type:Boolean}
  },
  components:{lifecycler}
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .save-section
    .cancel(v-if="showCancel" @click="$emit('cancel')" ) {{ cancelText }}
    lifecycler(@click="$emit('save')" :cycle="cycling") {{ saveText }}
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .save-section       {display: flex; align-items: center; justify-content: flex-end; font-size:14px; font-style:italic; margin-top:10px;
    .cancel           {margin-right:20px; color:#99abb9; cursor:pointer;
      &:hover         {color:#246CA3;}
    }
  }
</style>
