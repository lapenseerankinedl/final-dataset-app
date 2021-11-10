<template>
  <section>
    <div class="header">
      <h1>{{ msg }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 10px;
  margin: 0 auto;
  background: #ececec;
}
</style>
