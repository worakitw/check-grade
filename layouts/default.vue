<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app />
    <v-toolbar dark color="primary">
    <v-toolbar-side-icon @click="goindex"></v-toolbar-side-icon>
    
    <v-toolbar-title class="white--text">ChecK Grade</v-toolbar-title>
      
      <v-btn icon @click="gotoabout">
        <v-icon large color="yellow darken-2">assignment_ind</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed: {
    online: {
      get() {
        return this.$store.state.online
      },
      set(value) {
        this.$store.commit('setOnline', value)
      },
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },

  created() {
    this.$store.dispatch('loadStudents')
  }, // created

  mounted() {
    this.$store.commit('setOnline', window.navigator.onLine)
    window.addEventListener('offline', this.toggleNetworkStatus)
    window.addEventListener('online', this.toggleNetworkStatus)
  },

  beforeDestroyed() {
    window.removeEventListener('offline', this.toggleNetworkStatus)
    window.removeEventListener('online', this.toggleNetworkStatus)
  },

  methods: {
    toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    },
    gotoabout(){
      this.$router.push('/about')
    },
    goindex(){
      this.$router.push('/')
    }
  },
}
</script>
