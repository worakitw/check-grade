<template>

  <v-layout row>
    <v-flex xs12>
      <v-card>
        <!-- <v-toolbar color="teal" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar> -->
        <v-list two-line subheader>
          <v-subheader>
            <h3>{{name}}</h3>
          </v-subheader>
          <v-list-tile-action>
            <v-radio-group v-model="semes">
              <v-radio v-for="(n,i) in semeses" :key="i" :label="`ภาคเรียน ${n.semes}`" :value="n.semes" />
            </v-radio-group>
          </v-list-tile-action>
          <v-list-tile v-for="(gr,i) in gradesList" :key="i" avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{gr.semes}} {{gr.tcode}} {{gr.tsubject}}</v-list-tile-title>
              <v-list-tile-title>
                <span class="text-primary">หน่วยกิต {{gr.credit}} เกรด {{gr.level}}</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Show your status</v-list-tile-title>
              <v-list-tile-sub-title>Your status is visible to everyone</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile> -->
        </v-list>
        <v-divider></v-divider>

      </v-card>
    </v-flex>
  </v-layout>

</template>
<script>
  export default {
    data() {
      return {
        name: '',
        grades: [],
        semeses: [],
        semes: '',
      }
    },
    computed: {
      gradesList() {
        return this.grades.filter(gr => gr.semes === this.semes)
      }
    },
    async created() {
      if (!this.$store.state.code) {
        this.$router.replace('/')
        return
      }
      this.getSemes()
      this.doGrade()
    },
    methods: {
      async doGrade() {
        this.grades = this.$store.state.grades
        this.name = this.$store.state.grades[0].name
        // const params = {
        //   code: this.code
        // }
        // let res = await this.$http.get('/student/code', { 
        //   params
        //   // params: {
        //   // code: this.code,
        //   // }
        // })
        // if (res.data.ok) {
        //   // SAVE สำเร็จ
        //   console.log('save สำเร็จนะ')
        //   this.grades = res.data.grades
        // } else {
        //   // SAVE ไม่เสร็จ
        //   console.log('ไม่สำเร็จนะ')
        //   return
        // }
      },
      async getSemes() {
        const params = {
          code: this.code
        }
        let res = await this.$http.get('/student/semes/')
        if (res.data.ok) {
          // SAVE สำเร็จ
          // console.log('save สำเร็จนะ')
          this.semeses = res.data.semeses
        } else {
          // SAVE ไม่เสร็จ
          // console.log('ไม่สำเร็จนะ')
          return
        }
      }
    }

  }
</script>