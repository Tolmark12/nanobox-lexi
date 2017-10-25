<script type="text/babel">
export default {
  name: 'flux',
  props:{
    transition : {default:"grow", kind:String}
  },
  methods:{
    beforeLeave(el) {
      // In case this element is deriving its width from its
      // outer container, lock its width to the current width
      // before we transition it out as positioned absolute
      el.style.width = `${el.offsetWidth}px`
      el.style.height = `${el.offsetHeight}px`
    },
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  transition-group.item(:name="transition" @before-leave="beforeLeave" )
    slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" >
  .item > * {
    transition:all 0.35s cubic-bezier(0.86, 0, 0.07, 1);
  }

  // Slide / Fade
  .grow-enter, .grow-leave-to,
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .grow-leave-active {
    position: absolute;
  }
</style>
