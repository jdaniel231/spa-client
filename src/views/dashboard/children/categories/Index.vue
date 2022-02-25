<template lang="pug">
  #CategoriesIndex 
    .buttons.is-right
      router-link.button.is-link(:to="{name: 'new_category_path'}")
        span
        font-awesome-icon(icon="plus")


    .columns.is-multiline
      .column.is-4(v-for="category in categories" :key="category.id")
        router-link(:to="{ name: 'category_path', params: { id: category.id } }")
          .notification
            CategoryComponent(:category="category")
    
</template>

<script>
  import { mapState } from 'vuex'
  import CategoryComponent from '@/components/categories/CategoryComponent'

export default {
  name: 'CategoriesIndex',
  components: {
      CategoryComponent
    },

  computed: mapState({
      categories: state => state.categories
    }),
  mounted() {
      this.$store.dispatch('fetchCategories')
    }
}
</script>