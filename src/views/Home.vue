<template>
  <div class="home">
    <Header msg="Motor Vehicle Statistics" />
    <div class="main-section">
      <HelloWorld msg="The Main Page" />
    </div>

    <Footer msg="Data retrieved from the CDC" />
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
