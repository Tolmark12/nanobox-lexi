<script type="text/babel">
export default {
  name: 'checkbox',
  props: ['label', 'labelIsAfter', 'id', 'value'],
  data: function(){
    return {checked:this.isChecked}
  },
  methods:{
    onClick() {
      this.checked = !this.checked
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
  .checkbox.lexi(v-bind:class="{ 'label-before': true, checked:this.value }" v-on:click="onClick" )
    .checker
    .label {{ label }}
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  @import "vars-utils";
  .checkbox          {display: inline-flex; cursor:pointer; cursor:pointer; align-items: center; padding:3px 0;
    .checker         {position:relative; width:16px; height:16px; background:$azul2; display: inline-block; border-radius: 2px; }
    &.checked        {
      .checker:after {@include checkmark(14px, white, 3px); position:absolute;left:7px; top:-2px; }
    }
    &:hover          {
      .label         {color:#0467CD}
    }
  }

  .lexi-blue{
    .lexi-ui.checkbox .checker{background:#006EAD; }
  }
</style>
