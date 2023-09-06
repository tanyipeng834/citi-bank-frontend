
<template>
    <div class="flex-grow min-h-screen">
        <input type ="file" name ="fileInput" @change="handleFileChange">
        {{ message }}
       
        {{ accessKey }}
      
        {{ secretKey }}
        

        <button @click="uploadFile">Upload File</button>
        
    </div>
    
</template>

<script setup>
    import AWS from 'aws-sdk';
    import { ref } from 'vue';

    const file = ref(null);
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
      alert("Training materials uploaded successfully.");
    } catch (error) {
      console.error(error);
      // Error uploading file
      alert("Training materials uploaded unsuccessfully.");
    }
  };

  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const uploadedFile = e.target.files[0];
    // Changing file state
   file.value= uploadedFile;
   
   
  };
    
    
</script>









