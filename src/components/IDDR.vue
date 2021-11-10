<template>
  <section>
    <div class="iddr">
      <h1>{{ msg }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "IDDR",
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
