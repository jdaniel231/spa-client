<template lang="pug">
#categorieNew 
  form(@submit.prevent="newCategory")
    .columns
      .column.is-half.is-offset-one-quarter
        h3.title.is-uppercase Registrar nova categoria
        .field
          .label Nome
          .control
            input.input(v-model="category.name" placeholder="Digite o nome da categoria" autofocus required)
        .field
          .label Descrição
          .control
            textarea.textarea(v-model="category.description" placeholder="Insira a descrição da categoria")
    
    .columns.is-multiline
      .column.is-12(v-for="(movie, index) in category.movies_attributes")
        .card
          .card-header
            .card-header-title.is-uppercase Filme
            .card-header-icon
              span.icon(@click="deleteMovieForm(index)")
                font-awesome-icon(icon="times")
          .card-content
            .columns
              .column
                .field
                  .label Nome
                  .control
                    input.input(v-model="movie.name" placeholder="Digite o nome" )
                .field
                  .label Avaliação
                    input.input( type="number" v-model="movie.year" placeholder="Digite o ano") 
              .column
                .field
                  .label Descrição
                  .control
                    textarea.textarea(v-model="movie.description" placeholder="Digite a descrição")

    .buttons
      button.button.is-success
        span.icon
          font-awesome-icon(icon="save")
        span Salvar
      button.button.is-link(@click.prevent="addMovieForm" style="margin-left: auto;")
        span.icon
          font-awesome-icon(icon="plus")
        span Add Filme
</template>

<script>
export default {
  name: 'categoriesNes',
  data() {
    return {
      category: {
        movies_attributes: []
      }
    }
  },

  methods: {
    newCategory() {
      this.$store.dispatch('postCategory', this.category)
        .then(response => {
          this.$router.push({ name: 'category_path', params: { id: response.data.id }})
        })
    },

   addMovieForm() {
        this.category.movies_attributes.push(
          { name: '', description: '', year: 2022, ranking: 3 }
        )
      },
    deleteMovieForm(index) {
      this.category.movies_attributes.splice(index, 1)
    }
  }
}
</script>