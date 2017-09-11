require('../lib/assets/core-styles/scss/_base.scss')

import {dropdown, checkbox, saveSection, errors} from '../src/main'
import Vue from 'vue'

Vue.config.productionTip = false;

let template = `
<div>
  <dropdown v-model="myVal" @changed="onDropDownChange">
    <div class="label">Send emails:</div>
    <div v-if="showIt" class="option" value="email"> Send email to :</div>
    <div class="option" value="text"> Send text to :</div>
    <div class="option" value="email-collaborators"> Send email to all collaborators</div>
  </dropdown>
</div>
`
window.tempObj = {
  myVal:'text',
  errors:null,
  showIt:false
}

new Vue({
  el       : '#app',
  template : template,
  components:{checkbox, dropdown, saveSection, errors},
  data(){
    return window.tempObj
  },
  methods:{
    // Dropdown change handler:
    onDropDownChange(newVal) {
      console.log( `dropdown changed to : ${newVal}` )
    },
    // Save handler:
    onSave() {
      console.log( "Save it!" )
      this.errors = null
    },
    // Cancel Handler, add an error:
    onCancel() {
      console.log( "Cancel it!" )
      this.errors = "Test Error"
    },
    onCheckboxCheck(newVal) {
      console.log( `Checkbox value is now : ${newVal}` )
    }
  }
})
