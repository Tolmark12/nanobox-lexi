<script type="text/babel">
export default {
  name: 'checkbox',
  props: ['label', 'labelIsAfter', 'is-checked', 'id'],
  data: function(){
    return {checked:this.isChecked}
  },
  methods:{
    onClick() {
      this.checked = !this.checked
      this.$emit('changed', this.checked, this.id)
    },
    check()   {this.checked = true},
    unCheck() {this.checked = false}
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .checkbox.lexi(v-bind:class="{ 'label-before': true, checked:checked }" v-on:click="onClick" )
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
