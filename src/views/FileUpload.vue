<script setup>
import { ref } from 'vue';

const selectedFileName = ref("");

function handleFile(input) {
    const fileInput = input.target;
    if (fileInput.files.length > 0) {
        selectedFileName.value = fileInput.files[0].name;
    } else {
        selectedFileName.value = '';
    }
}

function uploadFile() {
    // TO-DO
}
</script>

<template>
    <div class="flex-grow min-h-screen">
        <div class="bg-blue-25 py-4 px-10 flex items-center">
            <img class="w-5 mr-6" src="@/assets/icons/information.png" alt="">
            <p class="text-base font-normal text-blue">Upload portfolio to get insights on the real-time risk assessment</p>
        </div>
        <div class="mx-auto border-2 border-blue w-2/3 my-16 rounded-lg p-14">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-blue border-dashed rounded-lg cursor-pointer bg-gray-25 hover:bg-gray-50">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-blue dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-blue">
                        <span class="font-semibold">Click to upload</span> 
                        or drag and drop
                    </p>
                    <p class="text-xs text-blue">
                        PDF, XLSX
                    </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="handleFile($event)" accept=".pdf, .xlsx"/>
                <p class="text-sm text-blue" v-if="selectedFileName">
                    <em>{{ selectedFileName }}</em>
                </p>
            </label>
            <div class="text-center mt-4">
                <button class="rounded-full bg-blue text-white font-bold text-base py-2 px-8" @click="uploadFile">
                    Upload File
                </button>
            </div>
        </div>
    </div>
</template>