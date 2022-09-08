<template>
<h1>Jobs</h1>

<div v-for="(job,index) in jobs" class="job" :key="index">
    <!-- <router-link :to="{path:`/jobs/${job.id}`" class="job-detail"> -->
    <router-link :to="{name:'JobDetails',params: {id:job.id, details: job.details}}" class="job-detail">
        {{job.title}}
    </router-link>
</div>
</template>

<script>
export default {
    name: 'JobsPage',
    data() {
        return {
            jobs: [{
                    title: 'Ux Designer',
                    id: 1,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto quasi necessitatibus, sed voluptatum nesciunt aut id voluptatem voluptas eligendi minima maiores eum?'
                },
                {
                    title: 'Web Developer',
                    id: 2,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto quasi necessitatibus, sed voluptatum nesciunt aut id voluptatem voluptas eligendi minima maiores eum?'
                },
                {
                    title: 'Node Developer',
                    id: 3,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto quasi necessitatibus, sed voluptatum nesciunt aut id voluptatem voluptas eligendi minima maiores eum?'
                }
            ]
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
