<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    }
});

const emits = defineEmits(['select-card']);

const selectCard = () => {
    emits("select-card", {
        id: props.data.id,
    });
};
</script>

<template>
    <div class="grid grid-cols-3 bg-gray-25 rounded-sm cursor-pointer py-2 px-7 items-center text-base text-blue" @click="selectCard">
        <div class="col-span-1 font-normal text-base">
            {{ data.id }}
        </div>
        <div class="col-span-1 font-normal text-base">
            {{ data.name }}
        </div>
        <div class="col-span-1 font-normal text-base">
            {{ data.percentage }}%
        </div>
    </div>
</template>