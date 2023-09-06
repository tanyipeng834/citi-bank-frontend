import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFileUploadStore = defineStore('fileUpload', () => {
  const isSubmit = ref(false);
  
  return { 
    isSubmit 
  };
})
