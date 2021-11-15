<template>
    <div>
        <Header msg="Motor Vehicle Statistics" />
        <b-container>
            <h2>{{ hdr }}</h2>
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
    name: 'Results',
    props: {
        url: String,
        hdr: String
    },
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
        axios.get(this.url)
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
