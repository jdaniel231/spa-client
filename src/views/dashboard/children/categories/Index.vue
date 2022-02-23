<template lang="pug">
  #CategoriesIndex 
    .columns.is-multiline
      .column.is-4(v-for="category in categories" :key="category.id")
        router-link(:to="{ name: 'category_path', params: { id: category.id } }")
          .notification
            h3.title {{ category.name }}
            h4.subtitle.has-text-grey-light {{ category.description }}
    
</template>

<script>
 import { mapState } from 'vuex'

export default {
  name: 'CategoriesIndex',

  computed: mapState({
      categories: state => state.categories
    }),
  mounted() {
      this.$store.dispatch('fetchCategories')
    }
}
</script>