<template>
  <section>
    <div class="tpsb">
      <b-row
        ><router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/rqg5-mkef.json',
              hdr: msg,
            },
          }"
          ><h1 data-test-id="TPSB-Main-link">{{ msg }}</h1></router-link
        ></b-row
      >
      <b-row><h2>Regions</h2></b-row>
      <b-row data-test-id="TPSB-Boston-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/6tmq-h6uy.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 1 - Boston',
            },
          }"
        >
          % Wearing Seat Belts - Region 1 - Boston
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-New-York-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/hget-9fst.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 2 - New York',
            },
          }"
        >
          % Wearing Seat Belts - Region 2 - New York
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-Philadelphia-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/hauf-e9a4.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 3 - Philadelphia',
            },
          }"
        >
          % Wearing Seat Belts - Region 3 - Philadelphia
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-Atlanta-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/vqff-ff7g.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 4 - Atlanta',
            },
          }"
        >
          % Wearing Seat Belts - Region 4 - Atlanta
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-Chicago-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/26a7-nc4u.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 5 - Chicago',
            },
          }"
        >
          % Wearing Seat Belts - Region 5 - Chicago
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-Dallas-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/4r49-eadb.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 6 - Dallas',
            },
          }"
        >
          % Wearing Seat Belts - Region 6 - Dallas
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-Kansas-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/y8pa-p62q.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 7 - Kansas City',
            },
          }"
        >
          % Wearing Seat Belts - Region 7 - Kansas City
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-Denver-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/iz46-hpaa.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 8 - Denver',
            },
          }"
        >
          % Wearing Seat Belts - Region 8 - Denver
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-San-Francisco-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/fkfk-2j5x.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 9 - San Francisco',
            },
          }"
        >
          % Wearing Seat Belts - Region 9 - San Francisco
        </router-link>
      </b-row>
      <b-row data-test-id="TPSB-Seattle-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/msjj-a7q2.json',
              hdr: 'Percentage of Drivers and Front Seat Passengers Wearing Seat Belts - Region 10 - Seattle',
            },
          }"
        >
          % Wearing Seat Belts - Region 10 - Seattle
        </router-link>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "TPSB",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.75rem;
}
</style>
