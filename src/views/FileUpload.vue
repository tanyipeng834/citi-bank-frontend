<template>
    <div class="flex-grow">
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
                    </p>
                    <p class="text-xs text-blue">
                        PDF, XLSX
                    </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange" accept=".pdf, .xlsx"/>
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
<<<<<<< HEAD
        <SubmitModal v-if="isUpload"/>
=======
        
>>>>>>> bbd694e558a8fb7880d2619d40e4333199b6c890
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
    const store = useFileUploadStore();
    const {
        isSubmit,
    } = storeToRefs(store);

    const accessKey = import.meta.env.VITE_AWS_ACCESS_KEY;
    const secretKey = import.meta.env.VITE_AWS_SECRET_KEY;
   
    const uploadFile = async () => {
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
      console.log(data);
      console.log(file);
      // File successfully uploaded
      isUpload.value = true;
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