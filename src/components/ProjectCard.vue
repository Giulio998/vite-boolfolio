<template>
  <div v-for="project in projects" :key="project.id" class="card p-4 my-4 d-flex flex-row justify-content-between">
      <div class="w-50">
          <h4 class="card-title">{{ project.title }}</h4>
          <h6>{{ project.slug }}</h6>
      </div>
     
  </div>
  </template>
  
  <script>
  export default { 
      props:{
          projects: {
              type: Array
          }
      }
  }
  </script>
  
  <style lang="scss" scoped>
  </style>