<template lang="pug">
  #DashboardIndex 
    Navbar
    section.section
      .columns
        .column.is-2
          Sidebar
        .column.is-10
          .content
            router-view

</template>

<script>
import Navbar from './partials/navbar/Index.vue'
import Sidebar from './partials/sidebar/Index.vue'

export default {
  name: 'DashboardIndex',

  components: { Navbar, Sidebar }
}
</script>