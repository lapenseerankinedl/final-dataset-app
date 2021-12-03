<template>
  <section>
    <div class="odr">
      <b-row
        ><router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/rqg5-mkef.json',
              hdr: msg,
            },
          }"
          ><h1 data-test-id="ODR-Main-link">{{ msg }}</h1></router-link
        ></b-row
      >
      <b-row><h2>Regions</h2></b-row>
      <b-row data-test-id="ODR-Boston-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/an65-3p9b.json',
              hdr: 'Occupant Death Rate - Region 1 - Boston',
            },
          }"
        >
          Occupant Death Rate - Region 1 - Boston
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-New-York-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/fj6s-ssz6.json',
              hdr: 'Occupant Death Rate - Region 2 - New York',
            },
          }"
        >
          Occupant Death Rate - Region 2 - New York
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-Philadelphia-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/29ew-qk7z.json',
              hdr: 'Occupant Death Rate - Region 3 - Philadelphia',
            },
          }"
        >
          Occupant Death Rate - Region 3 - Philadelphia
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-Atlanta-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/rb93-4tgj.json',
              hdr: 'Occupant Death Rate - Region 4 - Atlanta',
            },
          }"
        >
          Occupant Death Rate - Region 4 - Atlanta
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-Chicago-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/6i2x-3kw3.json',
              hdr: 'Occupant Death Rate - Region 5 - Chicago',
            },
          }"
        >
          Occupant Death Rate - Region 5 - Chicago
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-Dallas-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/8ihh-n7ic.json',
              hdr: 'Occupant Death Rate - Region 6 - Dallas',
            },
          }"
        >
          Occupant Death Rate - Region 6 - Dallas
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-Kansas-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/u5yv-9uts.json',
              hdr: 'Occupant Death Rate - Region 7 - Kansas City',
            },
          }"
        >
          Occupant Death Rate - Region 7 - Kansas City
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-Denver-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/8i5t-42wz.json',
              hdr: 'Occupant Death Rate - Region 8 - Denver',
            },
          }"
        >
          Occupant Death Rate - Region 8 - Denver
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-San-Francisco-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/xsu4-4sk9.json',
              hdr: 'Occupant Death Rate - Region 9 - San Francisco',
            },
          }"
        >
          Occupant Death Rate - Region 9 - San Francisco
        </router-link>
      </b-row>
      <b-row data-test-id="ODR-Seattle-link">
        <router-link
          :to="{
            name: 'Results',
            params: {
              url: 'https://data.cdc.gov/resource/5nuu-6upy.json',
              hdr: 'Occupant Death Rate - Region 10 - Seattle',
            },
          }"
        >
          Occupant Death Rate - Region 10 - Seattle
        </router-link>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "ODR",
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
