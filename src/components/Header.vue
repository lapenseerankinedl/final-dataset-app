<template>
  <section>
    <div class="header">
      <router-link to="/"
        ><h1 data-test-id="Main-Page-link">{{ msg }}</h1></router-link
      >
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

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  left: 0;
  right: 0;
  justify-content: space-evenly;
  padding: 10px 10px;
  margin: 0 auto;
  background: #ececec;
}
.header h1 {
  font-size: 40px;
}
a {
  text-decoration: none;
}
</style>
