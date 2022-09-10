<template>
<h1>Jobs</h1>

<div v-for="(job,index) in jobs" class="job" :key="index">
    <!-- <router-link :to="{path:`/jobs/${job.id}`" class="job-detail"> -->
    <router-link :to="{name:'JobDetails',params: {id:job.id}}" class="job-detail">
        {{job.title}}
    </router-link>
</div>
</template>

<script>
import {
    jobs
} from './jobs';
export default {
    name: 'JobsPage',
    data() {
        return {
            jobs: jobs
        }
    },
}
</script>

<style>
.job {
    padding: 20px;
    background-color: rgb(224, 224, 224);
    margin: 10px auto;
    font-size: 1.4em;
    width: 50%;
    cursor: pointer;
}

.job-detail {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: navy;
}

.job:hover {
    font-size: 1.45em;
}
</style>
