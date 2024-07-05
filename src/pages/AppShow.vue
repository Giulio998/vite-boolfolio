<template>

    <h1>Show</h1>
    <p>{{ project }}</p>

</template>

<script>
export default {
    props: ['project'],

    mounted() {
    console.log(this.project);
}
}




</script>
