<template>
<v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-md3>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Login Student</v-toolbar-title>
          </v-toolbar>
          <v-card-media src="./img/student2.png" height="200px">
        </v-card-media>
     

            <v-text-field
              v-model="code"
              :rules="[() => code.length > 0 || 'This field is required']"
              label="รหัสนักศึกษา"
              required
            ></v-text-field> 

      
          <v-card-actions class="flex row justify-center" @click="doGrade">
            <v-btn color="success"  >
              <i class="material-icons">fingerprint</i>
              ดูผลการเรียน
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
 
</template>

<script>
export default {
  data(){
    return{
      code:'',
    }

  },
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
    },
    async doGrade(){
      let res=await this.$http.get('/student/code',{
        params: {code: this.code},
      }) 
       if (!res.data.ok) {
        // TODO: login ไม่สำเร็จ
        return
      }
      console.log('login สำเร็จ')
      // 1. จำ user/login
       window.localStorage.setItem('grades', JSON.stringify(res.data.grades))
      // 2. ไปหน้า home
      this.$router.push('/checkgrade')

    }

  }
};
</script>
