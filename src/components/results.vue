<template>
    <div>
        <Header msg="Motor Vehicle Statistics" />
        <b-container>
            <h2>{{ hdr }}</h2>
            <b-row>
                <b-input-group>
                    <b-col cols="11">
                        <b-input v-model="filter" placeholder="Search" ></b-input>
                    </b-col>
                    <b-col cols="1">
                        <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                        </b-input-group-append>
                    </b-col>
                </b-input-group>
            </b-row>
            <b-table striped hover :items="items" :filter="filter"></b-table>
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
            filter: '',
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
    },
}
</script>

<style scoped="scss">
</style>
