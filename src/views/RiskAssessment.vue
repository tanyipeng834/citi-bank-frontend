<script setup>
import Card from "@/components/Card.vue";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

const router = useRouter();
const insightData = ref("");
const resultData = ref("");


const insights = async () => {
    try {
        // TO-DO:
        const insightResponse = await axios.get(`http://localhost:8000/api/insight`);
        return insightResponse.data;
    }
    catch (error) {
        console.log(error.message);
    }
}
insightData.value = insights();

const result = async () => {
    try {
        // TO-DO:
        const resultResponse = await axios.get(`http://localhost:8000/api/result`);
        return resultResponse.data;
    }
    catch (error) {
        console.log(error.message);
    }
}
resultData.value = result();

const selectCard = prop => { 
    router.push({
        name: 'detailedResult',
        params: {
            id: prop.id,
        }
    });
}

// const insightData = ["Line 1", "Line 2"];
// const resultData = [
//     {
//         id: 1,
//         name: "Jason Christopher",
//         percentage: 99.001,
//     },
//     {
//         id: 2,
//         name: "Low Xuanli",
//         percentage: 99.999,
//     }
// ]
</script>

<template>
    <div class="mx-14 my-7">
        <div class="bg-blue-25 py-4 px-7 rounded-lg">
           <p class="font-semibold text-blue text-18">Insights</p>
           <ul>
               <li v-for="(item, index) in insightData" :key="index" class="font-normal text-blue text-base list-disc ml-6">
                    {{ item }}
               </li>
           </ul>
        </div>
        <div class="mt-7">
            <div class="grid grid-cols-3 bg-gray-50 rounded-lg py-2 px-7 items-center text-base text-blue text-md">
                <div class="col-span-1 font-medium text-sm">
                    ID
                </div>
                <div class="col-span-1 font-medium text-sm">
                    Name
                </div>
                <div class="col-span-1 font-medium text-sm">
                    Percentage of Credit Default
                </div>
            </div>
           <Card v-for="(item, index) in resultData" :key="index" :data="item" @select-card="selectCard" />
        </div>
    </div>
</template>