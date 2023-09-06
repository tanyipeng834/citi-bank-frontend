<script setup>
</script>

<template>
    <div>
        <div class="flex justify-center items-center mx-10">
            <img src="/citiredesign.svg" alt="">
            <div class="flex ml-auto justify-center items-center">
                <img class="w-10" src="@/assets/avatar.svg" alt="">
                <div class="text-blue ml-2.5">
                    <p class="font-semibold text-base">Citi</p>
                    <p class="font-medium text-xs">Credit Analyst</p>
                </div>
                <img class="ml-2.5 h-4" src="@/assets/icons/arrow.svg" alt="">
            </div>
        </div>
        <div class="bg-blue p-4 flex px-14 text-white text-base">
            <router-link 
                to="/"
                class="mr-14"
                :class="$route.name === 'home' ? 'font-bold' : ''"
            >
                File Upload
            </router-link>
            <router-link
                to="/riskAssessment"
                :class="$route.name === 'riskAssessment' ? 'font-bold' : ''"
            >
                Risk Assessment
            </router-link>
        </div>
        <router-view/>
    </div>
</template>