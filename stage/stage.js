require('../lib/assets/core-styles/scss/_base.scss')

import {dropdown, checkbox} from '../src/main'
import Vue from 'vue'

Vue.config.productionTip = false;

let template = `
<div>
  <dropdown slot="options" default="email">
    <div class="label">Send emails:</div>
      <div class="option" value="email"> Send email to :</div>
      <div class="option" value="text"> Send text to :</div>
      <div class="option" value="email-collaborators"> Send email to all collaborators</div>
  </dropdown>
  <checkbox label="I am a checkbox" label-is-after="true" is-checked="true" v-on:changed="" id="my id" />
</div>
`

new Vue({
  el       : '#app',
  template : template,
  components:{checkbox, dropdown}
})
