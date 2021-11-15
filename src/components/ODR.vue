<template>
  <section>
    <div class="odr">
      <router-link to="/todr"><h1>{{ msg }}</h1></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ODR",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 22px;
}
</style>
