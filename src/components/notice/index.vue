<template>
  <div v-if="isShow">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.hide()
      }, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    }
  }
}
</script>

<style>

</style>