<template>
  <section>
    <div class="iddr">
      <b-row><router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/ebbj-sh54.json', hdr: msg} }"><h1>{{ msg }}</h1></router-link></b-row>
      <b-row><h2>Regions</h2></b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/ksf9-pem2.json', hdr: 'Impaired Driving Death Rate - Region 1 - Boston'} }">
          Impaired Driving Death Rate - Region 1 - Boston
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/bptw-uw4i.json', hdr: 'Impaired Driving Death Rate - Region 2 - New York'} }">
          Impaired Driving Death Rate - Region 2 - New York
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/pvxp-wfpg.json', hdr: 'Impaired Driving Death Rate - Region 3 - Philadelphia'} }">
          Impaired Driving Death Rate - Region 3 - Philadelphia
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/28km-nz6e.json', hdr: 'Impaired Driving Death Rate - Region 4 - Atlanta'} }">
          Impaired Driving Death Rate - Region 4 - Atlanta
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/68ej-h5ze.json', hdr: 'Impaired Driving Death Rate - Region 5 - Chicago'} }">
          Impaired Driving Death Rate - Region 5 - Chicago
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/k9ai-xgx2.json', hdr: 'Impaired Driving Death Rate - Region 6 - Dallas'} }">
          Impaired Driving Death Rate - Region 6 - Dallas
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/ea3z-m7eh.json', hdr: 'Impaired Driving Death Rate - Region 7 - Kansas City'} }">
          Impaired Driving Death Rate - Region 7 - Kansas City
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/3bjr-fr6m.json', hdr: 'Impaired Driving Death Rate - Region 8 - Denver'} }">
          Impaired Driving Death Rate - Region 8 - Denver
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/3se3-rwj2.json', hdr: 'Impaired Driving Death Rate - Region 9 - San Francisco'} }">
          Impaired Driving Death Rate - Region 9 - San Francisco
        </router-link>
      </b-row>
      <b-row>
        <router-link :to="{name: 'Results', params: {url: 'https://data.cdc.gov/resource/x9gq-59r3.json', hdr: 'Impaired Driving Death Rate - Region 10 - Seattle'} }">
          Impaired Driving Death Rate - Region 10 - Seattle
        </router-link>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "IDDR",
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
