<template>
  <div>
    about {{upperName}}<br>
    age <b>{{age}}</b><br>
    <input type="text" :value="name"><br>
    <input type="text" v-model="name"><br>
    <input type="button" @click="doSave" value="Click">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'worakit',
      age: 54,
    }
  },
  computed:{
    upperName() {
      return this.name.toUpperCase()
    },
  },
  methods: {
    doSave() {
      this.name += '*'
    },
  },

}
</script>
