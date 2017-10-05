<script type="text/babel">
export default {
  name: 'checkbox',
  props: ['contentIsBefore', 'id', 'value'],
  methods:{
    onClick() {
      this.$emit('changed', !this.value, this.id)
      this.$emit('input', !this.value)
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .checkbox.lexi(v-bind:class="{ 'flip': contentIsBefore, checked:this.value }" v-on:click="onClick" )
    .checker
    slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  @import "vars-utils";
  .checkbox                    {display: inline-flex; cursor:pointer; cursor:pointer; align-items: center; padding:3px 0;
    .checker                   {position:relative; width:16px; height:16px; background:white; display: inline-block; border-radius: 2px; margin:0 6px 0 0; @include thin-shadow;}
    &.checked                  {
      .checker                 {background:$azul2;
        &:after                {@include checkmark(14px, white, 3px); position:absolute;left:7px; top:-2px; }
      }
    }
    &:hover                    {
      .label                   {color:#0467CD}
    }
    &.flip                     {
      .checker                 {order:3; margin:0 0 0 6px; }
    }
  }

  .lexi-blue                   {
    .lexi-ui.checkbox .checker {background:#006EAD; }
  }
</style>
