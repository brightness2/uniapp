import { defineStore } from 'pinia'
import { ref } from 'vue'

const initState = { tabbarIndex: 0 }

export const useCommonStore = defineStore(
  'common',
  () => {
    const commonData = ref({ ...initState })

    return {
      commonData,
    }
  },
  {
    persist: false,
  },
)
