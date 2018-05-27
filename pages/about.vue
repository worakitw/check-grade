<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile v-else :key="item.title" avatar @click="">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { header: 'สมาชิก' },
          { avatar: '/img/smith2.jpg', title: 'สมิทธิ์  สุขขี', subtitle: "<span class='text--primary'>วิทยาลัยเทคนิคฉะเชิงเทรา</span>" },
          { divider: true, inset: true },
          { avatar: '/img/worakit.jpg', title: 'วรกิจ  วิริยะเกษามงคล', subtitle: "<span class='text--primary'>วิทยาลัยเทคนิคชลบุรี</span>" },
          { divider: true, inset: true },
          { avatar: '/img/supreeya.jpg', 
            title: 'สุปรียา  รัตนวิทยาพันธุ์', 
            subtitle: "<span class='text--primary'>วิทยาลัยเทคนิคชลบุรี</span>" },
          { divider: true, inset: true },
          { avatar: '/img/wattana.jpg', 
            title: 'วัฒนา  พลวิชัย', 
            subtitle: "<span class='text--primary'>วิทยาลัยเทคนิคนครนายก</span>" },
          { divider: true, inset: true },
          { avatar: '/img/siriklanlaya.jpg', 
            title: 'ศิริกัลยา  คำนนท์', 
            subtitle: "<span class='text--primary'>วิทยาลัยเทคนิคนครนายก</span>" }
          
        ]
      }
    }
  }
</script>