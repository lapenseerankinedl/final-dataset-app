<template>
  <b-container class="home">
    <Header msg="Header" />
    <b-row>
      <b-col class="comp-head">
        <ODR msg="Total Occupant Death Rate" />
      </b-col>
      <b-col class="comp-head">
        <IDDR msg="Impaired Driving Death Rate" />
      </b-col>
      <b-col class="comp-head">
        <TPSB msg="Total Passenger Seat Belts" />
      </b-col>
    </b-row>
    <Footer msg="Footer" />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ODR from "@/components/ODR.vue";
import IDDR from "@/components/IDDR.vue";
import TPSB from "@/components/TPSB.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    ODR,
    IDDR,
    TPSB,
  },
};
</script>

<style scoped></style>
