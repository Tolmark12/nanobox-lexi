<script type="text/babel">
export default {
  name: 'dropdown',
  props: {
    'active-item'  : {type:String},
    'value'        : {type:String},
    'hide-trigger' : {type:Boolean, default:false},
    'x-mod'        : {type:Number,  default:0},
    'y-mod'        : {type:Number,  default:0},
  },
  data() {
    return {
      isOpen                    : false,
      currentItemHasBeenChecked : false
    }
  },

  methods: {
    // ------------------------------------ Events
    open() {
      this.openTime = Date.now()
      this.openDropDown()
      window.addEventListener('mouseup', this.onMouseUp)
    },

    onMouseUp(e) {
      // Allow 1/3 of a second after the mousepress in case
      // they're single clicking to open the dropdown
      if(Date.now() - this.openTime < 325) return;

      // If mouseup occurred over a child dropdown option
      if( this.$el.contains(e.target) ){
        if( e.target.classList.contains('option') ){
          this.$emit('input', e.target.getAttribute('value'))
          this.$emit('changed', e.target.getAttribute('value'))
        }
      }

      this.removeItemHovers()
      this.closeDropDown()
      window.removeEventListener('mouseup', this.onMouseUp)
    },

    // ------------------------------------ Add a check to an item

    checkItemById() {
      this.currentItemHasBeenChecked = true
      let $item = this.$refs['content'].querySelector(`.option[value="${this.value}"]`)
      if($item == null)
        return

      // If an item is already checked, uncheck it
      let currentCheckedItem = this.$refs['content'].getElementsByClassName('checked')
      if( currentCheckedItem.length > 0)
        currentCheckedItem[0].classList.remove('checked')

      $item.classList.add("checked")
    },

    // ------------------------------------  Open / Close Dropdown

    openDropDown() {
      this.isOpen = true
      // Slight timeout so that the dropdown element will be measurable
      setTimeout(this.sizeAndPositionDropdown, 5)
    },

    closeDropDown() {
      this.isOpen = false
    },

    // ------------------------------------ Position the dropdown over the trigger
    sizeAndPositionDropdown () {
      this.addItemHovers() // Add hover listeners
      this.checkItemById() // check the current item
      let top
      let $content = this.$refs.content

      let dropdownHeight = $content.clientHeight
      let pos            = this.$el.getBoundingClientRect()
      let winHeight      = window.innerHeight
                        || document.documentElement.clientHeight
                        || document.body.clientHeight;

      top = pos.top + this.yMod

      if (top + dropdownHeight > winHeight)
        top = winHeight - dropdownHeight

      // If page is smaller than dropdown
      if (winHeight < dropdownHeight)
        top = 0
        $content.style.height   = winHeight
        $content.style.overflow = 'scroll'

      $content.style.top     = `${top}px`;
      $content.style.left    = `${pos.left + this.xMod}px`;
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

    // Get the text from an option by id.
    // Seems pretty intense.. is there a better way?
    // maybe see : https://forum.vuejs.org/t/how-to-properly-access-components-inside-slot-content/4713
    getItemText(val) {
      let txt = ""
      // Look at the content of the vue slots.
      for ( let item of this.$slots.default ){
        // if data is defined..
        if( item.data != null){
          // and if attrs is defined..
          if(item.data.attrs != null){
            // and if the value attr matches the new val..
            if( item.data.attrs.value == val ){
              txt = item.children[0].text
            }
          }
        }
      }
      return txt
    },
  },
  watch : {
    showOn(val){
      if(val)
        this.open()
    }
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .lexi.drop-down
    .trigger(v-on:mousedown="open" ref="trigger" v-if="!hideTrigger" )
      .txt {{ getItemText(value) }}
    .drop-content(v-if="isOpen" ref="content")
      slot
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
      .label, .option          {border-bottom: solid #F1EFEF 1px; padding: 4px 16px 4px 22px;
        .checkmark             {display:block; position:absolute; left:6px; top:3px;  }
      }
      .label                   {color:#B5BFC7; font-size:12px; padding-left:14px; width:100%; }
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
