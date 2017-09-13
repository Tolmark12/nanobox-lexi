require('../lib/assets/core-styles/scss/_base.scss')

import {dropdown, checkbox, saveSection, errors} from '../src/main'
import Vue from 'vue'

Vue.config.productionTip = false;

let template = `
<div>
  <errors :errors="errors" />
  <dropdown v-model="dropDownTestVal" @changed="onDropDownChange">
    <div class="label">Send emails:</div>
    <div v-if="showIt" class="option" value="email"> Send email to :</div>
    <div class="option" value="text"> Send text to :</div>
    <div class="option" value="email-collaborators"> Send email to all collaborators</div>
  </dropdown>
  <checkbox label="I am a checkbox" label-is-after="true" is-checked="true" @changed="onCheckboxCheck" id="my id" />
  <save-section @save="onSave" @cancel="onCancel"/>
  <dropdown v-model="dropDownTestVal2" >
    <div class="label">Send emails:</div>
    <div v-if="showIt" class="option" value="email"> Send email to :</div>
    <div class="option" value="text"> Send text to :</div>
    <div class="option" value="email-collaborators"> Send email to all collaborators</div>
  </dropdown>
</div>
`
window.tempObj = {
  dropDownTestVal  : 'text',
  dropDownTestVal2 : 'text',
  errors           : null,
  showIt           : false
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
