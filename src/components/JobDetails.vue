<template>
<h1>Job Details</h1>
<h2>Job id : {{id}}</h2>
<h2>DETAILS</h2>
<h3>{{details}}</h3>
</template>

<script>
export default {
    name: 'JobDetails',
    data() {
        return {
            id: "",
            details: ""
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.details = this.$route.params.details;
    },
}
</script>

<style>   
</style>
