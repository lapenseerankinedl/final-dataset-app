<template>
  <section>
    <div class="footer">
      <h1>{{ msg }}</h1>
      <a href="https://data.cdc.gov/browse?category=Injury+%26+Violence&limitTo=datasets&page=1" target="_blank">CDC</a>
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
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 10px;
  bottom: 0;
  margin-bottom: 0px;
  background: #ececec;
  font-size: 20px;
}
.footer h1 {
  font-size: 20px;
}
</style>
