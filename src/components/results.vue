<template>
  <div>
    <Header msg="Motor Vehicle Statistics" />
    <b-container>
      <h2>{{ hdr }}</h2>
      <b-row>
        <b-input-group>
          <b-col cols="11">
            <b-input
              v-model="filter"
              placeholder="Search"
              data-test-id="Search-Bar"
            ></b-input>
          </b-col>
          <b-col cols="1">
            <b-input-group-append>
              <b-button
                :disabled="!filter"
                @click="filter = ''"
                data-test-id="Clear-Button"
                >Clear</b-button
              >
            </b-input-group-append>
          </b-col>
        </b-input-group>
      </b-row>
      <b-table
        striped
        hover
        :items="items"
        :filter="filter"
        data-test-id="Results-Table"
        class="results-table"
      ></b-table>
      <Footer msg="Data retrieved from the CDC" />
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Results",
  props: {
    url: String,
    hdr: String,
  },
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      filter: "",
      items: [],
    };
  },
  created() {
    axios
      .get(this.url)
      .then((res) => {
        this.items = res.data;

        for (var i = 0; i < this.items.length; i++) {
          Object.keys(this.items[i]).some((j) => {
            if (j.endsWith("2014")) {
              this.$delete(this.items[i], j);
            }
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped="scss">
.results-table {
  margin-bottom: 5em;  
}
</style>
