<template>
    <div>
        <Header msg="Motor Vehicle Statistics" />
        <b-container>
            <h2>Total Occupant Death Rate - 2012</h2>
            <b-table striped hover :items="items"></b-table>
        </b-container>
        <Footer msg="Data retrieved from the CDC" />
    </div>
</template>

<script>
import axios from 'axios';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "todr",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            items: []
        }
    },
    created() {
        axios.get("https://data.cdc.gov/resource/rqg5-mkef.json")
        .then(res => {
            this.items = res.data;
        })
        .catch(error => {
            console.error(error);
        })
    }
}
</script>

<style scoped="scss">

</style>
