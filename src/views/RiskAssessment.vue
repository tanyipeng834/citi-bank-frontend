<script setup>
import Card from "@/components/Card.vue";

// const insights = async () => {
//     try {
//         // TO-DO:
//         const insightResponse = await axios.get(`/insight`);
//         return insightResponse.data;
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }
// insights();

// const result = async () => {
//     try {
//         // TO-DO:
//         const resultResponse = await axios.get(`/result`);
//         return resultResponse.data;
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }
// result();

const selectCard = id => { 
    console.log(id);
}

const insights = ["Line 1", "Line 2"];
const result = [
    {
        id: 1,
        name: "Jason Christopher",
        percentage: 99.001,
    },
    {
        id: 2,
        name: "Low Xuanli",
        percentage: 99.999,
    }
]
</script>

<template>
    <div class="mx-14 my-7">
        <div class="bg-blue-25 py-4 px-7 rounded-lg">
           <p class="font-semibold text-blue text-18">Insights</p>
           <ul>
               <li v-for="(item, index) in insights" :key="index" class="font-normal text-blue text-base list-disc ml-6">
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
           <Card v-for="(item, index) in result" :key="index" :data="item" @select-card="selectCard" />
        </div>
    </div>
</template>