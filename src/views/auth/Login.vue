<template lang="pug">
  #login.hero.is-fullheight
      .hero-body
        .container
          .columns.is-centered.is-4-desktop.is-3-widescreen
            .box
              //- h2.title Iniciar Sessão
              form(@submit.prevent="login")
                .field
                  label.label Email
                  .control.has-icons-left
                    input(type="text" v-model="user.email"  class="input" placeholder="Ex. teste@gmail.com" autofocus required )
                    span.icon.is-small.is-left
                      font-awesome-icon(icon="envelope")
                .field
                  label.label Senha
                  .control.has-icons-left
                    input(type="password" v-model="user.password"  class="input" placeholder="************" required )
                    span.icon.is-small.is-left
                      font-awesome-icon(icon="lock")
                .field
                  button(type="submit" class="button is-success is-fullwidth")  Entrar
                 
                


</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      user: {}
    }
  },
  methods: {
    login() {
      this.$store.dispatch('doLogin', this.user)
        .then(response => {
          this.$router.push({ name: response.path })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>