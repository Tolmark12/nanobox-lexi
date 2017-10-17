<script type="text/babel">
export default {
  name: 'add',
  props:{
    txt:{default:null, type:String}
  }
}
</script>

<!--
  **** H T M L ****
-->

<template lang="pug">
  .add(@click="$emit('click')")
    .bg
      .plus
    .txt(v-if="!!$slots.default")
      slot
</template>

<!--
  ***** C S S *****
-->

<style lang="scss" scoped>
  @import "vars-utils";
  $blue : #11A7ED;
  .add               {display: inline-flex; align-items: center; cursor:pointer;
    .txt             {margin-left:6px; @include btn-style()}
    .bg              {position:relative; width:18px; height:18px;}
    .plus            {@include plus;
      .hexagon       {display: none; }
    }
    &:hover          {
      .txt           {color:$blue; }
      .plus          {
        &:after,
        &:before     {background: $blue}
      }
    }
    &.small        {
      .txt         {font-size:13px; }
      .bg          {width:22px; height:22px;
        .plus      {
          &:after  {width:12px; }
          &:before {height:12px;  }
        }
      }
    }
    &.blue           {
      .txt           {color:$blue;}
      .plus          {
        &:before,
        &:after      {background-color:$blue ;}
      }
    }
    &.hex            {
      .txt           {@include caps($blue, 14px); font-style: normal; margin-left:15px; }
      .plus          {
        &:before,
        &:after      {background: #23BAF3; }
        &:before     {height:28px;}
        &:after      {width:28px; }
      }
      .bg            {position: relative; width: 50px; height: 28.87px; background-color: white; margin: 14.43px 0;
        &:before,
        &:after      {content: ""; position: absolute; width: 0; border-left: 25px solid transparent; border-right: 25px solid transparent;}
        &:before     {bottom: 100%;border-bottom: 14.43px solid white;}
        &:after      {top: 100%; width: 0; border-top: 14.43px solid white;}
      }
      &:hover        {
        .txt         {color:#0070C2}
      }
    }
    &.circle         {
      .txt           {margin-left:10px; }
      .bg            {background: #11A7ED; width:28px; height:28px; border-radius: 50%;
        .plus        {
          &:after,
          &:before   {background: white; }
        }
      }
      &.white        {
        .bg          {background:white;
          .plus      {
            &:after,
            &:before {background: #11A7ED; }
          }
        }
      }
      &.small        {
        .bg          {width:22px; height:22px;}
      }
    }
  }
</style>
