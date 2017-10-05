<script type="text/babel">
export default {
  name: 'radio',
  props: ['val', 'value'],
  methods:{
    onClick() {
      this.$emit('input', this.val)
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .radio.lexi(@click="onClick" v-bind:class="{ selected: value == val }")
    .circle
      .dot
    .label
      slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  @import "vars-utils";
  .radio       {position: relative; display: flex; align-items: center; cursor:pointer; padding:2px 2px 2px 0;
    .circle    {width:20px; height:20px; border-radius: 50%; background: white; display: flex; align-items: center; justify-content: center; margin-right:8px; }
    .dot       {width:40%; height: 40%; border-radius: 50%; background: white; display: none; }
    &.selected {
      .label   {color:$azul2-darker;}
      .circle  {background: $azul2-blue}
      .dot     {display: initial; }
    }
    &:hover    {
      .label   {color:$azul2-darker;}
    }
  }
</style>
