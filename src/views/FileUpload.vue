<template>
    <div class="flex-grow">
        <div class="bg-blue-25 py-4 px-14 flex items-center">
            <img class="w-5 mr-6" src="@/assets/icons/information.png" alt="">
            <p class="text-base font-normal text-blue">Upload company's financial statement to get insights on the real-time credit default risk assessment</p>
        </div>
        <div class="mx-auto border-2 border-blue md:w-2/3 w-4/5 my-16 rounded-lg md:p-14 p-8">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-blue border-dashed rounded-lg cursor-pointer bg-gray-25 hover:bg-gray-50">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-blue dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-blue">
                        <span class="font-semibold">Click to upload</span> 
                    </p>
                    <p class="text-xs text-blue">
                        CSV, XLSX
                    </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange" accept=".csv, .xlsx"/>
                <p class="text-sm text-blue" v-if="selectedFileName">
                    <em>{{ selectedFileName }}</em>
                </p>
            </label>
            <div class="mt-4">
                <button class="rounded-full bg-blue text-white font-bold text-base py-2 px-8 flex justify-center items-center mx-auto" @click="uploadFile">
                    <div v-show="isUpload" role="status">
                        <svg aria-hidden="true" class="inline w-4 h-4 mr-2 text-blue-50 animate-spin dark:text-blue-50 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>
                    <p>Upload File</p>
                </button>
            </div>
        </div>
        <SubmitModal v-if="isProcess"/>
    </div>
</template>

<script setup>
    import AWS from 'aws-sdk';
    import { ref } from 'vue';
    import { storeToRefs } from "pinia";
    import { useFileUploadStore } from "@/stores/useFileUploadStore";
    import SubmitModal from "@/components/SubmitModal.vue";

    const selectedFileName = ref("");
    const file = ref(null);
    const isUpload = ref(false);
    const isProcess = ref(false);
    const store = useFileUploadStore();
    const {
        isSubmit,
    } = storeToRefs(store);

    const accessKey = import.meta.env.VITE_AWS_ACCESS_KEY;
    const secretKey = import.meta.env.VITE_AWS_SECRET_KEY;
   
    const uploadFile = async () => {
        isUpload.value = true;
        // S3 Bucket Name
        const S3_BUCKET = "citi-files";

        // S3 Region
        const REGION = "us-east-1";

        // S3 Credentials
        AWS.config.update({
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
        });
        const s3 = new AWS.S3({
            params: { Bucket: S3_BUCKET },
            region: REGION,
        });

        // Files Parameters
        const params = {
        Bucket: S3_BUCKET,
        Key: file.value.name,
        Body: file.value,
        };

        // Uploading file to s3
        try {
            const data = await s3.upload(params).promise();
            // console.log(data);
            // console.log(file);
            // File successfully uploaded
            isUpload.value = false;
            isProcess.value = true;
            isSubmit.value = true;
        //   alert("Training materials uploaded successfully.");
        } catch (error) {
            console.error(error);
        // Error uploading file
        //   alert("Training materials uploaded unsuccessfully.");
        }
    };

  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const uploadedFile = e.target.files[0];
    // Changing file state
    file.value= uploadedFile;
    selectedFileName.value =uploadedFile.name;
  };
</script>