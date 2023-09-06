<script setup>
import Navbar from '@/components/Navbar.vue'
import FileUpload from './FileUpload.vue';
const whyCiti = ['Our Story', 'Careers', 'Benefits and Services', 'Rewards', 'Citi Entertainment', 'Special Offers']
const wealthManagement = ['Citigold Private Client', 'Citigold', 'City Priority', 'City Private Bank']
const businessBanking = ['Small Business Accounts', 'Commercial Accounts']
const rates = ['Personal Banking', 'Credit Cards', 'Mortgage', 'Home Equity', 'Lending']
const helpSupport = ['Contact Us', 'Help & FAQs', 'Security Center']
</script>

<template>
  <div class="min-h-screen">
    <Navbar/>
 
    <footer class="bg-black text-white text-sm pt-9 pb-4">
      <div class="grid md:grid-cols-5 grid-cols-9 gap-4 lg:px-28 px-6">
        <div class="md:col-span-1 col-span-3">
          <p class="font-bold mb-2">Why Citi</p>
          <p class="font-normal" v-for="(item, index) in whyCiti" :key="index">{{item}}</p>
        </div>
        <div class="md:col-span-1 col-span-3">
          <p class="font-bold mb-2">Wealth Management</p>
          <p class="font-normal" v-for="(item, index) in wealthManagement" :key="index">{{item}}</p>
        </div>
        <div class="md:col-span-1 col-span-3">
          <p class="font-bold mb-2">Business Banking</p>
          <p class="font-normal" v-for="(item, index) in businessBanking" :key="index">{{item}}</p>
        </div>
        <div class="md:col-span-1 col-span-3">
          <p class="font-bold mb-2">Rates</p>
          <p class="font-normal" v-for="(item, index) in rates" :key="index">{{item}}</p>
        </div>
        <div class="md:col-span-1 col-span-3">
          <p class="font-bold mb-2">Help & Support</p>
          <p class="font-normal" v-for="(item, index) in helpSupport" :key="index">{{item}}</p>
        </div>
      </div>
      <div class="px-14 mt-6 flex items-center">
        <img class="w-16" src="@/assets/logo1.png" alt="">
        <p class="ml-auto font-semibold">&copy; 2023 Dolphins</p>
      </div>
    </footer>
  </div>
</template>
