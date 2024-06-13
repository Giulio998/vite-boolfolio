<script>
import router from '../router';


export default {
  components: {
  },
  data() {
    return {
      
    }
  },

  
}

</script>

<template>

  <header>
    <section class="bg-dark">
      
      <ul>
        <li>
          <RouterLink to="/" >Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/portfolio" >Portfolio</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" >Contact</RouterLink>
        </li>
      </ul>

      
    </section>
  </header>

</template>

<style>
li{
  color: white;
}
p{color: white;}

</style>