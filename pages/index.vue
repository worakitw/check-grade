<template>
<v-container fluid>
<v-layout row wrap>
      <v-flex xs12 >
    Hello world
    <div>
      <nuxt-link to="/about">about</nuxt-link>
    </div> 
    <div>
      <button @click="goToAbout">GO TO ABOUT</button>
    </div>
  </v-flex>
</v-layout>
</v-container>          
 
</template>

<script>
export default {
  methods:{
    goToAbout(){
      this.$router.push('/about')
      // this.$router.push({path:'/about'})
      this.$router.push('/about?id=1')
      // this.$router.push({path:'/about',query:{id:1}})
      // this.$router.replace('/about')
      // this.$router.replace({ path: '/about' })
      // this.$router.replace('/about?id=1')
      // this.$router.replace({ path: '/about', query: {id: 1} })
      // this.$router.go(-1)
    }
  }
};
</script>
