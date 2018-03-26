require('../lib/assets/core-styles/scss/_base.scss')
require("script-loader!../node_modules/shadow-icons/rel/app.js")


import {dropdown, checkbox, saveSection, errors, x, lifecycler, radio, gravatar, add} from '../src/main'
import Vue from 'vue'
Vue.config.productionTip = false;

let template = `
<div>
  <errors :errors="errors" />
  <add @click="onAddClick"/>
  <br/>
  <add @click="onAddClick" class="small blue"/>
  <br/>
  <add @click="onAddClick">Hello</add>
  <br/>
  <add @click="onAddClick" class="circle">Add new item</add>
  <br/>
  <add @click="onAddClick" class="circle white">Add new item</add>
  <br/>
  <add @click="onAddClick" class="hex">Add new item</add>
  <br/>
  <add @click="onAddClick" class="hex medium">Add new item</add>
  <br/>
  <add @click="onAddClick" class="circle white small blue">Add new item</add>
  <br/>
  <x @click="onBackClick" />
  <br/>
  <x @click="onBackClick" size="12" line-width="2" hover="#009AD2"/>
  <br/>
  <x @click="onBackClick" size="12" line-width="1" color='#CC0087'/>
  <br/>
  <x @click="onBackClick">Cancel</x>
  <br/>
  <x @click="onBackClick" class="stretch">Back</x>
  <gravatar email="contact@parslee.com" :round="true" :size="50" />
  <dropdown v-model="dropdown1" @change="onDropDownChange">
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

  <checkbox :content-is-before="false" v-model="checkbox1" @change="onCheckboxCheck" >
    <div class="label">I am a checkbox</div>
  </checkbox>
  <checkbox :content-is-before="false" v-model="checkbox2" @change="onCheckboxCheck" >
    <div class="label">I am a checkbox with a really long label for testing wrapping to a second line</div>
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
  <radio v-model="friends2" val="green" >green has a really long label that may get in the way</radio>
  <radio v-model="friends2" val="black">black</radio>

  <save-section @save="onSave" @cancel="onCancel" saveText="Submit" cancelText="Nevermind" :showCancel="true" :cycling="cycling"/>
</div>
`
window.tempObj = {
  dropdown1 : 'text',
  dropdown2 : 'a',
  showD2    : false,
  checkbox1 : true,
  checkbox2 : true,
  errors    : null,
  showIt    : false,
  cycling   : false,
  friends   : "blue",
  friends2  : "black",
}

new Vue({
  el       : '#app',
  template : template,
  components:{checkbox, dropdown, saveSection, errors, x, lifecycler, radio, gravatar, add},
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
      console.log( "x button clicked" )
    },
    onRadioChange(val){
      console.log( `radio has changed to ${val}` )
    },
    onAddClick(){
      console.log( "Add button clicked" )
    }
  }
})
