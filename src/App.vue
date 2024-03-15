<template>
  <HorizontalNavbar/>
  <div class="pt-20">
    <Dashboard/>
  </div>
</template>

<script>
import HorizontalNavbar from './components/structure/pageElements/HorizontalNavbar.vue';
import Dashboard from './components/views/Dashboard.vue';

export default {
  name: 'App',
  components: {
    HorizontalNavbar,
    Dashboard,
  }
}
</script>

