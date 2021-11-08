<template>
  <div class="home">
    <Header msg="Header" />
    <div class="main-section">
      <HelloWorld msg="The Main Page" />
    </div>

    <Footer msg="Footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Header,
    Footer,
  },
};
</script>
