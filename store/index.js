import Vue from 'vue'
export const state = () => ({
  online: false,
  drawer: false,
  grades: [],
  code: '',
})

export const mutations = {
  setOnline(state, status) {
    state.online = status
  },
  setDrawer(state, status) {
    state.drawer = status
  },

  setGrades(state, data) {
    state.grades = data
  },
}

export const actions = {
  async loadGrades(store) {
    // 1. โหลดข้อมูลเก่าจาก localStorage ก่อน
    let grades = JSON.parse(window.localStorage.getItem('grades') || '[]')
    // 2 commit
    store.commit('setGrades', grades)

    // 3. ยิง api เพื่อข้อมูลใหม่จาก server
    if (this.code) {
      let res = await Vue.axios.post('/student/code/', {
        params: {
          code: this.code,
        },
      })
      // 4. commit
      store.commit('setGrades', res.data)
      // 5. เก็บลง localStorage
      window.localStorage.setItem('grades', JSON.stringify(res.data))
    }
  },
}
