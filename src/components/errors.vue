<script>
export default {
  name: 'errors',
  props:['errors'],
  methods:{
    hasErrors(){
      if(this.errors == null)
        return false
      else if( this.errors.length == 0 )
        return false
      else
        return true
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .errors(v-if="hasErrors()" )
    .error(v-html="errors")
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  .errors             {width:100%;  border: 4px solid #ED596F; color:#5B3C40; padding:10px; background: white; font-size:16px; z-index: 2;
    &.hidden          {display: none; }
    &:after           {top: 100%; right: 45px; border: solid transparent; content: ""; height: 0; width: 0; position: absolute; pointer-events: none; border-color: rgba(#ED596F, 0); border-top-color: #ED596F; border-width: 15px; margin-left: -15px;}
  }
</style>
