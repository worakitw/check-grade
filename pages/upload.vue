<template>
    <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-md3>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Upload File Grade</v-toolbar-title>
          </v-toolbar>
          
          <v-card-text>
            <span class="title"></span>
              <img src="/img/file-upload.jpg" height="150" />
              <img :src="textUrl" height="150" v-if="textUrl"/>
              <v-text-field label="เลือกไฟล์  grade.txt" 
              @click='pickFile' v-model='textName' prepend-icon='attach_file'></v-text-field>
                <input
                  type="file"
                  style="display: none"
                  ref="image1"
                  accept="text/*"
                  @change="onFilePicked"
                >
              



            <!-- <v-text-field
              v-model="user"
              :rules="[() => user.length > 0 || 'This field is required']"
              label="user name"
              required
            ></v-text-field> -->

            <!-- <v-text-field
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
            ></v-text-field> -->
            <!-- <small>*ต้องมีค่า ห้ามเว้นว่าง</small> -->
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
      dialog: false,
      textName: '',
      textUrl: '',
      textFile: '',
      user: '',
      password: '',
      password2: '',

    }
  },
  methods: {
    pickFile () {
        this.$refs.image1.click ()
    },
		
		onFilePicked (e) {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.textName = files[0].name
				if(this.textName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.textUrl = fr.result
					this.textFile = files[0] // this is an text file that can be sent to server...
				})
			} else {
				this.textName = ''
				this.textFile = ''
				this.textUrl = ''
			}
		},

    


  }, //method
 

}
</script>
