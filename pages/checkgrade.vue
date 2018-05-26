<template>

     <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <!-- <v-toolbar color="teal" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar> -->
        <v-list two-line subheader>
          <v-subheader><h3>{{name}}</h3></v-subheader>
          <v-list-tile v-for="(st,i) in students" :key="i" avatar>
            <v-list-tile-content >
              <v-list-tile-title>{{st.tcode}} {{st.tsubject}}</v-list-tile-title>
              <v-list-tile-title>
                <span class="text-primary">หน่วยกิต {{st.credit}} เกรด {{st.level}}</span>
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
    data () {
      return {
        name: 'Somsak',
        students: [
          {tcode: '2105-4221',tsubject: 'ภาษาไทย',credit: '3', level: '4'},
          {tcode: '2105-4222',tsubject: 'ภาษาไทย',credit: '3', level: '4'},
          {tcode: '2105-4223',tsubject: 'ภาษาไทย',credit: '3', level: '4'},
          {tcode: '2105-4224',tsubject: 'ภาษาไทย',credit: '3', level: '4'},
        ]
      }
    }
  }
</script>