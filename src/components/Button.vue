<template>
<div>
  <button class="btn-default">{{text}}</button>
</div>

</template>
<style>
.btn-default {
  background-color: #DF8D2C;
  color: white;
  width: 213px;
  border: none;
  text-transform: uppercase;
  font-size: 1em;
  height: 45px;
  cursor: pointer;
}
</style>
<script>
export default {
  props: ['text']
}
</script>