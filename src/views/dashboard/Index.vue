<template lang="pug">
  #DashboardIndex 
    Navbar
    Sidebar

</template>

<script>
import Navbar from './partials/navbar/Index.vue'
import Sidebar from './partials/sidebar/Index.vue'

export default {
  name: 'DashboardIndex',

  components: { Navbar, Sidebar }
}
</script>