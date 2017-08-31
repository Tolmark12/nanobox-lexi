<script type="text/babel">
export default {
  name: 'dropdown',
  props: ['active-item', 'default'],
  data() {
    return {
      isOpen        : false,
      activeItemId  : "",
      activeItemTxt : ""
    }
  },
  mounted(){
    let $default;
    if(this.default === undefined)
      $default = this.$refs['content'].firstChild
    else
      $default = this.$refs['content'].querySelectorAll('[value="' + this.default + '"]')[0]

    this.activateItem($default)
  },
  methods: {

    // ------------------------------------ Events
    onMouseDown() {
      this.openTime = Date.now()
      this.openDropDown()
      window.addEventListener('mouseup', this.onMouseUp)
      this.addItemHovers()
    },
    onMouseUp(e) {
      // Allow 1/3 of a second after the mousepress in case
      // they're single clicking to open the dropdown
      if(Date.now() - this.openTime < 325) return;

      // If mouseup occurred over a dropdown option
      if(e.target.classList.contains('option')){
        this.activateItem(e.target)
        this.$emit( 'changed', this.activeItemId )
      }

      this.removeItemHovers()
      this.closeDropDown()
      window.removeEventListener('mouseup', this.onMouseUp)
    },
    // ------------------------------------ Activate an item
    activateItem($item) {
      // If an item is already checked, uncheck it
      let currentCheckedItem = this.$refs['content'].getElementsByClassName('checked')
      if( currentCheckedItem.length > 0)
        currentCheckedItem[0].classList.remove('checked')

      $item.classList.add("checked")
      this.activeItemTxt = $item.textContent
      this.activeItemId  = $item.getAttribute('value')
    },
    // ------------------------------------  Open / Close Dropdown
    openDropDown() {
      this.isOpen = true
      if(this.isOpen)
        // Slight timeout so that the dropdown element will be measurable
        setTimeout(this.sizeAndPositionDropdown, 5)
    },
    closeDropDown() {
      this.isOpen = false
    },

    // ------------------------------------ Position the dropdown over the trigger
    sizeAndPositionDropdown () {
      let top
      let $content = this.$refs['content']
      let $trigger = this.$refs['trigger']

      let dropdownHeight = $content.clientHeight
      let pos            = $trigger.getBoundingClientRect()
      let winHeight      = window.innerHeight
                        || document.documentElement.clientHeight
                        || document.body.clientHeight;

      if (pos.top + dropdownHeight > winHeight)
        top = winHeight - dropdownHeight
      else
        top = pos.top

      // If page is smaller than dropdown
      if (winHeight < dropdownHeight)
        top = 0
        $content.style.height   = winHeight
        $content.style.overflow = 'scroll'

      $content.style.top     = top + "px";
      $content.style.left    = pos.left + "px";
      $content.style.opacity = "1";
    },
    // ------------------------------------ Helpers
    addItemHovers() {
      let $els = this.$refs['content'].getElementsByClassName('option')
      for ( let $el of $els ){
        $el.addEventListener('mouseover', (e)=>
          e.target.classList.add("hover")
        )
        $el.addEventListener('mouseout', (e)=>
          e.target.classList.remove("hover")
        )
      }
    },
    removeItemHovers() {
      let $els = this.$refs['content'].getElementsByClassName('option')
      // Hacky way to clear all events from an element
      for ( let $el of $els ){
        let newEl = $el.cloneNode( true )
        $el.parentNode.replaceChild( newEl, $el )
        newEl.classList.remove("hover")
      }
    },
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .lexi.drop-down
    .trigger(v-on:mousedown="onMouseDown" ref="trigger" )
      .txt {{ activeItemTxt }}
    .drop-content(v-show="isOpen" ref="content")
      slot name="options"
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  @import "vars-utils";
  .lexi.drop-down{
    .trigger {position:relative; display: inline-flex; color: $azul2; font-style: italic; border-bottom: 3px solid $azul2; padding-bottom: 3px; cursor: pointer; font-size:16px; max-height: 30px;
      .txt                     {margin-right:10px; }
      &:after                  {margin-top: 7px; display: block; content:""; border-left: 7px solid transparent; border-right: 7px solid transparent; border-top: 7px solid $azul2; margin-left: auto; transform: scaleX(0.8); }
      &.white                  {border-bottom:none; background:white; padding:8px 12px; max-height: initial;}
      &.autoscale              {min-width: initial !important;}
    }

    .drop-content              {user-select: none; background:white; position: fixed; left: 20px; @include drop-shadow(0, 1px, 6px, #AAA); z-index: 1000; opacity:0;
      .checkmark               {display:none; }
      .label, .option          {border-bottom: solid #F1EFEF 1px; padding: 4px 16px 4px 22px; display: relative;
        .checkmark             {display:block; position:absolute; left:6px; top:3px;  }
      }
      .label                   {color:#B5BFC7; font-size:12px; padding-left:14px;  }
      .option                  {position:relative; color: $azul2; font-weight:$semibold; font-size: 16px; font-style: italic; cursor:pointer;
        &.hover                {background: $azul2; color: white;
          &.checked:before     {border-color:white; }
        }
        &.clicked              {background: #53F0FF;  }
        &.checked              {
          &:before             {position:absolute; left:9px; top:8px; @include checkmark; }
        }
        &.disabled             {opacity:0.5; pointer-events: none; }
      }
    }
  }

  // Blue background theme :

  .lexi-blue{
    .lexi-ui.select-trigger{
      // Don't change the white dropdowns
      &:not(.white)            {border-bottom-color: $azul2-blue; color:white;
        &:after                  {border-top-color:white;}
      }
    }
  }

</style>
