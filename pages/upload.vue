<template>
    <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-md3>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>ลงทะเบียน</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span class="title"></span>
            <v-text-field
              v-model="user"
              :rules="[() => user.length > 0 || 'This field is required']"
              label="user name"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="[() => password.length > 0 || 'This field is required']"
              label="รหัสผ่าน"
              persistent-hint
              required
            ></v-text-field>
            <v-text-field
              v-model="password2"
              :rules="[() => password2.length > 0 || 'This field is required']"
              label="รหัสผ่านอีกครั้ง "
              persistent-hint
              required
            ></v-text-field>
            <small>*ต้องมีค่า ห้ามเว้นว่าง</small>
          </v-card-text>
          <v-card-actions class="flex row justify-center">
            <v-btn color="success" >
              <i class="material-icons">fingerprint</i>
              ลงทะเบียน
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      password: '',
      password2: '',
    }
  },
 

}
</script>
