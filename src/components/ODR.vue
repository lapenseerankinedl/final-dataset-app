<template>
  <section>
    <div class="odr">
      <h1>{{ msg }}</h1>
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
