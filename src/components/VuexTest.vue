<template>
  <div>
    <h1>{{$s.state.count}}</h1>
    <h1>{{$s.getters.score}}</h1>
    <button @click="add">点击</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$s.commit('add', 1);
    },
    asyncAdd() {
      this.$s.dispatch('asyncAdd');
    }
  }
}
</script>

<style>

</style>