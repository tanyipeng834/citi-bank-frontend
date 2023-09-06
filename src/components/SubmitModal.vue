<script setup>
    import { storeToRefs } from "pinia";
    import { useFileUploadStore } from "@/stores/useFileUploadStore";
    import { useRouter } from 'vue-router';

    const store = useFileUploadStore();
    const router = useRouter();
    
    const {
        isSubmit,
    } = storeToRefs(store);

    function routePage() {
        if (isSubmit) {
            router.push({name: 'portfolio'})
        }
        else {
            window.location.reload();
        }
    }
</script>

<template>
    <div>
        <div id="modal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm">
            <div class="bg-blue-25 shadow-lg rounded-lg p-6">
                <div class="flex items-center">
                    <p v-if="isSubmit" class="text-base font-semibold mb-2 text-blue">Training materials uploaded successfully</p>
                    <p v-else class="text-base font-semibold mb-2 text-blue">Training materials uploaded unsuccessfully</p>
                </div>
                <button id="closeModalBtn" class="mt-4 text-blue hover:font-bold hover:text-white hover:bg-blue border border-blue px-4 py-2 rounded ml-auto" @click="routePage">Close</button>
            </div>
        </div>
    </div>
</template>