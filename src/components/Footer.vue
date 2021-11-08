<template>
  <section>
    <div class="footer">
      <h1>{{ msg }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.footer {
  position: fixed;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 10px;
  bottom: 10px;
  margin-bottom: 0px;
  background: #ececec;
}
</style>