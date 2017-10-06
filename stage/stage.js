require('../lib/assets/core-styles/scss/_base.scss')
require("script-loader!../node_modules/shadow-icons/rel/app.js")


import {dropdown, checkbox, saveSection, errors, back, lifecycler, radio, gravatar} from '../src/main'
import Vue from 'vue'
Vue.config.productionTip = false;

let template = `
<div>
  <gravatar email="contact@parslee.com" :round="true" :size="50" />
  <errors :errors="errors" />
  <back @back="onBackClick" />
  <dropdown v-model="dropdown1" @changed="onDropDownChange">
    <div class="label">Send emails:</div>
    <div v-if="showIt" class="option" value="email"> Send email to :</div>
    <div class="option" value="text"> Send text to :</div>
    <div class="option" value="email-collaborators"> Send email to all collaborators</div>
  </dropdown>
  <br/>
  <br/>
  <a @click="$refs.dd2.open()">hidden dropdown trigger</a>
  <dropdown v-model="dropdown2" :hide-trigger="true" ref="dd2" :y-mod="-20" :x-mod="10">
    <div class="option" value="a">Option 1</div>
    <div class="option" value="b">Option 2</div>
  </dropdown>
  <br/>
  <br/>

  <checkbox :content-is-before="false" v-model="checkbox1" @changed="onCheckboxCheck" >
    <div class="label">I am a checkbox</div>
  </checkbox>
  <br/>
  <br/>
  <br/>

  <radio v-model="friends" val="blue" >blue</radio>
  <radio v-model="friends" val="red" >red</radio>
  <radio v-model="friends" val="green" >green</radio>
  <radio v-model="friends" val="black">black</radio>
  <br/>

  <radio v-model="friends2" val="blue" @changed="onRadioChange">blue</radio>
  <radio v-model="friends2" val="red" >red</radio>
  <radio v-model="friends2" val="green" >green</radio>
  <radio v-model="friends2" val="black">black</radio>

  <save-section @save="onSave" @cancel="onCancel" saveText="Submit" cancelText="Nevermind" :showCancel="true" :cycling="cycling"/>

</div>
`
window.tempObj = {
  dropdown1 : 'text',
  dropdown2 : 'a',
  showD2    : false,
  checkbox1 : true,
  errors    : null,
  showIt    : false,
  cycling   : false,
  friends   : "blue",
  friends2  : "black",
}

new Vue({
  el       : '#app',
  template : template,
  components:{checkbox, dropdown, saveSection, errors, back, lifecycler, radio, gravatar},
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
    },
    onBackClick(){
      console.log( "back button clicked" )
    },
    onRadioChange(val){
      console.log( `radio has changed to ${val}` )
    }
  }
})
